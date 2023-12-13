import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'src/components/App';
import { Provider } from 'react-redux';
import store from 'src/store/Store.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
reportWebVitals();
