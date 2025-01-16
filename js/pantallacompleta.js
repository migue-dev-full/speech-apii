const openBTN = document.querySelector('#abrir-pantalla-completa')
const closeBTN = document.querySelector('#salir-pantalla-completa')

//eventos
openBTN.addEventListener('click',pantallacompleta)
closeBTN.addEventListener('click',cerrarpantalla)


function pantallacompleta(){
    document.documentElement.requestFullscreen()
}

function cerrarpantalla(){
    document.exitFullscreen()
}