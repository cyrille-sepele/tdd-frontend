'use client';

import Image from 'next/image';
import React from 'react';

import Button from '@/app/components/Button';
import { useRouter } from 'next/navigation';
import uploadIcon from '../../../public/icons/cloud_download.svg';
import XMLConvert from '../../../public/icons/xmlconvert.svg';

type Props = {
  filename: string;
};

const FileUploadingProgress: React.FC<Props> = ({ filename }) => {
  const router = useRouter();

  return (
    <div>
      <div
        className={
          'relatitve p-6 mb-4  h-96 flex items-center justify-center border border-dashed border-gray-50 text-white bg-greenpale rounded-md'
        }
      >
        <div className="w-full mb-2">
          <div className="flex justify-between">
            <div className="flex flex-col items-start opacity-10">
              <div className="text-xl font-bold">Upload CSV files</div>
              <p>Drag and drop your file here or</p>
            </div>
            <div>
              <Image
                className="opacity-10"
                src={uploadIcon}
                alt="Upload icon"
              />
            </div>
          </div>

          <div className="flex pt-8 flex-col justify-center items-center">
            <div className="flex w-full justify-between mb-1">
              <div className="flex items-center">
                <Image src={XMLConvert} alt="xml file icon" />
                <div className="ml-4  flex flex-col">
                  <span className=" text-xl font-bold text-blue-700 dark:text-white">
                    {filename}
                  </span>
                  <span>Case 4</span>
                </div>
              </div>

              <span className="text-sm font-medium text-blue-700 dark:text-white">
                45 %
              </span>
            </div>
            <div className="w-full mt-6 bg-gray-200 rounded-full h-2.5 dark:bg-gray-100">
              <div
                className="bg-gray-600 h-2.5 rounded-full"
                style={{ width: '45%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {
        <Button
          variant="danger"
          onClick={() => router.push('/convert')}
          title="Cancel"
        />
      }
    </div>
  );
};

export default FileUploadingProgress;
