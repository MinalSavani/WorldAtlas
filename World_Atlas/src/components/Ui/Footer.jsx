import React from 'react';
import footerContact from "../../api/footerApi.json";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { IoCallSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace className="text-xl text-blue-400" />,
    IoCallSharp: <IoCallSharp className="text-xl text-blue-400" />,
    TbMailPlus: <TbMailPlus className="text-xl text-blue-400" />,
  };

  return (
    <div>

   
    <footer className="mt-8 bg-stone-800 text-amber-50 py-6">
      <div className="flex flex-wrap justify-between items-center gap-6 px-6">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="flex flex-col items-center w-[250px]" key={index}>
              <div className="mb-1">{footerIcon[icon]}</div>
              <p className="font-semibold">{title}</p>
              <p className="text-sm">{details}</p>
            </div>
          );
        })}
      </div>
     
    </footer>
    <div className='flex flex-wrap justify-between text-l p-5 bg-stone-700  text-gray-300'>
      <div>
          Copyright &copy; 2025 All Right Reserved 
      </div>
      <div className='flex flex-row gap-1'>
        
      <NavLink to= "/">Home</NavLink>
     < NavLink to="/about">About</NavLink>  {/* Ensure leading '/' */}
      <NavLink to="/country">Country</NavLink>
     <NavLink to="/contact">Contact</NavLink>


       

      </div>

    </div>
     </div>
    

  );
};

export default Footer;
