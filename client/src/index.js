import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from "react-dom";
import './App.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={ReduxStore()}>
//       <Router>
//         <App />
//       </Router>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );