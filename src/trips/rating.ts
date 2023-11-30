export class Rating {
  constructor(private readonly rating: number) {
    if (!this.isValid()) {
      throw new Error("Rating must be between 0 and 5");
    }
  }

  toString() {
    return this.rating.toFixed(1);
  }

  valueOf() {
    return this.rating;
  }

  private isValid() {
    return this.rating >= 0 && this.rating <= 5;
  }
}
