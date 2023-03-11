import { createOpenApiClient, OpenApiClient } from '@jambff/oac';

export const useTotalRehabApi = (): OpenApiClient => {
  const baseURL = process.env.API_BASE_URL;

  if (!baseURL) {
    throw new Error('Total Rehab API base URL not set');
  }

  return createOpenApiClient({
    baseURL,
    onError: console.error,
  });
};
