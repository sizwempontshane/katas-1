function longest(arr){
    var longStr = arr[0];
    for (l = 0; l < arr.length; l++){
        if (arr[l].length > longStr.length){
            longStr = arr[l];
        }
    }
    return longStr;
}
console.log(longest(["the","quick","brown", "fox", "ate", "my", "chickens"]));
console.log(longest(["once", "upon", "a", "time"]));