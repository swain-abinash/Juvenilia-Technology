
import React from 'react';
import { SEO } from "../../components/common/SEO";
import { AboutHero } from '../../components/common/about/AboutHero';
import { MissionVision } from '../../components/common/about/MissionVision';
import { Milestones } from '../../components/common/about/Milestones';
import { Leadership } from '../../components/common/about/Leadership';
import { Team } from '../../components/common/about/Team';
import { WhyChooseUs } from '../../components/common/about/WhyChooseUs';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
            <SEO
        title="About Juvenilia Technology | Your Digital Marketing Partner - Juvenilia Technology"
        description="An Innovative IT Solutions Company with a strong client base that counts more than a hundred clients worldwide. We are providing our services of Digital Marketing, Website Designing, Web Development, App Development, and Software Development all over the globe."
        keywords="Juvenilia Technology, About Juvenilia, IT Company India, Digital Marketing Agency, Web Development, App Development, Software Company"
      />
      <AboutHero />
      <MissionVision />
      <Milestones />
      <Leadership />
      <Team />
      <WhyChooseUs />
    </div>
  );
};

export default About;