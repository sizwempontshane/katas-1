function square(integer) {
    var a;
    var hash = '#';
    for (a = 0; a < integer; a++) {
        console.log(hash.repeat(integer));
    }
}
square(5);