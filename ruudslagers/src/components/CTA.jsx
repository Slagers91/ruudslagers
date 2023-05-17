import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    id="cta"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2}`}>Stuur me een berichtje!</h2>
      <p className={`${styles.paragraph} max-w-[840px] mt-5`}>
        Hoe zit het? Klaar voor de volgende stap? Of je nu een project wilt
        bespreken of gewoon gedag wilt zeggen, ik sta altijd open voor een
        interessant gesprek. Dus waar wacht je nog op? Neem contact met me op en
        laten we iets geweldigs maken!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          const subject = encodeURIComponent("Ik kom graag in contact Ruud!");
          window.location.href = `mailto:ruudslagers@gmail.com?subject=${subject}`;
        }}
        className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] mt-4 text-primary outline-none rounded-[10px] ${styles}`}
      >
        Stuur een berichtje
      </button>
    </div>
  </section>
);

export default CTA;
