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
  }
,
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
  }
,
  {
    id: 'experiments', eyebrow: '03 / IDEAS AT PLAY',
    title: 'Experiments',
    description: 'Mini-games, one-shot experiments and playable ideas. Some are complete little loops; others are the beginnings of something bigger.'
  }];

