import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Ingredients = () => {
    const [name,setName]=useState("")

    const [ingredient,setIngredient]=useState({})
    useEffect(()=>{
        axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`)
        .then(({data})=>setIngredient(data))
    },[name])
   
    const handleKeyDown=(e)=>{
     if(e.key==="Enter"){
setName(e.target.value);
     }
    }
  return (
<>
<input className='ingredient-input' type="text" placeholder='ingredient...' onKeyDown={handleKeyDown}/>
<div className='container'>
  <div className='ingredient-wrapper'>
{ingredient?.drinks?.map((el)=>(
   
    <img className='ingredient-img' src={el.strDrinkThumb}/>
    
   
))}
 </div>
 </div>

</>
  )
}

export default Ingredients