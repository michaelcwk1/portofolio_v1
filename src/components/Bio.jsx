    import React from "react";
    import { motion } from "framer-motion";
    import { EDUCATION } from "../constants";

    const EducationTimeline = () => {
    return (
        <section className="flex flex-col py-20 px-6 max-w-7xl mx-auto" id="education">
        <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl p-4 sm:text-6xl md:text-3xl lg:text-4xl text-center font-bold text-black-500 mb-1"
        >
            Educations <span className="text-4xl"></span>
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-20">
            {/* Left side - Description */}
            <div className="lg:w-1/2">
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-lg text-justify text-gray-600"
            >
                My formal education didn't provide extensive knowledge in software development. However, my passion for programming began in middle school, and it wasn't until I reached university that my interest truly deepened. Currently, I am pursuing a bachelor's degree in Information Systems at the University of Hayam Wuruk Perbanas Surabaya, driven by the ambition to graduate and further refine my skills in this field.
            </motion.p>
            </div>

            {/* Right side - Timeline */}
            <div className="lg:w-1/2">
            <div className="relative border-l-2 border-gray-200  pl-8">
                {EDUCATION.map((edu, index) => (
                <motion.div 
                    key={index}
                    className="mb-8 relative "
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <div className="absolute  -left-10 mt-1.5 h-4 w-4 rounded-full bg-slate-600"></div>
                    <h3 className="text-xl font-semibold">{edu.institution}</h3>
                    <p className="text-gray-600">{edu.duration}</p>
                    <p className="text-gray-700">{edu.degree}</p>
                </motion.div>
                ))}
            </div>
            </div>
        </div>
        </section>
    );
    };

    export default EducationTimeline;