// number is even or odd
function evenOrodd(value) {
  if (value % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
evenOrodd(30);

//square
function square(num) {
  let str = "#";
  let strRow = str.repeat(num) + "\n";
  return strRow.repeat(num);
}
console.log(square(2));

//right handed triangle
function triangle(value) {
  let hashes = [];
  for (let t = 1; t <= value; t++) {
    hashes += "#";
    console.log(hashes);
  }
}
triangle(4);

//isosceles triangle
function isosceles(value) {
  for (let i = 1; i <= value; i++) {
    let spaces = " ".repeat(value - i);
    let hash = "#".repeat(i * 2 - 1);

    console.log(spaces + hash);
  }
}
isosceles(3);

//the longest string
function longest(array) {
  let max = array[0].length;

  array.map((v) => (max = Math.max(max, v.length)));

  result = array.filter((v) => v.length == max);
  let align = result.join("\n");

  console.log(align);
}
longest(["once", "upon", "a", "time"]);

//combine two lists/arrays
function combine(arr1, arr2) {
  let array3 = [];

  for (let w = 0; w < arr1.length || w < arr2.length; w++) {
    array3.push(arr1[w], arr2[w]);
  }
  console.log(array3);
}
combine([11, 22, 33], [1, 2, 3]);

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
