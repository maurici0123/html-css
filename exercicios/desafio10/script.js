btn_g = document.getElementById('left-top')
btn_r = document.getElementById('right-top')
btn_b = document.getElementById('right-bottom')
btn_y = document.getElementById('left-bottom')


vet=[]
gabarito=[]
index=0
count=0

function show_buttons(array) {
    indice = 0;
      
    function iteracao() {
        if (indice < array.length) {
        
            if (array[indice] == 1){
                btn_g.style.backgroundColor = '#00ff00'
                setTimeout(() => btn_g.style.backgroundColor = '#006400', 200)
            }
            else if (array[indice] == 2){
                btn_r.style.backgroundColor = '#ff0000'
                setTimeout(() => btn_r.style.backgroundColor = 'darkred', 200)
            }
            else if (array[indice] == 3){
                btn_b.style.backgroundColor = '#0000ff'
                setTimeout(() => btn_b.style.backgroundColor = 'darkblue', 200)
            }
            else if (array[indice] == 4){
                btn_y.style.backgroundColor = '#ffff00'
                setTimeout(() => btn_y.style.backgroundColor = '#c4c400', 200)
            }

            indice++
            setTimeout(iteracao, 500)
        }
    }
    iteracao()
}

document.getElementById('start').addEventListener('click', function(){
    
    gabarito=[]
    vet=[]
    document.getElementById('score_number').innerHTML = 0
    
    gabarito.push(parseInt(Math.random() * 4 + 1))
    
    show_buttons(gabarito)
    //console.log(gabarito)
})

function add(n){
    vet.push(Number(n))
    
    if (n == 1){
        btn_g.style.backgroundColor = '#00ff00'
        btn_g.addEventListener('mouseup', () => btn_g.style.backgroundColor = 'darkgreen')
        btn_g.addEventListener('mouseout', () => btn_g.style.backgroundColor = 'darkgreen')
    }
    else if (n == 2){
        btn_r.style.backgroundColor = '#ff0000'
        btn_r.addEventListener('mouseup', () => btn_r.style.backgroundColor = 'darkred')
        btn_r.addEventListener('mouseout', () => btn_r.style.backgroundColor = 'darkred')
    }
    else if (n == 3){
        btn_b.style.backgroundColor = '#0000ff'
        btn_b.addEventListener('mouseup', () => btn_b.style.backgroundColor = 'darkblue')
        btn_b.addEventListener('mouseout', () => btn_b.style.backgroundColor = 'darkblue')
    }
    else if (n == 4){
        btn_y.style.backgroundColor = '#ffff00'
        btn_y.addEventListener('mouseup', () => btn_y.style.backgroundColor = '#c4c400')
        btn_y.addEventListener('mouseout', () => btn_y.style.backgroundColor = '#c4c400')
    }

    if (vet[index] == gabarito[index]){
        index++
        console.log('correto')

        if (index == gabarito.length){
            index = 0
            count ++
            document.getElementById('score_number').innerHTML = count
            
            c = parseInt(Math.random() * 4) + 1
            vet=[]
            gabarito.push(c)
            //console.log(gabarito)

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