
mat1 = [[],
        []]

mat2 = [[],
        []]

mats = [[],
        []]

function calcular() {

    mat1[0][0] = Number(document.getElementById("txtn1ma").value)
    mat1[0][1] = Number(document.getElementById("txtn2ma").value)
    mat1[1][0] = Number(document.getElementById("txtn3ma").value)
    mat1[1][1] = Number(document.getElementById("txtn4ma").value)

    mat2[0][0] = Number(document.getElementById("txtn1mb").value)
    mat2[0][1] = Number(document.getElementById("txtn2mb").value)
    mat2[1][0] = Number(document.getElementById("txtn3mb").value)
    mat2[1][1] = Number(document.getElementById("txtn4mb").value)

    r1 = document.getElementById("r1")
    r2 = document.getElementById("r2")

    res1 = document.getElementById("res1")
    res2 = document.getElementById("res2")
    res3 = document.getElementById("res3")
    res4 = document.getElementById("res4")

    for (i = 0; i <= 1; i++) {
        for (j = 0; j <= 1; j++) {
            mats[i][j] = mat1[i][j] - mat2[i][j]
        }
    }

    res1.innerHTML = mats[0][0]
    res2.innerHTML = mats[0][1]
    res3.innerHTML = mats[1][0]
    res4.innerHTML = mats[1][1]

    r1.style.display = 'block'
    r2.style.display = 'block'
}