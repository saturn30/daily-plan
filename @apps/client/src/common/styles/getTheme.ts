import { COLOR, TEXT_COLOR } from '@/common/constants';

export const getTheme = ({ isDark }: { isDark: boolean }) => {
  return {
    color: {
      primaryText: isDark ? TEXT_COLOR.DARK_PRIMARY : TEXT_COLOR.LIGHT_PRIMARY,
      secondaryText: isDark
        ? TEXT_COLOR.DARK_SECONDARY
        : TEXT_COLOR.LIGHT_SECONDARY,
      background: isDark ? COLOR.DARK_BACKGROUND : COLOR.LIGHT_BACKGROUND,

      tintLine: isDark ? COLOR.DARK_TINT_LINE : COLOR.LIGHT_TINT_LINE,
      tint: isDark ? COLOR.DARK_TINT : COLOR.LIGHT_TINT,
    },
  };
};
