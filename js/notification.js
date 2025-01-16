// notificaciones nativas de JS
// crear los selectores

const notificarBTN = document.querySelector('#notificar')
const verNotificationBTN = document.querySelector('#verNotificacion')

// evento del boton 
notificarBTN.addEventListener('click', ()=>{
    //solcitar permisos al usuario 
    //mediante el API de notificaciones de JS 

    Notification.requestPermission().then(res=>{
        console.log('El resultado es: ', res);      
    })
})

verNotificationBTN.addEventListener('click',()=>{
    if(Notification.permission === 'granted'){
        const noti = new Notification('Aqui esta la notificacion', {
            icon: 'img/edetecnica.png',
            body: 'enviando mensaje'
        })

        noti.onclick = function(){
            window.open('http://google.com')
        }
    }
})