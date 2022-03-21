import styled from 'styled-components'
import Home from "./pages/Home";

function App() {
  return (
    <Section>
      <Home/>
    </Section>
  );
}

const Section = styled.section`
  padding: 0 calc(50% - 590px);
`

export default App;
