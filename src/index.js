import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
//import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import '../src/page/i18n'
//import 'bootstrap/dist/css/bootstrap.min.css';
const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>loading</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
)
// ReactDOM.render(
//   <React.StrictMode>
//     <Suspense fallback={<div>loading</div>}>
//     <App />
//     </Suspense>

//   </React.StrictMode>,
//   document.getElementById('root')
// );
