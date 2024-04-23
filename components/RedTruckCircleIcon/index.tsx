import Image from 'next/image';

import { RedTruck } from '@/public/assets/icons';

type IconProps = {
  shadow?: boolean;
};

const RedTruckCircleIcon = ({ shadow }: IconProps) => {
  const classes = shadow && 'shadow-xl';
  return (
    <div className="relative size-40">
      <div className="absolute top-0 right-0  size-32 rounded-full shadow-circle bg-[#F4F6F9]" />
      <div
        className={`absolute bottom-0 left-0 bg-white size-32 rounded-full flex-center ${classes}`}
      >
        <Image
          className="block m-auto size-16"
          src={RedTruck}
          alt="red-truck"
        />
      </div>
    </div>
  );
};

export default RedTruckCircleIcon;
