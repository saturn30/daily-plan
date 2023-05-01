import { Text } from 'react-native';

import { Layout } from '@/common/components/Layout';
import { SmallCalendarContainer } from '@/features/calendar';

export const HomeScreen = () => {
  return (
    <Layout>
      <SmallCalendarContainer />
      <Text>Home</Text>
    </Layout>
  );
};
