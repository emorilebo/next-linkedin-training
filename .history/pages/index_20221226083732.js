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
        <p className={styles.description}>
          You wanna see contacts? <Link href=""></Link>
        </p>

        <div className={styles.grid}>
          <Link href="/learn/next" className={styles.card}>
            <h2>Learn Next &rarr;</h2>
            <p>
              Seriously though I think we should all learn NextJS, It comes with
              next level strength.
            </p>
          </Link>

          <Link href="/learn/react" className={styles.card}>
            <h2>Learn React &rarr;</h2>
            <p>
              React is a bit more old fashioned this days but then you've got to
              understand it, elseways, why next.
            </p>
          </Link>
          <Link href="/learn/vue" className={styles.card}>
            <h2>Learn Vue &rarr;</h2>
            <p>
              Vue is a bit more old fashioned this days but then you've got to
              understand it, elseways, why next.
            </p>
          </Link>
          <Link href="/learn/angular" className={styles.card}>
            <h2>Learn Angular &rarr;</h2>
            <p>
              Vue is a bit more old fashioned this days but then you've got to
              understand it, elseways, why next.
            </p>
          </Link>
          <Link href="/contact/" className={styles.card}>
            <h2>Learn Angular &rarr;</h2>
            <p>
              Vue is a bit more old fashioned this days but then you've got to
              understand it, elseways, why next.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
