import styled from '@emotion/native';
import { type Dayjs } from 'dayjs';

interface Props {
  time: {
    start: Dayjs;
    end: Dayjs;
  };
  color: string;
  title: string;
}

export const Schedule = ({ time, color, title }: Props) => {
  const lineHeight = getLineHeight(time);

  return (
    <S.Wrap>
      <S.TimeWrap>
        <S.Time>{time.start.format('HH:mm')}</S.Time>
        <S.Time>{time.end.format('HH:mm')}</S.Time>
      </S.TimeWrap>
      <S.Line height={lineHeight} color={color} />
      <S.ContentWrap>
        <S.Title>{title}</S.Title>
        <S.Description>
          {time.start.format('HH:mm')} ~ {time.end.format('HH:mm')} (
          {time.end.diff(time.start, 'm')}m)
        </S.Description>
      </S.ContentWrap>
      <S.CheckWrap></S.CheckWrap>
    </S.Wrap>
  );
};

function getLineHeight(time: Props['time']) {
  return (time.end.diff(time.start, 'm') / 15 + 1) * 15;
}

const S = {
  Wrap: styled.View`
    flex-direction: row;
    padding: 0 20px;
  `,
  TimeWrap: styled.View`
    width: 40px;
    justify-content: space-between;
    align-items: center;
  `,
  Time: styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.color.secondaryText};
  `,
  Line: styled.View<{ height: number; color: string }>`
    margin-left: 12px;
    width: 24px;
    height: ${({ height }) => height}px;
    min-height: 100%;
    background-color: ${({ color }) => color};
    border-radius: 100px;
  `,
  ContentWrap: styled.View`
    padding-left: 24px;
    justify-content: center;
  `,
  Title: styled.Text`
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.color.primaryText};
  `,
  Description: styled.Text`
    margin-top: 4px;
    font-size: 12px;
    color: ${({ theme }) => theme.color.secondaryText};
  `,
  CheckWrap: styled.View`
    justify-content: center;
  `,
  CheckBox: styled.TextInput``,
};
