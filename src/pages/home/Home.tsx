import React from 'react';
import { homeData } from '../../mock/home';

// Import all section components
import HeroSection from './sections/HeroSection';
import AboutPreview from './sections/AboutPreview';
import ServicesSnapshot from './sections/ServicesSnapshot';
import CaseStudies from './sections/CaseStudies';
import Testimonials from './sections/Testimonials';
import Clients from './sections/Clients';
import Stats from './sections/StatCounter';
import OurProcess from './sections/OurProcess';
import TechStack from './sections/TechStack';
import Industries from './sections/Industries';
import GamifiedSection from './sections/GamifiedSection';
import CultureTeaser from './sections/CultureTeaser';
import Awards from './sections/Awards';
import FreeResources from './sections/FreeResources';
import StickyCta from './sections/StickyCta';


const Home = () => {
  return (
    <>
      <HeroSection data={homeData.hero} />
      <AboutPreview data={homeData.aboutPreview} />
      <ServicesSnapshot data={homeData.services} />
      <CaseStudies data={homeData.caseStudies} />
      <Testimonials data={homeData.testimonials} />
      <Clients data={homeData.clients} />
      <Stats data={homeData.stats} />
      <OurProcess data={homeData.process} />
      <TechStack data={homeData.techStack} />
      <Industries data={homeData.industries} />
      {/* <CultureTeaser data={homeData.culture} /> */}     
      <Awards data={homeData.awards} />
      <FreeResources data={homeData.resources} />
       <GamifiedSection />
      <StickyCta data={homeData.stickyCta} />
    </>
  );
};

export default Home;
