// declarando la funcion principal

function principal(){
    // se instancia un objeto de la clase PROMESA de JS
    let promesa = new Promise(function(res,rej){
        setTimeout(function(){
            // definiendo el proceso de la funcion principal
            console.log('soy el proceso principal')
            // resuelvo o  rechazo
            res("el proceso del callback(soy el segundo proceso)")
        }, 2000)
    })
    // la funcion principal  retorna la promesa
    return promesa
}
// llamando la funcion principal(evaluar el estado de la promesa)
principal()
.then(function(respuesta){
    console.log(respuesta)
})
