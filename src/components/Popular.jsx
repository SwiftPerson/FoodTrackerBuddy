import { useEffect, useState } from "react";

const Popular = () => {

  const [popular, setPopular] = useState([]);

  useEffect(() => {

    getPopular();

  }, [])


  //36min fix the error 



  const getPopular = async() => {
   
    const data = await fetch("https://api.spoonacular.com/recipes/random?apiKey=db84090c30df433db6e79ae8440833e3&number=9");

    const items = await data.json();

    console.log(items);
    setPopular(items.recipes);
     
  }



  return (
    <div>
      {
       popular.map((recipes)=>{
         return(
          <div key={recipes.id}>
           <img src={recipes.image} alt="food image" />
           <h1>{recipes.title}</h1>
          </div>
         );
          
        })
      }
     
     
    </div>
  );
}





export default Popular
