export default function randomNumber(min, max) {
  if (!isNumber(min)) {
    throw new TypeError("Min must be a number");
  }

  if (!isNumber(max)) {
    throw new TypeError("Min must be a number");
  }

  return Math.floor(Math.random() * (min - max) + max);
}

function isNumber(value) {
  return typeof value === "number" && !Number.isNaN(value);
}
