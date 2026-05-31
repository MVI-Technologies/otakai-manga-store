# Montenegro Advocacia — Landing Page Trabalhista Premium

Este projeto consiste em uma landing page premium de alta performance desenvolvida para o escritório **Montenegro Advocacia** (Dr. Marcos Montenegro), especializado em **Direito Trabalhista**.

A aplicação foi planejada sob rigorosos padrões estéticos (minimalismo de luxo em tons escuros e detalhes em dourado accent) e técnicos, garantindo excelente responsividade, acessibilidade impecável, conversão otimizada e SEO avançado.

---

## 🚀 Tecnologias Utilizadas

- **Core & Roteamento:** React, [TanStack Start / React Router](https://tanstack.com/router)
- **Estilização:** CSS Customizado integrado ao Tailwind CSS
- **Gerenciamento de Estado & Consultas:** TanStack React Query
- **Ícones:** Lucide React & SVGs de alta fidelidade
- **Deploy:** Otimizado para Vercel via Nitro Engine

---

## 💎 Soluções de UX & Funcionalidades Premium

1. **Booking Wizard (Agendamento Inteligente):**
   - Fluxo interativo de 4 passos para seleção de especialidade, escolha de data em calendário dinâmico de dias úteis, preenchimento de dados de contato sob sigilo e resumo com número de protocolo.
   - Persistência dos dados agendados no `localStorage` sob a chave `advogado_conectado_bookings`.

2. **Dra. Carolina (Assistente Virtual):**
   - Chatbot de conversão proativo e automatizado no canto inferior direito para filtrar e direcionar as dúvidas mais recorrentes de Direito Trabalhista (horas extras, reversão de justa causa, rescisões e acordos).

3. **Métricas Stacked FAB (WhatsApp Flutuante):**
   - Botão de WhatsApp em verde brilhante tradicional (`#25D366`) empilhado verticalmente logo acima do assistente virtual para proporcionar contato humano direto e instantâneo com um clique.

4. **Conversão Mid-Page & Depoimentos:**
   - Banner horizontal de alta visibilidade com iluminação sutil dourada para capturar a atenção durante a rolagem.
   - Seção de depoimentos de clientes atendidos com rating visual de **5 estrelas douradas em vetor SVG**.

---

## ♿ Acessibilidade (WCAG 2.1 AA) & SEO

- **Sensibilidade a Movimento:** Suporta a diretiva `@media (prefers-reduced-motion: reduce)`, desativando de forma elegante todas as animações e transições do site caso o usuário possua restrições.
- **Navegação por Teclado:** Focos interativos (`focus-visible`) visíveis e customizados com anel dourado em todos os links e botões.
- **Semântica:** Formulário de viabilidade estruturado com agrupamento `<fieldset>` e legenda `<legend>` acessível a leitores de tela.
- **SEO Local:** Injeção de metadados avançados estruturados **Schema JSON-LD** de categoria `LegalService` no cabeçalho do documento, elevando o posicionamento orgânico e facilitando a exibição no Google Knowledge Panel de São Paulo.

---

## 📦 Estrutura de Pastas

```
/
├── public/                 # Favicon.svg e ativos estáticos puros
├── src/
│   ├── assets/             # Imagens corporativas otimizadas
│   ├── components/         # Chatbot.tsx, BookingWizard.tsx e UI Components
│   ├── routes/             # Rotas e páginas estruturadas via TanStack Router
│   ├── styles.css          # Design System tokens, animações e estilos globais
│   └── tsconfig.json       # Definições de compilação TypeScript
```

---

## ⚡ Comandos para Desenvolvimento

### Iniciar servidor de desenvolvimento:
```bash
npm run dev
```

### Compilar para produção (Vercel/Nitro):
```bash
npm run build
```

---

## 🌐 Deploy na Vercel

O projeto está configurado para deploy automático na Vercel. Ao conectar seu repositório do GitHub no painel da Vercel:
1. O framework **TanStack Start** será detectado de forma nativa.
2. Defina o comando de build como `npm run build`.
3. A Vercel configurará as funções serverless necessárias automaticamente.
