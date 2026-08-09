// ============================================================
// EDITE ESTE ARQUIVO COM SEUS DADOS REAIS
// Tudo o que aparece na página principal (página mestra) vem daqui.
// ============================================================

export const profile = {
  name: 'ThiagoDev',
  role: 'Desenvolvedor(a) Multiplataforma',
  photo: '/profile.jpg', // coloque sua foto em public/profile.jpg
  github: 'https://github.com/AraujoThiago0822',
  linkedin: 'https://linkedin.com/in/seu-usuario', // opcional, deixe '' se não quiser mostrar
  email: 'seuemail@exemplo.com',
  location: 'São Paulo, SP',

  bio: 'Estudante de Desenvolvimento de Software Multiplataforma, apaixonado(a) por transformar problemas reais em produtos digitais — do frontend ao deploy. Gosto de projetos com impacto social e de código bem organizado.',

  education: {
    institution: 'Fatec Zona Leste',
    course: 'Desenvolvimento de Software Multiplataforma',
    startLabel: '2º semestre de 2023',
    expectedEnd: 'previsão de conclusão em 2026',
  },

  // Deixe a lista vazia [] se ainda não tiver experiência profissional
  experience: [
    {
      company: 'Nome da Empresa',
      role: 'Estagiário(a) de Desenvolvimento',
      startDate: '01/2025',
      endDate: null, // null = emprego atual
      description:
        'Descreva aqui suas atividades principais: quais sistemas você mantém, quais tecnologias usa no dia a dia e algum resultado que você entregou.',
    },
  ],

  courses: [
    {
      name: 'Nome do curso de extensão',
      institution: 'Instituição / plataforma',
      location: 'Online',
      hours: 40,
      startDate: '03/2025',
      endDate: '04/2025',
    },
  ],

  languages: [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês', level: 'Intermediário' },
  ],
}
