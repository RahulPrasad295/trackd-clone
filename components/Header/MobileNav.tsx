import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '../ui/separator';

import Hamburger from '@/public/assets/icons/hamburger.svg';
import NavLinks from './NavLinks';
import CallToActionButtons from '../CallToActionButtons';

const MobileNav = () => {
  return (
    <nav className="flex xl:hidden">
      <Sheet>
        <SheetTrigger>
          <Image src={Hamburger} alt="hamburger" />
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
          <NavLinks className="mt-8" />
          <Separator className="my-8" />
          <CallToActionButtons />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
