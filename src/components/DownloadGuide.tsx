import type { FC } from 'react';
import HowToReg from '@mui/icons-material/HowToReg';
import PhoneAndroid from '@mui/icons-material/PhoneAndroid';
import LibraryAdd from '@mui/icons-material/LibraryAdd';
import ExportedImage from 'next-image-export-optimizer';
import { Container } from './Container';
import { DownloadGuideSection } from './DownloadGuideSection';

export const DownloadGuide: FC = () => (
  <Container className="pt-12 pb-12 lg:pt-24 lg:pb-24">
    <div className="md:w-[75%] lg:w-[50%] mx-auto">
      <h2 className="text-4xl font-medium text-center">
        Access the full programs following these steps:
      </h2>
      <div className="space-y-24 mt-16">
        <DownloadGuideSection
          showGuideLine
          Icon={HowToReg}
          title="Download"
          text="Download the Total Rehab App for iPhone and Android via the app store.">
          <div className="flex justify-center space-x-6">
            <a href="https://apps.apple.com/uk/app/total-rehab/id6446787979">
              <ExportedImage
                alt="App Store logo"
                src="/images/app-store.svg"
                width={160}
                height={55}
                sizes="160px"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=uk.co.totalrehab.app">
              <ExportedImage
                alt="Google Play logo"
                src="/images/play-store.svg"
                width={160}
                height={55}
                sizes="160px"
              />
            </a>
          </div>
        </DownloadGuideSection>
        <DownloadGuideSection
          showGuideLine
          Icon={PhoneAndroid}
          title="Register"
          text="Sign-up for access to the programs via email or facebook. If you were registered by a practitioner or doctor check your email inbox for further instructions."
        />
        <DownloadGuideSection
          Icon={LibraryAdd}
          title="Choose your program"
          text="Once you complete the registration, choose your desired rehabilitation program from the list provided."
        />
      </div>
    </div>
  </Container>
);
