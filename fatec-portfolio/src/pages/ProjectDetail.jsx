import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Github, ExternalLink, ImageOff, User, X } from 'lucide-react'
import { projects } from '../data/projects'
import Reveal from '../components/Reveal'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)

  useEffect(() => {
    if (selectedImageIndex === null) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedImageIndex(null)
      } else if (event.key === 'ArrowRight') {
        setSelectedImageIndex((current) => (current + 1) % project.screenshots.length)
      } else if (event.key === 'ArrowLeft') {
        setSelectedImageIndex((current) => (current - 1 + project.screenshots.length) % project.screenshots.length)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [project.screenshots.length, selectedImageIndex])

  if (!project || project.status === 'empty') {
    return <Navigate to="/" replace />
  }

  const openLightbox = (index) => setSelectedImageIndex(index)
  const closeLightbox = () => setSelectedImageIndex(null)
  const showNext = () => setSelectedImageIndex((current) => (current + 1) % project.screenshots.length)
  const showPrevious = () => setSelectedImageIndex((current) => (current - 1 + project.screenshots.length) % project.screenshots.length)

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
        <div className="mb-12 flex flex-col gap-3">
          <div className="flex flex-wrap gap-3">
            {project.slug === 'reciclaqui-2' ? (
              <>
                {project.githubFrontendMobile && (
                  <a href={project.githubFrontendMobile} target="_blank" rel="noreferrer" className="btn-primary">
                    <Github size={16} /> Frontend Mobile
                  </a>
                )}
                {project.githubFrontendAdmin && (
                  <a href={project.githubFrontendAdmin} target="_blank" rel="noreferrer" className="btn-ghost">
                    <Github size={16} /> Frontend Admin Web
                  </a>
                )}
                {project.githubBackend && (
                  <a href={project.githubBackend} target="_blank" rel="noreferrer" className="btn-ghost">
                    <Github size={16} /> Backend
                  </a>
                )}
              </>
            ) : (
              <>
                {project.githubFrontend && (
                  <a href={project.githubFrontend} target="_blank" rel="noreferrer" className="btn-primary">
                    <Github size={16} /> Repositório Frontend
                  </a>
                )}
                {project.githubBackend && (
                  <a href={project.githubBackend} target="_blank" rel="noreferrer" className="btn-ghost">
                    <Github size={16} /> Repositório Backend
                  </a>
                )}
              </>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn-ghost">
                <ExternalLink size={16} /> Ver demo
              </a>
            )}
          </div>
          {project.github && !project.githubFrontend && !project.githubBackend && !project.githubFrontendMobile && !project.githubFrontendAdmin && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-primary w-fit">
              <Github size={16} /> Ver código
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
                  {project.screenshots.map((src, index) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => openLightbox(index)}
                      className="group overflow-hidden rounded-xl border border-steel bg-void text-left shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                      aria-label={`Abrir screenshot ${index + 1} de ${project.name}`}
                    >
                      <img
                        src={src}
                        alt={`Screenshot ${index + 1} de ${project.name}`}
                        className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
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

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl">
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-0 top-0 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-steel/80 bg-void/90 text-mist transition-colors hover:text-signal"
              aria-label="Fechar imagem"
            >
              <X size={20} />
            </button>

            <div className="flex items-center justify-center gap-3 pt-12">
              {project.screenshots.length > 1 && (
                <button
                  type="button"
                  onClick={showPrevious}
                  className="hidden h-12 w-12 items-center justify-center rounded-full border border-steel/80 bg-void/90 text-mist transition-colors hover:text-signal sm:flex"
                  aria-label="Imagem anterior"
                >
                  <ArrowLeft size={20} />
                </button>
              )}

              <div className="w-full overflow-hidden rounded-2xl border border-steel bg-void shadow-2xl">
                <img
                  src={project.screenshots[selectedImageIndex]}
                  alt={`Screenshot ${selectedImageIndex + 1} de ${project.name}`}
                  className="max-h-[78vh] w-full object-contain"
                />
              </div>

              {project.screenshots.length > 1 && (
                <button
                  type="button"
                  onClick={showNext}
                  className="hidden h-12 w-12 items-center justify-center rounded-full border border-steel/80 bg-void/90 text-mist transition-colors hover:text-signal sm:flex"
                  aria-label="Próxima imagem"
                >
                  <ArrowRight size={20} />
                </button>
              )}
            </div>

            <div className="mt-4 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="font-mono text-xs text-mist">
                Imagem {selectedImageIndex + 1} de {project.screenshots.length}
              </p>
              {project.screenshots.length > 1 && (
                <p className="font-mono text-xs text-mist/80">Use as setas do teclado ou os botões para navegar</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
