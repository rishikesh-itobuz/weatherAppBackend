import { add, sub, mul, default as div } from "./math.mjs";

try {
  console.log(add(2, 3));
} catch (err) {
  console.log("Please provide a valid data type");
}

try {
  console.log(sub(2, 3));
} catch (err) {
  console.log("Please provide a valid data type");
}

try {
  console.log(mul(2, 3));
} catch (err) {
  console.log("Please provide a valid data type");
}

try {
  console.log(div(2, 3));
} catch (err) {
  console.log("Please provide a valid data type");
}
