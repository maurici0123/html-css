const keypad = document.getElementsByClassName('container')
const scren = document.getElementsByClassName('screen')
const numbe = document.getElementsByClassName('number')
const advanced = document.getElementsByClassName('btn_advanced')
const btn_reset = document.getElementById('btn_reset')
const btn_del = document.getElementById('btn_del')
const btn_equal = document.getElementById('btn_equal')
const header = document.getElementById('header')
const input = document.querySelector('input')
const styleElement = document.createElement('style');


newStyle1 = document.createTextNode(`
input::-webkit-slider-thumb {
  background-color: hsl(6, 63%, 50%);
}
input::-webkit-slider-thumb:active{
  background-color: hsl(5, 96%, 68%);
}`);

newStyle2 = document.createTextNode(`
input::-webkit-slider-thumb {
  background-color: hsl(25, 98%, 40%);
}
input::-webkit-slider-thumb:active{
  background-color: hsl(24, 97%, 62%);
}`);

newStyle3 = document.createTextNode(`
input::-webkit-slider-thumb {
  background-color: hsl(176, 100%, 44%);
}
input::-webkit-slider-thumb:active{
  background-color: hsl(176, 60%, 77%);
}`);

document.querySelector('input').addEventListener('input', function(){


  // style 1 --------------------------------------
  if (this.value == 1) {
  document.body.style.backgroundColor = 'hsl(222, 26%, 31%)'
  keypad[0].style.backgroundColor = 'hsl(223, 31%, 20%)'
  scren[0].style.backgroundColor = 'hsl(224, 36%, 15%)'    
  scren[0].style.color = 'hsl(0, 0%, 100%)'   

  for (let i = 0; i < numbe.length; i++) {
    numbe[i].style.backgroundColor = 'hsl(30, 25%, 89%)'
    numbe[i].style.boxShadow = '0 5px 0 hsl(28, 16%, 65%)'
    numbe[i].style.color = 'hsl(221, 14%, 31%)'
  }
  for (let i = 0; i < advanced.length; i++) {
    advanced[i].style.backgroundColor = 'hsl(30, 25%, 89%)'
    advanced[i].style.boxShadow = '0 5px 0 hsl(28, 16%, 65%)'
    advanced[i].style.color = 'hsl(221, 14%, 31%)'
  }
  expand.style.backgroundColor = 'hsl(30, 25%, 89%)'
  expand.style.boxShadow = '0 5px 0 hsl(28, 16%, 65%)'
  expand.style.color = 'hsl(221, 14%, 31%)'

  btn_reset.style.backgroundColor = 'hsl(225, 21%, 49%)'
  btn_reset.style.boxShadow = '0 5px 0 hsl(224, 28%, 35%)'
  btn_del.style.backgroundColor = 'hsl(225, 21%, 49%)'
  btn_del.style.boxShadow = '0 5px 0 hsl(224, 28%, 35%)'

  btn_equal.style.backgroundColor = ' hsl(6, 63%, 50%)'
  btn_equal.style.boxShadow = '0 5px 0 hsl(6, 70%, 34%)'
  btn_equal.style.color = 'hsl(0, 0%, 100%)'

  header.style.color = 'hsl(0, 0%, 100%)'

  input.style.backgroundColor = 'hsl(223, 31%, 20%)'
  styleElement.appendChild(newStyle1);
  document.head.appendChild(styleElement);


  // style 2 -------------------------------------------
  }else if (this.value == 2) {
  document.body.style.backgroundColor = 'hsl(0, 0%, 90%)'
  keypad[0].style.backgroundColor = 'hsl(0, 5%, 81%)'
  scren[0].style.backgroundColor = 'hsl(0, 0%, 93%)'
  scren[0].style.color = 'hsl(60, 10%, 19%)'   

  for (let i = 0; i < numbe.length; i++) {
    numbe[i].style.backgroundColor = 'hsl(45, 7%, 89%)'
    numbe[i].style.boxShadow = '0 5px 0 hsl(35, 11%, 61%)'
    numbe[i].style.color = 'hsl(60, 10%, 19%)'
  }
  for (let i = 0; i < advanced.length; i++) {
    advanced[i].style.backgroundColor = 'hsl(45, 7%, 89%)'
    advanced[i].style.boxShadow = '0 5px 0 hsl(35, 11%, 61%)'
    advanced[i].style.color = 'hsl(60, 10%, 19%)'
  }
  expand.style.backgroundColor = 'hsl(45, 7%, 89%)'
  expand.style.boxShadow = '0 5px 0 hsl(35, 11%, 61%)'
  expand.style.color = 'hsl(60, 10%, 19%)'

  btn_reset.style.backgroundColor = ' hsl(185, 42%, 37%)'
  btn_reset.style.boxShadow = '0 5px 0 hsl(185, 58%, 25%)'
  btn_del.style.backgroundColor = ' hsl(185, 42%, 37%)'
  btn_del.style.boxShadow = '0 5px 0 hsl(185, 58%, 25%)'

  btn_equal.style.backgroundColor = 'hsl(25, 98%, 40%)'
  btn_equal.style.boxShadow = '0 5px 0 hsl(25, 99%, 27%)'
  btn_equal.style.color = 'hsl(0, 0%, 100%)'

  header.style.color = 'hsl(60, 10%, 19%)'

  input.style.backgroundColor = 'hsl(0, 5%, 81%)'
  styleElement.appendChild(newStyle2);
  document.head.appendChild(styleElement);


  // style 3 -----------------------------------------
  }else if (this.value == 3) {
  document.body.style.backgroundColor = 'hsl(268, 75%, 9%)'
  keypad[0].style.backgroundColor = 'hsl(268, 71%, 12%)'
  scren[0].style.backgroundColor = 'hsl(268, 71%, 12%)'
  scren[0].style.color = 'hsl(52, 100%, 62%)'   

  for (let i = 0; i < numbe.length; i++) {
    numbe[i].style.backgroundColor = 'hsl(268, 47%, 21%)'
    numbe[i].style.boxShadow = '0 5px 0 hsl(290, 70%, 36%)'
    numbe[i].style.color = 'hsl(52, 100%, 62%)'
  }
  for (let i = 0; i < advanced.length; i++) {
    advanced[i].style.backgroundColor = 'hsl(268, 47%, 21%)'
    advanced[i].style.boxShadow = '0 5px 0 hsl(290, 70%, 36%)'
    advanced[i].style.color = 'hsl(52, 100%, 62%)'
  }
  expand.style.backgroundColor = 'hsl(268, 47%, 21%)'
  expand.style.boxShadow = '0 5px 0 hsl(290, 70%, 36%)'
  expand.style.color = 'hsl(52, 100%, 62%)'

  btn_reset.style.backgroundColor = ' hsl(281, 89%, 26%)'
  btn_reset.style.boxShadow = '0 5px 0 hsl(285, 91%, 52%)'
  btn_del.style.backgroundColor = ' hsl(281, 89%, 26%)'
  btn_del.style.boxShadow = '0 5px 0 hsl(285, 91%, 52%)'

  btn_equal.style.backgroundColor = 'hsl(176, 100%, 44%)'
  btn_equal.style.boxShadow = '0 5px 0 hsl(177, 92%, 70%)'
  btn_equal.style.color = 'hsl(198, 20%, 13%)'

  header.style.color = 'hsl(52, 100%, 62%)'

  input.style.backgroundColor = 'hsl(268, 71%, 12%)'
  styleElement.appendChild(newStyle3);
  document.head.appendChild(styleElement);
  }
})