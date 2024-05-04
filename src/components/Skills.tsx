import React from "react";
import html from "../assets/html (1).png"
import css from "../assets/css (1).png"
import js from "../assets/js (1).png"
import react from "../assets/react (1).png"
import tc from "../assets/tc.png"
import gh from "../assets/gh (1).png"
import ts from "../assets/ts (1).png"
import Framer from "../assets/Framer (1).png"

import { motion } from "framer-motion";
const Skills = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500 ",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500 ",
        },
        {
            id: 3,
            src: js,
            title: "JavaScript",
            style: "shadow-yellow-500 ",
        },
        {
            id: 4,
            src: react,
            title: "React",
            style: "shadow-blue-600 ",
        },
        {
            id: 5,
            src: tc,
            title: "Tailwind",
            style: "shadow-sky-400  ",
        },


        {
            id: 9,
            src: gh,
            title: "GitHub",
            style: "shadow-gray-400 ",
        },

        {
            id: 11,
            src: ts,
            title: "Type Script",
            style: "shadow-blue-600 ",
        },

        {
            id: 13,
            src: Framer,
            title: "Framer Motion",
            style: "shadow-green-400 font-bold  text-black bg-slate-100 ",
        },


    ];
    return (
        <div
            name="skills"
            className="bg-gradient-to-b px-8  from-black to-gray-800 w-full h-full "
        >
            <div className=" max-w-screen-lg pt-16 md:pt-32 mx-auto  flex flex-col justify-center h-full w-full  text-white ">
                <div className="">
                    <motion.p
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 0.2,
                        }}
                        className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline "
                    >
                        My Skills
                    </motion.p>
                    <p className=" py-8 ">
                        These are the technologies I've worked with.
                    </p>
                </div>
                <div className=" w-full grid grid-cols-2 md:grid-cols-3   gap-6 text-center  py-4 px-6 sm:px-0    ">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={` shadow-md hover:scale-105 duration-500 py-2 flex flex-col  justify-between items-center  rounded-lg ${style}`}
                        >
                            <img src={src} alt="Logo" className="w-20" />
                            <p className="">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;