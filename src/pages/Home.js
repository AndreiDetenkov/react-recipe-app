import React from 'react';
import styled from "styled-components";

import Popular from "../componetns/Popular";
import Veggie from "../componetns/Veggie";

const Home = () => {
  return (
    <Section>
      <Veggie/>
      <Popular/>
    </Section>
  );
};

const Section = styled.section`
  padding: 0 calc(50% - 590px);
`

export default Home;
