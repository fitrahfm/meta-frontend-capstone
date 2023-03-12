import { FunctionComponent, ReactNode } from "react" 
import { Header, Footer } from '../layout'

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}

export default Layout