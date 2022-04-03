import Category from "./componetns/Category";
import {Route, Routes} from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";
import Searched from "./pages/Searched";
import Search from "./componetns/Search";

function App() {
  return (
    <Container>
      <Search/>

      <Category/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 calc(50% - 590px);
`

export default App;
