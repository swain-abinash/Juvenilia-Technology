import { homeContent } from '../mock/pages'

export default function Home() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">

      <h1 className="text-3xl font-semibold mb-2">{homeContent.title}</h1>
      <p className="text-gray-700">{homeContent.intro}</p>
      </div>
    </section>
  )
}


