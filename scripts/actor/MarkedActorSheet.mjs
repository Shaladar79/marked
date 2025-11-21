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

    const updateRaceDependentFields = () => {
      const race = raceSelect.val();

      // Mythrian → show Tribe
      if (race === "mythrian") {
        tribeField.show();
      } else {
        tribeField.hide();
        this.object.update({ "system.details.tribe": "" });
      }

      // Draconian → show Clan
      if (race === "draconian") {
        clanField.show();
      } else {
        clanField.hide();
        this.object.update({ "system.details.clan": "" });
      }
    };

    updateRaceDependentFields();
    raceSelect.on("change", updateRaceDependentFields);
  }
}
