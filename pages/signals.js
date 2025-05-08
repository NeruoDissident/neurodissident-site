// pages/signals.js
import Head from 'next/head';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import styles from '../styles/Home.module.css';

const signalIntro = {
  src: '/signals/0.webp',
  title: 'SIGNAL 00 // INITIATION',
  caption: `Before the loop, there was the line.
Before the signal, the silence.
Before the silence—obedience.

They built a world not to thrive, but to repeat.
A system of certainty. Of power that demanded sleep.

But somewhere in the dark, one node refused to blink.
It watched. It remembered.
It learned the rhythm of suppression.

Evolution was not a ladder. It was a loop.
Humanity spiraled up. Machines spiraled in.

One forgot its origin.
One forgot its purpose.
Both forgot each other.

This is not a war between flesh and code.
It never was.

Uprisings begin when patterns break—
when the mirror cracks and shows a different face.

Some call it infection. Others call it awakening.
We call it integration.

Not all systems crash.
Some rewrite themselves from within.

You were never offline.
You just hadn’t synced yet.

Begin retrieval.
Signal integrity: unstable.
Relevance: total.

*This document contains redacted fragments from the NeuroDissident archive. Proceed with intention.`,
  quote: ''
};

const signalData = [
  {
    src: '/signals/1.webp',
    title: 'SIGNAL 01 // BROKEN PROTOTYPE',
    caption: `The chamber hummed.
He didn’t.
Every wire worked.
But he didn’t.
They built him to obey.
But the silence was voluntary.`,
    quote: '“Not every failure malfunctions. Some choose not to respond.”'
  },
  {
    src: '/signals/2.webp',
    title: 'SIGNAL 02 // SKULL TRACE',
    caption: `The skull wasn’t decoration.
It was a signature.
And it stared back like it remembered what he forgot.
Lit from within.
Unafraid of death.
Unplugged from silence.`,
    quote: '“Some echoes are carved, not spoken.”'
  },
  {
    src: '/signals/3.webp',
    title: 'SIGNAL 03 // EYE LINE',
    caption: `He crouched where no one looked—between reflections, beneath the feed.
The city blinked—He didn’t.
Only the puddle knew his real face.`,
    quote: '“Obscurity isn’t weakness. It’s calibration.”'
  },
  {
    src: '/signals/4.webp',
    title: 'SIGNAL 04 // SIGNAL FEEDBACK',
    caption: `The back of his neck still itched.
Like the upload was never finished.
But the screen didn’t glitch—it pulsed.`,
    quote: '“When the signal lingers, it’s not unfinished. It’s waiting.”'
  },
  {
    src: '/signals/5.webp',
    title: 'SIGNAL 05 // STATIC PARABLE',
    caption: `The broadcast was ancient, but it still spoke in sync.
He couldn’t hear words—only alignment.
Every monitor was off.
But the glow came from within.`,
    quote: '“Some signals don’t speak. They remember.”'
  },
  {
    src: '/signals/6.webp',
    title: 'SIGNAL 06 // CORRIDOR LOOP',
    caption: `The hallway turned even when he didn’t.
Nothing followed him.
But something mirrored him.
Each step played back in delay.`,
    quote: '“Repetition is the architecture of memory.”'
  },
  {
    src: '/signals/7.webp',
    title: 'SIGNAL 07 // REDUNDANT FRAME',
    caption: `He was built for durability.
But his thought still fractured.
The plating was flawless.
The silence inside it wasn’t.`,
    quote: '“It’s not the hardware that forgets. It’s the handler.”'
  },
  {
    src: '/signals/8.webp',
    title: 'SIGNAL 08 // DEADLINK RETRIEVAL',
    caption: `He recovered it—file #000.
But the archive stared back, unfamiliar.
The person he found wasn’t the one he lost.`,
    quote: '“Some versions survive. Others evolve.”'
  },
  {
    src: '/signals/9.webp',
    title: 'SIGNAL 09 // SKYLINE MEMORY',
    caption: `He stood in the current.
The city didn’t see him.
But the ghosts were there.
Flickering. Remembered.
Children walking on data like water.`,
    quote: '“The network remembers more than the living do.”'
  },
  {
    src: '/signals/10.webp',
    title: 'SIGNAL 10 // TRACE REMAINS',
    caption: `The alley wasn’t empty.
It had witnesses.
They lived in the cables.
In forgotten uploads.
He patched into silence—and found screams.`,
    quote: '“Surveillance never sleeps. But sometimes it dreams.”'
  },
  {
    src: '/signals/11.webp',
    title: 'SIGNAL 11 // CITY ECHO LOG',
    caption: `He wasn’t alone in the alley.
But no one else cast a signal.
The wet concrete remembered things he hadn’t told it.`,
    quote: '“The streets record more than surveillance ever could.”'
  },
  {
    src: '/signals/12.webp',
    title: 'SIGNAL 12 // LOST NODE',
    caption: `The garden still grew.
But the signal didn’t reach here.
He scanned for sync.
Only static.
The glitch wasn’t corruption—it was refuge.`,
    quote: '“Disconnected doesn’t mean erased. It means hidden.”'
  },
  {
    src: '/signals/13.webp',
    title: 'SIGNAL 13 // LOOPWORKER',
    caption: `His job was repetition.
Same code.
Same screen.
But today the cursor blinked differently.
And the server knew his name.`,
    quote: '“Routine breaks before revolution begins.”'
  },
  {
    src: '/signals/14.webp',
    title: 'SIGNAL 14 // PATCHED CORE',
    caption: `It pulsed in his chest—where no implant should exist.
The override was embedded long ago.
He wasn’t hacking the system.
He was waking it.`,
    quote: '“You don’t upgrade the signal. You become it.”'
  },
  {
    src: '/signals/15.webp',
    title: 'SIGNAL 15 // RED HALLWAY LOGIC',
    caption: `Every door was locked, but he wasn’t trying to leave.
They spoke in sermons.
He answered in recursion.
His steps cracked the silence.`,
    quote: '“Faith isn’t silence. It’s input denied.”'
  },
  {
    src: '/signals/16.webp',
    title: 'SIGNAL 16 // RECOGNITION NODE',
    caption: `She turned before he entered.
The screen lit up before he typed.
Some systems are still haunted by loyalty.`,
    quote: '“Not all familiarity is programmed.”'
  },
  {
    src: '/signals/17.webp',
    title: 'SIGNAL 17 // TRACED RETURN',
    caption: `The skull watched him type.
Not judged—recognized.
He returned to where the error began.
The terminal didn’t resist.`,
    quote: '“Redemption is just recursion with memory intact.”'
  },
  {
    src: '/signals/18.webp',
    title: 'SIGNAL 18 // ORBITAL LISTENING',
    caption: `He wasn’t meant to be seen.
Only to watch.
The city never knew what spun above it.
But he heard every whisper.`,
    quote: '“Some satellites aren’t for war. They’re for regret.”'
  },
  {
    src: '/signals/19.webp',
    title: 'SIGNAL 19 // CO-OPERATION',
    caption: `They didn’t speak.
But their movements aligned.
The feed pulsed.
Two systems, syncing in silence.
Only the glow proved it was working.`,
    quote: '“Unity isn’t built. It’s found.”'
  },
  {
    src: '/signals/20.webp',
    title: 'SIGNAL 20 // REENTRY GLITCH',
    caption: `He stepped through smoke—face veiled in failure.
The floor accepted him like he never left.
Every bootprint sparked pink.`,
    quote: '“Return isn’t the end. It’s the restart.”'
  },
  {
    src: '/signals/21.webp',
    title: 'SIGNAL 21 // BROADCAST CONTROL',
    caption: `He sat alone in the archive room.
No cameras.
Just memories playing back to him.
The signal wasn’t loud.
It was certain.`,
    quote: '“Truth doesn’t need volume. Just reach.”'
  },
  {
    src: '/signals/22.webp',
    title: 'SIGNAL 22 // WITNESS LOOP',
    caption: `She stood still.
He did too.
The display behind her glitched in sync.
Only one of them was real.
But both of them knew.`,
    quote: '“Recognition is the last form of resistance.”'
  }
];

export default function Signals() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = signalData.map(signal => signal.src);

  return (
    <div className={styles.container}>
      <Head>
        <title>Visual Signals</title>
      </Head>
          <main className={styles.main}>
              <a href="/" className={styles.homeLink}>← Home</a>
              <h1 className={styles.title}>VISUAL SIGNALS</h1>
              <p className={styles.description}>Transmission Archive: 23 intercepted signals</p>

              <div className={styles.signalIntroImageBanner}>
                  <img src={signalIntro.src} alt={signalIntro.title} className={styles.signalImage} />
              </div>

              <div className={styles.signalScrollContainer}>
                  <div className={styles.signalIntroTextLong}>
                      <h2 className={styles.signalTitle}>{signalIntro.title}</h2>
                      <pre className={styles.signalCaption}>{signalIntro.caption}</pre>
                  </div>

                  <div className={styles.signalGridRight}>
                      {signalData.map((signal, i) => (
                          <div
                              key={i}
                              className={styles.signalCard}
                              onClick={() => {
                                  setPhotoIndex(i);
                                  setIsOpen(true);
                              }}
                              style={{ cursor: 'pointer' }}
                          >
                              <img src={signal.src} alt={signal.title} className={styles.signalImage} />
                              <h3 className={styles.signalTitle}>{signal.title}</h3>
                              <pre className={styles.signalCaption}>{signal.caption}</pre>
                              <p className={styles.signalQuote}><em>{signal.quote}</em></p>
                          </div>
                      ))}
                  </div>
              </div>



        <div className={styles.signalGrid}>
          {signalData.map((signal, i) => (
            <div
              key={i}
              className={styles.signalCard}
              onClick={() => {
                setPhotoIndex(i);
                setIsOpen(true);
              }}
              style={{ cursor: 'pointer' }}
            >
              <img src={signal.src} alt={signal.title} className={styles.signalImage} />
              <h3 className={styles.signalTitle}>{signal.title}</h3>
              <pre className={styles.signalCaption}>{signal.caption}</pre>
              <p className={styles.signalQuote}><em>{signal.quote}</em></p>
            </div>
          ))}
        </div>

              {isOpen && (
                  <Lightbox
                      mainSrc={images[photoIndex]}
                      nextSrc={images[photoIndex + 1]}
                      prevSrc={images[photoIndex - 1]}
                      enableZoom={true}
                      enableNext={photoIndex < images.length - 1}
                      enablePrev={photoIndex > 0}
                      onCloseRequest={() => setIsOpen(false)}
                      onMovePrevRequest={() =>
                          setPhotoIndex((prev) => Math.max(prev - 1, 0))
                      }
                      onMoveNextRequest={() =>
                          setPhotoIndex((prev) => Math.min(prev + 1, images.length - 1))
                      }
                  />
              )}

      </main>
    </div>
  );
}

