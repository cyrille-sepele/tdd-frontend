'use client';

import Image from 'next/image';
import React from 'react';

type Props = {
  companies: any;
};

const Footer: React.FC<Props> = ({ companies }) => {
  return (
    <footer className="w-full flex justify-center md:w-full md:flex md:justify-center absolute md:mb-8">
      <div className="w-2/3 flex md:w-1/4 md:flex footer justify-evenly md:justify-evenly rounded-full p-2 border-2 border-gray-100">
        {companies.map((src: string) => {
          <Image src={src} alt="Logo entreprise" />;
        })}
      </div>
    </footer>
  );
};

export default Footer;
