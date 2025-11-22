import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { logger } from './middlewares';
import './index.css';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));


const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, composeEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);