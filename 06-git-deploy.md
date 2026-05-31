# Skill 06 — Git, GitHub e Deploy Vercel

## Objetivo

Criar o repositório na organização MVI-Technologies, fazer o commit inicial
do projeto gerado, push, e acionar o deploy automático no Vercel.

---

## Pré-requisitos

Antes de executar esta skill, confirme:
- [ ] Build concluído com sucesso (Skill 05)
- [ ] `GITHUB_TOKEN` disponível no ambiente com escopo `repo` e `admin:org`
- [ ] `VERCEL_TOKEN` disponível no ambiente
- [ ] Vercel configurado para a organização MVI-Technologies (`VERCEL_ORG_ID`)

Se algum token estiver ausente, informe o usuário e interrompa.

---

## Passo 1 — Inicializar o repositório local

```bash
cd projects/[slug]
git init
git add .
git commit -m "feat: initial generation

Template: [nome-do-template]
Nicho: [nicho]
Gerado em: [YYYY-MM-DD]"
```

A mensagem de commit deve sempre seguir esse formato para rastreabilidade.

---

## Passo 2 — Criar o repositório remoto no GitHub

Use a GitHub API para criar o repositório na organização MVI-Technologies:

```bash
curl -X POST \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/orgs/MVI-Technologies/repos \
  -d '{
    "name": "[slug]",
    "description": "Landing page — [nicho]",
    "private": true,
    "auto_init": false
  }'
```

> [!IMPORTANT]
> NUNCA inclua o nome ou referência ao template base no "About" (descrição) do repositório no GitHub. O repositório e seus metadados devem ter uma aparência 100% autônoma, comercial e profissional para o cliente final.

Repositórios criados devem ser **privados** por padrão.
Registre a URL do repositório retornada pela API (`clone_url` ou `ssh_url`).

---

## Passo 3 — Conectar e fazer push

```bash
cd projects/[slug]
git remote add origin https://github.com/MVI-Technologies/[slug].git
git branch -M main
git push -u origin main
```

Se o push falhar por autenticação, verifique se o `GITHUB_TOKEN` tem
permissão de escrita na organização MVI-Technologies.

---

## Passo 4 — Criar projeto no Vercel e fazer deploy

### 4a — Criar o projeto no Vercel via API

```bash
curl -X POST \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  https://api.vercel.com/v10/projects \
  -d '{
    "name": "[slug]",
    "framework": "vite",
    "gitRepository": {
      "type": "github",
      "repo": "MVI-Technologies/[slug]"
    },
    "buildCommand": "bun run build",
    "installCommand": "bun install",
    "outputDirectory": "dist"
  }'
```

### 4b — Acionar o deploy

Após criar o projeto, o Vercel detecta o push automaticamente se a integração
GitHub ↔ Vercel estiver ativa na organização. Aguarde o deploy completar.

Se a integração automática não estiver ativa, acione manualmente:

```bash
curl -X POST \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  https://api.vercel.com/v13/deployments \
  -d '{
    "name": "[slug]",
    "gitSource": {
      "type": "github",
      "repoId": "[repo-id-retornado-no-passo-2]",
      "ref": "main"
    }
  }'
```

---

## Passo 5 — Verificar o deploy

Consulte o status do deploy até que esteja `READY` ou `ERROR`:

```bash
curl -H "Authorization: Bearer $VERCEL_TOKEN" \
  "https://api.vercel.com/v13/deployments?projectId=[project-id]&limit=1"
```

Aguarde no máximo 3 minutos verificando a cada 20 segundos.
Se o status for `ERROR`, capture os logs e inclua no relatório final.

---

## Passo 6 — Capturar a URL final

A resposta do Vercel inclui o campo `url` com o domínio gerado:
```
[slug].vercel.app
```

Registre essa URL para incluir no relatório final da Skill 05.

---

## Tratamento de Erros

| Erro | Ação |
|---|---|
| Token GitHub inválido | Informar usuário, interromper |
| Repo já existe no GitHub | Usar nome `[slug]-v2`, informar usuário |
| Token Vercel inválido | Informar usuário, interromper |
| Deploy com ERROR no Vercel | Capturar logs, reportar, não tentar novamente |
| Timeout no deploy (>3min) | Informar URL do painel Vercel para acompanhamento manual |
