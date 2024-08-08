import { Github, Instagram, Linkedin } from "lucide-react"

const Contact = () => {
  return (
    <div className='flex flex-1 flex-col items-center bg-zinc-900 py-24 contact'>
      <h4 className='font-bebas text-7xl mb-12 md:text-8xl xl:text-9xl font-bold text-slate-50'>Vamos trabalhar juntos</h4>
      <h2 className='font-bebas my-6 px-12 text-center text-3xl text-slate-50'>Envie uma mensagem para o meu e-mail: <br /><br /> <a href="mailto:carlos.pinello@outlook.com" className="text-5xl text-zinc-50 hover:underline hover:underline-offset-4">carlos.pinello@outlook.com</a></h2>
      <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*Zba283qWO_T1yWG3" className="mt-auto w-1/2 h-[600px] object-cover" />
      <h2 className='font-bebas my-6 px-12 text-center text-3xl text-slate-50'>Me siga nas redes sociais</h2>

      <div className='flex items-center justify-center gap-4'>
        <a href="https://github.com/cadupinello" target="_blank" rel="noreferrer" className="w-12 h-12 text-slate-50"><Github /></a>
        <a href="https://www.linkedin.com/in/carlos-eduardo-pinello/" target="_blank" rel="noreferrer" className="w-12 h-12 text-slate-50"><Linkedin /></a>
        <a href="https://www.instagram.com/cadupinello/" target="_blank" rel="noreferrer" className="w-12 h-12 text-slate-50"><Instagram /></a>
      </div>

    </div>
  )
}

export default Contact