import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styled/GlobalStyles";
import Projects from "./Projects/Projects";
import { BrowserRouter as Router } from "react-router-dom";
const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AppWrapper>
        <Router>
          <Projects />
        </Router>
      </AppWrapper>
    </React.Fragment>
  );
}

export default App;
