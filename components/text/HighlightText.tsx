import React from "react";
import { motion } from "framer-motion";

type Props = { content: string, delay?:number };

function HighlightText({ content,delay }: Props) {

  if(!delay){
    delay=0
  }

  return (
    <div className=" relative rounded-full z-10 text-white px-2 ">
      <motion.span
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay:delay }}
        viewport={{ once: true }}
        className=" bg-Primary absolute bottom-[0.5px] right-[0.5px] rounded-md  w-full h-full  -z-10  "
      ></motion.span>
      {content}
    </div>
  );
}

export default HighlightText;
