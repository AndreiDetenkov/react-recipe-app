import styled from 'styled-components'
import Home from "./pages/Home";
import Category from "./componetns/Category";

function App() {
  return (
    <Section>
      <Category/>
      <Home/>
    </Section>
  );
}

const Section = styled.section`
  padding: 0 calc(50% - 590px);
`

export default App;
