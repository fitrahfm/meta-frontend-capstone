import { FunctionComponent, ReactNode } from "react" 
import { Header, Footer } from '../layout'

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="lg:max-w-3xl lg:mx-auto">
        { children }
      </div>
      <Footer />
    </>
  )
}

export default Layout