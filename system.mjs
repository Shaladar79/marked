// system.mjs

import { MarkedConfig } from "./scripts/config.mjs";
import { MarkedActor } from "./scripts/actor/MarkedActor.mjs";
import { MarkedActorSheet } from "./scripts/actor/MarkedActorSheet.mjs";
import { MarkedItem } from "./scripts/item/MarkedItem.mjs";
import { MarkedItemSheet } from "./scripts/item/MarkedItemSheet.mjs";

Hooks.once("init", function () {
  console.log("Marked System | Initializing");

  // Expose config namespace
  game.marked = {
    config: MarkedConfig
  };

  // Register custom document classes
  CONFIG.Actor.documentClass = MarkedActor;
  CONFIG.Item.documentClass = MarkedItem;

  // Unregister core sheets
  Actors.unregisterSheet("core", ActorSheet);
  Items.unregisterSheet("core", ItemSheet);

  // Register our actor sheet (pc + npc for now)
  Actors.registerSheet("marked", MarkedActorSheet, {
    types: ["pc", "npc"],
    makeDefault: true
  });

  // Register our item sheet
  Items.registerSheet("marked", MarkedItemSheet, {
    makeDefault: true
  });
});

// ----------------------------------------------
// PRELOAD HANDLEBARS PARTIALS
// ----------------------------------------------
Hooks.once("setup", async function () {
  console.log("Marked System | Preloading templates");

 await loadTemplates([
  "systems/the-marked-system/templates/actors/parts/header.hbs",
  "systems/the-marked-system/templates/actors/parts/attributes.hbs",
  "systems/the-marked-system/templates/actors/parts/status.hbs",
  "systems/the-marked-system/templates/actors/parts/tabs.hbs",
  "systems/the-marked-system/templates/actors/parts/subparts/rankdrop.hbs",
  "systems/the-marked-system/templates/actors/parts/subparts/racedrop.hbs",
  "systems/the-marked-system/templates/actors/parts/subparts/tribedrop.hbs",
  "systems/the-marked-system/templates/actors/parts/subparts/clandrop.hbs"
]);
});
