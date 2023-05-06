import { motion} from "framer-motion";
import ProjectCardV2 from "../card/ProjectCardV2";
import { projectArray } from "@/utils/data/projectArray";

type Props = {};

function Project_index({}: Props) {
  return (
    <section
      id="project_index"
      className="w-full  bg-slate-900 flex flex-col items-center justify-center  relative text-white overflow-hidden py-12 "
    >
      <h2 className="font-ChakraPetch text-xl md:self-start md:px-20">
        / Mes projets
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="w-full flex  gap-10 overflow-x-auto snap-x snap-mandatory py-12 md:flex-wrap md:justify-center pl-6 md:pl-0 "
      >

        {projectArray.map((item, i) => (
          <ProjectCardV2
            title={`- ${item.title} -`}
            content={item.content}
            technos={item.technos}
            src={item.src}
            alt={item.alt}
            href={item.href}
            key={i}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Project_index;
