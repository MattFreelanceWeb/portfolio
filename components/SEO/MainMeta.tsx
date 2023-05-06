import React from "react";

type Props = {};

function MainMeta({}: Props) {
    // todo faire des variables pour le meta title, la meta description, et l'image du site


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
      <title>Matt Freelance Web — Portfolio</title>
      <meta name="title" content="Matt Freelance Web — Portfolio" />
      <meta
        name="description"
        content="Bienvenue sur mon portfolio, ici vous pourrez apercevoir mon travail, me contacter et me suivre sur les réseaux. Si Vous avez un projet et vous recherchez un développeur, vous êtes au bon endroit !"
      />

      {/** Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content="Matt Freelance Web — Portfolio" />
      <meta
        property="og:description"
        content="Bienvenue sur mon portfolio, ici vous pourrez apercevoir mon travail, me contacter et me suivre sur les réseaux. Si Vous avez un projet et vous recherchez un développeur, vous êtes au bon endroit !"
      />
      <meta
        property="og:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      />

      {/** Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content="Matt Freelance Web — Portfolio" />
      <meta
        property="twitter:description"
        content="Bienvenue sur mon portfolio, ici vous pourrez apercevoir mon travail, me contacter et me suivre sur les réseaux. Si Vous avez un projet et vous recherchez un développeur, vous êtes au bon endroit !"
      />
      <meta
        property="twitter:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      />
    </>
  );
}

export default MainMeta;