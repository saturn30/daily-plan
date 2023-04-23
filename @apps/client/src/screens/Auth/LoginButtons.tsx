import styled from '@emotion/native';

export const LoginButtons = () => {
  return (
    <S.Wrap>
      <S.Button>
        <S.ButtonText>Sign In With Google</S.ButtonText>
      </S.Button>

      <S.Button>
        <S.ButtonText>Sign In With Apple</S.ButtonText>
      </S.Button>

      <S.Button>
        <S.ButtonText>Sign In With Guest</S.ButtonText>
      </S.Button>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.View`
    flex: 1;
  `,
  Button: styled.TouchableOpacity`
    display: flex;
    align-items: center;
    margin: 0 32px;
    padding: 18px;
    background-color: ${({ theme }) => theme.color.tint};
    border: 1.5px solid ${({ theme }) => theme.color.tintLine};
    border-radius: 20px;

    & + & {
      margin-top: 24px;
    }
  `,
  ButtonText: styled.Text`
    color: ${({ theme }) => theme.color.primaryText};
  `,
};
