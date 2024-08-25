    // Skills.jsx
    import React from "react";
    import { SKILLS } from "../constants";
    import { motion } from "framer-motion";

    const Skills = () => {
    return (
        <section className="skills py-20" id="skills">
        <div className="container mx-auto px-2">
            <div className="text-center">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-bold text-4xl text-gray-800 mb-4"
            >
                Skills
            </motion.h1>
            <div className="w-24 h-1 mx-auto"></div>
            </div>
            <motion.div
            className="programming flex justify-center items-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            >
            {SKILLS.programming.map((skill, index) => (
                <div key={index} className="m-4">
                {skill.icon}
                </div>
            ))}
            </motion.div>
            <motion.div
            className="design flex flex-wrap justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            >
            {SKILLS.design.map((skill, index) => (
                <div key={index} className="m-4">
                {skill.icon}
                </div>
            ))}
            </motion.div>
        </div>
        </section>
    );
    };

    export default Skills;