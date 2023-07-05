'use client';

import React from 'react';

type Props = {
  type: string;
  title: string;
  id: string;
  placeholder: string;
  name: string;
  icon?: any;
  props?: any;
};

const InputField: React.FC<Props> = ({
  type,
  icon,
  title,
  name,
  id,
  placeholder,
  props,
}) => {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {title}
      </label>
      <div className="relative w-full ">
        <div className="absolute text-gray-400 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {icon}
        </div>
        <input
          name={name}
          type={type}
          {...props}
          id={id}
          className="bg-gray-50 border text-2xl focus:outline-none focus:ring-1 sm:text-sm focus:ring-emerald-500 border-emerald-200 text-gray-900 rounded-lg block w-full pl-12 p-2.5"
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
};

export default InputField;
