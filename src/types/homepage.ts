export type HeroData = {
  badge: string;
  title: string;
  text: string;
  primaryButton: string;
  secondaryButton: string;
};

export type FeatureItem = {
  title: string;
  text: string;
};

export type ProcessItem = {
  eyebrow: string;
  title: string;
  text: string;
};

export type SectionWithItemsData = {
  title: string;
  text: string;
  items: FeatureItem[];
};

export type ProcessSectionData = {
  title: string;
  text: string;
  items: ProcessItem[];
};

export type ContactCtaData = {
  title: string;
  text: string;
  primaryButton: string;
  secondaryButton: string;
};

export type HomepageData = {
  hero: HeroData;
  audience: SectionWithItemsData;
  whyUs: SectionWithItemsData;
  valueItems: FeatureItem[];
  services: SectionWithItemsData;
  proof: SectionWithItemsData & { highlights: string[] };
  pricing: SectionWithItemsData;
  process: ProcessSectionData;
  contactCta: ContactCtaData;
  contactInfo: ContactInfoData;
};

export type ContactPerson = {
  name: string;
  phone: string;
  email: string;
};

export type ContactInfoData = {
  people: ContactPerson[];
};