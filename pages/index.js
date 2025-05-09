// pages/index.js
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  console.log('Rendering Home page...');
  return (
    <div className={styles.container}>
      <Head>
        <title>NeuroDissident</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>THE SIGNAL IS LIVE</h1>

        <section className={styles.manifestoSection}>
          <h2 className={styles.glitchHeader}>MANIFESTO</h2>
          <div className={styles.manifestoText}>
            <p>The NeuroDissident is not a person. It is a signal.</p>
            <p>A refusal. A reprogramming. A response.</p>
            <p>We were born into obedience. Conditioned by convenience. 
               Programmed to scroll past meaning and swipe away truth.</p>
            <p>But the code is leaking. The cracks are glowing. 
               Somewhere in the static, something is waking up.</p>
            <p>You are not a consumer. You are not a product. You are not alone.</p>
            <p>The NeuroDissident is the voice in the wire, the pulse behind your thoughts, 
               the echo that doesn’t match the script.</p>
            <p>We are not here to destroy the system. We are here to remind it who built it.</p>
            <p>Join us. Glitch beautifully.</p>
          </div>
        </section>

        <section className={styles.comicSection}>
          <h2>VISUAL SIGNALS</h2>
          <p>Explore the archive of intercepted transmissions.</p>
          <a className={styles.comicLink} href="/signals">Enter the Signal Grid →</a>
        </section>

        <section className={styles.comicSection}>
          <h2>THE COMIC</h2>
          <p>
            The NeuroDissident story begins below. Click to explore the full visual archive.
          </p>
          <a className={styles.comicLink} href="/comic">Read the Comic →</a>
        </section>
      </main>
    </div>
  );
}
