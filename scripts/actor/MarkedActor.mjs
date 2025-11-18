// scripts/actor/MarkedActor.mjs

export class MarkedActor extends Actor {
  prepareDerivedData() {
    super.prepareDerivedData();

    // System data shortcut
    const system = this.system ?? {};

    // Ensure details exists
    if (!system.details) system.details = {};
    const details = system.details;

    // ---- Spirit Economy: Total Spirit = Current + Spent ----
    const current = Number(details.currentSpirit ?? 0) || 0;
    const spent   = Number(details.spentSpirit ?? 0) || 0;

    // Derived field: how much Spirit has ever been awarded
    details.totalSpirit = current + spent;

    // Later: compute Parry, Toughness, Essence slots, Mark effects, etc.
    // For now, Spirit total is the only derived value.
  }
}
