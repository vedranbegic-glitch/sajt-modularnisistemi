export interface ProductSubtype {
  id: string;
  name: string;
  summary: string;
  image: string;
  application: string;
}

export const INOX_PAGE_DATA = {
  hero: {
    eyebrow: 'MODULARNI SISTEMI · PREMIUM INOX LINIJSKA DRENAŽA',
    title: 'Odvodnjavanje koje prati oblik prostora bez geometrijskog ograničenja.',
    description:
      'Modularni inox sistemi sa integrisanim fabričkim padom i nivelirajućim stopama. Kreirajte slobodne i zahtevne forme — ravne, lučne, kružne ili kompleksne S-linije — bez kompromisa u pogledu čvrstoće konstrukcije, protoka vode i krajnje estetike partera.',
    primaryCta: 'POGLEDAJTE SPECIFIKACIJE',
    secondaryCta: 'POŠALJITE NAM NACRT',
    image: '/images/inox/pejzazni-lucni-inox-kanal-perforirana-resetka-parter.webp',
  },
  coreCards: [
    {
      title: 'AISI 304 / 316 INOX',
      desc: 'Maksimalna otpornost na koroziju, hloride, agresivne kućne hemikalije i habanje. Namenjeno za dugovečnost u zahtevnim urbanim, rezidencijalnim i priobalnim ambijentima.',
    },
    {
      title: 'NIVELIRAJUĆE STOPE',
      desc: 'Precizni navojni sistemi sa integrisanim stopama za milimetarsko ravnanje kanala sa nivoom gotovog poda i olakšano fiksiranje pre zalivanja betonom.',
    },
    {
      title: 'ČVRSTOĆA KONSTRUKCIJE',
      desc: 'Rigidno projektovana šasija od sertifikovanog inox lima debljine 2.0 mm koja garantuje apsolutnu stabilnost i otpornost na vertikalna opterećenja i pritisak podloge.',
    },
  ],
  sectionForms: {
    eyebrow: 'NE MORA SVAKA KANALICA DA BUDE PRAVA.',
    title: 'Izaberite formu prema geometriji partera.',
    subtitle: 'Vi zadajete arhitektonske linije prostora. Mi ih pretvaramo u funkcionalan, trajan i stoprocentno precizan sistem za odvodnjavanje.',
  },
  forms: [
    {
      number: '01',
      id: 'lucni-inox-kanal',
      name: 'LUČNI INOX KANAL',
      summary: 'Kanalica prilagođena blagim i izraženim radijusima za praćenje kružnih staza i bazenskih ivica.',
      image: '/images/inox/lucni-inox-kanal-linijsko-odvodnjavanje.webp',
      application: 'Lučni skriveni kanal / zalazak sunca i parterna popločavanja.',
    },
    {
      number: '02',
      id: 'kruzni-prohromski-kanal',
      name: 'KRUŽNI PROHROMSKI KANAL',
      summary: 'Zatvoreni kružni drenažni elementi za fontane, rotundaste platoe i postolja žardinjera.',
      image: '/images/inox/kruzni-prohromski-kanal-za-odvodnjavanje.webp',
      application: 'Kružni skriveni kanal oko žardinjere i centralnih parternih tačaka.',
    },
    {
      number: '03',
      id: 'elipsasti-inox-kanal',
      name: 'ELIPSASTI INOX KANAL',
      summary: 'Konfiguracija promenljivog radijusa za organske i eliptične oblike modernih atrijuma.',
      image: '/images/inox/elipsasti-inox-kanal-za-odvodnjavanje.webp',
      application: 'Elipsasti skriveni inox kanal / poslovni centri i atrijumi.',
    },
    {
      number: '04',
      id: 's-forma-kanalica',
      name: 'S-FORMA KANALICA',
      summary: 'Kompleksne drenažne S-linije koje povezuju različite krivine u jednu neprekinutu celinu.',
      image: '/images/inox/s-forma-lucni-inox-kanal-odvodnjavanje.webp',
      application: 'Skriveni modularni inox kanal / S-forma / bazen / suva plaža.',
    },
  ],
  technicalDetails: {
    title: 'Kvalitet u svakom detalju.',
    description: 'Naše inox kanalice izrađene su od vrhunskog nerđajućeg čelika AISI 304, debljine 2 mm, sa satin-brušenom završnom obradom.',
    image: '/images/inox/ravni-modularni-inox-kanal-odvodnjavanje-drenaza.webp',
    badgeItems: [
      'Fabrički integrisan pad 0.5% — 1%',
      'Saten-brušena završna obrada',
      'Sistemski spoj sa hidroizolacijom i flanšnom',
    ],
    highlightBox: {
      title: 'Projektovanje bez standarda. Svaka kanalica je unikat.',
      text: 'U modernoj arhitekturi serijski standardi često predstavljaju ograničenje. Naši sistemi se ne proizvode masovno na traci — svaki segment se projektuje i izrađuje zasebno, prema specifičnim zahtevima vašeg prostora. Vi zadajete parametre, mi isporučujemo inženjersku preciznost.',
    },
  },
  practiceCases: [
    {
      title: 'Skriveni modularni inox kanal',
      locationType: 'S-forma / bazen / suva plaža',
      image: '/images/inox/skriveni-modularni-inox-kanal-s-forma-bazen-suva-plaza.webp',
    },
    {
      title: 'Lučni skriveni inox kanal',
      locationType: 'Šetalište / zalazak sunca',
      image: '/images/inox/lucni-skriveni-inox-kanal-zalazak-sunca.webp',
    },
    {
      title: 'Kružni skriveni inox kanal',
      locationType: 'Oko žardinjere / kružni trg',
      image: '/images/inox/kruzni-skriveni-inox-kanal-oko-zardinjere.webp',
    },
    {
      title: 'Elipsasti skriveni inox kanal',
      locationType: 'Poslovni centar / parter',
      image: '/images/inox/elipsasti-skriveni-inox-kanal-poslovni-centar.webp',
    },
  ],
  featuredShowcase: {
    eyebrow: 'LUČNI INOX KANAL SA PERFORIRANOM REŠETKOM',
    title: 'Gradski trg.',
    description: 'Elegantno rešenje za javne površine, trgove i moderne urbane ambijente, sa maksimalnim protokom vode i diskretnim, estetskim izgledom.',
    image: '/images/inox/lucni-inox-kanal-sa-perforiranom-resetkom-gradski-trg.webp',
  },
  steps: [
    {
      number: '1',
      title: 'Dostavljanje projekta ili skice',
      desc: 'Pošaljite nam vaš DWG crtež, idejni projekat partera ili običnu skicu prostora sa dimenzijama na projekti@modularnisistemi.com.',
    },
    {
      number: '2',
      title: 'Inženjerska razrada forme',
      desc: 'Naš projektni biro analizira geometriju, vrši proračune i razrađuje modularne segmente i krivine idealno prilagođene vašem objektu.',
    },
    {
      number: '3',
      title: 'Proračun nagiba i izliva',
      desc: 'Precizno definišemo unutrašnje padove za optimalan protok fluida i pozicioniramo mesta za slivnike i vertikalne odvode prema predmeru.',
    },
    {
      number: '4',
      title: 'Laserska izrada i obrada',
      desc: 'Vrhunska mašinska proizvodnja od visoko-kvalitetnog nerđajućeg čelika debljine 2 mm u našem pogonu, uz lasersko sečenje i precizno varenje spojeva.',
    },
    {
      number: '5',
      title: 'Isporuka sistema na gradilište',
      desc: 'Gotovi modularni segmenti stižu na lokaciju kompletirani sa nivelirajućim stopama, spremni za brzo ankerisanje i bezbedno betoniranje.',
    },
  ],
  ctaBanner: {
    title: 'IMATE KRUŽNI BAZEN, LUČNU TERASU ILI SPECIFIČNU GEOMETRIJU U PROJEKTU?',
    subtitle: 'Pošaljite nam DWG crtež, skicu ili idejno rešenje partera. Naš inženjerski tim će u najkraćem roku razraditi modularne segmente koji se idealno uklapaju u linije i oblike vašeg prostora.',
    buttonText: 'ZATRAŽITE KONSULTACIJU',
  },
};

export const CATEGORIES_DATA = {
  inox: {
    id: 'inox-sistemi-odvodnjavanja',
    slug: '/inox-sistemi-odvodnjavanja/',
    title: 'INOX SISTEMI ODVODNJAVANJA',
    headline: 'Precizno odvodnjavanje koje prati geometriju prostora.',
    conceptStatements: [
      'Odvodnjavanje koje prati oblik prostora.',
      'Ne mora svaka kanalica da bude prava.',
      'Izaberite formu prema geometriji prostora.',
    ],
    description:
      'Modularni inox sistemi sa integrisanim fabričkim padom i nivelirajućim stopama za ravne, lučne, kružne i S-forme partera.',
    heroImage: '/images/inox/pejzazni-lucni-inox-kanal-perforirana-resetka-parter.webp',
    highlights: [
      'Izrada formi po tačnoj geometriji (radijusi, krivine, S-linije)',
      'Sertifikovani inox lim debljine 2.0 mm (AISI 304 / 316)',
      'Fabrički integrisan unutrašnji pad (0.5% – 1%)',
      'Nivelirajuće stope za milimetarsko ravnanje pre betoniranja',
      'Sistemski flanšni spoj sa hidroizolacijom',
    ],
    subtypes: INOX_PAGE_DATA.forms,
    applications: [
      'Bazeni i sunčališta',
      'Terase i ravni krovovi',
      'Javni platoi i pešačke zone',
      'Enterijeri i spa centri',
    ],
  },
  rasveta: {
    id: 'moderna-rasveta',
    slug: '/moderna-rasveta/',
    title: 'MODERNA RASVETA',
    headline: 'Arhitektonska rasveta koja spaja funkciju i estetiku.',
    conceptStatements: [
      'Z lampa / bandera za svaki prostor.',
      'Moderan dizajn, pouzdana konstrukcija i energetski efikasna LED rasveta.',
    ],
    description:
      'Arhitektonska Z-lampa u visinama od 3m, 4m i 5m, sa IP65 zaštitom i podesivom snagom, namenjena za dvorišta, parkinge, poslovne zone i javne površine.',
    heroImage: '/images/rasveta/moderna-rasveta-glavna.jpg',
    highlights: [
      'Dostupne visine: 3 m / 4 m / 5 m',
      'LED snaga od 30 W do 60 W sa podešavanjem',
      'Izbor temperature svetla: 3000 K / 4000 K / 6000 K',
      'Zaštita kućišta IP65 za sve vremenske uslove',
      'Konstrukcija od čelika sa pocinkovanjem i farbanjem',
    ],
    subtypes: [
      {
        id: 'z-lampa-3m',
        name: 'Z LAMPA 3 m',
        summary: 'Idealna za manje prostore i privatne dvorišne površine.',
        image: '/images/rasveta/z-lampa-3m.jpg',
        application: 'Privatna dvorišta, staze, vile i intimni prostori.',
      },
      {
        id: 'z-lampa-4m',
        name: 'Z LAMPA 4 m',
        summary: 'Najčešći izbor za parkinge, poslovne objekte i pešačke zone.',
        image: '/images/rasveta/z-lampa-4m.jpg',
        application: 'Poslovni objekti, pešačke komunikacije i parkinzi.',
      },
      {
        id: 'z-lampa-5m',
        name: 'Z LAMPA 5 m',
        summary: 'Za veće površine, javne zone i industrijske objekte.',
        image: '/images/rasveta/z-lampa-5m.jpg',
        application: 'Javne gradske površine, industrijski platoi i trgovi.',
      },
    ],
    applications: [
      'Javni platoi i trgovi',
      'Pešačke zone i parkovi',
      'Parking prostori i prilazi',
      'Dvorišta i rezidencijalne vile',
    ],
  },
  podniSistemi: {
    id: 'modularni-podni-sistemi',
    slug: '/modularni-podni-sistemi/',
    title: 'MODULARNI PODNI SISTEMI',
    headline: 'Fleksibilna podna rešenja za različite prostore i namene.',
    conceptStatements: [
      'Fleksibilna podna rešenja za različite prostore i namene.',
      'Brza montaža, drenažna svojstva i jednostavno prepakivanje prostora.',
    ],
    description:
      'Modularne podne obloge sa brzim sistemom sklapanja, namenjene za formiranje stabilnih, provetrenih i lako održivih podnih površina.',
    heroImage: '/images/podni-sistemi/podni-sistemi-glavna.jpg',
    highlights: [
      'Modularni elementi koji se sklapaju suvim postupkom',
      'Mogućnost demontaže i rekonfiguracije rasporeda',
      'Perforirana struktura pogodna za oticanje tečnosti i ventilaciju',
      'Otpornost na pritisak, hemikalije i habanje u radnom okruženju',
    ],
    subtypes: [
      {
        id: 'drenazne-podne-ploce',
        name: 'Drenažne podne ploče',
        summary: 'Otvorena rešetkasta struktura za nesmetan prolaz tečnosti i nečistoća ispod gazne ravni.',
        image: '/images/podni-sistemi/pod-servis.jpg',
        application: 'Mokri čvorovi, perionice, terase i spoljne platforme.',
      },
      {
        id: 'pun-profil-ploce',
        name: 'Modularne ploče punog profila',
        summary: 'Ravna gazna površina za prostore sa suvim režimom rada i potrebom za lakim čišćenjem.',
        image: '/images/podni-sistemi/pod-terasa.jpg',
        application: 'Magacini, izložbene zone i radionički prostori.',
      },
    ],
    applications: [
      'Auto servisi i radionice',
      'Detailing centri i perionice',
      'Terase, balkoni i krovovi',
      'Izložbeni i sajamski prostori',
    ],
  },
};

export const PRODUCT_CATEGORIES_LIST = [
  CATEGORIES_DATA.inox,
  CATEGORIES_DATA.rasveta,
  CATEGORIES_DATA.podniSistemi,
];