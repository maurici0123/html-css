const input = `44`

function fatorial(n) {
    if (n == 0) {
        return 1
    }
    return n * fatorial(n - 1)
}

console.log(fatorial(input))