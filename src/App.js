import { GlobalStyle, WrapperContainer, Div } from "./App-styled";
import AllRouter from "./routers/client";

function App() {
  return (
    <>
      <GlobalStyle />
      <WrapperContainer>
        <AllRouter />
      </WrapperContainer>
    </>
  );
}

export default App;
  