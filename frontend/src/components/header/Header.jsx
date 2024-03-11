import React from 'react';
import { useState } from 'react';
import './Header.css'
import { CiMail } from "react-icons/ci";
import { MdPhoneAndroid } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    
    <header>
    <p className="logo">ARTVM</p>
    <div className='header-right'>
      <div className='icon-text'>
        <CiMail className='icon'/>
        <p>Artvm2021@gmail.com</p>
      </div><br/>
      <div className='icon-text'>
        <MdPhoneAndroid className='icon'/>
        <p>+216 28817593</p>
      </div>
    </div>
  </header>
   
  );
}

export default Header;
