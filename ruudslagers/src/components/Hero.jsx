import styles from "../style";
import { discount, robot, ruud01 } from "../assets";
import GetStarted from "./GetStarted";
import { motion } from "framer-motion";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-column items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        {/* <img src={discount} alt="discount" className="w-[32px] h-[32px]" /> */}
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">Front-end Developer</span>
        </p>
      </div>

      <div className="flex flex-row justify-start items-center w-full">
        <h1 className="md:mr-12 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Code & <br className="sm:block hidden" />{" "}
          <span className="text-gradient">design, </span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        perfecte match.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Hallo hallo, mijn naam is Ruud Slagers. Als front-end developer bouw ik
        websites die werken als een zonnetje. En als ik niet achter mijn
        computer zit, speel ik graag een potje tafeltennis - maar dat is minder
        goed voor mijn ping!
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={ruud01}
        alt="ruudslagers01"
        className="w-[100%] h-[100%] px-4 md:px-0 relative z-[5]"
      />
      {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
