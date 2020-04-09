function isosceles(val) {
    for(var i=1; i<= val; i++){
        var spaces = ' '.repeat(val-i); // spaces 5-1=4spaces
        var hash = "#". repeat(i*2 -1) // 1*2-1=1hash equation to give odd numbers   
      
        console.log(spaces + hash);
    }
}
isosceles(3);