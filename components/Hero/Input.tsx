import Image from 'next/image';

type InputProps = {
  legend: string;
  label: string;
  type: 'text' | 'number';
  icon: string;
};

const Input = ({ label, type, legend, icon }: InputProps) => {
  return (
    <fieldset className="h-16 border border-solid rounded-lg border-gray-300 p-3 flex-center">
      <legend className="text-sm px-3 text-gray-400">{legend}</legend>
      <label htmlFor={label}>
        <Image className="size-4" src={icon} alt={label} />
      </label>
      <input
        className="focus:outline-none m-2 w-full"
        type={type}
        id={label}
        name={label}
        placeholder={label}
      />
    </fieldset>
  );
};

export default Input;
