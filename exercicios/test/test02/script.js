x = `5*5+√9*2-2+5`
x = x.split('')
o = 0

for (let i = 0; i < x.length; i++) {
    if (x[i] == '√') {
        x.splice(i, 1)
        x.splice(i, 0, 'Math.sqrt(')

        for (let op = 0; op < x.length; op++) {
            if (x[op] == '+' && op > i) {
                x.splice(op, 1)
                x.splice(op, 0, ')+')
                break
            }

            if (x[op] == '-' && op > i) {
                x.splice(op, 1)
                x.splice(op, 0, ')-')
                break
            }

            if (x[op] == '*' && op > i) {
                x.splice(op, 1)
                x.splice(op, 0, ')*')
                break
            }

            if (x[op] == '/' && op > i) {
                x.splice(op, 1)
                x.splice(op, 0, ')/')
                break
            }
        }
    }
}

x = x.join('')
console.log(x)

console.log(eval(x))