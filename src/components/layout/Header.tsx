import React, { useState } from 'react';
import { Navbar, MobileNavbar } from '../layout'

import logo from '../../assets/Logo.svg'
import { Menu, X } from 'react-feather';

const Nav: React.FC<{isClicked: boolean }> = ({isClicked}) => {
  if (!isClicked) {
    return (
      <Menu color="black" size="24" />
    )
  } else {
    return (
      <X color="black" size="24" />
    )
  }
}

const Header: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <header className='m-4 lg:max-w-6xl lg:mx-auto'>
        <div className="flex justify-between items-center">
          <figure>
            <img src={logo} alt="Little Lemon Logo" className="logo" />
          </figure>
          <Navbar />
          <nav className="lg:hidden">
            <a href="#" onClick={() => setIsClicked(!isClicked)}>
              <Nav isClicked={isClicked} />
            </a>
          </nav>
        </div>
      </header>
      <MobileNavbar show={isClicked} />
    </>
  )
}

export default Header