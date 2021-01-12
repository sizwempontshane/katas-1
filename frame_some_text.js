//Frame some text
function frame(array) {
  let i;
  let star = "*";
  let border = star.repeat(10);
  console.log(border);

  for (i = 0; i < array.length; i++) {
    let column = star + " " + array[i] + " ".repeat(7 - array[i].length) + star;
    console.log(column);
  }
  console.log(border);
}
frame(["Write", "good", "code", "every", "day"]);
