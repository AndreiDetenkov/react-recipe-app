import {Link, Route, Routes} from "react-router-dom";
import styled from "styled-components";
import {GiKnifeFork} from "react-icons/gi";

import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";
import Search from "./componetns/Search";
import Category from "./componetns/Category";

function App() {
  return (
    <Container>
      <Nav>
        <GiKnifeFork/>
        <Logo to={'/'}>deliciousss</Logo>
      </Nav>
      <Search/>

      <Category/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:recipeId" element={<Recipe />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 calc(50% - 590px);
`

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`

const Nav = styled.div`
  padding: 1rem 0 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  svg {
    font-size: 2rem;
  }
`

export default App;
