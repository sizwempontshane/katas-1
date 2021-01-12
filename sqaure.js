//square
function square(num) {
  let str = "#";
  let strRow = str.repeat(num) + "\n";
  return strRow.repeat(num);
}
console.log(square(2));
