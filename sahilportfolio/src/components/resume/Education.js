import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
      >
        {/* Education Section */}
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2018 - 2025</p>
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Computer Programming and Analysis (Advanced Diploma)"
              subTitle="Seneca College, Canada (2022 - 2025)"
              result="In Progress"
              des="Pursuing an advanced diploma in Computer Programming and Analysis, specializing in full-stack development, data structures, cloud computing, and software engineering principles."
            />
            <ResumeCard
              title="Higher Secondary Education (Science Stream)"
              subTitle="Ahmedabad, Gujarat (2019 - 2021)"
              result="Completed"
              des="Completed high school with a focus on Science and Mathematics. Developed a strong foundation in logical reasoning, problem-solving, and analytical skills."
            />
          </div>
        </div>

        {/* Job Experience Section */}
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
            <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Full Stack Developer (Intern)"
              subTitle="Capstone Project - College Help Desk (2024 - Present)"
              result="Canada"
              des="Developed a full-stack application for students to book appointments and manage campus services. Worked with React.js, Node.js, and MongoDB to create an efficient and scalable system."
            />
            <ResumeCard
              title="Web Developer (Freelance)"
              subTitle="ServeEase Platform (2023 - Present)"
              result="Remote"
              des="Built and deployed a home service platform using React, Node.js, and MongoDB. Implemented user authentication, real-time booking, and intuitive UI/UX design."
            />
            <ResumeCard
              title="Android Developer"
              subTitle="Payroll Calculator App (2023)"
              result="Remote"
              des="Designed an Android application for payroll management using Java and Android Studio, enabling users to calculate earnings and track working hours."
            />
          </div>
        </div>
      </motion.div>

  );
}

export default Education
