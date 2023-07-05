'use client';

import React from 'react';

interface Props {
  variant?: string;
  title: string;
  icon?: any;
  props?: any;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  variant = 'default',
  title,
  onClick,
  disabled,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      {...rest}
      disabled={disabled}
      className={
        `btn w-full justify-center  transition ease-out hover:shadow-lg px-6 py-2 text-white  rounded flex  space-y-2 ${variant} ` +
        (disabled ? ' disabled' : '')
      }
    >
      {title}
    </button>
  );
};

export default Button;
