import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full border-b px-6 py-4 lg:px-10 bg-[#F5F5F5]">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/confee-logo.svg"
          width={160}
          height={32}
          alt="Confee logo"
          className="max-sm:w-28"
        />
        {/* <p className="text-[26px] font-extrabold  max-sm:hidden">
          Confee
        </p> */}
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
