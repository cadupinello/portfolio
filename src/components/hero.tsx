import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { ArrowDown, Mouse } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-scroll";
import BGimg from "../assets/img2.jpg";
import DotPattern from "./magicui/dot-pattern";
import WordRotate from "./magicui/word-rotate";

const Hero = () => {
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
  return (
    <motion.section
      variants={variants}
      initial="initial"
      animate={(isInView && "animate") || "animate"}
      ref={ref}
      className="flex flex-col items-center justify-center h-[100vh] bg-zinc-900 hero px-4"
    >
      <WordRotate
        className="uppercase text-5xl text-center md:text-9xl xl:text-10xl font-bold font-anton tracking-[-0.02em] text-slate-50"
        words={["Carlos Eduardo", "22 anos", "Brasileiro"]}
      />

      <Link
        to="about"
        smooth
        duration={500}
        className="py-6 font-semibold text-md sm:text-lg md:text-xl font-koho hover:underline underline-offset-4 text-slate-50"
      >
        SOBRE MIM
      </Link>
      <WordRotate
        words={[
          "Desenvolvedor Front-end",
          "Analista de Sistemas",
          "Desenvolvedor Web",
        ]}
        className="uppercase text-6xl text-center md:text-9xl xl:text-10xl font-bold font-anton tracking-[-0.02em] text-slate-50"
      />
      <div className="flex flex-col items-center mb-12">
        <Mouse className="w-10 h-10 mt-12 text-zinc-600 animate-pulse" />
        <ArrowDown className="w-4 h-4 text-zinc-600 animate-pulse" />
      </div>
      <div>
        <a
          href="https://github.com/carlospinellowork"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={BGimg}
            alt="Foto de Carlos"
            className="mt-[20px] rounded-lg w-[140px] h-[140px] object-cover sm:rounded-full sm:w-[150px] sm:h-[150px]"
          />
        </a>
      </div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(200px_circle_at_top,white,transparent)]"
        )}
      />
    </motion.section>
  );
};

export default Hero;
