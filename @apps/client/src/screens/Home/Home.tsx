import { Layout } from '@/common/components/Layout';
import { SmallCalendarContainer } from '@/features/calendar';
import { ScheduleContainer } from '@/features/schedule';

export const HomeScreen = () => {
  return (
    <Layout>
      <SmallCalendarContainer />
      <ScheduleContainer />
    </Layout>
  );
};
