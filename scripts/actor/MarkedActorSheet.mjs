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
        { navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "main" }
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

    const raceSelect = html.find('select[name="system.details.race"]');
    const tribeField = html.find('.tribe-field');
    const clanField  = html.find('.clan-field');

    const updateRaceDependentFields = () => {
      const race = raceSelect.val();

      // Mythrian → show tribe, hide clan
      if (race === "mythrian") {
        tribeField.show();
      } else {
        tribeField.hide();
        // Optional: clear stored tribe when not Mythrian
        this.object.update({ "system.details.tribe": "" });
      }

      // Draconian → show clan, hide tribe
      if (race === "draconian") {
        clanField.show();
      } else {
        clanField.hide();
        // Optional: clear stored clan when not Draconian
        this.object.update({ "system.details.clan": "" });
      }
    };

    // Initial state when sheet opens
    updateRaceDependentFields();

    // Live update when race changes
    raceSelect.on("change", () => updateRaceDependentFields());
  }
}
