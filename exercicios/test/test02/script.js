x = `√4+√√81*(2)-2+log10+8`
x = x.split('')
te = 1
to = 1

function verification(operator, i, op) {
    if (x[op] == operator && op > i) {
        te++
        x.splice(op, 0, `)`)
        return 'stop'
    }
}

function conversion(symbol, expression) {

    for (i = 0; i < x.length; i++) {
        if (x[i] == symbol) {
            to++
            if (symbol == '√') {
                x.splice(i, 1)
                x.splice(i, 0, expression)
            } else {
                console.log(1)
                x.splice(i, 1)
                x.splice(i - 1, 1)
                x.splice(i - 2, 1)
                x.splice(i - 2, 0, expression)
            }

            for (let op = 0; op < x.length; op++) {
                if (verification('+', i, op) == 'stop') break
                else if (verification('-', i, op) == 'stop') break
                else if (verification('*', i, op) == 'stop') break
                else if (verification('/', i, op) == 'stop') break
            }
        }
    }
}

conversion('√', 'Math.sqrt(')
conversion('g', 'Math.log10(')

te != to ? x.push(')') : null

x = x.join('')
console.log(x)

console.log(eval(x))