import React , {Component} from 'react'
import axios from 'axios'
class Search extends Component{
        state ={
            Recipes:[ ],
            Food:''
        }
        getRecipe = (e)=>{
            e.preventDefault();
            this.setState({
                Food:e.target.value
            });
        }
         HandelSupmit = (e)=>{
                e.preventDefault();
                const ID = '1bb39c8f';
                const key = '7d5c848f0c64b5f87a17116d1cecadd0';
                axios.get(`https://api.edamam.com/search?q=${this.state.Food}&app_id=${ID}&app_key=${key}&from=0&to=6&calories=591-722&health=alcohol-free`)
                        .then(res=>{
                            this.setState({
                                Recipes:res.data.hits,
                                Food:''
                            });
                            this.props.GetData(this.state.Recipes);
                        });
            }
        render(){
            return(
                <form className='form-group d-flex justify-content-center' onSubmit={this.HandelSupmit} >
                    <div className='form-group d-flex justify-content-center'>
                        <input type='text' placeholder='Please Enter Food Name' value={this.state.Food} onChange={this.getRecipe}  className='form-control' />
                        <button className='btn btn-success'>Search</button>
                    </div>
                </form>
            )
        }
        
    }
export default Search;