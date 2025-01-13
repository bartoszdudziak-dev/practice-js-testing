export default function randomNumber(min, max) {
  return Math.floor(Math.random() * (min - max) + max);
}
