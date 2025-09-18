import { careerData } from '../../mock/career';
import { CareerHeader } from '../../components/common/career/CareerHeader';
import { CareerValues } from '../../components/common/career/CareerValues';
import { CareerBenefits } from '../../components/common/career/CareerBenefits';
import { CareerOpenings } from '../../components/common/career/CareerOpenings';

const Career = () => {
  return (
    <div className="bg-white">
      <CareerHeader headerData={careerData.header} />
      <main>
        <CareerValues values={careerData.values} />
        <CareerBenefits benefits={careerData.benefits} />
        <CareerOpenings openings={careerData.openings} />
      </main>
    </div>
  );
};

export default Career;

