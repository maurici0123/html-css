
mat1 = [[],
        [],
        [],
        []]

mat2 = [[],
        [],
        [],
        []]

mats = [[],
        [],
        [],
        []]

function calcular() {

    mat1[0][0] = Number(document.getElementById("txtn1ma").value)
    mat1[0][1] = Number(document.getElementById("txtn2ma").value)
    mat1[0][2] = Number(document.getElementById("txtn3ma").value)
    mat1[0][3] = Number(document.getElementById("txtn4ma").value)
    mat1[1][0] = Number(document.getElementById("txtn5ma").value)
    mat1[1][1] = Number(document.getElementById("txtn6ma").value)
    mat1[1][2] = Number(document.getElementById("txtn7ma").value)
    mat1[1][3] = Number(document.getElementById("txtn8ma").value)
    mat1[2][0] = Number(document.getElementById("txtn9ma").value)
    mat1[2][1] = Number(document.getElementById("txtn10ma").value)
    mat1[2][2] = Number(document.getElementById("txtn11ma").value)
    mat1[2][3] = Number(document.getElementById("txtn12ma").value)
    mat1[3][0] = Number(document.getElementById("txtn13ma").value)
    mat1[3][1] = Number(document.getElementById("txtn14ma").value)
    mat1[3][2] = Number(document.getElementById("txtn15ma").value)
    mat1[3][3] = Number(document.getElementById("txtn16ma").value)

    mat2[0][0] = Number(document.getElementById("txtn1mb").value)
    mat2[0][1] = Number(document.getElementById("txtn2mb").value)
    mat2[0][2] = Number(document.getElementById("txtn3mb").value)
    mat2[0][3] = Number(document.getElementById("txtn4mb").value)
    mat2[1][0] = Number(document.getElementById("txtn5mb").value)
    mat2[1][1] = Number(document.getElementById("txtn6mb").value)
    mat2[1][2] = Number(document.getElementById("txtn7mb").value)
    mat2[1][3] = Number(document.getElementById("txtn8mb").value)
    mat2[2][0] = Number(document.getElementById("txtn9mb").value)
    mat2[2][1] = Number(document.getElementById("txtn10mb").value)
    mat2[2][2] = Number(document.getElementById("txtn11mb").value)
    mat2[2][3] = Number(document.getElementById("txtn12mb").value)
    mat2[3][0] = Number(document.getElementById("txtn13mb").value)
    mat2[3][1] = Number(document.getElementById("txtn14mb").value)
    mat2[3][2] = Number(document.getElementById("txtn15mb").value)
    mat2[3][3] = Number(document.getElementById("txtn16mb").value)
    


    r1 = document.getElementById("r1")
    r2 = document.getElementById("r2")
    r3 = document.getElementById("r3")
    r4 = document.getElementById("r4")

    res1 = document.getElementById("res1")
    res2 = document.getElementById("res2")
    res3 = document.getElementById("res3")
    res4 = document.getElementById("res4")
    res5 = document.getElementById("res5")
    res6 = document.getElementById("res6")
    res7 = document.getElementById("res7")
    res8 = document.getElementById("res8")
    res9 = document.getElementById("res9")
    res10 = document.getElementById("res10")
    res11 = document.getElementById("res11")
    res12 = document.getElementById("res12")
    res13 = document.getElementById("res13")
    res14 = document.getElementById("res14")
    res15 = document.getElementById("res15")
    res16 = document.getElementById("res16")

    for (i = 0; i <= 3; i++) {
        for (j = 0; j <= 3; j++) {
            mats[i][j] = mat1[i][j] + mat2[i][j]
        }
    }

    res1.innerHTML = mats[0][0]
    res2.innerHTML = mats[0][1]
    res3.innerHTML = mats[0][2]
    res4.innerHTML = mats[0][3]
    res5.innerHTML = mats[1][0]
    res6.innerHTML = mats[1][1]
    res7.innerHTML = mats[1][2]
    res8.innerHTML = mats[1][3]
    res9.innerHTML = mats[2][0]
    res10.innerHTML = mats[2][1]
    res11.innerHTML = mats[2][2]
    res12.innerHTML = mats[2][3]
    res13.innerHTML = mats[3][0]
    res14.innerHTML = mats[3][1]
    res15.innerHTML = mats[3][2]
    res16.innerHTML = mats[3][3]

    r1.style.display = 'block'
    r2.style.display = 'block'
    r3.style.display = 'block'
    r4.style.display = 'block'
}