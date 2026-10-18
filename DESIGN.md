---
name: "RONIDIESEL — Baia de Prontidão Azul"
description: "Um sistema industrial editorial em azul e branco que transforma manutenção em prontidão visível."
colors:
  navy-950: "#061A33"
  navy-900: "#0A2342"
  navy-800: "#103B68"
  action-blue: "#0A66FF"
  action-blue-hover: "#0757D5"
  clear-blue: "#DCEBFF"
  mineral: "#F5F8FC"
  white: "#FFFFFF"
  structural-line: "#7894B8"
  ink-blue: "#102A4C"
  muted-blue: "#B8CCE8"
typography:
  display:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(3.4rem, 5.8vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(2.8rem, 5vw, 5.4rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(1.8rem, 2.7vw, 3.1rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.02em"
rounded:
  square: "0px"
  indicator: "50%"
spacing:
  xs: "12px"
  sm: "18px"
  md: "22px"
  lg: "32px"
  xl: "48px"
  section-min: "118px"
  section-max: "196px"
components:
  button-primary:
    backgroundColor: "{colors.action-blue}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "14px 22px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.action-blue-hover}"
    textColor: "{colors.white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "14px 22px"
    height: "52px"
  button-dark:
    backgroundColor: "{colors.navy-950}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "14px 22px"
    height: "52px"
  status-plate:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-950}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "15px 17px"
---

# Design System: RONIDIESEL — Baia de Prontidão Azul

## Overview

**Creative North Star: "Baia de Prontidão Azul"**

A interface é uma baia técnica organizada para devolver movimento. Marinho estrutural, azul de ação, azul-claro e superfícies branco/mineral formam uma linguagem precisa; vigas, trilhos, divisores compartilhados e fotografia operacional tornam o cuidado visível sem recorrer a emblemas ou nostalgia de oficina.

O azul não é acabamento: ele organiza campos inteiros, ações e estados. A confiança nasce de hierarquia, contraste e clareza. Títulos são largos e decisivos, as superfícies se encontram sem folgas decorativas e as fotografias preservam cor natural com contraste controlado.

**Key Characteristics:**

- Contraste alto entre marinho estrutural, azul de ação e superfícies brancas/minerais.
- Tipografia Geist larga e compacta, com títulos limitados a duas ou três linhas.
- Geometria ortogonal inspirada em baias, vigas, placas e linhas de inspeção.
- Fotografia colorida com saturação natural, revelação por enquadramento e ganho discreto de profundidade na interação.
- Movimento funcional com scrub, empilhamento e progressão; estado estático completo para movimento reduzido.

## Colors

### Primary

- **Marinho Estrutural (`#061A33`):** fundo principal, cabeçalho, rodapé e painéis técnicos.
- **Azul de Ação (`#0A66FF`):** ações primárias, foco, seleção e progressão. Branco sobre este azul atende AA.

### Secondary

- **Azul Claro (`#DCEBFF`):** superfície de orientação, alternância editorial e estados suaves.
- **Azul Profundo (`#103B68`):** painéis intermediários e hover em superfícies escuras.

### Neutral

- **Branco (`#FFFFFF`):** superfície clara principal e texto de máximo contraste no marinho.
- **Mineral (`#F5F8FC`):** fundo editorial claro, nunca amarelado.
- **Azul-Tinta (`#102A4C`):** texto principal sobre branco e mineral.
- **Azul Suave (`#B8CCE8`):** texto secundário sobre marinho.
- **Linha Estrutural (`#7894B8`):** divisores e contornos; não serve como texto pequeno.

### Named Rules

**The Blue Signal Is Sparse Rule.** O azul de ação orienta ação, seleção e passagem. Campos azuis grandes são reservados a momentos de decisão, não a decoração recorrente.

**The Blue Means Inspection Rule.** Estados de inspeção usam o mesmo espectro azul em linha, ponto ou varredura; função e marca trabalham como uma única linguagem cromática.

## Typography

Geist é a única família. Display usa até `6rem`, tracking nunca abaixo de `-0.04em`, e corpo permanece entre 65 e 75 caracteres por linha quando o contexto é de leitura.

**The Wide Signal Rule.** H1 e H2 usam containers amplos e `text-wrap: balance`; nenhum título forma uma coluna de quatro ou mais linhas no desktop. O H1 termina em duas ou três linhas.

## Layout

Contêiner máximo de 1440px, grid de 12 colunas e divisões 7/5, 6/6, 4/8 ou 5/7. Seções usam espaçamento vertical fluido entre 118px e 196px. Grids bento são gapless, compartilham divisores, usam `grid-auto-flow: dense` e têm ocupação calculada sem células vazias.

A barra superior mede 84px no desktop e 72px no mobile. A 760px ou menos, painéis empilham, ações podem ocupar a largura disponível, elementos sticky voltam ao fluxo e o padding lateral cai para 20–22px.

**The Bay Grid Rule.** Elementos irmãos formam uma estrutura contínua. Bordas e superfícies compartilhadas precedem cartões soltos.

## Elevation & Depth

O sistema é plano. Profundidade vem de contraste, fotografia e sobreposição. A única sombra permitida é `0 28px 52px rgba(0, 0, 0, .28)` em painel sticky que precise comunicar posição física.

**The Structural Depth Rule.** Camada, borda e sobreposição vêm primeiro; sombra existe apenas no empilhamento funcional.

## Shapes

Botões, placas, cartões, imagens e controles têm cantos quadrados. O único círculo recorrente é o indicador de estado.

**The One Circle Rule.** Círculos pertencem a indicadores pontuais; ações e estruturas permanecem quadradas.

## Components

### Buttons

- Altura mínima de 52px, cantos quadrados e peso 800.
- Primário: `#0A66FF` com texto branco; hover `#0757D5`.
- Ghost: contorno `#7894B8` e texto branco; hover branco com texto marinho.
- Foco: outline branco ou azul de 3px com offset de 4px, conforme a superfície.
- Hover sobe no máximo 3px com `cubic-bezier(.16,1,.3,1)`.

### Navigation

Viga marinho translúcida com blur funcional de 14px. Links em branco/azul suave recebem linha azul no hover e estado ativo. No mobile, menu vira coluna com divisores e acionador quadrado.

### Brand Slot

O cabeçalho e o rodapé usam a logomarca oficial RONIDIESEL recortada em fundo transparente, integrada diretamente às superfícies marinho. A versão web otimizada preserva a arte e mantém leitura clara sem duplicar o wordmark em texto ou criar uma placa retangular ao redor da marca.

### Inspection Media

Imagens começam coloridas, com saturação levemente contida e contraste controlado. A entrada revela o enquadramento por `clip-path`; hover e foco elevam a saturação e aplicam escala de até 1.025. A mídia vive em retângulos completos, sem máscaras orgânicas simuladas.

### Location Media

Endereço, telefone, ação de contato e mapa formam um conjunto direto e contínuo. A localização não recebe vídeo ou animação decorativa: a rota permanece como conteúdo principal.

### WhatsApp Action

O atalho persistente usa um botão quadrado azul de 52px, com ícone branco, foco visível e rótulo acessível. A cor não cria um novo verde de marca: o canal é comunicado pelo ícone e pelo texto contextual.

### Process Routes

Etapas reais podem usar numeração. A sequência principal forma uma trilha contínua, com divisores compartilhados, coluna numérica e mudança de superfície no passo final; não usa cartões soltos, imagens genéricas ou empilhamento sticky. GSAP e ScrollTrigger são inicializados apenas dentro de `gsap.matchMedia()` para `(prefers-reduced-motion: no-preference)`, e o conteúdo permanece visível por padrão. Em `reduce`, scrub e transforms são removidos e todo conteúdo fica no estado final.

### Carousel Controls

Controles são quadrados de 54px, transparentes e contornados. Hover usa azul de ação com ícone branco; contagem usa numerais tabulares.

## Do's and Don'ts

### Do

- Use azul em papéis claros: marinho para estrutura, azul vivo para ação e azul-claro para orientação.
- Preserve títulos largos em duas ou três linhas.
- Faça grids gapless densos e matematicamente preenchidos.
- Use fotografia colorida somente quando a imagem representar literalmente o conteúdo; na falta de fotografia própria, prefira estrutura tipográfica.
- Respeite o gate obrigatório de `prefers-reduced-motion`.

### Don't

- Não use acentos fora da escala azul/branco nem superfícies claras amareladas.
- Não use meta-labels como “SEÇÃO 01”, “NOSSOS SERVIÇOS” ou “QUEM SOMOS”.
- Não arredonde componentes estruturais nem transforme cada bloco em cartão isolado.
- Não use sombras fora do empilhamento sticky.
- Não use selos, stamps, emblemas ou provas comerciais não confirmadas.
