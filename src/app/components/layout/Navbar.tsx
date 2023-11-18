import Link from "next/link";
import { ConnectWallet } from "../ConnectWallet/ConnectWallet";

export const Navbar = ({
  showNavigation = true,
}: {
  showNavigation?: boolean;
}) => {
  return (
    <div
      className="absolute z-50 bg-transparent"
      style={{ minInlineSize: "-webkit-fill-available" }}
    >
      <header>
        <div className="container mx-auto flex flex-wrap py-5 sm:py-2 flex-row items-center md:items-center justify-between">
          <Link href={"/"}></Link>
          {showNavigation && (
            <nav className="md:ml-auto md:mr-auto flex gap-8 flex-wrap items-center text-base justify-center sm:hidden">
              <Link
                href={"/poap-searcher"}
                className="flex title-font font-bold items-center text-md hover:text-gray-300"
              >
                POAP SEARCHER
              </Link>
              <Link
                href={"/event/gallery"}
                className="flex title-font font-bold items-center text-md hover:text-gray-300"
              >
                ALL EVENTS
              </Link>
              <Link
                href={"mailto: even3.contact@gmail.com"}
                className="flex title-font font-bold items-center text-md hover:text-gray-300"
              >
                CONTACT
              </Link>
            </nav>
          )}
          <ConnectWallet />
        </div>
      </header>
    </div>
  );
};
