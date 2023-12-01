import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { App } from 'components/App';

import { theme } from 'constants/theme';
import { persistor, store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>
  // </React.StrictMode>
);
