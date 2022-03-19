// Datos SEMILLA    

let nombres = ['york', 'samantha', 'pedro', 'luz ma']
let cursos = ['avanzada', 'nuevas', 'moviles 3']

// numeros aleatorios donde su limite esta dado por la longitud del arreglo

let numero = Math.floor(Math.random() * nombres.length)
let numero2 = Math.floor(Math.random() * cursos.length)

console.log(nombres[numero])
console.log(cursos[numero2])

let estudiantes = []

for (let i = 0; i < 50; i++) {

    let estudiante = {}


    // llenando un objeto de estudiantes
    estudiante.nombre =  nombres[Math.floor(Math.random() * nombres.length)]
    estudiante.curso =   cursos[Math.floor(Math.random() * cursos.length)]

    // agregando el objeto estudiante al arreglo estudiantes
    estudiantes.push(estudiante)

}

console.log(estudiantes)