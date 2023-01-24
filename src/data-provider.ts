import qs, { IStringifyOptions } from 'qs';
import fetch from 'unfetch';
import {
  CreateParams,
  CreateResult,
  DataProvider,
  DeleteManyParams,
  DeleteManyResult,
  DeleteParams,
  DeleteResult,
  GetListParams,
  GetListResult,
  GetManyParams,
  GetManyReferenceParams,
  GetManyReferenceResult,
  GetManyResult,
  GetOneParams,
  GetOneResult,
  UpdateManyParams,
  UpdateManyResult,
  UpdateParams,
  UpdateResult,
} from 'ra-core';
import { SupabaseClient } from '@supabase/supabase-js';
import { createAuthenticatedFetch } from '@jambff/ra-supabase-next-auth';

const stringifyQuery = (queryParameters: any) =>
  qs.stringify(queryParameters, {
    arrayFormat: 'brackets',
    encodeValuesOnly: true,
  } as IStringifyOptions);

const isIdObject = (
  item: number | string | { id: number | string },
): item is { id: number | string } => typeof item === 'object' && 'id' in item;

type Query = {
  include?: Record<string, string>;
};

type ListQuery = Query & {
  limit: number;
  offset: number;
  sort?: Record<string, string>;
  filter?: Record<string, string>;
  q?: string;
};

const getQuery = ({ meta }: Omit<GetOneParams, 'id'>) => {
  const query: Query = {};

  if (meta?.include) {
    query.include = meta.include;
  }

  return query;
};

const getListQuery = ({
  pagination,
  sort,
  filter,
  meta,
}: GetListParams | GetManyReferenceParams) => {
  const { page, perPage } = pagination;
  const query: ListQuery = {
    limit: perPage,
    offset: (page - 1) * perPage,
    ...getQuery({ meta }),
  };

  if (Object.keys(sort)) {
    query.sort = { [sort.field]: sort.order.toLowerCase() };
  }

  const { q, ...filters } = filter;

  if (meta?.filter) {
    Object.assign(filters, meta.filter);
  }

  if (q) {
    query.q = q;
  }

  query.filter = Object.entries(filters).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: `equals:${value}`,
    }),
    {},
  );

  return query;
};

export const getDataProvider = (
  baseUrl: string,
  supabase: SupabaseClient,
): DataProvider => {
  const authenticatedFetch = createAuthenticatedFetch(supabase);

  return {
    getList: async (
      resource: string,
      params: GetListParams,
    ): Promise<GetListResult> => {
      const url = new URL(`/${resource}`, baseUrl);

      url.search = stringifyQuery(getListQuery(params));

      const res = await fetch(url.href);
      const data = await res.json();

      return {
        data: data.items,
        total: data.total,
      };
    },

    getOne: async (
      resource: string,
      params: GetOneParams,
    ): Promise<GetOneResult> => {
      const url = new URL(`/${resource}/${params.id}`, baseUrl);

      url.search = stringifyQuery(getQuery(params));

      const res = await fetch(url.href);
      const data = await res.json();

      return { data };
    },

    getMany: async (
      resource: string,
      params: GetManyParams,
    ): Promise<GetManyResult> => {
      const url = new URL(`/${resource}`, baseUrl);

      // Account for an array of related objects being passed, rather than an
      // array of IDs.
      const id = (params.ids ?? []).map((item) =>
        isIdObject(item) ? item.id : item,
      );

      url.search = stringifyQuery({ id });

      const res = await fetch(url.href);
      const data = await res.json();

      return { data: data.items };
    },

    getManyReference: async (
      resource: string,
      params: GetManyReferenceParams,
    ): Promise<GetManyReferenceResult> => {
      const url = new URL(`/${resource}`, baseUrl);

      const listQuery = getListQuery(params);

      if (params.target) {
        params.filter[params.target] = `equals:${params.id}`;
      }

      url.search = stringifyQuery(listQuery);

      const res = await fetch(url.href);
      const data = await res.json();

      return {
        data: data.items,
        total: data.total,
      };
    },

    create: async (
      resource: string,
      params: CreateParams,
    ): Promise<CreateResult> => {
      const url = new URL(`/${resource}`, baseUrl);

      const res = await authenticatedFetch(url.href, {
        method: 'POST',
        body: JSON.stringify(params.data),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      return { data };
    },

    update: async (
      resource: string,
      params: UpdateParams,
    ): Promise<UpdateResult> => {
      const url = new URL(`/${resource}/${params.id}`, baseUrl);

      const res = await authenticatedFetch(url.href, {
        method: 'PUT',
        body: JSON.stringify(params.data),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      return { data };
    },

    updateMany: async (
      resource: string,
      params: UpdateManyParams,
    ): Promise<UpdateManyResult> => {
      const url = new URL(`/${resource}`, baseUrl);

      url.search = stringifyQuery({ id: params.ids });

      const res = await authenticatedFetch(url.href, {
        method: 'PUT',
        body: JSON.stringify(params.data),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      return { data: data.items };
    },

    delete: async (
      resource: string,
      params: DeleteParams,
    ): Promise<DeleteResult> => {
      const url = new URL(`/${resource}/${params.id}`, baseUrl);

      await authenticatedFetch(url.href, {
        method: 'DELETE',
      });

      return { data: {} };
    },

    deleteMany: async (
      resource: string,
      params: DeleteManyParams,
    ): Promise<DeleteManyResult> => {
      const url = new URL(`/${resource}`, baseUrl);

      url.search = stringifyQuery({ id: params.ids });

      await authenticatedFetch(url.href, {
        method: 'DELETE',
      });

      return { data: params.ids };
    },
  };
};
