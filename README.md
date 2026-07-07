# Site — Dr. Marco Antonio de Paiva Crisanto
Angiologista e Cirurgião Vascular · Teresina/PI · Angiocenter · CRM 2413-PI · RQE 393

Site estático (HTML/CSS/JS) no padrão **GSD PRO**: rápido, seguro, responsivo (mobile-first),
otimizado para conversão (jornada do paciente) e para SEO local.

## Estrutura da página (narrativa de conversão)
Hero (sintomas + prova) → "Você anda sentindo isso nas pernas?" → Sobre/formação →
Tratamentos → Como funciona (passo a passo) → Depoimentos → FAQ → Contato/mapa/convênios.
CTAs de WhatsApp em todas as seções-chave + botão flutuante.

## ✅ Contatos já configurados
- WhatsApp: (86) 98859-8040  ·  Telefone: (86) 3230-1311
Para alterar, edite **`js/modules/config.js`** (os números também estão no HTML para SEO).

## ⚠️ Antes de publicar — 2 ajustes
1. **Domínio**: troque `www.drmarcocrisanto.com.br` pelo domínio real em: `index.html`
   (canonical, Open Graph e JSON-LD), `sitemap.xml` e `robots.txt`.
2. **Horário**: o site diz "atendimento com hora marcada". Se quiser exibir o horário real
   (ex.: seg–sex 8h–18h), me avise que eu adiciono no texto e nos dados estruturados.

## SEO incluído
- Title e description otimizados ("angiologista em Teresina").
- Dados estruturados JSON-LD: MedicalClinic + Physician + FAQPage (rich results).
- `canonical`, Open Graph, sitemap.xml, robots.txt.
- Foto do hero com `preload`/`fetchpriority` (melhora o LCP).
- NAP (nome/endereço/telefone) real no HTML para SEO local.

> Nota: não incluí "nota/estrelas" (aggregateRating) nos dados estruturados de propósito —
> o Google pode penalizar avaliações do próprio site sobre si mesmo. O melhor caminho para
> ganhar estrelas na busca é criar/otimizar o **Perfil da Empresa no Google (Google Meu Negócio)**
> com o mesmo endereço e telefone — é o maior fator de ranqueamento local no Maps.

## Como visualizar
Abra **`index.html`** no navegador (duplo-clique). Funciona localmente, sem servidor.

## Como publicar (grátis)
Suba a pasta inteira no Netlify, Vercel ou GitHub Pages (ou por FTP na sua hospedagem).

## Estrutura de arquivos
```
site-dr-marco/
├── index.html        favicon.ico   robots.txt   sitemap.xml
├── css/   (variables.css = tema | styles.css)
├── js/    (script.js + modules/: config, menu, scroll, contact, api)
└── assets/images/  (dr-marco.jpg/.webp)
```
