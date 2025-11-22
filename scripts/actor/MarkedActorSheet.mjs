// scripts/actor/MarkedActorSheet.mjs

import { MarkedConfig } from "../config.mjs";

export class MarkedActorSheet extends ActorSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["marked", "sheet", "actor"],
      template: "systems/the-marked-system/templates/actors/actor-sheet.hbs",
      width: 900,
      height: 700,

      tabs: [
        // ---------------------------
        // TOP-LEVEL TABS
        // ---------------------------
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "attr-status"
        },

        // ---------------------------
        // SUBTABS: Attributes & Status
        // ---------------------------
        {
          navSelector: ".sub-tabs",
          contentSelector: ".sub-body",
          initial: "attributes"
        },

        // ---------------------------
        // SUBTABS: Abilities (Marks)
        // ---------------------------
        {
          navSelector: ".abilities-subtabs",
          contentSelector: ".abilities-subbody",
          initial: "marks"
        }
      ],

      submitOnChange: true,
      submitOnClose: true
    });
  }

  getData(options) {
    const context = super.getData(options);

    context.system = context.data.system;
    context.config = MarkedConfig;

    return context;
  }

  activateListeners(html) {
    super.activateListeners(html);

    // --------------------------------
    // RACE-DEPENDENT EXTRA DROPDOWNS
    // --------------------------------
       const raceSelect = html.find('select[name="system.details.race"]');
    const tribeField = html.find(".tribe-field");
    const clanField  = html.find(".clan-field");

    // Show/hide tribe/clan based on race
    const updateRaceDependentFields = () => {
      const raceKey = raceSelect.val(); // e.g. "human", "mythrian"

      // Mythrian → show Tribe
      if (raceKey === "mythrian") {
        tribeField.show();
      } else {
        tribeField.hide();
        this.object.update({ "system.details.tribe": "" });
      }

      // Draconian → show Clan
      if (raceKey === "draconian") {
        clanField.show();
      } else {
        clanField.hide();
        this.object.update({ "system.details.clan": "" });
      }
    };

    // Apply racial STATUS + ATTRIBUTE bonuses when race changes
    const applyRaceData = () => {
      const raceKey = raceSelect.val(); // "human", "etherean", etc.
      if (!raceKey) return;

      // Convert key → label, e.g. "human" → "Human"
      const raceLabel = MarkedConfig.races?.[raceKey] ?? raceKey;

      const raceStatus     = MarkedConfig.raceStatus?.[raceLabel];
      const raceAttributes = MarkedConfig.raceAttributes?.[raceLabel];

      const update = {};

      // 1) STATUS: copy racial status into system.status.*
      if (raceStatus && raceStatus.status) {
        for (const [path, value] of Object.entries(raceStatus.status)) {
          update[`system.status.${path}`] = value;
        }

        // Optionally set current = max for V/M/S on race selection
        if (raceStatus.status["vitality.max"] !== undefined) {
          update["system.status.vitality.value"] = raceStatus.status["vitality.max"];
        }
        if (raceStatus.status["mana.max"] !== undefined) {
          update["system.status.mana.value"] = raceStatus.status["mana.max"];
        }
        if (raceStatus.status["stamina.max"] !== undefined) {
          update["system.status.stamina.value"] = raceStatus.status["stamina.max"];
        }
      }

      // 2) ATTRIBUTES: apply racial modifiers to sub-attributes
      if (raceAttributes) {
        for (const [path, bonus] of Object.entries(raceAttributes)) {
          // path like "body.might" → system.attributes.body.might.value
          const attrPath = `system.attributes.${path}.value`;
          const current  = foundry.utils.getProperty(this.actor.system, attrPath) ?? 0;
          update[attrPath] = Number(current) + Number(bonus);
        }
      }

      // Also store the race key itself (already bound to the dropdown)
      update["system.details.race"] = raceKey;

      this.object.update(update);
    };

    // On initial render, just adjust tribe/clan visibility
    updateRaceDependentFields();

    // When race changes: update tribe/clan visibility AND apply racial data
    raceSelect.on("change", () => {
      updateRaceDependentFields();
      applyRaceData();
    });

  }
}
