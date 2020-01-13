import React, {Component} from 'react'

class Recipe extends Component{

    render(){
        
        return(
            <div className='Recipe'>
                <div className='container'>
                  <h1>Recipe Component</h1>
                </div>
            </div>
        )
    }
}
// const Getone = ()=>{
//     let id = this.props.match.params.yield;
//     return{
//         item : this.props.Recipe.find(rec => rec.yield == id)
//     }
// }
export default Recipe;