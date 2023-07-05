import Image from 'next/image';
import React from 'react';
import XMLConvert from '../../../public/icons/xmlconvert.svg';

type Props = {
  filename: string;
  percentage: number;
};

const LoadingIndicator: React.FC<Props> = ({ filename, percentage }) => {
  return (
    <div className="flex pt-8 flex-col justify-center items-center">
      <div className="flex w-full justify-between items-baseline mb-1">
        <div className="flex items-center">
          <Image src={XMLConvert} alt="xml file icon" />
          <div className="ml-4  flex flex-col">
            <span className=" text-sm md:text-md  text-blue-700 dark:text-white">
              {filename}
            </span>
            <span>Case 4</span>
          </div>
        </div>

        <span className="text-sm font-medium text-blue-700 dark:text-white">
          {percentage} %
        </span>
      </div>
      <div className="w-full mt-2  bg-gray-200 rounded-full h-2.5 dark:bg-gray-100">
        <div
          className="bg-gray-600 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
