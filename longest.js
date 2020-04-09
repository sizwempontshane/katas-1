function longest(array) {
    var max = array[0].length;

    array.map(v => max = Math.max(max, v.length));

    result = array.filter(v => v.length == max);
    var align = result.join('\n');

    console.log(align);
}
longest(["once", "upon", "a", "time"]);