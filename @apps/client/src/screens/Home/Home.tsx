import styled from '@emotion/native';

import { Layout } from '@/common/components/Layout';
import { SmallCalendarContainer } from '@/features/calendar';
import { ScheduleContainer, QuotesContainer } from '@/features/schedule';

export const HomeScreen = () => {
  return (
    <Layout>
      <SmallCalendarContainer />
      <S.ContentWrap>
        <QuotesContainer />
        <ScheduleContainer />
      </S.ContentWrap>
    </Layout>
  );
};

const S = {
  ContentWrap: styled.ScrollView``,
};
