import { FunctionComponent, ReactNode } from "react" 
import { Header, Footer } from '../layout'

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        { children }
      </div>
      <Footer />
    </>
  )
}

export default Layout