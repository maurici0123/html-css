////////////////////////////////////////////////////////////////////////////////  Declaração das principais variavei
const invalid = document.getElementById('invalid') // Onde aparecerá o aviso "operação inválida!"
const expression = document.getElementById('number') // Tela da expressão
const operator = document.getElementsByClassName('operator') // Operadores

// Criando um array com todos os operadores
const arrayOperator = []
for (i = 0; i < operator.length; i++) {
    arrayOperator.push(operator[i].value)
}

resul = `` // Inicializa a variável 'resul' como uma string vazia. Esta variável armazenará a expressão aritmética que está sendo construída
r = 0 // Inicializa a variável 'r' como 0. Esta variável é uma flag para controlar se o último botão pressionado foi o botão '='

// Obtém referências para vários elementos HTML que serão usados para controlar a funcionalidade de expandir/recolher da calculadora
const expand = document.querySelector('#expand')
const btn_advanced = document.querySelectorAll('.btn_advanced')
const container = document.querySelector('.container')
const main = document.querySelector('#main')

// Define ícones para os botões de expandir/recolher usando a biblioteca Font Awesome
const chevron_down = '<i class="fa-solid fa-chevron-down"></i>'
const chevron_up = '<i class="fa-solid fa-chevron-up"></i>'
const chevron_left = '<i class="fa-solid fa-chevron-left"></i>'
const chevron_right = '<i class="fa-solid fa-chevron-right"></i>'

////////////////////////////////////////////////////////////////////////////////  Parte responsavel pela responsividade dos componentes

bodyWidth = document.body.offsetWidth // Obtém a largura atual da janela do navegador em pixels

// Define a aparência inicial do botão 'expand' e o layout da calculadora com base na largura da janela
if (bodyWidth <= 830) {
    block = expand.innerHTML = chevron_down // Define o ícone do botão 'expand' para baixo
    none = chevron_up // Define o ícone para cima (usado quando a calculadora estiver expandida)
    container_advanced = 'vertical' // Define o layout dos botões avançados como vertical
} else {
    block = expand.innerHTML = chevron_left // Define o ícone do botão 'expand' para a esquerda
    none = chevron_right // Define o ícone para a direita (usado quando a calculadora estiver expandida)
    container_advanced = 'horizontal' // Define o layout dos botões avançados como horizontal
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
    // Verifica o estado atual da seção de botões avançados (expandida ou recolhida) usando o atributo 'dis' do botão 'expand'
    // e alterna a visibilidade, layout e estilos da calculadora de acordo
    if (expand.getAttribute('dis') == 'block') {
        // Se a calculadora estiver expandida, recolhe a seção de botões avançados
        expand.setAttribute('dis', 'none') // Define o atributo 'dis' como 'none'
        expand.innerHTML = block // Define o ícone do botão 'expand' para indicar que a seção pode ser expandida
        document.body.style.height = '100vh' // Define a altura do corpo do documento para 100% da altura da janela

        // Ajusta o layout da calculadora para telas menores
        if (bodyWidth <= 420) {
            // Para telas muito pequenas, define a altura e largura da calculadora para 300px por 320px
            container.style.height = '300px'
            main.style.width = '320px'
        } else if (bodyWidth <= 575) {
            // Para telas pequenas, define a altura e largura da calculadora para 470px por 400px
            container.style.height = '470px'
            main.style.width = '400px'
        } else {
            // Para telas maiores, define a altura e largura da calculadora para 500px por 550px
            container.style.height = '500px'
            main.style.width = '550px'
        }

        // Define as áreas do grid para a calculadora recolhida usando a propriedade 'gridTemplateAreas'
        container.style.gridTemplateColumns = '1fr 1fr 1fr 1fr' // Define quatro colunas de tamanho igual
        container.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr' // Define cinco linhas de tamanho igual
        // Define a posição de cada elemento da calculadora no grid. Os nomes 'b1', 'b2', etc. se referem aos elementos HTML no código HTML
        container.style.gridTemplateAreas = "'b7 b8 b9 b_del' 'b4 b5 b6 b_plus' 'b1 b2 b3 b_minus' 'b_dot b0 b_bar bx' 'b_advanced b_reset b_equal b_equal'"

        // Oculta os botões avançados
        btn_advanced.forEach((btn) => {
            btn.style.display = 'none'
        })

    } else if (expand.getAttribute('dis') == 'none') {
        // Se a calculadora estiver recolhida, expande a seção de botões avançados
        expand.setAttribute('dis', 'block') // Define o atributo 'dis' como 'block'
        expand.innerHTML = none // Define o ícone do botão 'expand' para indicar que a seção pode ser recolhida

        // Ajusta o layout da calculadora para telas maiores, dependendo da orientação (horizontal ou vertical)
        if (container_advanced == 'horizontal') {
            // Se a orientação for horizontal, define as áreas do grid, colunas e largura da calculadora
            container.style.gridTemplateAreas = "'r1 r2 b7 b8 b9 b_del' 'r3 r4 b4 b5 b6 b_plus' 'r5 r6 b1 b2 b3 b_minus' 'r7 r8 b_dot b0 b_bar bx' 'r9 r10 b_advanced b_reset b_equal b_equal'"
            container.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr' // Define seis colunas de tamanho igual
            main.style.width = '780px' // Define a largura da calculadora para 780px
        } else if (container_advanced == 'vertical') {
            // Se a orientação for vertical, define as áreas do grid, linhas e altura da calculadora
            container.style.gridTemplateAreas = "'b7 b8 b9 b_del' 'b4 b5 b6 b_plus' 'b1 b2 b3 b_minus' 'b_dot b0 b_bar bx' ' b_advanced b_reset b_equal b_equal' 'r2 r2 r4 r4' 'r1 r3 r5 r6' 'r7 r8 r9 r10'"
            container.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' // Define oito linhas de tamanho igual
            container.style.height = '680px' // Define a altura da calculadora para 680px
            document.body.style.height = 'auto' // Define a altura do corpo do documento como 'auto'
        }

        // Exibe os botões avançados
        btn_advanced.forEach((btn) => {
            btn.style.display = 'block'
        })
    }
}

////////////////////////////////////////////////////////////////////////////////  parte responsavel pelo calculo

// Função para calcular o resultado de uma expressão matemática
function calcular(calc) {
    input = calc // Atribui a expressão de entrada para a variável 'input'
    console.log(input)
    input = input.split('') // Divide a expressão em um array de caracteres
    closed_expression = insert_expression = 0 // Inicializa as variáveis 'closed_expression' e 'insert_expression' como 0, provavelmente usadas para controlar a quantidade de parênteses
    symbolsArray = ['√', 'log', 'sin', 'cos', 'tan', 'π', '^'] // Array de símbolos matemáticos
    expressionArray = ['Math.sqrt(', 'Math.log10(', 'Math.sin(', 'Math.cos(', 'Math.tan(', 'Math.PI', '**'] // Array de expressões matemáticas correspondentes aos símbolos

    // Função para remover três elementos do array 'input' a partir do índice 'i'
    function delete_three(i) {
        input.splice(i, 1) // Remove o elemento no índice 'i'
        input.splice(i, 1) // Remove o próximo elemento
        input.splice(i, 1) // Remove o próximo elemento
    }

    // Função para verificar se um operador está presente no array 'input' e inserir um ')' antes dele
    function verification(operator, op) {
        if (input[op] == operator || operator.includes(input[op])) {
            closed_expression++ // Incrementa a contagem de expressões fechadas
            input.splice(op, 0, `)`) // Insere ')' no índice 'op'
            return true
        }
    }

    // Função para inserir o operador de multiplicação '*' implicitamente em alguns casos
    function insert_multiplication() {
        for (i = 0; i < input.length - 1; i++) {
            if (input[i] == ')' && input[i + 1] == '(') input.splice(i + 1, 0, '*') // Se encontrar ')(' insere '*' entre eles: )*(

            // Insere '*' se encontrar as seguintes combinações:
            if (!isNaN(input[i]) && input[i + 1] == '(') input.splice(i + 1, 0, '*') // Número seguido por parênteses: number*(
            if (input[i] == ')' && !isNaN(input[i + 1])) input.splice(i + 1, 0, '*') // Parênteses seguido por número: )*number
            if (input[i] == 'Math.PI' && !isNaN(input[i + 1])) input.splice(i + 1, 0, '*') // 'Math.PI' seguido por número: PI*number

            if (!isNaN(input[i]) && input[i + 1].match(/Math\.\w+/)) input.splice(i + 1, 0, '*') // Número seguido por uma função matemática: number*Math
            if (input[i] == ')' && input[i + 1].match(/Math\.\w+/)) input.splice(i + 1, 0, '*') // Parênteses seguido por uma função matemática: )*Math
        }
    }

    // Função para calcular o fatorial de um número 'n'
    function solve_factorial(n) {
        if (n == 0) {
            return 1
        }
        return n * solve_factorial(n - 1)
    }

    // Função para calcular o fatorial de um número na expressão
    function factorial() {
        pos2 = pos1 = parentheses = 0
        x = false

        // Insere '*' se encontrar as seguintes combinações com fatorial:
        for (i = 0; i < input.length - 1; i++) {
            if (input[i] == '!' && input[i + 1] == '(') input.splice(i + 1, 0, '*') // seguido por parênteses: !*(
            if (input[i] == '!' && input[i + 1].match(/Math\.\w+/)) input.splice(i + 1, 0, '*') // seguido por função matemática: !*Math
            if (input[i] == '!' && !isNaN(input[i + 1])) input.splice(i + 1, 0, '*') // seguido por número: !*number
        }

        // Percorre a expressão de trás para frente para encontrar a posição do fatorial e dos parênteses
        for (i = input.length - 1; i >= 0; i--) {
            if (input[i] == '!') {
                pos2 = i // Armazena a posição do '!'

                if (input[i - 1] == ')') {
                    x = true // Define 'x' como true se houver um ')' antes do '!'
                }

                if (input[i + 1] == ')') {
                    x = true // Define 'x' como true se houver um ')' depois do '!'
                    pos2 = i + 2 // Ajusta a posição para depois do ')'
                }
            }

            // Conta os parênteses
            if (input[i] == ')' && input[i] <= pos2) {
                parentheses++
            }
            if (input[i] == '(' && input[i] <= pos2) {
                parentheses--
            }

            // Determina a posição inicial 'pos1' para calcular o fatorial com base na posição dos operadores e parênteses
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

        // Prepara para a expreção para calcular o fatorial
        if (pos2 != 0) {
            fat = input.slice(pos1, pos2) // Extrai a parte da expressão que precisa ser calculada como fatorial
            fat = fat.join('')
            fat = fat.replace(/!/, '') // Remove o '!' da expressão
            size = fat.length + 1
            fat = solve_factorial(eval(fat)) // Calcula o fatorial usando a função 'solve_factorial'
            input.splice(pos1, size) // Remove a parte original da expressão
            input.splice(pos1, 0, fat) // Insere o resultado do fatorial na expressão
        }
    }

    // Função para converter símbolos matemáticos em suas respectivas expressões JavaScript
    function conversion(symbol, expression, no_parentheses = false) {
        for (i = 0; i < input.length; i++) {
            if (input[i] == symbol) {
                if (symbolsArray.includes(symbol)) {
                    input.splice(i, 1) // Remove o símbolo
                    input.splice(i, 0, expression) // Insere a expressão correspondente

                    // Se 'no_parentheses' for falso, insere parênteses para a expressão
                    if (no_parentheses) {
                        null // Não faz nada
                    } else {
                        insert_expression++ // Incrementa a contagem de expressões inseridas
                        parentheses = 0 // Inicializa a contagem de parênteses

                        // Encontra a posição correta para inserir o ')' da expressão
                        for (op = i + 1; op < input.length; op++) {
                            if (input[op] == '(') {
                                parentheses++
                            }

                            if (input[op] == ')' && parentheses > 0) {
                                parentheses--
                            }

                            // Verifica se o operador está no nível correto de parênteses
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

    //////////////////////////////////////////////////////////////////////////////// chamada das funções

    // Loop para substituir as funções matemáticas escritas por extenso por suas abreviações
    for (i = 0; i < input.length; i++) {
        if (input[i] == 'l' && input[i + 1] == 'o') {
            delete_three(i) // Remove "log"
            input.splice(i, 0, 'log') // Insere "log"
        }
        if (input[i] == 's' && input[i + 1] == 'i') {
            delete_three(i) // Remove "sin"
            input.splice(i, 0, 'sin') // Insere "sin"
        }
        if (input[i] == 'c' && input[i + 1] == 'o') {
            delete_three(i) // Remove "cos"
            input.splice(i, 0, 'cos') // Insere "cos"
        }
        if (input[i] == 't' && input[i + 1] == 'a') {
            delete_three(i) // Remove "tan"
            input.splice(i, 0, 'tan') // Insere "tan"
        }
    }

    // Converte os símbolos e expressões restantes
    conversion('π', 'Math.PI', true) // Converte 'π' para 'Math.PI' sem parênteses
    conversion('^', '**', true) // Converte '^' para '**' sem parênteses
    conversion('√', 'Math.sqrt(') // Converte '√' para 'Math.sqrt('
    conversion('log', 'Math.log10(') // Converte 'log' para 'Math.log10('
    conversion('sin', 'Math.sin(') // Converte 'sin' para 'Math.sin('
    conversion('cos', 'Math.cos(') // Converte 'cos' para 'Math.cos('
    conversion('tan', 'Math.tan(') // Converte 'tan' para 'Math.tan('

    // Fecha o parênteses da ultíma função
    while (insert_expression != closed_expression) {
        input.push(')')
        closed_expression++
    }

    // Insere multiplicações implícitas
    insert_multiplication()

    // Calcula os fatoriais na expressão
    factorial()

    // Junta a expressão em uma string
    input = input.join('')
    resul = eval(input) // Avalia a expressão e armazena o resultado na variável 'resul'
    console.log(resul) // Exibe o resultado no console
    return resul // Retorna o resultado
}

// Função para apagar o último caractere da expressão aritmética
function delet() {
    // Limpa a mensagem de erro
    invalid.innerHTML = ``

    resul = String(resul) // Converte 'resul' para string

    if (resul[resul.length - 1] == 'g' || resul[resul.length - 1] == 'n' || resul[resul.length - 1] == 's') {
        resul = resul.slice(0, -3) // Remove os últimos 3 caractere
    } else {
        resul = resul.slice(0, -1) // Remove o último caractere
    }

    // Atualiza o display da calculadora, substituindo '*' por '×'
    expression.innerHTML = resul.replace(/\*/g, '<i class="fa-solid fa-xmark"></i>')
}

// Função para calcular o resultado final da expressão
function final_result() {
    try {
        resul = calcular(resul) // Chama a função 'calcular' para formatar a expressão
        expression.innerHTML = resul // Exibe o resultado no display
        r = 1 // Sinaliza que o botão '=' foi pressionado

        // Se o botão igual for acionado sem nada na expressão
        if (typeof (resul) == 'undefined') {
            resul = ''
            expression.innerHTML = ''
        }
    } catch (err) {
        // Exibe a mensagem de erro caso ocorra algum erro durante o cálculo
        invalid.innerHTML = 'operação inválida!'
    }
}

// Função para reiniciar a calculadora
function reset() {
    // Limpa a mensagem de erro, o display e reinicia as variáveis 'resul' e 'r'
    invalid.innerHTML = ``
    expression.innerHTML = ``
    resul = ``
    r = 0
}

// Função para verificar e evitar operadores duplicados consecutivos
function operator_verification(n1) {
    last = resul.length - 1 // Índice do último caractere em 'resul'

    // Se o operador atual for igual ao último operador, remove o último operador
    if (n1 == '*' && resul[last] == '*') delet()
    else if (n1 == '+' && resul[last] == '+') delet()
    else if (n1 == '-' && resul[last] == '-') delet()
    else if (n1 == '/' && resul[last] == '/') delet()
}

// Função para inserir número/operador no display e na expressão
function insert(n1) {
    if (n1 == '*') {
        expression.innerHTML += `<i class="fa-solid fa-xmark"></i>` // Exibe '×' para multiplicação
    } else {
        expression.innerHTML += n1 // Insere o número/operador no display
    }

    resul += n1 // Adiciona o número/operador à expressão
}

// Função para verificar se o primeiro operador inserido é válido
function initial_operator_check(n1) {
    // Apenas o operador '-' é permitido como primeiro operador
    if (n1 != '*' && n1 != '+' && n1 != '/' && n1 != ')' && n1 != '!') {
        insert(n1)
    }
}

// Função principal para lidar com a entrada dos números e operadores e construir a expressão aritmética
function calc(n1) {
    // Limpa a mensagem de erro
    invalid.innerHTML = ``

    if (r == 0) { // Se o botão '=' não foi pressionado ainda
        operator_verification(n1) // Verifica se há operadores duplicados

        if (resul.length == 0) {
            initial_operator_check(n1) // Verifica se o primeiro operador é válido
        } else {
            insert(n1) // Insere o número/operador na expressão e no display
        }
    } else if (r == 1) { // Se o botão '=' foi pressionado
        if (arrayOperator.includes(n1)) {
            // Se o novo input for um operador, adiciona à expressão atual
            if (n1 == '*') {
                expression.innerHTML += `<i class="fa-solid fa-xmark"></i>`
            } else {
                expression.innerHTML += n1
            }
            resul += n1
        } else {
            // Se o novo input for um número, inicia uma nova expressão
            if (n1 == '*') {
                expression.innerHTML = `<i class="fa-solid fa-xmark"></i>`
            } else {
                expression.innerHTML = n1
            }
            resul = n1
        }
        r = 0 // Reinicia a flag 'r' para indicar que uma nova expressão está sendo iniciada
    }
}

// acionar a função final_result qundo o Enter for apertado
document.body.addEventListener('keyup', (e) => {
    console.log(e.key)
    if (e.key === 'Enter') {
        final_result()
    } else if (!isNaN(e.key) || arrayOperator.includes(e.key)) {
        calc(e.key) // chamando a função calc com o valor do caractere
    } else if (e.key == 'Dead') { // chamando o botão Dead for acionado
        calc('^') 
    } else if (e.key == 'Backspace') { // chamando o botão Backspace for acionado
        delet()
    } else if (e.key == 'Escape') { // chamando o botão Esc for acionado
        reset()
    }
})