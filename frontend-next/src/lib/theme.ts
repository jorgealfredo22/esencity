export const theme = {
  colors: {
    primary: 'oklch(0.15 0.02 120)',
    primaryLight: 'oklch(0.22 0.03 120)',
    secondary: 'oklch(0.65 0.12 155)',
    secondaryLight: 'oklch(0.72 0.10 155)',
    secondaryDark: 'oklch(0.55 0.14 155)',
    accent: 'oklch(0.75 0.10 75)',
    accentLight: 'oklch(0.82 0.08 75)',
    surface: 'oklch(0.98 0.005 120)',
    surfaceAlt: 'oklch(0.96 0.005 120)',
    text: 'oklch(0.15 0.02 120)',
    textSecondary: 'oklch(0.45 0.02 120)',
    textInverse: 'oklch(0.98 0.005 120)',
  },
  fonts: {
    display: 'var(--font-display)',
    sans: 'var(--font-sans)',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem',
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
