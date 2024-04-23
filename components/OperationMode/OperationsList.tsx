import Image from 'next/image';

import { OPERATIONS } from '@/constants';
import StepInfo from './StepInfo';

const OperationsList = () => {
  return (
    <ul className="w-full">
      {OPERATIONS.map((operation, index) => {
        const infoClass =
          index % 2 == 1 ? 'order-2 lg:order-2' : 'order-2 lg:order-1';
        const imageClass =
          index % 2 == 1 ? 'order-1 lg:order-1' : 'order-1 lg:order-2';
        return (
          <li
            key={operation.step}
            className="grid lg:grid-cols-2 items-center justify-items-center gap-5"
          >
            <StepInfo
              step={operation.step}
              subtext={operation.subtext}
              label={operation.label}
              additionalClasses={infoClass}
            />
            <div
              className={`${imageClass} w-full sm:h-96 sm:w-96 object-contain lg:h-[450px] lg:w-[450px] flex-center`}
            >
              <Image src={operation.imageUrl} alt="hero-banner" />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default OperationsList;
