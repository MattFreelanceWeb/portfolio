import React from "react";
import HighlightText from "../text/HighlightText";
import Button from "../button/Button";
import CvDownload from "../button/CvDownload";
import TranslateToLeft from "../text/TranslateToLeft";
import TranslateToRight from "../text/TranslateToRight";
import { isEven } from "@/utils/function/isEven";

type Props = {};

function About_index({}: Props) {
  let date = new Date();
  let myAge = date.getFullYear() - 1990;

  const adjectivesArray = [
    { adj: "motivation", translate: "top-0" },
    { adj: "rigueur", translate: "top-8" },
    { adj: "cursiosité", translate: "top-16" },
    { adj: "adaptabilité", translate: "top-24" },
    { adj: "communication", translate: "top-32" },
    { adj: "collaboration", translate: "top-40" },
    { adj: "flexibilité", translate: "top-48" },
    { adj: "sociabilité", translate: "top-56" },
    { adj: "esprit critique", translate: "top-64" },
    { adj: "logique", translate: "top-72" },
    { adj: "flexibilité", translate: "top-80" },
    { adj: "challenge", translate: "top-96" },
    { adj: "Autonomie", translate: "bottom-0" },
    { adj: "esprit d'équipe", translate: "bottom-8" },
    { adj: "empathie", translate: "bottom-16" },
    { adj: "positivité", translate: "bottom-24" },
    { adj: "addict au café", translate: "bottom-32" },
    { adj: "analyse", translate: "bottom-40" },
  ];

  return (
    <section
      id="about_index"
      className="w-full  bg-slate-900 flex flex-col items-center justify-center py-12 relative font-Poppins text-white "
    >
      {adjectivesArray.map((item, i) =>
        isEven(i) ? (
          <TranslateToLeft
            content={item.adj}
            translate={item.translate}
            key={i}
            delay={i}
          />
        ) : (
          <TranslateToRight
            content={item.adj}
            translate={item.translate}
            key={i}
            delay={i}
          />
        )
      )}

      <div className="w-3/4 h-full bg-slate-800/90 shadow-2xl border-2 border-slate-700 rounded-lg p-10 flex flex-col items-center justify-start gap-4 md:items-start overflow-y-auto backdrop-blur-sm">
        <div className="w-full flex flex-col items-center  md:flex-row md:w-full md:justify-between gap-2 self-start">
          <h2 className=" font-ChakraPetch text-xl capitalize ">
            / Qui suis-je ?
          </h2>
          <CvDownload href="CV-Matteo-Campus.pdf" download="CV-Matteo-Campus.pdf" />
        </div>

        <div className="w-full h-full flex flex-col items-start gap-4 md:text-2xl ">
          <div className="flex flex-col gap-2">
            <h3>Âge:</h3>
            <HighlightText content={`${myAge}`} delay={0} />
          </div>
          <div className="flex flex-col gap-2">
            <h3>Profession:</h3>
            <HighlightText content="Développeur" delay={0.2} />
          </div>
          <div className="flex flex-col gap-2">
            <h3>Spécialité:</h3>
            <HighlightText content="Front-end" delay={0.4} />
          </div>
          <div className="flex flex-col gap-2">
            <h3>Technos:</h3>
            <div className="flex flex-wrap gap-2">
              <HighlightText content="HTML" delay={0.6} />
              <HighlightText content="CSS" delay={0.8} />
              <HighlightText content="JS" delay={1} />
              <HighlightText content="REACT" delay={1.2} />
              <HighlightText content="NEXTJS" delay={1.4} />
              <HighlightText content="TAILWINDCSS" delay={1.6} />
            </div>
          </div>
          <div className=" self-center  md:text-2xl animate-pulse mt-4 capitalize text-center">
            <Button
              info="secundary"
              content="contacter par e-mail"
              href="mailto:matt.freelance.web@gmail.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About_index;
