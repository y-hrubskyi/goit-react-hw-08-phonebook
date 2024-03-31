import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { GlobalStyle } from 'styles/GlobalStyle';
import { AppBar } from '../AppBar/AppBar';
import { Container, Main } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <GlobalStyle />
      <Toaster toastOptions={{ duration: 1500 }} />

      <AppBar />
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
