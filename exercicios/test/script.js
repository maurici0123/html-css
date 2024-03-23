tocar = document.getElementById('to')
som = document.getElementById('audio')

to.addEventListener('click', () => {
    som.load() 
    som.play()
})

