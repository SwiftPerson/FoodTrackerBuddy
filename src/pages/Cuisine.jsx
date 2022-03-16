import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';


const Cuisine = () => {

    const [cuisine, setCuisine] = useState([]);

    let params = useParams();


    useEffect(() => {

        getCuisine(params.id);

    }, [params.id]);



    const getCuisine = async (name) => {

        const check = localStorage.getItem(name);
        if (check) {

            setCuisine(JSON.parse(check))

        } else {
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API}&cuisine=${name}`);
            const recipes = await data.json();

            localStorage.setItem(name, JSON.stringify(recipes.results));
            setCuisine(recipes.results);
        }

    }

    return (
        <div className="EntireBody">
            <Grid>

                {cuisine.map((recipe) => {

                    return (

                        <Card key={recipe.id}>

                            <img src={recipe.image} alt="" />
                            <h4>{recipe.title}</h4>

                        </Card>

                    )

                })}

            </Grid>
        </div>
    )
}

const Grid = styled.div`

    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
    grid-gap: 3rem ;




`;

const Card = styled.div`

img{

    width:100%;
    border-radius: 2rem;


}

a{
    text-decoration:  none;

}

h4{
    text-align: center;
    padding: 1rem;
}

`


export default Cuisine