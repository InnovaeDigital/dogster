# Dogster Landing Page — GitHub + Vercel

Pacote final preparado para site estático. Envie **todo o conteúdo desta pasta para a raiz do repositório GitHub**.

A estrutura correta é:
- `index.html` na raiz
- `style.css` e `script.js` na raiz
- `assets/` na raiz, contendo `dogster-logo.png`, `real/` e `menu/`
- `vercel.json` na raiz

**Não renomeie, não mova e não exclua a pasta `assets`.** As fotos são carregadas por caminhos relativos, compatíveis com GitHub + Vercel.

## Vercel

Ao importar o repositório do GitHub:
- Root Directory: `./`
- Framework Preset: Other / Static
- Build Command: `npm run build`
- Output Directory: `.`

O build executa `scripts/verify-assets.js` e interrompe o deploy se alguma imagem referenciada estiver faltando.

## Atualizações

Depois de conectar o GitHub ao Vercel, cada push na branch de produção gera um novo deploy automaticamente.

Créditos: Site produzido por: David P. Tomé - Agência Innovae Digital.
