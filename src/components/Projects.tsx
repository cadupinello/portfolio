import { motion, useInView } from 'framer-motion';
import { useMemo, useRef, useState } from 'react';
import FaqsApp from '../assets/faqs_app.png';
import PgLinks from '../assets/pg_links.png';
import BlurFade from "./magicui/blur-fade";

export type ProjectCard = {
  name: string;
  html_url: string;
  language: string;
  img: string;
  created_at: string;
}

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref, {margin: "-100px"});

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
  }

  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nextdotjs",
    "prisma",
    "postgresql",
    "firebase",
    "vercel",
    "git",
    "github",
  ];

  const projectImages: { [key: string]: string } = {
    "faqs-app": FaqsApp,
    "pg-links": PgLinks,
  };

  useMemo(() => {
    const fetchProjects = async () => {
      const response = await fetch('https://api.github.com/users/carlospinellowork/repos');
      const projects = await response.json();
      const filteredProjects = projects
        .filter((project: ProjectCard) => project?.created_at && new Date(project.created_at).getFullYear() > 2022)
        .slice(0, 6);

      setProjectsData(filteredProjects.map((project: ProjectCard) => ({
        name: project.name,
        html_url: project.html_url,
        language: project.language,
        img: projectImages[project.name] || '',
      })));
    };
    fetchProjects();
  }, [window]);

  return (
    <motion.section
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
      ref={ref}
      className="flex flex-1 w-full flex-col py-16 items-center justify-center bg-zinc-900 projects">
      <h1 className="font-bebas w-fit text-7xl md:text-9xl xl:text-9xl font-bold text-slate-50">SELECIONAR <br /> TRABALHOS (6)</h1>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 w-full mt-12 gap-4 p-6">
        {projectsData.map(({ name, html_url, img }, idx) => (

          <motion.div
            key={img}
            className="relative group"
            variants={variants}
          >
            <BlurFade key={img} delay={0.25 + idx * 0.05} inView>
              <img
                className="mb-4 h-[600px] size-full object-contain"
                src={img}
                alt={name}
              />
            </BlurFade>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold font-koho bg-zinc-900 bg-opacity-90 opacity-0 group-hover:opacity-100"
            >
              <a href={html_url} target="_blank" className="z-10 font-koho text-xl hover:underline underline-offset-4">
                {name}
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects