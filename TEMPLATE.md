# Otakai Manga Store — Notas do Template

Este é um template premium de altíssima qualidade desenvolvido especificamente para o nicho de livrarias, lojas geeks, venda de mangás e colecionáveis.

## 💎 Intenção Visual Original
- **Aesthetic:** Dark Mode imersivo com contraste em Vermelho Carmesim (`#ff4757`).
- **Hero Background:** Animação de transição lenta Ken Burns (`.animate-pan-bg` no arquivo `src/styles.css`) cobrindo uma colagem estilizada de painéis de mangá em baixa opacidade (25%).
- **Imagens:** Capas estilizadas com visual limpo e moderno, usando proporção vertical aspect-[3/4].

## 🛠️ Decisões de Design Importantes
- **Mika (Chatbot):** Assistente virtual do chatbot otaku personalizada com mensagens temáticas de curadoria, dicas de boxes e importações.
- **Showcase de Mangás:** Uma vitrine completa de produtos com preços destacados em fonte mono e botões de ação direta integrados via WhatsApp.
- **Wizard de Curadoria:** Conversão ativa em multi-steps customizado para cotações de coleções completas ou importação de volumes difíceis sob encomenda.

## ⚠️ Avisos de Custódia
- Não remover as classes utilitárias de z-index do Hero (`relative z-10` no contêiner de conteúdo e `z-0` na div de fundo absoluto) para evitar que o gradiente escuro oculte o texto.
