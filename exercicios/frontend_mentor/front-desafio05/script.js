number = document.getElementById('number')
resul = ''

function delet(){
    resul = resul.slice(0, -1)
    number.innerHTML = resul.replace(/\*/g, 'X')
}

function calc(n1){
    if (n1=='*'){
        number.innerHTML += 'X'
    } else{
        number.innerHTML += n1
    }
    resul += n1
}

 function final(){
    number.innerHTML = eval(resul)
}