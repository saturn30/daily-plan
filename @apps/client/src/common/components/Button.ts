import styled from '@emotion/native';
import { omit } from 'lodash-es';

import { COLOR } from '@/common/constants';

export const BUTTON_THEME = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  WARNING: 'warning',
};

const S = {
  Wrap: styled.TouchableOpacity<{ theme: keyof typeof BUTTON_THEME }>`
    background-color: ${({ theme }) => {
      switch (theme) {
        case BUTTON_THEME.PRIMARY:
          return COLOR.PRIMARY;
        case BUTTON_THEME.SECONDARY:
          return COLOR.SECONDARY;
        default:
          return COLOR.WARNING;
      }
    }};
    border-radius: 24px;
  `,
  Text: styled.Text`
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: white;
  `,
};

export const Button = Object.assign(S.Wrap, omit(S, 'Wrap'));
