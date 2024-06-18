input = `√√81*2+log10+sin45+cos45`
input = input.split('')
closed_expression = 1
insert_expression = 1
arraySymbols = ['√', 'log', 'sin', 'cos', 'tan']

function verification(operator, i, op) {
    if (input[op] == operator && op > i) {
        closed_expression++
        input.splice(op, 0, `)`)
        return 'stop'
    }
}

for (i = 0; i < input.length; i++) {
    if (input[i] == 'l' && input[i + 1] == 'o') {
        input.splice(i, 1)
        input.splice(i, 1)
        input.splice(i, 1)
        input.splice(i, 0, 'log')
    }
    if (input[i] == 's' && input[i + 1] == 'i') {
        input.splice(i, 1)
        input.splice(i, 1)
        input.splice(i, 1)
        input.splice(i, 0, 'sin')
    }
    if (input[i] == 'c' && input[i + 1] == 'o') {
        input.splice(i, 1)
        input.splice(i, 1)
        input.splice(i, 1)
        input.splice(i, 0, 'cos')
    }
    if (input[i] == 't' && input[i + 1] == 'a') {
        input.splice(i, 1)
        input.splice(i, 1)
        input.splice(i, 1)
        input.splice(i, 0, 'tan')
    }
}


function conversion(symbol, expression) {

    for (i = 0; i < input.length; i++) {
        if (input[i] == symbol) {
            if (arraySymbols.includes(symbol)) {
                input.splice(i, 1)
                input.splice(i, 0, expression)
            } else if (symbol == 'π') {
                input.splice(i, 1)
                input.splice(i, 0, expression)
                break
            }
            insert_expression++

            for (let op = 0; op < input.length; op++) {
                if (verification('+', i, op) == 'stop') break
                else if (verification('-', i, op) == 'stop') break
                else if (verification('*', i, op) == 'stop') break
                else if (verification('/', i, op) == 'stop') break
            }
        }
    }
}

conversion('√', 'Math.sqrt(')
conversion('π', 'Math.PI')
conversion('log', 'Math.log10(')
conversion('sin', 'Math.sin(')
conversion('cos', 'Math.cos(')

while (insert_expression != closed_expression) {
    input.push(')')
    closed_expression++
}

input = input.join('')
console.log(input)

console.log(eval(input))