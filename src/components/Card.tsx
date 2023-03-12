import React from 'react';

interface ICardProps {
  children: React.ReactNode,
  padding: string,
  bgColor: string
}

const Card: React.FC<ICardProps> = ({children, padding, bgColor}) => {
  return (
    <div className={`rounded-lg shadow-md overflow-hidden p-${padding} bg-[${bgColor}]`}>
      { children }
    </div>
  )
}

export default Card;