import React, { useState,useEffect } from 'react'
import { fetchRecipesById } from '../../utils/api'
import { Link, useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import './RecipeDetails.scss'
function RecipeDetails() {
  const [recipe, setRecipe]=useState({})
  const [loading ,setloading]=useState(true)
  const [isFavorite, setIsFavorite]=useState(false)
  const {id} =useParams()
    
  useEffect(()=>{
    const fetchRecipesData= async()=>{
      try{
        const data = await fetchRecipesById(id)      
        setRecipe(data)
        setloading(false)
      }
      catch{
        setloading(false)
      }    
    }
    fetchRecipesData()
  },[id])

 useEffect(()=>{
    const fav = JSON.parse(localStorage.getItem('fav')) || []
    const isRecipeFav=fav.some(rec=> rec.id === recipe.id)
    setIsFavorite(isRecipeFav)
 },[recipe])

 const handleToggleFav=()=>{
    setIsFavorite(preVal => !preVal)
    const fav =JSON.parse(localStorage.getItem('fav')) || []
    const updateFav= isFavorite ? fav.filter(rec =>rec.id == recipe.id)
    : [...fav,recipe]
    localStorage.setItem('fav',JSON.stringify(updateFav))
 }

  return (
    
    <div>
        {loading ? <Loader/> :
        <div className='details'>
         <Link to={'/'}>Go Back</Link>
         <div className='header'>
            <h2>{recipe.title}</h2>
            <button onClick={handleToggleFav} className='favBtn'>
                {isFavorite ? '+ Add to favorites' : '-remove from favorites'}
            </button>
         </div>
         
            <div className="content">
                <img className='image'src={recipe.image} alt={recipe.title} />
                <div className="recipeInfo">
                <span className='tag level'>{recipe.level}</span>
                <span className='tag time'>{recipe.time}</span>
                <span className='tag veg'>{recipe.isVeg ? "Veg" : "Non-Veg"}</span>
            </div>
            <div className='tags'>
                {recipe.ingredients.map((ing,ind)=>(
                    <span key={ind} className='ingredient'>{ing}</span>
                ))}
            </div>
            <h3>Instruction</h3>
            <ol className='instructions'>
                {recipe.instructions.map((instruction,ind)=>(
                    <li key={ind} >{instruction}</li>
                ))}
            </ol>
            </div>
         </div>

       
  }
     </div>
  
  )
}

export default RecipeDetails