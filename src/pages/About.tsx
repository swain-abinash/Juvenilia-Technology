import { aboutContent } from '../mock/pages'

export default function About() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-3">{aboutContent.title}</h1>
      <p className="text-gray-700">{aboutContent.body}</p>
    </section>
  )
}


