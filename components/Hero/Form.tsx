'use client';

import { Button } from '../ui/button';
import Input from './Input';

import { Location, BlueBag } from '@/public/assets/icons';

const Form = () => {
  return (
    <form
      className="container w-full p-8 shadow-gray rounded-2xl grid grid-cols-1 xl:grid-cols-4 gap-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <Input icon={Location} legend="Origin" type="text" label="Location" />
      <Input
        icon={Location}
        legend="Destination"
        type="text"
        label="Location"
      />
      <Input icon={BlueBag} legend="Weight" type="number" label="Weight (Kg)" />
      <Button className="bg-simblue font-bold h-16 text-lg">Check Price</Button>
    </form>
  );
};

export default Form;
