import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import LoginForm from '../components/forms/LoginForm';
import { companies } from '../context/companies';
import FileUpload from './components/FileUpload';

const page = () => {
  return (
    <>
      <NavBar />
      <LoginForm />
      <FileUpload />
      <Footer companies={companies} />
    </>
  );
};

export default page;
