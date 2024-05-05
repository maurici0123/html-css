const expand = document.querySelector('#expand')
const btn_advanced = document.querySelectorAll('.btn_advanced')
const container = document.querySelector('.container')

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

        container.style.width = '550px'
        container.style.height = '500px'
        container.style.gridTemplateColumns = '1fr 1fr 1fr 1fr'
        container.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr'
        container.style.gridTemplateAreas = "'b7 b8 b9 b_del' 'b4 b5 b6 b_plus' 'b1 b2 b3 b_minus' 'b_dot b0 b_bar bx' 'b_advanced b_reset b_equal b_equal'"

        for (c in btn_advanced) {
            btn_advanced[c].style.display = 'none'
        }
    }

    if (expand.getAttribute('dis') == 'none') {
        expand.setAttribute('dis', 'block')
        expand.innerHTML = none


        if (container_advanced == 'horizontal') {
            container.style.gridTemplateAreas = "'r1 r2 b7 b8 b9 b_del' 'r3 r4 b4 b5 b6 b_plus' 'r5 r6 b1 b2 b3 b_minus' 'r7 r8 b_dot b0 b_bar bx' 'r9 r10 b_advanced b_reset b_equal b_equal'"
            container.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr'

            container.style.width = '780px'

        } else if (container_advanced == 'vertical') {
            container.style.gridTemplateAreas = "'b7 b8 b9 b_del' 'b4 b5 b6 b_plus' 'b1 b2 b3 b_minus' 'b_dot b0 b_bar bx' ' b_advanced b_reset b_equal b_equal' 'r2 r2 r4 r4' 'r1 r3 r5 r6' 'r7 r8 r9 r10'"
            container.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr 1fr 1fr'

            container.style.height = '680px'

        }

        for (c in btn_advanced) {
            btn_advanced[c].style.display = 'block'
        }
    }
}