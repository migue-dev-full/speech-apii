const microfono = document.querySelector('#microfono')
const salida = document.querySelector('#salida')

//evento
microfono.addEventListener('click',ejecutarSpeechAPI)

function ejecutarSpeechAPI(){
    const speechrecognition = webkitSpeechRecognition
    const recognition = new speechrecognition()

    /*
        FASES
        - arrancar, ejecutar reconocimiento
        - comenzar escuchar
        - usuario termine de hablar
        - mostrar el resultado (texto)
    */
        recognition.start()
        recognition.onstart = function(){
            //comience a escuchar
            salida.classList.add('mostrar')
        }

        salida.textContent = 'escuchando...'
        

        recognition.onspeechend = function(){
            salida.textContent = 'Se dejo de escuchar'
            //console.log('hola')
            recognition.stop()
        }

        //lo que hayamos grabado lo vamos a mostrar como texto
        recognition.onresult = function(e){
            console.log(e.results)
            const {confidence,transcript} = e.results[0][0]
            //console.log(confidence,transcript)
            const confianza = document.createElement('p')
            confianza.innerHTML = `Confianza: ${parseInt(confidence*100)}%`

            const speech = document.createElement('p')
            speech.innerHTML = `Lo que escuche: ${transcript}`

            salida.appendChild(speech)
            salida.appendChild(confianza)
        } 
}