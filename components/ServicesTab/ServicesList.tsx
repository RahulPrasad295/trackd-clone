import Icon from '@/components/Icon/';
import { SERVICES } from '@/constants';

const ServicesList = () => {
  // lg:w-1/3
  return (
    <ul className="w-full flex-center flex-col lg:flex-row gap-10">
      {SERVICES.map((service) => {
        return (
          <li key={service.label} className="px-4 lg:w-1/3">
            <Icon
              className="mb-8"
              label={service.label}
              icon={service.imgURL}
            />
            <h3 className="font-bold text-simblue text-2xl text-nowrap mb-4">
              {service.label}
            </h3>
            <p className="text-gray-400">{service.subtext}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ServicesList;
