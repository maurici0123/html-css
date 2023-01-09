txta = document.getElementById("txta")
txtb = document.getElementById("txtb")
txtc = document.getElementById("txtc")
res = document.getElementById("res")
s = document.getElementById("s")
del = document.getElementById("del")


function calcular() {

    n1 = Number(txta.value)
    n2 = Number(txtb.value)
    n3 = Number(txtc.value)

    d = (n2**2)-(4*n1*n3)

    x1 = (-n2+Math.sqrt(d))/(2*n1)
    x2 = (-n2-Math.sqrt(d))/(2*n1)

    del.innerHTML = `o delta é: ${d}`

    if (d<0) {

        s.innerHTML += "<p>para delta negativo nao existe raizes reais</p>"
    } else if (d==0) {

        s.innerHTML = `<p>pra delta igual a zero as raizes tem os valores igual a: ${x1}</p>`
    } else {

        s.innerHTML = `<p>para delta positivo as raizes são:</p><br>
        <p>${x1.toFixed(2)}</p><br>
        <p>${x2.toFixed(2)}</p>`
    }
    
}

/*
    x1 = (-n2+Math.sqrt(d))/(2*n1)
    x2 = (-n2-Math.sqrt(d))/(2*n1)

    res.innerHTML = `o delta e ${d} <br>`
    res.innerHTML += `o valor de x1 e: ${x1.toFixed(2)} <br>`
    res.innerHTML += `o valor de x1 e: ${x2.toFixed(2)} <br>`
*/