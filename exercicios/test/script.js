let resul = `Math.sqrt(6)`
a=5

if (/Math\.sqrt\(\d*\)$/.test(resul)) {
    console.log("true")
}

console.log(resul)

x=4
resul=resul.split('')
resul.splice(resul.length-1, 0, x)
resul=resul.join('')
console.log(resul)