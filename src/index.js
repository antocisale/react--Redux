import React from 'react';
import ReactDOM from 'react-dom';

//Redux stuff
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';  // se conecta a la API

// PromiseMiddleware sirve para 7
// esperar que la api devuelva  la respuesta 
// de la promesa, y no que se ejecute antes 
// de tiempo

import App from './components/App/App';
import reducers from './reducers';

import './index.css';

// highorder function
const storeMiddleware = applyMiddleware(promiseMiddleware)(createStore);

// igual a esto:
const withMiddleware = applyMiddleware(promiseMiddleware);
const storeWithMiddleware = withMiddleware(createStore);




ReactDOM.render(
    <Provider store={storeWithMiddleware(reducers)}>
        <App />   
    </Provider>
    , document.getElementById('root')
);