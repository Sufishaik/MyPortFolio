import React from "react";
import { motion } from "framer-motion";
import Img1 from "../images/pro1.png"
import Img2 from "../images/note.png"

export default function Projects() {
    const project = [{
        id: 1,
        img: Img1,
        lnk: "https://homey-store.netlify.app/",
        title: "My E-commerce Site",
        desc: "Html, Css, Javascript, react, Type script, Tailwind css, Framer Motion etc, Daisy UI"
    },
    {
        id: 2,
        img: Img2,
        lnk: "https://makenoteapp.netlify.app/",
        title: "React Note Making App",
        desc: "Html, Css, Javascript, Tailwind css, react, Daisy UI",
    },

    ]
    return (
        <div
            name="projects"
            id="projects"
            className=" w-full h-full pt-16 md:pt-32 px-4  bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
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
                        className=" text text-4xl font-jost font-bold inline border-b-4 border-gray-500 "
                    >
                        Projects
                    </motion.p>
                </div>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.3,
                        duration: 1,
                    }}
                    className="text-xl grid md:grid-cols-3 gap-8 grid-cols-1 mt-10 "
                >
                    {project.map((item, id) => (
                        <div key={id} className="card w-auto  hover:scale-110 duration-700 shadow-blue-900  image-full">
                            <figure>
                                <img
                                    src={item.img}
                                    alt="Shoes"
                                    className=""
                                />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title font-jost">{item.title}</h2>
                                <p className="text-sm">{item.desc}</p>
                                <div className="card-actions justify-center mt-8">
                                    <a href={item.lnk} target="_blank" rel="noreferrer" className="btn hover:scale-125 duration-300 btn-circle">View Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}