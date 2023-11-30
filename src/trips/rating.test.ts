import { describe, expect, test } from "vitest";

import { Rating } from "./rating";

describe("Rating", () => {
  test("initialization for value of -1", () => {
    expect(() => new Rating(-1)).toThrowError("Rating must be between 0 and 5");
  });

  test("initialization for value of 0", () => {
    expect(() => new Rating(0)).not.toThrowError();
  });

  test("initialization for value of 1", () => {
    expect(() => new Rating(1)).not.toThrowError();
  });

  test("toString for value of 0.1", () => {
    expect(new Rating(0.1).toString()).toBe("0.1");
  });

  test("toString for value of 1", () => {
    expect(new Rating(1).toString()).toBe("1.0");
  });

  test("toString for value of 2", () => {
    expect(new Rating(2).toString()).toBe("2.0");
  });

  test("toString for value of 1.56", () => {
    expect(new Rating(1.5).toString()).toBe("1.5");
  });

  test("toString for value of 2.123345", () => {
    expect(new Rating(2.123345).toString()).toBe("2.1");
  });

  test("toString for value of 6", () => {
    expect(() => new Rating(6).toString()).toThrow(
      "Rating must be between 0 and 5"
    );
  });
});
