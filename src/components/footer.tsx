import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between w-full gap-12 p-6 py-6 bg-slate-50">
      <p className="mt-4 font-semibold text-center text-7xl sm:text-6xl md:text-8xl lg:text-9xl font-anton text-zinc-900">
        <a
          href="https://github.com/carlospinellowork"
          target="_blank"
          rel="noreferrer"
        >
          CARLOS EDUARDO
        </a>
      </p>

      <div className="flex justify-between w-full gap-4">
        <p className="text-4xl text-zinc-900 font-bebas">
          © {new Date().getFullYear()}
        </p>
        <Link
          to="hero"
          smooth
          duration={500}
          className="text-4xl cursor-pointer text-zinc-900 font-bebas hover:underline underline-offset-4"
        >
          Voltar ao topo
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
