import React from 'react';
import { CTAButton, MenuCard } from '../components';

import GreekSalad from '../assets/foods/greek-salad.jpg';
import LemonDessert from '../assets/foods/lemon-dessert.jpg'
import Bruchetta from '../assets/foods/bruchetta.svg';

const ThisWeekSection: React.FC = () => {
  return (
    <section role="weekly-specials" className='my-4 p-4 lg:max-w-6xl lg:mx-auto lg:mt-20'>
      <header className="flex justify-between items-center mb-8">
        <h1 className="w-1/3 lg:w-3/4 text-2xl">This Week Specials!</h1>
        <CTAButton name="Online Menu" target="/" />
      </header>
      <div className="flex flex-col gap-4 w-64 mx-auto md:flex-row md:w-full">
        <MenuCard name="Greek Salad" price="12.99" image={GreekSalad}>
          <p className="m-4 mb-8">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          <h1 className="m-4 font-bold">
            <a href="/">Order a delivery</a>
          </h1>
        </MenuCard>
        <MenuCard name="Lemon Dessert" price="5.89" image={LemonDessert}>
          <p className="m-4 mb-8">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          <h1 className="m-4 font-bold">
            <a href="/">Order a delivery</a>
          </h1>
        </MenuCard>
        <MenuCard name="Bruchetta" price="7.99" image={Bruchetta}>
          <p className="m-4 mb-8">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          <h1 className="m-4 font-bold">
            <a href="/">Order a delivery</a>
          </h1>
        </MenuCard>
      </div>
    </section>
  )
}

export default ThisWeekSection;