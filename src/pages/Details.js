import React from 'react'

const Details = ({detail}) => {
    console.log(detail);
  return (
   
   <>
  {
    detail.strDrink?  
 <>
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md drink-card">
    <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <img src={detail.strDrinkThumb} alt="profile-picture" />
    </div>
    <div className="p-6 text-center">
      <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        {detail.strIngredient1}
      </h4>
      <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
        {detail.strGlass}
      </p>
      <p>
        {
          detail.strAlcoholic
        }
      </p>
    </div>
    <div className="flex justify-center gap-7 p-6 pt-2">   
      
    </div>
  </div>
  <div className="w-full pt-5 px-4 mb-8 mx-auto ">
  </div>
 </>
  : <p> Никаких деталей нет </p>
  
  }
  

    </>


  )
}

export default Details