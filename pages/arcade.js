import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/GlitchError.module.css';

export default function Arcade() {
  return (
    <div className={styles.glitchBg}>
      <Head>
        <title>Arcade | NeuroDissident</title>
      </Head>
      <div className={styles.glitchErrorBox}>
        <h1 className={styles.glitchTitle}>GLITCH IN THE ARCADE</h1>
        <p className={styles.glitchMsg}>
          <span className={styles.glitchText}>404.0xA1</span> <br/>
          <span className={styles.glitchTextAlt}>You found a portal to nowhere.<br/>Arcade is coming soon.<br/>But this isn't it.</span>
        </p>
        <Link href="/" legacyBehavior>
          <a className={styles.homeBtn}>🏠 Home</a>
        </Link>
      </div>
    </div>
  );
}
