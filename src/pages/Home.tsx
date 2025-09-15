import { homeContent } from '../mock/pages'

export default function Home() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-2">{homeContent.title}</h1>
      <p className="text-gray-700">{homeContent.intro}</p>
    </section>
  )
}


