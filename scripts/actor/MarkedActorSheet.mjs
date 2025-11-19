// scripts/actor/MarkedActorSheet.mjs

export class MarkedActorSheet extends ActorSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["marked", "sheet", "actor"],
      template: "systems/Marked/templates/actor/actor-sheet.hbs",
      width: 900,
      height: 700,
      tabs: [
        { navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "main" }
      ]
    });
  }

  getData(options) {
    const data = super.getData(options);
    data.config = game.marked?.config;
    return data;
  }
}

