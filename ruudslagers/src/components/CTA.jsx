import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
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
      <Button />
    </div>
  </section>
);

export default CTA;
