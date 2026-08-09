import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Github, Menu, X, TerminalSquare } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#formacao', label: 'Formação' },
  { href: '#projetos', label: 'Projetos' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'bg-void/90 backdrop-blur border-steel' : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="container-page flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 font-display font-semibold text-paper">
          <TerminalSquare size={20} className="text-signal" strokeWidth={2} />
          <span>{profile.name.split(' ')[0]}</span>
          <span className="text-signal">.</span>
        </Link>

        {isHome && (
          <ul className="hidden md:flex items-center gap-8 font-mono text-sm text-mist">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-signal">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="hidden md:flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost !py-2 !px-4"
            aria-label="Abrir GitHub"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>

        <button
          className="md:hidden text-paper"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-steel bg-void">
          <ul className="container-page flex flex-col gap-4 py-6 font-mono text-sm text-mist">
            {isHome &&
              links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="hover:text-signal">
                    {l.label}
                  </a>
                </li>
              ))}
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-signal">
                GitHub ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
