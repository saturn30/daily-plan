import styled from '@emotion/native';

import { TEXT_COLOR } from '@/constants';

export const LoginHeader = () => {
  return (
    <S.Wrap>
      <S.Title>Hello Again!</S.Title>
      <S.Desc>
        Welcome Back,{'\n'}
        You’ve Been Missed
      </S.Desc>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `,
  Title: styled.Text`
    font-weight: 700;
    font-size: 36px;
    line-height: 46px;
    color: ${TEXT_COLOR.PRIMARY};
  `,
  Desc: styled.Text`
    margin-top: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${TEXT_COLOR.SECONDARY};
    text-align: center;
  `,
};
