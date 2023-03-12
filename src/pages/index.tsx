import { NextPage } from 'next';
import Image from 'next/image';
import { MainNav } from '../components/website/MainNav';

const HomePage: NextPage = () => {
  return (
    <main>
      <div
        className="h-screen pb-14 bg-right bg-cover"
        // style="background-image:url('bg.svg');"
      >
        <MainNav activeClassName="text-gray-500 font-bold" />

        <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full lg:w-3/5 xl:w-3/5 xxl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="mb-3 text-3xl sm:text-4xl md:text-5xl text-primary-dark font-bold text-center md:text-left ">
              Post-operation and sports rehabilitation programs.
            </h1>

            <p className="leading-normal text-xl md:text-2xl mb-8 md:mb-10 text-center md:text-left">
              Designed with you in mind.
            </p>

            <p className="font-bold pb-2 text-center md:text-left">
              Download the app:
            </p>
            <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 flex-col items-center md:items-left md:flex-row">
              <a
                href="/"
                className="flex flex-1 md:pr-4 sm:flex-none mb-2 md:mb-0">
                <Image
                  alt="App Store logo"
                  src="images/app-store.svg"
                  width={241}
                  height={73}
                />
              </a>
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

          {/* <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
            <img className="w-5/6 mx-auto lg:mr-0" src="devices.svg" />
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
