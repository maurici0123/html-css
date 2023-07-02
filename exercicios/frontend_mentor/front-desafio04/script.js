document.getElementById('button').addEventListener("click", function(){

    nome = document.getElementById('name').value
    numero = document.getElementById('number').value
    mes = Number(document.getElementById('month').value)
    ano = Number(document.getElementById('year').value)
    cvc = document.getElementById('cvc_form').value

    regex = /^(\d{4}\s){3}\d{4}$/
    if (regex.test(numero)) {
        vali = true
    } else {
        vali = false
    }

    x = new Date()
    y = x.getFullYear()

    if (nome != '') {
        document.getElementById('name_c').innerHTML = nome
        document.getElementById('error_name').innerHTML = ''
        document.getElementById('name').style.border = '1px solid #ababab'
        vname = true
    } else{ 
        document.getElementById('error_name').style.display = 'inline-block'
        document.getElementById('error_name').innerHTML = 'obrigatório'
        document.getElementById('name').style.border = '1px solid hsl(0, 100%, 66%)'
        vname = false
    }


    if (vali == true) {
        document.getElementById('number_c').innerHTML = numero
        document.getElementById('error_number').innerHTML = ''
        document.getElementById('number').style.border = '1px solid #ababab'
        vnumber = true
    } else{ 
        document.getElementById('error_number').style.display = 'block'
        document.getElementById('error_number').innerHTML = 'número inválido'
        document.getElementById('number').style.border = '1px solid hsl(0, 100%, 66%)'
        vnumber = false
    }

    
    if (mes>=1 && mes<=12) {
        document.getElementById('mm_c').innerHTML = `${mes}/`
        document.getElementById('error_mm').innerHTML = ''
        document.getElementById('month').style.border = '1px solid #ababab'
        vmonth = true
    } else {
        document.getElementById('error_mm').style.display = 'inline-block'
        document.getElementById('error_mm').innerHTML = 'mês inválido'
        document.getElementById('month').style.border = '1px solid hsl(0, 100%, 66%)'
        vmonth = false
    }


    if (ano !='' && ano>=y) {
        document.getElementById('yy_c').innerHTML = ano
        document.getElementById('error_aa').innerHTML = ''
        document.getElementById('year').style.border = '1px solid #ababab'
        vyear = true
    } else{
        document.getElementById('error_aa').style.display = 'inline-block'
        document.getElementById('error_aa').innerHTML = 'ano inválido'
        document.getElementById('year').style.border = '1px solid hsl(0, 100%, 66%)'
        vyear = false
    }


    if (cvc.length==3) {
        document.getElementById('cvc_c').innerHTML = cvc
        document.getElementById('error_cvc').innerHTML = ''
        document.getElementById('cvc_form').style.border = '1px solid #ababab'
        vcvc = true
    } else {
        document.getElementById('error_cvc').style.display = 'inline-block'
        document.getElementById('error_cvc').innerHTML = 'apenas 3 digitos'
        document.getElementById('cvc_form').style.border = '1px solid hsl(0, 100%, 66%)'
        vcvc = false
    }

    if (vname==true && vnumber==true  && vmonth==true  && vyear==true && vcvc==true) {
        document.getElementById('form').style.display = 'none'
        document.getElementById('confirm').style.display = 'block'
    }
})