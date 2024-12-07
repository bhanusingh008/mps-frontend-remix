import React, { useState } from 'react';
import './side_menu.css';

const SideMenu = () => {

  return (
    <div className='side-bar'>
      <div className="menu-items">
        <div className='link-container'>
          <a href="/">Home</a>  
        </div>

        <div className='link-container'>
          <a href="/about">Assignments</a>
        </div>

        <div className='link-container'>
         <a href="/contact">Contact</a>  
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
