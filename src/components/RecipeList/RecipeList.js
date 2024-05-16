import React, { useEffect, useState } from 'react'
import './RecipeList.scss'
import {Link} from 'react-router-dom'


function RecipeList({recipes=[]}) {
  const [filteredData,setFilteredData]=useState(recipes)
   useEffect(()=>{
    setFilteredData(recipes)
   },[recipes])

    if(filteredData .length ===0)
        return <div className='noRecipes'>No recipes found, search for different item</div>
      
  const handleFilter=(event)=>{
    const value= event.target.value;
    if(value === ''){
      setFilteredData(recipes)
    }else{
      const filtered= recipes.filter((recipe)=>{
        if(value === 'veg'){
          return recipe.isVeg;
      }else if(value==='non-veg'){
        return !recipe.isVeg;
      }else{
        return recipe.level === value 
      }
    }
    );
    setFilteredData(filtered)
    }
  }
  return (
    <div className='recipeList'>
      <div className='header'>
      <h3 className="title">Checkout these recipes</h3>
      <select onChange={handleFilter} name="filter" id="filter">
        <option value="">All</option>
        <option value="veg">Veg</option>
        <option value="non-veg">Non Veg</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      </div>
   
    <div className="list">
      {filteredData.map(recipe=>(
        <Link to={`/recipe/${recipe.id}`}
         className='linkItem' key={recipe.id}>
        <div key={recipe.id} className='cardContainer'>
            <div className="cardHeader">
                {recipe.title}
            </div>
            <div className="recipeInfo">
                <span className='tag level'>{recipe.level}</span>
                <span className='tag time'>{recipe.time}</span>
                <span className='tag veg'>{recipe.isVeg ? "Veg" : "Non-Veg"}</span>
            </div>
            <img
            className='image'
     
            src={recipe.image}
            alt={recipe.title} />
            </div>
        </Link>

        
      ))}
    </div>
    </div>

  )
}

export default RecipeList