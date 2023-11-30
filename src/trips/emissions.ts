export class Emissions {
  private co2Symbol = "\u2082";

  constructor(private readonly kilograms: number) {
    if (kilograms < 0) {
      throw new Error("Emissions cannot be negative"); // for now... :)
    }
  }

  toString() {
    if (this.kilograms < 1000) {
      return `${this.kilograms} kg CO2e`;
    } else {
      return `${(this.kilograms / 1000).toFixed(1)} t CO${this.co2Symbol}e`;
    }
  }
}
