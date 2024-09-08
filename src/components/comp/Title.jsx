import React from 'react'

const Title = ({text, className}) => {
  return (
    <h2
      className={`relative w-max text-darkBlue font-black py-3 after:h-[8px] after:bg-lightBlue after:absolute
        after:bottom-1 after:right-0 after:rounded-full ${className}`}
    >
      {text}
    </h2>
  );
}

export default Title