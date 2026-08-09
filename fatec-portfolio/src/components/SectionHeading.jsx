export default function SectionHeading({ eyebrow, title, id }) {
  return (
    <div id={id} className="mb-10 scroll-mt-24">
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <h2 className="text-3xl sm:text-4xl font-semibold text-paper">{title}</h2>
    </div>
  )
}
