import React, { useState } from 'react';
import type { CareerPageData } from '../../types';
import { careerData } from '../../mock/career';
import { CareerHeader } from '../../components/common/career/CareerHeader';
import { CareerValues } from '../../components/common/career/CareerValues';
import { CareerBenefits } from '../../components/common/career/CareerBenefits';
import { CareerOpenings } from '../../components/common/career/CareerOpenings';
import JobApplicationForm from '../../components/JobApplicationForm';
import SuccessModal from '../../components/common/SuccessModal';

import {SEO} from '../../components/common/SEO';
const Career = () => {
  const [selectedJob, setSelectedJob] = useState<CareerPageData['openings'][0] | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  return (
    <div className="bg-white">
       <SEO
        title="Want to Build Your Career with Us | Juvenilia Technology"
        description="Whether you are a fresher or experienced in SEO, SEM, BDM, Web Design, or Development, grow your professional career journey with Juvenilia Technology, an innovative IT Solutions Company in India."
        keywords="Juvenilia Technology Careers, SEO Jobs, SEM Jobs, BDM Jobs, Web Design Jobs, Web Development Jobs, IT Careers India"
      />
      <CareerHeader headerData={careerData.header} />
      <main>
        <CareerValues values={careerData.values} />
        <CareerBenefits benefits={careerData.benefits} />
        <CareerOpenings
          openings={careerData.openings}
          onApply={job => setSelectedJob(job)}
        />
        {selectedJob && !successMessage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <JobApplicationForm
              jobTitle={selectedJob.title}
              onSuccess={() => {
                setSuccessMessage('Thank you for applying! We have received your application.');
                setSelectedJob(null);
              }}
               onClose={() => setSelectedJob(null)}
            />
          </div>
        )}
        {successMessage && (
          <SuccessModal
            successMessage={successMessage}
            setSuccessMessage={setSuccessMessage}
          />
        )}
      </main>
    </div>
  );
};

export default Career;
