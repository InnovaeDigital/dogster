# Dogster — GitHub + Vercel

Landing page estática da Dogster, pronta para publicar diretamente de um repositório GitHub no Vercel.

## Estrutura obrigatória

`index.html` e a pasta `assets/` ficam na raiz do repositório. Os caminhos das imagens são relativos (`assets/...`) e funcionam em produção no Vercel.

## Deploy no Vercel

1. Crie um repositório no GitHub.
2. Envie **o conteúdo desta pasta** para a raiz do repositório — não envie uma pasta extra envolvendo os arquivos.
3. No Vercel, importe o repositório.
4. Framework Preset: **Other**.
5. Build Command: **deixe vazio**.
6. Output Directory: **deixe vazio** (raiz do projeto).
7. Root Directory: **./**.
8. Faça o deploy.

Este projeto é HTML/CSS/JavaScript puro e **não precisa de npm, Node.js ou etapa de build**. Isso evita que uma falha de build impeça a publicação do site.

## Fotos

Todas as fotos e a logo usadas pelo site estão dentro de `assets/` e devem ser mantidas no GitHub exatamente com a mesma capitalização dos nomes.
