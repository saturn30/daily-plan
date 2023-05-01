import styled from '@emotion/native';
import { Image } from 'expo-image';

import { ImageAssets } from '@/common/constants';

interface Props {
  onGuestLogin: () => void;
  onGoogleLogin: () => void;
}

export const LoginButtons = ({ onGuestLogin, onGoogleLogin }: Props) => {
  return (
    <S.Wrap>
      <S.Button onPress={onGoogleLogin}>
        <S.Icon source={ImageAssets.Login.Google} />
        <S.ButtonText>Sign In With Google</S.ButtonText>
      </S.Button>

      <S.Button>
        <S.Icon source={ImageAssets.Login.Apple} />
        <S.ButtonText>Sign In With Apple</S.ButtonText>
      </S.Button>

      <S.Button onPress={onGuestLogin}>
        <S.Icon source={ImageAssets.Login.Guest} />
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
    flex-direction: row;
    justify-content: center;
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
    font-size: 16px;
    color: ${({ theme }) => theme.color.primaryText};
  `,
  Icon: styled(Image)`
    width: 24px;
    height: 24px;
    margin-right: 18px;
  `,
};
