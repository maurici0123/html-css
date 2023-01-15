
mat1 = [[],
        [],
        []]

mat2 = [[],
        [],
        []]

mats = [[],
        [],
        []]

function calcular() {

    mat1[0][0] = Number(document.getElementById("txtn1ma").value)
    mat1[0][1] = Number(document.getElementById("txtn2ma").value)
    mat1[0][2] = Number(document.getElementById("txtn3ma").value)
    mat1[1][0] = Number(document.getElementById("txtn4ma").value)
    mat1[1][1] = Number(document.getElementById("txtn5ma").value)
    mat1[1][2] = Number(document.getElementById("txtn6ma").value)
    mat1[2][0] = Number(document.getElementById("txtn7ma").value)
    mat1[2][1] = Number(document.getElementById("txtn8ma").value)
    mat1[2][2] = Number(document.getElementById("txtn9ma").value)

    mat2[0][0] = Number(document.getElementById("txtn1mb").value)
    mat2[0][1] = Number(document.getElementById("txtn2mb").value)
    mat2[0][2] = Number(document.getElementById("txtn3mb").value)
    mat2[1][0] = Number(document.getElementById("txtn4mb").value)
    mat2[1][1] = Number(document.getElementById("txtn5mb").value)
    mat2[1][2] = Number(document.getElementById("txtn6mb").value)
    mat2[2][0] = Number(document.getElementById("txtn7mb").value)
    mat2[2][1] = Number(document.getElementById("txtn8mb").value)
    mat2[2][2] = Number(document.getElementById("txtn9mb").value)

    r1 = document.getElementById("r1")
    r2 = document.getElementById("r2")
    r3 = document.getElementById("r3")

    res1 = document.getElementById("res1")
    res2 = document.getElementById("res2")
    res3 = document.getElementById("res3")
    res4 = document.getElementById("res4")
    res5 = document.getElementById("res5")
    res6 = document.getElementById("res6")
    res7 = document.getElementById("res7")
    res8 = document.getElementById("res8")
    res9 = document.getElementById("res9")

    for (i = 0; i <= 2; i++) {
        for (j = 0; j <= 2; j++) {
            mats[i][j] = mat1[i][j] + mat2[i][j]
        }
    }

    res1.innerHTML = mats[0][0]
    res2.innerHTML = mats[0][1]
    res3.innerHTML = mats[0][2]
    res4.innerHTML = mats[1][0]
    res5.innerHTML = mats[1][1]
    res6.innerHTML = mats[1][2]
    res7.innerHTML = mats[2][0]
    res8.innerHTML = mats[2][1]
    res9.innerHTML = mats[2][2]

    r1.style.display = 'block'
    r2.style.display = 'block'
    r3.style.display = 'block'
}