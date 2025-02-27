import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import DrinksOnline from "../assets/cardapio-online.mp4";
import FaqsApp from "../assets/faqs-app.mp4";
import MksEcommerce from "../assets/mks-ecommercevideo.mp4";
import PgLinks from "../assets/pg-links.mp4";
import BlurFade from "./magicui/blur-fade";

export type ProjectCard = {
  name: string;
  html_url: string;
  language: string;
  img: string;
  video: string;
  created_at: string;
};

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const projectImages: { [key: string]: string } = {
    "faqs-app": FaqsApp,
    "pg-links": PgLinks,
    "mks-ecommerce": MksEcommerce,
    drinksOnline: DrinksOnline,
  };

  useMemo(() => {
    const fetchProjects = async () => {
      const response = await fetch(
        "https://api.github.com/users/carlospinellowork/repos"
      );
      const projects = await response.json();
      const filteredProjects = projects
        .filter(
          (project: ProjectCard) =>
            project?.created_at &&
            new Date(project.created_at).getFullYear() > 2022
        )
        .slice(0, 6);

      setProjectsData(
        filteredProjects
          .filter((project: ProjectCard) => project.name !== "portfolio")
          .map((project: ProjectCard) => ({
            name: project.name,
            html_url: project.html_url,
            language: project.language,
            img: project.name === "" ? "" : "",
            video: projectImages[project.name] || "",
          }))
      );
    };
    fetchProjects();
  }, []);

  return (
    <motion.section
      variants={variants}
      initial="initial"
      animate={(isInView && "animate") || "animate"}
      ref={ref}
      className="flex flex-col items-center justify-center flex-1 w-full py-16 bg-slate-50 projects"
    >
      <h1 className="font-bold font-bebas w-fit text-7xl md:text-9xl xl:text-9xl text-zinc-900">
        SELECIONAR <br /> TRABALHOS ({projectsData?.length})
      </h1>
      <div className="grid w-full grid-cols-1 gap-4 p-6 mt-12 sm:grid-cols-2 md:grid-cols-2">
        {projectsData.map(({ name, html_url, img, video }, idx) => (
          <motion.div
            key={name}
            className="relative overflow-hidden group"
            variants={variants}
          >
            <BlurFade key={name} delay={0.25 + idx * 0.05} inView>
              {video ? (
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] object-cover"
                />
              ) : (
                <img
                  src={img}
                  alt={name}
                  className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px]"
                />
              )}
            </BlurFade>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white opacity-0 font-koho bg-zinc-900 bg-opacity-90 group-hover:opacity-100"
            >
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="z-10 text-lg font-koho hover:underline underline-offset-4"
              >
                {name}
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
