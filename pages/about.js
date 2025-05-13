import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.aboutBg}>
      <Head>
        <title>About NeuroDissident</title>
      </Head>
      <nav className={styles.stickyNav}>
        <a href="/" className={styles.homeLink}>🏠 Home</a>
      </nav>
      <main className={styles.aboutMain}>
        <h1 className={styles.aboutTitle}>About NeuroDissident</h1>
        <div className={styles.aboutCardsGrid}>
          {/* 1. From Paper Comics to Generative Workflows (square: vertical) */}
          <section className={styles.aboutCardVertical}>
            <div className={styles.aboutCardImageVertical}>
              <img 
                src="/about/From Paper Comics to Generative Workflows.webp" 
                alt="Hand-drawn comic and generative workflow art" 
                className={styles.aboutCardImgSquare}
              />
            </div>
            <div className={styles.aboutCardTextVertical}>
              <h2 className={styles.cardTitle}>🎨 From Paper Comics to Generative Workflows</h2>
              <p>I’ve always been into comics. I used to draw my own stories by hand—folded parchment, sketched panels, stapled covers. Just personal projects, but they were mine.<br/><br/>
              In September 2024, I started exploring open-source generative AI tools. That’s when I discovered ComfyUI and realized AI could be more than just typing prompts—it could be a true creative process. I learned how to build workflows, control outputs, and guide images through every stage: upscaling, inpainting, retouching, and final edits in Photoshop.<br/><br/>
              That changed everything. AI became part of how I made things—not as a shortcut, but as a system I worked with. It wasn’t about the results alone—it was about building the process itself.</p>
            </div>
          </section>

          {/* 2. Discovery and Growth (wide: horizontal) */}
          <section className={styles.aboutCardHorizontal}>
            <div className={styles.aboutCardImageHorizontal}>
              <img 
                src="/about/Discovery and Growth.webp" 
                alt="Discovery and Growth - AI learning artwork" 
                className={styles.aboutCardImgWide}
              />
            </div>
            <div className={styles.aboutCardTextHorizontal}>
              <h2 className={styles.cardTitle}>🧠 Discovery and Growth</h2>
              <p>In October 2024, I started what would become the NeuroDissident project. I had no coding experience. I’d never written a script, built a website, or developed a game. But working with AI let me learn in real time. I didn’t just use it—I collaborated with it.<br/><br/>
              With GPT-4 and multimodal LLMs, I started creating everything with AI support: writing, coding, editing, organizing, deploying. This partnership let me act as a creative director across every part of the workflow.</p>
            </div>
          </section>

          {/* 3. The Birth of NeuroDissident (split: horizontal) */}
          <section className={styles.aboutCardHorizontal}>
            <div className={styles.aboutCardImageHorizontalSplit}>
              <img 
                src="/about/The Birth of NeuroDissident.webp" 
                alt="The Birth of NeuroDissident - glitch portrait" 
                className={styles.aboutCardImgSquare}
              />
              <img 
                src="/about/The Birth of NeuroDissident 2.webp" 
                alt="The Birth of NeuroDissident - alternate version" 
                className={styles.aboutCardImgSquare}
              />
            </div>
            <div className={styles.aboutCardTextHorizontal}>
              <h2 className={styles.cardTitle}>🚀 The Birth of NeuroDissident</h2>
              <p>NeuroDissident began as a character, then became a concept. He represents the interface—the space between human and machine. Not just metaphorically, but technically, visually, and narratively.<br/><br/>
              He can exist in code, in art, in story, in glitch. He’s the product of everything I’ve made with AI, and the voice that threads it all together.</p>
            </div>
          </section>

          {/* 4. The Work (tall: vertical) */}
          <section className={styles.aboutCardVertical}>
            <div className={styles.aboutCardImageVertical}>
              <img 
                src="/about/The Work.webp" 
                alt="The Work - creative AI pipeline" 
                className={styles.aboutCardImgTall}
              />
            </div>
            <div className={styles.aboutCardTextVertical}>
              <h2 className={styles.cardTitle}>🛠️ The Work</h2>
              <p>Since then, I’ve:<br/>
              – Built and deployed a working website<br/>
              – Written and structured an original comic book<br/>
              – Created custom AI image workflows (upscaling, inpainting, retouching)<br/>
              – Designed browser-based mini-games and apps<br/>
              – Managed full creative pipelines across multiple media<br/>
              I didn’t know how to do any of this six months ago. I learned it all by collaborating with AI—step by step.</p>
            </div>
          </section>

          {/* 5. Why It Matters (wide: horizontal, with overlay) */}
          <section className={styles.aboutCardHorizontal}>
            <div className={styles.aboutCardImageHorizontalOverlay}>
              <img 
                src="/about/Why It Matters.webp" 
                alt="Why It Matters - AI and human collaboration art" 
                className={styles.aboutCardImgWide}
              />
              <img 
                src="/about/Random.webp" 
                alt="Random - creative glitch art" 
                className={styles.aboutCardImgSmallOverlay}
              />
            </div>
            <div className={styles.aboutCardTextHorizontal}>
              <h2 className={styles.cardTitle}>🔍 Why It Matters</h2>
              <p>This isn’t just a personal project—it’s proof of what happens when a human works <em>with</em> AI, across all mediums.<br/><br/>
              I’m not using AI to replace creativity—I’m using it to amplify it. NeuroDissident is a live demonstration of the next generation of creative work. It’s not automation. It’s augmentation.<br/><br/>
              And this is just the beginning.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
