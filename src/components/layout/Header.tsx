import React, { useState } from 'react';
import { Navbar, MobileNavbar } from '../layout'

import { Menu, X } from 'react-feather';

const Nav: React.FC<{isClicked: boolean }> = ({isClicked}) => {
  if (!isClicked) {
    return (
      <Menu color='#000000' size="24" />
    )
  } else {
    return (
      <X color='#000000' size="24" />
    )
  }
}

const Header: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <header className='m-4 lg:max-w-3xl lg:mx-auto'>
        <div className="flex justify-between items-center">
          <figure>
            <img src="/src/assets/Logo.svg" alt="Little Lemon Logo" className="logo" />
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