//Un comentario se hace con doble slash de una sola linea
let saludo = 'Hello, World!';//con el let se hace las variables
let intermedio = 'By:';
let nombre = 'Daniel Plazas';
/*De multiples lineas de hace asi
 *1
 *2
*/
// TODO: Hacer un cambio
// FIXME: Arreglar despues
console.log(saludo, intermedio, nombre);

//FUNCION
/** 
 *
 * @param {number} a El primer numero para la adicion
 * @param {number} b El segundo numero para la adicion
 * @returns {number} La suma de a y b
 */
function sumar(a,b) {
    return a + b;
}

//Llamar a la funcion sumar
console.log(sumar(1,10)); console.log(sumar(20,2))

function mostrar(any) {
    console.log(any)
}

//Operadores matematicos
mostrar(5+5);
mostrar(5-3);
mostrar(5*3);
mostrar(5/3);
mostrar(5%3);
mostrar(5**3)
let number = 5;
// Incremento o Decrementos
// -- o ++ -> Inmediata
// number -- o ++ -> Posterior
mostrar(++number);//6
mostrar("Resultado de number despues de ++: " + number);
mostrar(number++);
mostrar(number--);
mostrar(number+=2);
mostrar(number-=2);
mostrar(number*=2);
mostrar(number/=5);
mostrar(number%=2);
mostrar(number/0);