import {Link} from "react-router-dom";
import {GiKnifeFork} from "react-icons/gi";
import styled from "styled-components";

import Search from "./componetns/Search";
import Category from "./componetns/Category";
import RoutesList from "./router/routes";

function App() {
  return (
    <Container>
      <Nav>
        <GiKnifeFork/>
        <Logo to={'/'}>deliciousss</Logo>
      </Nav>
      <Search/>
      <Category/>

      <RoutesList />
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
