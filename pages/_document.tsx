import MainMeta from "@/components/SEO/MainMeta";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="fr"
      className="bg-slate-900/80 scroll-smooth scrollbar-track-inherit scrollbar-thumb-Primary scrollbar-thumb-rounded-full scrollbar-thin"
    >
      <Head >
        <MainMeta/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
