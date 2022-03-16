import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled from 'styled-components';

import '@splidejs/splide/dist/css/splide.min.css';
const Popular = () => {

  const [popular, setPopular] = useState([]);

  useEffect(() => {

    getPopular();

  }, [])




  const getPopular = async () => {

    const check = localStorage.getItem('popular');

    if(check){

      setPopular(JSON.parse(check));

    }else{

      const data = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API}&number=9`);

      const items = await data.json();
  
      localStorage.setItem('popular',JSON.stringify(items.recipes));
      console.log(items);
      setPopular(items.recipes);
  
    }

    
  }



  return (
    <div >


      <Wrapper>
        <h3 className="Picks">Hot Picks For today 🍖🍗 </h3>

        <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: "5rem"
        }}>
          {popular.map((recipes) => {

            return (
              <SplideSlide key={recipes.id}>
                <Card >
                  <p>{recipes.title}</p>
                  <img src={recipes.image} alt={recipes.title} />
                  <Gradient/>
                </Card>
              </SplideSlide>
            );

          })}
        </Splide>

      </Wrapper>

    </div>
  );
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

export default Popular
