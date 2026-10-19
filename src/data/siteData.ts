export interface ContactInfo {
  generalEmail: string;
  projectEmail: string;
  phone: string;
  phoneFormatted: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface EngineeringStep {
  number: string;
  title: string;
  description: string;
}

export interface SeoTopicGroup {
  category: string;
  keywords: string[];
}

export const SITE = {
  name: 'MODULARNI SISTEMI',
  tagline: 'JEDAN SISTEM. BEZBROJ MOGUĆNOSTI.',
  url: 'https://modularnisistemi.com',
  domain: 'modularnisistemi.com',
  description: 'Inox sistemi odvodnjavanja, modularne čelične podkonstrukcije i Fire Pit Grill. Projektovanje i 3D modelovanje prema konkretnom zadatku.',
  philosophy: 'Ne prodajemo samo proizvod. Projektujemo rešenje prema prostoru.',
  heroEyebrow: 'MODULARNI SISTEMI · OBLIK. FUNKCIJA. KONSTRUKCIJA.',
  heroH1: 'Jedan sistem. Bezbroj mogućnosti.',
  heroSubtitle: 'Inox sistemi odvodnjavanja, modularne čelične podkonstrukcije i Fire Pit Grill. Projektovanje i 3D modelovanje prema konkretnom zadatku.',
  primaryCtaText: 'POGLEDAJTE PROIZVODE',
  secondaryCtaText: 'POŠALJITE UPIT',
};

export const CONTACT: ContactInfo = {
  generalEmail: 'kontakt@modularnisistemi.com',
  projectEmail: 'kontakt@modularnisistemi.com',
  phone: '+381 66 241 386',
  phoneFormatted: '+38166241386',
};

export const NAVIGATION: NavItem[] = [
  { label: 'Proizvodi', href: '/proizvodi/' },
  { label: 'Inox odvodnjavanje', href: '/inox-sistemi-odvodnjavanja/' },
  { label: 'Modularne čelične podkonstrukcije', href: '/modularne-celicne-podkonstrukcije/' },
  { label: 'Fire Pit Grill', href: '/fire-pit-grill/' },
  { label: 'Projektovanje i 3D modelovanje', href: '/projektovanje-i-3d-modelovanje/' },
  { label: 'Galerija', href: '/galerija/' },
  { label: 'O nama', href: '/o-nama/' },
  { label: 'Partneri', href: '/partneri/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

export const ENGINEERING_STEPS: EngineeringStep[] = [
  {
    number: '01',
    title: 'Analiza geometrije i podloga',
    description: 'Analiza namene, raspoloživih crteža, geometrije i tehničkih zahteva konkretnog zadatka.',
  },
  {
    number: '02',
    title: 'Projektovanje i 3D modelovanje',
    description: 'Razrada 3D modela, konstrukcije, spojeva i mehanizama prema usaglašenim zahtevima.',
  },
  {
    number: '03',
    title: 'Tehnička razrada i priprema',
    description: 'Priprema modela i tehničkih detalja potrebnih za proveru rešenja i dalju realizaciju.',
  },
  {
    number: '04',
    title: 'Izrada i realizacija',
    description: 'Izrada proizvoda iz naših programa prema usaglašenoj konstrukciji i zahtevima primene.',
  },
];

export const SEO_TOPICS: SeoTopicGroup[] = [
  {
    category: 'Brand',
    keywords: ['modularni sistemi', 'modularni sistemi Srbija'],
  },
  {
    category: 'Inox odvodnjavanje',
    keywords: [
      'inox kanalice',
      'inox linijske kanalice',
      'linijske kanalice',
      'inox odvodnjavanje',
      'inox kanalice za bazen',
      'linijska drenaža',
      'inox kanalice po meri',
    ],
  },
  {
    category: 'Modularne čelične podkonstrukcije',
    keywords: [
      'modularne čelične podkonstrukcije',
      'čelične podkonstrukcije',
      'modularna čelična konstrukcija',
      'čelična podkonstrukcija za terasu',
      'čelični podesti i platforme',
    ],
  },
  {
    category: 'Fire Pit Grill',
    keywords: [
      'Fire Pit Grill',
      'čelično ložište',
      'spoljašnje ložište i roštilj',
    ],
  },
  {
    category: 'Projektovanje i 3D modelovanje',
    keywords: [
      'projektovanje i 3D modelovanje',
      '3D modelovanje proizvoda',
      'projektovanje konstrukcija',
      'konstrukcija i mehanizmi',
    ],
  },
];
