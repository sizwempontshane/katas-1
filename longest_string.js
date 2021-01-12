//the longest string
function longest(array) {
  let max = array[0].length;

  array.map((v) => (max = Math.max(max, v.length)));

  result = array.filter((v) => v.length == max);
  let align = result.join("\n");

  console.log(align);
}
longest(["once", "upon", "a", "time"]);
