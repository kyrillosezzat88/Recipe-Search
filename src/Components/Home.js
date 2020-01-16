import React , {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
class Home extends Component {
    render(){
        // check if there is data from Store or not 
        const item = this.props.Recipe.length ? (
            //if there is data get it 
            this.props.Recipe.map(food=>{
                return(
                    <div className='col-12 col-md-4' key={food.recipe.label}>
                        <div className='Food'>
                            <img src={food.recipe.image} />
                            <div className='info'>
                                <h5 className='text-danger'>{food.recipe.label}</h5>
                                <h6>Source: <span className='font-bold'>{food.recipe.source}</span></h6>
                                <Link to={'/' + food.recipe.label}><button>view Recipe</button></Link>
                            </div>
                        </div>
                    </div>
                )
            })
        ) : (
            //if cant get data this message will appear 
            <h4 className='text-center text-danger text-bold text-uppercase pt-4 pb-4 w-100 '>Wating To Get Data !! if not Geting Data please Go Back and try again</h4>
        )
        return(
            <div className='Recipes'>
                <div className='container'>
                    <div className='row'>
                        {/* put the result here  */}
                        {item}
                    </div>
                </div>
            </div>
        )
    } 
}
// Function to Get Data From State from Store (RootReducer (Redux))
    const MapStateToProps = (state)=>{
        return{
            Recipe : state.Recipes
        }
    }
//connect Store to this component
export default connect(MapStateToProps)(Home);