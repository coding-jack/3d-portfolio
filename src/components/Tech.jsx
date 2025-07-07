import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from "framer-motion"
import { textVariant } from "../utils/motion"
import { styles } from "../styles"

const Tech = () => {
  return (
    <div className="py-20">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20"
      >
        <p className={styles.sectionSubText}>Tools I build with</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div key={`technology-${technology.name}`}>
            <div className="w-28 h-28">
              <BallCanvas icon={technology.icon}/>
            </div>
            <p className="text-white text-center">{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "tech")