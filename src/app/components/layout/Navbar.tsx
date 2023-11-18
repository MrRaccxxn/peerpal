import Link from "next/link";
import { ConnectWallet } from "../ConnectWallet/ConnectWallet";
import Image from "next/image";

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
          <Link href={"/"}>
            <Image
              src={"/peerpal-logo.png"}
              alt="logo"
              width={150}
              height={80}
            />
          </Link>

          <ConnectWallet />
        </div>
      </header>
    </div>
  );
};
