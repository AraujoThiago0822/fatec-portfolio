# Tutorial completo — Portfólio Fatec (React + Vercel)

Este tutorial assume que você vai usar o **VS Code** e já tem uma conta no **GitHub**. Ele cobre: rodar o projeto localmente, personalizar seus dados, subir para o GitHub e fazer o deploy na **Vercel**.

---

## 1. Pré-requisitos

Instale antes de começar:

- **Node.js** (versão 18 ou superior) → [nodejs.org](https://nodejs.org)
- **Git** → [git-scm.com](https://git-scm.com)
- **VS Code** → [code.visualstudio.com](https://code.visualstudio.com)
- Uma conta no **GitHub** e uma conta na **Vercel** (dá pra criar a da Vercel usando login do GitHub, é grátis)

Para conferir se o Node e o Git foram instalados, abra o terminal e rode:

```bash
node -v
git -v
```

Se aparecer um número de versão em cada comando, está tudo certo.

---

## 2. Estrutura do projeto

```
fatec-portfolio/
├── public/
│   ├── favicon.svg
│   ├── profile.jpg            ← sua foto (você adiciona)
│   └── projects/              ← screenshots de cada projeto
│       └── streetwise/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         ← menu do topo
│   │   ├── Footer.jsx         ← rodapé
│   │   ├── ProjectCard.jsx    ← card de cada projeto na home
│   │   ├── SectionHeading.jsx ← título padrão das seções
│   │   └── Reveal.jsx         ← animação de entrada ao rolar a página
│   ├── data/
│   │   ├── profile.js         ← ★ SEUS DADOS PESSOAIS (edite primeiro)
│   │   └── projects.js        ← ★ SEUS 6 PROJETOS (edite primeiro)
│   ├── pages/
│   │   ├── Home.jsx           ← página mestra (tudo em uma página, com âncoras)
│   │   ├── ProjectDetail.jsx  ← tela individual de cada projeto
│   │   └── NotFound.jsx
│   ├── App.jsx                ← define as rotas
│   ├── main.jsx                ← ponto de entrada do React
│   └── index.css              ← tema (cores, fontes, componentes utilitários)
├── index.html
├── tailwind.config.js         ← paleta de cores e fontes do projeto
├── vercel.json                ← configuração de rotas para a Vercel
└── package.json
```

**Por que essa estrutura?** Cada projeto do portfólio vira uma rota própria (`/projetos/streetwise`, `/projetos/reciclaqui`, etc.), gerada automaticamente a partir do arquivo `src/data/projects.js`. Isso significa que **para adicionar, editar ou remover um projeto você não mexe no HTML/JSX, só edita o array de dados** — exatamente o "Card para acionar cada uma das telas" que a proposta da Fatec pede.

---

## 3. Bibliotecas usadas (e por quê)

| Biblioteca | Para quê |
|---|---|
| `react-router-dom` | Cria as rotas (`/`, `/projetos/:slug`) sem recarregar a página |
| `lucide-react` | Ícones modernos e leves (GitHub, e-mail, seta, etc.) |
| `framer-motion` | Animações suaves de entrada ao rolar a página (o componente `Reveal`) |
| `tailwindcss` | Estilização utilitária — toda a paleta de cores e fontes está centralizada em `tailwind.config.js` |

---

## 4. Rodando o projeto localmente

1. Extraia o `.zip` recebido em uma pasta no seu computador (ex: `Documentos/fatec-portfolio`).
2. Abra essa pasta no VS Code: `Arquivo → Abrir Pasta...`
3. Abra o terminal integrado do VS Code: menu **Terminal → Novo Terminal** (ou `Ctrl + '`).
4. Instale as dependências:

```bash
npm install
```

5. Rode o projeto em modo desenvolvimento:

```bash
npm run dev
```

6. O terminal vai mostrar um endereço, geralmente `http://localhost:5173`. Abra no navegador — o portfólio já estará rodando com os dados de exemplo.

Toda vez que você salvar um arquivo, a página atualiza sozinha (hot reload).

---

## 5. Personalizando com seus dados

### 5.1 Dados pessoais (página mestra)

Abra `src/data/profile.js` e edite:

- `name`, `role`, `bio`
- `github`, `linkedin`, `email`, `location`
- `education` (faculdade, curso, semestre de início, previsão de conclusão)
- `experience` — array de empregos/estágios. Deixe `[]` se ainda não tiver.
- `courses` — cursos de extensão feitos
- `languages` — idiomas e nível

### 5.2 Sua foto

1. Coloque uma imagem (formato `.jpg` ou `.png`) dentro de `public/`, renomeada para `profile.jpg`.
2. No arquivo `src/pages/Home.jsx`, dentro da seção **HERO**, adicione a tag de imagem. Exemplo de bloco para inserir logo abaixo da abertura da seção `<section>`:

```jsx
<img
  src="/profile.jpg"
  alt={profile.name}
  className="w-28 h-28 rounded-full object-cover border-2 border-signal mb-6"
/>
```

### 5.3 Projetos

Abra `src/data/projects.js`. Cada projeto é um objeto com:

- `slug`: identifica a URL (`/projetos/<slug>`) — não use espaços ou acentos
- `semester`: número do semestre (1 a 6)
- `status`: `'concluded'` para projetos prontos, `'empty'` para o projeto ainda não definido (o card fica desativado automaticamente)
- `name`, `tagline`, `description`, `myRole`, `techs`, `github`, `demo`
- `screenshots`: array de caminhos das imagens (veja abaixo)

Já deixei os 6 projetos que você descreveu (StreetWise, RecicleAqui, AcademiTrack, DoeFood, RecicleAqui 2.0 e o 6º em branco). **Troque os links de `github` pelos links reais dos seus repositórios** e ajuste as descrições se quiser.

Quando você definir o 6º projeto, é só editar aquele último objeto: mudar `status` para `'concluded'` e preencher os campos.

### 5.4 Screenshots dos projetos

1. Crie uma pasta para cada projeto dentro de `public/projects/`, por exemplo:
   `public/projects/streetwise/tela-1.png`
2. No `projects.js`, referencie assim:

```js
screenshots: ['/projects/streetwise/tela-1.png', '/projects/streetwise/tela-2.png'],
```

### 5.5 Paleta de cores

A paleta fica centralizada em `tailwind.config.js`, dentro de `colors`:

- `void` — fundo preto principal
- `carbon` — fundo dos cards
- `steel` — bordas e linhas
- `signal` — verde-água (cor de destaque principal)
- `ink` — coral (cor de destaque secundária, usada com moderação)
- `paper` — branco levemente quebrado (texto principal)
- `mist` — cinza (texto secundário)

Se quiser ajustar o tom, troque os valores hexadecimais ali — a mudança se propaga para o site inteiro automaticamente.

---

## 6. Subindo o projeto para o GitHub

No terminal, dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "Primeira versão do portfólio"
```

Agora crie um repositório vazio no GitHub (sem README, sem .gitignore — o projeto já tem um):

1. Acesse [github.com/new](https://github.com/new)
2. Dê um nome, por exemplo `portfolio-fatec`
3. Clique em **Create repository**
4. Copie os comandos que o GitHub mostra na seção **"…or push an existing repository"**, algo parecido com:

```bash
git remote add origin https://github.com/seu-usuario/portfolio-fatec.git
git branch -M main
git push -u origin main
```

---

## 7. Deploy na Vercel

### Opção A — pelo site (mais simples)

1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta do GitHub.
2. Clique em **Add New → Project**.
3. Selecione o repositório `portfolio-fatec` que você acabou de subir.
4. A Vercel detecta automaticamente que é um projeto **Vite** — não precisa mudar nada (Build Command: `vite build`, Output Directory: `dist`).
5. Clique em **Deploy** e aguarde. Em cerca de 1 minuto seu portfólio estará em uma URL como `https://portfolio-fatec.vercel.app`.

Toda vez que você der `git push` para o `main`, a Vercel gera um novo deploy automaticamente.

### Opção B — pelo terminal (CLI)

```bash
npm install -g vercel
vercel login
vercel
```

Siga as perguntas no terminal (aceite as opções padrão). No final ele te dá o link de produção. Para reimplantar depois de mudanças:

```bash
vercel --prod
```

> O arquivo `vercel.json` já incluído no projeto garante que rotas como `/projetos/streetwise` funcionem corretamente ao recarregar a página (sem ele, a Vercel tentaria achar um arquivo físico nesse caminho e retornaria erro 404).

---

## 8. Checklist final (baseado na exigência da Fatec)

- [ ] Identidade visual própria → paleta customizada em `tailwind.config.js`
- [ ] Foto do aluno → adicionar `public/profile.jpg` (seção 5.2)
- [ ] Nome completo → `profile.js`
- [ ] Link do GitHub → `profile.js`
- [ ] Dados do curso (faculdade, curso, início, previsão de conclusão) → `profile.js → education`
- [ ] Experiência profissional (empresa, cargo, atividades) → `profile.js → experience`
- [ ] Cursos de extensão → `profile.js → courses`
- [ ] Idiomas → `profile.js → languages`
- [ ] Card para cada projeto na página principal → automático via `projects.js`
- [ ] Tela individual por projeto (nome, descrição, tecnologias, link do código, screenshots, sua participação) → automático via `ProjectDetail.jsx`
- [ ] Página hospedada → deploy na Vercel (seção 7)

---

## 9. Dúvidas comuns

**Troquei um dado em `profile.js` e não apareceu.**
Confira se salvou o arquivo e se o terminal com `npm run dev` ainda está rodando. Se fechou, rode `npm run dev` de novo.

**Quero mudar a ordem das seções da home.**
Em `src/pages/Home.jsx`, as seções (`Hero`, `Sobre`, `Experiência`, `Formação`, `Projetos`) são blocos `<section>` separados — você pode recortar e colar o bloco inteiro na ordem que quiser.

**Erro `command not found: npm`.**
Reinstale o Node.js e reabra o terminal.

**A Vercel deu erro no build.**
Rode `npm run build` localmente primeiro — se der erro aí, o log do terminal mostra exatamente a linha do problema antes de você subir para a Vercel.
