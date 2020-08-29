import React from 'react';
import { navigate, graphql } from 'gatsby';
import Layout from 'components/Layout';
import Hero from 'components/Hero';
import Badge from 'components/Badge';
import { Colors } from 'constants/colors';
import aboutCampaignIcon from 'static/icons/about-campaign.svg';
import joinStudentDebtIcon from 'static/icons/join-student-debt.svg';
import thingsToDoIcon from 'static/icons/things-to-do.svg';
import YouTube from 'react-youtube';
import Button from 'components/Button';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const Home: React.FC<Props> = ({ data }) => {
  const mainHeroImage = data?.mainHeroImage?.childImageSharp?.fluid?.src || '';
  const mainVictoriesImage =
    data?.mainVictoriesImage?.childImageSharp?.fluid?.src || '';

  return (
    <Layout>
      <Hero
        backgroundSrc={mainHeroImage}
        title={
          <>
            Alone our debts are a <br className="hidden lg:inline" /> burden.
            Together they <br className="hidden lg:inline" /> make us{' '}
            <span className="text-yellow">powerful.</span>
          </>
        }
        text={
          <>
            We are a debtors&apos; union fighting to cancel debts and defend
            millions <br className="hidden lg:inline" /> of households. Join us
            to build a world where college is publicly{' '}
            <br className="hidden lg:inline" /> funded, healthcare is universal
            and housing is guaranteed for all.
          </>
        }
        primaryAction={() => navigate('/debt-union')}
        primaryActionLabel="Join the Union"
        secondaryAction={() => navigate('/debt-union')}
        secondaryActionLabel="Member Benefits"
      />
      <section
        className="min-h-screen p-screen-spacing flex flex-col justify-center lg:p-desktop-screen-spacing"
        style={{
          background:
            'linear-gradient(180deg, #DBF8FF 0.85%, #F6FAF8 61.2%, #FCFBF7 80.89%)'
        }}
      >
        <h2 className="text-center mb-4 text-4xl leading-9 font-semibold text-gray lg:text-5xl lg:leading-14">
          1 million new people default on their <br /> student loans every year!
        </h2>
        <h3 className="text-center mb-12 font-semibold text-gray text-xl lg:text-2xl">
          No one should be forced into debt for an education. Join us in the
          <br className="hidden lg:block" />
          fight to <span className="text-primary">#CancelStudentDebt</span> and
          win <span className="text-primary">#CollegeForAll</span>
        </h3>
        <div className="flex justify-evenly items-stretch w-full flex-wrap">
          <Badge
            imageSrc={aboutCampaignIcon}
            imageAlt="About the campaign"
            title="About the campaign"
            backgroundColor={Colors.purple}
            size="lg"
            text="Learn more about our fight to end student debt and win college for all."
            className="mb-12 lg:mb-0"
          />
          <Badge
            imageSrc={joinStudentDebtIcon}
            imageAlt="Join the student debt strike"
            title="Join the student debt strike"
            backgroundColor={Colors.yellow}
            size="lg"
            text="Can’t Pay? Won’t Pay! Join a community of debtors refusing to pay our student loans!"
            className="mb-12 lg:mb-0"
          />
          <Badge
            imageSrc={thingsToDoIcon}
            imageAlt="5 things you can do"
            title="5 things you can do"
            backgroundColor={Colors.green}
            size="lg"
            text="We need your help! Here are simple ways you can join the movement."
            className="mb-12 lg:mb-0"
          />
        </div>
      </section>
      <section
        className="min-h-screen flex flex-col justify-center bg-no-repeat bg-cover bg-center p-screen-spacing lg:px-desktop-screen-spacing"
        style={{
          backgroundImage: `url(${mainVictoriesImage})`
        }}
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <YouTube videoId="lDX6a9pCOw8" className="w-full mb-16 lg:mb-0" />
          <div>
            <h3 className="text-3xl leading-9 font-bold lg:leading-13 lg:text-5xl">
              Our movement has <span className="text-primary">abolished</span>{' '}
              more than
            </h3>
            <h2 className="text-6xl leading-20 text-primary font-bold font-more-gothic lg:text-9xl lg:leading-40">
              $1.8 Billion
            </h2>
            <p className="text-2xl leading-7 font-bold">
              in student debt, medical debt, payday loans, probation debt and
              credit card debt. Our student debt campaign put full student debt
              cancellation and free public college on the political map.
            </p>
          </div>
        </div>
        <Button className="mx-auto mt-12 block lg:mt-20">
          Learn More About Our Victories
        </Button>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    mainHeroImage: file(relativePath: { eq: "main-hero.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          src
        }
      }
    }
    mainVictoriesImage: file(relativePath: { eq: "main-victories-image.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          src
        }
      }
    }
  }
`;

export default Home;
