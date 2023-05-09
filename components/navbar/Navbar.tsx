import Image from "next/image";
import React, { useState } from "react";
import Button from "../button/Button";
import Link from "next/link";
import Shoutingstar from "@/assets/starGif.gif";
import LogoWhite from "@/assets/logo(2).png";
import LogoBlack from "@/assets/logo(3).png"
import { socialsArray } from "@/utils/data/socialsArray";
import { useMotionValueEvent, useScroll } from "framer-motion";

type Props = {};

function Navbar({}: Props) {
  let { scrollYProgress } = useScroll();

  const [toggle, setToggle] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<boolean>(true);
  const [scrollProgress, setscrollProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!toggle) {
      if (scrollProgress < latest) {
        setscrollProgress(latest);
        setScrollDirection(false);
      } else {
        setScrollDirection(true);
        setscrollProgress(latest);
      }
    }
  });

  return (
    <nav
      className={`font-Poppins w-full flex flex-col items-center justify-start gap-8 p-4  overflow-hidden  z-50 fixed top-0 duration-500  ${
        scrollDirection ? "translate-y-0" : "-translate-y-36"
      } ${toggle ? "h-full bg-gray-100/90 " : "h-36 "}`}
    >
      <div className="w-full flex items-center justify-center">
        {/* Logo */}

        <Link href="/" className="w-full relative rounded-full z-50">
          {toggle ? (
            <Image
              src={LogoBlack}
              alt={""}
              height={70}
              width={70}
              className="rounded-full cursor-pointer fixed top-6 left-4 md:static"
            />
          ) : (
            <Image
              src={LogoWhite}
              alt={""}
              height={70}
              width={70}
              className="rounded-full cursor-pointer fixed top-6 left-4 md:static"
            />
          )}{" "}
        </Link>

        {/* desktop nav */}

        <div className=" items-center justify-end gap-2 p-4 rounded-lg bg-black/80 hidden md:flex">
          <div className="flex items-center justify-center gap-2 z-10 ">
            <Button info="navbar" content="Accueil" href="/" />
            <Button info="navbar" content="Infos" href="/#about_index" />
            <Button info="navbar" content="Projets" href="/#project_index" />
          </div>
          <div>
          <Button
            content="Contacter"
            href="mailto:matt.freelance.web@gmail.com"
          />
          </div>

        </div>

        {/* toggle mobile nav */}
        <div
          onClick={() => {
            setToggle(!toggle);
          }}
          className=" p-4 bg-Primary rounded-lg text-white cursor-pointer md:hidden fixed top-8 right-4 z-50 "
        >
          {toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 rotate-90 duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 rotate-180 duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </div>

      {/* mobile nav */}

      <div
        onClick={() => {
          setToggle(!toggle);
        }}
        className={` w-full flex flex-col items-center justify-center gap-4  pt-16  px-24 duration-300 md:hidden rounded-lg ${
          toggle ? "translate-x-0" : "-translate-x-[100vw]"
        }`}
      >
        <Button info="secundary" content="Accueil" href="/" />
        <Button info="secundary" content="Infos" href="/#about_index" />
        <Button info="secundary" content="Projets" href="/#project_index" />
      </div>
      <div
        onClick={() => {
          setToggle(!toggle);
        }}
        className={`w-full flex flex-col items-center gap-4 p-4 bg-black text-white rounded-lg duration-500 relative overflow-hidden ${
          toggle ? "translate-x-0" : "translate-x-[100vw]"
        } md:hidden`}
      >
        <h2 className=" font-ChakraPetch self-start ">/ Contactez-moi</h2>
        <div className="w-full  absolute -z-10">
          <Image src={Shoutingstar} alt="" className="rounded-lg " />
        </div>
        <p className="text-justify">
          Vous avez un projet et vous recherchez un développeur ? <br />{" "}
          contactez moi et nous ferons le points ensemble sur vos besoins et
          comment je pourrai vous accompagner !
        </p>
        <div>
          <Button
            href="mailto:matt.freelance.web@gmail.com"
            content="Contacter par E-mail"
          />
        </div>
      </div>
      <div
        className={`flex flex-col items-center justify-center gap-4 md:hidden duration-700 ${
          toggle ? "translate-y-0" : "translate-y-[100vh]"
        }`}
      >
        <h2>Suivez-moi sur les réseaux:</h2>
        <div className="flex items-center justify-center gap-4 text-lg capitalize">
          {socialsArray.map((item, i) => (
            <Link href={item.href} target="_blank" className="" key={i}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
