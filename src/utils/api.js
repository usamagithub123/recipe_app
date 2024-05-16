const BASE_URL='https://api-recipe.vercel.app/'

const END_POINTS={
    recipes:"recipes",
    recipesId:"recipes/:id",
}

export const fetchRecipes=async()=>{
    const url =`${BASE_URL}${END_POINTS.recipes}`
    return await fetchData(url)
}

export const fetchRecipesById=async(id)=>{
    const url =`${BASE_URL}${END_POINTS.recipesId}`.replace(':id',id)
   return await fetchData(url)
}
 async function fetchData(url){
    try{
      const response= await fetch(url)
      if(!response.ok){
        console.log('response failed')
      }
      return await response.json()
    }
    catch(error){
      console.log(error)
    }
  
  }