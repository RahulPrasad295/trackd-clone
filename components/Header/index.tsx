import Link from 'next/link';
import Image from 'next/image';

import NavLinks from './NavLinks';
import MobileNav from './MobileNav';
import CallToActionButtons from '../CallToActionButtons';

import { LogoBlack } from '@/public/assets/images';

const Header = () => {
  return (
    <header className="container h-24 py-8 px-16 flex-between">
      <Link href="/">
        <Image src={LogoBlack} alt="track.d" priority />
      </Link>
      <nav className="hidden xl:flex">
        <NavLinks />
      </nav>
      <div className="flex-between gap-4">
        <CallToActionButtons horizontal isNav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
