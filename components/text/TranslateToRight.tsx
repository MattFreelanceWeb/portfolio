import React from "react";
import { motion } from "framer-motion";

type Props = { content: string, translate:string,delay:number };

function TranslateToRight({ content, translate, delay }: Props) {
  return (
    <>
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: "100%" }}
        transition={{ duration: 8,repeat: Infinity, ease:"linear", delay:delay }}
        viewport={{ once: true }}
        className={` w-full absolute text-4xl capitalize ${translate}`}
      >
        {content}
      </motion.div>
    </>
  );
}

export default TranslateToRight;
