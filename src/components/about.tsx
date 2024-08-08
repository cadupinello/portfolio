import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import BGimg from '../assets/heroimg.jfif';
import { MarqueeDemo } from './marquee';

const About = () => {
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
  }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
      ref={ref}
      className="flex flex-1 flex-col items-center justify-center bg-zinc-900 about">
      <h1 className="font-bebas text-7xl mb-12 md:text-8xl xl:text-9xl font-bold text-slate-50">Mais sobre <br /> Carlos®</h1>
      <img src={BGimg} className="mt-auto w-[400px] h-[600px] object-cover" />
      <div className='flex w-[400px] items-center justify-between text-slate-50 mt-1'>
        <span>Dev Frontend</span>
        <span>@dududucadu</span>
      </div>
      <h3 className='w-1/2 font-bebas mt-12 px-12 text-center text-4xl text-slate-50'>
        Desenvolvedor frontend com 2 anos de experiência em criar interfaces atraentes e funcionais. Especialista em HTML, CSS, JavaScript, e frameworks como React, Vue.js, Angular.js e Next.js. Comprometido com a entrega de produtos de alta qualidade, sempre pontual e cumprindo prazos.
      </h3>
      <h1 className="mt-12 font-bebas text-2xl md:text-2xl xl:text-3xl font-bold text-slate-50">Tecnologias e Frameworks que já trabalhei</h1>
      <MarqueeDemo />
    </motion.div>
  )
}

export default About