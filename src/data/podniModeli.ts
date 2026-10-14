// Podaci za 4 monoblok modela modularnih podnih sistema.
// Koristi ih glavna stranica /modularni-podni-sistemi/ (kartice) i šablon stranica "Više o proizvodu".
// Sve tekstove kasnije razrađuješ ovde, na jednom mestu.

export interface PodniFeature {
  tag: string;
  title: string;
  text: string;
}

export interface PodniModel {
  slug: string;
  number: string;
  name: string; // na karticama se prikazuje velikim slovima (CSS)
  short: string; // gde se koristi
  desc: string; // opis za karticu na glavnoj stranici
  image: string;
  alt: string;
  metaTitle: string; // BaseLayout sam dodaje " · Modularni Sistemi"
  metaDescription: string;
  h1: [string, string]; // [obični deo, narandžasti deo]
  lead: string;
  usage: string;
  specIntro: string[];
  features: PodniFeature[]; // tačno 3
  infoBoxes: { label: string; text: string }[]; // tačno 2
  facts: { value: string; label: string }[]; // tačno 4
  detail: { image: string; alt: string; text: string };
  application: { image: string; alt: string; title: string; meta: string } | null;
  variants: { image: string; alt: string; label: string }[];
}

const konstrukcija =
  'Čelična šasija dimenzija 1 × 1 m, fabrički sklopljena, sa teleskopskim zglobnim stopama sa kontra-maticom.';
const postavljanje =
  'Suva montaža bez betona, lepkova i fuga. Paneli se bočno klik-spajaju, bez ijednog šrafa na licu mesta.';

export const podniModeli: PodniModel[] = [
  {
    slug: 'eco-green-monoblok',
    number: '01',
    name: 'Eco-Green monoblok',
    short: 'Dvorišta, krovne terase, kafići',
    desc: 'Prirodan izgled trave, uvek zelen i čist — bez blata, košenja, zalivanja i održavanja.',
    image: '/images/podovi/eco-green-monoblok-vestacka-trava-1.webp',
    alt: 'Eco-Green monoblok modularni pod sa veštačkom travom',
    metaTitle: 'Eco-Green monoblok pod sa veštačkom travom',
    metaDescription:
      'Čelični monoblok panel 1×1 m sa veštačkom travom za dvorišta, krovne terase i kafiće. Suva montaža bez betona i lepkova.',
    h1: ['Eco-Green', 'monoblok'],
    lead: 'Prirodan izgled trave, uvek zelen i čist — bez blata, košenja, zalivanja i održavanja. Čelični monoblok panel 1×1 m koji se postavlja direktno na teren.',
    usage: 'Dvorišta, krovne terase i kafići.',
    specIntro: [
      'Eco-Green monoblok je fabrički sklopljen panel sa završnom oblogom od veštačke trave na čeličnoj šasiji. Postavlja se direktno na zemlju, šljunak, travu ili neravan beton.',
      'Pod je podignut od tla, pa kiša i voda otiču ispod panela — nema bara, vlage i neprijatnih mirisa.',
    ],
    features: [
      {
        tag: 'Završna obloga',
        title: 'Uvek zelen i čist',
        text: 'Prirodan izgled trave bez blata, košenja, zalivanja i održavanja.',
      },
      {
        tag: 'Konstrukcija',
        title: 'Čelična šasija 1 × 1 m',
        text: 'Fabrički sklopljen monoblok panel visoke čvrstoće bez ugibanja, koji se bočno spaja u čvrstu celinu.',
      },
      {
        tag: 'Montaža',
        title: 'Klik-spoj i nivelacija',
        text: 'Segmenti se bočno uklapaju bez šrafova, a teleskopske zglobne stope nivelišu neravnine terena od 4 do 12 cm.',
      },
    ],
    infoBoxes: [
      { label: 'Konstrukcija', text: konstrukcija },
      { label: 'Postavljanje', text: postavljanje },
    ],
    facts: [
      { value: '1 × 1 m', label: 'monoblok panel' },
      { value: '4–12 cm', label: 'nivelacija stopama' },
      { value: 'Bez održavanja', label: 'košenja i zalivanja' },
      { value: 'Suva montaža', label: 'bez betona i lepkova' },
    ],
    detail: {
      image: '/images/podovi/eco-green-monoblok-vestacka-trava-1.webp',
      alt: 'Detalj Eco-Green monoblok panela',
      text: 'Veštačka trava na čeličnoj šasiji: zelena površina tokom cele godine, na svakom terenu i bez radova na podlozi.',
    },
    application: {
      image: '/images/podovi/modularni-pod-terasa-exterijer-moderna-4.webp',
      alt: 'Modularni pod sa stazom od ploča u dvorištu',
      title: 'Dvorišta i terase',
      meta: 'Eco-Green primena',
    },
    variants: [
      { image: '/images/podovi/eco-green-monoblok-vestacka-trava-1.webp', alt: 'Eco-Green sa kamenim pločama', label: 'Trava sa pločama' },
      { image: '/images/podovi/eco-green-monoblok-vestacka-trava-2.webp', alt: 'Eco-Green tamnozelena trava', label: 'Tamnozelena trava' },
      { image: '/images/podovi/eco-green-monoblok-vestacka-trava-3.webp', alt: 'Eco-Green svetlozelena trava', label: 'Svetlozelena trava' },
    ],
  },
  {
    slug: 'wpc-compound-monoblok',
    number: '02',
    name: 'WPC-Compound monoblok',
    short: 'Terase, bašte restorana, bazeni',
    desc: 'Toplina i izgled prirodnog drveta, ali bez truljenja, lakiranja, iverja i vlage.',
    image: '/images/podovi/wpc-deking-monoblok-drvo-kompozit-1.webp',
    alt: 'WPC-Compound monoblok modularni deking pod',
    metaTitle: 'WPC-Compound monoblok deking pod',
    metaDescription:
      'Čelični monoblok panel 1×1 m sa WPC dekingom za terase, bašte restorana i bazene. Izgled drveta bez truljenja, lakiranja i iverja.',
    h1: ['WPC-Compound', 'monoblok'],
    lead: 'Toplina i izgled prirodnog drveta, ali bez truljenja, lakiranja, iverja i vlage. Čelični monoblok panel 1×1 m sa WPC dekingom.',
    usage: 'Terase, bašte restorana i bazeni.',
    specIntro: [
      'WPC-Compound monoblok spaja izgled drveta i čeličnu šasiju u jednom fabrički sklopljenom panelu. Postavlja se direktno na beton, zemlju, šljunak ili travnjak.',
      'Pod je podignut od tla, pa kiša i voda otiču ispod panela — nema bara, vlage i neprijatnih mirisa.',
    ],
    features: [
      {
        tag: 'Završna obloga',
        title: 'Izgled drveta bez održavanja',
        text: 'Toplina prirodnog drveta bez truljenja, lakiranja, iverja i vlage.',
      },
      {
        tag: 'Konstrukcija',
        title: 'Čelična šasija 1 × 1 m',
        text: 'Fabrički sklopljen monoblok panel visoke čvrstoće bez ugibanja, koji se bočno spaja u čvrstu celinu.',
      },
      {
        tag: 'Montaža',
        title: 'Klik-spoj i nivelacija',
        text: 'Segmenti se bočno uklapaju bez šrafova, a teleskopske zglobne stope nivelišu neravnine terena od 4 do 12 cm.',
      },
    ],
    infoBoxes: [
      { label: 'Konstrukcija', text: konstrukcija },
      { label: 'Postavljanje', text: postavljanje },
    ],
    facts: [
      { value: '1 × 1 m', label: 'monoblok panel' },
      { value: '4–12 cm', label: 'nivelacija stopama' },
      { value: 'Bez truljenja', label: 'lakiranja i iverja' },
      { value: 'Suva montaža', label: 'bez betona i lepkova' },
    ],
    detail: {
      image: '/images/podovi/wpc-deking-monoblok-drvo-kompozit-1.webp',
      alt: 'Detalj WPC-Compound monoblok panela',
      text: 'Kompozitni deking na čeličnoj šasiji: izgled drveta uz otpornost na vlagu i dug vek trajanja na otvorenom.',
    },
    application: {
      image: '/images/podovi/modularni-pod-terasa-kamene-staze-basta-2.webp',
      alt: 'Terasa sa modularnim podom uz kuću u sumrak',
      title: 'Terase i bašte',
      meta: 'WPC deking primena',
    },
    variants: [
      { image: '/images/podovi/wpc-deking-monoblok-drvo-kompozit-1.webp', alt: 'WPC deking tamno drvo', label: 'Tamno drvo' },
      { image: '/images/podovi/wpc-deking-monoblok-drvo-kompozit-2.webp', alt: 'WPC deking toplo drvo', label: 'Toplo drvo' },
      { image: '/images/podovi/wpc-deking-monoblok-drvo-kompozit-3.webp', alt: 'WPC deking svetlo drvo', label: 'Svetlo drvo' },
    ],
  },
  {
    slug: 'gres-premium-monoblok',
    number: '03',
    name: 'Gres-Premium monoblok',
    short: 'Moderne terase, vile, lokali',
    desc: 'Vrhunska estetika keramike 20mm fabrički montirane na čelik — bez lepkova i fuga koje pucaju.',
    image: '/images/podovi/gres-premium-monoblok-keramika-1.webp',
    alt: 'Gres-Premium monoblok modularni pod sa granitnom keramikom',
    metaTitle: 'Gres-Premium monoblok pod sa granitnom keramikom',
    metaDescription:
      'Čelični monoblok panel 1×1 m sa granitnom keramikom 20 mm, fabrički montiranom. Bez lepkova i fuga koje pucaju, za terase, vile i lokale.',
    h1: ['Gres-Premium', 'monoblok'],
    lead: 'Vrhunska estetika keramike 20mm fabrički montirane na čelik — bez lepkova i fuga koje pucaju. Čelični monoblok panel 1×1 m.',
    usage: 'Moderne terase, vile i lokali.',
    specIntro: [
      'Granitna keramika debljine 20 mm fabrički je montirana na modularnu čeličnu konstrukciju. Dobijate izgled enterijera na otvorenom prostoru — bez lepkova, bez fuga koje pucaju i nereda.',
      'Pod je podignut od tla, pa kiša i voda otiču ispod panela — nema bara, vlage i neprijatnih mirisa.',
    ],
    features: [
      {
        tag: 'Završna obloga',
        title: 'Granitna keramika 20 mm',
        text: 'Vrhunska estetika keramike, otporne na mraz i so, sa savršeno ravnom površinom.',
      },
      {
        tag: 'Konstrukcija',
        title: 'Čelična šasija 1 × 1 m',
        text: 'Fabrički sklopljen monoblok panel visoke čvrstoće bez ugibanja, koji se bočno spaja u čvrstu celinu.',
      },
      {
        tag: 'Održavanje',
        title: 'Zamena pojedinačne ploče',
        text: 'Svaki panel je moguće zameniti pojedinačno, bez razbijanja poda i bez dodatnih radova.',
      },
    ],
    infoBoxes: [
      { label: 'Konstrukcija', text: konstrukcija },
      { label: 'Postavljanje', text: postavljanje },
    ],
    facts: [
      { value: '20 mm', label: 'granitna keramika' },
      { value: 'Mraz i so', label: 'otporno' },
      { value: '1 × 1 m', label: 'monoblok panel' },
      { value: '4–12 cm', label: 'nivelacija stopama' },
    ],
    detail: {
      image: '/images/podovi/gres-premium-monoblok-keramika-1.webp',
      alt: 'Detalj Gres-Premium monoblok panela',
      text: 'Keramika fabrički montirana na čelik: ravna površina, čiste ivice i pod koji se postavlja za jedno popodne.',
    },
    application: {
      image: '/images/podovi/modularni-pod-terasa-kisa-noc-1.webp',
      alt: 'Modularni pod na terasi uz bazen u sumrak',
      title: 'Terasa uz bazen',
      meta: 'Gres-Premium primena',
    },
    variants: [
      { image: '/images/podovi/gres-premium-monoblok-keramika-1.webp', alt: 'Gres-Premium tamna keramika', label: 'Tamna keramika' },
      { image: '/images/podovi/gres-premium-monoblok-keramika-2.webp', alt: 'Gres-Premium siva keramika', label: 'Siva keramika' },
      { image: '/images/podovi/gres-premium-monoblok-keramika-3.webp', alt: 'Gres-Premium svetla keramika', label: 'Svetla keramika' },
    ],
  },
  {
    slug: 'heavy-duty-monoblok',
    number: '04',
    name: 'Heavy-Duty monoblok',
    short: 'Radionice, servisi, industrija',
    desc: 'Ekstremna nosivost za teška vozila, 100% protivklizno, propušta sve tečnosti direktno ispod poda.',
    image: '/images/podovi/heavy-duty-monoblok-industrijska-resetka-1.webp',
    alt: 'Heavy-Duty monoblok industrijska rešetka visoke nosivosti',
    metaTitle: 'Heavy-Duty monoblok industrijski pod',
    metaDescription:
      'Čelični monoblok panel 1×1 m sa industrijskom rešetkom ekstremne nosivosti za radionice, servise, perionice i magacine.',
    h1: ['Heavy-Duty', 'monoblok'],
    lead: 'Ekstremna nosivost za teška vozila, 100% protivklizno, propušta sve tečnosti direktno ispod poda. Čelični monoblok panel 1×1 m.',
    usage: 'Radionice, servisi, perionice i magacini.',
    specIntro: [
      'Heavy-Duty monoblok je konstruisan za prostore gde obični podovi brzo propadaju. Rešetkasta struktura omogućava trenutni prolaz tečnosti i ulja, ostavljajući gaznu površinu uvek suvom i bezbednom.',
      'Postavlja se direktno na postojeću podlogu, bez betoniranja, uz nivelaciju teleskopskim zglobnim stopama.',
    ],
    features: [
      {
        tag: 'Nosivost',
        title: 'Ekstremna nosivost',
        text: 'Namenjen dizalicama, teškim vozilima i teretu u radionicama, servisima i magacinima.',
      },
      {
        tag: 'Površina',
        title: '100% protivklizna rešetka',
        text: 'Rešetkasta površina propušta sve tečnosti direktno ispod poda, pa gazna površina ostaje suva i bezbedna.',
      },
      {
        tag: 'Održavanje',
        title: 'Otporan na hemikalije, lako pranje',
        text: 'Otporan na motorna ulja i baze, a čišćenje je moguće pranjem pod pritiskom.',
      },
    ],
    infoBoxes: [
      { label: 'Konstrukcija', text: konstrukcija },
      { label: 'Postavljanje', text: postavljanje },
    ],
    facts: [
      { value: 'Teška vozila', label: 'ekstremna nosivost' },
      { value: '100%', label: 'protivklizno' },
      { value: 'Hemikalije', label: 'otporan na ulja i baze' },
      { value: 'Pranje', label: 'pod pritiskom' },
    ],
    detail: {
      image: '/images/podovi/heavy-duty-monoblok-industrijska-resetka-1.webp',
      alt: 'Detalj Heavy-Duty monoblok industrijske rešetke',
      text: 'Rešetkasta struktura za prostore sa tečnostima i velikim opterećenjem: radionice, servisi, perionice i magacini.',
    },
    application: null,
    variants: [
      { image: '/images/podovi/heavy-duty-monoblok-industrijska-resetka-1.webp', alt: 'Heavy-Duty čelična rešetka', label: 'Čelična rešetka' },
      { image: '/images/podovi/heavy-duty-monoblok-industrijska-resetka-2.webp', alt: 'Heavy-Duty žuta rešetka', label: 'Žuta završna obrada' },
      { image: '/images/podovi/heavy-duty-monoblok-industrijska-resetka-3.webp', alt: 'Heavy-Duty svetla rešetka', label: 'Svetla rešetka' },
    ],
  },
];
