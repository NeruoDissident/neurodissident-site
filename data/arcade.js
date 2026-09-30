export const games = [
  {
    collection: 'fractured-city', format: 'Single-prompt experiment · Survival colony sim', id: 'fractured-city', title: 'The Fractured City', version: 'V1',
    url: 'https://the-fractured-city.vercel.app/',
    source: 'https://github.com/NeruoDissident/The-Fractured-City',
    image: '/arcade/fractured-city.png',
    imageAlt: 'The Lantern settlement, three survivors, a ruined city map and survivor needs.',
    description: 'Keep a small society alive in a ruined city. Lead three founding survivors through nine persistent districts, scavenge 36 buildings, and grow the Lantern into a lasting community. Build, farm, craft, rescue, and work toward restoring a relay beacon.',
    device: 'PC — mouse and keyboard',
    controls: 'Click to inspect · Right-click to move · WASD to pan · Space to pause',
    tools: 'JavaScript · HTML / CSS · Canvas · Node.js build',
    note: 'Progress saves in your browser. Export a save to keep a portable backup.'
  },
  {
    collection: 'fractured-city', format: 'Single-prompt experiment · Survival colony sim', id: 'fractured-city-v2', title: 'Fractured City V2', version: 'V2',
    url: 'https://fractured-city-v2.vercel.app/',
    source: 'https://github.com/NeruoDissident/fractured-city-v2',
    image: '/arcade/fractured-city-v2.png',
    imageAlt: 'Harlow Street with three survivors inside an apartment block and scavenging controls.',
    description: 'Build up your block and defend it through raids and the night. Send survivors into enterable buildings, manage their needs, moods, skills and traits, and encounter 13 named persistent characters across a ruined city.',
    device: 'PC recommended for overview; mobile touch controls supported',
    controls: 'Mouse and keyboard · On touch: tap, drag, pinch and long-press to give orders',
    tools: 'JavaScript · HTML / CSS · Canvas · PWA / service worker',
    note: 'Autosaves in your browser. Supports home-screen installation and offline play after the first load.'
  },
  {
    id: 'the-night-run', collection: 'night-run',
    title: 'The Night Run', version: 'The Night Run',
    format: 'Turn-based survival roguelike',
    url: 'https://the-night-run-neon.vercel.app/',
    source: 'https://github.com/NeruoDissident/The-Night-Run',
    image: '/arcade/night-run-neon.png',
    imageAlt: 'A Street Kid explores Lowlight Blocks, with survival meters, a city map and nearby contacts.',
    description: 'Choose from six classes and survive eight procedural districts. Use stealth, tactical combat, crafting and faction alliances to shape your run. Find an escape, commit to a faction, or leave another life behind in the city.',
    device: 'PC or mobile — includes an eight-direction touch pad',
    controls: 'WASD / arrows to move · E to interact · Tab / F to target and attack · Touch movement and action buttons',
    tools: 'JavaScript · HTML / CSS · Canvas · Python build · PWA / service worker',
    note: 'Local autosaves with export/import. Installable for offline play after the first load. Permadeath ends the active run.'
  },
  {
    id: 'night-run', collection: 'night-run',
    title: 'Night Run', version: 'Night Run',
    format: 'Turn-based survival roguelike',
    url: 'https://night-run-eight.vercel.app/',
    source: 'https://github.com/NeruoDissident/Night-Run',
    image: '/arcade/night-run-eight.png',
    imageAlt: 'A pixel-art Street Kid explores The Last Light with gear, survival meters and a turn log.',
    description: 'One runner, eight procedural districts, and something waiting in the wiring. Develop a build across seven classes and fourteen specializations, balance survival with cybernetics and grafts, and navigate faction rivalries toward four escape routes and nine endings.',
    device: 'PC recommended for overview; touch controls also available',
    controls: 'WASD / arrows to move · Bump to attack or interact · Keyboard, mouse and touch controls',
    tools: 'JavaScript · HTML / CSS · Canvas · Web Audio · Node.js build · Python / Pillow sprites',
    note: 'Save and continue between sessions. Permadeath, past-run records and meta unlocks make each attempt part of a larger story.'
  },
  {
    id: 'wrath-of-carl', collection: 'experiments',
    title: 'The Wrath of Carl', version: 'Carl',
    stage: 'Concept prototype', format: 'Satirical driving arcade · Playable concept',
    url: 'https://wrath-of-carl.vercel.app/',
    source: 'https://github.com/NeruoDissident/wrath-of-carl',
    image: '/arcade/wrath-of-carl.png', imageWidth: 1258, imageHeight: 750,
    imageAlt: 'Carl patrols a top-down city, with marked traffic violations, an evidence panel and a wheel boot launcher.',
    summary: 'Minor infractions. Major consequences. Turn traffic-etiquette frustration into arcade slapstick.',
    description: 'Minor infractions. Major consequences. Patrol an open city, document selfish driving, and deliver absurd, slapstick enforcement. Take on six missions or roam in free patrol, unlocking tools and upgrading your vehicle. Inspired by my brother and our shared frustration with drivers who treat road rules as optional.',
    concept: 'A fully playable sketch of a bigger game idea. This prototype explores the premise and core loop; the larger game is still taking shape.',
    device: 'PC recommended; optional touch controls in landscape',
    controls: 'WASD / arrows to drive · Tab to select · Hold E for evidence · Space to enforce · Shift to boost',
    tools: 'JavaScript · HTML / CSS · Canvas · Web Audio',
    note: 'Progress saves in your browser. Export/import saves in Settings to move between browsers or deployment addresses.'
  },
  {
    id: 'neonferal', collection: 'experiments',
    title: 'Neon Feral', version: 'Neon Feral', stage: 'Playable experiment',
    format: 'Cyberpunk creature-collecting RPG',
    url: 'https://neonferal.vercel.app/',
    image: '/arcade/neonferal.png', imageWidth: 1258, imageHeight: 750,
    imageAlt: 'A runner and augmented stray explore the neon streets of Gutterlight, with pack and clinic controls.',
    summary: 'Collect augmented strays and break the city’s corporate control network.',
    description: 'The city has teeth. Explore three cyberpunk districts, battle and capture twelve species of augmented strays, and build a six-creature pack. Upgrade your companions, install implants, and defeat three wardens to disconnect the corporate control relays.',
    device: 'PC or mobile — keyboard, click-to-move and touch pad',
    controls: 'WASD / arrows or tap the street to move · E or Interact · Tap or click battle actions',
    tools: 'JavaScript · HTML / CSS · Canvas · Node.js build · PWA / service worker',
    note: 'Local autosaves and save export/import. Installable for offline play once the game reports it is ready.'
  },
  {
    id: 'raygun-depths', collection: 'experiments',
    title: 'Raygun Depths', version: 'Raygun Depths', stage: 'Playable experiment',
    format: 'First-person sci-fi dungeon crawler',
    url: 'https://raygun-depths.vercel.app/',
    source: 'https://github.com/NeruoDissident/raygun-depths',
    image: '/arcade/raygun-depths.png', imageWidth: 1258, imageHeight: 750,
    imageAlt: 'A first-person corridor aboard the Kestrel, with a four-person crew and retro movement controls.',
    summary: 'Four crew members. Three alien derelicts. Ray guns highly recommended.',
    description: 'Build a four-person crew and descend into three alien-infested derelicts orbiting Ceres. Explore eight procedural decks, find keycards and supplies, and use turn-based tactics against twelve enemy types. Return to Ceres Station to recover, trade and re-equip.',
    device: 'PC or mobile — touch buttons and swipe controls',
    controls: 'W / S to move · A / D to turn · Q / E to strafe · M for map · Touch arrows or swipes',
    tools: 'JavaScript · HTML / CSS · Canvas raycasting · Procedural pixel art and audio · PWA',
    note: 'Autosaves when docking and changing decks. Installable for offline play after the first load; saves stay in the current browser.'
  },
  {
    id: 'void-signal', collection: 'experiments',
    title: 'Void Signal', version: 'Void Signal', stage: 'Playable experiment',
    format: 'First-person sci-fi dungeon RPG',
    url: 'https://void-signal-eight.vercel.app/',
    source: 'https://github.com/NeruoDissident/void-signal',
    image: '/arcade/void-signal.png', imageWidth: 1258, imageHeight: 750,
    imageAlt: 'A retro first-person alien facility with a laser weapon, minimap and four specialist crew panels.',
    summary: 'Lead four specialists into alien facilities and silence the Choir Engine.',
    description: 'Take a Vanguard, Medic, Engineer and Scout through three procedural alien facilities. Recover security keys, manage supplies, develop your crew’s talents, and defeat the guardians in turn-based combat. Your mission ends at the Choir Engine.',
    device: 'PC or mobile — on-screen movement and combat controls',
    controls: 'W / S to move · A / D to strafe · Q / E to turn · Space to interact or fire · M for map',
    tools: 'JavaScript · HTML / CSS · Canvas 2D raycasting · Web Audio · PWA · OpenAI image generation (logo)',
    note: 'Progress autosaves locally. Installable and playable offline after the game reports “Offline ready.”'
  },
  {
    id: 'toxic-fishing', collection: 'experiments',
    title: 'Toxic Fishing', version: 'Toxic Fishing', stage: 'Playable experiment',
    format: 'First-person fishing · Collection and survival',
    url: 'https://toxic-fishing.vercel.app/',
    source: 'https://github.com/NeruoDissident/toxic-fishing',
    image: '/arcade/toxic-fishing.png', imageWidth: 1258, imageHeight: 750,
    imageAlt: 'A fishing rod over glowing green water at Coolant Pond 7, with cooling towers and a radiation dosimeter.',
    summary: 'Forty species, six contaminated waters, and one very unforgiving dosimeter.',
    description: 'Cast into irradiated waters and balance the promise of a rare catch against line tension and rising radiation. Log forty species across six locations, choose bait, and develop Angler, Scavenger and Hazmat skills. Know when to reel—and when to pack up.',
    device: 'PC or mobile — touch controls in portrait or landscape',
    controls: 'Hold and release Space or Cast · Space to hook and reel · A / D to look · C / K / B / M for menus',
    tools: 'JavaScript · HTML / CSS · Three.js · Procedural Canvas fish art · PWA',
    note: 'Progress saves on your device after each catch. Installable for offline play after loading.'
  }
];

export const collections = [
  {
    id: 'fractured-city',
    eyebrow: '01 / EVOLVING WORLDS',
    title: 'Fractured City',
    description: 'Two single-prompt takes on a city learning to survive. Both fully playable, both still in development.'
  },
  {
    id: 'night-run',
    eyebrow: '02 / SURVIVAL ROGUELIKES',
    title: 'Fractured City: Night Run',
    description: 'Two versions of the urban survival roguelike. One runner against the city. Fully playable, still evolving.'
  },
  {
    id: 'experiments', eyebrow: '03 / IDEAS AT PLAY',
    title: 'Experiments',
    description: 'Mini-games, one-shot experiments and playable ideas. Some are complete little loops; others are the beginnings of something bigger.'
  }];
