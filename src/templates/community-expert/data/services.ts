export type ServiceIcon =
  | "wrench"
  | "bolt"
  | "drop"
  | "brush"
  | "hammer"
  | "gear";

export interface ServiceItem {
  title: string;
  desc: string;
  icon: ServiceIcon;
}

export const COMMUNITY_SERVICES: readonly ServiceItem[] = [
  { title: "Opravy a údržba", desc: "Drobné i větší opravy v domácnostech a bytech.", icon: "wrench" },
  { title: "Elektroinstalace", desc: "Revize, opravy a instalace elektrických zařízení.", icon: "bolt" },
  { title: "Vodoinstalace", desc: "Instalatérské práce, opravy a preventivní kontroly.", icon: "drop" },
  { title: "Malířské práce", desc: "Malování interiérů a exteriérů, tapetování.", icon: "brush" },
  { title: "Truhlářské práce", desc: "Montáž nábytku, opravy a úpravy dřevěných prvků.", icon: "hammer" },
  { title: "Montážní práce", desc: "Montáž spotřebičů, sanitárního vybavení a dalších prvků.", icon: "gear" },
];
