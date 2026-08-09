import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Github, ExternalLink, ImageOff, User } from 'lucide-react'
import { projects } from '../data/projects'
import Reveal from '../components/Reveal'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project || project.status === 'empty') {
    return <Navigate to="/" replace />
  }

  return (
    <div className="container-page py-16">
      <Reveal>
        <Link to="/#projetos" className="inline-flex items-center gap-2 text-mist hover:text-signal font-mono text-sm transition-colors mb-10">
          <ArrowLeft size={16} /> Voltar aos projetos
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="eyebrow mb-3">SEM {String(project.semester).padStart(2, '0')} · Projeto</p>
        <h1 className="text-4xl sm:text-5xl font-display font-semibold text-paper mb-4">{project.name}</h1>
        <p className="text-lg text-mist max-w-2xl mb-8">{project.tagline}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex flex-wrap gap-3 mb-12">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-primary">
              <Github size={16} /> Ver código
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn-ghost">
              <ExternalLink size={16} /> Ver demo
            </a>
          )}
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-10">
          <Reveal delay={0.1}>
            <div>
              <h2 className="text-sm font-mono uppercase tracking-widest text-signal mb-3">Descrição</h2>
              <p className="text-mist leading-relaxed">{project.description}</p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <h2 className="text-sm font-mono uppercase tracking-widest text-signal mb-3 flex items-center gap-2">
                <User size={14} /> Minha participação
              </h2>
              <p className="text-mist leading-relaxed">{project.myRole}</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h2 className="text-sm font-mono uppercase tracking-widest text-signal mb-3">Screenshots</h2>
              {project.screenshots.length === 0 ? (
                <div className="card flex flex-col items-center justify-center gap-3 py-16 text-mist">
                  <ImageOff size={28} />
                  <p className="font-mono text-xs">
                    Adicione imagens em <code>public/projects/{project.slug}/</code> e referencie em{' '}
                    <code>src/data/projects.js</code>
                  </p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.screenshots.map((src) => (
                    <img key={src} src={src} alt={`Screenshot de ${project.name}`} className="rounded-xl border border-steel" />
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <aside className="card p-6 h-fit">
            <h2 className="text-sm font-mono uppercase tracking-widest text-signal mb-4">Tecnologias</h2>
            <div className="flex flex-wrap gap-2">
              {project.techs.map((t) => (
                <span key={t} className="font-mono text-xs text-paper border border-steel rounded-full px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>
          </aside>
        </Reveal>
      </div>
    </div>
  )
}
