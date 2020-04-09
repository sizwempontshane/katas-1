function frame(n) {
    for (var i = 0; i <= n; i++) {
        var star = ''.repeat()
    }
}

function frame(str){
    for (var i = 0; i <= str[i]; i++) {
    let border = '*'.repeat(str.length + 4)
    return `${border}\n* ${str[i]} *\n${border}`
    }
}

console.log(frame(["Hello", "World"]))
// frame(["Hello", "World"]);