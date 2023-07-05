'use client';

import { motion } from 'framer-motion';

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
    <motion.button
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      {...rest}
      disabled={disabled}
      className={
        `btn  justify-center  transition ease-out hover:shadow-lg px-6 py-2 text-white  rounded flex  space-y-2 ${variant} ` +
        (disabled ? ' disabled' : '')
      }
    >
      {title}
    </motion.button>
  );
};

export default Button;
