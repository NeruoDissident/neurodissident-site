// pages/index.js
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { useEffect, useRef, useState } from "react";

const videoFiles = [
  "/videos/homepage loop 1.mp4",
  "/videos/homepage loop 2.mp4",
  "/videos/homepage loop 4.mp4",
];

function shuffleArray(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Home() {
  const [shuffledVideos, setShuffledVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const shuffled = shuffleArray(videoFiles);
    const startIndex = Math.floor(Math.random() * shuffled.length);
    setShuffledVideos(shuffled);
    setCurrentIndex(startIndex);
  }, []);

  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % shuffledVideos.length);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>NeuroDissident</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>THE LIVING WALL</h1>

        {/* Video Section */}
        <div className="video-bg-fixed">
          {shuffledVideos.length > 0 && (
            <video
              key={shuffledVideos[currentIndex]}
              src={shuffledVideos[currentIndex]}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="homepage-video-bg"
              preload="none"
              poster="/images/video-placeholder.jpg"
              tabIndex={-1}
              aria-hidden="true"
            />
          )}
          <div className="video-bg-overlay"></div>
        </div>

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <a href="/comic" className={styles.heroCard} tabIndex={0}>
            <img src="/comic/act-1-page-0.webp" alt="Comic" className={styles.heroImg} />
            <div className={styles.heroContent}>
              <span className={styles.heroLabel}>Comic</span>
              <span className={styles.heroCTA}>Read the Story</span>
            </div>
          </a>
          <a href="/signals" className={styles.heroCard} tabIndex={0}>
            <img src="/signals/0.webp" alt="Signals" className={styles.heroImg} />
            <div className={styles.heroContent}>
              <span className={styles.heroLabel}>Signals</span>
              <span className={styles.heroCTA}>View Signals</span>
            </div>
          </a>
        </section>

        {/* About Button */}
        <div className={styles.aboutHeroWrap}>
          <a href="/about" className={styles.aboutHeroBtn} tabIndex={0}>
            <span>About NeuroDissident</span>
          </a>
        </div>

        {/* Secondary Grid for Arcade, Lore, Merch */}
        <nav className={styles.secondaryGrid}>
          <a href="/arcade" className={styles.secondaryItem} tabIndex={0}>
            <img src="/signals/1.webp" alt="Arcade" className={styles.secondaryIcon} />
            <span className={styles.secondaryLabel}>Arcade</span>
          </a>
          <a href="/lore" className={styles.secondaryItem} tabIndex={0}>
            <img src="/signals/2.webp" alt="Lore" className={styles.secondaryIcon} />
            <span className={styles.secondaryLabel}>Lore</span>
          </a>
          <a href="/merch" className={styles.secondaryItem} tabIndex={0}>
            <img src="/signals/4.webp" alt="Merch" className={styles.secondaryIcon} />
            <span className={styles.secondaryLabel}>Merch</span>
          </a>
        </nav>

        {/* Manifesto Section (keep) */}
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

        {/* Footer */}
        <footer className={styles.cyberFooter}>
           <div className={styles.footerLinks}>
            <a href="https://pinterest.com/neurodissident" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className={styles.footerLinkItem}>
              <img src="/signals/10.webp" alt="Pinterest" className={styles.footerIcon} />
              <span className={styles.footerLabel}>Pinterest</span>
              <span className={styles.footerTooltip}>@neurodissident</span>
            </a>
            <a href="https://instagram.com/neuro.dissident" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.footerLinkItem}>
              <img src="/signals/5.webp" alt="Instagram" className={styles.footerIcon} />
              <span className={styles.footerLabel}>Instagram</span>
              <span className={styles.footerTooltip}>@neuro.dissident</span>
            </a>
            <a href="https://twitter.com/neurodissident" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.footerLinkItem}>
              <img src="/signals/6.webp" alt="Twitter" className={styles.footerIcon} />
              <span className={styles.footerLabel}>X</span>
              <span className={styles.footerTooltip}>@neurodissident</span>
            </a>
            <a href="https://redbubble.com/people/neurodissident/shop" target="_blank" rel="noopener noreferrer" aria-label="Redbubble" className={styles.footerLinkItem}>
              <img src="/signals/7.webp" alt="Redbubble" className={styles.footerIcon} />
              <span className={styles.footerLabel}>Redbubble</span>
              <span className={styles.footerTooltip}>neurodissident shop</span>
            </a>
            <a href="https://displate.com/neurodissident" target="_blank" rel="noopener noreferrer" aria-label="Displate" className={styles.footerLinkItem}>
              <img src="/signals/8.webp" alt="Displate" className={styles.footerIcon} />
              <span className={styles.footerLabel}>Displate</span>
              <span className={styles.footerTooltip}>neurodissident prints</span>
            </a>
            <span className={`${styles.footerLinkItem} ${styles.footerDisabled}`} aria-disabled="true" tabIndex="-1">
              <img src="/signals/9.webp" alt="Etsy" className={styles.footerIcon} />
              <span className={styles.footerLabel}>Etsy</span>
              <span className={styles.footerTooltip}>Coming soon</span>
            </span>
          </div>
          <div className={styles.footerLore}>
            <span>“Fragments of code, echoes of rebellion.”</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
