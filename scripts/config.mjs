// scripts/config.mjs

// Single config object for The Marked System
export const MarkedConfig = {};

// Core attribute groups (you can expand this later if you want)
MarkedConfig.attributes = {
  body: { label: "Body" },
  mind: { label: "Mind" },
  soul: { label: "Soul" }
};

// Rank list (Option A)
// Keys are capitalized so they match your current default "Normal"
// stored at system.details.rank in template.json
export const MarkedConfig = {};

MarkedConfig.ranks = {
  normal: { key: "normal", label: "Normal" },
  quartz: { key: "quartz", label: "Quartz" },
  topaz: { key: "topaz", label: "Topaz" },
  garnet: { key: "garnet", label: "Garnet" },
  emerald: { key: "emerald", label: "Emerald" },
  sapphire: { key: "sapphire", label: "Sapphire" },
  ruby: { key: "ruby", label: "Ruby" },
  diamond: { key: "diamond", label: "Diamond" },
  mythrite: { key: "mythrite", label: "Mythrite" },
  celestite: { key: "celestite", label: "Celestite" }
};


// Later we can add:
// MarkedConfig.races = { ... }
// MarkedConfig.backgrounds = { ... }
// MarkedConfig.marks = { ... }
