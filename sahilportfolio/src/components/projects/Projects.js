import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Weather App"
          des="A React.js-based web application that fetches real-time weather data from OpenWeatherMap API. Features include dynamic UI updates, responsive design, and real-time data fetching for an engaging user experience."
          src={projectOne}
        />
        <ProjectsCard
          title="ServeEase App"
          des="An innovative platform connecting homeowners with industry professionals for home services. Developed with Android, React, Node.js, MongoDB, Express.js and Firebase it features real-time booking, user authentication, and a seamless service request system."
          src={projectTwo}
          githubLink="https://github.com/Milan-p23/ServeEase/tree/101413469-sahil"
        />
        <ProjectsCard
          title="Currency Converter App"
          des="An Android-based mobile application for payroll management. Built with Java and Android Studio, it allows users to calculate wages based on working hours, navigate a simple UI, and view pay history."
          src={projectThree}
           githubLink="https://github.com/sahils777/Currency-Converter-App"
        />
        <ProjectsCard
          title="To-Do List App for iOS"
          des="A feature-rich iOS application designed for task management and productivity. Developed using Swift and SwiftUI, it includes task categorization, reminders, and seamless synchronization across Apple devices."
          src={projectFour}
           githubLink="https://github.com/sahils777/3097_G-56ToDoListApp"
        />
        <ProjectsCard
          title="Calculator for iOS"
          des="A feature-rich iOS application designed for performing calculations. Developed using Swift and SwiftUI, it includes task doing arithmetic expression and is seamlessly synchronized across Apple devices."
          src={projectFive}
           githubLink="https://github.com/sahils777/3097_G-56ToDoListApp"
        />
      </div>
    </section>

  );
}

export default Projects
