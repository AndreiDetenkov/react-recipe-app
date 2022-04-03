import React from 'react';
import styled from "styled-components";
import {FaSearch} from "react-icons/fa";

const Search = () => {
  return (
    <StyledForm>
      <div>
        <FaSearch/>
        <input type="text"/>
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  margin: 2rem 20rem 0;
  
  div {
    position: relative;
    width: 100%;
  }
  
  input {
    width: 100%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: white;
  }
`

export default Search;
