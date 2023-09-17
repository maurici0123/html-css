
const urlbackground = 'https://source.unsplash.com/1600x900/?'
const urlbackgroundready = 'brasil'
const verification = `url(${urlbackground}+${urlbackgroundready})`
document.body.style.backgroundImage = `url(${urlbackground}+${urlbackgroundready})`
document.body.style.backgroundSize = 'cover'



const city = 'brasil'
const key = 'e19136809fdaf25296e951f9f772d11e'
const urlweather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=pt_br`


fetch(verification)
//.then(res => res.json)
.then(fnal => console.log(fnal))