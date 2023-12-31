import Head from "next/head";
import styles from "../styles/homeNoAuth.module.scss" 
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/components/homeNoAuth/presentationSection";

const HomeNoAuth = function () {
  return (
      <>
        <Head>
          <title>Onebitflix</title>
          <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
          <meta property="og:title" content="Onebitflix" key="title" />
          <meta name="description" content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil."></meta>
        </Head>
        <main>
          <HeaderNoAuth/>
          <PresentationSection/>
        </main>
      </>
);
};

export default HomeNoAuth;