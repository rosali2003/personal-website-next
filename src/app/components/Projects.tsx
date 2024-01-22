"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { prototype } from "events";

enum projectTypes {
  projects = "Projects",
  workExperience = "Work Experience"
}
const projectsData = [
  {
    id: 1,
    title: "Personal Website",
    description: "The website you're on now!",
    image: "/holder.png",
    tag: [projectTypes.projects],
    gitUrl: "https://github.com/rosali2003/personal-website-next",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Agendify",
    description: "calendar-based task tracker",
    image: "/holder.png",
    tag: [projectTypes.projects],
    gitUrl: "https://github.com/rosali2003/agendify",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Machine learning: Linear regression and logistic regression",
    description: "Implemented a linear regression model with L2 and L1 norm to predict on the sonar dataset. Implemented logistic regression to predict on the auto mpg dataset.",
    image: "/holder.png",
    tag: [projectTypes.projects],
    gitUrl: "https://github.com/rosali2003/Machine-Learning/tree/main/A1",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Machine learning: Binary classification",
    description: "Implemented a binary classification in adjoint form and SVM dual form. Utilized kernel functions to adjust the data for better model predictions.",
    image: "/holder.png",
    tag: [projectTypes.projects],
    gitUrl: "https://github.com/rosali2003/Machine-Learning/tree/main/A2",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Machine learning: Multi-class classification",
    description: "Implemented multi-class classification with multinomial deviance and principle component analysis to predict on the Fashion-MNIST dataset.",
    image: "/holder.png",
    tag: [projectTypes.projects],
    gitUrl: "https://github.com/rosali2003/Machine-Learning/tree/main/A3",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Machine learning: CNN",
    description: "Implemented a CNN to predict on the MNIST dataset with 71% accuracy.",
    image: "/holder.png",
    tag: [projectTypes.projects],
    gitUrl: "https://github.com/rosali2003/Machine-Learning/tree/main/A4",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Back-end Developer Intern - Shopify",
    description: "Developed APIs, GraphQL mutations and webhooks for the Returns team. (more info in resume :)",
    image: "/shopify.png",
    tag: [projectTypes.workExperience],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Front-end Developer Intern - Shopify",
    description: "Implemented passkeys into Guest Checkout flow. Led accessibility and translation effort and contributed to resiliency efforts. (more info in resume :)",
    image: "/shopapp.png",
    tag: [projectTypes.workExperience],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Producting Engineering Intern - Shopify",
    description: "Just started`. Stay tuned for upcoming adventures :)",
    image: "/shopify.png",
    tag: [projectTypes.workExperience],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState(projectTypes.projects);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag:any) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Work
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name={projectTypes.projects}
          isSelected={tag === projectTypes.projects}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Article"
          isSelected={tag === "Article"}
        /> */}
        <ProjectTag
          onClick={handleTagChange}
          name={projectTypes.workExperience}
          isSelected={tag === projectTypes.workExperience}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
