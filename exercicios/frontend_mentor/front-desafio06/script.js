const numberelement = document.querySelector('#number_advice')
const adviceelement = document.querySelector('#advice')

const urlAdvice = "https://api.adviceslip.com/advice"

fetch(urlAdvice).then(res => res.json()).then(function id(res){
    numberelement.innerHTML = `ADVICE #${res.slip.id}`
    const advice = res.slip.advice
    

    const urlTranslate = `https://api.mymemory.translated.net/get?q=${advice}&langpair=en|pt-br`
    fetch(urlTranslate).then(res => res.json()).then(function advice (res){
        adviceelement.innerHTML = `"${res.responseData.translatedText}"`
    })
})

function reload(){
    location.reload()
}