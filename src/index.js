import React from 'react';
import store from 'src/store/Store.js';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import 'src/index.css';
import ConnectedApp from 'src/container/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ConnectedApp />
    </React.StrictMode>
  </Provider>,
);
reportWebVitals();
