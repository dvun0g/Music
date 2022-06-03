import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './redux';

import AppRouter from './routes/AppRouter';

import './styles/global.scss';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider  store={store}>
              <AppRouter />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>
);
