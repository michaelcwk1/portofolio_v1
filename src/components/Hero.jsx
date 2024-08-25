import { HERO } from "../constants";
import tpImg from "../assets/logo.png";
import { motion } from "framer-motion";
import instagramLogo from "../assets/logo/instagram.svg";
import linkedinLogo from "../assets/logo/linkedin.svg";
import githubLogo from "../assets/logo/github.svg";
import youtubeLogo from "../assets/logo/discord.svg";

const Hero = () => {
  const socialLinks = [
    { src: linkedinLogo, alt: "LinkedIn", href: "https://www.linkedin.com/in/michael-christoper-8a0023255/" },
    { src: githubLogo, alt: "GitHub", href: "https://github.com/michaelcwk1" },
    { src: instagramLogo, alt: "Instagram" , href: "https://www.instagram.com/cwk.66/"},
    { src: youtubeLogo, alt: "Discord" },
  ];
  return (
    <section className="flex flex-wrap items-center min-h-screen px-4 lg:px-16">
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 flex justify-center mt-12 md:mt-0 lg:mt-0"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={tpImg}
          alt="Makima"
          className="hero-img custom-max-width"
        />
      </motion.div>
      <motion.div
    initial={{ opacity: 0, x: 150 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col justify-center lg:justify-start text-center lg:text-left"
>
    <h2
        className="my-1 p-1 text-4xl sm:text-3xl font-extralight tracking-wide md:text-5xl lg:text-3xl"
        style={{ fontFamily: "var(--fontLogo)" }}
    >
        {HERO.name}
    </h2>
    <p
        className="text-4xl p-1 sm:text-6xl md:text-3xl lg:text-5xl font-bold tracking-wide"
        style={{ fontFamily: "var(--fontLogo)" }}
    >
        {HERO.greet}
    </p>
    <p className="mb-4 p-2 text-lg sm:text-xl lg:text-justify text-justify "
        style={{ fontFamily: "var(--fontDefaults)" }}>
        {HERO.description}
    </p>
    {/* Social Icons */}
    <div className="home_social flex justify-center lg:justify-start p-2 gap-2 mt-2 lg:mt-2">
        {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={link.src} alt={link.alt} className="social-icon" />
            </motion.a>
        ))}
    </div>
</motion.div>

    </section>
  );
};

export default Hero;
