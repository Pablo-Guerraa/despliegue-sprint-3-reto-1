import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import '../style/header.scss'

export default function Header() {

  const linkActive = ({ isActive })=> isActive ? 'link-active' : 'link-inactive';

  return (
    <header className='header'>
      <img src="https://res.cloudinary.com/dxhgejzwc/image/upload/v1651857493/Sprint-3-reto-1/logo_wfr12j.svg" alt="" />
      <nav className='nav'>
        <BrowserRouter>
          <NavLink to='/features' className={linkActive}>Features</NavLink>
          <NavLink to='/team' className={linkActive}>Team</NavLink>
          <NavLink to='/singIn' className={linkActive}>Sign In</NavLink>
        </BrowserRouter>
      </nav>
    </header>
  )
}
