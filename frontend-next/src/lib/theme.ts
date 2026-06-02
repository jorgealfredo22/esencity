export const theme = {
  colors: {
    primary: '#1a1a1a',
    primaryLight: '#2d2d2d',
    secondary: '#c9a96e',
    secondaryLight: '#d4b97f',
    secondaryDark: '#b8945d',
    white: '#ffffff',
    black: '#000000',
    gray: {
      50: '#f9f9f9',
      100: '#f3f3f3',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
  },
  fonts: {
    primary: 'var(--font-primary)',
    secondary: 'var(--font-secondary)',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
    '4xl': '8rem',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

export type Theme = typeof theme;
