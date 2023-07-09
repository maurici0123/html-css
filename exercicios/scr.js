const slider = document.getElementById('meu-slider');
const styleElement = document.createElement('style');

const newStyle1 = `
  #meu-slider::-webkit-slider-thumb {
    background-color: hsl(6, 63%, 50%);
  }`;

  const newStyle2 = `
  #meu-slider::-webkit-slider-thumb {
    background-color: hsl(25, 98%, 40%);
  }`;

const newStyle3 = `
  #meu-slider::-webkit-slider-thumb {
    background-color: hsl(176, 100%, 44%);
  }`;


document.querySelector('input').addEventListener('input', function(){
    
    if (this.value == 1) {
        styleElement.appendChild(document.createTextNode(newStyle1));
        document.head.appendChild(styleElement);
    } else if (this.value == 2) {
        styleElement.appendChild(document.createTextNode(newStyle2));
        document.head.appendChild(styleElement);
    } else if (this.value == 3) {
        styleElement.appendChild(document.createTextNode(newStyle3));
        document.head.appendChild(styleElement);
    }
})

