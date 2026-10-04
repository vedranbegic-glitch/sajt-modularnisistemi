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
  description: 'Modularna rešenja za odvodnjavanje, rasvetu i podne sisteme — projektovana za savremenu arhitekturu i konkretan prostor.',
  philosophy: 'Ne prodajemo samo proizvod. Projektujemo rešenje prema prostoru.',
  heroEyebrow: 'MODULARNI SISTEMI · REŠENJA ZA SAVREMENU ARHITEKTURU',
  heroH1: 'Jedan sistem. Bezbroj mogućnosti.',
  heroSubtitle: 'Modularna rešenja za odvodnjavanje, rasvetu i podne sisteme — projektovana za savremenu arhitekturu i konkretan prostor.',
  primaryCtaText: 'POGLEDAJTE PROIZVODE',
  secondaryCtaText: 'POŠALJITE NAM PROJEKAT',
};

export const CONTACT: ContactInfo = {
  generalEmail: 'kontakt@modularnisistemi.com',
  projectEmail: 'projekti@modularnisistemi.com',
  phone: '+381 66 241 386',
  phoneFormatted: '+38166241386',
};

export const NAVIGATION: NavItem[] = [
  { label: 'Proizvodi', href: '/proizvodi/' },
  { label: 'Inox odvodnjavanje', href: '/inox-sistemi-odvodnjavanja/' },
  { label: 'Moderna rasveta', href: '/moderna-rasveta/' },
  { label: 'Podni sistemi', href: '/modularni-podni-sistemi/' },
  { label: 'Galerija', href: '/galerija/' },
  { label: 'O nama', href: '/o-nama/' },
  { label: 'Partneri', href: '/partneri/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

export const ENGINEERING_STEPS: EngineeringStep[] = [
  {
    number: '01',
    title: 'Analiza geometrije i podloga',
    description: 'Proučavanje arhitektonske situacije, podloga u PDF/DWG formatu, zadatih visinskih kota, padova i prostornih ograničenja.',
  },
  {
    number: '02',
    title: 'Inženjerska konfiguracija sistema',
    description: 'Definisanje geometrije elemenata — pravolinijski potezi, tačni radijusi, raspored revizija, odvodnih tačaka i svetlosnih pozicija.',
  },
  {
    number: '03',
    title: 'Precizna izrada i prefabrikacija',
    description: 'Izrada elemenata prema usaglašenom rešenju, sa pripremljenim spojevima i kontrolom mera pre isporuke na lokaciju.',
  },
  {
    number: '04',
    title: 'Tehnička koordinacija ugradnje',
    description: 'Jasno obeležavanje segmenata uz prateća uputstva za montažne timove kako bi se eliminisale improvizacije na objektu.',
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
    category: 'Moderna rasveta',
    keywords: [
      'moderna rasveta',
      'arhitektonska rasveta',
      'urbana rasveta',
      'LED urbana rasveta',
      'rasveta za parking',
      'rasveta za javne površine',
    ],
  },
  {
    category: 'Modularni podni sistemi',
    keywords: [
      'modularni pod',
      'modularni podni sistemi',
      'modularne podne ploče',
      'podni sistemi',
      'pod za terase',
    ],
  },
];