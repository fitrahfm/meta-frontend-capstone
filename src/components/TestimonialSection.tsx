import React from 'react';
import TestiCard from './TestiCard';

import Star from '../assets/star.svg';

import Duman from '../assets/duman.jpg';
import Alexander from '../assets/alexander.jpg';
import Samir from '../assets/samir.jpg';

const TestimonialSection: React.FC = () => {
  return (
    <section role="testimonial" className='my-4 p-4 pb-12 bg-gray-300'>
      <div className="lg:max-w-6xl lg:mx-auto ">
        <header className="flex justify-center items-center m-12">
          <h1 className="text-4xl">Testimonial</h1>
        </header>
        <div className="flex flex-col justify-center gap-4 w-64 mx-auto md:flex-row md:w-full">
          <TestiCard>
            <div className="mx-4 flex">
              <img className="w-8" src={Star} alt="Star" />
              <img className="w-8" src={Star} alt="Star" />
              <img className="w-8" src={Star} alt="Star" />
              <img className="w-8" src={Star} alt="Star" />
              <img className="w-8" src={Star} alt="Star" />
            </div>
            <div className="flex justify-start items-center gap-6 bg-white m-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src={Duman} alt="Duman" />
              </div>
              <h1 className="font-bold">Duman</h1>
            </div>
            <p className="m-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu tincidunt nisl, et placerat mauris. Etiam ultrices urna eget tellus malesuada dictum. Aliquam blandit sem ut nibh tempor, sit amet placerat felis luctus.</p>
          </TestiCard>
          <TestiCard>
            <div className="mx-4 flex">
              <img className="w-8" src={Star} alt="Star" />
              <img className="w-8" src={Star} alt="Star" />
              <img className="w-8" src={Star} alt="Star" />
              <img className="w-8" src={Star} alt="Star" />
              <img className="w-8" src={Star} alt="Star" />
            </div>
            <div className="flex justify-start items-center gap-6 bg-white m-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src={Alexander} alt="Alexander" />
              </div>
              <h1 className="font-bold">Alexander</h1>
            </div>
            <p className="m-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu tincidunt nisl, et placerat mauris. Etiam ultrices urna eget tellus malesuada dictum. Aliquam blandit sem ut nibh tempor, sit amet placerat felis luctus.</p>
          </TestiCard>
          <TestiCard>
            <div className="mx-4 flex">
              <img className="w-8" src={Star} alt="Star" />
              <img className="w-8" src={Star} alt="Star" />
              <img className="w-8" src={Star} alt="Star" />
              <img className="w-8" src={Star} alt="Star" />
              <img className="w-8" src={Star} alt="Star" />
            </div>
            <div className="flex justify-start items-center gap-6 bg-white m-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src={Samir} alt="Samir" />
              </div>
              <h1 className="font-bold">Samir</h1>
            </div>
            <p className="m-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu tincidunt nisl, et placerat mauris. Etiam ultrices urna eget tellus malesuada dictum. Aliquam blandit sem ut nibh tempor, sit amet placerat felis luctus.</p>
          </TestiCard>
          <TestiCard>
            <div className="mx-4 flex">
              <img className="w-8" src={Star} alt="Star" />
              <img className="w-8" src={Star} alt="Star" />
              <img className="w-8" src={Star} alt="Star" />
              <img className="w-8" src={Star} alt="Star" />
              <img className="w-8" src={Star} alt="Star" />
            </div>
            <div className="flex justify-start items-center gap-6 bg-white m-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src={Duman} alt="Yusron" />
              </div>
              <h1 className="font-bold">Yusron</h1>
            </div>
            <p className="m-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu tincidunt nisl, et placerat mauris. Etiam ultrices urna eget tellus malesuada dictum. Aliquam blandit sem ut nibh tempor, sit amet placerat felis luctus.</p>
          </TestiCard>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection;