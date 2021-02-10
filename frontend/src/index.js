import React, {lazy, Suspense}  from 'react';
import ReactDOM from 'react-dom';
import './estilo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import estados from './reducers/index';

const Header = lazy (() => import('./componentes/cabecalho'))
const Footer = lazy (() => import('./componentes/rodape'))

const store = createStore(
  estados
)

ReactDOM.render(
  <Provider store = {store}>

    <Suspense fallback ={ <h1>Aguarde um momento por favor</h1> }>
    <Header />
    </Suspense>

    <Suspense fallback ={ <h1>estamos quase lá....</h1> }>
    <Footer />
    </Suspense>

  </Provider>,
  document.getElementById('root')
);
