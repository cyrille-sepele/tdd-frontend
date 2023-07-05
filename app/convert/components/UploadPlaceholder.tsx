import Image from 'next/image';
import uploadIcon from '../../../public/icons/cloud_download.svg';
import ThreeDotsLoadingAnimation from './ThreeDotsLoadingAnimation';
type Props = {
  state: string;
};

const UploadPlaceholder: React.FC<Props> = ({ state }) => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col items-start ">
        <div className="text-xl ">
          {state === 'loading' ? (
            <div className="flex opacity-80 items-baseline">
              <div className="mr-3">Uploading</div>{' '}
              <ThreeDotsLoadingAnimation />
            </div>
          ) : (
            <div className="opacity-80 ">
              <div className="font-bold">Upload CSV files</div>
              <p className="text-sm">Drag and drop your file here</p>
            </div>
          )}
        </div>
      </div>
      <div>
        <Image className="opacity-80" src={uploadIcon} alt="Upload icon" />
      </div>
    </div>
  );
};

export default UploadPlaceholder;
