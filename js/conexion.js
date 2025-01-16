window.addEventListener('online',actualizarStatus)
window.addEventListener('offline',actualizarStatus)

console.log(navigator.onLine)

function actualizarStatus(){
    console.log(navigator.onLine);

    if(navigator.onLine == true){
        console.log('Tienes conexion');
    }else{
        console.log('No tienes conexion'); 
    }
}