import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/index.css';
import store from 'src/store/Store.js';
import { Provider } from 'react-redux';
import App from 'src/components/App';
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
