import React from 'react';
import Navicon from '../../assets/logo-D9NHcesw 1.png'
import giticon from '../../assets/fi_2111432.png'
import { NavLink } from 'react-router';
 import './nav.css';

const Navber = () => {
    return (
        <div>
              <div className="navbar container  max-w-[1200px] mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <nav className="flex gap-5 px-1 text-[#000000] font-medium">
         <NavLink to='/'>Home</NavLink>
        <NavLink to='/Allapps'>Apps</NavLink>
        <NavLink to='/Installedapp'>Installation</NavLink>
       </nav>
      </ul>
    </div>
    <div className='flex gap-2 items-center'>
        <img src={Navicon} />
         <NavLink to='/'><h3 className='font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</h3></NavLink>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    
       <nav className="flex gap-5 px-1 text-[#000000] font-medium">
         <NavLink to='/'>Home</NavLink>
        <NavLink to='/Allapps'>Apps</NavLink>
        <NavLink to='/Installedapp'>Installation</NavLink>
       </nav>
        
  </div>
  <div className="navbar-end">
    
    <a href='https://github.com/Rakibstack' target='_blank' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"> <img src={giticon}/> Contribute</a>
  </div>
</div>
        </div>
    );
};

export default Navber;