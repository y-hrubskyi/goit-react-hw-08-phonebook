import { ScaleLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

export const Loader = () => {
  const theme = useTheme();

  return <ScaleLoader color={theme.colors.accent} />;
};
