import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${p => p.theme.spacing(4)};
  padding-top: ${p => p.theme.spacing(5)};
  margin-bottom: ${p => p.theme.spacing(5)};
`;
