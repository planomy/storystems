const stemCategories = {
  action: {
    easier: [
      "Stepping into the room,",
      "Taking a deep breath,",
      "Reaching for the handle,",
      "Turning the corner,",
      "Moving toward the light,",
      "Walking across the floor,",
      "Pausing at the doorway,",
      "Rushing down the path,",
      "Lifting the old box,",
      "Leaning on the wall,",
      "Climbing the back steps,",
      "Swinging the gate open,",
      "Kneeling by the table,",
      "Pushing through the crowd,",
      "Bracing in the wind,",
      "Slipping through the gap,",
      "Tracing a finger along the map,",
      "Gripping the rail tightly,",
      "Ducking under the beam,",
      "Steadying both hands,"
    ],
    harder: [
      "Threading through the half-light,",
      "Squaring against the storm,",
      "Crossing the threshold unflinching,",
      "Advancing on instinct alone,",
      "Cutting across the hushed hall,",
      "Driving forward through the crush,",
      "Pressing on through warning bells,",
      "Swinging wide past broken chairs,",
      "Striding toward the narrow exit,",
      "Pivoting with measured control,",
      "Forcing a path through shadows,",
      "Bracing against rising panic,",
      "Closing the distance quickly,",
      "Guiding the blade back home,",
      "Dropping low behind the counter,",
      "Stepping over splintered glass,",
      "Wrenching the window loose,",
      "Holding position by the stairwell,",
      "Breaking into a ragged sprint,",
      "Setting the plan in motion,"
    ]
  },
  description: {
    easier: [
      "In addition to dark",
      "Around her neck,",
      "Her athletic build",
      "Even though her clothing",
      "People mostly appreciated",
      "A distinct feature",
      "Brushing his fringe from view,",
      "Despite her age,",
      "Her expression spoke of",
      "Eyes like ice pierced",
      "Wearing only",
      "Under a light blazer",
      "People noticed her steady gaze,",
      "A disarming smile greeted",
      "Brushing her sleeve,",
      "Despite fearful eyes,",
      "With ink-stained, restless fingers",
      "Without warning, a colder stare",
      "Except for that trembling jaw,",
      "Instead of charm,"
    ],
    harder: [
      "Beneath the rafters, ash-like dust,",
      "Outside, pooled silence,",
      "Along the stonework, thin winter light,",
      "Next to the hearth, stale rain-air,",
      "Behind the curtain, blade-like moonlight,",
      "Above the rooftops, iron thunderheads,",
      "Through the atrium, broken echoes,",
      "Elsewhere, broken echoes lingered,",
      "Between the pillars, layered shadows,",
      "Over the courtyard, ivy-clutched brick,",
      "Beyond the ridge, unraveling smoke,",
      "Under the archway, trembling brass hinges,",
      "Along the riverbank, mist-bent reeds,",
      "Near the altar, uncertain faces,",
      "Against the horizon, stitched lightning,",
      "Past the gate, rain-bright gravel,",
      "Upstairs, breathing stone,",
      "Across the floorboards, restless drafts,",
      "Beside the staircase, dulled varnish,",
      "Within the glass case, shadowed silver,",
      "On the valley rim, bruised dawn,"
    ]
  },
  thinking: {
    easier: [
      "Back to that night,",
      "From years ago,",
      "A slideshow of memories,",
      "From childhood,",
      "From that first mistake,",
      "Her family always said,",
      "At the back of old thoughts,",
      "A moment long before surfaced as",
      "The aroma reminded her of,",
      "Because of that argument,",
      "Behind old choices,",
      "From the beginning,",
      "Past promises meant",
      "From that season,",
      "Within old scars,",
      "Beyond memory,",
      "Memories of,",
      "Through hindsight,",
      "Looking back,",
      "Across once-forgotten moments,"
    ],
    harder: [
      "In this moment, priorities reordering,",
      "Under present pressure, colder logic,",
      "Within this silence, an argument unfolding,",
      "At thought's edge, immediate risk,",
      "Between instinct and evidence, a fracture,",
      "Across his mind, consequences stacking,",
      "His brow creased when",
      "Hesitant now, she considered",
      "With grim precision, trade-offs exposed,",
      "With deliberate clarity, his next move,",
      "In real time, assumptions collapsing,",
      "Two choices stared at him:",
      "Amid the noise, usable logic,",
      "Inside the moment, one premise standing,",
      "Under this weight, options narrowing,",
      "At the center, a live calculation,",
      "Within seconds, a new angle,",
      "In plain sight, hidden consequence,",
      "Against the clock, cleaner judgment,",
      "Right now, the pattern undeniable,"
    ]
  },
  feeling: {
    easier: [
      "Relief washed over him,",
      "Hope flickered in him,",
      "Pride lifted in him,",
      "Courage steadied him,",
      "Calm returned to him,",
      "Gratitude warmed him,",
      "Determination anchored him,",
      "Strength rose in him,",
      "A quiet joy surfaced,",
      "Confidence settled in slowly,",
      "Peace moved through him,",
      "Excitement sparked in his chest,",
      "Trust opened in him,",
      "Resolve sharpened in him,",
      "Optimism brightened his outlook,",
      "Comfort found him at last,",
      "Relief softened his breathing,",
      "Wonder stirred inside him,",
      "Assurance steadied his pulse,",
      "Happiness broke through,"
    ],
    harder: [
      "Dread coiled beneath his ribs,",
      "Panic throbbed at his pulse,",
      "Grief opened under his breath,",
      "Longing tightened in his throat,",
      "Bitterness drifted through him,",
      "Shame weighed along his spine,",
      "Rage sparked behind his teeth,",
      "Sorrow hollowed through him,",
      "Loneliness followed close behind him,",
      "Unease paced circles in him,",
      "Guilt rang through him like metal,",
      "Uncertainty trembled under his skin,",
      "Ache stayed rooted in him,",
      "Numbness spread behind his eyes,",
      "Regret gnawed at him quietly,",
      "Despair settled into his bones,",
      "Frustration tightened his chest,",
      "Doubt shadowed every thought,",
      "Fear pressed against his voice,",
      "Emptiness widened within him,"
    ]
  },
  atmosphere: {
    easier: [
      "Inside the room, rising heat,",
      "Through the hallway, echoing steps,",
      "Around the table, uneasy silence,",
      "By the doorway, held breath,",
      "Near the ceiling, humming light,",
      "Across the floorboards, creeping cold,",
      "Under the lamp, nervous shadows,",
      "Beside the window, quiet tapping,",
      "Behind the curtain, faint movement,",
      "Within the walls, muffled voices,",
      "Rattling through the pipes,",
      "Shivering under fluorescent light,",
      "Drifting through stale air,",
      "Creaking along the rafters,",
      "Flickering across cracked tiles,",
      "Silence thickened,",
      "Floorboards groaned,",
      "Glass trembled,",
      "Laughter died,",
      "Air tightened,"
    ],
    harder: [
      "Across the valley, unraveling thunder,",
      "Over the marsh, ashen moonlight,",
      "Along the ridge, slate-worrying wind,",
      "Beyond the courtyard, stamping horses,",
      "Across the harbor, low horn calls,",
      "Under the storm front, wire-tight air,",
      "Around the house, scraping branches,",
      "Through the alley, rushing runoff,",
      "Past the treeline, rising fog,",
      "Near the quarry, waking machinery,",
      "Whistling over black rooftops,",
      "Smearing across the skyline,",
      "Shuddering through power lines,",
      "Howling beyond the paddocks,",
      "Rolling over the wheat fields,",
      "Rain pounded,",
      "Lightning split,",
      "Sirens carried,",
      "Branches thrashed,",
      "Mist swallowed,"
    ]
  },
  story: {
    easier: [
      "Since childhood,",
      "That morning,",
      "Until now,",
      "Back then,",
      "Even then,",
      "All along,",
      "Much later,",
      "From the start,",
      "Before dawn,",
      "At first light,",
      "By midnight,",
      "Soon after,",
      "Years earlier,",
      "Long before tonight,",
      "At that moment,",
      "From then on,",
      "By sunrise,",
      "In another life,",
      "By the time,",
      "Looking back,"
    ],
    harder: [
      "By accident,",
      "In secret,",
      "Under pressure,",
      "Against the odds,",
      "Without warning,",
      "For reasons unknown,",
      "After one bad choice,",
      "Following the accident,",
      "In failure's aftermath,",
      "During negotiations,",
      "After public defeat,",
      "Under scrutiny,",
      "By design,",
      "In truth,",
      "Because of one promise,",
      "Amid growing tension,",
      "From inherited grief,",
      "Against precedent,",
      "With no witness present,",
      "Beyond official reports,",
      "As it happened,"
    ]
  }
};

const dualCategoryLabels = {
  action: { left: "Easier", right: "Harder" },
  description: { left: "Character", right: "Setting" },
  thinking: { left: "Past", right: "Present" },
  feeling: { left: "Positive", right: "Negative" },
  atmosphere: { left: "Inside", right: "Outside" },
  story: { left: "Time", right: "Situation" }
};

const genericCategories = {
  informationAddersPlus: [
    "which, at first glance...",
    "which, for obvious reasons...",
    "which, to her surprise...",
    "which, in the end...",
    "because, without warning...",
    "because, for the first time...",
    "because, under pressure...",
    "because, by that stage...",
    "with, almost no effort...",
    "with, a strange certainty...",
    "with, more force than expected...",
    "with, careful attention to...",
    "though, against her better judgement...",
    "though, in truth...",
    "though, unlike before...",
    "since, according to plan...",
    "since, for reasons unknown...",
    "in spite of...",
    "as a result...",
    "as if, for a moment..."
  ],
  informationAdders: [
    "which delighted her because...",
    "which frightened her because...",
    "because each time...",
    "with a sense of...",
    "with special...",
    "because of her...",
    "though found...",
    "whereas later...",
    "because of its size...",
    "with a glance to check...",
    "which finally ended when...",
    "with completely broken...",
    "because of the way it...",
    "since it became obvious that...",
    "chiefly because...",
    "though she couldn't have known...",
    "since the evidence showed...",
    "without thinking of...",
    "in view of the fact that...",
    "in particular..."
  ]
};

function firstPhraseOnly(text) {
  if (!text) return "";
  const chunk = text.split(",")[0].trim();
  return chunk ? `${chunk},` : "";
}

function trimAllStemBanks(banks) {
  Object.values(banks).forEach((category) => {
    Object.keys(category).forEach((level) => {
      category[level] = category[level].map(firstPhraseOnly).filter(Boolean);
    });
  });
}

trimAllStemBanks(stemCategories);

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function normalizeStem(text) {
  if (!text) return "";
  const cleaned = text.trim().replace(/\s+/g, " ");
  if (cleaned.endsWith("...") || cleaned.endsWith(",") || cleaned.endsWith("\"")) {
    return cleaned;
  }
  return `${cleaned},`;
}

function createLineItem(text) {
  const li = document.createElement("li");
  li.className = "line-item";
  li.textContent = normalizeStem(text);
  return li;
}

function renderLines(targetList, lines) {
  targetList.innerHTML = "";
  for (const text of lines) {
    targetList.appendChild(createLineItem(text));
  }
}

function fitLinesToContainer(targetList, orderedLines) {
  targetList.innerHTML = "";
  const rendered = [];
  for (const text of orderedLines) {
    const li = createLineItem(text);
    targetList.appendChild(li);
    if (targetList.scrollHeight > targetList.clientHeight + 1) {
      li.remove();
      break;
    }
    rendered.push(normalizeStem(text));
  }
  return rendered;
}

function fitPreservingCurrent(targetList, bank) {
  const current = Array.from(targetList.querySelectorAll(".line-item")).map((el) => el.textContent);
  const normalizedBank = bank.map((stem) => normalizeStem(stem));
  const uniqueCurrent = [];
  current.forEach((stem) => {
    if (!uniqueCurrent.includes(stem)) uniqueCurrent.push(stem);
  });
  const missing = normalizedBank.filter((stem) => !uniqueCurrent.includes(stem));
  fitLinesToContainer(targetList, [...uniqueCurrent, ...missing]);
}

function appendOneLine(targetList, bank) {
  const current = Array.from(targetList.querySelectorAll(".line-item")).map((el) => el.textContent);
  const normalizedBank = bank.map((stem) => normalizeStem(stem));
  const unused = normalizedBank.filter((stem) => !current.includes(stem));
  const pool = unused.length > 0 ? unused : normalizedBank;
  const next = pool[Math.floor(Math.random() * pool.length)];
  if (!next) return false;
  const li = createLineItem(next);
  targetList.appendChild(li);
  if (targetList.scrollHeight > targetList.clientHeight + 1) {
    li.remove();
    return false;
  }
  return true;
}

function refitAllPanels() {
  document.querySelectorAll(".card").forEach((card) => {
    if (card.dataset.mode === "single") {
      const listEl = card.querySelector('[data-difficulty-list="generic"]');
      fitPreservingCurrent(listEl, genericCategories[card.dataset.category]);
      return;
    }
    ["easier", "harder"].forEach((difficulty) => {
      const listEl = card.querySelector(`[data-difficulty-list="${difficulty}"]`);
      fitPreservingCurrent(listEl, stemCategories[card.dataset.category][difficulty]);
    });
  });
}

function fillDifficulty(card, categoryKey, difficulty) {
  const listEl = card.querySelector(`[data-difficulty-list="${difficulty}"]`);
  const lines = shuffle(stemCategories[categoryKey][difficulty]);
  fitLinesToContainer(listEl, lines);
}

function fillGeneric(card, categoryKey) {
  const listEl = card.querySelector('[data-difficulty-list="generic"]');
  const lines = shuffle(genericCategories[categoryKey]);
  fitLinesToContainer(listEl, lines);
}

function fillCard(card, categoryKey) {
  fillDifficulty(card, categoryKey, "easier");
  fillDifficulty(card, categoryKey, "harder");
}

function createCard(categoryKey) {
  const template = document.getElementById("card-template");
  const card = template.content.firstElementChild.cloneNode(true);
  card.querySelector(".card-title").textContent = categoryKey;
  card.dataset.category = categoryKey;
  const labels = dualCategoryLabels[categoryKey] || { left: "Easier", right: "Harder" };
  const easierLabel = card.querySelector(".difficulty.easier .difficulty-header span");
  const harderLabel = card.querySelector(".difficulty.harder .difficulty-header span");
  easierLabel.textContent = labels.left;
  harderLabel.textContent = labels.right;
  card.querySelectorAll(".panel-roll").forEach((button) => {
    button.addEventListener("click", () => {
      fillDifficulty(card, categoryKey, button.dataset.rollDifficulty);
    });
  });
  card.querySelectorAll(".panel-add").forEach((button) => {
    button.addEventListener("click", () => {
      const difficulty = button.dataset.addDifficulty;
      const listEl = card.querySelector(`[data-difficulty-list="${difficulty}"]`);
      const added = appendOneLine(listEl, stemCategories[categoryKey][difficulty]);
      if (!added) return;
    });
  });
  fillCard(card, categoryKey);
  return card;
}

function createSingleCard(categoryKey) {
  const template = document.getElementById("single-card-template");
  const card = template.content.firstElementChild.cloneNode(true);
  card.querySelector(".card-title").textContent = "information adders";
  card.dataset.category = categoryKey;
  card.dataset.mode = "single";
  card.querySelector(".panel-roll").addEventListener("click", () => fillGeneric(card, categoryKey));
  card.querySelector(".panel-add").addEventListener("click", () => {
    const listEl = card.querySelector('[data-difficulty-list="generic"]');
    const added = appendOneLine(listEl, genericCategories[categoryKey]);
    if (!added) return;
  });
  fillGeneric(card, categoryKey);
  return card;
}

function shuffleAll() {
  document.querySelectorAll(".card").forEach((card) => {
    if (card.dataset.mode === "single") {
      fillGeneric(card, card.dataset.category);
    } else {
      fillCard(card, card.dataset.category);
    }
  });
}

function bindFontSlider() {
  const slider = document.getElementById("font-size-slider");
  const label = document.getElementById("font-size-value");
  const root = document.documentElement;
  const update = () => {
    const value = `${slider.value}px`;
    root.style.setProperty("--stem-size", value);
    label.textContent = value;
    refitAllPanels();
  };
  slider.addEventListener("input", update);
  const initial = `${slider.value}px`;
  root.style.setProperty("--stem-size", initial);
  label.textContent = initial;
}

function init() {
  const cardsRoot = document.getElementById("cards");
  const layoutOrder = [
    { type: "dual", key: "action" },
    { type: "dual", key: "description" },
    { type: "dual", key: "thinking" },
    { type: "single", key: "informationAddersPlus" },
    { type: "dual", key: "feeling" },
    { type: "dual", key: "atmosphere" },
    { type: "dual", key: "story" },
    { type: "single", key: "informationAdders" }
  ];

  layoutOrder.forEach((item) => {
    if (item.type === "dual") {
      const dualCard = createCard(item.key);
      dualCard.dataset.mode = "dual";
      cardsRoot.appendChild(dualCard);
      return;
    }
    cardsRoot.appendChild(createSingleCard(item.key));
  });

  document.getElementById("shuffle-all").addEventListener("click", shuffleAll);
  bindFontSlider();
  shuffleAll();
}

init();
