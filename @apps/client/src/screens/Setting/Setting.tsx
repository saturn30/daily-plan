import { Text } from 'react-native';

import { Button } from '@/common/components';
import { Layout } from '@/common/components/Layout';
import { appAuth } from '@/features/auth';

export const SettingScreen = () => {
  return (
    <Layout>
      <Text>SettingScreen</Text>
      <Button onPress={appAuth.logout}>
        <Button.Text>로그아웃</Button.Text>
      </Button>
    </Layout>
  );
};
