import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import Themes from './themes'

ReactDOM.render(
<ThemeProvider theme={Themes.default}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</ThemeProvider>,
  document.getElementById('root')
);