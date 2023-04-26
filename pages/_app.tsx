import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


// TODO :

// 1) installation des dépendances -> state: todo
// - tailwind-scrollbar : https://www.npmjs.com/package/framer-motion?activeTab=readme
// - framer-motion : https://www.npmjs.com/package/tailwind-scrollbar
// - react-ionicons : https://www.npmjs.com/package/react-ionicons
// - react-lottie-player : https://www.npmjs.com/package/react-lottie-player

// 2) paramétrer son thème
// - font : Main: poppins | h2 && carte de service: Bruno Ace
// - couleurs : #03B4BA (turquoise fluo) #305A5E(premier dégradé) #162F34 (deuxième dégradé) #121D21 (troisième dégradé) #AA9D9A(main BG)

// 3) créer la structure du site (pages) -> state: todo
// ref: https://whimsical.com/landing-page-mockup-2vLxzmeexPprmSdCrREioa
// - Mentions légales
// - Vie privée
// - index
// - projets
// - [projet] ???
// - 404
// - comingSoon

// 4) créer les composants adéquats (MOBILE FIRST !!!) : -> state: todo
// **** essentiel ****
// - header (nav)
// - button
// - tag
// - carte de projet
// - carte de service
// - icone réseaux sociaux
// - défilement clients
// - Revue de presse
// - contact
// - footer

// **** caviar ****
// - appartition au scroll
// - mots surlignés au scroll
// - effet glitch du texte à l'apparition
// - effet parallax
// - caroussel au scroll
// - curseur perso qui change la couleur du texte au survol et s'agrandit légèrement
// - traduction du site en plusieurs langues
// - pixelistaion des images au placeholder

// 5) créer une API piour gérer le contenu du site. : -> state: todo
// - création d'une API avec STRAPI :headless CMS
// - appel à l'api côté front

// 6) optimisation SEO : -> state: todo
// - optimisation du HEAD
// - google analytics
// - cookie policy
// - sitemap
// - verification via chrometools (wave, lighthosue, etc.)

// 7) héberger le porojet et permettre l'intégration continue : -> state: todo
// - déploiment sur VERCEL Back et Front