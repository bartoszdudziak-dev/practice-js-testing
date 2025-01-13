import randomNumber from "./app";

describe("Random number generator", () => {
  it("returns 1 when min and max are set to 1", () => {
    const number = randomNumber(1, 1);
    expect(number).toBe(1);
  });

  it("throws exception when min is not a number", () => {
    expect(() => randomNumber("string", 1)).toThrow();
  });

  it("throws exception when max is not a number", () => {
    expect(() => randomNumber(1, "string")).toThrow();
  });

  it("throws exception when min is grater than max", () => {
    expect(() => randomNumber(4, 3)).toThrow();
  });

  test("checking if a returned value is in range", () => {
    const value = randomNumber(1, 10);

    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(10);
  });
});
