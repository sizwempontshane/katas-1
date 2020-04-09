function isosceles(val) {
    for(var i=1; i<= val; i++){
        var spaces = ' '.repeat(val-i); 
        var hash = "#". repeat(i*2 -1)    
      
        console.log(spaces + hash);
    }
}
isosceles(3);