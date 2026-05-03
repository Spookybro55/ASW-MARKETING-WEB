import type { TemplateProps } from "@/templates/core/types";
import Contact from "./components/contact";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Locations from "./components/locations";
import MobileStickyCta from "./components/mobile-sticky-cta";
import Pricing from "./components/pricing";
import Services from "./components/services";
import TrustStrip from "./components/trust-strip";
import styles from "./styles.module.css";

export default function EmergencyProfessional({ brief }: TemplateProps) {
  return (
    <div className={styles.root} lang="cs">
      <Header brief={brief} />
      <main>
        <Hero brief={brief} />
        <TrustStrip />
        <Services brief={brief} />
        <Pricing phone={brief.phone} />
        <Locations brief={brief} />
        <Faq />
        <Contact brief={brief} />
      </main>
      <Footer brief={brief} />
      <MobileStickyCta brief={brief} />
    </div>
  );
}
