import type { Session } from '@supabase/supabase-js';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

interface ISessionContext {
  session: Session | null;
  isSessionLoaded: boolean;
  refreshSession: () => Promise<Session | null>;
  endSession: () => Promise<void>;
  getAccessToken: () => Promise<string | null>;
}

type SessionProviderProps = {
  children: React.ReactNode;
};

export const SessionContext = React.createContext<ISessionContext>({
  session: null,
  isSessionLoaded: false,
  getAccessToken: async () => null,
  refreshSession: () =>
    new Promise((resolve) => {
      resolve(null);
    }),
  endSession: () =>
    new Promise((resolve) => {
      resolve();
    }),
});

export const SessionProvider: React.FC<SessionProviderProps> = ({
  children,
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isSessionLoaded, setIsSessionLoaded] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const refreshSession = useCallback(async () => {
    const {
      data: { session: currentSession },
    } = await supabase.auth.getSession();

    if (!currentSession) {
      return null;
    }

    const {
      data: { session: newSession },
    } = await supabase.auth.setSession(currentSession);

    setSession(newSession);

    return newSession;
  }, []);

  const endSession = useCallback(async () => {
    await supabase.auth.signOut();
    queryClient.clear();
    setSession(null);
  }, [queryClient]);

  const loadInitialSession = useCallback(async () => {
    const { data } = await supabase.auth.getSession();

    if (data?.session) {
      setSession(data.session);
    }

    setIsSessionLoaded(true);
  }, []);

  const getAccessToken = useCallback(async () => {
    const { data } = await supabase.auth.getSession();

    return data.session?.access_token ?? null;
  }, []);

  useEffect(() => {
    loadInitialSession();

    supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });
  }, [loadInitialSession]);

  const ctx = useMemo(
    (): ISessionContext => ({
      session,
      refreshSession,
      getAccessToken,
      endSession,
      isSessionLoaded,
    }),
    [session, refreshSession, endSession, getAccessToken, isSessionLoaded],
  );

  return (
    <SessionContext.Provider value={ctx}>{children}</SessionContext.Provider>
  );
};
