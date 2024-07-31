const number = document.getElementById('number')
const operator = document.getElementsByClassName('operator')
resul = ''
r = 0

const expand = document.querySelector('#expand')
const btn_advanced = document.querySelectorAll('.btn_advanced')
const container = document.querySelector('.container')
const main = document.querySelector('#main')

const chevron_down = '<i class="fa-solid fa-chevron-down"></i>'
const chevron_up = '<i class="fa-solid fa-chevron-up"></i>'
const chevron_left = '<i class="fa-solid fa-chevron-left"></i>'
const chevron_right = '<i class="fa-solid fa-chevron-right"></i>'


bodyWidth = document.body.offsetWidth
if (bodyWidth <= 830) {
    block = expand.innerHTML = chevron_down
    none = chevron_up
    container_advanced = 'vertical'
} else {
    block = expand.innerHTML = chevron_left
    none = chevron_right
    container_advanced = 'horizontal'
}

window.addEventListener('resize', () => {
    bodyWidth = document.body.offsetWidth

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


function Expand() {
    if (expand.getAttribute('dis') == 'block') {
        expand.setAttribute('dis', 'none')
        expand.innerHTML = block
        
        document.body.style.height = '100vh'
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
        
        container.style.gridTemplateColumns = '1fr 1fr 1fr 1fr'
        container.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr'
        container.style.gridTemplateAreas = "'b7 b8 b9 b_del' 'b4 b5 b6 b_plus' 'b1 b2 b3 b_minus' 'b_dot b0 b_bar bx' 'b_advanced b_reset b_equal b_equal'"
        
        btn_advanced.forEach((btn) => {
            btn.style.display = 'none'
        })

    } else if (expand.getAttribute('dis') == 'none') {
        expand.setAttribute('dis', 'block')
        expand.innerHTML = none

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

        btn_advanced.forEach((btn) => {
            btn.style.display = 'block'
        })
    }
}


function delet() {
    resul = String(resul)
    resul = resul.slice(0, -1)
    number.innerHTML = resul.replace(/\*/g, 'X')
}


function final_result() {
    resul = eval(resul)
    number.innerHTML = eval(resul)
    r = 1

    if (typeof (resul) == 'undefined') {
        resul = ''
        number.innerHTML = ''
    }
}


function reset() {
    number.innerHTML = ''
    resul = ''
}


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


function initial_operator_check(n1) {
    if (n1 != '*' && n1 != '+' && n1 != '/') {
        if (n1 == '*') {
            number.innerHTML += 'X'
        } else {
            number.innerHTML += n1
        }
        resul += n1
    }
}


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

        r = 0
    }
}
