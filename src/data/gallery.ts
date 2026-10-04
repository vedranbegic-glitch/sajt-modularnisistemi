export interface GalleryItem {
  id: string;
  title: string;
  category: 'inox' | 'rasveta' | 'podni-sistemi' | 'projekti';
  categoryLabel: string;
  image: string;
  description: string;
  aspect: 'landscape' | 'portrait' | 'square';
}

export interface GalleryFilter {
  id: 'all' | 'inox' | 'rasveta' | 'podni-sistemi' | 'projekti';
  label: string;
}

export const GALLERY_FILTERS: GalleryFilter[] = [
  { id: 'all', label: 'SVE' },
  { id: 'inox', label: 'INOX' },
  { id: 'rasveta', label: 'RASVETA' },
  { id: 'podni-sistemi', label: 'PODNI SISTEMI' },
  { id: 'projekti', label: 'PROJEKTI' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'inox-01',
    title: 'Inox linijsko odvodnjavanje uz rub bazena',
    category: 'inox',
    categoryLabel: 'Inox sistemi odvodnjavanja',
    image: '/images/inox/inox-bazen-detalj.jpg',
    description: 'Diskretna integracija u kamenu oblogu uz kontrolisano površinsko odvođenje vode.',
    aspect: 'landscape',
  },
  {
    id: 'inox-02',
    title: 'Radijalna inox kanalica prilagođena konturi',
    category: 'inox',
    categoryLabel: 'Inox sistemi odvodnjavanja',
    image: '/images/inox/inox-radijalna-kanalica.jpg',
    description: 'Precizno praćenje zakrivljene geometrije konstruktivnih elemenata bez loma pravca.',
    aspect: 'portrait',
  },
  {
    id: 'inox-03',
    title: 'Inox prorezna kanalica sa uskim otvorom',
    category: 'inox',
    categoryLabel: 'Inox sistemi odvodnjavanja',
    image: '/images/inox/inox-prorezna-kanalica.jpg',
    description: 'Arhitektonski slot profil sa minimalnom vidnom širinom na podnoj ravni.',
    aspect: 'square',
  },
  {
    id: 'inox-04',
    title: 'Pravolinijska inox rešetka sa profilnim prorezima',
    category: 'inox',
    categoryLabel: 'Inox sistemi odvodnjavanja',
    image: '/images/inox/inox-resetka-profil.jpg',
    description: 'Kontinualna drenažna rešetka visoke nosivosti sa ujednačenim razmakom lamela.',
    aspect: 'landscape',
  },
  {
    id: 'rasveta-01',
    title: 'Stubna arhitektonska rasveta za platoe',
    category: 'rasveta',
    categoryLabel: 'Moderna rasveta',
    image: '/images/rasveta/rasveta-plato.jpg',
    description: 'Minimalistička čelična rasvetna tela raspoređena duž otvorenog partera.',
    aspect: 'square',
  },
  {
    id: 'rasveta-02',
    title: 'Linijska rasveta duž pešačke komunikacije',
    category: 'rasveta',
    categoryLabel: 'Moderna rasveta',
    image: '/images/rasveta/rasveta-pesacka-staza.jpg',
    description: 'Usklađena visina i fotometrijski raspored za jednolično osvetljavanje staze.',
    aspect: 'landscape',
  },
  {
    id: 'rasveta-03',
    title: 'Svetlosna tela za parking površine',
    category: 'rasveta',
    categoryLabel: 'Moderna rasveta',
    image: '/images/rasveta/rasveta-parking.jpg',
    description: 'Izdržljiva konstrukcija kućišta projektovana za spoljne uslove eksploatacije.',
    aspect: 'portrait',
  },
  {
    id: 'pod-01',
    title: 'Modularni pod visokog opterećenja u radnom prostoru',
    category: 'podni-sistemi',
    categoryLabel: 'Modularni podni sistemi',
    image: '/images/podni-sistemi/pod-servis.jpg',
    description: 'Modularna struktura sa perforacijom za drenažu i odvod tečnosti sa gazne ravni.',
    aspect: 'portrait',
  },
  {
    id: 'pod-02',
    title: 'Spoljašnja modularna podna površina',
    category: 'podni-sistemi',
    categoryLabel: 'Modularni podni sistemi',
    image: '/images/podni-sistemi/pod-terasa.jpg',
    description: 'Brzomontažni sistem položen na terasi radi zaštite podloge i boljeg oticanja vode.',
    aspect: 'landscape',
  },
  {
    id: 'projekat-01',
    title: 'Integracija drenaže i partera na javnom platou',
    category: 'projekti',
    categoryLabel: 'Projekti',
    image: '/images/projekti/projekat-javni-plato.jpg',
    description: 'Koordinisana postavka drenažnih inox linija uklopljenih u rastr parternog popločavanja.',
    aspect: 'landscape',
  },
  {
    id: 'projekat-02',
    title: 'Kombinovano rešenje drenažnog kanala i rasvetnog akcenta',
    category: 'projekti',
    categoryLabel: 'Projekti',
    image: '/images/projekti/projekat-kombinovano.jpg',
    description: 'Tehnička koordinacija drenažnih kanala i prateće rasvete duž spoljne komunikacije.',
    aspect: 'square',
  },
];