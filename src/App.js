import Category from "./componetns/Category";
import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Category/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 calc(50% - 590px);
`

export default App;
