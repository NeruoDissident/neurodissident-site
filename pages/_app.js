import { useEffect } from 'react';
import '../styles/global.css';
import '../styles/About.module.css';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Set --vh to the actual viewport height in pixels
    function setVh() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);
  return <Component {...pageProps} />;
}
