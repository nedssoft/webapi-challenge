import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styled/GlobalStyles";
const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
function App() {
  return (
    <React.Fragment>
    <GlobalStyle />
    <AppWrapper>
      <h1>Hello</h1>
    </AppWrapper>
    </React.Fragment>
  );
}

export default App;
