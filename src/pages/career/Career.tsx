import React, { useState } from 'react';
import type { CareerPageData } from '../../types';
import { careerData } from '../../mock/career';
import { CareerHeader } from '../../components/common/career/CareerHeader';
import { CareerValues } from '../../components/common/career/CareerValues';
import { CareerBenefits } from '../../components/common/career/CareerBenefits';
import { CareerOpenings } from '../../components/common/career/CareerOpenings';
import JobApplicationForm from '../../components/JobApplicationForm';
import SuccessModal from '../../components/common/SuccessModal';

const Career = () => {
  const [selectedJob, setSelectedJob] = useState<CareerPageData['openings'][0] | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  return (
    <div className="bg-white">
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
