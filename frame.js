function frame(array) {
    var i;
    var star = '*';
    var border = star.repeat(10);
    console.log(border);

    for (i = 0; i < array.length; i++) {
        var column = star + ' ' + array[i] + ' '.repeat(7-array[i].length) + star;
        console.log(column);
    }
    console.log(border);
}
frame(["Write","good","code","every","day"]);