
txt1 = document.getElementById("txtn1")
txt2 = document.getElementById("txtn2")
txt3 = document.getElementById("txtn3")
txt4 = document.getElementById("txtn4")
r = document.getElementById("res")

function calcular() {

    n1 = Number(txt1.value)
    n2 = Number(txt2.value)
    n3 = Number(txt3.value)
    n4 = Number(txt4.value)

    /*
      n1 n2
      n3 n4 
    */

    det = (n1*n4)-(n2*n3)

    r.innerHTML = `det: ${det}`
}