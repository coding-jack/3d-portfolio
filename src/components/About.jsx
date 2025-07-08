import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] min-h-[280px] flex flex-col justify-evenly items-center"
          options={{
            max: 45,
            scale: 1,
            speed: 450,
            glare: true,
            "max-glare": 1,
            transition: 0
          }}
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-10"
      >
        <p className={styles.sectionSubText}>What I do</p>
        <h2 className={styles.sectionHeadText}>Introduction</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary test-[17px] max-w-3xl leading-[30px]"
      >
        I'm a passionate, self-taught developer with a strong background in
        user interfaces and full stack web applications.  My love for coding has
        grown deeply throughout the past 9 years I've been doing it professionally.
        I've worked with a wide variety of technologies, but the bulk of my experience lies in
        React and WordPress. The best way to learn is to BUILD, so
        I'm always looking for the next new cool thing to create!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")