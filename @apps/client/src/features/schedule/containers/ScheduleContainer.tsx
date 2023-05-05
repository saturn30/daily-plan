import styled from '@emotion/native';

export const ScheduleContainer = () => {
  return (
    <S.Wrap>
      {Array(100)
        .fill('AAA')
        .map((value, index) => (
          <S.Text key={`value${index}`}>{value}</S.Text>
        ))}
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.View`
    flex: 1;
    margin-top: 8px;
  `,
  Text: styled.Text``,
};
