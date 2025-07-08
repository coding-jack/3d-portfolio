import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github, cursor } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({ index, name, description, tags, image, source_code_link, demo_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="rounded-[20px] bg-primary"
    >
      <Tilt
        key={`project-${name}`}
        options={{
          max: 45,
          scale: 1,
          speed: 450,
          glare: true,
          "max-glare": 1,
          transition: 0
        }}
        className="green-pink-gradient p-[1px] rounded-[20px] sm:w-[360px] w-full h-full"
      >
        <div className="bg-tertiary rounded-[20px] min-h-[280px] flex flex-col justify-between items-center p-5 h-full">
          <div>
            <div
              className="relative w-full h-[230px]"
              options={{
                max: 45,
                scale: 1,
                speed: 450,
                glare: true,
                "max-glare": 1,
                transition: 0
              }}
            >
              <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
              {source_code_link && (
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div
                    onClick={() => window.open(source_code_link, "_blank")}
                    className="black-gradient w-10 h-10 flex justify-center items-center rounded-full cursor-pointer"
                  >
                  <img src={github} alt="github" className="w-1/2 h-1/2 object-contain"/>
                </div>
                </div>
              )}
              {demo_link && (
                <div className={`absolute inset-0 ${source_code_link ? "right-11" : "right-0"} flex justify-end m-3 card-img_hover`}>
                  <div
                    onClick={() => window.open(demo_link, "_blank")}
                    className="black-gradient w-10 h-10 flex justify-center items-center rounded-full cursor-pointer"
                  >
                  <img src={cursor} alt="demo" className="w-1/2 h-1/2 object-contain"/>
                </div>
                </div>
              )}
            </div>
            <div className="mt-5">
              <h3 className="text-white text-[24px] font-bold">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 w-full items-start">
            {tags.map((tag, index) => (
              <p
                key={`tag-${name}-${index}`}
                className={`${tag.color} text-[14px] py-1 rounded-full`}
              >
                #{tag.name}&nbsp;
              </p>
            ))}
          </div>
        </div>
    </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20"
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my skills and experience through real-world
          examples of my work.  Each project is briefly described with links to the code
          repositories, when available, and live demos when possible.  It reflects my ability to solve
          complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${project.name}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "portfolio")