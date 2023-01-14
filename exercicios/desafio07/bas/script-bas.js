
txta = document.getElementById("txta")
txtb = document.getElementById("txtb")
txtc = document.getElementById("txtc")
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

        s.innerHTML = "<p>para delta negativo nao existe raizes reais</p>"
    } else if (d==0) {

        s.innerHTML = `<p>pra delta igual a zero as raizes tem os valores igual a: ${x1}</p>`
    } else {

        s.innerHTML = `<p>para delta positivo as raizes são:</p><br>
        <p>X' : ${x1.toFixed(2)}</p><br>
        <p>X'' : ${x2.toFixed(2)}</p>`
    }
    
}