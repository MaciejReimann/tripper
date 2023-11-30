export class Emissions {
  private co2EquivalentSymbol = "CO\u2082e";

  constructor(private readonly kilograms: number) {
    if (kilograms < 0) {
      throw new Error("Emissions cannot be negative"); // for now... :)
    }
  }

  toString() {
    return `${this.convertUnits()} ${this.co2EquivalentSymbol}`;
  }

  private convertUnits() {
    if (this.kilograms < 1000) {
      return this.toKilograms();
    }

    return this.toMetricTonnes();
  }

  private toMetricTonnes() {
    return `${(this.kilograms / 1000).toFixed(1)} t`;
  }

  private toKilograms() {
    return `${this.kilograms} kg`;
  }
}
