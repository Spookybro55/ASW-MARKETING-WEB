import type { TemplateProps } from "@/templates/core/types";
import Contact from "./components/contact";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import HowItWorks from "./components/how-it-works";
import LocalArea from "./components/local-area";
import Reviews from "./components/reviews";
import Services from "./components/services";
import TrustStrip from "./components/trust-strip";
import styles from "./styles.module.css";

export default function CommunityExpert({ brief }: TemplateProps) {
  return (
    <div className={styles.root} lang="cs">
      <Header brief={brief} />
      <main>
        <Hero brief={brief} />
        <TrustStrip />
        <Services />
        <HowItWorks />
        <LocalArea brief={brief} />
        <Reviews />
        <Faq />
        <Contact brief={brief} />
      </main>
      <Footer brief={brief} />
    </div>
  );
}
