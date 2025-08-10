# ADR 0002: Usar Storybook v8

## Status

Aceito ✅

## Contexto

O projeto utiliza Stencil para a construção de Web Components reutilizáveis. Como parte do processo de desenvolvimento e documentação visual desses componentes, é necessário integrar uma ferramenta de visualização e testes isolados. O Storybook é uma das ferramentas mais consolidadas para essa finalidade, oferecendo suporte a diversos frameworks e Web Components nativamente.

Recentemente, foi lançada a versão 9 do Storybook, com várias melhorias e mudanças estruturais. No entanto, a compatibilidade com projetos Stencil ainda não está completamente estável ou bem documentada para essa nova versão.

## Decisão

Optamos por utilizar a versão 8 do Storybook, que é estável, suportada oficialmente pelo Stencil e amplamente testada em diversos cenários de uso com Web Components.

## Consequências

Garantimos maior estabilidade e previsibilidade no desenvolvimento de componentes usando Stencil.

Evitamos problemas de compatibilidade e erros relacionados à resolução de dependências que ocorrem com a versão 9.

A equipe consegue manter a produtividade e foco no desenvolvimento dos componentes, sem precisar contornar limitações ou bugs em versões ainda não maduras para o nosso caso de uso.

## Alternativas futuras

Assim que a versão 9 do Storybook amadurecer o suporte a Web Components e Stencil — seja por meio da comunidade, contribuições do time core do Storybook ou por melhorias na integração via addons —, poderemos avaliar a migração. Isso poderá trazer vantagens como novas funcionalidades, melhorias de performance e integração com ferramentas modernas de documentação e testes visuais.
