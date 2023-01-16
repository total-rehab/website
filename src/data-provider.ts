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
  HttpError,
  UpdateManyParams,
  UpdateManyResult,
  UpdateParams,
  UpdateResult,
} from 'ra-core';
import Cookies from 'js-cookie';

const ACCESS_TOKEN_COOKIE_KEY = 'access_token';

const convertFilters = (filters: Record<string, string>) =>
  Object.entries(filters).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: `equals:${value}`,
    }),
    {},
  );

const stringifyQuery = (queryParameters: any) =>
  qs.stringify(queryParameters, {
    arrayFormat: 'brackets',
    encodeValuesOnly: true,
  } as IStringifyOptions);

type ListQuery = {
  limit: number;
  offset: number;
  sort?: Record<string, string>;
  filter?: Record<string, string>;
  q?: string;
};

const getListQuery = ({
  pagination,
  sort,
  filter,
}: GetListParams | GetManyReferenceParams) => {
  const { page, perPage } = pagination;
  const query: ListQuery = {
    limit: perPage,
    offset: (page - 1) * perPage,
  };

  if (Object.keys(sort)) {
    query.sort = { [sort.field]: sort.order.toLowerCase() };
  }

  const { q, ...filters } = filter;

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

export const getDataProvider = (baseUrl: string): DataProvider => ({
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

    const res = await fetch(url.href);
    const data = await res.json();

    return { data };
  },

  getMany: async (
    resource: string,
    params: GetManyParams,
  ): Promise<GetManyResult> => {
    const url = new URL(`/${resource}`, baseUrl);

    url.search = stringifyQuery({ id: params.ids });

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

    const res = await fetch(url.href, {
      method: 'POST',
      body: JSON.stringify(params.data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_COOKIE_KEY)}`,
      },
    });

    const data = await res.json();

    return { data };
  },

  update: async (
    resource: string,
    params: UpdateParams,
  ): Promise<UpdateResult> => {
    const url = new URL(`/${resource}/${params.id}`, baseUrl);

    const res = await fetch(url.href, {
      method: 'PUT',
      body: JSON.stringify(params.data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_COOKIE_KEY)}`,
      },
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

    const res = await fetch(url.href, {
      method: 'PUT',
      body: JSON.stringify(params.data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_COOKIE_KEY)}`,
      },
    });

    const data = await res.json();

    return { data: data.items };
  },

  delete: async (
    resource: string,
    params: DeleteParams,
  ): Promise<DeleteResult> => {
    const url = new URL(`/${resource}/${params.id}`, baseUrl);

    await fetch(url.href, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_COOKIE_KEY)}`,
      },
    });

    return { data: {} };
  },

  deleteMany: async (
    resource: string,
    params: DeleteManyParams,
  ): Promise<DeleteManyResult> => {
    const url = new URL(`/${resource}`, baseUrl);

    url.search = stringifyQuery({ id: params.ids });

    await fetch(url.href, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_COOKIE_KEY)}`,
      },
    });

    return { data: params.ids };
  },
});
