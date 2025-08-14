//Variables
//var (Evitar Usar)
//Scope -->
var name="Daniel";
var age = 17;
console.log(name)

function james() {
    var age = 15;
    console.log(age);
}

// Permite re declarar la variable
var age = 19;
james();
console.log(age);


//age: No existe
//Hoisting

//let

let sexo = "Masculino";
//Scope : Bloque {...Todo lo que va aqui es el scope en bloque...}
function mostrarGenero() {
    console.log(sexo);
    let gender = sexo;
}
//let sexo = "Femenino" 
//No permite redefinir
sexo = "Uno nuevo";
console.log(sexo);

mostrarGenero();
//console.log(gender);

//const
const ROL_USUARIO = "user";
// ROL_USUARIO = "Otro"; //ERROR no se puede redefinir const

//Nomenclatura y COnvenciones
let camelCase = 1;
let nombreUsuario = "Daniel";
let rolUsuarioPlataforma = "Estudiante";

let snake_case = 1;
let nombre_usuario = "Daniel";
let rol_usuario_plataforma = "Estudiante";

const SCREAMING_CASE =1;
const NOMBRE_USUARIO = "Daniel";
const ROL_USUARIO_PLATAFORMA = "Estudiante";               

//Tipos de datos primitivos
//number

//string

//arrays
let caidas = [
    {
        fecha: '20-08-10',
        damages: 'mental'
    },
    {
        vehiculo:'motocicleta'
    },
    true,
    'otros valores',
    [1,2,3,4,5,6,7,8,9]
    
];
 console.log(typeof caidas);

 //COnversiones

 //ToString
 let esMayor =true;//Definir
 let edadDeMayor = 18;
 console.log(typeof esMayor);
 console.log(typeof edadDeMayor);

 esMayor = String(esMayor);//Asignar
 console.log(typeof esMayor);
edadDeMayor = String(edadDeMayor);
console.log(typeof edadDeMayor);

let baloto = "234567890";
console.log(typeof baloto);
baloto = Number("234567890");
console.log(typeof baloto);

//Interpolacion de variables
let mensaje = `Hola, mi nombre es ${nombreUsuario} y yo gane con el baloto N ${baloto}` + baloto + '. \n \nMi edad es ' + edadDeMayor
let mensajeChido = `Hola, mi nombre es ${nombreUsuario} y yo gane con el baloto N ${baloto}.
Mi edad es ${edadDeMayor}`;
console.log(mensaje)
console.log(mensajeChido)

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            