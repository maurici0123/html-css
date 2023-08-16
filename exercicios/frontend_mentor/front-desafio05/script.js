number = document.getElementById('number')
resul = ''
r = 0

function delet(){
    resul = String(resul)
    resul = resul.slice(0, -1)
    
    number.innerHTML = resul.replace(/\*/g, 'X')
}

function calc(n1){
    if (r == 0) {
        if (n1=='*'){
            number.innerHTML += 'X'
        } else{
            number.innerHTML += n1
        }
        resul += n1   

    } else{
        if (n1=='*'){
            number.innerHTML = 'X'
        } else{
            number.innerHTML = n1
        }
        resul = ''
        resul += n1
        r = 0
    }
}

 function final(){ 
    resul = eval(resul)
    number.innerHTML = eval(resul)
    r=1

    if (typeof(resul) == 'undefined'){
        resul = ''
        number.innerHTML = ''
    }
}