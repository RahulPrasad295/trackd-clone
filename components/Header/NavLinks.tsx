import Link from 'next/link';
import Image from 'next/image';

import ChevronDown from '@/public/assets/icons/chevron-down.svg';

import { NAV_LINKS } from '@/constants';

const NavLinks = ({ className: classes }: any) => {
  return (
    <ul className={`flex-center flex-col xl:flex-row gap-8 ${classes}`}>
      {NAV_LINKS.map((link) => (
        <li key={link.key}>
          <Link
            className="text-lg font-bold text-gray-700 hover:text-gray-500"
            href={link.href}
          >
            {link.label}
            {link['sub-label'].length > 0 && (
              <Image className="inline" src={ChevronDown} alt="dropdown" />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
