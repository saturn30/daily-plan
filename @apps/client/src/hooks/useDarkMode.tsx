import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

import { STORAGE_KEY } from '@/constants';

const getStorageColorScheme = async () => {
  const result = await AsyncStorage.getItem(STORAGE_KEY.COLOR_SCHEME);

  return result === 'dark' || result === 'light' ? result : '';
};

export const useDarkMode = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [storageColor, setStorageColor] = useState('');
  const systemColor = useColorScheme();

  const loadColorScheme = async () => {
    setStorageColor(await getStorageColorScheme());
    setIsLoading(false);
  };

  const calculateColorScheme = () => {
    if (storageColor.length > 0) {
      return storageColor === 'dark';
    }
    return systemColor === 'dark';
  };

  useEffect(() => {
    void loadColorScheme();
  }, []);

  return { isLoading, isDark: calculateColorScheme() };
};
