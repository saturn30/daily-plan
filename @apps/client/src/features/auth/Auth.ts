import auth from '@react-native-firebase/auth';

class Auth {
  guestSignIn = async () => {
    await auth().signInAnonymously();
    console.log('guest login');
  };

  logout = async () => {
    await auth().signOut();
  };
}

export const appAuth = new Auth();
