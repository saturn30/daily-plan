import auth from '@react-native-firebase/auth';

import { wrapAsyncLoading } from '../ui';

class Auth {
  guestSignIn = async () => {
    await wrapAsyncLoading(async () => {
      await auth().signInAnonymously();
    });
    console.log('guest login');
  };

  logout = async () => {
    await auth().signOut();
  };
}

export const appAuth = new Auth();
