import { servicesContent } from '../../mock/pages'

export default function Services() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-3">{servicesContent.title}</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {servicesContent.items.map(s => (
          <article key={s.id} id={s.id} className="rounded-lg border p-4 hover:shadow-sm">
            <h2 className="font-medium mb-1">{s.name}</h2>
            <p className="text-gray-700 text-sm">{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}


