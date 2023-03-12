import { FunctionComponent, ReactNode } from "react" 
import CTAButton from "./CTAButton"

import HeroImage from '../assets/restauranfood.jpg';

const Layout: FunctionComponent = () => {
  return (
    <>
      <div className="bg-[#495E57] px-4 py-6">
        <div className="lg:max-w-6xl lg:h-60 lg:mx-auto lg:flex lg:justify-between">
          <div className="copy lg:w-96">
            <h1 className="text-2xl text-[#FBB004] mb-2">Little Lemon</h1>
            <h3 className="text-lg text-white mb-8">Chicago</h3>
            <p className="text-white mb-4">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <CTAButton name="Reserve a Table" target="/" />
          </div>
          <figure className="hidden lg:block lg:w-80 lg:h-80 lg:overflow-hidden rounded-3xl">
            <img src={ HeroImage } alt="Restaurant Food" />
          </figure>
        </div>
      </div>
    </>
  )
}

export default Layout