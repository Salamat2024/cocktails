import React from 'react'

const Recipe = ({detail}) => {
  console.log(detail);
  return (
    <>
    
 
    <div className='recipe-container'>
      <div className='recipe '>
      <div className='recipe-wrapper animate__animated animate__fadeInUp '> 
  
        {detail.strInstructions}
    </div>
    </div>
    </div>
    
    
    </>
  )
}

export default Recipe