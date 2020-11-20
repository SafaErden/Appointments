import React, { Suspense } from 'react';
import './translations/i18n';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import i18next from 'i18next';
import rootReducer from './reducers/index';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';
import App from './App';
import './css/index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));
const lang = localStorage.getItem('lang') || 'en';
i18next.changeLanguage(lang);
ReactDOM.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root'),
);
