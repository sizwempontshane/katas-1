function combine(arr1, arr2) {
    var c = [];
    
   for (var w = 0; w < arr1.length || w < arr2.length; w++) {
       c.push(arr1[w], arr2[w]);
   }
   return c;
}
console.log(combine([11,22,33], [1,2,3]));