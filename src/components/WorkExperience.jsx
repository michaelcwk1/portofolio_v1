import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion"


const WorkExperience = () => {
    return (
        <section className="flex flex-col py-20  px-2  max-w-7xl mx-auto " id="work">
            <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{  opacity: 1, y: 0 }}
            transition={{  duration: 1 }}
            className="text-center text-4xl font-bold text-gray-800 tracking-wide">Work Experience </motion.h2>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{  opacity: 1 }}
            transition={{  duration: 1, delay: 0.5 }}
            className="space-y-8 p-0 ">
                {EXPERIENCES.map((experience, index) => (
                    <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{  opacity: 1, y: 0 }}
                    transition={{  duration: 1, delay: index * 0.2}}
                    key={index} className="rounded-xl border border-stone-50/30 bg-white/10 p-4"> 
                        <h3 className="text-2xl font-semibold">{experience.title}
                        </h3>
                        <p className="text-xl">{experience.company}</p>
                        <p className="text-sm text-stone-400">{experience.duration}</p>
                        <p className="mt-2 text-justify text-base">{experience.description}</p>
                    </motion.div>
                ))}
            </motion.div>
            
        </section>
    )
};

export default WorkExperience;
