const url = 'http://127.0.0.1:1880/api'

function api() {
    obj = fetch(url).then(res => res.json())
    return obj
}
async function show() {
    const tes = await api()
    console.log(tes)

  const tag = document.createElement("h1");

  const conteudo = document.createTextNode(tes.numero);

  tag.appendChild(conteudo);

  const currentDiv = document.getElementById("h1-1");
  document.body.insertBefore(tag, currentDiv);
}
show()