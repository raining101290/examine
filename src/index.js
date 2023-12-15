import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../src/page/i18n';
//import 'bootstrap/dist/css/bootstrap.min.css';  
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>loading</div>}>
    <App />
    </Suspense>
   
  </React.StrictMode>,
  document.getElementById('root')
);

