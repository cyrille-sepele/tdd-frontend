'use client';
import Image from 'next/image';
import React from 'react';
import AmpironIcon from '../../public/icons/company/ampiron.svg';
import DropdownIcon from '../../public/icons/dropdownIcon.svg';
type Props = {};

const NavbarProfile: React.FC<Props> = () => {
  return (
    <div className="bg-gray-100 p-1 relative ml-8 flex items-center cursor-pointer rounded-full w-8 h-8">
      <Image src={AmpironIcon} alt="" />
      <span>
        <Image
          className="w-1.5 absolute -right-2"
          src={DropdownIcon}
          alt="dropdown icon"
        />
      </span>
    </div>
  );
};

export default NavbarProfile;
