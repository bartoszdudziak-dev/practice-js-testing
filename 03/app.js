export default function randomNumber(min, max) {
  if (typeof min !== "number") {
    throw new TypeError("Min must be a number");
  }

  if (typeof max !== "number") {
    throw new TypeError("Min must be a number");
  }

  return Math.floor(Math.random() * (min - max) + max);
}
