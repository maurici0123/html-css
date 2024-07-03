input = `2*cos34log10(√((20+5)+11))`
input = input.split('')
closed_expression = insert_expression = 0
symbolsArray = ['√', 'log', 'sin', 'cos', 'tan', 'π', '^']
expressionArray = ['Math.sqrt(', 'Math.log10(', 'Math.sin(', 'Math.cos(', 'Math.tan(', 'Math.PI', '**']

function delete_three(i) {
    input.splice(i, 1)
    input.splice(i, 1)
    input.splice(i, 1)
}

function verification(operator, op) {
    if (input[op] == operator || operator.includes(input[op])) {
        closed_expression++
        input.splice(op, 0, `)`)
        return true
    }
}

function insert_multiplication() {
    for (let i = 0; i < input.length - 1; i++) {
        if (input[i] == ')' && input[i + 1] == '(') input.splice(i + 1, 0, '*') // )(

        if (!isNaN(input[i]) && input[i + 1] == '(') input.splice(i + 1, 0, '*') // number(
        if (input[i] == ')' && !isNaN(input[i + 1])) input.splice(i + 1, 0, '*') // )number

        if (!isNaN(input[i]) && input[i + 1].match(/Math\.\w+/)) input.splice(i + 1, 0, '*') // numberMath

        if (input[i] == ')' && input[i + 1].match(/Math\.\w+/)) input.splice(i + 1, 0, '*') // )Math
    }
}

function conversion(symbol, expression, no_parentheses = false) {

    for (i = 0; i < input.length; i++) {
        if (input[i] == symbol) {
            if (symbolsArray.includes(symbol)) {
                input.splice(i, 1)
                input.splice(i, 0, expression)

                if (no_parentheses) {
                    null
                } else {
                    insert_expression++

                    for (let op = i + 1; op < input.length; op++) {
                        if (verification('+', op)) break
                        if (verification('-', op)) break
                        if (verification('*', op)) break
                        if (verification('/', op)) break
                        if (verification(expressionArray, op)) break
                        if (verification(symbolsArray, op)) break
                    }

                    insert_multiplication()
                }
            }
        }
    }
}

//////////////////////////////////////////////////////////////

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