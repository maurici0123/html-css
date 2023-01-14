
txt1 = document.getElementById("txtn1")
txt2 = document.getElementById("txtn2")
txt3 = document.getElementById("txtn3")
txt4 = document.getElementById("txtn4")
txt5 = document.getElementById("txtn5")
txt6 = document.getElementById("txtn6")
txt7 = document.getElementById("txtn7")
txt8 = document.getElementById("txtn8")
txt9 = document.getElementById("txtn9")
txt10 = document.getElementById("txtn10")
txt11 = document.getElementById("txtn11")
txt12 = document.getElementById("txtn12")
txt13 = document.getElementById("txtn13")
txt14 = document.getElementById("txtn14")
txt15 = document.getElementById("txtn15")
txt16 = document.getElementById("txtn16")

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
n10 = Number(txt10.value)
n11 = Number(txt11.value)
n12 = Number(txt12.value)
n13 = Number(txt13.value)
n14 = Number(txt14.value)
n15 = Number(txt15.value)
n16 = Number(txt16.value)

mat1 = [[],
        [],
        [],
        []]

mat1[0][0] = n1
mat1[0][1] = n2
mat1[0][2] = n3
mat1[0][3] = n4
mat1[1][0] = n5
mat1[1][1] = n6
mat1[1][2] = n7
mat1[1][3] = n8
mat1[2][0] = n9
mat1[2][1] = n10
mat1[2][2] = n11
mat1[2][3] = n12
mat1[3][0] = n13
mat1[3][1] = n14
mat1[3][2] = n15
mat1[3][3] = n16

/*
  n01 n02 n03 n04
  n05 n06 n07 n08 
  n09 n10 n11 n12
  n13 n14 n15 n16
*/



matd1 = [[mat1[1][0], mat1[1][1], mat1[1][2]],
         [mat1[2][0], mat1[2][1], mat1[2][2]],
         [mat1[3][0], mat1[3][1], mat1[3][2]]]

matdr1 = [[mat1[1][0], mat1[1][1], mat1[1][2]],
          [mat1[2][0], mat1[2][1], mat1[2][2]],
          [mat1[3][0], mat1[3][1], mat1[3][2]]]



matd2 = [[mat1[0][0], mat1[0][1], mat1[0][2]],
         [mat1[2][0], mat1[2][1], mat1[2][2]],
         [mat1[3][0], mat1[3][1], mat1[3][2]]]

matdr2 = [[mat1[0][0], mat1[0][1], mat1[0][2]],
          [mat1[2][0], mat1[2][1], mat1[2][2]],
          [mat1[3][0], mat1[3][1], mat1[3][2]]]



matd3 = [[mat1[0][0], mat1[0][1], mat1[0][2]],
         [mat1[1][0], mat1[1][1], mat1[1][2]],
         [mat1[3][0], mat1[3][1], mat1[3][2]]]

matdr3 = [[mat1[0][0], mat1[0][1], mat1[0][2]],
          [mat1[1][0], mat1[1][1], mat1[1][2]],
          [mat1[3][0], mat1[3][1], mat1[3][2]]]



matd4 = [[mat1[0][0], mat1[0][1], mat1[0][2]],
         [mat1[1][0], mat1[1][1], mat1[1][2]],
         [mat1[2][0], mat1[2][1], mat1[2][2]]]

matdr4 = [[mat1[0][0], mat1[0][1], mat1[0][2]],
          [mat1[1][0], mat1[1][1], mat1[1][2]],
          [mat1[2][0], mat1[2][1], mat1[2][2]]]



for (i=0; i<=2; i++) {
        for (j=0; j<=1; j++) {
                matdr1[i][j+3] = matd1[i][j]
        }
}

detm1 = ((matdr1[0][0]*matdr1[1][1]*matdr1[2][2]) + (matdr1[0][1]*matdr1[1][2]*matdr1[2][3]) + (matdr1[0][2]*matdr1[1][3]*matdr1[2][4])) - ((matdr1[0][2]*matdr1[1][1]*matdr1[2][0]) + (matdr1[0][3]*matdr1[1][2]*matdr1[2][1]) + (matdr1[0][4]*matdr1[1][3]*matdr1[2][2]))
detm1 *= -1


for (i=0; i<=2; i++) {
    for (j=0; j<=1; j++) {
            matdr2[i][j+3] = matd2[i][j]
    }
}

detm2 = ((matdr2[0][0]*matdr2[1][1]*matdr2[2][2]) + (matdr2[0][1]*matdr2[1][2]*matdr2[2][3]) + (matdr2[0][2]*matdr2[1][3]*matdr2[2][4])) - ((matdr2[0][2]*matdr2[1][1]*matdr2[2][0]) + (matdr2[0][3]*matdr2[1][2]*matdr2[2][1]) + (matdr2[0][4]*matdr2[1][3]*matdr2[2][2]))


for (i=0; i<=2; i++) {
    for (j=0; j<=1; j++) {
            matdr3[i][j+3] = matd3[i][j]
    }
}

detm3 = ((matdr3[0][0]*matdr3[1][1]*matdr3[2][2]) + (matdr3[0][1]*matdr3[1][2]*matdr3[2][3]) + (matdr3[0][2]*matdr3[1][3]*matdr3[2][4])) - ((matdr3[0][2]*matdr3[1][1]*matdr3[2][0]) + (matdr3[0][3]*matdr3[1][2]*matdr3[2][1]) + (matdr3[0][4]*matdr3[1][3]*matdr3[2][2]))
detm3 *= -1


for (i=0; i<=2; i++) {
    for (j=0; j<=1; j++) {
            matdr4[i][j+3] = matd4[i][j]
    }
}

detm4 = ((matdr4[0][0]*matdr4[1][1]*matdr4[2][2]) + (matdr4[0][1]*matdr4[1][2]*matdr4[2][3]) + (matdr4[0][2]*matdr4[1][3]*matdr4[2][4])) - ((matdr4[0][2]*matdr4[1][1]*matdr4[2][0]) + (matdr4[0][3]*matdr4[1][2]*matdr4[2][1]) + (matdr4[0][4]*matdr4[1][3]*matdr4[2][2]))

det = (mat1[0][3]*detm1) + (mat1[1][3]*detm2) + (mat1[2][3]*detm3) + (mat1[3][3]*detm4)



  r.innerHTML = `det: ${det}`
}