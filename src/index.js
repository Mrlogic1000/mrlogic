import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ParameterContextProvider} from './components/ParameterContext'


ReactDOM.render(
  <ParameterContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </ParameterContextProvider>,
 

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
