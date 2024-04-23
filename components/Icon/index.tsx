import Image from 'next/image';

type IconProps = {
  label: string;
  icon: string;
  className?: string;
};

const Icon = ({ icon, label, className }: IconProps) => {
  return (
    <div
      className={`${className} size-[60px] flex-center flex-shrink-0 bg-white rounded-full shadow-[0px_0px_25px_0px_rgba(151,151,151,0.25)]
    `}
    >
      <Image className="mx-auto" src={icon} alt={label} />
    </div>
  );
};

export default Icon;
