import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='nav'>
      <div>
        <i className='fa-solid fa-angles-right open-nav' />
      </div>
      <div>
        <i className='fa-solid fa-house home'></i>
      </div>
      <div>
        <i className='fa-solid fa-chart-column chart'></i>
      </div>
      <div>
        <i className='fa-solid fa-shuffle temporary'></i>
      </div>
      <div>
        <i className='fa-solid fa-shuffle temporary'></i>
      </div>
      <div>
        <i className='fa-solid fa-shuffle temporary'></i>
      </div>
      <div>
        <i className='fa-solid fa-shuffle temporary'></i>
      </div>
      <div>
        <i className='fa-solid fa-shuffle temporary'></i>
      </div>
    </div>
  );
};

export default Navbar;
