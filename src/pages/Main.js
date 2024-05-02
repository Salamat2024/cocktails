import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from "../components/Card"

const Main = ({setDetail,isDark}) => {
    const [cocktails,setCocktails]=useState([])
    useEffect(()=>{
    axios("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(({data})=>setCocktails(data.drinks))},[])

console.log(cocktails);
  return (

<>

{
<div className="holder animate__animated animate__zoomIn " style={{backgroundColor:isDark?"#7B7484":"#FEFEDF"}}>
{cocktails.map((el)=>(


<Card cocktail={el} setDetail={setDetail}/>


))}
</div>}

</>

  )
}

export default Main