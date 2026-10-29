import { defineThemes } from '../theme/theme.models';
import { appThemes } from '../theme/themes';

const sizes = {
  small: {
    height: '28px',
    fontSize: '12px',
  },
  medium: {
    height: '44px',
    fontSize: '14px',
  },
  large: {
    height: '40px',
    fontSize: '16px',
  },
};

export const { useTheme } = defineThemes({
  dark: {
    sizes,

    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    dropdownShadow: '0 16px 40px rgba(8, 10, 16, 0.45)',

    option: {
      hover: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
      active: {
        textColor: appThemes.dark.primary.color,
      },
    },

    focus: {
      backgroundColor: 'rgba(158, 198, 240, 0.12)',
    },
  },
  light: {
    sizes,

    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderColor: 'rgba(40, 30, 20, 0.16)',
    dropdownShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',

    option: {
      hover: {
        backgroundColor: '#eee',
      },
      active: {
        textColor: appThemes.light.primary.color,
      },
    },

    focus: {
      backgroundColor: '#ffffff',
    },
  },
});
