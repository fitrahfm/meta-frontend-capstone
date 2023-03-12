import React from 'react';

interface ICardProps {
  children: React.ReactNode,
  width: number,
  padding: string,
  bgColor: string
}

const Card: React.FC<ICardProps> = ({children, width, padding, bgColor}) => {
  return (
    <div className={`rounded-lg shadow-md overflow-hidden p-${padding} bg-[${bgColor}] w-${width/4}`}>
      { children }
    </div>
  )
}

export default Card;