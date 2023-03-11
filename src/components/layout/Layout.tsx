import { FunctionComponent, ReactNode } from "react" 
import { Header } from '../layout'

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
    </>
  )
}

export default Layout