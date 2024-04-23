import React from 'react';

type StepInfoProps = {
  subtext: string;
  step: number;
  label: string;
  additionalClasses?: string;
};

const StepInfo = ({
  subtext,
  step,
  label,
  additionalClasses,
}: StepInfoProps) => {
  return (
    <div
      className={`${additionalClasses} flex justify-center items-start flex-col lg:max-w-sm`}
    >
      <div className="flex-start mb-4 gap-x-4 font-bold">
        <div className="size-8 rounded-full bg-simblue text-white flex-center p-6">
          {step}
        </div>
        <div className="text-4xl text-red-400">{label}</div>
      </div>
      <p className="text-gray-400">{subtext}</p>
    </div>
  );
};

export default StepInfo;
