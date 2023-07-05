'use client';

import Image from 'next/image';
import { useState } from 'react';
import Logo from '../public/icons/TDD-logo-form.svg';
import Folders from '../public/icons/folders.svg';
import Button from './components/Button';
import Modal from './components/Modal';
import LoginForm from './components/forms/LoginForm';

const Home = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      {modal ? (
        <Modal>
          <LoginForm />
        </Modal>
      ) : (
        ''
      )}

      <>
        <nav className="mt-9">
          <div className="Tdd-logo flex justify-center items-center">
            <div className="p-2 bg-secondaryBG rounded">
              <Image src={Logo} alt="TDD-logo" />
            </div>
          </div>
        </nav>
        <main className="sm:container sm:mx-auto px-4 grid place-items-center max-h-screen h-[75vh] py-4">
          <div className="flex flex-col space-y-3 justify-center items-center relative max-w-2xl w-full">
            <h1 className="text-4xl mb-4 font-bold  text-greenpale">
              Welcome to TDD app
            </h1>
            <p className="text-black mb-4 text-base text-center max-w-sm font-neueLeiden ">
              Welcome to TDD, the utility of conversion for a greater perfomance
            </p>
            <div className="flex pt-4 z-20">
              <Button title="Login" onClick={() => setModal(true)} />
            </div>
            <div className="mt-8 ">
              <Image src={Folders} alt="" />
            </div>
          </div>
        </main>
        <footer>
          <h3 className=" font-neueLeiden text-black text-sm text-center">
            Copywirght ©2023
          </h3>
        </footer>
      </>
    </div>
  );
};

export default Home;
