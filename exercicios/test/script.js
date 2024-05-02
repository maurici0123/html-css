const btn_advan = document.querySelector('#btn_advanced')
const avan = document.querySelectorAll('.avan')
const container = document.querySelector('.container')

chevron_down = '<i class="fa-solid fa-chevron-down"></i>'
chevron_up = '<i class="fa-solid fa-chevron-up"></i>'
chevron_left = '<i class="fa-solid fa-chevron-left"></i>'
chevron_right = '<i class="fa-solid fa-chevron-right"></i>'


bodyWidth = document.body.offsetWidth
if (bodyWidth <= 830) {
    block = btn_advanced.innerHTML = chevron_down
    none = chevron_up
    container_advanced = 'vertical'
} else {
    block = btn_advanced.innerHTML = chevron_left
    none = chevron_right
    container_advanced = 'horizontal'
}

window.addEventListener('resize', () => {
    bodyWidth = document.body.offsetWidth

    if (bodyWidth <= 830) {
        btn_advan.getAttribute('dis') == 'block' ? block = btn_advanced.innerHTML = chevron_up : block = btn_advanced.innerHTML = chevron_down
        none = chevron_up
        container_advanced = 'vertical'
    } else {
        block = btn_advanced.innerHTML = chevron_left
        none = chevron_right
        container_advanced = 'horizontal'
    }
})


function advanced() {
    if (btn_advan.getAttribute('dis') == 'block') {
        btn_advan.setAttribute('dis', 'none')
        btn_advan.innerHTML = block

        container.style.width = '550px'
        container.style.height = '500px'
        container.style.gridTemplateColumns = '1fr 1fr 1fr 1fr'
        container.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr'
        container.style.gridTemplateAreas = "'b7 b8 b9 b_del' 'b4 b5 b6 b_plus' 'b1 b2 b3 b_minus' 'b_dot b0 b_bar bx' 'b_advanced b_reset b_equal b_equal'"

        for (c in avan) {
            avan[c].style.display = 'none'
        }
    }

    if (btn_advan.getAttribute('dis') == 'none') {
        btn_advan.setAttribute('dis', 'block')
        btn_advan.innerHTML = none


        if (container_advanced == 'horizontal') {
            container.style.gridTemplateAreas = "'r1 r2 b7 b8 b9 b_del' 'r3 r4 b4 b5 b6 b_plus' 'r5 r6 b1 b2 b3 b_minus' 'r7 r8 b_dot b0 b_bar bx' 'r9 r10 b_advanced b_reset b_equal b_equal'"
            container.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr'

            container.style.width = '780px'

        } else if (container_advanced == 'vertical') {
            container.style.gridTemplateAreas = "'b7 b8 b9 b_del' 'b4 b5 b6 b_plus' 'b1 b2 b3 b_minus' 'b_dot b0 b_bar bx' ' b_advanced b_reset b_equal b_equal' 'r2 r2 r4 r4' 'r1 r3 r5 r6' 'r7 r8 r9 r10'"
            container.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr 1fr 1fr'

            container.style.height = '620px'

        }

        for (c in avan) {
            avan[c].style.display = 'block'
        }
    }
}