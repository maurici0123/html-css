
function emailValido(){
   document.getElementById("img_error").style.display = "none"

   document.getElementById('email').style.border = "2px solid #e7a0a9"
   document.getElementById('email').style.borderRight = "none"
   document.getElementById('error').style.borderTop = "2px solid #e7a0a9"
   document.getElementById('error').style.borderBottom = "2px solid #e7a0a9"

   document.getElementById('final').innerHTML = 'obigado por se registrar'
   document.getElementById('final').style.color = '#0c0'
}
function emailErrado(){
   document.getElementById("img_error").style.display = "block"

   document.getElementById('email').style.border = "2px solid #ff0000"
   document.getElementById('email').style.borderRight = "none"
   document.getElementById('error').style.borderTop = "2px solid #ff0000"
   document.getElementById('error').style.borderBottom = "2px solid #ff0000"

   document.getElementById('final').innerHTML = 'porfavor providencie um email válido'
   document.getElementById('final').style.color = '#f00'
}
function registrar(){
    nome = document.getElementById('email')
    email = nome.value
    regex = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i

    if (regex.test(email)){
       // emailValido()
       emailValido()
    } else {
       // emailErrado()
       emailErrado()
    }
}