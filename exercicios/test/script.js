const url = "https://api.adviceslip.com/advice"

const x = fetch(url).then(res => res.json()).then(res => console.log(res.slip.advice))