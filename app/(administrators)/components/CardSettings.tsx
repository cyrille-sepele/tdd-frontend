'use client';

import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

type Props = {
  icon: any;
  title: string;
  description: string;
  link: string;
};

const Card: React.FC<Props> = ({ icon, title, description, link }) => {
  return (
    <Link href={link}>
      <div className=" bg-greenpale rounded flex flex-col space-y-2">
        <Image src={icon} alt="icon" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Card;
