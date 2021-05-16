import React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./common/style/themes/default";
import GlobalStyle from "./common/style/GlobalStyle";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <div className="App">seorimhwa 서림화</div>
      </ThemeProvider>
    </>
  );
}

export default App;
