document.getElementById('button').addEventListener("click", function(){

    nome = document.getElementById('name').value
    numero = document.getElementById('number').value
    mes = Number(document.getElementById('month').value)
    ano = Number(document.getElementById('year').value)
    cvc = Number(document.getElementById('cvc_form').value)

    x = new Date()
    y = x.getFullYear()

    if (nome != '') {
        document.getElementById('name_c').innerHTML = nome
    }

    if (numero != '') {
        document.getElementById('number_c').innerHTML = numero
    }

    if (mes>=1 && mes<=12) {
        document.getElementById('mm_c').innerHTML = `${mes}/`
        document.getElementById('error_mm').style.display = 'none'
    } else {
        document.getElementById('error_mm').style.display = 'inline-block'
        document.getElementById('error_mm').innerHTML = 'apenas de 1 a 12'
    }

    if (ano !='' && ano>=y) {
        document.getElementById('yy_c').innerHTML = ano
        document.getElementById('error_aa').style.display = 'none'
    } else{
        document.getElementById('error_aa').style.display = 'inline-block'
        document.getElementById('error_aa').innerHTML = 'ano inválido'
    }

    if (cvc != '') {
        document.getElementById('cvc_c').innerHTML = cvc
    }
})