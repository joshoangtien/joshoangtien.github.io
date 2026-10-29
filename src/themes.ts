import type { GlobalThemeOverrides } from 'naive-ui';

const glassInput = {
  color: 'var(--field-fill)',
  colorFocus: 'color-mix(in srgb, var(--field-fill) 82%, var(--accent))',
  textColor: 'var(--ink)',
  caretColor: 'var(--accent)',
  placeholderColor: 'var(--ink-soft)',
  border: '1px solid var(--field-edge)',
  borderHover: '1px solid color-mix(in srgb, var(--accent) 55%, var(--field-edge))',
  borderFocus: '1px solid var(--accent)',
  borderRadius: '14px',
  heightMedium: '44px',
  fontSizeMedium: '14px',
  boxShadowFocus: 'inset 0 1px 0 var(--glass-inset), 0 8px 24px color-mix(in srgb, var(--accent) 16%, transparent)',
};

export const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#2c5f86',
    primaryColorHover: '#3d739c',
    primaryColorPressed: '#1f4666',
    primaryColorSuppl: '#3d739c',
    bodyColor: '#efe8dc',
    cardColor: 'rgba(255,255,255,0.55)',
    modalColor: '#efe8dc',
    borderColor: 'rgba(40,30,20,0.12)',
    textColorBase: '#16141a',
  },
  Menu: {
    itemHeight: '32px',
  },
  Layout: { color: '#efe8dc' },
  Input: glassInput,
  InputNumber: {
    peers: {
      Input: glassInput,
    },
  },
  AutoComplete: {
    peers: {
      Input: glassInput,
      InternalSelectMenu: { height: '500px' },
    },
  },
};

export const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#9ec6f0',
    primaryColorHover: '#b7d6f6',
    primaryColorPressed: '#7eafdf',
    primaryColorSuppl: '#b7d6f6',
    bodyColor: '#07080c',
    cardColor: 'rgba(255,255,255,0.06)',
    modalColor: '#12141b',
    borderColor: 'rgba(255,255,255,0.14)',
    textColorBase: '#f3eee6',
  },
  Notification: {
    color: '#1a1d24',
  },
  Input: glassInput,
  InputNumber: {
    peers: {
      Input: glassInput,
    },
  },
  AutoComplete: {
    peers: {
      Input: glassInput,
      InternalSelectMenu: { height: '500px', color: '#1a1d24' },
    },
  },
  Menu: {
    itemHeight: '32px',
  },
  Layout: {
    color: '#07080c',
    siderColor: '#10131a',
    siderBorderColor: 'transparent',
  },
  Card: {
    color: 'rgba(255,255,255,0.05)',
    borderColor: 'rgba(255,255,255,0.12)',
  },
  Table: {
    tdColor: 'rgba(255,255,255,0.04)',
    thColor: 'rgba(255,255,255,0.08)',
  },
};
