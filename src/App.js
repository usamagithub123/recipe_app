import { useEffect, useState } from "react";
import { fetchRecipes, fetchRecipesById } from "./utils/api";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import RecipeList from "./components/RecipeList/RecipeList";

function App() {
  const [recipes, setRecipes]=useState([])
  const [loading ,setloading]=useState(false)
  const [searchQuery,setSearchQuery]=useState("")
    
  useEffect(()=>{
    const fetchRecipesData= async()=>{
      try{
        const data = await fetchRecipes()      
        setRecipes(data)
        setloading(false)
      }
      catch{
        setloading(false)
      }    
    }
    fetchRecipesData()
  },[])

  const filteredRecipe=recipes.filter(rec=>rec.title.toLowerCase().includes(searchQuery.toLowerCase()))
  const recipesToDisplay=searchQuery ? filteredRecipe : recipes 
 
  return (
    <div className="App">
      <Header title={"Recipe App"} setSearchQuery={setSearchQuery}/>
   

     {loading ? <Loader name={'recipes is loading'}/> :  <RecipeList recipes={recipesToDisplay}/>}
    
    </div>
  );
}

export default App;
