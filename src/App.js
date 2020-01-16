import React , {Component} from 'react';
import './Styles/App.css'
import {BrowserRouter , Route , Switch , Link} from 'react-router-dom'
import Home from './Components/Home'
import Search from './Components/Search'
import Recipe from './Components/Recipe'
class App extends Component {
  render(){
    return (
      <BrowserRouter>
         <div className="App">
          <h1 className='text-center text-uppercase'><Link to='/'>Recipe Search</Link></h1>
          <Switch>
            <Route exact path = '/' component={Search} />
            <Route  path='/Search' component={Home} />
            <Route path='/:label' component={Recipe} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
