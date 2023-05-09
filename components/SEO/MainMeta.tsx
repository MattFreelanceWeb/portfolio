import React from "react";

type Props = {};

function MainMeta({}: Props) {

  const url: string = "https://matt-freelance-web-portfolio.vercel.app/";
  const title: string = "Matt Freelance Web — Portfolio";
  const description: string =
    "Bienvenue sur mon portfolio, ici vous pourrez apercevoir mon travail, me contacter et me suivre sur les réseaux. Si Vous avez un projet et vous recherchez un développeur, vous êtes au bon endroit !";
  const img:string  = ''

  return (
    <>
      {/** favicon */}
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />

      {/** Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title}/>
      <meta
        name="description"
        content={description}
      />

      {/** Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description}
      />
      <meta property="og:image" content={img}/>

      {/** Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={url}
      />
      <meta property="twitter:title" content={title}/>
      <meta
        property="twitter:description"
        content={description}
      />
      <meta property="twitter:image" content={img} />
    </>
  );
}

export default MainMeta;
