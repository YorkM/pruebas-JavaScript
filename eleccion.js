// Datos SEMILLA    

let nombres = ['paloma petro', 'alvaro cepeda', 'polo inverso', 'juanpis gonzales']
let sexos = ['0', '1']


let senadores = []

for (let i = 0; i < 20; i++) {

    let senador = {}


    // llenando un objeto de estudiantes
    senador.nombre =  nombres[Math.floor(Math.random() * nombres.length)]
    senador.sexo =   sexos[Math.floor(Math.random() * sexos.length)]
    senador.votos = Math.floor(Math.random() * 1000)

    // agregando el objeto estudiante al arreglo estudiantes
    senadores.push(senador)

}

console.log(senadores)

function filtrarMujeres(senadores, callback){
    setTimeout(() => {
       let senadoras = senadores.filter(function(senador){
            return (senador.sexo == '0' && senador.votos > 250)
        })
        callback(senadoras)
    }, 10000);
}


filtrarMujeres(senadores, function(senadoras){
    let sumaVotosSenadoras = 0;
    senadoras.forEach(senadora => {
        sumaVotosSenadoras = sumaVotosSenadoras + senadora.votos
    }); 
    console.log(`El total de votos femeninos del pacto historico es de: ${sumaVotosSenadoras}`)
})