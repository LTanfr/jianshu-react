import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style';
import { IconFontGlobalStyle } from './statics/iconfont/iconfont';
import App from './App';


ReactDOM.render(
    <Fragment>
      <IconFontGlobalStyle />
      <GlobalStyle />
      <App />
    </Fragment>,
  document.getElementById('root')
);
