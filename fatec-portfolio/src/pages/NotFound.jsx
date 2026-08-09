import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-page py-32 text-center">
      <p className="eyebrow mb-4">Erro 404</p>
      <h1 className="text-3xl font-display font-semibold text-paper mb-4">Página não encontrada</h1>
      <Link to="/" className="btn-primary inline-flex">Voltar ao início</Link>
    </div>
  )
}
