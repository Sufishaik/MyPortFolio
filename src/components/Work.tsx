import React from "react";
import { motion } from "framer-motion";

export const Work = () => {
  return (
    <div
      name="Experience"
      className=" w-full h-full px-8 pt-16 md:pt-32  bg-gradient-to-b from-black to-gray-800 text-white "
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 ">
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
            className=" text font-jost text-4xl font-bold inline border-b-4 border-gray-500 "
          >
            Work Experience
          </motion.p>
        </div>

        <ul className="">
          <motion.li
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
            className="flex flex-col tracking-widest  gap-2"
          >
            <span className="text-xl font-bold underline underline-offset-2">
              Frontend Developer Freelance
            </span>
            <span className="font font-semibold">Outlier</span>
            <span className="text-slate-400 text-md">May 2025 - Present</span>
            <span>
              Developed and deployed highly interactive and scalable user
              interfaces using React.js, ensuring seamless performance across
              devices and platforms. Spearheaded the optimization of UI/UX
              designs, resulting in a 40% increase in user satisfaction and a
              35% improvement in workflow efficiency. Continuously monitored and
              fine-tuned front-end performance, contributing to the delivery of
              high-quality software aligned with business objectives.
            </span>
          </motion.li>
          <br />

          <motion.li
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
            className="flex flex-col tracking-widest  gap-2"
          >
            <span className="text-xl font-bold underline underline-offset-2">
              Frontend Developer Internship
            </span>
            <span className="font font-semibold">Hybrowlabs Technologies</span>
            <span className="text-slate-400 text-md">Aug 2024 - Apr 2025</span>
            <span>
              Collaborated with a team of developers and designers to translate
              project requirements into functional and visually appealing
              interfaces. Actively participated in code reviews, providing
              constructive feedback and implementing suggested improvements to
              maintain code quality, consistency, and adherence to best
              practices. Assisted in developing responsive web applications
              using React.js, contributing to a 30% increase in user engagement
              by enhancing the user interface and experience over a 6-month
              period.
            </span>
          </motion.li>
          <br />
          <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="flex flex-col tracking-widest  gap-2"
          >
            <span className="text-xl font-bold underline underline-offset-2">
              FrontEnd Developer Internship
            </span>
            <span className="font font-semibold">Atomic Loops</span>
            <span className="text-slate-400 text-md">
              April 2023 - July 2023
            </span>
            <span>
              Developed dynamic and user-friendly web applications as a Frontend
              Intern, mainly using ReactJS. Collaborated with a team of
              developers and designers to translate project requirements into
              functional and visually appealing interfaces. Skilled in employing
              the ReactJS framework and diverse bundles and repositories to
              accomplish required functionalities. Actively participated in code
              reviews, providing constructive feedback and implementing
              suggested improvements to maintain code quality, consistency, and
              adherence to best practices. Worked in Vande-Bharat Mission
              helping small to medium scale businesses by empowering them
              through eminent digital presence and technological assistance.
              Engaged with clients to understand their needs and developed
              webapps accordingly.
            </span>
          </motion.li>
          <br />
        </ul>
      </div>
    </div>
  );
};
