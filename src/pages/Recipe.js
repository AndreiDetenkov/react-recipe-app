import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import styled from "styled-components";

const Recipe = () => {
  const {recipeId} = useParams()
  const [recipe, setRecipe] = useState({})
  const [activeTab, setActiveTab] = useState('instructions');

  useEffect(() => {
    fetchRecipe(recipeId)
  }, [recipeId]);


  const fetchRecipe = async (id) => {
    const apiKey = process.env.REACT_APP_API_KEY

    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
    const data = await response.json();
    console.log(data)
    setRecipe(data)
  }

  return (
    <RecipeWrapper>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <Info>
        <Button
          className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab('instructions')}
        >
          Instruction
        </Button>
        <Button
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </Button>
      </Info>
    </RecipeWrapper>
  );
};

const RecipeWrapper = styled.div`
  margin: 10rem 0 5rem;
  display: flex;
  
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  
  h2 {
    margin-bottom: 2rem;
  }
  
  ul {
    margin-top: 2rem;
  }
  
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  font-weight: 600;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  cursor: pointer;
`

const Info = styled.div`
  margin-left: 10rem;
`

export default Recipe;
