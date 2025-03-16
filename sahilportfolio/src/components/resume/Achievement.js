import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="py-12 font-titleFont flex gap-20"
      >
        {/* Company Experience */}
        <div>
          <div className="py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
            <h2 className="text-4xl font-bold">Company Experience</h2>
          </div>
          <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Freelance Web Developer"
              subTitle="ServeEase - Home Service Platform (2023 - Present)"
              result="Remote"
              des="Designed and developed an interactive platform for homeowners and industry professionals. Focused on real-time service requests, user authentication, and a seamless user experience with modern UI/UX."
            />
            <ResumeCard
              title="Android Developer"
              subTitle="Payroll Calculator App (2023)"
              result="Remote"
              des="Developed a mobile application to help users manage payroll calculations efficiently. Designed with Java and Android Studio, it allows tracking of working hours, wage calculations, and history management."
            />
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2021 - Present</p>
            <h2 className="text-4xl font-bold">Certifications</h2>
          </div>
          <div className="mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Diploma in Computer Programming and Analysis"
              subTitle="Seneca College (2022 - Present)"
              result="In Progress"
              des="An advanced diploma program covering software development, database management, cloud computing, and full-stack application development. Provides hands-on experience in industry-standard technologies."
            />
            <ResumeCard
              title="Software Development Certification"
              subTitle="H&B Computer Education (2021 - 2022)"
              result="Completed"
              des="A specialized training program in software development, covering key programming languages, algorithms, and application design. Focused on practical implementation of coding concepts."
            />
          </div>
        </div>
      </motion.div>

  );
};

export default Achievement;
