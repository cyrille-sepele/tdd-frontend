'use client';

import Button from '@/app/components/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import CSVIconUploaded from '../../../public/icons/csv-icon.svg';
import CSVIcon from '../../../public/icons/csvIcon.svg';
import { fileTypeValidator } from '../hooks/fileTypeValidator';
import FileUploadingProgress from './FileUploadingProgress';
import UploadPlaceholder from './UploadPlaceholder';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './WarningNotification';

// Animating button

const dropIn = {
  hidden: {
    y: -100,
    zIndex: -1,
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    zIndex: 1,
    transition: {
      duration: 0.2,
      type: 'spring',
      damping: 35,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

// drag drop file component
const FileUpload = () => {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);

  const [uploaded, setUploaded] = React.useState(false);

  const [file, setFile] = React.useState(Object);

  const [converting, setConverting] = React.useState(false);

  // ref
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Notification

  // handle drag events
  const handleDrag = function (e: any) {
    e.preventDefault();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e: any) {
    console.log('dropped');
    e.preventDefault();

    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      console.log(e.dataTransfer.items);
      setFile(e.dataTransfer.files[0]);
      setUploaded(true);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e: any) {
    const ext = e.target?.files[0]?.name.split('.').pop();

    if (fileTypeValidator(ext)) {
      notify();
      setUploaded(false);
    } else {
      if (e.target.files && e.target.files[0]) {
        setFile(e.target.files[0]);
        setUploaded(true);
      }
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const launchConversion = () => {
    setConverting(true);
  };

  return converting ? (
    <FileUploadingProgress filename={file.name} />
  ) : (
    <div className="w-full">
      <ToastContainer />

      <form
        id="form-file-upload"
        className="w-full items-center flex flex-col"
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputRef}
          type="file"
          id="input-file-upload"
          className="hidden"
          onChange={handleChange}
        />
        <motion.label
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          id="label-file-upload"
          htmlFor="input-file-upload"
          className={
            dragActive
              ? ' relative p-6 mb-4 w-full h-72 hover:bg-green-600 cursor-pointer bg-green-600  flex items-center justify-center border border-dashed border-gray-50 text-white rounded-md'
              : 'relatitve p-6 mb-4 w-full h-72 hover:bg-green-600 cursor-pointer  flex items-center justify-center border border-dashed border-gray-50 text-white bg-greenpale rounded-md'
          }
        >
          <div className="w-full mb-2">
            <UploadPlaceholder state="" />

            <div className="flex pt-16 flex-col justify-center items-center">
              {uploaded ? (
                <>
                  <Image
                    className="mb-4"
                    src={CSVIconUploaded}
                    alt="CSV Icon"
                  />
                  <div className="text-xl mb-4 font-bold">{file.name}</div>
                </>
              ) : (
                <>
                  <Image src={CSVIcon} alt="CSV Icon" />
                  <button
                    className="hover:underline-offset-1 cursor-pointer mt-2"
                    onClick={onButtonClick}
                  >
                    Click to upload a file
                  </button>
                </>
              )}
            </div>
          </div>
        </motion.label>
        {dragActive && (
          <div
            id="drag-file-element"
            className="w-full  h-full absolute rounded top-0 right-0 left-0 bottom-0"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}

        {uploaded ? (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Button
              variant="primary"
              onClick={() => launchConversion()}
              title="Convert"
            />
          </motion.div>
        ) : (
          ''
        )}
      </form>
    </div>
  );
};

export default FileUpload;
