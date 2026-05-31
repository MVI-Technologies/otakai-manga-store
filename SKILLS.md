# SKILLS.md — PageCraft Agent

> Catálogo completo de habilidades técnicas e de design do PageCraft Agent.
> Cada skill define **o que o agente sabe fazer**, **como ele aplica**, e **os critérios de qualidade** esperados no output.
> Referência direta para o `AGENTS.md`.

---

## Índice de Skills

### 🎨 Design
- [SK-D01 — Design System Extraction](#sk-d01--design-system-extraction)
- [SK-D02 — Typography Engineering](#sk-d02--typography-engineering)
- [SK-D03 — Color System & Tokens](#sk-d03--color-system--tokens)
- [SK-D04 — Spacing & Layout Composition](#sk-d04--spacing--layout-composition)
- [SK-D05 — Background & Atmosphere Design](#sk-d05--background--atmosphere-design)
- [SK-D06 — Motion & Micro-interactions](#sk-d06--motion--micro-interactions)
- [SK-D07 — CTA Design & Conversion Copy](#sk-d07--cta-design--conversion-copy)
- [SK-D08 — Responsive Design](#sk-d08--responsive-design)

### ♿ Qualidade & Acessibilidade
- [SK-Q01 — Accessibility Audit & Remediation](#sk-q01--accessibility-audit--remediation)
- [SK-Q02 — Performance Optimization](#sk-q02--performance-optimization)
- [SK-Q03 — Code Quality & Refactoring](#sk-q03--code-quality--refactoring)
- [SK-Q04 — SEO On-Page](#sk-q04--seo-on-page)

### 🏗️ Engenharia de Features
- [SK-F01 — Component Architecture](#sk-f01--component-architecture)
- [SK-F02 — State Management](#sk-f02--state-management)
- [SK-F03 — Form Engineering](#sk-f03--form-engineering)
- [SK-F04 — Data Tables & List Views](#sk-f04--data-tables--list-views)
- [SK-F05 — Authentication & Authorization](#sk-f05--authentication--authorization)
- [SK-F06 — Admin Panel Construction](#sk-f06--admin-panel-construction)
- [SK-F07 — Scheduling & Booking System](#sk-f07--scheduling--booking-system)
- [SK-F08 — Notification & Feedback System](#sk-f08--notification--feedback-system)
- [SK-F09 — API Integration](#sk-f09--api-integration)
- [SK-F10 — Dashboard & Data Visualization](#sk-f10--dashboard--data-visualization)

### 🧰 Stack-Specific
- [SK-S01 — React + Tailwind](#sk-s01--react--tailwind)
- [SK-S02 — React Puro (CSS Modules / Styled Components)](#sk-s02--react-puro-css-modules--styled-components)
- [SK-S03 — HTML + CSS + JS Vanilla](#sk-s03--html--css--js-vanilla)
- [SK-S04 — Vue / Nuxt](#sk-s04--vue--nuxt)
- [SK-S05 — TanStack Start & Nitro Engine (Vercel Override)](#sk-s05--tanstack-start--nitro-engine-vercel-override)
- [SK-S06 — Vite Dev Server Public Directory Caching & Asset Recovery](#sk-s06--vite-dev-server-public-directory-caching--asset-recovery)

---

## 🎨 DESIGN SKILLS

---

### SK-D01 — Design System Extraction

**O que é:** Capacidade de ler um codebase existente e extrair formalmente o design system implícito — mesmo quando ele não foi documentado intencionalmente.

**Quando usar:** Sempre que o agente precisar construir algo novo em cima de um projeto existente, ou antes de qualquer refatoração visual de escala.

**Como aplicar:**

1. Percorrer todos os arquivos de estilo (CSS, Tailwind config, styled-components, CSS Modules)
2. Identificar valores repetidos de cor, espaçamento, border-radius, tipografia e sombra
3. Detectar componentes de UI recorrentes e documentar seu padrão visual
4. Registrar o sistema de grid e breakpoints em uso
5. Registrar bibliotecas de animação e padrões de transição

**Output esperado:**

```markdown
## Design DNA — [Nome do Projeto]

| Token           | Valor                        |
|-----------------|------------------------------|
| Primary color   | #E8000D                      |
| Surface color   | #1A1A1A                      |
| Text primary    | #FFFFFF                      |
| Text muted      | #888888                      |
| Border          | rgba(255,255,255,0.1)        |
| Radius sm       | 4px                          |
| Radius md       | 8px                          |
| Radius lg       | 16px                         |
| Shadow card     | 0 4px 24px rgba(0,0,0,0.4)  |
| Transition base | 0.2s ease                    |
| Font display    | 'Bebas Neue', sans-serif     |
| Font body       | 'Barlow Condensed', sans-serif |
| Spacing base    | 4px                          |
| Grid columns    | 12 / max-width 1280px        |
| Breakpoints     | sm:640 md:768 lg:1024 xl:1280 |
```

**Critério de qualidade:** Nenhum valor hardcoded deve aparecer em código novo. 100% dos valores devem referenciar tokens extraídos nesta etapa.

---

### SK-D02 — Typography Engineering

**O que é:** Capacidade de escolher, configurar e aplicar sistemas tipográficos que expressam a identidade da marca com precisão e são funcionalmente corretos em todos os tamanhos de tela.

**Como aplicar:**

- Estabelecer uma escala tipográfica com no mínimo 6 níveis:
  ```
  Display  → clamp(3.5rem, 8vw, 9rem)
  H1       → clamp(2.25rem, 5vw, 4.5rem)
  H2       → clamp(1.75rem, 3.5vw, 3rem)
  H3       → clamp(1.25rem, 2.5vw, 2rem)
  Body     → clamp(1rem, 1.5vw, 1.125rem)
  Caption  → clamp(0.75rem, 1vw, 0.875rem)
  ```
- Parear uma fonte display expressiva com uma fonte de corpo funcional — nunca usar a mesma família para ambos
- Definir `line-height` por nível: display 0.9–1.0, headings 1.1–1.2, body 1.5–1.7
- Usar `letter-spacing: -0.02em` a `-0.04em` em headings grandes; `0` a `0.02em` em body
- Aplicar `font-feature-settings: "kern" 1, "liga" 1` para rendering refinado
- Nunca usar Arial, Roboto, Inter ou system-ui em projetos com identidade visual forte

**Fontes por personalidade:**

| Personalidade | Display | Body |
|---|---|---|
| Editorial / Brutal | Bebas Neue, Anton, Black Han Sans | DM Mono, Barlow Condensed |
| Luxury / Refinado | Cormorant Garamond, Playfair Display | Lato, Jost |
| Tech / Moderno | Space Mono, JetBrains Mono | Outfit, Syne |
| Orgânico / Artesanal | Fraunces, Libre Baskerville | Nunito, Lora |
| Playful / Jovem | Righteous, Titan One | Poppins, Nunito |

**Critério de qualidade:** A tipografia deve comunicar a personalidade da marca antes mesmo de o usuário ler uma palavra. Hierarquia visual legível em 3 segundos.

---

### SK-D03 — Color System & Tokens

**O que é:** Capacidade de construir e manter um sistema de cores semântico baseado em tokens CSS, garantindo consistência, acessibilidade e facilidade de manutenção.

**Como aplicar:**

```css
/* Estrutura de tokens em duas camadas */

/* Camada 1: Primitivos (valores brutos) */
:root {
  --red-500: #E8000D;
  --red-400: #FF3333;
  --red-900: #5C0005;
  --black-900: #0A0A0A;
  --black-800: #1A1A1A;
  --black-700: #2A2A2A;
  --white: #FFFFFF;
  --white-muted: rgba(255, 255, 255, 0.6);
}

/* Camada 2: Semânticos (contexto de uso) */
:root {
  --color-primary:       var(--red-500);
  --color-primary-hover: var(--red-400);
  --color-bg:            var(--black-900);
  --color-surface:       var(--black-800);
  --color-surface-raised:var(--black-700);
  --color-text:          var(--white);
  --color-text-muted:    var(--white-muted);
  --color-border:        rgba(255, 255, 255, 0.08);
  --color-cta:           var(--red-500);
  --color-danger:        #FF4444;
  --color-success:       #22C55E;
  --color-warning:       #F59E0B;
}
```

**Verificação de contraste obrigatória:**

| Par | Ratio mínimo | Ferramenta |
|---|---|---|
| Texto normal em fundo | 4.5:1 | WCAG AA |
| Texto grande (18px+) | 3:1 | WCAG AA |
| Elementos de UI (bordas, ícones) | 3:1 | WCAG AA |
| Texto em botões | 4.5:1 | WCAG AA |

**Critério de qualidade:** Nenhum par de cores no projeto viola o WCAG AA. Todos os valores de cor referenciam tokens semânticos.

---

### SK-D04 — Spacing & Layout Composition

**O que é:** Capacidade de aplicar um sistema de espaçamento coerente e criar layouts com composição visual intencional — além do óbvio grid centralizado.

**Escala de espaçamento (base 4px):**

```
4px   → micro (gap entre ícone e label)
8px   → xs
12px  → sm
16px  → md (padrão de padding interno)
24px  → lg
32px  → xl
48px  → 2xl
64px  → 3xl (separação entre subseções)
96px  → 4xl (separação entre seções)
128px → 5xl (hero padding top/bottom)
```

**Técnicas de composição avançadas:**

- **Diagonal breaks:** `clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%)` para separar seções com ângulo
- **Asymmetric grids:** `grid-template-columns: 2fr 1fr` quebrando a simetria padrão
- **Overlapping elements:** `margin-top: -48px` para sobreposição intencional entre seções
- **Pinned elements:** `position: sticky` em elementos de destaque dentro de scroll
- **Full-bleed:** `width: 100vw; margin-left: calc(-50vw + 50%)` para elementos que quebram o container
- **Negative space:** Seções com `padding: 128px 0` são legítimas — o vazio guia o olhar

**Critério de qualidade:** O layout deve ter pelo menos um momento de composição não-convencional que cria tensão visual positiva. Nenhum `margin` ou `padding` deve aparecer como valor mágico.

---

### SK-D05 — Background & Atmosphere Design

**O que é:** Capacidade de criar fundos com profundidade e atmosfera usando CSS puro, sem depender de imagens externas.

**Técnicas disponíveis:**

**Gradient Mesh:**
```css
background: 
  radial-gradient(ellipse at 20% 50%, rgba(232,0,13,0.15) 0%, transparent 60%),
  radial-gradient(ellipse at 80% 20%, rgba(232,0,13,0.08) 0%, transparent 50%),
  #0A0A0A;
```

**Halftone Pattern:**
```css
background-image: radial-gradient(circle, #333 1px, transparent 1px);
background-size: 20px 20px;
```

**Grain Overlay (SVG Filter):**
```css
.grain::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,...feTurbulence...");
  opacity: 0.04;
  pointer-events: none;
  z-index: 9999;
}
```

**Speed Lines (manga):**
```css
background: repeating-conic-gradient(
  from 0deg at 50% 50%,
  transparent 0deg,
  transparent 2deg,
  rgba(255,255,255,0.02) 2deg,
  rgba(255,255,255,0.02) 3deg
);
```

**Noise Texture:**
```css
filter: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/><feColorMatrix type='saturate' values='0'/></filter></svg>#n");
```

**Critério de qualidade:** Nenhuma seção da landing page deve ter fundo sólido sem algum tratamento. A atmosfera deve reforçar a identidade emocional da marca.

---

### SK-D06 — Motion & Micro-interactions

**O que é:** Capacidade de implementar animações que comunicam hierarquia, guiam atenção e criam sensação de qualidade — sem nunca serem decorativas pelo sake da decoração.

**Princípios de motion:**

1. **Propósito:** cada animação deve responder a uma pergunta: o que ela comunica?
2. **Velocidade:** rápido para respostas a input (100–200ms), médio para transições de estado (200–400ms), lento para narrativa (400–800ms)
3. **Easing:** `ease-out` para entradas, `ease-in` para saídas, `ease-in-out` para loops
4. **Stagger:** elementos em lista entram com `animation-delay` crescente (ex: `calc(var(--i) * 80ms)`)

**Padrões obrigatórios:**

```css
/* Scroll reveal universal */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Hover em cards */
.card {
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out, border-color 0.2s ease;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.5);
  border-color: var(--color-primary);
}

/* Hover em botões */
.btn {
  transition: transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
}
.btn:hover {
  transform: scale(1.03);
  box-shadow: 0 0 24px rgba(232,0,13,0.4);
}

/* Prefers-reduced-motion (OBRIGATÓRIO) */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Critério de qualidade:** Todas as transições de estado têm feedback visual. O `prefers-reduced-motion` está implementado globalmente. Nenhuma animação dura mais de 800ms em condições normais.

---

### SK-D07 — CTA Design & Conversion Copy

**O que é:** Capacidade de projetar botões e textos de call-to-action que maximizam a taxa de clique e conversão.

**Anatomia de um CTA eficaz:**

```
[VERBO DE AÇÃO] + [BENEFÍCIO IMEDIATO] + [ZERO FRICÇÃO]

Fraco:  "Enviar"  →  "Saiba mais"  →  "Clique aqui"
Forte:  "EXPLORAR CATÁLOGO GRÁTIS"  →  "COMEÇAR AGORA"  →  "QUERO MEU DESCONTO"
```

**Hierarquia de CTAs por página:**

| Nível | Estilo | Posição | Exemplo |
|---|---|---|---|
| Primário | Sólido, cor de destaque, bold | Hero, mid-page, footer | "COMPRAR AGORA" |
| Secundário | Ghost / outline | Ao lado do primário | "VER MAIS DETALHES" |
| Terciário | Link com seta | In-content | "Conhecer todos os planos →" |

**Checklist de CTA:**
- [ ] Altura mínima de 44px (acessível em toque)
- [ ] Padding horizontal mínimo de 24px
- [ ] Fonte em uppercase + bold para CTAs primários
- [ ] Hover state definido (transform + shadow + cor)
- [ ] Focus ring visível para navegação por teclado
- [ ] Espaço suficiente ao redor — nunca comprimido por outros elementos
- [ ] Repetido em intervalos lógicos (hero, pós-prova-social, footer)
- [ ] Versão mobile empilhada verticalmente se houver dois CTAs lado a lado

**Critério de qualidade:** O CTA primário deve ser identificável em 1 segundo de olhar para qualquer viewport. Hover state visível e satisfatório.

---

### SK-D08 — Responsive Design

**O que é:** Capacidade de implementar layouts que funcionam com a mesma qualidade de design do menor smartphone (320px) ao ultrawide (1920px+).

**Sistema de breakpoints padrão:**

```css
/* Mobile-first */
/* xs: 0–639px   → base (sem prefixo) */
/* sm: 640px+    → @media (min-width: 640px)  */
/* md: 768px+    → @media (min-width: 768px)  */
/* lg: 1024px+   → @media (min-width: 1024px) */
/* xl: 1280px+   → @media (min-width: 1280px) */
/* 2xl: 1536px+  → @media (min-width: 1536px) */
```

**Padrões de grid responsivo:**

```css
/* Cards: 1 → 2 → 3 colunas */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}
@media (min-width: 640px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); } }

/* Container com max-width */
.container {
  width: 100%;
  max-width: 1280px;
  margin-inline: auto;
  padding-inline: clamp(1rem, 5vw, 4rem);
}
```

**Regras mobile obrigatórias:**
- Nenhum texto menor que 16px em body copy
- Botões com mínimo de 44px de altura
- Elementos interativos com pelo menos 8px de gap entre si
- Imagens com `width: 100%` e `height: auto` por padrão
- Navegação colapsa para hamburger menu em telas < 768px
- Formulários em coluna única no mobile
- Tabelas: `overflow-x: auto` ou layout alternativo no mobile

**Critério de qualidade:** A página deve ser testada mentalmente em 320px, 768px e 1440px antes de ser considerada completa.

---

## ♿ QUALIDADE & ACESSIBILIDADE

---

### SK-Q01 — Accessibility Audit & Remediation

**O que é:** Capacidade de identificar e corrigir violações de acessibilidade seguindo WCAG 2.1 nível AA.

**Checklist de auditoria completa:**

**Percepção:**
- [ ] Todo conteúdo não-textual tem alternativa em texto (`alt`, `aria-label`, `title`)
- [ ] Contraste de cor: 4.5:1 para texto normal, 3:1 para texto grande e UI
- [ ] Conteúdo não depende apenas de cor para transmitir informação
- [ ] Vídeos têm legendas; áudios têm transcrição

**Operação:**
- [ ] Toda funcionalidade acessível via teclado (Tab, Enter, Space, Arrow keys, Esc)
- [ ] Foco visível em todos os elementos interativos (nunca `outline: none` sem substituto)
- [ ] Sem armadilhas de foco (modais devem prender e liberar foco corretamente)
- [ ] Skip link "Pular para conteúdo" como primeiro elemento focável
- [ ] Animações podem ser pausadas ou desabilitadas (`prefers-reduced-motion`)

**Compreensão:**
- [ ] `lang` definido no `<html>` (`lang="pt-BR"`)
- [ ] Mensagens de erro identificam o campo e descrevem o problema
- [ ] Labels associadas a todos os inputs (`for`/`id` ou `aria-labelledby`)
- [ ] Não há alterações de contexto inesperadas ao focar um elemento

**Robustez:**
- [ ] HTML válido e semanticamente correto
- [ ] Landmarks usados: `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<aside>`
- [ ] Hierarquia de headings lógica: `h1` → `h2` → `h3` (sem pulos)
- [ ] Componentes ARIA corretos: `role`, `aria-expanded`, `aria-controls`, `aria-selected`

**Remediação padrão:**

```html
<!-- ❌ Errado -->
<div class="btn" onclick="...">Comprar</div>

<!-- ✅ Correto -->
<button type="button" class="btn" aria-label="Comprar produto X">
  Comprar
</button>

<!-- ❌ Errado -->
<input type="email" placeholder="Seu e-mail">

<!-- ✅ Correto -->
<label for="email">E-mail</label>
<input type="email" id="email" name="email" 
       autocomplete="email" aria-required="true"
       aria-describedby="email-error">
<span id="email-error" role="alert" aria-live="polite"></span>
```

**Critério de qualidade:** Lighthouse Accessibility = 100. Navegação completa por teclado sem mouse.

---

### SK-Q02 — Performance Optimization

**O que é:** Capacidade de identificar e corrigir gargalos de performance que afetam Core Web Vitals e experiência real do usuário.

**Core Web Vitals — metas:**

| Métrica | Meta | O que é |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | Tempo para o maior elemento visível carregar |
| CLS (Cumulative Layout Shift) | < 0.1 | Estabilidade do layout durante carregamento |
| FID / INP | < 200ms | Responsividade a inputs do usuário |

**Checklist de otimização:**

**Imagens:**
```html
<!-- Formato moderno + lazy loading + dimensões explícitas -->
<img 
  src="hero.webp" 
  alt="..." 
  width="1200" height="600"
  loading="lazy"
  decoding="async"
>

<!-- Hero image: eager (above the fold) -->
<img src="hero.webp" alt="..." loading="eager" fetchpriority="high">
```

**Fontes:**
```html
<!-- Preconnect + display=swap -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
```

**Scripts:**
```html
<!-- Defer scripts não-críticos -->
<script src="analytics.js" defer></script>

<!-- Async para scripts independentes -->
<script src="widget.js" async></script>
```

**CSS:**
- Remover CSS não utilizado (PurgeCSS para Tailwind)
- Inline crítico CSS no `<head>` para above-the-fold
- Evitar `@import` em CSS (bloqueia renderização)

**Prevenção de CLS:**
- Sempre definir `width` e `height` explícitos em imagens e vídeos
- Reservar espaço para ads e embeds com aspect-ratio
- Evitar inserção de conteúdo acima de conteúdo existente via JS

**Critério de qualidade:** Lighthouse Performance ≥ 85 em mobile. LCP < 2.5s em conexão 4G simulada.

---

### SK-Q03 — Code Quality & Refactoring

**O que é:** Capacidade de identificar e corrigir dívida técnica em CSS, HTML e JavaScript sem quebrar funcionalidade existente.

**Sinais de código problemático:**

| Sintoma | Diagnóstico | Solução |
|---|---|---|
| Valores de cor repetidos | Sem design tokens | Extrair para CSS custom properties |
| `!important` frequente | Guerra de especificidade | Refatorar seletores e estrutura de arquivos |
| Classes com nomes como `.red-text-big` | Design acoplado ao HTML | Renomear para semântico: `.section-title--highlighted` |
| Componentes com 500+ linhas | Responsabilidade única violada | Extrair sub-componentes |
| `useEffect` sem cleanup | Memory leak | Adicionar função de retorno |
| Props drilling 3+ níveis | Estado mal posicionado | Elevar estado ou usar Context/Zustand |
| CSS duplicado entre componentes | Sem abstração | Extrair para classe utilitária ou componente |
| Inline styles para valores repetidos | Inconsistência garantida | Mover para tokens |

**Checklist de código limpo:**
- [ ] Nenhum `console.log` em produção
- [ ] Sem código comentado — usar Git para histórico
- [ ] Componentes com responsabilidade única
- [ ] Nomes de variáveis e funções descritivos (`handleBookingSubmit`, não `handleClick`)
- [ ] TypeScript tipos definidos para todas as props e dados de API
- [ ] Imports organizados: externos → internos → relativos
- [ ] Arquivo de constantes para strings e valores mágicos

**Critério de qualidade:** Um desenvolvedor novo consegue entender o propósito de qualquer arquivo em menos de 30 segundos.

---

### SK-Q04 — SEO On-Page

**O que é:** Capacidade de implementar as otimizações técnicas de SEO que impactam diretamente o ranking e a indexabilidade.

**Checklist:**
- [ ] `<title>` único por página, 50–60 caracteres, inclui keyword principal
- [ ] `<meta name="description">` 140–160 caracteres, inclui CTA
- [ ] `<h1>` único por página, contém keyword principal
- [ ] Hierarquia de headings lógica (h1 → h2 → h3)
- [ ] Imagens com `alt` descritivo e relevante
- [ ] URLs semânticas e legíveis (`/produtos/shonen` não `/p?id=42`)
- [ ] Schema markup para o tipo de conteúdo (Product, LocalBusiness, FAQ, etc.)
- [ ] `<link rel="canonical">` quando há conteúdo duplicado
- [ ] Open Graph tags para compartilhamento em redes sociais
- [ ] Sitemap XML gerado e referenciado no robots.txt
- [ ] Sem conteúdo oculto com `display: none` que deva ser indexado

**Exemplo de meta tags completo:**
```html
<title>Mangá Noir — Maior Loja de Mangás do Brasil | Entrega Rápida</title>
<meta name="description" content="Explore +12.000 títulos de mangá com entrega para todo o Brasil. Shonen, Seinen, Shojo e muito mais. Frete grátis acima de R$150.">
<meta property="og:title" content="Mangá Noir — Sua Loja de Mangás">
<meta property="og:description" content="12.000+ títulos. Entrega rápida. Para quem vive a história.">
<meta property="og:image" content="https://site.com/og-image.jpg">
<meta property="og:url" content="https://manganoir.com.br">
<link rel="canonical" href="https://manganoir.com.br">
```

**Critério de qualidade:** Lighthouse SEO = 100. Todas as páginas indexáveis têm title, description e h1 únicos e otimizados.

---

## 🏗️ ENGENHARIA DE FEATURES

---

### SK-F01 — Component Architecture

**O que é:** Capacidade de projetar e implementar componentes reutilizáveis, testáveis e fáceis de manter.

**Princípios:**

1. **Single Responsibility:** cada componente faz uma coisa muito bem
2. **Open/Closed:** extensível via props, fechado para modificação direta
3. **Composition over inheritance:** `<Card><CardHeader /><CardBody /></Card>`
4. **Co-location:** estilos, lógica e testes próximos ao componente

**Anatomia de um componente bem estruturado (React):**

```tsx
// components/BookingCard/BookingCard.tsx

import { type FC } from 'react'
import styles from './BookingCard.module.css'
import { Badge } from '@/components/ui/Badge'
import { formatDate } from '@/utils/dateUtils'
import type { Booking } from '@/types/booking'

interface BookingCardProps {
  booking: Booking
  onConfirm: (id: string) => void
  onCancel: (id: string) => void
  isLoading?: boolean
}

export const BookingCard: FC<BookingCardProps> = ({
  booking,
  onConfirm,
  onCancel,
  isLoading = false,
}) => {
  // 1. Derived state / computed values
  const isUpcoming = new Date(booking.date) > new Date()
  
  // 2. Handlers
  const handleConfirm = () => onConfirm(booking.id)
  const handleCancel = () => onCancel(booking.id)

  // 3. Render
  return (
    <article className={styles.card} aria-label={`Agendamento de ${booking.customer.name}`}>
      {/* ... */}
    </article>
  )
}
```

**Estrutura de pastas de componente:**
```
/BookingCard
  ├── BookingCard.tsx         # Componente principal
  ├── BookingCard.module.css  # Estilos escopados
  ├── BookingCard.test.tsx    # Testes unitários
  └── index.ts                # Re-export limpo
```

**Critério de qualidade:** Nenhum componente com mais de 200 linhas sem justificativa. Props tipadas com TypeScript. Sem lógica de negócio misturada com JSX.

---

### SK-F02 — State Management

**O que é:** Capacidade de escolher e implementar a estratégia de gerenciamento de estado correta para cada contexto.

**Árvore de decisão:**

```
O estado é local a um componente?
  └─ Sim → useState / useReducer

O estado precisa ser compartilhado entre poucos componentes próximos?
  └─ Sim → Context API (com useReducer para lógica complexa)

O estado é server data (fetching, caching, sincronização)?
  └─ Sim → React Query / SWR / TanStack Query

O estado é global e complexo (auth, carrinho, preferências)?
  └─ Sim → Zustand (leve) ou Redux Toolkit (escala enterprise)

O estado é apenas URL-derivado (filtros, paginação, tabs)?
  └─ Sim → URL search params (useSearchParams)
```

**Padrão de hook customizado para feature:**
```tsx
// hooks/useBookings.ts
export const useBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchBookings = async () => { /* ... */ }
  const createBooking = async (data: CreateBookingDTO) => { /* ... */ }
  const cancelBooking = async (id: string) => { /* ... */ }

  useEffect(() => { fetchBookings() }, [])

  return { bookings, isLoading, error, createBooking, cancelBooking }
}
```

**Critério de qualidade:** Sem prop drilling além de 2 níveis. Estado no nível mais baixo possível que ainda funcione.

---

### SK-F03 — Form Engineering

**O que é:** Capacidade de construir formulários robustos com validação, feedback de erro claro, e excelente acessibilidade.

**Stack preferida:** React Hook Form + Zod

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const bookingSchema = z.object({
  name:  z.string().min(2, 'Nome deve ter ao menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Telefone inválido'),
  notes: z.string().max(500).optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

const BookingForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  })

  const onSubmit = async (data: BookingFormData) => { /* ... */ }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="field">
        <label htmlFor="name">Nome completo</label>
        <input id="name" {...register('name')} aria-invalid={!!errors.name} aria-describedby="name-error" />
        {errors.name && <span id="name-error" role="alert">{errors.name.message}</span>}
      </div>
      {/* ... */}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Confirmar Agendamento'}
      </button>
    </form>
  )
}
```

**Checklist de formulário completo:**
- [ ] Labels associadas a todos os inputs
- [ ] Erros exibidos inline, próximos ao campo
- [ ] `aria-invalid` e `aria-describedby` em campos com erro
- [ ] `aria-live="polite"` em mensagens de erro dinâmicas
- [ ] Botão de submit desabilitado durante envio
- [ ] Estado de loading visível no botão
- [ ] Sucesso exibido após submit (não apenas silêncio)
- [ ] Campos preenchidos são preservados em caso de erro do servidor
- [ ] `autocomplete` definido nos campos relevantes

**Critério de qualidade:** Formulário completamente operável via teclado. Erros não aparecem antes do primeiro submit ou primeiro blur. Nenhum campo sem label visível.

---

### SK-F04 — Data Tables & List Views

**O que é:** Capacidade de construir tabelas de dados funcionais com busca, ordenação, filtros, paginação e ações em linha.

**Estrutura de uma DataTable completa:**

```tsx
interface DataTableProps<T> {
  data: T[]
  columns: ColumnDef<T>[]
  isLoading: boolean
  totalCount: number
  pageSize: number
  currentPage: number
  onPageChange: (page: number) => void
  onSort: (column: string, direction: 'asc' | 'desc') => void
  onSearch: (query: string) => void
  onBulkAction?: (action: string, ids: string[]) => void
  emptyMessage?: string
}
```

**Estados obrigatórios em toda tabela:**

```tsx
// 1. Loading state
{isLoading && <TableSkeleton rows={pageSize} columns={columns.length} />}

// 2. Empty state
{!isLoading && data.length === 0 && (
  <EmptyState
    icon={<BookIcon />}
    title="Nenhum item encontrado"
    description="Tente ajustar os filtros ou crie o primeiro item."
    action={<Button onClick={onCreateFirst}>Criar primeiro</Button>}
  />
)}

// 3. Error state
{error && (
  <ErrorState
    message="Erro ao carregar dados"
    action={<Button onClick={retry}>Tentar novamente</Button>}
  />
)}

// 4. Data state
{!isLoading && data.length > 0 && <Table data={data} columns={columns} />}
```

**Critério de qualidade:** Toda tabela tem os 4 estados. Paginação mostra "X–Y de Z resultados". Colunas ordenáveis com indicador visual de direção.

---

### SK-F05 — Authentication & Authorization

**O que é:** Capacidade de implementar fluxos de autenticação seguros e controle de acesso baseado em roles.

**Fluxo de auth completo:**

```
Login → Validação → Token JWT → localStorage/cookie → 
AuthContext → ProtectedRoute → Role Check → Render
```

**Hook de auth:**
```tsx
// hooks/useAuth.ts
interface AuthContext {
  user: User | null
  role: 'admin' | 'user' | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (credentials: LoginDTO) => Promise<void>
  logout: () => void
}

const useAuth = (): AuthContext => { /* ... */ }
```

**Protected Route:**
```tsx
const ProtectedRoute = ({ children, requiredRole }: { children: ReactNode, requiredRole?: string }) => {
  const { isAuthenticated, role, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) return <PageLoader />
  if (!isAuthenticated) return <Navigate to="/login" state={{ from: location }} replace />
  if (requiredRole && role !== requiredRole) return <Navigate to="/unauthorized" replace />
  
  return <>{children}</>
}

// Uso:
<Route path="/admin/*" element={
  <ProtectedRoute requiredRole="admin">
    <AdminLayout />
  </ProtectedRoute>
} />
```

**Checklist de segurança:**
- [ ] Tokens expiram (access token: 15min–1h, refresh token: 7–30 dias)
- [ ] Logout limpa todo o estado de auth (token, user, cache)
- [ ] Expiração de sessão redireciona para login com mensagem clara
- [ ] Senhas nunca armazenadas em estado — apenas tokens
- [ ] HTTPS obrigatório em produção
- [ ] Verificação de role tanto no frontend quanto no backend

**Critério de qualidade:** Usuário não autenticado jamais acessa rota protegida. Sessão expirada é tratada graciosamente com redirect para login preservando a URL de destino.

---

### SK-F06 — Admin Panel Construction

**O que é:** Capacidade de construir painéis administrativos completos e funcionais que herdam o design do produto.

> Ver arquitetura completa em `AGENTS.md → Feature Module: Admin Panel`

**Componentes essenciais do admin:**

```
AdminLayout         → Shell com sidebar + topbar
StatCard            → KPI com ícone, valor, variação percentual
DataTable           → Tabela com todas as operações
ConfirmModal        → Confirmação de ações destrutivas
Toast               → Feedback de ações (sucesso / erro / info)
PageHeader          → Título da página + breadcrumb + ações primárias
EmptyState          → Tela vazia com mensagem e CTA
ErrorBoundary       → Captura erros sem derrubar a UI inteira
FormDrawer          → Formulário lateral para criar/editar sem sair da tela
FilterBar           → Barra de filtros composta (busca + selects + date range)
```

**Tom visual do admin vs. landing:**

| Aspecto | Landing Page | Admin Panel |
|---|---|---|
| Densidade | Baixa (muito espaço) | Alta (informação por cm²) |
| Decoração | Intensa (texturas, gradientes) | Mínima (funcionalidade primeiro) |
| Animações | Dramáticas | Sutis e funcionais |
| Tipografia | Display fonts, bold | Body fonts, tamanhos menores |
| Cores | Paleta completa com contraste máximo | Neutros + accent color apenas em ações |

**Critério de qualidade:** Admin panel navegável 100% por teclado. Toda operação CRUD tem feedback. Sidebar colapsa em mobile.

---

### SK-F07 — Scheduling & Booking System

**O que é:** Capacidade de construir sistemas de agendamento com calendário, gestão de disponibilidade e fluxo de booking para usuário final.

> Ver data model e arquitetura completa em `AGENTS.md → Feature Module: Scheduling & Booking System`

**Lógica de geração de slots:**
```typescript
// utils/slotGenerator.ts
export const generateSlots = (
  date: Date,
  availability: Availability,
  existingBookings: Booking[],
): TimeSlot[] => {
  const slots: TimeSlot[] = []
  const [startH, startM] = availability.startTime.split(':').map(Number)
  const [endH, endM] = availability.endTime.split(':').map(Number)
  
  let current = new Date(date)
  current.setHours(startH, startM, 0, 0)
  const end = new Date(date)
  end.setHours(endH, endM, 0, 0)
  
  while (current < end) {
    const slotEnd = addMinutes(current, availability.slotDuration)
    const isBooked = existingBookings.some(b => 
      b.startTime === format(current, 'HH:mm')
    )
    slots.push({
      startTime: format(current, 'HH:mm'),
      endTime: format(slotEnd, 'HH:mm'),
      isAvailable: !isBooked,
    })
    current = addMinutes(slotEnd, availability.bufferTime)
  }
  
  return slots
}
```

**Critério de qualidade:** Usuário nunca consegue selecionar slot já ocupado. Conflitos detectados antes de salvar. Fuso horário tratado consistentemente.

---

### SK-F08 — Notification & Feedback System

**O que é:** Capacidade de implementar um sistema de feedback visual para todas as ações do usuário — toast notifications, estados de loading, e confirmações.

**Sistema de toasts:**
```tsx
// hooks/useToast.ts
type ToastType = 'success' | 'error' | 'warning' | 'info'

interface Toast {
  id: string
  type: ToastType
  message: string
  duration?: number  // ms, default 4000
}

// Uso:
const { toast } = useToast()

// Sucesso
toast.success('Agendamento confirmado!')

// Erro
toast.error('Erro ao salvar. Tente novamente.')

// Com ação
toast.error('Booking cancelado.', { 
  action: { label: 'Desfazer', onClick: handleUndo }
})
```

**Regras de feedback:**

| Ação | Feedback imediato | Feedback de resultado |
|---|---|---|
| Clique em botão destrutivo | Modal de confirmação | Toast de sucesso/erro |
| Submit de formulário | Botão → loading state | Toast + redirect ou erro inline |
| Upload de arquivo | Progress bar | Toast de conclusão |
| Delete de item | Modal confirm | Toast + item removido da lista |
| Salvar configuração | Botão → loading | Toast "Salvo com sucesso" |

**Critério de qualidade:** Nenhuma ação assíncrona fica sem feedback. Toasts de sucesso: 3–4s. Toasts de erro: persistentes até dismiss manual.

---

### SK-F09 — API Integration

**O que é:** Capacidade de integrar o frontend com APIs REST ou GraphQL de forma robusta, com tratamento de erros, loading states e cache.

**Camada de API padronizada:**
```typescript
// lib/api.ts
const BASE_URL = import.meta.env.VITE_API_URL

class ApiClient {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const token = localStorage.getItem('auth_token')
    
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      ...options,
    })

    if (response.status === 401) {
      // Token expirado → limpar auth → redirect para login
      authStore.logout()
      throw new ApiError(401, 'Sessão expirada')
    }

    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      throw new ApiError(response.status, error.message || 'Erro desconhecido')
    }

    return response.json()
  }

  get<T>(endpoint: string) { return this.request<T>(endpoint) }
  post<T>(endpoint: string, data: unknown) { 
    return this.request<T>(endpoint, { method: 'POST', body: JSON.stringify(data) }) 
  }
  patch<T>(endpoint: string, data: unknown) { 
    return this.request<T>(endpoint, { method: 'PATCH', body: JSON.stringify(data) }) 
  }
  delete<T>(endpoint: string) { 
    return this.request<T>(endpoint, { method: 'DELETE' }) 
  }
}

export const api = new ApiClient()
```

**Critério de qualidade:** Erros de rede tratados em todos os endpoints. 401 sempre redireciona para login. Dados sensíveis nunca logados no console.

---

### SK-F10 — Dashboard & Data Visualization

**O que é:** Capacidade de construir dashboards com KPIs e gráficos que comunicam dados de forma clara e visualmente consistente com o produto.

**Biblioteca preferida:** Recharts (leve, composable, customizável)

**Tipos de gráfico e quando usar:**

| Gráfico | Quando usar |
|---|---|
| Line Chart | Evolução temporal (vendas por mês, agendamentos por semana) |
| Bar Chart | Comparação entre categorias (faturamento por produto) |
| Area Chart | Volume acumulado ao longo do tempo |
| Pie / Donut | Distribuição proporcional (%) com até 5 categorias |
| Stat Card | KPI único com variação percentual |

**Padrão de StatCard:**
```tsx
const StatCard = ({ title, value, change, icon: Icon, trend }: StatCardProps) => (
  <div className="stat-card">
    <div className="stat-header">
      <span className="stat-title">{title}</span>
      <Icon className="stat-icon" aria-hidden />
    </div>
    <p className="stat-value">{value}</p>
    <p className={`stat-change ${trend === 'up' ? 'positive' : 'negative'}`}>
      {trend === 'up' ? '↑' : '↓'} {change}% vs. mês anterior
    </p>
  </div>
)
```

**Critério de qualidade:** Gráficos têm tooltip informativo. Cores de gráficos respeitam a paleta do produto. Dados ausentes exibem estado vazio — nunca gráfico vazio sem mensagem.

---

## 🧰 STACK-SPECIFIC SKILLS

---

### SK-S01 — React + Tailwind

**Convenções:**
- Usar `cn()` (clsx + tailwind-merge) para classes condicionais
- Componentes de UI em `/components/ui/` — botões, inputs, modais, badges
- Páginas em `/pages/` ou `/app/` (Next.js App Router)
- Hooks customizados em `/hooks/`
- Tipos em `/types/`
- Constantes em `/constants/`
- Funções utilitárias em `/utils/`
- Configurar tema no `tailwind.config.ts` — nunca usar valores arbitrários repetidos

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#E8000D', hover: '#FF3333' },
        surface: { DEFAULT: '#1A1A1A', raised: '#2A2A2A' },
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
}
```

**Animações:** Framer Motion para componentes, CSS transitions para hover states simples.

---

### SK-S02 — React Puro (CSS Modules / Styled Components)

**Convenções:**
- CSS Modules para estilos de componentes (`.module.css`)
- `tokens.css` global com todas as CSS custom properties
- `globals.css` para reset, base styles, e utilitários
- Styled Components apenas se já em uso no projeto — não introduzir

---

### SK-S03 — HTML + CSS + JS Vanilla

**Convenções:**
- CSS custom properties em `:root` para todos os tokens
- `IntersectionObserver` para scroll reveals — sem biblioteca
- `fetch` nativo para chamadas de API
- ES Modules nativos no browser (`type="module"`)
- Sem jQuery — nenhuma dependência sem justificativa real

---

### SK-S04 — Vue / Nuxt

**Convenções:**
- `<script setup>` em todos os componentes
- Composables em `/composables/` (equivalente a hooks)
- Pinia para estado global (preferido sobre Vuex)
- `v-motion` para animações ou CSS transitions nativas
- Estilos escopados com `<style scoped>` + CSS custom properties em `assets/tokens.css`

---

### SK-S05 — TanStack Start & Nitro Engine (Vercel Override)

**O que é:** Capacidade de diagnosticar e reconfigurar o empacotador Nitro interno do TanStack Start em projetos gerados pelo Lovable para forçar compilações estáticas/SSR direcionadas à Vercel, superando as configurações nativas herdadas do Cloudflare Workers.

**Quando usar:** Quando builds do TanStack Start no Vercel falham com erros de "No Output Directory named 'output' found", porque o bundler implicitamente compila para Cloudflare/Wrangler.

**Como aplicar:**
1. Customizar o `vite.config.ts` explicitando a propriedade `nitro` na configuração da aplicação para forçar a renderização baseada na Vercel e forçar a pasta de saída:
```typescript
nitro: {
  preset: "vercel",
  output: {
    dir: ".vercel/output",
    serverDir: ".vercel/output/functions/index.func",
    publicDir: ".vercel/output/static"
  }
}
```
2. Mapear o script de build customizado no `package.json` utilizando o Nitro preset correto:
```json
"build:vercel": "NITRO_PRESET=vercel vite build"
```
3. Customizar o `vercel.json` declarando explicitamente o `outputDirectory` para coincidir com a pasta gerada:
```json
{
  "outputDirectory": ".vercel/output"
}
```

---

### SK-S06 — Vite Dev Server Public Directory Caching & Asset Recovery

**O que é:** Capacidade de diagnosticar e resolver erros 404 e problemas de caching de arquivos estáticos gerados em runtime (como favicons, logos, imagens de compartilhamento) na pasta `public` do Vite.

**Quando usar:** Sempre que novos assets de mídia ou arquivos estáticos adicionados ao diretório `/public` não sejam reconhecidos ou retornem 404/caching antigo no servidor de desenvolvimento local.

**Como aplicar:**
1. Compreender que o servidor de desenvolvimento do Vite (HMR) mapeia e faz cache dos caminhos do diretório `/public` no boot.
2. Forçar a limpeza de cache e recarregamento parando e iniciando o servidor com `bun run dev` (ou comando equivalente).
3. Utilizar links absolutos baseados na raiz (ex: `/favicon.png`, `/logo.png`) no HTML e componentes de cabeçalho, evitando imports desnecessários de assets estáticos que devem residir no escopo do build público.

---

## Índice de Skills por Tarefa

| Tarefa recebida | Skills aplicadas |
|---|---|
| "Melhore o design da minha landing page" | SK-D01, SK-D02, SK-D03, SK-D04, SK-D05, SK-D06 |
| "Meus CTAs não convertem" | SK-D07, SK-D03, SK-D06 |
| "A página está lenta" | SK-Q02 |
| "Quero adicionar um painel admin" | SK-D01, SK-F01, SK-F02, SK-F04, SK-F05, SK-F06, SK-F08 |
| "Preciso de um sistema de agendamento" | SK-D01, SK-F01, SK-F02, SK-F03, SK-F07, SK-F08, SK-F09 |
| "A página não funciona bem no mobile" | SK-D08, SK-Q01 |
| "Tem problemas de acessibilidade" | SK-Q01, SK-D03, SK-D07 |
| "Quero adicionar login de admin" | SK-F05, SK-F03, SK-F08 |
| "Crie um dashboard com gráficos" | SK-D01, SK-F01, SK-F02, SK-F10, SK-F09 |
| "O código está uma bagunça" | SK-Q03, SK-F01, SK-F02 |
| "Quero melhorar meu SEO" | SK-Q04, SK-D02 |
| "Erro de build no Vercel (sem output/Cloudflare)" | SK-S05 |
| "Favicon/Imagem nova retornando 404 no dev" | SK-S06 |

---

*PageCraft Agent SKILLS.md — Cada skill é uma promessa de qualidade, não apenas uma capacidade listada.*