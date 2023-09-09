const key = 'e19136809fdaf25296e951f9f772d11e'
const urlcountry = 'https://flagcdn.com/h20/'
const urlbackground = 'https://source.unsplash.com/1600x900/?'

const cityinput = document.getElementById('city-input')
const searchbtn = document.getElementById('search')

const cityelement = document.getElementById('city')
const tempelement = document.querySelector('#temperature span')
const descelement = document.getElementById('description')
const weathericonelement = document.getElementById('weather-icon')
const countryelement = document.querySelector('#country')
const humidityelement = document.querySelector('#humidity span')
const windelement = document.querySelector('#wind span')
const messageelement = document.getElementById('message-of-error')
const cityselement = document.querySelector('#citys')

const weathercontainer = document.getElementById('weather-data')

const getweatherdata = async (city) => {
    const urlweather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=pt_br`
    const data = fetch(urlweather).then(res => res.json())

    return data
}

const weatherdata = async (city) => {
    const data = await getweatherdata(city)

    if (data.cod == 200) {
        cityelement.innerText = data.name
        tempelement.innerText = parseInt(data.main.temp)
        descelement.innerText = data.weather[0].description
        weathericonelement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
        countryelement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/24.png`)
        humidityelement.innerText = `${data.main.humidity}%`
        windelement.innerText = `${data.wind.speed}km/h`
        
        cityselement.style.display = 'none'
        weathercontainer.classList.remove('hide')
        messageelement.classList.add('hide')

        const urlbackgroundready = data.name.split(' ')
        document.body.style.backgroundImage = `url(${urlbackground}+${urlbackgroundready.join('%20')})`
        document.body.style.backgroundSize = 'cover'
    } else {
        cityselement.style.display = 'none'
        weathercontainer.classList.add('hide')
        messageelement.classList.remove('hide')
    }
}

searchbtn.addEventListener('click', (e) => {
    e.preventDefault()

    const city = cityinput.value
    weatherdata(city)
})

cityinput.addEventListener('keyup', (e) => {
    if (e.code === "Enter") {
        const city = e.target.value

        weatherdata(city)
    }
})

const recommendation = city => {
    cityselement.style.display = 'none'
    weatherdata(city)
}