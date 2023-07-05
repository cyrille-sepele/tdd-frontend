'use client';

import React from 'react';

import Button from '@/app/components/Button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import LoadingIndicator from './LoadingIndicator';
import UploadPlaceholder from './UploadPlaceholder';

type Props = {
  filename: string;
};

const FileUploadingProgress: React.FC<Props> = ({ filename }) => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={
          'relatitve p-4 md:p-12   w-full h-72 flex flex-col items-center justify-between border border-dashed border-gray-50 text-white bg-greenpale rounded-md'
        }
      >
        <UploadPlaceholder state="loading" />
        <div className="w-full ">
          <LoadingIndicator filename={filename} percentage={80} />
        </div>
        <div className="my-8">
          <Button
            variant="danger"
            onClick={() => router.push('/convert')}
            title="Cancel"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default FileUploadingProgress;
