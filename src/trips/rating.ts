export class Rating {
  constructor(private readonly rating: number) {
    if (!this.isValid(rating)) {
      throw new Error("Rating must be between 0 and 5");
    }
  }

  toString() {
    return (Math.round(this.rating * 10) / 10).toFixed(1);
  }

  valueOf() {
    return this.rating;
  }

  private isValid(rating: number) {
    return rating >= 0 && rating <= 5;
  }
}
