import { card, fidh } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Werk vinden was <br className="sm:block hidden" />
        nog nooit zo leuk!
      </h2>
      <p className={`${styles.paragraph} max-w[470px] mt-5`}>
        Ben je werkzaam in de horeca en op zoek naar een nieuwe uitdaging? Of
        zoek je als werkgever juist nieuw talent voor je bedrijf? Voor WETALENT
        heb ik een platform ontwikkeld waar werkzoekenden en werkgevers op een
        visueel aantrekkelijke manier vacatures kunnen plaatsen en vinden. Dit
        platform is op maat gemaakt en ontwikkeld met behulp van PHP,
        Javascript, Bootstrap en WordPress.
      </p>

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.open(
            "https://functiesindehoreca.nl",
            "_blank",
            "noopener noreferrer"
          );
        }}
        className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] mt-4 text-primary outline-none rounded-[10px] ${styles}`}
      >
        Bekijk het resultaat
      </button>
    </div>

    <div className={layout.sectionImg}>
      <img
        src={fidh}
        alt="Functies in de Horeca"
        className="w-[100%] h-[100%]"
      />
    </div>
  </section>
);

export default CardDeal;
