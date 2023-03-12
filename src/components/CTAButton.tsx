import React from 'react';

const CTAButton: React.FC<{ name: string, target: string }> = ({name, target}) => {
  return (
    <h4 className='w-fit h-fit bg-[#FBB004] rounded-lg p-2 lg:p-3 '>
      <a href={ target } type='button'>
        { name }
      </a>
    </h4>
  )
}

export default CTAButton;