import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { AppBar } from 'components/AppBar/AppBar';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Container, Main } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <GlobalStyle />
      <Toaster toastOptions={{ duration: 2500 }} />

      <AppBar />
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
