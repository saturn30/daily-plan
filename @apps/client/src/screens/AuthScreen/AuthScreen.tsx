import { Layout } from '@/common/components';
import { appAuth } from '@/features/auth';

import { LoginButtons } from './LoginButtons';
import { LoginHeader } from './LoginHeader';

export const AuthScreen = () => {
  return (
    <Layout>
      <LoginHeader />
      <LoginButtons onGuestLogin={appAuth.guestSignIn} />
    </Layout>
  );
};
