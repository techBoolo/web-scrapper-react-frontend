import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './router.js'
import { RouterProvider } from 'react-router-dom'
import reduxStore from './redux/store.js'
import { Provider as ReduxStoreProvider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxStoreProvider store={reduxStore}>
      <RouterProvider router={router} />
    </ReduxStoreProvider>
  </React.StrictMode>
);

