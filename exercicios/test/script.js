const number = document.getElementById('number')
const operator = document.getElementsByClassName('operator')
resul = '' // Inicializa a variável 'resul' para armazenar a expressão aritmética que está sendo construída
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
        for (c in btn_advanced) {
            btn_advanced[c].style.display = 'none'
        }
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
        for (c in btn_advanced) {
            btn_advanced[c].style.display = 'block'
        }
    }
}

// Função para apagar o último caractere da expressão aritmética
function delet() {
    resul = String(resul)
    resul = resul.slice(0, -1)
    number.innerHTML = resul.replace(/\*/g, 'X') // Substitui '*' por 'X' na exibição
}

// Função para calcular o resultado final da expressão
function final_result() {
    resul = eval(resul)
    number.innerHTML = eval(resul)
    r = 1 // Sinaliza que o botão '=' foi pressionado

    // Lida com o caso de resultado indefinido (ex: divisão por zero)
    if (typeof (resul) == 'undefined') {
        resul = ''
        number.innerHTML = ''
        alert('Operação inválida!')
    }
}

// Função para reiniciar a calculadora
function reset() {
    number.innerHTML = ''
    resul = ''
}

// Função para verificar e evitar operadores duplicados consecutivos
function verification(n1) {
    last = resul.length
    if (n1 == '*' && resul[last - 1] == '*') {
        delet()
    } else if (n1 == '+' && resul[last - 1] == '+') {
        delet()
    } else if (n1 == '-' && resul[last - 1] == '-') {
        delet()
    } else if (n1 == '/' && resul[last - 1] == '/') {
        delet()
    }
}

// Função para verificar se o primeiro operador é válido
function initial_operator_check(n1) {
    // Só aceito o operador de subtração
    if (n1 != '*' && n1 != '+' && n1 != '/') {
        if (n1 == '*') {
            number.innerHTML += 'X'
        } else {
            number.innerHTML += n1
        }
        resul += n1
    }
}

// Função para lidar com a entrada dos números e operadores e construir a expressão aritmética
function calc(n1) {
    
    if (r == 0) {
        
        verification(n1)

        if (resul.length == 0) {

            initial_operator_check(n1)
        } else {
            
            if (n1 == '*') {
                number.innerHTML += 'X'
            } else {
                number.innerHTML += n1
            }
            resul += n1
        }
    } else if (r == 1) {
        
        if (n1 == operator[0].value || n1 == operator[1].value || n1 == operator[2].value || n1 == operator[3].value) {
            if (n1 == '*') {
                number.innerHTML += 'X'
            } else {
                number.innerHTML += n1
            }
            resul += n1
        } else {
            
            if (n1 == '*') {
                number.innerHTML = 'X'
            } else {
                number.innerHTML = n1
            }
            resul = n1
        }
        r = 0 // Reinicia a flag 'r'
    }
}