# ADR 0001: Usar Stencil para criação da biblioteca de Web Components

## Status

Aceito ✅

## Contexto

Precisamos construir uma **biblioteca de componentes UI reutilizável** entre múltiplas plataformas frontend utilizadas na empresa, incluindo **React** e **Vue**. A biblioteca deve ser leve, compatível com múltiplos frameworks e oferecer suporte nativo a TypeScript, encapsulamento de estilos, lazy loading, etc.

Após análise, algumas alternativas consideradas foram:

- **React + Webpack/Storybook**: forte integração com o ecossistema, mas acoplado ao React.
- **Vue 3 + Vite**: similar, mas acoplado ao Vue.
- **Lit**: ótimo para Web Components puros, mas com menos tooling pronto.
- **Stencil**: foco em Web Components compatíveis com múltiplos frameworks, com geração automática de bindings para React/Vue, tipagem forte e integração com Storybook e Tailwind.

## Decisão

Optamos por usar **[Stencil](https://stenciljs.com)** como base para a biblioteca de componentes compartilhada, pois oferece:

- Suporte nativo a **Web Components**
- Geração automática de bindings para **React e Vue**
- Uso de **TypeScript**
- Bom suporte a **Storybook** e **Tailwind CSS**
- Suporte a lazy loading e build otimizados

## Consequências

- A biblioteca será distribuída como Web Components, com wrappers gerados para React/Vue quando necessário.
- Os consumidores precisarão carregar o loader da biblioteca para inicializar os componentes (ou usar os wrappers).
- O build será feito via `stencil build` e distribuído via npm.
- Documentação e integrações específicas com frameworks serão mantidas nos respectivos projetos consumidores.
- A dependência do ecossistema do Stencil (e da sua manutenção) se torna um ponto de atenção no longo prazo.

## Alternativas futuras

- Avaliar uso de **Lit** ou **Vanilla Web Components** se o Stencil deixar de ser mantido.
- Se todos os consumidores convergirem para um único framework, a biblioteca poderá migrar para uma solução mais específica.

