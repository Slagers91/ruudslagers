import styles from "./style";
import {
  CustomCursor,
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Contact,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components";
import { motion } from "framer-motion";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <CustomCursor />
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <Business />
        <Billing />
        <CardDeal />
        {/* <Testimonials /> */}
        {/* <Clients /> */}
        <CTA />
        <Contact />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
