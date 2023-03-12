import React from 'react';

const CTAButton: React.FC<{ name: string, target: string }> = ({name, target}) => {
  return (
    <h4 className='w-fit p-4 bg-[#FBB004] rounded-lg'>
      <a href={ target } type='button'>
        { name }
      </a>
    </h4>
  )
}

export default CTAButton;