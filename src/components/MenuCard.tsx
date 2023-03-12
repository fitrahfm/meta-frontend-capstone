import React from 'react';
import { Card } from '../components';

interface IMenuCardProps {
  children: React.ReactNode,
  name: string,
  price: string,
  image: string
}

const MenuCard: React.FC<IMenuCardProps> = ({children, name, price, image}) => {
  return (
    <Card padding="0" bgColor="#EDEFEE">
      <figure className='w-96 h-60 overflow-hidden'>
        <img className="w-full max-w-3xl" src={image} alt="" />
      </figure>
      <div className="flex justify-between items-center m-4">
        <h1 className="font-bold text-lg">{ name }</h1>
        <h2>$ { price }</h2>
      </div>
      { children }
    </Card>
  )
}

export default MenuCard;
