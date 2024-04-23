import RedTruckCircleIcon from '../RedTruckCircleIcon';

import { RightDottedArrow, LeftDottedArrow } from '@/public/assets/icons';
import OperationsList from './OperationsList';

const OperationMode = () => {
  return (
    <section className="container py-8 px-16 space-y-16">
      <div className="flex-col items-start space-y-8 md:flex-row md:flex-start flex-wrap  ">
        <RedTruckCircleIcon shadow />

        <h2 className="text-4xl md:mx-auto text-nowrap">
          <span className="font-bold border-red-400 border-b-4">Operation</span>{' '}
          Mode
        </h2>
      </div>

      <OperationsList />
    </section>
  );
};

export default OperationMode;

//   <div className="">
//     <Image src={RightDottedArrow} alt={'arrow'} />
//   </div>
//   section
//   <div className="">
//     <Image src={LeftDottedArrow} alt={'arrow'} />
//   </div>

{
  /* <section className="flex-between flex-col">
      <div className="flex-between">
        <div>Left</div>
        <div>Image</div>
      </div>
      
      <div>Step 2</div>
      
      <div>Step 3</div>
    </section> */
}
