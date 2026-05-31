# Otakai Manga Store — Landing Page Premium & Catálogo de Luxo

Este projeto consiste em uma landing page premium de alta conversão desenvolvida para a **Otakai Manga Store**, uma loja especializada em mangás colecionáveis, edições de luxo e importados sob encomenda.

A aplicação foi planejada sob rigorosos padrões estéticos (design imersivo escuro com acentos em vermelho carmesim vibrante `#ff4757`) e técnicos, garantindo excelente responsividade, acessibilidade e SEO avançado.

---

## 🚀 Tecnologias Utilizadas

- **Core & Roteamento:** React, [TanStack Start / React Router](https://tanstack.com/router)
- **Estilização:** CSS Customizado integrado ao Tailwind CSS (Tokens e Animações em `src/styles.css`)
- **Gerenciamento de Estado:** React Hooks
- **Ícones:** Lucide React & SVGs de alta fidelidade
- **Deploy:** Otimizado para Vercel via Nitro Engine

---

## 💎 Soluções de UX & Funcionalidades Premium

1. **Ken Burns Animated Hero Background:**
   - Efeito imersivo de colagem de painéis de mangás clássicos em tons escuros no fundo do Hero, utilizando transições CSS suaves controladas pela classe `.animate-pan-bg`.

2. **Manga Showcase (Catálogo À Venda):**
   - Grade totalmente responsiva que exibe os títulos em destaque no catálogo (ex: Berserk Luxo, Chainsaw Man, One Piece e Demon Slayer) com tags flutuantes inteligentes, valores monetários bem legíveis e links dinâmicos integrados ao WhatsApp para simplificar a encomenda com apenas 1 clique.

3. **Mika - A Curadora Virtual (Chatbot Otaku):**
   - Chatbot interativo e proativo localizado no canto inferior direito para guiar novos colecionadores, esclarecer prazos de importação, tirar dúvidas de frete e recomendar títulos.

4. **Curadoria Especial & Encomenda Customizada:**
   - Fluxo interativo de curadoria (`BookingWizard`) e formulário de orçamento de volumes raros com cotações automáticas e geração de tickets integrados ao WhatsApp.

---

## ♿ Acessibilidade (WCAG 2.1 AA) & SEO

- **Sensibilidade a Movimento:** Suporta a diretiva `@media (prefers-reduced-motion: reduce)`, desativando as animações pesadas do Hero e do painel para usuários com restrições motoras/vestibulares.
- **Favicon & OG Avançado:** Favicon customizado minimalista em formato SVG e tags de Open Graph completas pré-configuradas no `head` do roteador para compartilhamentos otimizados em redes sociais e WhatsApp.
- **Navegação Semântica:** Utilização de tags HTML5 estruturadas (`<nav>`, `<section>`, `<figure>`, `<blockquote/>`, etc.) com foco customizado e claro.

---

## 📦 Estrutura de Pastas

```
/
├── public/                 # Favicon.svg e ativos estáticos puros
├── src/
│   ├── assets/             # Imagens e capas de mangás otimizadas
│   ├── components/         # Chatbot.tsx, BookingWizard.tsx e componentes reutilizáveis
│   ├── routes/             # Rotas estruturadas via TanStack Router
│   ├── styles.css          # Design System tokens, animações e estilos globais
│   └── tsconfig.json       # Definições de compilação TypeScript
```

---

## ⚡ Comandos para Desenvolvimento

### Iniciar servidor de desenvolvimento:
```bash
bun dev
```

### Compilar para produção (Vercel):
```bash
bun run build
```
