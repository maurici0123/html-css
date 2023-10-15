const numberelement = document.querySelector('#number_advice')
const adviceelement = document.querySelector('#advice')

const url = "https://api.adviceslip.com/advice"
const x = fetch(url).then(res => res.json()).then(function advice(res){
    console.log(res)

    numberelement.innerHTML = `ADVICE #${res.slip.id}`
    adviceelement.innerHTML = `"${res.slip.advice}"`
})

function reload(){
    location.reload()
}