import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled from 'styled-components';

import '@splidejs/splide/dist/css/splide.min.css';

const Vagies = () => {


  const [vaggie, SetVeggie] = useState([]);

  useEffect(() => {

    getVagies();

  }, [])




  const getVagies= async () => {

    const check = localStorage.getItem('vagies');

    if (check) {

      SetVeggie(JSON.parse(check));

    } else {

      const data = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API}&number=9&tags=vegetarian`);

      const items = await data.json();

      localStorage.setItem('vagies', JSON.stringify(items.recipes));
      console.log(items);
      SetVeggie(items.recipes);

    }


  }





  return (
    <div >


      <Wrapper>
        <h3 className="Picks">Our Vegeterian Lovers 🍴 🥦</h3>

        <Splide options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: "5rem"
        }}>
          {vaggie.map((recipes) => {

            return (
              <SplideSlide key={recipes.id}>
                <Card >
                  <p>{recipes.title}</p>
                  <img src={recipes.image} alt={recipes.title} />
                  <Gradient />
                </Card>
              </SplideSlide>
            );

          })}
        </Splide>

      </Wrapper>

    </div>
  )
}


const Wrapper = styled.div`

  margin:4rem 0;

`;

const Card = styled.div`

min-height:25rem;
border-radius:3rem;
position: relative;
overflow:hidden;
img{

  border-radius: 2rem;
  position: absolute;
  left: 0;
  width : 100%;
  height :100%;
  object-fit:cover;

}

p{
  position: absolute;
  z-index : 10;
  left : 50%;
  bottom:0%;
  transform : translate(-50%,0%);
  color:white;
  width:100%;
  text-align:center;
  font-weight: 600;
  font-size : 1rem;
  height : 40%;
  display :flex;
  justify-content:center;
  align-items: center;

}

`;

const Gradient = styled.div`

z-index : 3;
position:absolute;
width:100%;
height:100%;
background :linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)) ;


`;

export default Vagies