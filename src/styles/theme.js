export const theme = {
  colors: {
    white: '#fafafa',
    black: '#212112',
    green: 'green',
    blue: 'blue',
    red: 'red',
    orange: 'orange',
    teal: 'teal',
    accent: 'purple',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  transition: (prop = '') => `${prop} 250ms linear`,
  spacing: value => `${value * 4}px`,
};
