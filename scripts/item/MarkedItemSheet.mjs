// scripts/item/MarkedItemSheet.mjs

export class MarkedItemSheet extends ItemSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["marked", "sheet", "item"],
      template: "systems/marked/templates/items/item-sheet.hbs",
      width: 600,
      height: 400
    });
  }
}

