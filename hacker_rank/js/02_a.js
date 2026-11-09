// Hacker Rank : Simple Array Sum
function simpleArraySum(ar) {
    let jumlah = 0
    for (let i = 0; i < ar.length; i++) {
        jumlah = ar[i] + jumlah
    }
    return jumlah
}

// Testing di lokal
console.log(simpleArraySum([1, 2, 3, 4, 10, 11])); // output : 31