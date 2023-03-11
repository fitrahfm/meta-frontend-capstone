import React, { useState } from 'react';

import { Home, Info, BookOpen, Calendar, Globe, LogIn } from 'react-feather';
import NavLinks from '../../data/navigation.json';

const DynamicIcon: React.FC<{name: string }> = ({name}) => {
  if (name === 'home') {
    return (
      <Home color="black" size="24" />
    )
  } else if (name === 'info') {
    return (
      <Info color="black" size="24" />
    )
  } else if (name === 'book-open') {
    return (
      <BookOpen color="black" size="24" />
    )
  } else if (name === 'calendar') {
    return (
      <Calendar color="black" size="24" />
    )
  } else if (name === 'globe') {
    return (
      <Globe color="black" size="24" />
    )
  } else {
    return (
      <LogIn color="black" size="24" />
    )
  }
}

const MobileNavbar: React.FC<{show: boolean}> = ({show}) => {
  const [selectedNav, setSelectedNav] = useState('Home');

  return (
    <nav className={`flex flex-col m-8 gap-4 lg:hidden ${show ? '' : 'hidden'}`}>
      {
        NavLinks.data.map((data) => {
          const iconLabel = data.icon;

          return (
            <a
              key={ data.name } 
              className={ `
                flex
                p-3
                gap-4
                rounded-lg
                ${ data.name === selectedNav 
                  ? 'bg-[#495E57] text-white'
                  : 'text-black'
                }
            ` }
              href="/"
              onClick={() => setSelectedNav(data.name)}
            >
              <DynamicIcon name={data.icon} />
              <h1>{ data.name }</h1>
            </a>
          )
        })
      }
    </nav>
  )
}

export default MobileNavbar;