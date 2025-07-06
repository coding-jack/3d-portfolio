import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={<div className="flex justify-center items-center w-full h-full"><img src={experience.icon} alt={experience.title} className="w-[60%] h-[60%] object-contain"/></div>}
    >
      <div>
        <h3 className="text-white font-bold text-[24px]">{experience.title}</h3>
        <p className="text-secondary font-semibold text-[16px]">{experience.company_name}</p>
        <ul className="mt-5 list-disc space-y-2 ml-5">
          {experience.points.map((point, index) => (
            <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">{point}</li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="pt-40"
      >
        <p className={styles.sectionSubText}>What I Have Done So Far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "Work")