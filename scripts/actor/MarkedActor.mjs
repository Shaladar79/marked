// scripts/actor/MarkedActor.mjs

export class MarkedActor extends Actor {
  prepareDerivedData() {
    super.prepareDerivedData();

    // System data shortcut (NO FALLBACK)
    const system = this.system;

    // Ensure details exists
    if (!system.details) system.details = {};
    const details = system.details;

    // ---- Spirit Economy: Total Spirit = Current + Spent ----
    const current = Number(details.currentSpirit ?? 0) || 0;
    const spent   = Number(details.spentSpirit ?? 0) || 0;

    // Derived field: how much Spirit has ever been awarded
    details.totalSpirit = current + spent;

    // =============================
    // ATTRIBUTE GROUP AVERAGES
    // =============================
    const attrs = system.attributes ?? {};

    // Body = average of (Might, Swiftness, Fortitude, Endurance)
    if (attrs.body) {
      const b = attrs.body;
      const values = [
        b.might?.value,
        b.swiftness?.value,
        b.fortitude?.value,
        b.endurance?.value
      ].map(v => Number(v ?? 0));

      const sum   = values.reduce((a, v) => a + v, 0);
      const count = values.length || 1;
      b.value = Math.round(sum / count);
    }

    // Mind = average of (Insight, Quickness, Willpower, Focus)
    if (attrs.mind) {
      const m = attrs.mind;
      const values = [
        m.insight?.value,
        m.quickness?.value,
        m.willpower?.value,
        m.focus?.value
      ].map(v => Number(v ?? 0));

      const sum   = values.reduce((a, v) => a + v, 0);
      const count = values.length || 1;
      m.value = Math.round(sum / count);
    }

    // Soul = average of (Presence, Grace, Resolve, Resonance)
    if (attrs.soul) {
      const s = attrs.soul;
      const values = [
        s.presence?.value,
        s.grace?.value,
        s.resolve?.value,
        s.resonance?.value
      ].map(v => Number(v ?? 0));

      const sum   = values.reduce((a, v) => a + v, 0);
      const count = values.length || 1;
      s.value = Math.round(sum / count);
    }

    // Later: compute Parry, Toughness, Essence slots, Mark effects, etc.
  }
}
