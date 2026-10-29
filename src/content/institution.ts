import type { Localized } from './localize';

/**
 * Editorial content for the institutional pages — OICMCTB.
 *
 * Source: feedback from the Order's representatives and
 * "Considerações para a Nova Ordem OICMCTB (2025)", pp. 32–40.
 * Unconfirmed facts (international recognition, partnerships, results,
 * legal registrations) are deliberately not claimed. The 2021 date is the
 * formalisation as a legal entity, not a historic founding date.
 */
export interface Section {
  id: string;
  heading: Localized<string>;
  body: Localized<string[]>;
}

type L5 = { pt: string; en: string; it: string; fr: string; es: string };
type L5A = { pt: string[]; en: string[]; it: string[]; fr: string[]; es: string[] };
const s = (id: string, heading: L5, body: L5A): Section => ({ id, heading, body });

export const INDEPENDENCE: L5 = {
  pt: 'A Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) é uma organização civil independente e não constitui uma Ordem Maçônica. A instituição não possui vínculo institucional com a Maçonaria. A eventual participação de pessoas que também sejam membros da Maçonaria ocorre exclusivamente em caráter individual, mediante ingresso e aceitação formal como membros da OICMCTB, sem estabelecer vínculo institucional entre as organizações.',
  en: 'The International Civil Military Order of Knights Templar of Brazil (OICMCTB) is an independent civil organisation and is not a Masonic Order. The institution has no institutional link with Freemasonry. Any participation by persons who are also members of Freemasonry takes place exclusively in an individual capacity, through formal admission and acceptance as members of the OICMCTB, without establishing any institutional link between the organisations.',
  it: "L'Ordine Internazionale Civile Militare dei Cavalieri Templari del Brasile (OICMCTB) è un'organizzazione civile indipendente e non costituisce un Ordine Massonico. L'istituzione non ha alcun legame istituzionale con la Massoneria. L'eventuale partecipazione di persone che siano anche membri della Massoneria avviene esclusivamente a titolo individuale, mediante ingresso e accettazione formale come membri dell'OICMCTB, senza stabilire alcun legame istituzionale tra le organizzazioni.",
  fr: "L'Ordre International Civil Militaire des Chevaliers Templiers du Brésil (OICMCTB) est une organisation civile indépendante et ne constitue pas un Ordre maçonnique. L'institution n'a aucun lien institutionnel avec la Franc-maçonnerie. La participation éventuelle de personnes également membres de la Franc-maçonnerie a lieu exclusivement à titre individuel, par admission et acceptation formelles comme membres de l'OICMCTB, sans établir de lien institutionnel entre les organisations.",
  es: 'La Orden Internacional Civil Militar Caballeros Templarios de Brasil (OICMCTB) es una organización civil independiente y no constituye una Orden Masónica. La institución no tiene vínculo institucional con la Masonería. La eventual participación de personas que también sean miembros de la Masonería ocurre exclusivamente a título individual, mediante ingreso y aceptación formal como miembros de la OICMCTB, sin establecer vínculo institucional entre las organizaciones.',
};

export const aboutSections: Section[] = [
  s('identidade',
    { pt: 'Quem somos', en: 'Who we are', it: 'Chi siamo', fr: 'Qui sommes-nous', es: 'Quiénes somos' },
    {
      pt: ['A Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) é uma organização civil brasileira, sem fins lucrativos, de caráter fraterno, cultural, filosófico, cívico e filantrópico, com identidade e autonomia próprias.', 'A instituição é dedicada aos valores cavalheirescos, ao desenvolvimento humano, à cultura, à preservação da memória histórica e ao bem comum.'],
      en: ['The International Civil Military Order of Knights Templar of Brazil (OICMCTB) is a Brazilian non-profit civil organisation of a fraternal, cultural, philosophical, civic and philanthropic character, with its own identity and autonomy.', 'The institution is dedicated to chivalric values, human development, culture, the preservation of historical memory and the common good.'],
      it: ["L'Ordine Internazionale Civile Militare dei Cavalieri Templari del Brasile (OICMCTB) è un'organizzazione civile brasiliana senza scopo di lucro, di carattere fraterno, culturale, filosofico, civico e filantropico, con identità e autonomia proprie.", "L'istituzione è dedicata ai valori cavallereschi, allo sviluppo umano, alla cultura, alla preservazione della memoria storica e al bene comune."],
      fr: ["L'Ordre International Civil Militaire des Chevaliers Templiers du Brésil (OICMCTB) est une organisation civile brésilienne à but non lucratif, à caractère fraternel, culturel, philosophique, civique et philanthropique, dotée d'une identité et d'une autonomie propres.", "L'institution est dédiée aux valeurs chevaleresques, au développement humain, à la culture, à la préservation de la mémoire historique et au bien commun."],
      es: ['La Orden Internacional Civil Militar Caballeros Templarios de Brasil (OICMCTB) es una organización civil brasileña sin fines de lucro, de carácter fraterno, cultural, filosófico, cívico y filantrópico, con identidad y autonomía propias.', 'La institución se dedica a los valores caballerescos, al desarrollo humano, a la cultura, a la preservación de la memoria histórica y al bien común.'],
    }),
  s('formalizacao',
    { pt: 'Formalização e liderança', en: 'Formalisation and leadership', it: 'Formalizzazione e guida', fr: 'Formalisation et direction', es: 'Formalización y liderazgo' },
    {
      pt: ['A instituição foi formalizada como pessoa jurídica em 2021. Essa data corresponde à formalização jurídica da entidade contemporânea e não deve ser confundida com uma data de fundação histórica.', 'O material institucional identifica Roberto Aguiar Guazzelli como Grão-Mestre da Ordem.'],
      en: ['The institution was formally incorporated as a legal entity in 2021. That date corresponds to the legal formalisation of the contemporary entity and should not be confused with a historic founding date.', 'The institutional material identifies Roberto Aguiar Guazzelli as Grand Master of the Order.'],
      it: ["L'istituzione è stata formalizzata come persona giuridica nel 2021. Tale data corrisponde alla formalizzazione giuridica dell'ente contemporaneo e non deve essere confusa con una data di fondazione storica.", 'Il materiale istituzionale identifica Roberto Aguiar Guazzelli come Gran Maestro dell’Ordine.'],
      fr: ["L'institution a été formalisée comme personne juridique en 2021. Cette date correspond à la formalisation juridique de l'entité contemporaine et ne doit pas être confondue avec une date de fondation historique.", 'Le matériel institutionnel identifie Roberto Aguiar Guazzelli comme Grand Maître de l’Ordre.'],
      es: ['La institución fue formalizada como persona jurídica en 2021. Esa fecha corresponde a la formalización jurídica de la entidad contemporánea y no debe confundirse con una fecha de fundación histórica.', 'El material institucional identifica a Roberto Aguiar Guazzelli como Gran Maestre de la Orden.'],
    }),
  s('missao-visao',
    { pt: 'Missão e visão', en: 'Mission and vision', it: 'Missione e visione', fr: 'Mission et vision', es: 'Misión y visión' },
    {
      pt: ['Missão: contribuir para criar o futuro de um modo diferente, promovendo desenvolvimento humano, preservação da história templária, memória dos heróis cívicos locais, ações comunitárias, projetos educacionais e reconhecimento do mérito, respeitando tradições e leis locais.', 'Visão: ser reconhecida internacionalmente como uma ordem templária legitimamente brasileira que contribui para a melhoria da vida de seus associados e das comunidades onde atua, pautada pela fé em Deus, pelo respeito às tradições locais e pela preservação da memória histórica. Trata-se de um objetivo institucional, não de um reconhecimento já obtido.'],
      en: ['Mission: to help create the future in a different way, promoting human development, preservation of Templar history, memory of local civic heroes, community actions, educational projects and recognition of merit, respecting local traditions and laws.', 'Vision: to be recognised internationally as a legitimately Brazilian Templar order that contributes to improving the lives of its members and of the communities where it works, guided by faith in God, respect for local traditions and preservation of historical memory. This is an institutional goal, not recognition already obtained.'],
      it: ['Missione: contribuire a creare il futuro in modo diverso, promuovendo lo sviluppo umano, la preservazione della storia templare, la memoria degli eroi civici locali, azioni comunitarie, progetti educativi e il riconoscimento del merito, nel rispetto delle tradizioni e delle leggi locali.', 'Visione: essere riconosciuta a livello internazionale come un ordine templare legittimamente brasiliano che contribuisce a migliorare la vita dei suoi membri e delle comunità in cui opera, guidato dalla fede in Dio, dal rispetto delle tradizioni locali e dalla preservazione della memoria storica. È un obiettivo istituzionale, non un riconoscimento già ottenuto.'],
      fr: ['Mission : contribuer à créer l’avenir d’une manière différente, en promouvant le développement humain, la préservation de l’histoire templière, la mémoire des héros civiques locaux, des actions communautaires, des projets éducatifs et la reconnaissance du mérite, dans le respect des traditions et des lois locales.', 'Vision : être reconnue internationalement comme un ordre templier légitimement brésilien qui contribue à améliorer la vie de ses membres et des communautés où il agit, guidé par la foi en Dieu, le respect des traditions locales et la préservation de la mémoire historique. Il s’agit d’un objectif institutionnel, et non d’une reconnaissance déjà obtenue.'],
      es: ['Misión: contribuir a crear el futuro de una manera diferente, promoviendo el desarrollo humano, la preservación de la historia templaria, la memoria de los héroes cívicos locales, acciones comunitarias, proyectos educativos y el reconocimiento del mérito, respetando las tradiciones y las leyes locales.', 'Visión: ser reconocida internacionalmente como una orden templaria legítimamente brasileña que contribuye a mejorar la vida de sus asociados y de las comunidades donde actúa, guiada por la fe en Dios, el respeto a las tradiciones locales y la preservación de la memoria histórica. Es un objetivo institucional, no un reconocimiento ya obtenido.'],
    }),
  s('valores-lema',
    { pt: 'Valores e lema', en: 'Values and motto', it: 'Valori e motto', fr: 'Valeurs et devise', es: 'Valores y lema' },
    {
      pt: ['Valores: Fé em Deus, Esperança, Caridade, Justiça, Prudência, Fortaleza e Temperança.', 'Lema oficial: CREARE FUTURUM MUTATO MODO — “Para criar o futuro de um modo diferente.”'],
      en: ['Values: Faith in God, Hope, Charity, Justice, Prudence, Fortitude and Temperance.', 'Official motto: CREARE FUTURUM MUTATO MODO — “To create the future in a different way.”'],
      it: ['Valori: Fede in Dio, Speranza, Carità, Giustizia, Prudenza, Fortezza e Temperanza.', 'Motto ufficiale: CREARE FUTURUM MUTATO MODO — “Creare il futuro in modo diverso.”'],
      fr: ['Valeurs : Foi en Dieu, Espérance, Charité, Justice, Prudence, Force et Tempérance.', 'Devise officielle : CREARE FUTURUM MUTATO MODO — « Créer l’avenir d’une manière différente. »'],
      es: ['Valores: Fe en Dios, Esperanza, Caridad, Justicia, Prudencia, Fortaleza y Templanza.', 'Lema oficial: CREARE FUTURUM MUTATO MODO — «Crear el futuro de una manera diferente.»'],
    }),
  s('filosofia',
    { pt: 'Filosofia de trabalho', en: 'Working philosophy', it: 'Filosofia di lavoro', fr: 'Philosophie de travail', es: 'Filosofía de trabajo' },
    {
      pt: ['A filosofia de trabalho da Ordem assenta na humildade, no reconhecimento dos erros, na sinceridade, na justiça, na misericórdia, na fé, na verdade e no serviço ao bem comum.'],
      en: ['The Order’s working philosophy rests on humility, acknowledgement of mistakes, sincerity, justice, mercy, faith, truth and service to the common good.'],
      it: ['La filosofia di lavoro dell’Ordine si fonda su umiltà, riconoscimento degli errori, sincerità, giustizia, misericordia, fede, verità e servizio al bene comune.'],
      fr: ['La philosophie de travail de l’Ordre repose sur l’humilité, la reconnaissance des erreurs, la sincérité, la justice, la miséricorde, la foi, la vérité et le service du bien commun.'],
      es: ['La filosofía de trabajo de la Orden se funda en la humildad, el reconocimiento de los errores, la sinceridad, la justicia, la misericordia, la fe, la verdad y el servicio al bien común.'],
    }),
  s('nao-maconica',
    { pt: 'Independência em relação à Maçonaria', en: 'Independence from Freemasonry', it: 'Indipendenza dalla Massoneria', fr: 'Indépendance vis-à-vis de la Franc-maçonnerie', es: 'Independencia respecto a la Masonería' },
    { pt: [INDEPENDENCE.pt], en: [INDEPENDENCE.en], it: [INDEPENDENCE.it], fr: [INDEPENDENCE.fr], es: [INDEPENDENCE.es] }),
  s('cultura',
    { pt: 'Cultura: ABTL e Damas Templárias', en: 'Culture: ABTL and Templar Dames', it: 'Cultura: ABTL e Dame Templari', fr: 'Culture : ABTL et Dames Templières', es: 'Cultura: ABTL y Damas Templarias' },
    {
      pt: ['A Academia Brasileira Templária de Letras (ABTL) é apresentada como o braço cultural e literário associado à Ordem.', 'O material institucional identifica o Conselho Nacional das Damas Templárias e Sueli Teodoro como Primeira-Dama.'],
      en: ['The Academia Brasileira Templária de Letras (ABTL — Brazilian Templar Academy of Letters) is presented as the cultural and literary arm associated with the Order.', 'The institutional material identifies the National Council of Templar Dames (Conselho Nacional das Damas Templárias) and Sueli Teodoro as First Dame.'],
      it: ['L’Academia Brasileira Templária de Letras (ABTL) è presentata come il braccio culturale e letterario associato all’Ordine.', 'Il materiale istituzionale identifica il Conselho Nacional das Damas Templárias (Consiglio Nazionale delle Dame Templari) e Sueli Teodoro come Primeira-Dama.'],
      fr: ['L’Academia Brasileira Templária de Letras (ABTL) est présentée comme le bras culturel et littéraire associé à l’Ordre.', 'Le matériel institutionnel identifie le Conselho Nacional das Damas Templárias (Conseil National des Dames Templières) et Sueli Teodoro comme Primeira-Dama.'],
      es: ['La Academia Brasileira Templária de Letras (ABTL) se presenta como el brazo cultural y literario asociado a la Orden.', 'El material institucional identifica al Conselho Nacional das Damas Templárias (Consejo Nacional de las Damas Templarias) y a Sueli Teodoro como Primeira-Dama.'],
    }),
];

export const historySections: Section[] = [
  s('tradicao',
    { pt: 'Inspiração histórica, sem continuidade jurídica', en: 'Historical inspiration, without legal continuity', it: 'Ispirazione storica, senza continuità giuridica', fr: 'Inspiration historique, sans continuité juridique', es: 'Inspiración histórica, sin continuidad jurídica' },
    {
      pt: ['A OICMCTB inspira-se na tradição histórica dos Cavaleiros Templários e na preservação de sua memória. Essa inspiração não significa continuidade jurídica direta entre a instituição brasileira contemporânea e a ordem medieval dos Cavaleiros Templários.', 'Por isso, o site distingue factos documentados de interpretações atribuídas pela própria Ordem.'],
      en: ['The OICMCTB is inspired by the historical tradition of the Knights Templar and by the preservation of its memory. That inspiration does not mean direct legal continuity between the contemporary Brazilian institution and the medieval order of the Knights Templar.', 'For that reason, this site distinguishes documented facts from interpretations attributed by the Order itself.'],
      it: ['L’OICMCTB si ispira alla tradizione storica dei Cavalieri Templari e alla preservazione della sua memoria. Tale ispirazione non significa continuità giuridica diretta tra l’istituzione brasiliana contemporanea e l’ordine medievale dei Cavalieri Templari.', 'Per questo, il sito distingue i fatti documentati dalle interpretazioni attribuite dall’Ordine stesso.'],
      fr: ['L’OICMCTB s’inspire de la tradition historique des Chevaliers Templiers et de la préservation de sa mémoire. Cette inspiration ne signifie pas une continuité juridique directe entre l’institution brésilienne contemporaine et l’ordre médiéval des Chevaliers Templiers.', 'C’est pourquoi ce site distingue les faits documentés des interprétations attribuées par l’Ordre lui-même.'],
      es: ['La OICMCTB se inspira en la tradición histórica de los Caballeros Templarios y en la preservación de su memoria. Esa inspiración no significa continuidad jurídica directa entre la institución brasileña contemporánea y la orden medieval de los Caballeros Templarios.', 'Por ello, este sitio distingue los hechos documentados de las interpretaciones atribuidas por la propia Orden.'],
    }),
  s('instituicao',
    { pt: 'A instituição contemporânea', en: 'The contemporary institution', it: 'L’istituzione contemporanea', fr: 'L’institution contemporaine', es: 'La institución contemporánea' },
    {
      pt: ['A OICMCTB foi formalizada como pessoa jurídica em 2021 — registo igualmente presente no selo, em numeração romana (MMXXI). É uma organização civil brasileira, sem fins lucrativos, com identidade e autonomia próprias.'],
      en: ['The OICMCTB was formally incorporated as a legal entity in 2021 — a record also present in the seal in Roman numerals (MMXXI). It is a Brazilian non-profit civil organisation with its own identity and autonomy.'],
      it: ['L’OICMCTB è stata formalizzata come persona giuridica nel 2021 — registrazione presente anche nel sigillo in numeri romani (MMXXI). È un’organizzazione civile brasiliana senza scopo di lucro, con identità e autonomia proprie.'],
      fr: ['L’OICMCTB a été formalisée comme personne juridique en 2021 — mention également présente dans le sceau en chiffres romains (MMXXI). C’est une organisation civile brésilienne à but non lucratif, dotée d’une identité et d’une autonomie propres.'],
      es: ['La OICMCTB fue formalizada como persona jurídica en 2021 — registro también presente en el sello en numeración romana (MMXXI). Es una organización civil brasileña sin fines de lucro, con identidad y autonomía propias.'],
    }),
  s('selo',
    { pt: 'O selo', en: 'The seal', it: 'Il sigillo', fr: 'Le sceau', es: 'El sello' },
    {
      pt: ['O selo representa dois cavaleiros compartilhando o mesmo cavalo, elemento clássico da iconografia templária associado, na interpretação institucional, à partilha e à vida em comum.', 'Em torno da imagem lê-se a inscrição “SIGNUM TEMPLARIORUM BRASILIAE” e o registo “MMXXI” (2021). Segundo a interpretação da própria Ordem, a direção invertida dos cavaleiros expressa o olhar para mais de uma direção — vigilância e atenção ao passado e ao futuro —, e não um facto histórico documentado.'],
      en: ['The seal depicts two knights sharing the same horse, a classic element of Templar iconography associated, in the institutional interpretation, with sharing and life in common.', 'Around the image are the inscription “SIGNUM TEMPLARIORUM BRASILIAE” and the record “MMXXI” (2021). According to the Order’s own interpretation, the reversed direction of the knights expresses looking in more than one direction — vigilance and attention to past and future — rather than a documented historical fact.'],
      it: ['Il sigillo rappresenta due cavalieri che condividono lo stesso cavallo, elemento classico dell’iconografia templare associato, nell’interpretazione istituzionale, alla condivisione e alla vita in comune.', 'Intorno all’immagine si leggono l’iscrizione “SIGNUM TEMPLARIORUM BRASILIAE” e la registrazione “MMXXI” (2021). Secondo l’interpretazione dell’Ordine stesso, la direzione invertita dei cavalieri esprime lo sguardo rivolto in più di una direzione — vigilanza e attenzione al passato e al futuro — e non un fatto storico documentato.'],
      fr: ['Le sceau représente deux chevaliers partageant le même cheval, élément classique de l’iconographie templière associé, dans l’interprétation institutionnelle, au partage et à la vie en commun.', 'Autour de l’image figurent l’inscription « SIGNUM TEMPLARIORUM BRASILIAE » et la mention « MMXXI » (2021). Selon l’interprétation de l’Ordre lui-même, la direction inversée des chevaliers exprime un regard tourné dans plus d’une direction — vigilance et attention au passé et à l’avenir — et non un fait historique documenté.'],
      es: ['El sello representa a dos caballeros compartiendo el mismo caballo, elemento clásico de la iconografía templaria asociado, en la interpretación institucional, al compartir y a la vida en común.', 'Alrededor de la imagen se leen la inscripción «SIGNUM TEMPLARIORUM BRASILIAE» y el registro «MMXXI» (2021). Según la interpretación de la propia Orden, la dirección invertida de los caballeros expresa la mirada hacia más de una dirección — vigilancia y atención al pasado y al futuro — y no un hecho histórico documentado.'],
    }),
  s('brasao',
    { pt: 'O brasão', en: 'The coat of arms', it: 'Lo stemma', fr: 'Les armoiries', es: 'El escudo' },
    {
      pt: ['Conforme o documento institucional, o brasão apresenta escudo ogival e lanceolado, com campos verdes e amarelos e uma cruz grega vermelha. Ao centro encontra-se o selo redondo.', 'Sobre o escudo, um elmo prateado com paquifes; como timbre, uma cruz de Malta templária. O conjunto é acompanhado pelo lema “CREARE FUTURUM MUTATO MODO” e pela divisa com a sigla O.I.C.M.C.T.B.', 'As cores verde e amarela dialogam com a identidade brasileira da instituição, sem que este site atribua ao brasão reconhecimentos ou registros não documentados. O arquivo institucional original do brasão não é redesenhado neste site.'],
      en: ['According to the institutional document, the coat of arms has an ogival, lanceolate shield, with green and yellow fields and a red Greek cross. At the centre is the round seal.', 'Above the shield, a silver helmet with mantling; as crest, a Templar Maltese cross. The ensemble is accompanied by the motto “CREARE FUTURUM MUTATO MODO” and by the inscription with the initials O.I.C.M.C.T.B.', 'The green and yellow colours speak to the institution’s Brazilian identity, without this site attributing to the coat of arms any undocumented recognition or registration. The original institutional coat-of-arms file is not redrawn on this site.'],
      it: ['Secondo il documento istituzionale, lo stemma presenta uno scudo ogivale e lanceolato, con campi verdi e gialli e una croce greca rossa. Al centro si trova il sigillo rotondo.', 'Sopra lo scudo, un elmo d’argento con lambrecchini; come cimiero, una croce di Malta templare. L’insieme è accompagnato dal motto “CREARE FUTURUM MUTATO MODO” e dalla divisa con la sigla O.I.C.M.C.T.B.', 'I colori verde e giallo dialogano con l’identità brasiliana dell’istituzione, senza che questo sito attribuisca allo stemma riconoscimenti o registrazioni non documentati. Il file istituzionale originale dello stemma non viene ridisegnato in questo sito.'],
      fr: ['Selon le document institutionnel, les armoiries présentent un écu ogival et lancéolé, aux champs verts et jaunes et à la croix grecque rouge. Au centre se trouve le sceau rond.', 'Au-dessus de l’écu, un casque d’argent avec lambrequins ; comme cimier, une croix de Malte templière. L’ensemble est accompagné de la devise « CREARE FUTURUM MUTATO MODO » et de l’inscription portant le sigle O.I.C.M.C.T.B.', 'Les couleurs verte et jaune dialoguent avec l’identité brésilienne de l’institution, sans que ce site attribue aux armoiries des reconnaissances ou enregistrements non documentés. Le fichier institutionnel original des armoiries n’est pas redessiné sur ce site.'],
      es: ['Conforme el documento institucional, el escudo es ojival y lanceolado, con campos verdes y amarillos y una cruz griega roja. En el centro se encuentra el sello redondo.', 'Sobre el escudo, un yelmo plateado con lambrequines; como cimera, una cruz de Malta templaria. El conjunto va acompañado del lema «CREARE FUTURUM MUTATO MODO» y de la divisa con la sigla O.I.C.M.C.T.B.', 'Los colores verde y amarillo dialogan con la identidad brasileña de la institución, sin que este sitio atribuya al escudo reconocimientos o registros no documentados. El archivo institucional original del escudo no se redibuja en este sitio.'],
    }),
];

export const purposeSections: Section[] = [
  s('missao', { pt: 'Missão', en: 'Mission', it: 'Missione', fr: 'Mission', es: 'Misión' },
    { pt: ['Contribuir para criar o futuro de um modo diferente, promovendo desenvolvimento humano, preservação da história templária, memória dos heróis cívicos locais, ações comunitárias, projetos educacionais e reconhecimento do mérito, respeitando tradições e leis locais.'],
      en: ['To help create the future in a different way, promoting human development, preservation of Templar history, memory of local civic heroes, community actions, educational projects and recognition of merit, respecting local traditions and laws.'],
      it: ['Contribuire a creare il futuro in modo diverso, promuovendo lo sviluppo umano, la preservazione della storia templare, la memoria degli eroi civici locali, azioni comunitarie, progetti educativi e il riconoscimento del merito, nel rispetto delle tradizioni e delle leggi locali.'],
      fr: ['Contribuer à créer l’avenir d’une manière différente, en promouvant le développement humain, la préservation de l’histoire templière, la mémoire des héros civiques locaux, des actions communautaires, des projets éducatifs et la reconnaissance du mérite, dans le respect des traditions et des lois locales.'],
      es: ['Contribuir a crear el futuro de una manera diferente, promoviendo el desarrollo humano, la preservación de la historia templaria, la memoria de los héroes cívicos locales, acciones comunitarias, proyectos educativos y el reconocimiento del mérito, respetando las tradiciones y las leyes locales.'] }),
  s('visao', { pt: 'Visão', en: 'Vision', it: 'Visione', fr: 'Vision', es: 'Visión' },
    { pt: ['Ser reconhecida internacionalmente como uma ordem templária legitimamente brasileira que contribui para a melhoria da vida de seus associados e das comunidades onde atua, pautada pela fé em Deus, pelo respeito às tradições locais e pela preservação da memória histórica. A visão é um objetivo institucional.'],
      en: ['To be recognised internationally as a legitimately Brazilian Templar order that contributes to improving the lives of its members and of the communities where it works, guided by faith in God, respect for local traditions and preservation of historical memory. The vision is an institutional goal.'],
      it: ['Essere riconosciuta a livello internazionale come un ordine templare legittimamente brasiliano che contribuisce a migliorare la vita dei suoi membri e delle comunità in cui opera, guidato dalla fede in Dio, dal rispetto delle tradizioni locali e dalla preservazione della memoria storica. La visione è un obiettivo istituzionale.'],
      fr: ['Être reconnue internationalement comme un ordre templier légitimement brésilien qui contribue à améliorer la vie de ses membres et des communautés où il agit, guidé par la foi en Dieu, le respect des traditions locales et la préservation de la mémoire historique. La vision est un objectif institutionnel.'],
      es: ['Ser reconocida internacionalmente como una orden templaria legítimamente brasileña que contribuye a mejorar la vida de sus asociados y de las comunidades donde actúa, guiada por la fe en Dios, el respeto a las tradiciones locales y la preservación de la memoria histórica. La visión es un objetivo institucional.'] }),
  s('valores', { pt: 'Valores', en: 'Values', it: 'Valori', fr: 'Valeurs', es: 'Valores' },
    { pt: ['Fé em Deus. Esperança. Caridade. Justiça. Prudência. Fortaleza. Temperança.'],
      en: ['Faith in God. Hope. Charity. Justice. Prudence. Fortitude. Temperance.'],
      it: ['Fede in Dio. Speranza. Carità. Giustizia. Prudenza. Fortezza. Temperanza.'],
      fr: ['Foi en Dieu. Espérance. Charité. Justice. Prudence. Force. Tempérance.'],
      es: ['Fe en Dios. Esperanza. Caridad. Justicia. Prudencia. Fortaleza. Templanza.'] }),
  s('filosofia-propositos', { pt: 'Filosofia de trabalho', en: 'Working philosophy', it: 'Filosofia di lavoro', fr: 'Philosophie de travail', es: 'Filosofía de trabajo' },
    { pt: ['Humildade, reconhecimento dos erros, sinceridade, justiça, misericórdia, fé, verdade e serviço ao bem comum orientam o trabalho da Ordem.'],
      en: ['Humility, acknowledgement of mistakes, sincerity, justice, mercy, faith, truth and service to the common good guide the Order’s work.'],
      it: ['Umiltà, riconoscimento degli errori, sincerità, giustizia, misericordia, fede, verità e servizio al bene comune guidano il lavoro dell’Ordine.'],
      fr: ['L’humilité, la reconnaissance des erreurs, la sincérité, la justice, la miséricorde, la foi, la vérité et le service du bien commun guident le travail de l’Ordre.'],
      es: ['La humildad, el reconocimiento de los errores, la sinceridad, la justicia, la misericordia, la fe, la verdad y el servicio al bien común orientan el trabajo de la Orden.'] }),
  s('frentes', { pt: 'Frentes de atuação pretendidas', en: 'Intended areas of action', it: 'Ambiti di azione previsti', fr: 'Domaines d’action envisagés', es: 'Ámbitos de acción previstos' },
    { pt: ['Os materiais institucionais mencionam educação, saúde, esporte, meio ambiente — incluindo a proteção da Amazônia —, assistência social, cultura, pesquisa histórica e ações comunitárias. Neste site, essas áreas são apresentadas como objetivos e frentes institucionais, e não como resultados comprovados, enquanto não houver documentação publicada de projetos executados.'],
      en: ['The institutional materials mention education, health, sport, environment — including protection of the Amazon — social assistance, culture, historical research and community actions. On this site, those areas are presented as institutional goals and fields of action, not as proven results, until documentation of completed projects is published.'],
      it: ['I materiali istituzionali menzionano educazione, salute, sport, ambiente — inclusa la protezione dell’Amazzonia — assistenza sociale, cultura, ricerca storica e azioni comunitarie. In questo sito, tali ambiti sono presentati come obiettivi e ambiti istituzionali, e non come risultati comprovati, finché non sarà pubblicata documentazione di progetti realizzati.'],
      fr: ['Les matériaux institutionnels mentionnent l’éducation, la santé, le sport, l’environnement — y compris la protection de l’Amazonie —, l’assistance sociale, la culture, la recherche historique et les actions communautaires. Sur ce site, ces domaines sont présentés comme des objectifs et des champs d’action institutionnels, et non comme des résultats prouvés, tant qu’aucune documentation de projets réalisés n’est publiée.'],
      es: ['Los materiales institucionales mencionan educación, salud, deporte, medio ambiente — incluida la protección de la Amazonía —, asistencia social, cultura, investigación histórica y acciones comunitarias. En este sitio, esas áreas se presentan como objetivos y ámbitos institucionales, y no como resultados comprobados, mientras no se publique documentación de proyectos ejecutados.'] }),
];

/** "Ensinamentos" is presented as Culture/Knowledge — study as a path, without unconfirmed course claims. */
export const teachingSections: Section[] = [
  s('estudo', { pt: 'O estudo como caminho', en: 'Study as a path', it: 'Lo studio come cammino', fr: 'L’étude comme voie', es: 'El estudio como camino' },
    { pt: ['O estudo, a cultura e a preservação da memória histórica fazem parte da identidade da OICMCTB. A Academia Brasileira Templária de Letras (ABTL) é o braço cultural e literário associado à Ordem.'],
      en: ['Study, culture and preservation of historical memory are part of the OICMCTB’s identity. The Academia Brasileira Templária de Letras (ABTL) is the cultural and literary arm associated with the Order.'],
      it: ['Lo studio, la cultura e la preservazione della memoria storica fanno parte dell’identità dell’OICMCTB. L’Academia Brasileira Templária de Letras (ABTL) è il braccio culturale e letterario associato all’Ordine.'],
      fr: ['L’étude, la culture et la préservation de la mémoire historique font partie de l’identité de l’OICMCTB. L’Academia Brasileira Templária de Letras (ABTL) est le bras culturel et littéraire associé à l’Ordre.'],
      es: ['El estudio, la cultura y la preservación de la memoria histórica forman parte de la identidad de la OICMCTB. La Academia Brasileira Templária de Letras (ABTL) es el brazo cultural y literario asociado a la Orden.'] }),
  s('valores-estudo', { pt: 'Valores no estudo e na vida', en: 'Values in study and in life', it: 'Valori nello studio e nella vita', fr: 'Les valeurs dans l’étude et dans la vie', es: 'Valores en el estudio y en la vida' },
    { pt: ['Fé em Deus, Esperança, Caridade, Justiça, Prudência, Fortaleza e Temperança — vividos com humildade, sinceridade, verdade e serviço ao bem comum.'],
      en: ['Faith in God, Hope, Charity, Justice, Prudence, Fortitude and Temperance — lived with humility, sincerity, truth and service to the common good.'],
      it: ['Fede in Dio, Speranza, Carità, Giustizia, Prudenza, Fortezza e Temperanza — vissuti con umiltà, sincerità, verità e servizio al bene comune.'],
      fr: ['Foi en Dieu, Espérance, Charité, Justice, Prudence, Force et Tempérance — vécues avec humilité, sincérité, vérité et service du bien commun.'],
      es: ['Fe en Dios, Esperanza, Caridad, Justicia, Prudencia, Fortaleza y Templanza — vividos con humildad, sinceridad, verdad y servicio al bien común.'] }),
];

export const quotes = [
  {
    text: {
      pt: 'CREARE FUTURUM MUTATO MODO — Para criar o futuro de um modo diferente.',
      en: 'CREARE FUTURUM MUTATO MODO — To create the future in a different way.',
      it: 'CREARE FUTURUM MUTATO MODO — Creare il futuro in modo diverso.',
      fr: 'CREARE FUTURUM MUTATO MODO — Créer l’avenir d’une manière différente.',
      es: 'CREARE FUTURUM MUTATO MODO — Crear el futuro de una manera diferente.',
    },
    source: { pt: 'Lema oficial da OICMCTB', en: 'Official motto of the OICMCTB', it: 'Motto ufficiale dell’OICMCTB', fr: 'Devise officielle de l’OICMCTB', es: 'Lema oficial de la OICMCTB' },
  },
] as const;
