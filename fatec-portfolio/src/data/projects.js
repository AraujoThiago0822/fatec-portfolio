// ============================================================
// EDITE ESTE ARQUIVO COM OS DADOS REAIS DE CADA PROJETO
// - "screenshots": coloque os arquivos em public/projects/<slug>/ e referencie aqui
// - "github": link do repositório do projeto
// - "semester": semestre em que o projeto foi feito (1 a 5)
// ============================================================

export const projects = [
  {
    slug: 'streetwise',
    semester: 1,
    status: 'concluded', // 'concluded' | 'empty'
    name: 'StreetWise',
    tagline: 'Landing page para estúdio de tatuagem',
    description:
      'Landing page desenvolvida para o estúdio de tatuagem StreetWise, com foco em apresentar o portfólio de trabalhos do estúdio, os estilos de tatuagem oferecidos e um canal direto de agendamento/contato com os artistas.',
    myRole:
      'Responsável pelo desenvolvimento parcial da interface: estruturação das seções, responsividade, animações de entrada e integração do formulário de contato.',
    techs: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/WebCrafters-ZL/streetwise-web',
    demo: '',
    screenshots: [],
  },
  {
    slug: 'reciclaqui',
    semester: 2,
    status: 'concluded',
    name: 'RecicleAqui',
    tagline: 'Sistema de reciclagem de lixo eletrônico',
    description:
      'Sistema virtual para gestão de descarte de lixo eletrônico, permitindo que usuários cadastrem itens para reciclagem, encontrem pontos de coleta parceiros e acompanhem o status do descarte de forma transparente.',
    myRole:
      'Desenvolvimento parcial do CRUD de itens, documentação e modelagem do banco de dados.',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express', 'MySQL'],
    github: 'https://github.com/WebCrafters-ZL/recicleaqui',
    demo: '',
    screenshots: [],
  },
  {
    slug: 'academitrack',
    semester: 3,
    status: 'concluded',
    name: 'AcademiTrack',
    tagline: 'Plataforma de gestão acadêmica',
    description:
      'Plataforma voltada à gestão acadêmica, reunindo em um só lugar o acompanhamento de notas, frequência, horários de aula e comunicados institucionais para alunos e coordenação.',
    myRole:
      'Desenvolvimento de interface,construção dos módulos de frequência e notas e dashboards de acompanhamento .',
    techs: ['React', 'Javascript', 'Node.js', 'MongoDB'],
    github: 'https://github.com/seu-usuario/academitrack',
    github: 'https://github.com/seu-usuario/academitrack',
    demo: '',
    screenshots: [],
  },
  {
    slug: 'doefood',
    semester: 4,
    status: 'concluded',
    name: 'DoeFood',
    tagline: 'Plataforma de doação de alimentos',
    description:
      'Plataforma que conecta doadores de alimentos a ONGs e instituições que recebem doações, facilitando o cadastro de itens disponíveis, o agendamento de coletas e o acompanhamento do impacto gerado.',
    myRole:
      'Desenvolvimento do fluxo de cadastro de doações, sistema de match entre doador e instituição, e painel de acompanhamento de doações.',
    techs: ['React','Typescript', 'Node.js', 'Express', 'Firebase'],
    github: 'https://github.com/seu-usuario/doefood',
    demo: '',
    screenshots: [],
  },
  {
    slug: 'reciclaqui-2',
    semester: 5,
    status: 'concluded',
    name: 'RecicleAqui 2.0',
    tagline: 'Reciclagem de lixo eletrônico — versão mobile + painel admin',
    description:
      'Evolução do RecicleAqui, agora com aplicativo mobile para os usuários agendarem coletas de lixo eletrônico de qualquer lugar, e um painel administrativo desktop para gestão dos pontos de coleta, volumetria recolhida e relatórios.',
    myRole:
      'Desenvolvimento do  painel administrativo desktop (relatórios e gestão de pontos de coleta) e integração com API backend .',
    techs: ['React Native', 'React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/seu-usuario/reciclaqui-2',
    demo: '',
    screenshots: [],
  },
  {
    slug: 'projeto-6',
    semester: 6,
    status: 'empty',
    name: 'Em definição',
    tagline: 'Projeto ainda não definido',
    description: '',
    myRole: '',
    techs: [],
    github: '',
    demo: '',
    screenshots: [],
  },
]
