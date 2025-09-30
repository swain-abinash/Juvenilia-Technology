
import React from 'react';
import { AboutHero } from '../../components/common/about/AboutHero';
import { MissionVision } from '../../components/common/about/MissionVision';
import { Milestones } from '../../components/common/about/Milestones';
import { Leadership } from '../../components/common/about/Leadership';
import { Team } from '../../components/common/about/Team';
import { WhyChooseUs } from '../../components/common/about/WhyChooseUs';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
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