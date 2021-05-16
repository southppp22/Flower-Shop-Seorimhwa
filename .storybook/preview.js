import React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../src/common/style/themes/default";
import GlobalStyle from "../src/common/style/GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="*">
            <Story />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  ),
];
