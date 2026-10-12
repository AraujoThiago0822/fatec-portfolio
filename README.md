<div align="center">

# Portfólio de Desenvolvimento Multiplataforma

Portfólio individual da disciplina de Laboratório de Desenvolvimento Multiplataforma, Fatec.

![React](https://img.shields.io/badge/React-18-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-5-20232A?style=flat-square&logo=vite&logoColor=646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-20232A?style=flat-square&logo=tailwindcss&logoColor=06B6D4)
![Vercel](https://img.shields.io/badge/Vercel-deploy-20232A?style=flat-square&logo=vercel&logoColor=white)

**Site publicado: https://fatec-portfolio.vercel.app/

</div>

---

## Sumário

- [Sobre](#sobre)
- [Projetos](#projetos)
- [Stack do portfólio](#stack-do-portfólio)
- [Rotas](#rotas)
- [Como rodar](#como-rodar)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Editando o conteúdo](#editando-o-conteúdo)
- [Identidade visual](#identidade-visual)
- [Deploy](#deploy)
- [Autor](#autor)

---

## Sobre

Este repositório reúne os projetos que desenvolvi ao longo dos seis primeiros semestres do curso de Desenvolvimento de Software Multiplataforma.

A página principal apresenta dados pessoais, formação, experiência profissional, cursos de extensão e idiomas. Cada projeto tem um card que leva a uma página própria, com descrição, tecnologias, link do código, screenshots e a minha participação.

Todo o conteúdo vem de dois arquivos de dados, `src/data/profile.js` e `src/data/projects.js`. As páginas dos projetos são geradas a partir do segundo, então incluir ou alterar um projeto não exige mexer nos componentes.

## Projetos

| Sem. | Projeto | Descrição | Tecnologias | Página |
|:-:|---|---|---|---|
| 1 | StreetWise | Landing page para estúdio de tatuagem | HTML, CSS, JavaScript, React | `/projetos/streetwise` |
| 2 | RecicleAqui | Sistema de reciclagem de lixo eletrônico | React, Node.js, Express, MySQL | `/projetos/reciclaqui` |
| 3 | AcademiTrack | Plataforma de gestão acadêmica | React, TypeScript, Node.js, PostgreSQL | `/projetos/academitrack` |
| 4 | DoeFood | Plataforma que conecta doadores de alimentos e ONGs | React, Node.js, Express, MongoDB | `/projetos/doefood` |
| 5 | RecicleAqui 2.0 | Nova versão do RecicleAqui, com aplicativo mobile e painel administrativo desktop | React Native, React, Node.js, PostgreSQL | `/projetos/reciclaqui-2` |
| 6 | CyberFlora | Projeto do sexto semestre | Kotlin, PostgreSQL, Docker | `/projetos/cyberflora` |

## Stack do portfólio

| Camada | Tecnologia | Função no projeto |
|---|---|---|
| Interface | React 18 | Componentes e páginas |
| Build | Vite 5 | Servidor de desenvolvimento e bundle de produção |
| Rotas | React Router 6 | Página principal e páginas dinâmicas de projeto |
| Estilo | Tailwind CSS 3 | Utilitários e tokens de design |
| Animação | Framer Motion | Entrada dos elementos ao rolar a página |
| Ícones | Lucide React | Conjunto de ícones em SVG |
| Hospedagem | Vercel | Deploy contínuo a partir do GitHub |

## Rotas

| Caminho | Página | Origem do conteúdo |
|---|---|---|
| `/` | Página principal | `profile.js` e `projects.js` |
| `/projetos/:slug` | Página de um projeto | Item de `projects.js` com o mesmo `slug` |
| `*` | Página não encontrada | `NotFound.jsx` |

## Como rodar

Requisitos:

| Ferramenta | Versão mínima |
|---|---|
| Node.js | 18 |
| Git | qualquer versão recente |

```bash
git clone [https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git](https://github.com/AraujoThiago0822/fatec-portfolio)
cd fatec-portfolio
npm install
npm run dev
```

O projeto abre em `http://localhost:5173`.

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com recarga automática |
| `npm run build` | Gera a versão de produção na pasta `dist` |
| `npm run preview` | Serve a versão de produção localmente para teste |

## Estrutura de pastas

```
public/                   foto, favicon e screenshots
  projects/<slug>/        imagens de cada projeto
src/
  components/             Navbar, Footer, ProjectCard, Reveal, SectionHeading
  data/
    profile.js            dados pessoais, formação, experiência, cursos e idiomas
    projects.js           lista de projetos
  pages/
    Home.jsx              página principal
    ProjectDetail.jsx     página de projeto
    NotFound.jsx          erro 404
  App.jsx                 definição das rotas
  main.jsx                ponto de entrada
  index.css               tema e classes utilitárias
tailwind.config.js        cores e fontes
vercel.json               reescrita das rotas para o index.html
```

## Editando o conteúdo

| O que alterar | Onde |
|---|---|
| Nome, bio, links, formação, experiência, cursos e idiomas | `src/data/profile.js` |
| Descrição, tecnologias, links e participação em cada projeto | `src/data/projects.js` |
| Foto de perfil | `public/profile.jpg` |
| Screenshots | `public/projects/<slug>/`, listadas no campo `screenshots` do projeto |
| Cores e fontes | `tailwind.config.js` |

Campos de cada projeto em `projects.js`:

| Campo | Descrição |
|---|---|
| `slug` | Identificador usado na URL |
| `semester` | Semestre em que o projeto foi feito |
| `status` | `concluded` ou `empty` (card desativado) |
| `name` e `tagline` | Título e resumo de uma linha |
| `description` | Descrição do projeto |
| `myRole` | Descrição da minha participação |
| `techs` | Lista de tecnologias |
| `github` e `demo` | Links do repositório e da versão publicada |
| `screenshots` | Caminhos das imagens |

## Identidade visual

Tema escuro com verde-água como cor principal e coral como apoio.

| Nome | Hex | Uso |
|---|---|---|
| void | `#0A0B0D` | Fundo |
| carbon | `#141619` | Cards |
| steel | `#24282E` | Bordas |
| signal | `#2DD4BF` | Destaque principal |
| ink | `#FF5A4E` | Destaque secundário |
| paper | `#F2F1ED` | Texto principal |
| mist | `#9AA1AC` | Texto secundário |

| Função | Fonte |
|---|---|
| Títulos | Space Grotesk |
| Texto | Inter |
| Rótulos e dados | JetBrains Mono |

