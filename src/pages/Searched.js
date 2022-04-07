import {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const {search} = useParams();

  useEffect(() => {
    getSearched(search)
  }, [search])

  const getSearched = async (query) => {
    const apiKey = process.env.REACT_APP_API_KEY

    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`);
    const data = await response.json();
    setSearchedRecipes(data.results)
  }

  return (
    <Grid>
      {searchedRecipes.map(item => {
        return (
          <Link to={'/recipe/' + item.id}>
            <Card key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Card>
          </Link>
        )
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`

export default Searched;
