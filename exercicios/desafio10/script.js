btn_g = document.getElementById('left-top')
btn_r = document.getElementById('right-top')
btn_b = document.getElementById('right-bottom')
btn_y = document.getElementById('left-bottom')


vet=[]
gabarito=[]
index=0
count=0
document.getElementById('record_number').innerHTML = Number(localStorage.getItem('record'))


function show_buttons(array) {
    indice = 0;
      
    function iteracao() {
        if (indice < array.length) {
        
            if (array[indice] == 1){
                btn_g.style.backgroundColor = '#00ff00'
                btn_g.style.boxShadow =  '0 0 75px 10px #00ff00'
                setTimeout(() => {btn_g.style.backgroundColor = '#199119', btn_g.style.boxShadow = 'none'}, 200)
            }
            else if (array[indice] == 2){
                btn_r.style.backgroundColor = '#ff0000'
                btn_r.style.boxShadow =  '0 0 75px 10px #ff0000'
                setTimeout(() => {btn_r.style.backgroundColor = '#a31616', btn_r.style.boxShadow = 'none'}, 200)
            }
            else if (array[indice] == 3){
                btn_b.style.backgroundColor = '#0000ff'
                btn_b.style.boxShadow =  '0 0 75px 10px #0000ff'
                setTimeout(() => {btn_b.style.backgroundColor = '#00008b', btn_b.style.boxShadow = 'none'}, 200)
            }
            else if (array[indice] == 4){
                btn_y.style.backgroundColor = '#ffff00'
                btn_y.style.boxShadow =  '0 0 75px 10px #ffff00'
                setTimeout(() => {btn_y.style.backgroundColor = '#bdbd0e', btn_y.style.boxShadow = 'none'}, 200)
            }

            indice++
            setTimeout(iteracao, 400)
        }
    }
    iteracao()
}

document.getElementById('start').addEventListener('click', function(){

    gabarito=[]
    vet=[]
    index=0
    count=0

    document.getElementById('score_number').innerHTML = 0

    gabarito.push(parseInt(Math.random() * 4 + 1))
    
    show_buttons(gabarito)
})

function add(n){
    vet.push(Number(n))
    
    if (n == 1){
        btn_g.style.backgroundColor = '#00ff00'
        btn_g.style.boxShadow =  '0 0 75px 10px #00ff00'
        btn_g.addEventListener('mouseup', () => {btn_g.style.backgroundColor = '#199119', btn_g.style.boxShadow = 'none'})
        btn_g.addEventListener('mouseout', () => {btn_g.style.backgroundColor = '#199119', btn_g.style.boxShadow = 'none'})
    }
    else if (n == 2){
        btn_r.style.backgroundColor = '#ff0000'
        btn_r.style.boxShadow =  '0 0 75px 10px #ff0000'
        btn_r.addEventListener('mouseup', () => {btn_r.style.backgroundColor = '#a31616', btn_r.style.boxShadow = 'none'})
        btn_r.addEventListener('mouseout', () => {btn_r.style.backgroundColor = '#a31616', btn_r.style.boxShadow = 'none'})
    }
    else if (n == 3){
        btn_b.style.backgroundColor = '#0000ff'
        btn_b.style.boxShadow =  '0 0 75px 10px #0000ff'
        btn_b.addEventListener('mouseup', () => {btn_b.style.backgroundColor = '#00008b', btn_b.style.boxShadow = 'none'})
        btn_b.addEventListener('mouseout', () => {btn_b.style.backgroundColor = '#00008b', btn_b.style.boxShadow = 'none'})
    }
    else if (n == 4){
        btn_y.style.backgroundColor = '#ffff00'
        btn_y.style.boxShadow =  '0 0 75px 10px #ffff00'
        btn_y.addEventListener('mouseup', () => {btn_y.style.backgroundColor = '#bdbd0e', btn_y.style.boxShadow = 'none'})
        btn_y.addEventListener('mouseout', () => {btn_y.style.backgroundColor = '#bdbd0e', btn_y.style.boxShadow = 'none'})
    }

    if (vet[index] == gabarito[index]){
        index++
        console.log('correto')

        if (index == gabarito.length){
            index = 0
            count ++
            document.getElementById('score_number').innerHTML = count

            if (count > Number(localStorage.getItem('record'))){
                localStorage.setItem('record', count)
                document.getElementById('record_number').innerHTML = Number(localStorage.getItem('record'))
            }
            
            c = parseInt(Math.random() * 4) + 1
            vet=[]
            gabarito.push(c)

            x = setInterval(function(){
                clearInterval(x)
                show_buttons(gabarito)
            }, 500)
        }
    }else{
        console.log('errado')
        document.getElementById('score_number').innerHTML = 0
    }
}