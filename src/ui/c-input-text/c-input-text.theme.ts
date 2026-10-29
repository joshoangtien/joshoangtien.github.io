import { defineThemes } from '../theme/theme.models';

export const { useTheme } = defineThemes({
  dark: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    focus: {
      backgroundColor: 'rgba(158, 198, 240, 0.12)',
    },
  },
  light: {
    backgroundColor: 'rgba(255, 255, 255, 0.46)',
    borderColor: 'rgba(255, 255, 255, 0.82)',
    focus: {
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
  },
});
