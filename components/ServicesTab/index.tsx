import Image from 'next/image';

import ServicesList from './ServicesList';
import CallToActionButtons from '../CallToActionButtons';
import RedTruckCircleIcon from '../RedTruckCircleIcon';

const ServicesTab = () => {
  return (
    <section className="bg-[#F8FAFB] text-simblue ">
      <div className="container py-16 px-16 flex flex-col gap-16">
        <div className="flex-between flex-wrap-reverse gap-8">
          <h2 className="text-4xl text-nowrap">
            <span className="font-bold border-red-400 border-b-4">
              Services
            </span>{' '}
            We Offer
          </h2>
          <RedTruckCircleIcon />
        </div>
        <ServicesList />
        <CallToActionButtons
          horizontal
          additionalClass="text-2xl"
          justifyCenter="flex-center"
        />
      </div>
    </section>
  );
};

export default ServicesTab;
