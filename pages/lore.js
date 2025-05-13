import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/GlitchError.module.css';

export default function Lore() {
  return (
    <div className={styles.glitchBg}>
      <Head>
        <title>Lore | NeuroDissident</title>
      </Head>
      <div className={styles.glitchErrorBox}>
        <h1 className={styles.glitchTitle}>ACCESS DENIED</h1>
        <p className={styles.glitchMsg}>
          <span className={styles.glitchText}>ERROR 0x7E</span> <br/>
          <span className={styles.glitchTextAlt}>This fragment is corrupted.<br/>Lore is under construction.<br/>You shouldn't be here... yet.</span>
        </p>
        <Link href="/" legacyBehavior>
          <a className={styles.homeBtn}>🏠 Home</a>
        </Link>
      </div>
    </div>
  );
}
