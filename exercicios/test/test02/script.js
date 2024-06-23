input = `cos(27*3)`
input = input.split('')
closed_expression = 1
insert_expression = 1
arraySymbols = ['√', 'log', 'sin', 'cos', 'tan', 'π', '^']

function delete_three(i) {

    input.splice(i, 1)
    input.splice(i, 1)
    input.splice(i, 1)
}

function verification(operator, i, op) {
    if (input[op] == operator && op > i) {
        closed_expression++
        input.splice(op, 0, `)`)
        return true
    }
}

function insert_parentheses() {
    for (i = 0; i < input.length; i++) {
        
    }
}

function conversion(symbol, expression, no_parentheses = false) {

    for (i = 0; i < input.length; i++) {
        if (input[i] == symbol) {
            if (arraySymbols.includes(symbol)) {
                input.splice(i, 1)
                input.splice(i, 0, expression)

                no_parentheses ? null : insert_expression++

                if (insert_parentheses()) break
            }

            for (let op = 0; op < input.length; op++) {
                if (verification('+', i, op)) break
                else if (verification('-', i, op)) break //?
                else if (verification('*', i, op)) break //?
                else if (verification('/', i, op)) break //?
            }
        }
    }
}

//////////////////////////////////////////////////

for (i = 0; i < input.length; i++) {

}

for (i = 0; i < input.length; i++) {
    if (input[i] == 'l' && input[i + 1] == 'o') {
        delete_three(i)
        input.splice(i, 0, 'log')
    }
    if (input[i] == 's' && input[i + 1] == 'i') {
        delete_three(i)
        input.splice(i, 0, 'sin')
    }
    if (input[i] == 'c' && input[i + 1] == 'o') {
        delete_three(i)
        input.splice(i, 0, 'cos')
    }
    if (input[i] == 't' && input[i + 1] == 'a') {
        delete_three(i)
        input.splice(i, 0, 'tan')
    }
}

conversion('π', 'Math.PI', true)
conversion('^', '**', true)
conversion('√', 'Math.sqrt(')
conversion('log', 'Math.log10(')
conversion('sin', 'Math.sin(')
conversion('cos', 'Math.cos(')
conversion('tan', 'Math.tan(')

while (insert_expression != closed_expression) {
    input.push(')')
    closed_expression++
}

input = input.join('')
console.log(input)

console.log(eval(input))