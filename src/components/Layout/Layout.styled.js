import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  margin: 0 auto;
  min-height: 100vh;
  padding-left: ${p => p.theme.spacing(5)};
  padding-right: ${p => p.theme.spacing(5)};
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding-bottom: ${p => p.theme.spacing(5)};
`;
