import Head from 'next/head';
import Link from 'next/link';
import { games } from '../data/arcade';
import styles from '../styles/Arcade.module.css';

export default function Arcade() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Arcade | NeuroDissident</title>
        <meta name="description" content="Enter the NeuroDissident arcade. Play evolving worlds, survival experiments, and browser games." />
      </Head>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>NEURO<span>DISSIDENT</span></Link>
        <Link href="/" className={styles.back}>← Back to the living wall</Link>
      </header>
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="arcade-title">
          <p className={styles.eyebrow}>INTERACTIVE SIGNALS / 001</p>
          <h1 id="arcade-title">ENTER THE<br /><span>ARCADE.</span></h1>
          <p className={styles.intro}>Worlds in progress. Loops worth getting lost in.<br />Pick a signal. See where it takes you.</p>
          <a href="#fractured-city" className={styles.explore}>Explore the games ↓</a>
          <div className={styles.heroMark} aria-hidden="true">[ A_ ]</div>
        </section>
        <section id="fractured-city" className={styles.collection} aria-labelledby="collection-title">
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>01 / EVOLVING WORLDS</p><h2 id="collection-title">Fractured City</h2></div>
            <span className={styles.count}>{String(games.length).padStart(2, '0')} PLAYABLE VERSIONS</span>
          </div>
          <p className={styles.collectionIntro}>Two single-prompt takes on a city learning to survive. Both fully playable, both still in development.</p>
          <div className={styles.grid}>
            {games.map((game) => (
              <article key={game.id} className={styles.card}>
                <a href={game.url} target="_blank" rel="noopener noreferrer" className={styles.imageLink} aria-label={'Play ' + game.title + ' (opens in a new tab)'}>
                  <img src={game.image} alt={game.imageAlt} width="1258" height="622" />
                  <span className={styles.imageLabel}>GAMEPLAY / {game.version}</span>
                </a>
                <div className={styles.cardBody}>
                  <div className={styles.badges}><span>● Fully playable</span><span>In development</span></div>
                  <h3>{game.title}</h3>
                  <p className={styles.description}>{game.description}</p>
                  <dl className={styles.details}>
                    <div><dt>Best played on</dt><dd>{game.device}</dd></div>
                    <div><dt>Controls</dt><dd>{game.controls}</dd></div>
                    <div><dt>Built with</dt><dd>{game.tools}</dd></div>
                    <div><dt>Format</dt><dd>Single-prompt experiment · Survival colony sim</dd></div>
                  </dl>
                  <p className={styles.saveNote}>{game.note}</p>
                  <div className={styles.actions}>
                    <a className={styles.play} href={game.url} target="_blank" rel="noopener noreferrer">Play {game.version} ↗<span className={styles.srOnly}> (opens in a new tab)</span></a>
                    <a className={styles.source} href={game.source} target="_blank" rel="noopener noreferrer">Source ↗<span className={styles.srOnly}> (opens in a new tab)</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <footer className={styles.footer}><span>NEURODISSIDENT / ARCADE</span><span>Glitch beautifully. Play curiously.</span></footer>
      </main>
    </div>
  );
}
