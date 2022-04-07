import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'

import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import {Link} from "react-router-dom";


const Veggie = () => {

  const [veggie, setVeggie] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getVeggie()
  }, []);


  const getVeggie = async () => {
    const number = 10
    const apiKey = process.env.REACT_APP_API_KEY
    const check = localStorage.getItem('veggie')

    if (check) {
      setVeggie(JSON.parse(check))
      return
    }

    try {
      setIsLoading(true)
      fetch(`https://api.spoonacular.com/recipes/random?number=${number}&tags=vegetarian&apiKey=${apiKey}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.recipes)
          localStorage.setItem('veggie', JSON.stringify(data.recipes))
          setVeggie(data.recipes)
        });
    } catch (error) {
      console.error({error})
      setVeggie([])
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Wrapper>
      <h3>Vegetarian picks</h3>

      <Splide options={{perPage: 3, arrows: false, pagination: false, drag: 'free', gap: '5rem'}}>
        {veggie.map(recipe => {
          return (
            <SplideSlide key={recipe.id.toString()}>
              <Link to={'/recipe/' + recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title}/>
                  <Gradient/>
                </Card>
              </Link>
            </SplideSlide>
          )
        })}
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0;
`

const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
`

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

export default Veggie;

