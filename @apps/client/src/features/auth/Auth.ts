import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { wrapAsyncLoading } from '../ui';

class Auth {
  constructor() {
    GoogleSignin.configure({
      webClientId:
        '398996921980-ctkbft2geqh66cff5nh99080q741tvvn.apps.googleusercontent.com',
    });
  }

  guestSignIn = async () => {
    try {
      await wrapAsyncLoading(async () => {
        await auth().signInAnonymously();
      });
      console.log('guest login');
    } catch (e) {
      console.error(e);
    }
  };

  googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(
        userInfo.idToken,
      );
      await wrapAsyncLoading(
        async () => await auth().signInWithCredential(googleCredential),
      );
    } catch (e) {
      console.error(e);
    }
  };

  logout = async () => {
    await auth().signOut();
  };
}

export const appAuth = new Auth();
