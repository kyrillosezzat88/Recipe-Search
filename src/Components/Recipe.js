import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class Recipe extends Component{

    render(){
        
        return(
            <div className='Recipe d-flex justify-content-between align-items-center'>
                <div className='container'>
                    <div className='Details'>
                        <div className='row'>
                            <div className='col-12 col-md-6 d-none d-md-block'>
                                <img  src={this.props.rec.recipe.image} width='90%'/>
                            </div>
                            <div className='col-12 col-md-6'>
                                <h3>{this.props.rec.recipe.label}</h3>
                                <h5>Source: {this.props.rec.recipe.source}</h5>
                                <h6>Digest</h6>
                                    {this.props.rec.recipe.digest.map(dig=>{
                                        return(
                                            <div className='d-flex justify-content-between align-items-center' key={dig.tag}>
                                                <ul className='d-flex justify-content-end align-items-center list-unstyled'>
                                                    <li>- {dig.label}</li>
                                                </ul>
                                                <ul className='d-inline-block d-flex justify-content-start list-unstyled'>
                                                    <li>{Math.floor(dig.total)}</li>
                                                </ul>
                                            </div>
                                        )
                                    })}
                               <Link to='route' target='_blank' onClick={(e)=>{e.preventDefault(); window.open(this.props.rec.recipe.url)}} ><button>Read More</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const MapStateToProps = (state , RecipeID) =>{
    let Recipe_id = RecipeID.match.params.label;
    console.log( 'this is recipe name '+ Recipe_id);
    return{
        rec:state.Recipes.find(rec => rec.recipe.label == Recipe_id)
    }
}

export default connect(MapStateToProps)(Recipe);