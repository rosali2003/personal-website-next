"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "Personal Website",
    description: "The website you're on now!",
    image: "/holder.png",
    tag: ["Project"],
    gitUrl: "https://github.com/rosali2003/personal-website-next",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Agendify",
    description: "calendar-based task tracker",
    image: "/holder.png",
    tag: ["Project"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Article",
    description: "Project 3 description",
    image: "/holder.png",
    tag: ["Article"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Returns",
    description: "Contributed to making Return APIs",
    image: "/holder.png",
    tag: ["Work"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Passkeys on Shop Pay Checkout",
    description: "Authentication and CRUD operations",
    image: "/holder.png",
    tag: ["Work"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
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
          name="Project"
          isSelected={tag === "Project"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Article"
          isSelected={tag === "Article"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Work"
          isSelected={tag === "Work"}
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
