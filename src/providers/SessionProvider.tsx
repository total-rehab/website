import type { Session } from '@supabase/supabase-js';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { createSupabaseClient } from '../supabase';

const supabase = createSupabaseClient();

interface ISessionContext {
  session: Session | null;
  isSessionLoaded: boolean;
  refreshSession: () => Promise<Session | null>;
  endSession: () => Promise<void>;
}

type SessionProviderProps = {
  children: React.ReactNode;
};

export const SessionContext = React.createContext<ISessionContext>({
  session: null,
  isSessionLoaded: false,
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
  const router = useRouter();

  const refreshSession = useCallback(async () => {
    if (!session) {
      return null;
    }

    const {
      data: { session: newSession },
    } = await supabase.auth.setSession(session);

    setSession(newSession);

    return newSession;
  }, [session]);

  const endSession = useCallback(async () => {
    await supabase.auth.signOut();
    queryClient.clear();
    setSession(null);
    router.push('/');
  }, [router, queryClient]);

  const loadInitialSession = useCallback(async () => {
    const { data } = await supabase.auth.getSession();

    if (data?.session) {
      setSession(data.session);
    }

    setIsSessionLoaded(true);
  }, []);

  useEffect(() => {
    loadInitialSession();

    supabase.auth.onAuthStateChange((_event, newSession) => {
      console.log('change');
      setSession(newSession);
    });
  }, [loadInitialSession]);

  const ctx = useMemo(
    (): ISessionContext => ({
      session,
      refreshSession,
      endSession,
      isSessionLoaded,
    }),
    [session, refreshSession, endSession, isSessionLoaded],
  );

  return (
    <SessionContext.Provider value={ctx}>{children}</SessionContext.Provider>
  );
};
