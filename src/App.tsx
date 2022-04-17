import React, { Suspense, lazy } from "react";
import { GlobalStyles } from "./global/styles";
import * as S from "./styles";

const Header = lazy(() => import("./components/header"));
const Home = lazy(() => import("./pages/home"));
const Footer = lazy(() => import("./components/footer"));

function App() {
  return (
    <S.Container>
      <Suspense
        fallback={
          <S.LoadingContainer>
            <h1>Loading...</h1>
          </S.LoadingContainer>
        }
      >
        <GlobalStyles />
        <Header />
        <Home />
        <Footer />
      </Suspense>
    </S.Container>
  );
}

export default App;
