import { describe, expect, test } from "vitest";

import { Emissions } from "./emissions";

describe("Emissions", () => {
  test("initialization for value of -1", () => {
    expect(() => new Emissions(-1)).toThrowError(
      "Emissions cannot be negative"
    );
  });

  test("initialization for value of 0", () => {
    expect(() => new Emissions(0)).not.toThrowError();
  });

  test("initialization for value of 1", () => {
    expect(() => new Emissions(1)).not.toThrowError();
  });

  test("toString for value of 0", () => {
    const emissions = new Emissions(0);
    expect(emissions.toString()).toBe("0 kg CO₂e");
  });

  test("toString for value of 999", () => {
    const emissions = new Emissions(999);
    expect(emissions.toString()).toBe("999 kg CO₂e");
  });

  test("toString for value of 1001", () => {
    const emissions = new Emissions(1001);
    expect(emissions.toString()).toBe("1.0 t CO₂e");
  });

  test("toString for value of 0.1", () => {
    const emissions = new Emissions(0.1);
    expect(emissions.toString()).toBe("0.1 kg CO₂e");
  });
});
