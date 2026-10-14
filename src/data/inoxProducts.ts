// Zajednički podaci za 5 inox proizvoda.
// Koristi ih glavna stranica (kartice) i šablon stranica "Više o proizvodu".
// Sve tekstove kasnije razrađuješ ovde, na jednom mestu — izmena se odmah vidi na svim stranicama.

export interface InoxFeature {
  tag: string; // npr. "Geometrija"
  title: string;
  text: string;
}

export interface InoxProduct {
  slug: string;
  number: string;
  name: string; // naziv za kartice
  short: string; // kratka oznaka iznad naziva
  image: string; // glavna fotografija proizvoda (bela pozadina)
  alt: string;
  metaTitle: string; // BaseLayout sam dodaje " · Modularni Sistemi"
  metaDescription: string;
  h1: [string, string]; // [obični deo, narandžasti deo]
  lead: string;
  usage: string; // "Karakteristična primena modela"
  specIntro: string[];
  features: InoxFeature[]; // tačno 3
  material: string;
  joining: string;
  detail: { image: string; alt: string; text: string };
  application: { image: string; alt: string; title: string; meta: string } | null;
}

export const PHONE_DISPLAY = '+381 66 241 386';
export const PHONE_HREF = 'tel:+381662413386';
export const PROJECT_URL = '/posaljite-projekat/';

// Činjenice koje važe za ceo program (iste kao na glavnoj stranici)
export const commonFacts = [
  { value: '2.0 mm', label: 'inox lim' },
  { value: '0.5–1%', label: 'integrisani pad' },
  { value: 'AISI 304 / 316', label: 'nerđajući čelik' },
  { value: 'Podesive stope', label: 'precizno nivelisanje' },
];

const commonMaterial =
  'Nerđajući čelik AISI 304 ili AISI 316, debljina lima prema klasi opterećenja, pasivizirani varovi, elektrohemijski polirane ili četkane vidne ivice.';
const commonJoining =
  'Prirubnički spoj sa EPDM zaptivkama i vijcima. Ugrađene nožice sa finim navojnim podešavanjem visine pre betoniranja.';

export const inoxProducts: InoxProduct[] = [
  {
    slug: 'ravni-modularni-inox-kanal',
    number: '01',
    name: 'Ravna kanalica',
    short: 'Čista linija',
    image: '/images/inox/ravni-modularni-inox-kanal-odvodnjavanje-drenaza.webp',
    alt: 'Ravni modularni inox kanal za odvodnjavanje',
    metaTitle: 'Ravna inox kanalica za odvodnjavanje po meri',
    metaDescription:
      'Ravni modularni inox kanal čiste linije, izrađen u dužinama prema projektu, sa integrisanim padom i nivelirajućim stopama.',
    h1: ['Ravna', 'inox kanalica'],
    lead: 'Ravni modularni inox kanal čiste linije, izrađen u dužinama prema projektu, sa integrisanim padom i nivelirajućim stopama.',
    usage: 'Terase, pešačke staze, ulazi u objekte, parkinzi i javni trgovi.',
    specIntro: [
      'Element se projektuje prema geometriji objekta. Svaki segment poseduje integrisani nagib koji omogućava nesmetano gravitaciono oticanje vode bez stvaranja taloga u telu kanala.',
      'Izrada se prilagođava zadatoj debljini podne obloge (keramika, kamen, liveni pod) sa opcijom integrisanih hidroizolacionih prirubnica za siguran spoj sa folijom ili premazom.',
    ],
    features: [
      {
        tag: 'Geometrija',
        title: 'Potpuno prilagođavanje trase',
        text: 'Mogućnost izrade pravih segmenata proizvoljnih dužina, uglova pod specifičnim stepenom i radijalnih segmenata sa zadatim poluprečnikom.',
      },
      {
        tag: 'Protok',
        title: 'Optimizovan hidraulički profil',
        text: 'Proračun unutrašnjeg pada i prečnika izlivnih grla prema očekivanom prilivu vode i priključku na kanalizacionu mrežu.',
      },
      {
        tag: 'Održavanje',
        title: 'Jednostavan pristup reviziji',
        text: 'Lako skidanje rešetki i pristup sifonskim korpicama za sakupljanje nečistoća bez upotrebe specijalnih alata.',
      },
    ],
    material: commonMaterial,
    joining: commonJoining,
    detail: {
      image: '/images/inox/ravni-modularni-inox-kanal-odvodnjavanje-drenaza-siva.webp',
      alt: 'Detalj ravnog modularnog inox kanala',
      text: 'Ravni inox kanal prikazuje osnovu sistema: precizna izrada, saten-brušena završna obrada, nivelisanje i detalji koji omogućavaju pouzdanu ugradnju.',
    },
    application: null,
  },
  {
    slug: 'lucni-inox-kanal',
    number: '02',
    name: 'Lučna kanalica',
    short: 'Kontinualni radijus',
    image: '/images/inox/lucni-inox-kanal-linijsko-odvodnjavanje.webp',
    alt: 'Lučni inox kanal za linijsko odvodnjavanje',
    metaTitle: 'Lučna inox kanalica za odvodnjavanje po meri',
    metaDescription:
      'Lučni modularni inox kanal prilagođen blagim i izraženim radijusima — za kružne staze, bazenske ivice i zakrivljene partere.',
    h1: ['Lučna', 'inox kanalica'],
    lead: 'Lučni modularni inox kanal prilagođen blagim i izraženim radijusima, za praćenje kružnih staza, bazenskih ivica i zakrivljenih partera.',
    usage: 'Zakrivljeni parteri, bazenske ivice, kružne staze i terase sa blagom krivinom.',
    specIntro: [
      'Luk se izrađuje prema zadatom poluprečniku i uglu, tako da kanal prati stvarnu liniju površine, a ne obrnuto. Svaki segment ima integrisani pad i spaja se u jednu neprekinutu liniju.',
      'Izrada se prilagođava zadatoj debljini podne obloge (keramika, kamen, liveni pod) sa opcijom integrisanih hidroizolacionih prirubnica za siguran spoj sa folijom ili premazom.',
    ],
    features: [
      {
        tag: 'Geometrija',
        title: 'Radijus prema projektu',
        text: 'Lučni segmenti sa zadatim poluprečnikom i uglom, od blagih krivina do izraženih radijusa, uz mogućnost kombinovanja sa pravim segmentima.',
      },
      {
        tag: 'Protok',
        title: 'Kontinualan pad duž luka',
        text: 'Pad se proračunava duž cele putanje kanala, kako bi voda ravnomerno oticala ka odvodu bez zadržavanja u krivini.',
      },
      {
        tag: 'Održavanje',
        title: 'Jednostavan pristup reviziji',
        text: 'Lako skidanje rešetki i pristup sifonskim korpicama za sakupljanje nečistoća bez upotrebe specijalnih alata.',
      },
    ],
    material: commonMaterial,
    joining: commonJoining,
    detail: {
      image: '/images/inox/pejzazni-lucni-inox-kanal-perforirana-resetka-parter.webp',
      alt: 'Lučni inox kanal sa perforiranom rešetkom na parteru',
      text: 'Lučni kanal prati liniju partera: precizna izrada radijusa, saten-brušena završna obrada i diskretna rešetka koja se uklapa u površinu.',
    },
    application: {
      image: '/images/inox/lucni-skriveni-inox-kanal-zalazak-sunca.webp',
      alt: 'Lučni skriveni inox kanal na parteru u zalasku sunca',
      title: 'Lučni parter',
      meta: 'Lučna geometrija',
    },
  },
  {
    slug: 'kruzni-inox-kanal',
    number: '03',
    name: 'Kružna kanalica',
    short: 'Zatvorena geometrija',
    image: '/images/inox/kruzni-prohromski-kanal-za-odvodnjavanje.webp',
    alt: 'Kružni inox kanal za odvodnjavanje',
    metaTitle: 'Kružna inox kanalica za odvodnjavanje po meri',
    metaDescription:
      'Zatvoreni kružni modularni inox kanal za fontane, rotundaste platoe i postolja žardinjera, izrađen prema projektu.',
    h1: ['Kružna', 'inox kanalica'],
    lead: 'Zatvoreni kružni drenažni element za fontane, rotundaste platoe i postolja žardinjera, izrađen prema zadatom prečniku.',
    usage: 'Fontane, rotundaste platoe, postolja žardinjera i kružni trgovi.',
    specIntro: [
      'Kružni kanal je zatvorena geometrija: izrađuje se u modularnim segmentima koji se na objektu spajaju u pun krug zadatog prečnika, sa integrisanim padom ka odvodu.',
      'Izrada se prilagođava zadatoj debljini podne obloge (keramika, kamen, liveni pod) sa opcijom integrisanih hidroizolacionih prirubnica za siguran spoj sa folijom ili premazom.',
    ],
    features: [
      {
        tag: 'Geometrija',
        title: 'Prečnik prema projektu',
        text: 'Pun krug ili segment kruga zadatog prečnika, sastavljen od modularnih elemenata prilagođenih transportu i montaži na objektu.',
      },
      {
        tag: 'Protok',
        title: 'Pad ka odvodnoj tački',
        text: 'Pozicija izlivnih grla i pad duž kruga proračunavaju se prema očekivanom prilivu vode i priključku na kanalizacionu mrežu.',
      },
      {
        tag: 'Održavanje',
        title: 'Jednostavan pristup reviziji',
        text: 'Lako skidanje rešetki i pristup sifonskim korpicama za sakupljanje nečistoća bez upotrebe specijalnih alata.',
      },
    ],
    material: commonMaterial,
    joining: commonJoining,
    detail: {
      image: '/images/inox/kruzni-prohromski-kanal-za-odvodnjavanje.webp',
      alt: 'Detalj kružnog inox kanala',
      text: 'Kružni kanal pokazuje preciznost izrade zatvorene geometrije: ravnomeran radijus, saten-brušena završna obrada i nivelirajuće stope.',
    },
    application: {
      image: '/images/inox/kruzni-skriveni-inox-kanal-oko-zardinjere.webp',
      alt: 'Kružni skriveni inox kanal oko žardinjere',
      title: 'Kružna žardinjera',
      meta: 'Kružna geometrija',
    },
  },
  {
    slug: 'elipsasti-inox-kanal',
    number: '04',
    name: 'Elipsasta kanalica',
    short: 'Fluidna forma',
    image: '/images/inox/elipsasti-inox-kanal-za-odvodnjavanje.webp',
    alt: 'Elipsasti inox kanal za odvodnjavanje',
    metaTitle: 'Elipsasta inox kanalica za odvodnjavanje po meri',
    metaDescription:
      'Elipsasti modularni inox kanal promenljivog radijusa za organske i eliptične oblike modernih atrijuma i javnih prostora.',
    h1: ['Elipsasta', 'inox kanalica'],
    lead: 'Konfiguracija promenljivog radijusa za organske i eliptične oblike modernih atrijuma, projektovana prema geometriji prostora.',
    usage: 'Atrijumi, poslovni objekti, javni prostori i uređeni eksterijeri.',
    specIntro: [
      'Elipsa ima promenljiv radijus, pa se svaki segment izrađuje prema tačnoj geometriji iz projekta. Sistem prati arhitektonsku liniju prostora, a ne obrnuto.',
      'Izrada se prilagođava zadatoj debljini podne obloge (keramika, kamen, liveni pod) sa opcijom integrisanih hidroizolacionih prirubnica za siguran spoj sa folijom ili premazom.',
    ],
    features: [
      {
        tag: 'Geometrija',
        title: 'Elipsa po vašim osama',
        text: 'Elipsa ili deo elipse zadatih osa, razložena na modularne segmente promenljivog radijusa koji se spajaju u neprekinutu liniju.',
      },
      {
        tag: 'Protok',
        title: 'Optimizovan hidraulički profil',
        text: 'Proračun unutrašnjeg pada i prečnika izlivnih grla prema očekivanom prilivu vode i priključku na kanalizacionu mrežu.',
      },
      {
        tag: 'Održavanje',
        title: 'Jednostavan pristup reviziji',
        text: 'Lako skidanje rešetki i pristup sifonskim korpicama za sakupljanje nečistoća bez upotrebe specijalnih alata.',
      },
    ],
    material: commonMaterial,
    joining: commonJoining,
    detail: {
      image: '/images/inox/elipsasti-inox-kanal-za-odvodnjavanje-siva.webp',
      alt: 'Elipsasti inox kanal prema geometriji prostora',
      text: 'Elipsasta forma pokazuje ono što standardne kanalice ne mogu: sistem prati arhitektonsku liniju prostora, a ne obrnuto.',
    },
    application: {
      image: '/images/inox/elipsasti-skriveni-inox-kanal-poslovni-centar.webp',
      alt: 'Elipsasti skriveni inox kanal ispred poslovnog objekta',
      title: 'Savremeni objekat',
      meta: 'Elipsasta geometrija',
    },
  },
  {
    slug: 's-forma-kanalica',
    number: '05',
    name: 'S-forma kanalica',
    short: 'Slobodna geometrija',
    image: '/images/inox/s-forma-lucni-inox-kanal-odvodnjavanje.webp',
    alt: 'S-forma inox kanalica za odvodnjavanje',
    metaTitle: 'S-forma inox kanalica za odvodnjavanje po meri',
    metaDescription:
      'Kompleksne drenažne S-linije koje povezuju različite krivine u jednu neprekinutu celinu — izrada prema geometriji prostora.',
    h1: ['S-forma', 'inox kanalica'],
    lead: 'Kompleksne drenažne S-linije koje povezuju različite krivine u jednu neprekinutu celinu, izrađene prema stvarnoj geometriji prostora.',
    usage: 'Bazeni i suve plaže, organske staze, terase slobodnih oblika i javni prostori.',
    specIntro: [
      'S-forma spaja krivine suprotnih smerova u jednu liniju. Svaki segment se izrađuje prema nacrtu, sa integrisanim padom koji prati celu putanju kanala.',
      'Izrada se prilagođava zadatoj debljini podne obloge (keramika, kamen, liveni pod) sa opcijom integrisanih hidroizolacionih prirubnica za siguran spoj sa folijom ili premazom.',
    ],
    features: [
      {
        tag: 'Geometrija',
        title: 'Slobodna linija prema nacrtu',
        text: 'Kombinacija lučnih i pravih segmenata različitih radijusa, razrađena prema DWG-u ili skici prostora.',
      },
      {
        tag: 'Protok',
        title: 'Kontinualan pad duž linije',
        text: 'Pad i pozicija izlivnih grla proračunavaju se duž cele S-linije prema očekivanom prilivu vode i priključku na kanalizaciju.',
      },
      {
        tag: 'Održavanje',
        title: 'Jednostavan pristup reviziji',
        text: 'Lako skidanje rešetki i pristup sifonskim korpicama za sakupljanje nečistoća bez upotrebe specijalnih alata.',
      },
    ],
    material: commonMaterial,
    joining: commonJoining,
    detail: {
      image: '/images/inox/s-forma-lucni-inox-kanal-odvodnjavanje-siva.webp',
      alt: 'Detalj S-forma inox kanalice',
      text: 'S-forma pokazuje slobodu geometrije: precizno spojene krivine suprotnih smerova u jednoj neprekinutoj liniji.',
    },
    application: {
      image: '/images/inox/skriveni-modularni-inox-kanal-s-forma-bazen-suva-plaza.webp',
      alt: 'S-forma skriveni inox kanal uz bazen i suvu plažu',
      title: 'Bazen i suva plaža',
      meta: 'S-forma / bazen',
    },
  },
];
