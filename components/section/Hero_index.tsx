import Image from "next/image";
import React from "react";
import BgHero from "@/assets/bgHero.png";
import StarGif from "@/assets/starGif.gif";
import HeroProfile from "@/assets/heroProfile(2).png";
import { motion, useScroll, useTransform } from "framer-motion";
import MeteorText from "../text/MeteorText";
import Link from "next/link";

type Props = {};

function Hero_index({}: Props) {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      id="hero_index"
      className="h-screen w-full top-0 flex flex-col items-center justify-center "
    >
      <motion.div style={{ y }} className="absolute w-full h-full -z-10">
        <Image
          placeholder={"blur"}
          src={BgHero}
          alt={" main bg "}
          className="-z-10 absolute w-full h-full object-cover"
        />
        <Image
          src={StarGif}
          alt={" stargif "}
          className="-z-10 absolute h-full w-full object-cover opacity-20"
        />
        <Image
          placeholder={"blur"}
          src={HeroProfile}
          alt={" profile picture bg"}
          className="absolute h-full w-full object-cover opacity-40 translate-y-10"
        />
      </motion.div>

      <div className="w-full h-full flex flex-col items-start justify-center gap-8  text-4xl lg:text-6xl font-extrabold text-white px-20 font-ChakraPetch md:items-start capitalize notranslate ">
        <div className="flex flex-col md:flex-row gap-8 ">
          <MeteorText content={"HELLO"} delay={0} />
          <MeteorText content={"WORLD!"} delay={0.5} />
        </div>
        <div className="flex flex-col md:flex-row gap-8 ">
          <MeteorText content={"bienvenue"} delay={1} />
          <div className="flex items center gap-4 md:gap-8">
            <MeteorText content={"sur"} delay={1.9} />
            <MeteorText content={"mon"} delay={2.2} />
          </div>

          <div className="flex items-center">
            <MeteorText content={"Portfolio"} delay={2.5} />
          </div>
        </div>
        <div className="font-Poppins text-xl">
         <p>je m&apos;appelle matt, développeur web à votre service</p> 
        </div>
      </div>
      <Link href='/#about_index' className=" absolute bottom-4" aria-label="scroll-down">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16 stroke-slate-100 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </Link>
    </section>
  );
}

export default Hero_index;
