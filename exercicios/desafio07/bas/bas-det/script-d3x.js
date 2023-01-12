
txt1 = document.getElementById("txtn1")
txt2 = document.getElementById("txtn2")
txt3 = document.getElementById("txtn3")
txt4 = document.getElementById("txtn4")
txt5 = document.getElementById("txtn5")
txt6 = document.getElementById("txtn6")
txt7 = document.getElementById("txtn7")
txt8 = document.getElementById("txtn8")
txt9 = document.getElementById("txtn9")

r = document.getElementById("res")

function calcular() {

    n1 = Number(txt1.value)
    n2 = Number(txt2.value)
    n3 = Number(txt3.value)
    n4 = Number(txt4.value)
    n5 = Number(txt5.value)
    n6 = Number(txt6.value)
    n7 = Number(txt7.value)
    n8 = Number(txt8.value)
    n9 = Number(txt9.value)

    /*
      n1 n2 n3 | n1 n2
      n4 n5 n6 | n4 n5
      n7 n8 n9 | n7 n8
    */

    det = ( (n1*n5*n9) + (n2*n6*n7) + (n3*n4*n8) ) - ( (n2*n4*n9) + (n1*n6*n8) + (n3*n5*n7) )

    r.innerHTML = `det: ${det}`
}