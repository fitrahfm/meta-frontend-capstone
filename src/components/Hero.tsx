import { FunctionComponent, ReactNode } from "react" 
import CTAButton from "./CTAButton"

const Layout: FunctionComponent = () => {
  return (
    <>
      <div>Hero</div>
      <CTAButton name="Reserve a Table" target="/" />
    </>
  )
}

export default Layout