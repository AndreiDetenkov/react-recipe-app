import React, {useState, useEffect} from 'react';

const Popular = () => {

  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getPopular()
  }, []);


  const getPopular = async () => {
    const number = 10
    const apiKey = process.env.REACT_APP_API_KEY

    try {
      setIsLoading(true)
      fetch(`https://api.spoonacular.com/recipes/random?number=${number}&apiKey=${apiKey}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPopular(data.recipes)
        });
    } catch (error) {
      console.error({error})
      setPopular([])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      {popular.map(recipe => {
        return <p key={recipe.id.toString()}>{recipe.title}</p>
      })}
    </div>
  );
};

export default Popular;
