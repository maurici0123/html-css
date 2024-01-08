// const url = "https://api.adviceslip.com/advice"
// const x = fetch(url).then(res => res.json()).then(res => console.log(res.slip.advice))
const phrase = 'i run today'
const url = `https://api.mymemory.translated.net/get?q=${phrase}&langpair=en|pt-br`

fetch(url).then(res => res.json()).then(res => console.log(res.responseData.translatedText))