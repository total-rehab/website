import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MainNav } from '../components/website/MainNav';
import { Meta } from '../components/website/Meta';

const HomePage: NextPage = () => {
  return (
    <>
      <Meta
        title="Home"
        description="Post-operation and sports rehabilitation programs, designed with you in mind."
      />
      <main>
        <header className="container px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full lg:w-3/5 xl:w-3/5 justify-center lg:items-start overflow-y-hidden pt-8 sm:pt-24 lg:pt-40">
            <h1 className="mb-3 text-3xl sm:text-4xl md:text-5xl text-primary-dark font-bold text-center lg:text-left ">
              Post-operation and sports rehabilitation programs.
            </h1>

            <p className="leading-normal text-xl md:text-2xl mb-8 md:mb-10 text-center lg:text-left">
              Designed with you in mind.
            </p>

            <p className="font-bold pb-2 text-center lg:text-left">
              Download the app:
            </p>
            <div className="flex w-full justify-center lg:justify-start pb-24 lg:pb-0 flex-col items-center md:items-left md:flex-row">
              <Link
                href="/"
                className="flex flex-1 md:pr-4 sm:flex-none mb-2 md:mb-0">
                <Image
                  alt="App Store logo"
                  src="images/app-store.svg"
                  width={241}
                  height={73}
                />
              </Link>
              <a
                className="flex flex-1 sm:flex-none"
                href="https://play.google.com/store/apps/details?id=uk.co.totalrehab.app">
                <Image
                  alt="Google Play logo"
                  src="images/play-store.svg"
                  width={241}
                  height={73}
                />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-2/5 xl:w-2/5 mt-8 lg:mt-12 hidden lg:flex relative">
            <div className="absolute left-[-25%] hidden xl:block pt-8">
              <Image
                alt=""
                src="/images/schedule-mock-up.png"
                width={500}
                height={500}
              />
            </div>
            <div className="absolute right-0 xl:right-[-10%] hidden 2xl:block pt-8">
              <Image
                alt=""
                src="/images/ankle-support-mock-up.png"
                width={500}
                height={500}
              />
            </div>
            <div className="z-10 scale-125 xl:scale-105 pt-8">
              <Image
                alt=""
                src="/images/ankle-and-foot-mock-up.png"
                width={500}
                height={500}
              />
            </div>
          </div>
        </header>
      </main>
    </>
  );
};

export default HomePage;
