import React, { Suspense } from 'react';
import './translations/i18n'
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware   } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App';
import './css/index.css';
import i18next from "i18next";

const store = createStore(rootReducer, applyMiddleware(thunk));
const lang = localStorage.getItem('lang') || 'en';
i18next.changeLanguage(lang);
ReactDOM.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root')
);
