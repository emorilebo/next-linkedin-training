import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emori Learning Next From LinkedIn</title>
        <meta
          name="description"
          content="I know I know, but we need to cover the bases as much as possible. #emoricoin"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Emori Covering the bases!</a>
        </h1>

        <p className={styles.description}>
          It gets better everyday <code className={styles.code}>trust me</code>
        </p>

        <div className={styles.grid}>
          <Link href="/learn/next" className={styles.card}>
            <h2>Learn Next &rarr;</h2>
            <p>Seriously though I think we should all learn NextJS, It comes with next level strength.</p>
          </Link>

          <Link href="/learn/next" className={styles.card}>
            <h2>Learn React &rarr;</h2>
            <p>Okay so React is a bit more old fashioned this days but then you've got to understand it, elseways.</p>
          </Link>

         

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
