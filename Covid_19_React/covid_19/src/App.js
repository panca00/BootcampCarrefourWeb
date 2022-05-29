import React from 'react';
import {StylesProvider} from '@material-ui/styles'
import {CssBaseline} from '@material-ui/core'
import GlobalStyle from './commons/style/global-style';
import Main from './containers/Main/index';
function App() {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <CssBaseline />
        <GlobalStyle />
        <Main />

      </StylesProvider>
    </div>
  );
}

export default App;
