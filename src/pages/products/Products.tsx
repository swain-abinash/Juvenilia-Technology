import { productsContent } from '../../mock/pages'

export default function Products() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-3">{productsContent.title}</h1>
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
        {productsContent.items.map((item:any) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}


