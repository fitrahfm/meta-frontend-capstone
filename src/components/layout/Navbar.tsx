import { FunctionComponent, ReactNode, useState } from "react"
import NavLinks from '../../data/navigation.json';

interface Link {
  icon: string,
  name: string,
  url: string,
}

const navLinks:Link[] = []

const Navbar: FunctionComponent = () => {
  const [selectedNav, setSelectedNav] = useState('Home');
  return (
    <nav className='hidden lg:flex lg:gap-6 lg:justify-center lg:items-center'>
      {
        NavLinks.data.map((data) => {
          return (
            <h1
              key={ data.name }
              data-nav-name={ data.name }
              className={ data.name === selectedNav
                ? 'p-2 rounded-lg bg-[#495E57] text-white'
                : '' }
            >
              <a
                href={data.url}
                onClick={() => setSelectedNav(data.name)}
              >
                { data.name }
              </a>
            </h1>
          )
        })
      }
    </nav>
  )
}

export default Navbar;