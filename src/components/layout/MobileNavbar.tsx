import { FunctionComponent, useState } from "react"
import * as Icon from 'react-feather';

import NavLinks from '../../data/navigation.json';

const MobileNavbar: FunctionComponent<{show: boolean}> = ({show}) => {
  const [selectedNav, setSelectedNav] = useState('Home');

  return (
    <nav className={`flex flex-col m-8 gap-4 lg:hidden ${show ? '' : 'hidden'}`}>
      {
        NavLinks.data.map((data) => {
          const label:string = data.icon;
          const SelectedIcon = Icon[label];

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
              <SelectedIcon color={ data.name === selectedNav 
                ? '#ffffff'
                : '#000000' }
                size="24"
              />
              <h1>{ data.name }</h1>
            </a>
          )
        })
      }
    </nav>
  )
}

export default MobileNavbar;