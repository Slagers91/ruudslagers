import { features } from "../constants";
import styles, { layout } from '../style';
import Button from './Button';

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden"/> we'll handle the money.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      <Button styles="mt-10" />
    </div>
  </section>
)

export default Business