import Image from "next/image";
import Container from "../components/layout/Container";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        height: "100dvh",
      }}
    >
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Crypto-to-Fiat: Simplified Bill Payments
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              PeerPal enables seamless crypto exchanges for direct bill
              payments, revolutionizing the way you handle your finances.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/crypto-exchanger"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Pay my bill
              </Link>
              <Link
                href={`/crypto-exchanger/register`}
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
              >
                <span>Register as seller</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end w-full lg:w-1/2">
          <div className="">
            <Image
              src={"/nouns-hero.gif"}
              width="350"
              height="350"
              className={"object-cover"}
              alt="Hero"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
