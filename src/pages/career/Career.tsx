import { careerContent } from '../../mock/pages';

export default function Career() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-3">{careerContent.title}</h1>
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
        {careerContent.openings.map(role => (
          <li key={role}>{role}</li>
        ))}
      </ul>
    </section>
  )
}


