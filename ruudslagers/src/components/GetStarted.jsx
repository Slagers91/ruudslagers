import styles from "../style";
import { CV_RuudSlagers_2023, arrowUp, robot } from "../assets";
import { motion } from "framer-motion";

const GetStarted = () => (
  <a href={CV_RuudSlagers_2023} download>
    <motion.div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
      animate={{
        scale: [1, 1, 1.1, 1, 1],
        rotate: [0, 0, 0, 0, 0],
        borderRadius: ["50%", "50%", "50%", "50%", "50%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">CV</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          ></img>
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Download</span>
        </p>
      </div>
    </motion.div>
  </a>
);

export default GetStarted;
