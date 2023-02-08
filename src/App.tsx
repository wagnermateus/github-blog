import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { IssueProvider } from "./contexts/IssuesContexts";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <IssueProvider>
          <Router />
        </IssueProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
