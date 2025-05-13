import Head from 'next/head';
import styles from '../styles/Merch.module.css';

// Placeholder merch items
const merchItems = [
  {
    image: '/merch/Digital Siren.webp',
    title: 'Digital Siren // Command Center',
    description: 'AI cyberpunk operator art – apparel, stickers, and more.',
    link: 'https://www.redbubble.com/shop/ap/169755346?asc=u',
    store: 'Redbubble',
  },
  {
    image: '/merch/Sticker Pack 1.webp',
    title: 'Sticker Pack – Core Disruption Vol. 1',
    description: 'NeuroDissident sticker pack: Core Disruption Vol. 1.',
    link: 'https://www.redbubble.com/shop/ap/169567609?asc=u',
    store: 'Redbubble',
  },
  {
    image: '/merch/NeuroSplit.webp',
    title: 'NeuroSplit: Cyberpunk Biomech Girl',
    description: 'Biomech girl illustration – apparel, accessories, and more.',
    link: 'https://www.redbubble.com/shop/ap/169480428?asc=u',
    store: 'Redbubble',
  },
  {
    image: '/merch/Burger Bomshell.webp',
    title: 'Burger Bombshell: Flavor Explosion in the City',
    description: 'Cyberpunk burger art – prints, shirts, stickers, and more.',
    link: 'https://www.redbubble.com/shop/ap/169421648?asc=u',
    store: 'Redbubble',
  },
  {
    image: '/merch/Infernal Radiance.webp',
    title: 'Infernal Radiance',
    description: 'Infernal Radiance – cyberpunk fire and light artwork.',
    link: 'https://www.redbubble.com/shop/ap/169385359?asc=u',
    store: 'Redbubble',
  },
  {
    image: '/merch/Displate 1.webp',
    title: 'Cyber Dreams (Displate)',
    description: 'Limited edition metal poster – Displate exclusive.',
    link: 'https://displate.com/artist/neurodissident/cyber-dreams',
    store: 'Displate',
  },
];

export default function Merch() {
  return (
    <div className={styles.merchBg}>
      <Head>
        <title>Merch | NeuroDissident</title>
      </Head>
      <nav className={styles.stickyNav}>
        <a href="/" className={styles.homeLink}>🏠 Home</a>
      </nav>
      <main className={styles.merchMain}>
        <h1 className={styles.merchTitle}>NeuroDissident Merch</h1>
        <div className={styles.captionBlock}>
          Explore a curated selection of artwork from both inside and outside the NeuroDissident universe. Each piece is created through custom AI workflows, refined in Photoshop, and crafted with intention—not just prompts. These designs are available across a wide range of items including prints, shirts, stickers, and more. Every product is a fragment of the world we're building—made to be worn, displayed, or carried into yours.
        </div>
        <div className={styles.storeLinks}>
          <a href="https://redbubble.com/people/neurodissident/shop" target="_blank" rel="noopener noreferrer" className={styles.storeButton}>
            <img src="/signals/7.webp" alt="Redbubble" className={styles.storeIcon} />
            In addition to the items below, click here to view my full catalog on Redbubble.
          </a>
          <a href="https://displate.com/neurodissident" target="_blank" rel="noopener noreferrer" className={styles.storeButton}>
            <img src="/signals/8.webp" alt="Displate" className={styles.storeIcon} />
            Displate Shop
          </a>
        </div>
        <div className={styles.merchGrid}>
          {merchItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.merchCard}
            >
              <div className={styles.merchImgWrap}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.merchImg}
                  loading="lazy"
                />
              </div>
              <div className={styles.merchCardBody}>
                <h2 className={styles.merchCardTitle}>{item.title}</h2>
                <p className={styles.merchCardDesc}>{item.description}</p>
                <span className={styles.merchStoreTag}>{item.store}</span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
