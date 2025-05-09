// pages/comic.js
import Head from 'next/head';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import styles from '../styles/Home.module.css';

const comicImages = [
  // ACT I
  '/comic/act-1-page-0.webp',
  '/comic/act-1-page-1.webp',
  '/comic/act-1-page-2.webp',
  '/comic/act-1-page-3.webp',
  '/comic/act-1-page-4.webp',
  // ACT II
  '/comic/act-2-page-0.webp',
  '/comic/act-2-page-1.webp',
  '/comic/act-2-page-2.webp',
  '/comic/act-2-page-3.webp',
  // ACT III
  '/comic/act-3-page-0.webp',
  '/comic/act-3-page-1.webp',
  '/comic/act-3-page-2.webp',
  // ACT IV
  '/comic/act-4-page-0.webp'
];

export default function Comic() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>The Comic | NeuroDissident</title>
      </Head>
      <main className={styles.main}>
        <a href="/" className={styles.homeLink}>🏠 Home</a>
        <h1 className={styles.title}>NEURODISSIDENT COMIC</h1>
        <p className={styles.description}>Full comic viewer — click any page to expand</p>

        <div className={styles.signalGridRight}>
          {comicImages.map((src, i) => (
            <div
              key={i}
              className={styles.signalCard}
              onClick={() => {
                setPhotoIndex(i);
                setIsOpen(true);
              }}
              style={{ cursor: 'pointer' }}
            >
              <img src={src} alt={`Page ${i + 1}`} className={styles.signalImage} loading="lazy" />
            </div>
          ))}
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={comicImages[photoIndex]}
            nextSrc={comicImages[photoIndex + 1]}
            prevSrc={comicImages[photoIndex - 1]}
            enableZoom={true}
            enableNext={photoIndex < comicImages.length - 1}
            enablePrev={photoIndex > 0}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((prev) => Math.max(prev - 1, 0))
            }
            onMoveNextRequest={() =>
              setPhotoIndex((prev) => Math.min(prev + 1, comicImages.length - 1))
            }
          />
        )}
      </main>
    </div>
  );
}
