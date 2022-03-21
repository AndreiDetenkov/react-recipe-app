import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'

import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';


const Popular = () => {

  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getPopular()
  }, []);


  const getPopular = async () => {
    const number = 10
    const apiKey = process.env.REACT_APP_API_KEY
    const check = localStorage.getItem('popular')

    if (check) {
      setPopular(JSON.parse(check))
      return
    }

    try {
      setIsLoading(true)
      fetch(`https://api.spoonacular.com/recipes/random?number=${number}&apiKey=${apiKey}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.recipes)
          localStorage.setItem('popular', JSON.stringify(data.recipes))
          setPopular(data.recipes)
        });
    } catch (error) {
      console.error({error})
      setPopular([])
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Wrapper>
      <h3>Popular picks</h3>

      <Splide options={{perPage: 4, arrows: false, pagination: false, drag: 'free', gap: '5rem'}}>
        {popular.map(recipe => {
          return (
            <SplideSlide key={recipe.id.toString()}>
              <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title}/>
                <Gradient/>
              </Card>
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
  min-height: 25rem;
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
  }
`

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

export default Popular;
