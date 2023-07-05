'use client';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

const dropIn = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 50,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const Modal: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="backdrop-blur z-50 w-full transition-all duration-300 ease-in h-full absolute top-0 left-0 right-0 bottom-0  flex justify-center items-center "
    >
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="shadow-2xl mx-2"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
