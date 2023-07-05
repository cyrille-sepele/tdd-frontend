'use client';

import Image from 'next/image';
import React from 'react';

import Button from '@/app/components/Button';
import uploadIcon from '../../../public/icons/cloud_download.svg';
import CSVIconUploaded from '../../../public/icons/csv-icon.svg';
import CSVIcon from '../../../public/icons/csvIcon.svg';
import FileUploadingProgress from './FileUploadingProgress';

// drag drop file component
const FileUpload = () => {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);

  const [uploaded, setUploaded] = React.useState(false);

  const [file, setFile] = React.useState(Object);

  const [converting, setConverting] = React.useState(false);

  // ref
  const inputRef = React.useRef<HTMLInputElement>(null);

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
    console.log('file ', e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setUploaded(true);
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
    <form
      id="form-file-upload"
      onDragEnter={handleDrag}
      className="relative"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={inputRef}
        type="file"
        id="input-file-upload"
        className="hidden"
        onChange={handleChange}
      />
      <label
        id="label-file-upload"
        htmlFor="input-file-upload"
        className={
          dragActive
            ? ' relative p-6 mb-4 h-96 hover:bg-green-600 cursor-pointer bg-green-600  flex items-center justify-center border border-dashed border-gray-50 text-white rounded-md'
            : 'relatitve p-6 mb-4 h-96 hover:bg-green-600 cursor-pointer  flex items-center justify-center border border-dashed border-gray-50 text-white bg-greenpale rounded-md'
        }
      >
        <div className="w-full mb-2">
          <div className="flex justify-between">
            <div className="flex flex-col items-start opacity-60">
              <div className="text-xl font-bold">Upload CSV files</div>
              <p>Drag and drop your file here or</p>
            </div>
            <div>
              <Image
                className="opacity-60"
                src={uploadIcon}
                alt="Upload icon"
              />
            </div>
          </div>

          <div className="flex pt-16 flex-col justify-center items-center">
            {uploaded ? (
              <>
                <Image className="mb-4" src={CSVIconUploaded} alt="CSV Icon" />
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
      </label>
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
        <Button
          variant="primary"
          onClick={() => launchConversion()}
          title="Convert"
        />
      ) : (
        ''
      )}
    </form>
  );
};

export default FileUpload;
