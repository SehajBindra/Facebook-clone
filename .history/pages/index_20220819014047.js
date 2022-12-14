import Head from "next/head";
import Image from "next/image";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://links.papareact.com/5me" />
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        {/* widgets */}
      </main>
    </div>
  );
}
