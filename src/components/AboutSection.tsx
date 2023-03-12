import React from 'react';

import ImageA from '../assets/mario-and-adrian-a.jpg'
import ImageB from '../assets/mario-and-adrian-b.jpg'

const AboutSection: React.FC = () => {
  return (
    <div className="lg:h-96 px-4 py-6">
      <div className="lg:max-w-6xl lg:mx-auto lg:flex lg:justify-between lg:items-start">
        <div className="copy lg:w-96">
          <h1 className="text-2xl text-[#FBB004] mb-2">Little Lemon</h1>
          <h3 className="text-lg text-gray-600 mb-8">Chicago</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu tincidunt nisl, et placerat mauris. Etiam ultrices urna eget tellus malesuada dictum. Aliquam blandit sem ut nibh tempor, sit amet placerat felis luctus.
          </p>
        </div>
        <div className="relative h-60 lg:w-1/2 lg:h-80">
          <figure className="relative w-3/4 lg:block lg:w-80 lg:h-fit lg:overflow-hidden rounded-lg z-10">
            <img src={ ImageA } alt="Mario and Adrian" />
          </figure>
          <figure className="w-3/4 absolute bottom-0 right-0 lg:block lg:w-80 lg:h-54 z-0 lg:overflow-hidden rounded-lg">
            <img src={ ImageB } alt="Mario and Adrian" />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default AboutSection;