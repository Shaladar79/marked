// scripts/actor/MarkedActor.mjs

export class MarkedActor extends Actor {
  prepareDerivedData() {
    super.prepareDerivedData();

    // Example: grab system data
    const data = this.system;

    // Later: compute Parry, Toughness, Essence slots, Mark effects, etc.
    // For now, nothing special.
  }
}
