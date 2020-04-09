function combine(arr1, arr2) {
   var arr3 = [];
    
   for (var w = 0; w < arr1.length || w < arr2.length; w++) {
        arr3.push(arr1[w], arr2[w]);
   }
   console.log(arr3);
}
combine([11,22,33], [1,2,3]);