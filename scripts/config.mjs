// scripts/config.mjs

export const MarkedConfig = {};

// -------------------------------------
// ATTRIBUTE CATEGORIES
// -------------------------------------
MarkedConfig.attributes = {
  body: { label: "Body" },
  mind: { label: "Mind" },
  soul: { label: "Soul" }
};

// -------------------------------------
// SIMPLE RANK MAP (key → label)
// -------------------------------------
MarkedConfig.ranks = {
  normal:    "Normal",
  quartz:    "Quartz",
  topaz:     "Topaz",
  garnet:    "Garnet",
  emerald:   "Emerald",
  sapphire:  "Sapphire",
  ruby:      "Ruby",
  diamond:   "Diamond",
  mythrite:  "Mythrite",
  celestite: "Celestite"
};

// -------------------------------------
// RACES (simple key → label)
// -------------------------------------
MarkedConfig.races = {
  human:       "Human",
  etherean:    "Etherean",
  mythrian:    "Mythrian",
  anthozoan:   "Anthozoan",
  sylvan:      "Sylvan",
  sprite:      "Sprite",
  auramine:    "Auramine",
  draconian:   "Draconian",
  embergiest:  "Embergiest",
  earthen:     "Earthen",
  prismatic:   "Prismatic"
};

// -------------------------------------
// MYTHRIAN TRIBES
// -------------------------------------
MarkedConfig.mythrianTribes = {
  lion: "Lion Tribe",
  wolf: "Wolf Tribe",
  bear: "Bear Tribe"
};

// -------------------------------------
// DRACONIAN CLANS (placeholder names)
// You can replace/expand these anytime.
// -------------------------------------
MarkedConfig.draconianClans = {
  flame: "Flame Clan",
  storm: "Storm Clan",
  stone: "Stone Clan"
};

// -------------------------------------
// BACKGROUNDS (simple key → label)
// -------------------------------------
MarkedConfig.backgrounds = {
  farmer:        "Farmer",
  hunter:        "Hunter",
  merchant:      "Merchant",
  scholar:       "Scholar",
  soldier:       "Soldier",
  blacksmith:    "Blacksmith",
  sailor:        "Sailor",
  noble:         "Noble",
  street_urchin: "Street Urchin",
  entertainer:   "Entertainer",
  thief:         "Thief",
  guard:         "Guard",
  scribe:        "Scribe",
  bounty_hunter: "Bounty Hunter",
  explorer:      "Explorer"
};

// Marks of Purpose
MarkedConfig.markOfPurpose = {
  guardian:   "Guardian",
  defender:   "Defender",
  arcanist:   "Arcanist",
  charlatan:  "Charlatan",
  brawler:    "Brawler",
  striker:    "Striker",
  pious:      "Pious",
  ranger:     "Ranger",
  skirmisher: "Skirmisher",
  assassin:   "Assassin"
};

//RACE Values
MarkedConfig.raceStatus = {
  "Human": {
    status: {
      "vitality.max": 10,
      "mana.max": 10,
      "stamina.max": 10,
      "defense.value": 0,
      "reaction.value": 0,
      "trauma.max": 2,
      "pace.value": 5,
      "armor.max": 0,
      "shielding.value": 0
    }
  },
  "Etherean": {
    status: {
      "vitality.max": 8,
      "mana.max": 12,
      "stamina.max": 10,
      "defense.value": 0,
      "reaction.value": 0,
      "trauma.max": 2,
      "pace.value": 6,
      "armor.max": 0,
      "shielding.value": 1
    }
  },
  "Mythrian": {
    status: {
      "vitality.max": 12,
      "mana.max": 8,
      "stamina.max": 12,
      "defense.value": 0,
      "reaction.value": 0,
      "trauma.max": 2,
      "pace.value": 6,
      "armor.max": 1,
      "shielding.value": 0
    }
  },
  "Anthozoan": {
    status: {
      "vitality.max": 14,
      "mana.max": 8,
      "stamina.max": 10,
      "defense.value": 1,
      "reaction.value": 0,
      "trauma.max": 3,
      "pace.value": 4,
      "armor.max": 2,
      "shielding.value": 0
    }
  },
  "Sylvan": {
    status: {
      "vitality.max": 10,
      "mana.max": 10,
      "stamina.max": 12,
      "defense.value": 0,
      "reaction.value": 0,
      "trauma.max": 2,
      "pace.value": 6,
      "armor.max": 0,
      "shielding.value": 0
    }
  },
  "Sprite": {
    status: {
      "vitality.max": 8,
      "mana.max": 12,
      "stamina.max": 10,
      "defense.value": 0,
      "reaction.value": 1,
      "trauma.max": 1,
      "pace.value": 4,
      "armor.max": 0,
      "shielding.value": 1
    }
  },
  "Auramine": {
    status: {
      "vitality.max": 9,
      "mana.max": 13,
      "stamina.max": 9,
      "defense.value": 0,
      "reaction.value": 0,
      "trauma.max": 2,
      "pace.value": 6,
      "armor.max": 0,
      "shielding.value": 2
    }
  },
  "Draconian": {
    status: {
      "vitality.max": 13,
      "mana.max": 9,
      "stamina.max": 11,
      "defense.value": 1,
      "reaction.value": 0,
      "trauma.max": 3,
      "pace.value": 5,
      "armor.max": 2,
      "shielding.value": 0
    }
  },
  "Embergiest": {
    status: {
      "vitality.max": 9,
      "mana.max": 13,
      "stamina.max": 9,
      "defense.value": 0,
      "reaction.value": 0,
      "trauma.max": 2,
      "pace.value": 5,
      "armor.max": 0,
      "shielding.value": 2
    }
  },
  "Earthen": {
    status: {
      "vitality.max": 13,
      "mana.max": 8,
      "stamina.max": 11,
      "defense.value": 1,
      "reaction.value": 0,
      "trauma.max": 3,
      "pace.value": 4,
      "armor.max": 2,
      "shielding.value": 0
    }
  },
  "Prismatic": {
    status: {
      "vitality.max": 10,
      "mana.max": 12,
      "stamina.max": 10,
      "defense.value": 0,
      "reaction.value": 0,
      "trauma.max": 2,
      "pace.value": 5,
      "armor.max": 0,
      "shielding.value": 2
    }
  }
};

// RACE Attribute Modifiers
// These are % bonuses applied on top of the character's assigned sub-attributes.
MarkedConfig.raceAttributes = {
  "Human": {
    "body.might": 2,
    "body.swiftness": 2,
    "mind.insight": 2,
    "mind.willpower": 2,
    "soul.presence": 2,
    "soul.resolve": 2
  },
  "Etherean": {
    "mind.insight": 2,
    "mind.focus": 2,
    "soul.grace": 4,
    "soul.resonance": 4
  },
  "Mythrian": {
    "body.might": 4,
    "body.swiftness": 2,
    "body.endurance": 4,
    "mind.insight": 2
  },
  "Anthozoan": {
    "body.might": 2,
    "body.fortitude": 4,
    "body.endurance": 4,
    "soul.resolve": 2
  },
  "Sylvan": {
    "body.swiftness": 4,
    "body.endurance": 2,
    "mind.insight": 2,
    "soul.grace": 4
  },
  "Sprite": {
    "body.swiftness": 4,
    "mind.insight": 2,
    "mind.quickness": 2,
    "soul.grace": 4
  },
  "Auramine": {
    "mind.insight": 2,
    "soul.presence": 4,
    "soul.grace": 2,
    "soul.resonance": 4
  },
  "Draconian": {
    "body.might": 4,
    "body.fortitude": 4,
    "body.endurance": 2,
    "soul.presence": 2
  },
  "Embergiest": {
    "body.endurance": 2,
    "mind.focus": 2,
    "soul.presence": 2,
    "soul.resolve": 4,
    "soul.resonance": 2
  },
  "Earthen": {
    "body.might": 2,
    "body.fortitude": 4,
    "body.endurance": 4,
    "mind.willpower": 2
  },
  "Prismatic": {
    "mind.focus": 4,
    "mind.quickness": 2,
    "soul.resonance": 4,
    "soul.presence": 2
  }
};

