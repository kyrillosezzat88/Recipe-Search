import React , {Component} from 'react'
import {connect} from 'react-redux';
class Search extends Component{
        //Function popup load 
        load = ()=>{
            let load  = document.getElementsByClassName('dot-falling')[0];
            load.style.display = 'flex';
        }
        //function to delay time when click on button to get time to data collect from api
        Redirect = ()=>{
            //call load function
            this.load();
            setTimeout(() => {
                let load  = document.getElementsByClassName('dot-falling')[0];
                load.style.display = 'none';
                this.props.history.push('/Search')
            }, 3000);
        }
        render(){
            return(
                <div className='search'>
                    <form className='form-group d-flex justify-content-center align-items-center' onSubmit={this.props.Recipe} >
                        <div className='form-group d-flex justify-content-center align-items-center'>
                            <input type='text' placeholder='Please Enter Food Name' onChange={this.props.getRecipe}  />
                            <button onClick={this.Redirect} >Search</button>
                        </div>
                    </form>
                    <div className='dot-falling '>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            )
        }
    }
   // Function to Get Data From State from Store (RootReducer (Redux))
    const MapStateToProps = (state)=>{
        return {
            Recipe : state.HandelSupmit,
            getRecipe:state.getRecipe,
            empty: state.Food
        }
    }
export default connect(MapStateToProps)(Search);