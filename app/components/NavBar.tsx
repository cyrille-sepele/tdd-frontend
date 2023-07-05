'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../public/icons/TDD-logo-form.svg';
import SettingsIcon from '../../public/icons/settings_suggest.svg';
import TipsIcon from '../../public/icons/tips_and_updates.svg';
import NavbarProfile from './NavbarProfile';

type Props = {
  _role?: any;
};

const NavBar: React.FC<Props> = ({ _role }) => {
  return (
    <div className="bg-gray-800 flex justify-between items-center px-8 md:px-8">
      <Link className="inline-block" href="/">
        <Image className="py-2" src={Logo} alt="Logo" />
      </Link>
      <div className="flex justify-between items-center">
        <Image className="cursor-pointer mx-8" src={TipsIcon} alt="Tips icon" />

        <Image
          className="cursor-pointer"
          src={SettingsIcon}
          alt="Settings Icon"
        />
        <NavbarProfile />
      </div>
    </div>
  );
};

export default NavBar;
