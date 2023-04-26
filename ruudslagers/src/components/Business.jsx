import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Webontwikkeling:
        <br className="sm:block hidden" /> leer meer over mijn vaardigheden
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Ik ben een creatieve probleemoplosser met een passie voor het
        ontwikkelen van innovatieve en gebruiksvriendelijke websites. Als
        full-stack developer beheers ik meerdere programmeertalen en kan ik
        complexe projecten aan. Ik ben altijd op zoek naar nieuwe uitdagingen en
        mijn leergierigheid zorgt ervoor dat ik constant op de hoogte blijf van
        de nieuwste ontwikkelingen in de branche. Benieuwd naar mijn verhaal?
        Klik dan hieronder en leer mij beter kennen!
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
