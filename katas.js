//hello
function hello(name) {
  console.log("Hello " + name);
}
hello("Tshepo");

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
  str = "#";
  strRow = str.repeat(num) + "\n";
  return strRow.repeat(num);
}
console.log(square(4));

//right handed triangle
function triangle(value) {
  var hashes = [];
  for (var t = 1; t <= value; t++) {
    hashs += "#";
    console.log(hashs);
  }
}
triangle(4);

//isosceles triangle
function isosceles(value) {
  for (var i = 1; i <= value; i++) {
    var spaces = " ".repeat(value - i);
    var hash = "#".repeat(i * 2 - 1);

    console.log(spaces + hash);
  }
}
isosceles(3);

//the longest string
function longest(array) {
  var max = array[0].length;

  array.map((v) => (max = Math.max(max, v.length)));

  result = array.filter((v) => v.length == max);
  var align = result.join("\n");

  console.log(align);
}
longest(["once", "upon", "a", "time"]);

//combine two lists/arrays
function combine(arr1, arr2) {
  var array3 = [];

  for (var w = 0; w < arr1.length || w < arr2.length; w++) {
    array3.push(arr1[w], arr2[w]);
  }
  console.log(array3);
}
combine([11, 22, 33], [1, 2, 3]);

//Frame some text
function frame(array) {
  var i;
  var star = "*";
  var border = star.repeat(10);
  console.log(border);

  for (i = 0; i < array.length; i++) {
    var column = star + " " + array[i] + " ".repeat(7 - array[i].length) + star;
    console.log(column);
  }
  console.log(border);
}
frame(["Write", "good", "code", "every", "day"]);
