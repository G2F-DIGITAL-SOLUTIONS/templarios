# CONTEXTO — Reestruturação Institucional OICMCTB

## Status da branch
- Branch: `feat/reestruturacao-oicmctb` (criada a partir de `main`, que está atualizada com `origin/main`)
- Repositório: `/Users/gabrielnicolim/Documents/g2f/templarios`
- Framework: Astro v7 (SSG estático), Tailwind CSS v4, TypeScript, i18n (pt/en/it/fr/es)
- Build: 156 páginas HTML estáticas geradas com sucesso
- Type check: 0 erros, 0 warnings

## Implementação concluída

### Arquivos modificados
1. `src/config/site.ts` — Nome institucional completo (OICMCTB), CNPJ, Grão-Mestre, Primeira-Dama, ABTL, e-mail, lema, redes sociais. Placeholders removidos. Endereço/telefone não publicados (não confirmados).
2. `src/config/navigation.ts` — Menu principal reorganizado: "A Ordem" agrupa Quem Somos, Missão Visão e Valores, Informações Institucionais. Novos itens: História, Brasão e Simbologia, Academia (ABTL), Damas Templárias, Atuação Social, Contato.
3. `src/i18n/routes.ts` — Novas rotas: brasao, abtl, damas, informacoes, iniciativaSocial, iniciativaCulture, iniciativaHeraldry, iniciativaCivicMemory.
4. `src/routes.ts` — Novas view definitions para brasao, abtl, damas, informacoes.
5. `src/i18n/dictionaries/pt.ts` — Cópia institucional reescrita (fonte da verdade para i18n).
6. `src/i18n/dictionaries/en.ts, es.ts, fr.ts, it.ts` — Atualizados para bater com o novo tipo Dictionary.
7. `src/content/institution.ts` — Quem Somos, História, Missão/Visão/Valores, Ensinamentos, Conteúdo de Brasão/ABTL/Damas/Informações Institucionais.
8. `src/content/initiatives.ts` — 8 frentes de atuação (incluindo Assistência Social, Cultura/História/Pesquisa, Estudos Heráldicos, Memória de Heróis Cívicos).
9. `src/content/doors.ts` — Novas portas da homepage.
10. `src/views/HomeView.astro` — Hero com lema oficial, nova apresentação institucional.
11. `src/views/InstitutionPage.astro` — Corrigido relatedLinks (purposes → missionVisionValues).
12. `src/views/InitiativesPage.astro` — Apenas imagens SVG para as 4 iniciativas originais.
13. `src/views/InitiativePage.astro` — Todas as 8 iniciativas.
14. `src/views/ContactPage.astro` — E-mail e redes como texto (não links), dados pendentes.
15. `src/views/EventsPage.astro` — Removido eventsPlatformUrl (não confirmado).
16. `src/views/BrasaoPage.astro` — NOVA: página de Brasão e Simbologia com 8 seções heráldicas.
17. `src/views/AbtlPage.astro` — NOVA: página da Academia Brasileira Templária de Letras.
18. `src/views/DamasPage.astro` — NOVA: página do Conselho Nacional das Damas Templárias.
19. `src/views/InformacoesPage.astro` — NOVA: página de Informações Institucionais.
20. `src/components/Footer.astro` — E-mail/redes como texto, não links clicáveis até validação.
21. `src/components/SEO.astro` — Domínio de produção, JSON-LD Organization sem endereço/telefone não confirmados.
22. `src/components/CastleEntrance.astro` — CTA secundário aponta para História.
23. `astro.config.mjs` — SITE = https://templariosdobrasil.com
24. `public/robots.txt` — Sitemap com domínio de produção.

### Pendências documentais (para relatório final)
1. Arquivo vetorial oficial do brasão (CDR/SVG/PNG alta resolução) — solicitar à Ordem. O emblema atual é um SVG genérico (portão do castelo), não o brasão oficial.
2. Validação do CNPJ 42.071.770/0001-75 em fontes oficiais (Receita Federal).
3. Validação do e-mail oicmctb@gmail.com e perfis @oicmctb (Facebook/Instagram) — não publicados como links clicáveis até confirmação.
4. Confirmação da nomenclatura correta do Conselho Nacional das Damas Templárias (Sueli Teodoro = Primeira-Dama).
5. Validação da razão social e situação cadastral em fontes oficiais.

### Não implementado (intencionalmente)
- Deploy em produção (alterações estão apenas no código/local, não publicadas).
- Emblema/brasão oficial substituído (arquivo oficial não disponível no repositório).
- E-mail e redes sociais como links clicáveis (pendente de validação pela Ordem).
- Páginas vazias criadas somente para preencher o menu.
- Novas dependências ou CMS.
- Endereço, telefone, estatuto, certificados (não confirmados pela Ordem).
