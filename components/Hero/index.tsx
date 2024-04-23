import Link from 'next/link';
import Image from 'next/image';

import { Camcorder } from '@/public/assets/icons';
import { HeroBanner } from '@/public/assets/images';
import Icon from '../Icon';
import Form from './Form';

const Hero = () => {
  return (
    <section className="container my-16 py-8 px-16 space-y-16">
      <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-2 lg:order-1 flex-center flex-col gap-4 text-center lg:text-left">
          <h1 className="text-4xl font-bold md:text-7xl ">
            Quick & Reliable{' '}
            <span className="text-red-400"> Warehousing and Logistics </span>
            Solution{' '}
          </h1>{' '}
          <p className="mt-2 text-sm md:text-lg text-gray-300">
            track.d delivers an unparalleled customer service through dedicated
            customer teams, engaged people working in an agile culture, and a
            global footprint{' '}
          </p>
          <div className="w-full flex-center lg:flex-start gap-4">
            <button
              className={`flex-center gap-3 rounded-xl border btn_simblue whitespace-nowrap cursor-pointer`}
              type="button"
            >
              Join Now
            </button>
            <Link
              className="flex-center gap-2 font-bold text-simblue hover:underline"
              href="/"
            >
              <Icon icon={Camcorder} label="camcorder" />
              <span className="pl-2 ">Play Demo</span>
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 w-full sm:h-96 sm:w-96 object-contain lg:h-[450px] lg:w-[450px] flex-center">
          <Image src={HeroBanner} alt="hero-banner" />
        </div>
      </div>
      <Form />
    </section>
  );
};

export default Hero;
