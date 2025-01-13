import randomNumber from "./app";

describe("Random number generator", () => {
  it("returns 1 when min and max are set to 1", () => {
    const number = randomNumber(1, 1);
    expect(number).toBe(1);
  });
});
