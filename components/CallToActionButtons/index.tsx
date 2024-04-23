import { Button } from '@/components/ui/button';

type ButtonProps = {
  horizontal?: boolean;
  isNav?: boolean;
  additionalClass?: string;
  justifyCenter?: 'flex-center' | 'flex-between';
};

const CallToActionButtons = ({
  horizontal,
  isNav,
  additionalClass,
  justifyCenter = 'flex-between',
}: ButtonProps) => {
  let classes = 'gap-4 ' + justifyCenter;
  if (!horizontal) {
    classes += ' flex-col';
  }
  if (isNav) {
    classes += ' hidden sm:flex ';
  }

  return (
    <div className={classes}>
      <Button
        variant={'outline'}
        className={`px-4 py-6 border-simblue text-simblue hover:bg-blue-50 font-bold ${additionalClass}`}
      >
        Request Quote
      </Button>
      <Button
        className={`px-4 py-6 bg-simblue text-white hover:bg-blue-900 font-bold ${additionalClass}`}
      >
        Join Now
      </Button>
    </div>
  );
};

export default CallToActionButtons;
