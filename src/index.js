import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainRouter from './routers/MainRouter';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Provider } from "react-redux";
import { store } from "./redux";

const AppProvider = () => {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
