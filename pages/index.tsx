import { Inter } from "next/font/google";
import Hero_index from "@/components/section/Hero_index";
import About_index from "@/components/section/About_index";
import Project_index from "@/components/section/Project_index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-hidden ">
      <Hero_index />
      <About_index />
      <Project_index />
    </main>
  );
}
