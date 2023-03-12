import React from 'react';
import { Card } from '../components';

interface ITestiCardProps {
  children: React.ReactNode
}

const TestiCard: React.FC<ITestiCardProps> = ({children}) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden p-4 bg-white w-64">
      { children }
    </div>
  );
}

export default TestiCard;