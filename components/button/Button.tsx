import Link from "next/link";
import React, {  useState } from "react";

type Props = {
  href?: string;
  ariaLabel?: string;
  content?: string;
  info?: "primary" | "secundary" | "navbar";
};

function Button({ href, ariaLabel, content, info }: Props) {
  // state qui capture le click du boutton
  const [toggle, setToggle] = useState(false);

  // paramètre de base du bouton
  if (!href) {
    href = "#";
  }
  if (!ariaLabel) {
    ariaLabel = "un bouton tout à fait banal";
  }
  if (!content) {
    content = "Click";
  }
  if (!info) {
    info = "primary";
  }

  // fonction qui permet de remettre à false le click après un certain interval afin d'arretter l'animation des cercles
  const animateClick = () => {
    setToggle(!toggle);
    setTimeout(() => {
      setToggle(false);
    }, 300);
  };

  // fonction qui permet de modifier l'aspect du bouton selon la props "info"
  const defineAspect = (info: Props["info"]) => {
    let tailwindClass: string = "";

    switch (info) {
      case "primary":
        tailwindClass =
          "bg-Primary/90 hover:bg-Primary text-white focus:ring-Primary/40";
        break;
      case "secundary":
        tailwindClass =
          "hover:bg-Secundary text-secundary hover:text-white focus:ring-Secundary/40 ";
        break;
      case "navbar" :
        tailwindClass= 'hover:bg-Secundary/50 text-white focus:ring-Secundary/50'
        break
    }
    return tailwindClass;
  };

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`w-full flex items-center justify-center rounded-lg py-2 px-12 text-bold font-Poppins focus:ring-offset-2 focus:ring-2 active:scale-95 duration-300 overflow-hidden relative 
      ${defineAspect(info)} `}
      onClick={() => {
        animateClick();
      }}
    >
      {toggle && (
        <>
          <div className="bg-white/30 w-20 h-20 translate-x-5 absolute z-20 rounded-full scale-50 animate-ping" />
          <div className="bg-white/20 w-32 h-32 absolute z-10 rounded-full scale-50 animate-ping" />
        </>
      )}
      <div className="z-10">{content}</div>
    </Link>
  );
}

export default Button;
