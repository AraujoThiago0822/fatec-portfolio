import { Github, Mail, MapPin, GraduationCap, Briefcase, Languages, BookOpen, ArrowDown } from 'lucide-react'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-noise-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-void via-void/95 to-void pointer-events-none" />
        <div className="container-page relative py-24 sm:py-32">
          <Reveal>
            <p className="eyebrow mb-4">Portfólio — Desenvolvimento Multiplataforma</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl sm:text-6xl font-display font-semibold text-paper leading-[1.05] max-w-3xl">
              Olá, eu sou Thiago Araujo.{' '}
              <span className="text-signal">{profile.role}.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-mist text-base sm:text-lg leading-relaxed">
              {profile.bio}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#projetos" className="btn-primary">
                Ver projetos <ArrowDown size={16} />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost">
                <Github size={16} /> GitHub
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-mist">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-signal" /> {profile.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail size={14} className="text-signal" /> {profile.email}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="container-page py-20">
        <Reveal>
          <SectionHeading eyebrow="Quem sou eu" title="Sobre" />
        </Reveal>
        <Reveal delay={0.05}>
          <p className="max-w-2xl text-mist leading-relaxed text-base sm:text-lg">{profile.bio}</p>
        </Reveal>
      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="container-page py-20">
        <Reveal>
          <SectionHeading eyebrow="Trajetória" title="Experiência profissional" />
        </Reveal>

        {profile.experience.length === 0 ? (
          <Reveal delay={0.05}>
            <p className="text-mist font-mono text-sm">Ainda sem experiência profissional registrada.</p>
          </Reveal>
        ) : (
          <div className="space-y-6">
            {profile.experience.map((exp, i) => (
              <Reveal key={exp.company} delay={0.05 * i}>
                <div className="card p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <Briefcase size={18} className="text-signal shrink-0" />
                      <h3 className="text-lg font-display font-semibold text-paper">{exp.role}</h3>
                    </div>
                    <span className="font-mono text-xs text-mist">
                      {exp.startDate} — {exp.endDate ?? 'atual'}
                    </span>
                  </div>
                  <p className="font-mono text-sm text-signal mb-3">{exp.company}</p>
                  <p className="text-mist leading-relaxed text-sm">{exp.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* FORMAÇÃO */}
      <section id="formacao" className="container-page py-20">
        <Reveal>
          <SectionHeading eyebrow="Estudos" title="Formação e extensão" />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="card p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap size={18} className="text-signal shrink-0" />
              <h3 className="text-lg font-display font-semibold text-paper">{profile.education.course}</h3>
            </div>
            <p className="font-mono text-sm text-signal mb-1">{profile.education.institution}</p>
            <p className="text-mist text-sm">
              Início: {profile.education.startLabel} · {profile.education.expectedEnd}
            </p>
          </div>
        </Reveal>

        {profile.courses.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4">
            {profile.courses.map((c, i) => (
              <Reveal key={c.name} delay={0.05 * (i + 1)}>
                <div className="card p-6 h-full">
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen size={16} className="text-signal shrink-0" />
                    <h4 className="font-semibold text-paper text-sm">{c.name}</h4>
                  </div>
                  <p className="text-mist text-sm">{c.institution} · {c.location}</p>
                  <p className="font-mono text-xs text-mist mt-2">
                    {c.hours}h · {c.startDate} {c.endDate ? `— ${c.endDate}` : ''}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {profile.languages.length > 0 && (
          <Reveal delay={0.1}>
            <div className="mt-6 card p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Languages size={18} className="text-signal shrink-0" />
                <h3 className="text-lg font-display font-semibold text-paper">Idiomas</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {profile.languages.map((l) => (
                  <span key={l.name} className="font-mono text-xs text-mist border border-steel rounded-full px-3 py-1.5">
                    {l.name} <span className="text-signal">· {l.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="container-page py-20">
        <Reveal>
          <SectionHeading eyebrow="Últimos 5 semestres" title="Projetos" />
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={0.04 * i}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
