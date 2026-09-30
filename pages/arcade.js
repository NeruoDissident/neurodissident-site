import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { games, collections } from '../data/arcade';
import styles from '../styles/Arcade.module.css';

const categoryHref = (id) => '/arcade?category=' + id;

function GameCard({ game }) {
  return (
    <article id={game.id} className={styles.card}>
      <a href={game.url} target="_blank" rel="noopener noreferrer" className={styles.imageLink} aria-label={'Play ' + game.title + ' (opens in a new tab)'}>
        <img src={game.image} alt={game.imageAlt} width={game.imageWidth || 1258} height={game.imageHeight || 622} />
        <span className={styles.imageLabel}>GAMEPLAY / {game.version}</span>
      </a>
      <div className={styles.cardBody}>
        <div className={styles.badges}><span>● Fully playable</span><span>{game.stage || 'In development'}</span></div>
        <h3>{game.title}</h3>
        <p className={styles.description}>{game.description}</p>
        {game.concept && <p className={styles.concept}>{game.concept}</p>}
        <dl className={styles.details}>
          <div><dt>Best played on</dt><dd>{game.device}</dd></div>
          <div><dt>Controls</dt><dd>{game.controls}</dd></div>
          <div><dt>Built with</dt><dd>{game.tools}</dd></div>
          <div><dt>Format</dt><dd>{game.format}</dd></div>
        </dl>
        <p className={styles.saveNote}>{game.note}</p>
        <div className={styles.actions}>
          <a className={styles.play} href={game.url} target="_blank" rel="noopener noreferrer">Play {game.version} ↗<span className={styles.srOnly}> (opens in a new tab)</span></a>
          <a className={styles.source} href={game.source} target="_blank" rel="noopener noreferrer">Source ↗<span className={styles.srOnly}> (opens in a new tab)</span></a>
        </div>
      </div>
    </article>
  );
}

export default function Arcade() {
  const router = useRouter();
  const selected = collections.find(collection => collection.id === router.query.category);
  const visibleGames = selected ? games.filter(game => game.collection === selected.id) : games;

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
          <a href="#games" className={styles.explore}>Explore the games ↓</a>
          <div className={styles.heroMark} aria-hidden="true">[ A_ ]</div>
        </section>
        <nav id="games" className={styles.categoryNav} aria-label="Game categories">
          <Link href="/arcade" scroll={false} aria-current={!selected ? 'page' : undefined}>All Games <span>{games.length}</span></Link>
          {collections.map(collection => (
            <Link key={collection.id} href={categoryHref(collection.id)} scroll={false} aria-current={selected?.id === collection.id ? 'page' : undefined}>
              {collection.id === 'night-run' ? 'Night Run' : collection.title}
              <span>{games.filter(game => game.collection === collection.id).length}</span>
            </Link>
          ))}
        </nav>
        <section className={styles.collection} aria-labelledby="collection-title">
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>{selected?.eyebrow || 'PICK YOUR NEXT SIGNAL'}</p><h2 id="collection-title">{selected?.title || 'All Games'}</h2></div>
            <span className={styles.count}>{String(visibleGames.length).padStart(2, '0')} PLAYABLE GAMES</span>
          </div>
          <p className={styles.collectionIntro}>{selected?.description || 'Browse the collection. Open a game’s details for controls, tools and the story behind it.'}</p>
          <div className={selected ? styles.grid : styles.overviewGrid}>
            {visibleGames.map(game => selected ? <GameCard key={game.id} game={game} /> : (
              <article key={game.id} className={styles.compactCard}>
                <Link href={categoryHref(game.collection) + '#' + game.id} className={styles.compactImage} aria-label={'View details for ' + game.title}>
                  <img src={game.image} alt={game.imageAlt} width={game.imageWidth || 1258} height={game.imageHeight || 622} />
                </Link>
                <div className={styles.compactBody}>
                  <p className={styles.eyebrow}>{collections.find(c => c.id === game.collection).title}</p>
                  <h3>{game.title}</h3>
                  <p>{game.summary || game.format}</p>
                  <div className={styles.badges}><span>● Fully playable</span><span>{game.stage || 'In development'}</span></div>
                  <div className={styles.compactActions}>
                    <Link href={categoryHref(game.collection) + '#' + game.id}>View details →</Link>
                    <a href={game.url} target="_blank" rel="noopener noreferrer" aria-label={'Play ' + game.title + ' (opens in a new tab)'}>Play ↗</a>
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
