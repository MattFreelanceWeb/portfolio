import Image from "next/image";
import React from "react";
import HighlightText from "../text/HighlightText";
import Link from "next/link";

type Props = { title: string; content: string[]; technos: string[], id?:'string', src:any, alt:string, href:string};

function ProjectCardV2({ title, content, technos, id, src, alt,href }: Props) {

  return (
    <Link
    href={href}
      id={id} className="relative flex flex-col h-[500px] w-80 min-w-[320px] md:w-96 rounded-lg text-white bg-slate-800/90 shadow-2xl border-2 border-slate-700 backdrop-blur-sm hover:text-Primary duration-700 snap-center ">

      {/** titre et contenue */}
      <div className="flex flex-row-reverse items-start relative">
        <h3
          className="font-ChakraPetch  text-2xl p-4 z-30"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          {title}
        </h3>
        <ul className="font-Poppins w-3/4 pt-4">
          <div className="font-ChakraPetch mb-2">{"///"}</div>
          {content.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/** image du projet */}
      <div
        className="w-full h-1/2 absolute translate-x-5 translate-y-40  rounded-lg hover:translate-x-0 hover:translate-y-0 hover:h-full duration-300 z-20 cursor-pointer shadow-2xl"
      >
        <Image
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-lg z-20"
        />
      </div>

      {/** badge */}
      <div className="w-full absolute bottom-0 left-4 p-2 flex  flex-wrap gap-2 uppercase text-white">
        {technos.map((item, i) => (
          <HighlightText content={item} key={i} delay={i / 10} />
        ))}
      </div>
    </Link>
  );
}

export default ProjectCardV2;
