import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({cocktail,setDetail}) => {
  const handleClick=()=>{
setDetail(cocktail)
  }
  const getRecipe=()=>{
    setDetail(cocktail)
  }
  return (
    
<div className="card border w-96 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5 ">
    <img className="max-h-20 w-full opacity-80 absolute top-0" style={{zIndex:"-1"}}  src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640" alt="" />
    <div className="profile w-full flex m-3 ml-4 text-white">
      <img className="w-28 h-28 p-1 bg-white rounded-full" src={cocktail.strDrinkThumb} alt=""/>
      <div className="title mt-11 ml-3 font-bold flex flex-col">
        <div className="name break-words">{cocktail.strDrink}</div>

        <div className="add font-semibold text-sm italic dark">{cocktail.strCategory}</div>
      </div>
    </div>
    <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-black-500 space-x-0 my-3.5 mr-3">
      <NavLink to="/details">
      <div className="add border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white" onClick={handleClick}>About</div>
        </NavLink>
       
       
        <NavLink to="/recipe">
   <div className="add border rounded-r-2xl rounded-l-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white"onClick={getRecipe} >Recipe</div> 
 
    </NavLink>
    </div>
  </div>
  
  )
}

export default Card