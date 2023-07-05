import NavBar from '@/app/(administrators)/components/NavBar';
import UserTable from '@/app/(administrators)/components/UserTable';
import menuBtn from '../../../../../public/icons/menu-btn.svg';
const page = () => {
  const userDetails = [
    {
      id: 0,
      name: 'John',
      email: 'james@gmail.com',
      role: 'user',
      src: menuBtn,
    },
    {
      id: 1,
      name: 'pater',
      email: 'james@gmail.com',
      role: 'user',
      src: menuBtn,
    },
  ];

  return (
    <div>
      <NavBar />
      <main className="max-w-7xl mx-auto px-4">
        <h1 className=" font-semibold text-6xl w-fit text-secondaryBG ">
          users
          <br />
          Configuration
        </h1>
        <UserTable data={userDetails} />
      </main>
    </div>
  );
};

export default page;
