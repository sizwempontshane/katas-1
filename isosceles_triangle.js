//isosceles triangle
function isosceles(value) {
  for (let i = 1; i <= value; i++) {
    let spaces = " ".repeat(value - i);
    let hash = "#".repeat(i * 2 - 1);

    console.log(spaces + hash);
  }
}
isosceles(3);
