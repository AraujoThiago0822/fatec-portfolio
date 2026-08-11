

export const profile = {
  name: 'ThiagoDev',
  role: 'Desenvolvedor(a) Multiplataforma',
  photo: '/profile.jpeg',
  github: 'https://github.com/AraujoThiago0822',
  linkedin: 'www.linkedin.com/in/thiago-araujo-2997b5288', 
  email: 'thiago.araujo0822@gmail.com',
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
