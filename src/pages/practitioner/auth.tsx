import { Auth } from '@supabase/auth-ui-react';
import { NextPage } from 'next';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Page } from '../../components/Page';
import { createSupabaseClient } from '../../supabase';
import { Container } from '../../components/Container';
import { SessionContext } from '../../providers/SessionProvider';
import { SectionHeading } from '../../components/SectionHeading';
import { SectionText } from '../../components/SectionText';

const supabase = createSupabaseClient();

const AuthPage: NextPage = () => {
  const { session } = useContext(SessionContext);
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/practitioner');
    }
  }, [router, session]);

  return (
    <Page title="Auth" hideHeader>
      <Container small className="flex-1 py-12 space-y-6 lg:space-y-16">
        <div className="text-center">
          <SectionHeading>Sign in</SectionHeading>
          <SectionText>
            Sign in for access to the practitioner&apos;s dashboard.
          </SectionText>
        </div>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
          redirectTo="/test"
        />
      </Container>
    </Page>
  );
};

export default AuthPage;
