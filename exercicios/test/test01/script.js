const invalid = document.getElementById('invalid')
const number = document.getElementById('number')
const operator = document.getElementsByClassName('operator')
resul = `` // Inicializa a variável 'resul' para armazenar a expressão aritmética que está sendo construída
r = 0 // Inicializa a variável 'r' para controlar se o último botão pressionado foi o botão '=' (resultado)

const expand = document.querySelector('#expand')
const btn_advanced = document.querySelectorAll('.btn_advanced')
const container = document.querySelector('.container')
const main = document.querySelector('#main')

// Define ícones para os botões de expandir/recolher
const chevron_down = '<i class="fa-solid fa-chevron-down"></i>'
const chevron_up = '<i class="fa-solid fa-chevron-up"></i>'
const chevron_left = '<i class="fa-solid fa-chevron-left"></i>'
const chevron_right = '<i class="fa-solid fa-chevron-right"></i>'

bodyWidth = document.body.offsetWidth // Obtém a largura atual da janela do navegador

// Define a aparência inicial do botão 'expand' e o layout da calculadora com base na largura da janela
if (bodyWidth <= 830) {
    block = expand.innerHTML = chevron_down
    none = chevron_up
    container_advanced = 'vertical'
} else {
    block = expand.innerHTML = chevron_left
    none = chevron_right
    container_advanced = 'horizontal'
}

// Adiciona um evento para redimensionamento da janela, para ajustar a calculadora dinamicamente
window.addEventListener('resize', () => {
    bodyWidth = document.body.offsetWidth // Atualiza a largura da janela

    // Ajusta o ícone 'expand' e a disposição com base na nova largura da janela
    if (bodyWidth <= 830) {
        expand.getAttribute('dis') == 'block' ? block = expand.innerHTML = chevron_up : block = expand.innerHTML = chevron_down
        none = chevron_up
        container_advanced = 'vertical'
    } else {
        block = expand.innerHTML = chevron_left
        none = chevron_right
        container_advanced = 'horizontal'
    }
})

// Função para expandir/recolher a seção de botões avançados
function Expand() {
    // Verifica o estado atual da seção de botões avançados e alterna a visibilidade e o layout
    if (expand.getAttribute('dis') == 'block') {
        expand.setAttribute('dis', 'none')
        expand.innerHTML = block
        document.body.style.height = '100vh'

        // Ajusta o layout da calculadora para telas menores
        if (bodyWidth <= 420) {
            container.style.height = '300px'
            main.style.width = '320px'
        } else if (bodyWidth <= 575) {
            container.style.height = '470px'
            main.style.width = '400px'
        } else {
            container.style.height = '500px'
            main.style.width = '550px'
        }

        // Define as áreas do grid para a calculadora recolhida
        container.style.gridTemplateColumns = '1fr 1fr 1fr 1fr'
        container.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr'
        container.style.gridTemplateAreas = "'b7 b8 b9 b_del' 'b4 b5 b6 b_plus' 'b1 b2 b3 b_minus' 'b_dot b0 b_bar bx' 'b_advanced b_reset b_equal b_equal'"

        // Oculta os botões avançados
        btn_advanced.forEach((btn) => {
            btn.style.display = 'none';
        })

    } else if (expand.getAttribute('dis') == 'none') {
        expand.setAttribute('dis', 'block')
        expand.innerHTML = none

        // Ajusta o layout da calculadora para telas maiores, dependendo da orientação (horizontal ou vertical)
        if (container_advanced == 'horizontal') {
            container.style.gridTemplateAreas = "'r1 r2 b7 b8 b9 b_del' 'r3 r4 b4 b5 b6 b_plus' 'r5 r6 b1 b2 b3 b_minus' 'r7 r8 b_dot b0 b_bar bx' 'r9 r10 b_advanced b_reset b_equal b_equal'"
            container.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr'
            main.style.width = '780px'
        } else if (container_advanced == 'vertical') {
            container.style.gridTemplateAreas = "'b7 b8 b9 b_del' 'b4 b5 b6 b_plus' 'b1 b2 b3 b_minus' 'b_dot b0 b_bar bx' ' b_advanced b_reset b_equal b_equal' 'r2 r2 r4 r4' 'r1 r3 r5 r6' 'r7 r8 r9 r10'"
            container.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'
            container.style.height = '680px'
            document.body.style.height = 'auto'
        }

        // Exibe os botões avançados
        btn_advanced.forEach((btn) => {
            btn.style.display = 'block';
        })
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////



function calcular(calc) {
    input = calc
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
        for (i = 0; i < input.length - 1; i++) {
            if (input[i] == ')' && input[i + 1] == '(') input.splice(i + 1, 0, '*') //=>  )==(

            if (!isNaN(input[i]) && input[i + 1] == '(') input.splice(i + 1, 0, '*') //=>  number==(
            if (input[i] == ')' && !isNaN(input[i + 1])) input.splice(i + 1, 0, '*') //=>  )==number
            if (input[i] == 'Math.PI' && !isNaN(input[i + 1])) input.splice(i + 1, 0, '*') //=>  PI==number

            if (!isNaN(input[i]) && input[i + 1].match(/Math\.\w+/)) input.splice(i + 1, 0, '*') //=>  number==Math
            if (input[i] == ')' && input[i + 1].match(/Math\.\w+/)) input.splice(i + 1, 0, '*') //=>  )==Math
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

        for (i = 0; i < input.length - 1; i++) {
            if (input[i] == '!' && input[i + 1] == '(') input.splice(i + 1, 0, '*') //=>  !==(
            if (input[i] == '!' && input[i + 1].match(/Math\.\w+/)) input.splice(i + 1, 0, '*') //=>  !==Math
            if (input[i] == '!' && !isNaN(input[i + 1])) input.splice(i + 1, 0, '*') //=>  !==number
        }

        for (i = input.length - 1; i >= 0; i--) {
            if (input[i] == '!') {
                pos2 = i

                if (input[i - 1] == ')') {
                    x = true
                }

                if (input[i + 1] == ')') {
                    x = true
                    pos2 = i + 2
                }
            }

            if (input[i] == ')' && input[i] <= pos2) {
                parentheses++
            }

            if (input[i] == '(' && input[i] <= pos2) {
                parentheses--
            }

            if (x) {
                if (i <= pos2 && input[i] == '(' || parentheses == -1) {
                    pos1 = i
                    break
                }
            } else {
                if (i <= pos2 && (input[i] == '+' || input[i] == '-' || input[i] == '*' || input[i] == '/')) {
                    pos1 = i + 1
                    break
                }
            }
        }

        if (pos2 != 0) {
            fat = input.slice(pos1, pos2)
            fat = fat.join('')
            fat = fat.replace(/!/, '')
            size = fat.length + 1
            fat = solve_factorial(eval(fat))
            input.splice(pos1, size)
            input.splice(pos1, 0, fat)
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

                        parentheses = 0
                        for (op = i + 1; op < input.length; op++) {

                            if (input[op] == '(') {
                                parentheses++
                            }

                            if (input[op] == ')' && parentheses > 0) {
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

    insert_multiplication()

    factorial()

    input = input.join('')
    console.log(input)
    resul = eval(input)
    console.log(resul)
    return resul
}



// Função para apagar o último caractere da expressão aritmética
function delet() {
    // apagar a menssagem de 'operação invãlido'
    invalid.innerHTML = ``

    resul = String(resul)

    resul = resul.slice(0, -1)

    number.innerHTML = resul.replace(/\*/g, '<i class="fa-solid fa-xmark"></i>') // Substitui '*' por 'X' na exibição
}

// Função para calcular o resultado final da expressão
function final_result() {

    try {
        resul = calcular(resul)
        //console.log(resul)
        resul = eval(resul)
        number.innerHTML = eval(resul)
        r = 1 // Sinaliza que o botão '=' foi pressionado
    } catch (err) {
        // mostra a menssagem de 'operação invãlido'
        invalid.innerHTML = 'operação inválida!'
    }
}

// Função para reiniciar a calculadora
function reset() {
    // apagar a menssagem de 'operação invãlido'
    invalid.innerHTML = ``
    number.innerHTML = ``
    resul = ``
    r = 0
}

// Função para verificar e evitar operadores duplicados consecutivos
function operator_verification(n1) {
    last = resul.length - 1
    if (n1 == '*' && resul[last] == '*') delet()

    else if (n1 == '+' && resul[last] == '+') delet()

    else if (n1 == '-' && resul[last] == '-') delet()

    else if (n1 == '/' && resul[last] == '/') delet()
}

// Função para inserir número/operador
function insert(n1) {
    if (n1 == '*') {
        number.innerHTML += `<i class="fa-solid fa-xmark"></i>`
    } else {
        number.innerHTML += n1
    }

    resul += n1
}

// Função para verificar se o primeiro operador é válido
function initial_operator_check(n1) {
    // Só aceito o operador de subtração
    if (n1 != '*' && n1 != '+' && n1 != '/') {
        insert(n1)
    }
}

// Função para lidar com a entrada dos números e operadores e construir a expressão aritmética
function calc(n1) {
    // apagar a menssagem de 'operação inválido'
    invalid.innerHTML = ``

    if (r == 0) {
        operator_verification(n1)

        if (resul.length == 0) {
            initial_operator_check(n1)
        } else {
            insert(n1)
        }
    } else if (r == 1) {

        if (n1 == operator[0].value || n1 == operator[1].value || n1 == operator[2].value || n1 == operator[3].value) {
            if (n1 == '*') {
                number.innerHTML += `<i class="fa-solid fa-xmark"></i>`
            } else {
                number.innerHTML += n1
            }
            resul += n1
        } else {

            if (n1 == '*') {
                number.innerHTML = `<i class="fa-solid fa-xmark"></i>`
            } else {
                number.innerHTML = n1
            }
            resul = n1
        }
        r = 0 // Reinicia a flag 'r'
    }
}