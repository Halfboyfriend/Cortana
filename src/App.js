
import "semantic-ui-css/semantic.min.css";
import React, { lazy, Suspense } from "react";
import { Loader } from "semantic-ui-react";
import GlobalStyle from './GlobalStyles';

const Home = lazy(() => import("./pages/Home.js"));



function App() {
  return (
    <Suspense>
      <GlobalStyle/>
       <Home/>
    </Suspense>
  );
}

export default App;
