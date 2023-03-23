function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

export default function (a, b) {
  if (b === 0) return "Infinity";
  else return (a / b).toFixed(2);
}

export { add, sub, mul };
