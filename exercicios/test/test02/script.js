function calcular(calc) {
    console.time('time')
    input_range = calc
    input_range = input_range.split('')
    closed_expression = insert_expression = 0
    symbolsArray = ['√', 'log', 'sin', 'cos', 'tan', 'π', '^']
    expressionArray = ['Math.sqrt(', 'Math.log10(', 'Math.sin(', 'Math.cos(', 'Math.tan(', 'Math.PI', '**']

    function delete_three(i) {
        input_range.splice(i, 1)
        input_range.splice(i, 1)
        input_range.splice(i, 1)
    }

    function verification(operator, op) {
        if (input_range[op] == operator || operator.includes(input_range[op])) {
            closed_expression++
            input_range.splice(op, 0, `)`)
            return true
        }
    }

    function insert_multiplication() {
        for (i = 0; i < input_range.length - 1; i++) {
            if (input_range[i] == ')' && input_range[i + 1] == '(') input_range.splice(i + 1, 0, '*') //=>  )==(

            if (!isNaN(input_range[i]) && input_range[i + 1] == '(') input_range.splice(i + 1, 0, '*') //=>  number==(
            if (input_range[i] == ')' && !isNaN(input_range[i + 1])) input_range.splice(i + 1, 0, '*') //=>  )==number
            if (input_range[i] == 'Math.PI' && !isNaN(input_range[i + 1])) input_range.splice(i + 1, 0, '*') //=>  PI==number

            if (!isNaN(input_range[i]) && input_range[i + 1].match(/Math\.\w+/)) input_range.splice(i + 1, 0, '*') //=>  number==Math
            if (input_range[i] == ')' && input_range[i + 1].match(/Math\.\w+/)) input_range.splice(i + 1, 0, '*') //=>  )==Math
        }
    }

    function solve_factorial(n) {
        if (n == 0) {
            return 1
        }
        return n * solve_factorial(n - 1)
    }

    function factorial() {
        pos2 = pos1 = parentheses = 0
        x = false

        for (i = 0; i < input_range.length - 1; i++) {
            if (input_range[i] == '!' && input_range[i + 1] == '(') input_range.splice(i + 1, 0, '*') //=>  !==(
            if (input_range[i] == '!' && input_range[i + 1].match(/Math\.\w+/)) input_range.splice(i + 1, 0, '*') //=>  !==Math
            if (input_range[i] == '!' && !isNaN(input_range[i + 1])) input_range.splice(i + 1, 0, '*') //=>  !==number
        }

        for (i = input_range.length - 1; i >= 0; i--) {
            if (input_range[i] == '!') {
                pos2 = i

                if (input_range[i - 1] == ')') {
                    x = true
                }

                if (input_range[i + 1] == ')') {
                    x = true
                    pos2 = i + 2
                }
            }

            if (input_range[i] == ')' && input_range[i] <= pos2) {
                parentheses++
            }

            if (input_range[i] == '(' && input_range[i] <= pos2) {
                parentheses--
            }

            if (x) {
                if (i <= pos2 && input_range[i] == '(' || parentheses == -1) {
                    pos1 = i
                    break
                }
            } else {
                if (i <= pos2 && (input_range[i] == '+' || input_range[i] == '-' || input_range[i] == '*' || input_range[i] == '/')) {
                    pos1 = i + 1
                    break
                }
            }
        }

        if (pos2 != 0) {
            fat = input_range.slice(pos1, pos2)
            fat = fat.join('')
            fat = fat.replace(/!/, '')
            size = fat.length + 1
            fat = solve_factorial(eval(fat))
            input_range.splice(pos1, size)
            input_range.splice(pos1, 0, fat)
        }
    }

    function conversion(symbol, expression, no_parentheses = false) {

        for (i = 0; i < input_range.length; i++) {
            if (input_range[i] == symbol) {
                if (symbolsArray.includes(symbol)) {
                    input_range.splice(i, 1)
                    input_range.splice(i, 0, expression)

                    if (no_parentheses) {
                        null
                    } else {
                        insert_expression++

                        parentheses = 0
                        for (op = i + 1; op < input_range.length; op++) {

                            if (input_range[op] == '(') {
                                parentheses++
                            }

                            if (input_range[op] == ')' && parentheses > 0) {
                                parentheses--
                            }

                            if (parentheses == 0) {
                                if (verification('+', op)) break
                                if (verification('-', op)) break
                                if (verification('*', op)) break
                                if (verification('/', op)) break
                                if (verification(expressionArray, op)) break
                                if (verification(symbolsArray, op)) break
                            }
                        }
                    }
                }
            }
        }
    }

    //////////////////////////////////////////////////////////////

    for (i = 0; i < input_range.length; i++) {
        if (input_range[i] == 'l' && input_range[i + 1] == 'o') {
            delete_three(i)
            input_range.splice(i, 0, 'log')
        }
        if (input_range[i] == 's' && input_range[i + 1] == 'i') {
            delete_three(i)
            input_range.splice(i, 0, 'sin')
        }
        if (input_range[i] == 'c' && input_range[i + 1] == 'o') {
            delete_three(i)
            input_range.splice(i, 0, 'cos')
        }
        if (input_range[i] == 't' && input_range[i + 1] == 'a') {
            delete_three(i)
            input_range.splice(i, 0, 'tan')
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
        input_range.push(')')
        closed_expression++
    }

    insert_multiplication()

    factorial()

    input_range = input_range.join('')
    console.log(input_range)

    console.log(eval(input_range))
    console.timeEnd('time')
    console.log('-=-=-=-=-=-=-=-=-=-=-')
}

calcular('4+2')