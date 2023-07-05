import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import FileUpload from './components/FileUpload';

const page = () => {
  return (
    <>
      <NavBar />
      <div className=" py-8  max-w-xl px-2 mx-auto h-[90vh] flex items-center justify-center">
        <FileUpload />
      </div>

      <Footer _companies={undefined} />
    </>
  );
};

export default page;
