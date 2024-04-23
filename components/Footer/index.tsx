import Image from 'next/image';
import Link from 'next/link';

import { Separator } from '@/components/ui/separator';

import LogoWhite from '@/public/assets/images/logo_white.png';

import { FOOTER_LINKS, SOCIAL_MEDIA } from '@/constants';

function Footer() {
  return (
    <footer className="bg-simblue text-white">
      <div className="container py-8 px-16">
        <div className="grid grid-cols-1 gap-6 gap-y-12 md:grid-cols-3 xl:grid-cols-4">
          <div className=" space-y-8 text-sm">
            <Link href="/">
              <Image src={LogoWhite} alt="track.d" />
            </Link>
            <p className="text-gray-300">
              ShipUp delivers an unparalleled customer service through dedicated
              customer teams, engaged people working in an agile culture, and a
              global footprint.
            </p>
          </div>

          {FOOTER_LINKS.map((section) => (
            <div key={section.title} className="md:mx-auto ">
              <h2 className="text-xl font-bold mb-4">{section.title}</h2>
              <ul className="text-base text-gray-300 ">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      className="hover:text-gray-400 hover:underline hover:underline-offset-4"
                      href={link.link}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-full xl:col-span-1 flex-center xl:flex-start flex-col">
            <h2 className="text-xl font-bold mb-4">Social Media</h2>
            <ul className="flex flex-row gap-6">
              {SOCIAL_MEDIA.map((media) => (
                <li
                  key={media.alt}
                  className="bg-white hover:bg-gray-300 cursor-pointer rounded-full size-14 flex justify-center items-center"
                >
                  <Link href="/">
                    <Image src={media.src} alt={media.alt} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-6 md:my-8" />

        <div className="flex-center pt-8">
          <Image src={LogoWhite} alt="track.d" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
