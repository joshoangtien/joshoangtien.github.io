import { defineThemes } from './theme.models';

export const { themes: appThemes, useTheme: useAppTheme } = defineThemes({
  light: {
    background: '#efe8dc',
    text: {
      baseColor: '#16141a',
      mutedColor: '#4a4450',
    },
    default: {
      color: 'rgba(255, 255, 255, 0.7)',
      colorHover: 'rgba(255, 255, 255, 0.88)',
      colorPressed: 'rgba(44, 95, 134, 0.14)',
    },
    primary: {
      color: '#2c5f86',
      colorHover: '#3d739c',
      colorPressed: '#1f4666',
      colorFaded: 'rgba(44, 95, 134, 0.16)',
    },
    warning: {
      color: '#c47b16',
      colorHover: '#d4891c',
      colorPressed: '#a56610',
      colorFaded: '#c47b162f',
    },
    success: {
      color: '#2c5f86',
      colorHover: '#3d739c',
      colorPressed: '#1f4666',
      colorFaded: 'rgba(44, 95, 134, 0.16)',
    },
    error: {
      color: '#b4233d',
      colorHover: '#c73a52',
      colorPressed: '#8f1b30',
      colorFaded: '#b4233d2a',
    },
  },
  dark: {
    background: '#12141b',
    text: {
      baseColor: '#f3eee6',
      mutedColor: '#c4bdb2',
    },
    default: {
      color: 'rgba(255, 255, 255, 0.08)',
      colorHover: 'rgba(255, 255, 255, 0.14)',
      colorPressed: 'rgba(255, 255, 255, 0.22)',
    },
    primary: {
      color: '#9ec6f0',
      colorHover: '#b7d6f6',
      colorPressed: '#7eafdf',
      colorFaded: 'rgba(158, 198, 240, 0.18)',
    },
    warning: {
      color: '#f0c27a',
      colorHover: '#f5d09a',
      colorPressed: '#d4a45c',
      colorFaded: '#f0c27a2f',
    },
    success: {
      color: '#9ec6f0',
      colorHover: '#b7d6f6',
      colorPressed: '#7eafdf',
      colorFaded: 'rgba(158, 198, 240, 0.18)',
    },
    error: {
      color: '#e88080',
      colorHover: '#e98b8b',
      colorPressed: '#e57272',
      colorFaded: '#e8808029',
    },
  },
});
