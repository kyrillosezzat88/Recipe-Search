import axios from 'axios'

//State to store data from api 
let inintState = {
    Recipes:[ ],
    Food:' ',
    //function to store input value to food to use it in api 
    getRecipe:(e)=>{
        e.preventDefault();
        inintState.Food = e.target.value;
    },
    //function to get Data From api and sotred in array using axios
    HandelSupmit:(e)=>{
        e.preventDefault();
        const ID = '1bb39c8f';
        const key = '7d5c848f0c64b5f87a17116d1cecadd0';
        axios.get(`https://api.edamam.com/search?q=${inintState.Food}&app_id=${ID}&app_key=${key}&from=0&to=6&calories=591-722&health=alcohol-free`)
                .then(res=>{
                    inintState.Recipes = res.data.hits;
                    inintState.Food = ' ';
                });
        }
}
const RootReducer = (state=inintState , action)=>{
    return state;
}
export default RootReducer;