import React from 'react'
import { NavLink } from 'react-router-dom'
import Modal from './Modal'

const Header = ({setIsDark}) => {


  return (
  <>

<header className="bg-white shadow-lg h-24 hidden md:flex you">
  <a href="" className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
    <img className="logo" src="https://img.freepik.com/premium-vector/cocktails-logo-inspiration-drink-glass-bar-restaurant_63578-164.jpg?w=740" alt="" />
  </a>
  <nav className="header-links contents font-semibold text-base lg:text-lg">
    <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
      <li className="p-3 xl:p-6 active">
        <NavLink to="/">
          <span>Home</span>
        </NavLink>
      </li>
      <li className="p-3 xl:p-6">
        <NavLink to="/ingredients">
          <span>Ingredients</span>
        </NavLink>
        </li>   
        
    </ul>
  </nav>

  <div className='icon '>

  <i class="fa-solid fa-moon mt-10 mr-5" onClick={()=>setIsDark(true)}></i>
  </div>
  <div className="border flex items-center px-4 lg:px-6 xl:px-8">
    <a href="" className="mr-4 lg:mr-6 xl:mr-8">
      <svg className="h-6 xl:h-8" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search fa-w-16 fa-3x"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
    </a>
    <button className="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">Basket</button>
  </div>
</header>
    
 
  </>
  )
}

export default Header