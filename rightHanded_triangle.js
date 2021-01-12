//right handed triangle
function triangle(value) {
  let hashes = [];
  for (let t = 1; t <= value; t++) {
    hashes += "#";
    console.log(hashes);
  }
}
triangle(4);
