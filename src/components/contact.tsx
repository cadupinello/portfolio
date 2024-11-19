import { Github, Instagram, Linkedin } from "lucide-react"
import ContactImg from '../assets/contactImg.jpeg';

const Contact = () => {
  return (
    <div className="flex flex-col items-center flex-1 py-12 sm:py-16 md:py-24 bg-zinc-900 contact">
      <h4 className="mb-8 text-5xl font-bold text-center sm:mb-10 md:mb-12 font-bebas sm:text-6xl md:text-7xl xl:text-8xl text-slate-50">
        Vamos trabalhar juntos
      </h4>

      <h2 className="px-4 my-4 text-xl text-center sm:px-8 md:px-12 sm:my-6 sm:text-2xl md:text-3xl font-bebas text-slate-50">
        Envie uma mensagem para o meu e-mail:
        <br />
        <a href="mailto:carlos.pinello@outlook.com" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-zinc-50 hover:underline hover:underline-offset-4">
          carlos.pinello@outlook.com
        </a>
      </h2>

      <h4 className="mb-8 text-xl font-bold sm:mb-10 md:mb-12 sm:text-2xl md:text-3xl font-bebas text-slate-50">
        Vamos trabalhar juntos
      </h4>

      <img
        src={ContactImg}
        className="mt-auto w-3/4 sm:w-2/3 md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
      />

      <h2 className="px-4 my-4 text-xl text-center sm:px-8 md:px-12 sm:my-6 sm:text-2xl md:text-3xl font-bebas text-slate-50">
        Me siga nas redes sociais
      </h2>

      <div className="flex items-center justify-center gap-3 sm:gap-4">
        <a href="https://github.com/carlospinellowork" target="_blank" rel="noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 text-slate-50">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/carlos-eduardo-9ba041156/" target="_blank" rel="noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 text-slate-50">
          <Linkedin />
        </a>
        <a href="https://www.instagram.com/dududucadu/" target="_blank" rel="noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 text-slate-50">
          <Instagram />
        </a>
      </div>
    </div>

  )
}

export default Contact