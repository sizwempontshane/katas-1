//combine two lists/arrays
function combine(arr1, arr2) {
  let array3 = [];

  for (let w = 0; w < arr1.length || w < arr2.length; w++) {
    array3.push(arr1[w], arr2[w]);
  }
  console.log(array3);
}
combine([11, 22, 33], [1, 2, 3]);
