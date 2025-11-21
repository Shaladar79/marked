// scripts/config.mjs

// Single config object for The Marked System
export const MarkedConfig = {

  // ------------------------------
  // Core Attribute Groups
  // ------------------------------
  attributes: {
    body: { label: "Body" },
    mind: { label: "Mind" },
    soul: { label: "Soul" }
  },

  // ------------------------------
  // Rank List
  // ------------------------------
  // Keys are stored values in system.details.rank
  // Values are the labels shown in the dropdown
  ranks: {
    normal:   "Normal",
    quartz:   "Quartz",
    topaz:    "Topaz",
    garnet:   "Garnet",
    emerald:  "Emerald",
    sapphire: "Sapphire",
    ruby:     "Ruby",
    diamond:  "Diamond",
    mythrite: "Mythrite",
    celestite:"Celestite"
  }

  // Later:
  // races: { ... },
  // backgrounds: { ... },
  // marks: { ... }
};
