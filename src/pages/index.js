import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Services from "@/components/Services/Services";
import Contacts from "@/components/Contacts/Contacts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Legal Associates Center</title>
        <meta name="description" content="Организация юридических консультантов - Legal Associates Center" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Header />
        <Intro />
        <About />
        <Services />
        <Contacts />
        <Footer />
      </main>
    </>
  );
}
