## Design System Web Components

Este repositório é o ponto de partida para criar e documentar os componentes visuais. Ele fornece uma base sólida, com suporte a tokens de design (cores, tipografia, espaçamentos, etc), acessibilidade e integração com ferramentas de documentação como Storybook.

Stencil é um compilador que permite construir aplicações web rápidas utilizando Web Components nativos. Ele combina os melhores conceitos dos frameworks modernos (como React e Vue) em uma ferramenta de **tempo de compilação**, e não de execução.

Stencil utiliza TypeScript, JSX, um virtual DOM leve, binding unidirecional eficiente, renderização assíncrona (inspirada no React Fiber), e lazy-loading nativo para gerar Web Components 100% compatíveis com os padrões da web, funcionando em qualquer navegador moderno que suporte a especificação de Custom Elements.

Os componentes criados com Stencil são Web Components puros, o que significa que funcionam em qualquer framework (React, Vue, Angular) ou mesmo sem framework algum.

---

## Começando

Clone o projeto:

```bash
git clone https://github.com/RodrigoBLima/ds-web-components.git
cd ds-web-components
```

Instale as dependências e inicie o ambiente de desenvolvimento:

```bash
npm install
npm run build
npm start
```

---

## Comandos disponíveis

### Build de produção

```bash
npm run build
```

Gera os arquivos otimizados na pasta `dist/`, prontos para serem publicados ou utilizados por outros projetos da empresa.

### Testes

```bash
npm test
```

Executa os testes unitários definidos para os componentes.

### Criação de novos componentes

```bash
npm run generate wc-nome-do-componente
```

> **Atenção:** Por padrão, o nome de um Web Component **deve conter um hífen** (ex: `wc-button`, `wc-modal`). Isso segue a especificação da W3C para Custom Elements.

---

## Boas práticas e convenções

### Convenção de nomes

- Todos os componentes devem começar com o prefixo `wc-`, sigla de "Web components".
- Exemplo: `wc-button`, `wc-input`, `wc-modal`.

### Organização de pastas

```txt
src/
├── components/
│   └── wc-button/
│       ├── wc-button.tsx
│       ├── wc-button.css
│       ├── wc-button.spec.tsx
│       readme.md
│       └── button.stories.ts
└── tokens/
│     ├── fonts/
│     │   └── index.css
└── styles/
│     ├── tailwind.css
│     └── global.css
```

- **components/**: cada componente possui sua própria pasta com arquivos isolados.
- **tokens/**: onde ficam os tokens de design reutilizáveis (cores, fontes, tamanhos).
- **styles/**: estilos globais e utilitários de Tailwind.

---

## Tailwind CSS

Este projeto já está configurado com **Tailwind v4**. A estilização de todos os componentes deve ser feita usando as classes utilitárias do Tailwind, mantendo consistência e escalabilidade.

Tokens de design como `bg-primary-100`, `font-sans`, etc., são definidos nos arquivos de tema personalizados.

---
