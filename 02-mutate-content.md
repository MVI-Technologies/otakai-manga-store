# Skill 02 — Mutar o Conteúdo

## Objetivo

Reescrever todos os textos visíveis dos arquivos `src/content/` para o novo nicho,
preservando exatamente a estrutura, os campos e o tom de cada arquivo.

---

## Princípio Central

Você não está criando uma nova landing page.
Você está traduzindo uma landing page existente para um novo contexto.

A estrutura narrativa do template é validada. Preserve-a.
O que muda é o vocabulário, o problema resolvido e o público.

---

## Passo 1 — Entender o nicho

Antes de escrever qualquer texto, responda internamente:

- Qual é o problema principal que esse negócio resolve?
- Quem é o cliente típico e o que ele teme ou deseja?
- Qual é o CTA mais natural para esse nicho? (agendar, comprar, ligar, solicitar)
- Quais palavras esse nicho usa naturalmente? (evite jargões de outros setores)

Exemplos de ancoragem por nicho:
- **Odontologia**: medo de dor, vergonha do sorriso, confiança no profissional
- **Academia**: transformação visual, disciplina, resultados em prazo
- **Advocacia**: segurança, sigilo, resolução sem complicação
- **Restaurante**: experiência, sabor, ocasião especial

---

## Passo 2 — Reescrever arquivo por arquivo

Para cada arquivo em `src/content/`, reescreva apenas os valores de texto.
Nunca altere nomes de campos, tipos TypeScript ou estrutura do objeto.

### Regras de escrita

**Headlines** — devem comunicar transformação, não descrição.
- Ruim: `"Clínica Odontológica em Maringá"`
- Bom: `"Sorria sem vergonha — tratamentos que mudam como você se vê"`

**Subtítulos** — devem expandir a headline com especificidade.
- Inclua um dado concreto quando possível (anos de experiência, número de pacientes, garantia)

**CTAs** — devem ser específicos e de baixo atrito.
- Ruim: `"Entre em contato"`
- Bom: `"Agendar avaliação gratuita"`
- Bom: `"Falar pelo WhatsApp agora"`

**Depoimentos** — reescreva com nomes brasileiros comuns e resultados verossímeis.
- Inclua nome, ocupação e cidade
- O depoimento deve mencionar um resultado específico, não elogio genérico

**FAQ** — as perguntas devem ser as que o cliente realmente faz, não as que o negócio quer responder.
- Inclua sempre: preço, tempo, dor/risco, como funciona o primeiro passo

**Meta tags e SEO** — escreva para SEO local ou nacional conforme aplicável.
- Inclua a cidade se o negócio for local.
- A meta description principal deve ter entre 140-160 caracteres.
- Adicione tags de Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) e Twitter Cards (`twitter:card`, `twitter:title`, etc.) ricas e personalizadas no `head` da rota principal.
- Customize as tags de `<link rel="canonical">` com a URL real ou de teste para evitar conteúdo duplicado.

**Favicon** — sempre substitua o ícone padrão do template.
- Coloque um ícone representativo em formato SVG ou PNG no caminho `public/favicon.svg` ou `public/favicon.ico`.
- Certifique-se de que a tag `<link rel="icon">` no `index.html` ou no `head` da rota principal aponte para o arquivo customizado.

**README do Projeto** — Reescreva completamente o `README.md` do repositório para descrever o novo negócio/nicho de forma totalmente personalizada, limpa e profissional. Remova todas as referências ao nome do template original, mantendo a documentação fiel às novas soluções implementadas.

---

## Passo 3 — Preservar o que não é conteúdo

Dentro dos arquivos JSX/TSX, nunca altere:
- Nomes de classes Tailwind (`className="text-primary font-display"`)
- Props técnicas (`href`, `onClick`, `aria-label` já existentes, `type`)
- Nomes de componentes e imports
- Estrutura do JSX — tags, aninhamento, atributos não-textuais
- Valores numéricos de configuração
- Chaves de tradução ou IDs

A regra prática: se não aparece visualmente na página renderizada, não toque.

---

## Passo 4 — Validar coerência

Após reescrever todos os arquivos, verifique:

- [ ] Todos os CTAs apontam para a mesma ação? (consistência)
- [ ] O tom é uniforme entre hero, about e testimonials?
- [ ] Os serviços listados fazem sentido para o nicho?
- [ ] O FAQ responde dúvidas reais do cliente desse nicho?
- [ ] As meta tags descrevem o negócio correto?

Só avance para a Skill 03 após validar.
