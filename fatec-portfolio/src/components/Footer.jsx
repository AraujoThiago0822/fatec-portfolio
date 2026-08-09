import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-steel">
      <div className="container-page py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-mist">
          © {new Date().getFullYear()} Thiago Araujo — Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-mist hover:text-signal transition-colors">
            <Github size={18} />
          </a>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-mist hover:text-signal transition-colors">
              <Linkedin size={18} />
            </a>
          )}
          <a href={`mailto:${profile.email}`} aria-label="E-mail" className="text-mist hover:text-signal transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
