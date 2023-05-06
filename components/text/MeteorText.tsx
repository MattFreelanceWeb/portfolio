import React from "react";
import { motion } from "framer-motion";

type Props = { content: string, delay:number };

function MeteorText({ content,delay }: Props) {
  let contentArray: string[] = content.split("");

  return (
    <div className="flex items-center ">
      {contentArray.map((item, i) => (
        <motion.span
          initial={{ x: -100, y: -100, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ delay: (delay+(i/10)) }}
          viewport={{ once: true }}
          key={i}
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}

export default MeteorText;
