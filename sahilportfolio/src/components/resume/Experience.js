import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="py-12 font-titleFont flex gap-20"
      >
        {/* Job Experience */}
        <div>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
            <h2 className="text-4xl font-bold">Job Experience</h2>
          </div>
          <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Full Stack Developer (Intern)"
              subTitle="Capstone Project - College Help Desk (2024 - Present)"
              result="Canada"
              des="Developed a full-stack college help desk application enabling students to book appointments, view queue status, and interact with college services. Implemented React.js, Node.js, and MongoDB for an efficient user experience."
            />
            <ResumeCard
              title="Web Developer (Freelance)"
              subTitle="ServeEase Platform (2023 - Present)"
              result="Remote"
              des="Built a service-based platform connecting homeowners with professionals for home improvement services. Designed intuitive UI/UX with React.js, ensuring seamless navigation and real-time booking functionality."
            />
            <ResumeCard
              title="Android Developer"
              subTitle="Payroll Calculator App (2023)"
              result="Remote"
              des="Developed a payroll calculator Android application using Java and Android Studio. Designed an interactive interface for users to calculate wages based on work hours and hourly rate, with additional features like history tracking."
            />
          </div>
        </div>

        {/* Trainer Experience */}
        <div>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
            <h2 className="text-4xl font-bold">Technical Experience</h2>
          </div>
          <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="React Developer"
              subTitle="Weather App (2023)"
              result="Canada"
              des="Developed a weather forecasting web app using React.js and OpenWeather API, implementing real-time weather data fetching, interactive UI, and state management for seamless user experience."
            />
            <ResumeCard
              title="Software Developer (Collaborative Project)"
              subTitle="COMP3104 Agile Development Project (2023)"
              result="Canada"
              des="Worked on a full-stack collaborative project using Agile methodologies. Utilized React, Node.js, and MongoDB, following version control best practices with GitHub for efficient team collaboration."
            />
            <ResumeCard
              title="iOS Developer"
              subTitle="To-Do List App (2023)"
              result="Remote"
              des="Designed and developed an intuitive To-Do List application for iOS using Swift and SwiftUI. Implemented task categorization, reminders, and seamless synchronization across Apple devices."
            />
          </div>
        </div>
      </motion.div>

  );
};

export default Experience;
