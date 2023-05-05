import styled from '@emotion/native';

interface Props {
  quote: {
    text: string;
    speaker: string;
  };
}

export const QuoteText = ({ quote }: Props) => {
  return (
    <S.Wrap>
      <S.Text>{`"${quote.text}"`}</S.Text>
      <S.Speaker>{quote.speaker}</S.Speaker>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.View`
    margin-top: 16px;
    padding-left: 16px;
  `,
  Text: styled.Text`
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.color.primaryText};
  `,
  Speaker: styled.Text`
    margin-top: 4px;
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.color.secondaryText};
  `,
};
