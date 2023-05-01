import auth, { type FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isInit, setIsInit] = useState(false);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return unsubscribe;
  }, []);

  return { isInit, isAuth: Boolean(user), user };

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    setIsInit(true);
  }
};
