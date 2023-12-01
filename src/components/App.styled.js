import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  padding-top: ${p => p.theme.spacing(12)};
  padding-bottom: ${p => p.theme.spacing(12)};

  font-size: 20px;
  color: ${p => p.theme.colors.black};
`;

export const PageTitle = styled.h1`
  margin-bottom: ${p => p.theme.spacing(4)};
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.spacing(3)};
`;
