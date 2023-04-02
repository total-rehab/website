import {
  createOpenApiClient,
  OpenApiClient,
  OpenApiClientError,
} from '@jambff/oac';
import { useContext } from 'react';
import { SessionContext } from '../providers/SessionProvider';

export const useAuthenticatedTotalRehabApi = (): OpenApiClient => {
  const { session, refreshSession, endSession } = useContext(SessionContext);
  const baseURL = process.env.API_BASE_URL;

  if (!baseURL) {
    throw new Error('Total Rehab API base URL not set');
  }

  return createOpenApiClient({
    baseURL,
    getAccessToken: () => session?.access_token,
    refreshAccessToken: async () => {
      const newSession = await refreshSession();
      const newAccessToken = newSession?.access_token;

      if (!newAccessToken) {
        await endSession();

        return;
      }

      return newAccessToken;
    },
    onError: (err: OpenApiClientError) => {
      // eslint-disable-next-line no-console
      console.error(err);

      if (err.statusCode === 401) {
        endSession();
      }
    },
  });
};
