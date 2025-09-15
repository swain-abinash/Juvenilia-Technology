import { Link, NavLink } from 'react-router-dom'
import { navLinks, serviceItems } from '../mock/nav'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold">
            JT
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link =>
              link.key !== 'services' ? (
                <NavLink
                  key={link.key}
                  to={link.href}
                  className={({ isActive }) =>
                    `text-sm hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                  }
                >
                  {link.label}
                </NavLink>
              ) : (
                <div key="services" className="relative group">
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `text-sm hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                    }
                  >
                    Services
                  </NavLink>
                  <div className="absolute left-0 mt-2 w-44 rounded-md border bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                    <ul className="py-2">
                      {serviceItems.map(item => (
                        <li key={item.key}>
                          <Link
                            to={item.href}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            )}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span>≡</span>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <ul className="space-y-2">
              {navLinks.map(link =>
                link.key !== 'services' ? (
                  <li key={link.key}>
                    <NavLink
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-2 py-2 rounded hover:bg-gray-100 text-gray-700"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ) : (
                  <li key="services">
                    <NavLink
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-2 py-2 rounded hover:bg-gray-100 text-gray-700"
                    >
                      Services
                    </NavLink>
                    <ul className="mt-1 ml-3 border-l pl-3 space-y-1">
                      {serviceItems.map(item => (
                        <li key={item.key}>
                          <Link
                            to={item.href}
                            onClick={() => setOpen(false)}
                            className="block px-2 py-1 rounded hover:bg-gray-100 text-gray-700"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}


