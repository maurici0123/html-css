person1 ={
    nome: 'matheus',
    idade: 34,
    id: Math.random()
}
person2 ={
    nome: 'carlos',
    idade: 23,
    id: Math.random()
}
dados=[]

localStorage.clear()
localStorage.setItem(person1.id, JSON.stringify(person1))
localStorage.setItem(person2.id, JSON.stringify(person2))


for (i = 0; i < localStorage.length; i++) {
    dados.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
}
console.log(dados)
localStorage.removeItem(dados[0].id)


// for (let i = 0; i < localStorage.length; i++) {
//     todos.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
//   }

// localStorage.setItem(Math.random(), JSON.stringify(todo))
