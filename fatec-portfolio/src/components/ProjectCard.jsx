import { Link } from 'react-router-dom'
import { ArrowUpRight, CircleDot, Circle } from 'lucide-react'

export default function ProjectCard({ project }) {
  const isEmpty = project.status === 'empty'
  const semesterLabel = `SEM ${String(project.semester).padStart(2, '0')}`

  const content = (
    <div className={`card group relative flex h-full flex-col justify-between p-6 ${isEmpty ? 'opacity-60' : ''}`}>
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-xs tracking-widest text-mist">{semesterLabel}</span>
          {isEmpty ? (
            <Circle size={12} className="text-mist" />
          ) : (
            <CircleDot size={12} className="text-signal" />
          )}
        </div>
        <h3 className="text-xl font-display font-semibold text-paper mb-2">{project.name}</h3>
        <p className="text-sm text-mist leading-relaxed">
          {isEmpty ? 'Projeto do 6º semestre — em definição.' : project.tagline}
        </p>
      </div>

      {!isEmpty && (
        <div className="mt-6 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.techs.slice(0, 2).map((t) => (
              <span key={t} className="font-mono text-[11px] text-signal/80 border border-signal/20 rounded-full px-2 py-0.5">
                {t}
              </span>
            ))}
          </div>
          <ArrowUpRight size={18} className="text-mist transition-all duration-300 group-hover:text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      )}
    </div>
  )

  if (isEmpty) return <div className="h-full">{content}</div>

  return (
    <Link to={`/projetos/${project.slug}`} className="h-full block">
      {content}
    </Link>
  )
}
