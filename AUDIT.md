# Auditoria OICMCTB — relatório (2026-10-22)

Referências: feedback dos representantes e *Considerações para a Nova Ordem
OICMCTB (2025)*, pp. 32–40 (selo/brasão). Sem acesso ao documento original
além do descrito no pedido — interpretações heráldicas são atribuídas à
própria Ordem no texto do site.

## Identidade (Fase 2/4)
- Identidade única em todo o site: **Ordem Internacional Civil Militar
  Cavaleiros Templários do Brasil (OICMCTB)** — organização civil brasileira,
  sem fins lucrativos, fraterna/cultural/filosófica/cívica/filantrópica.
- Removidas todas as referências a OSMTH Brasil, ordem-mãe no Porto e
  "Ordem Eclesiástica" (`grep OSMTH src dist` = 0).
- Formalização como pessoa jurídica em **2021** (não "fundação histórica");
  Grão-Mestre **Roberto Aguiar Guazzelli**; **ABTL** (grafia corrigida);
  Conselho Nacional das Damas Templárias / **Sueli Teodoro**, Primeira-Dama.
- Esclarecimento de independência da Maçonaria com a redação aprovada,
  idêntico em sentido nos 5 idiomas (página A Ordem + FAQ).
- Missão, visão (como objetivo, não reconhecimento obtido), valores
  (Fé em Deus, Esperança, Caridade, Justiça, Prudência, Fortaleza,
  Temperança), lema **CREARE FUTURUM MUTATO MODO** e filosofia de trabalho
  conforme o feedback. Selo (dois cavaleiros, SIGNUM TEMPLARIORUM BRASILIAE,
  MMXXI, direção invertida como interpretação da Ordem) e brasão (escudo
  ogival/lanceolado, campos verde/amarelo, cruz grega vermelha, selo central,
  elmo prateado, paquifes, timbre cruz de Malta, lema, divisa O.I.C.M.C.T.B)
  descritos sem alegar continuidade jurídica com a ordem medieval.
- Atuação social descrita como **objetivos/frentes**, não resultados.

## Ocultado por falta de confirmação (Fase 2/5)
- Endereço "Rua Exemplo", telefone "(00) 0000-0000", `contato@exemplo.org`,
  `exemplo.org/eventos|loja`: removidos. `site.ts` usa `null`/vazio e
  Footer/Contato/JSON-LD só renderizam o que existe. E-mail publicado:
  **oicmctb@gmail.com** (fornecido).
- Eventos de exemplo ("Local a definir") e artigos/estudos `draft`:
  `events`/`knowledgeItems` esvaziados — páginas mostram estado vazio honesto.
- Taxas inventadas (R$ 50/R$ 45), dedução de IRPF, campo CPF do formulário,
  regras/benefícios de afiliação não confirmados: removidos/neutralizados.
- Redes sociais `@oicmctb` (FB/IG): **não exibidas** — existência/oficialidade
  das URLs não foi confirmável a partir do projeto. `site.social = []`.
- Páginas legais: sem texto jurídico oficial, exibem instrução de solicitação
  por e-mail (não um "modelo" disfarçado).

## Estrutura (Fase 3)
Menu consolidado: Início · A Ordem · História e Brasão · Cultura e Atuação
Social (iniciativas + conhecimento) · Participar e Contato (afiliação, FAQ,
doações, eventos). Rodapé reorganizado nas mesmas colunas. URLs existentes
preservadas (sem redirecionamentos necessários); Dia das Cidades permanece
como página secundária com textos sem parceiros/calendário inventados.

## Visual (Fase 5)
- **Causa raiz do card de Educação:** em `education.svg` os traços do capelo
  estavam em coordenadas 40–440 dentro de um grupo já transladado para
  (600,440) — ícone deslocado à direita/abaixo. Recentrado para −200…200
  como os demais SVGs (mesmo `viewBox`, grupo e escala). `InitiativeCard`
  com área 16/10 fixa, `object-cover object-center`, alturas iguais (`h-full`).

## SEO (Fase 6)
- Domínio canônico real `https://templariosdobrasil.com` em
  `astro.config.mjs`, `robots.txt`, canonical/OG e sitemap (antes
  `exemplo.org`). Titles/descriptions sem a identidade antiga.
- JSON-LD sem endereço/telefone não confirmados e sem credenciais inventadas.
- hreflang completo (5 idiomas + x-default); 404 sem alternates quebrados.

## Traduções (Fase 6)
- Novo `scripts/check-i18n.mjs` (`node scripts/check-i18n.mjs`): compara
  chaves com o PT, detecta valores vazios e strings banidas. Resultado:
  **332 chaves × 5 idiomas, 0 ausentes** (adicionados `pastTitle`, `cpf`,
  `motif`, `underlineMotif`, `mailSubject/mailOpening` onde faltavam).
- Conteúdo editorial (`institution`, `faq`, `initiatives`) agora tem
  pt/en/it/fr/es explícitos — sem fallback silencioso para PT nesses arquivos.
  Strings hardcoded do formulário (assunto/status do mailto) traduzidas.
  Nome oficial e o lema em latim idênticos em todos os idiomas.

## Testes (Fase 7)
- `npm run build` (Docker `node:22-alpine`, pois o Node local é 20):
  **116 páginas, OK**. `npx astro check`: **0 erros/avisos**.
- `node scripts/check-i18n.mjs`: OK. Varredura em `dist/`: sem OSMTH,
  exemplo, "Local a definir" ou valores inventados; **0 links internos
  quebrados**; `lang`/hreflang corretos por idioma.
- Limitação: o navegador interno não alcançou o servidor local de preview,
  logo não houve screenshot; a verificação visual foi feita por inspeção da
  geometria dos SVGs/componentes e do HTML gerado.

## Pendências de validação humana
1. Confirmar URLs oficiais do Facebook/Instagram `@oicmctb` para exibir ícones.
2. Endereço, telefone e horários oficiais (hoje ocultos).
3. Textos jurídicos oficiais (privacidade/termos/cookies) e eventual CNPJ —
   **não transferir** registros de outra entidade sem validação jurídica.
4. Eventos/artigos reais (data + local confirmados) para popular as páginas.
5. Regras/valores de afiliação e de doações (incl. eventual benefício fiscal)
   documentados, se forem para publicação.
6. Arquivo institucional original do brasão para substituir o emblema atual.
7. Confirmar se "Dia das Cidades" é projeto ativo ou apenas proposto.
