import Image from "next/image";
import React from "react";
import Shoutingstar from "@/assets/starGif.gif";
import Button from "../button/Button";
import Link from "next/link";
import { socialsArray } from "@/utils/data/socialsArray";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="w-full bg-slate-900 flex flex-col items-center justify-center py-12 px-4 font-Poppins text-white md:text-2xl">
      <div className=" flex flex-col items-start justify-center bg-black/80  relative p-4 rounded-lg gap-4 overflow-hidden md:p-12">
        <h2 className="z-10 font-ChakraPetch">/ Contactez-moi</h2>
        <p className="z-10 text-justify">
          Vous avez un projet et vous recherchez un développeur ? <br />{" "}
          contactez moi et nous ferons le points ensemble sur vos besoins et
          comment je pourrai vous accompagner !
        </p>
        <div className="z-10 self-center">
          <Button content="Contacter Par E-mail" />
        </div>
        <Image
          src={Shoutingstar}
          alt={""}
          className="absolute top-0 left-0 w-full rounded-lg object-cover "
        />
      </div>
      <div className="flex flex-col items-center gap-4 mt-8 ">
        <h2>Suivez-moi sur les réseaux:</h2>
        <div className="flex items-center justify-center gap-4 text-lg">
          {socialsArray.map((item, i) => (
            <Link href={item.href} target="_blank" className="" key={i}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
