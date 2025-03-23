import React from 'react';
import {NavLink} from "react-router-dom";
const Header = () => {
  return (
    <header>
      
      
      <div className=' shadow-2xl scroll-ml-6 h-[75px] w-full flex justify-between text-[20px]  items-center bg-stone-800 text-white '>

            <div className='flex flex-row items-center justify-between  w-full px-4'>
              <div className='flex  items-center flex-row'>
                <NavLink to="/">
                <h1 className='text-[30px] ml-20 font-bold'>
                  WorldAtlas
                </h1>
                </NavLink>
              </div>
              <nav>
                <ul className='flex flex-row space-x-6'>
                <li>
                  <NavLink to="/">
                      Home
                  </NavLink>
                </li>
                <li>
                <NavLink to="about">
                    About
                    </NavLink>
                </li>
                <li >
                <NavLink to="/country">
                    Country
                    </NavLink>
                </li>
                <li>
                <NavLink  to="/contact">
                    Contact
                    </NavLink>
                </li>
                <li> 
                <NavLink>
                    
                    </NavLink>
                </li>
        
                </ul>
              </nav>
            </div>
      </div>
    </header>
  );
}

export default Header;
