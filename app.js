const tareas = [ ];
const tarea1 = {
    texto: "estudiar",
    completada: true
};
tareas.push(tarea1);

const tarea2 = {
    texto: "limpiar",
    completada: false
};
tareas.push(tarea2);

function mostrarTareas(){
    for (const tarea of tareas){
        console.log("Tarea: " + tarea.texto);
         console.log("Estatus: " + tarea.completada);
    }
} 

tarea2.completada = true;
tarea1.completada = false;

const tareasIncompletas = tareas.filter(tarea => tarea.completada === false);

const num1 = 1;
const num2 = 2;
const num3 = 3;
const num4 = 4;
const num5 = 5;

const numeros = [];

numeros.push(num1, num2, num3, num4, num5);

const numeroCuadrado = numeros.map(numero => numero*numero)


const producto = {
    nombre: "jugo",
    precio: 15,
    stock: 87
};

function mostrarStock (productoChecar){
    if (productoChecar.stock > 0){
        console.log ("Hay existencia")
    }
    else {
        console.log("No hay existencia");
    }

}
console.log ("Fin de la lista");

function contarTareas (){
    return tareas.length;
} //Proyecto: lista de tareas