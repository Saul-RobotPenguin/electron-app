import React from 'react';

interface Props {
  className?: string;
}

export const TextField: React.FC<Props> = ({ className, ...args }) => {
  return (
    <input
      className={`bg-yellow-100 px-2 py-3 mt-2 mb-2 border rounded shadow-md w-full  ${className}`}
      type="text"
      {...args}
    />
  );
};
