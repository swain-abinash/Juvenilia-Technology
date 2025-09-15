import { footerData } from "../mock/footer";

export default function Footer() {
  const { company, columns, copyright } = footerData;
  return (
    <footer className="bg-[#1f1f1f] text-gray-300">
      <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-orange-600" />
            <span className="text-xl font-semibold text-white">{company.name}</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-400">
            {company.description}
          </p>
          <div className="flex gap-3 mt-5">
            {company.socials.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-orange-600/90 hover:bg-orange-600 transition inline-flex items-center justify-center text-white"
                aria-label={s.label}
              >
                <span className="sr-only">{s.label}</span>
                •
              </a>
            ))}
          </div>
        </div>

        {columns.slice(0, 2).map((col) => (
          <div key={col.title}>
            <h4 className="text-white font-semibold mb-4">{col.title}</h4>
            <ul className="space-y-3">
              {"links" in col && col.links?.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-white font-semibold mb-4">{columns[2].title}</h4>
          <ul className="space-y-3">
            {"contacts" in columns[2] && columns[2].contacts?.map((c) => (
              <li key={c.type} className="flex items-start gap-3">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-orange-600" />
                <span className="text-gray-400">{c.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-5 text-center text-sm text-gray-400">
          {copyright}
        </div>
      </div>
    </footer>
  )
}


