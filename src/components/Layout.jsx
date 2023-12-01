import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { GlobalStyle } from './GlobalStyle';
import { AppBar } from './AppBar/AppBar';
import { AppWrapper } from './App.styled';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <GlobalStyle />
      <Toaster toastOptions={{ duration: 1500 }} />

      <AppBar />
      <main>
        <AppWrapper>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </AppWrapper>
      </main>
    </div>
  );
};
