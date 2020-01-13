import React , {Component} from 'react';
import './Styles/App.css'
import axios from 'axios'
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Home from './Components/Home'
import Search from './Components/Search'
import Recipe from './Components/Recipe'
class App extends Component {
      state = {
        Recipes:[ ]
    }
    GetData = (recipe)=>{
      let newRecipes = [...recipe];
      this.setState({
        Recipes : newRecipes
      });
      console.log(this.state)
    }
  render(){
    return (
      <BrowserRouter>
         <div className="App">
          <h1 className='text-center text-uppercase'>Recipe Search</h1>
          <Search  GetData={this.GetData}  />
          <Home Recipes = {this.state.Recipes}  />
          <Switch>
            <Route path='/:yield' render={(props) => <Recipe {...props} Recipe={this.state.Recipes} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
