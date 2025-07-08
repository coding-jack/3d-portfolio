import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies, techCategories } from "../constants"
import { motion } from "framer-motion"
import { textVariant } from "../utils/motion"
import { styles } from "../styles"
import React, { useState } from "react";
import Modal from "./Modal";

const Tech = () => {
  const [modalOpen, setModalOpen] = useState(false);
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
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 text-center"
      >
        <button
          className="bg-tertiary text-white px-4 py-2 rounded-[10px] hover:bg-secondary transition mb-4 border border-secondary"
          onClick={() => setModalOpen(true)}
        >
          More Tech
        </button>
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          categories={techCategories}
        />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Tech, "tech")