import React from 'react'
import { Link } from 'react-router-dom';
const Home = ({Recipes}) => {
        console.log( 'this is Home' + Recipes);
        const item = Recipes.map(food=>{
            return(
                <div className='col-12 col-md-4' key={food.recipe.label}>
                    <div className='Food'>
                        <img src={food.recipe.image} />
                        <div className='info'>
                            <h5 className='text-danger'>{food.recipe.label}</h5>
                            <h6>Source: <span className='font-bold'>{food.recipe.source}</span></h6>
                            <Link to={'/' + food.recipe.yield}><button>view Recipe</button></Link>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div className='Recipes'>
                <div className='container'>
                    <div className='row'>
                      
                        {item}
                    </div>
                </div>
            </div>
        )
    }

export default Home;