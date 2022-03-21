import React, {useState, useEffect} from 'react';

const Popular = () => {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular()
  }, []);


  const getPopular = async () => {
    const number = 10
    const apiKey = process.env.REACT_APP_API_KEY
    fetch(`https://api.spoonacular.com/recipes/random?number=${number}&apiKey=${apiKey}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPopular(data.recipes)
      });

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
