import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import SurveyProvider from './context/SurveyContext';

const Root = () => {
  return (
    <SurveyProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SurveyProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
