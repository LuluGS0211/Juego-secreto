//variable global 
let numeroSecreto = 0;
let intentos = 0;
//arreglo para guardar los numeros que han sido sorteados
let listaNumerosSorteados =[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    // elemento es un objeto de html ejemplo h1 o <p/>
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;
}
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del número secreto';

function generarNumeroSecreto(){
    let numeroGenerado = Math. floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Se sortearon todos los  números posibles');
    } else{
        // si el numero generado esta incluido en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            //agrega el numero generado al arreglo
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
        //variable local 
        // let numeroSecreto = Math. floor(Math.random() * 10) + 1;
        //return numeroSecreto;
    }
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //igual a valor e igual a tipo
    if(numeroSecreto === numeroDeUsuario){
        //contraccion de if else
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' :'intentos' }`);
        //removiendo disable de button
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //mientras el usuario no acierte
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;    
}

function limpiarCaja(){
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = '';
    document.querySelector('#valorUsuario').value = '';
}

function mostrarCondicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalos de números 
    //generar el número aleatorio
    //inicializar en numero de intentos  
    mostrarCondicionesIniciales();
    //deshabilitar el botón de nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
     
}

mostrarCondicionesIniciales();

/*
function verificarNumero(numero) {
  if (numero > 0) {
    console.log("El número es positivo.");
  } else if (numero < 0) {
    console.log("El número es negativo.");
  } else {
    console.log("El número es zero.");
  }
}
 
 verificarNumero(-6);

function mostrarMensaje(nombre){
    console.log(`Hola, ${nombre}`);
    return;
}
mostrarMensaje('Isai');

function mostrarElDoble(numero){
    let dobleNumero = 2*numero;
    //console.log(dobleNumero);
    return;
}
mostrarElDoble(15);

function calcularPromedio(numero1, numero2, numero3){
    let promedio = (numero1 + numero2 + numero3) / 3;
    //console.log(promedio);
    return;
}
calcularPromedio(8, 10, 6);

function imprimirMayor(primerNumero, segundoNumero){
     return primerNumero > segundoNumero ? primerNumero : segundoNumero;
}
let numeroMayor = imprimirMayor(15, 9);
console.log(numeroMayor);
/*function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;
}

let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);
//imprimirNumeroMayor(20, 10);

function verificarAprobacion(promedio){
         return promedio >= 5 ? “Aprobado” : “Reprobado”;
}

function multiplicarMismoNumero(numeroM){
    let multiplicacion= numeroM * numeroM;
    console.log(multiplicacion);
    return;
}
//multiplicarMismoNumero(10);

function calcularDoble(numero) {
  return numero * 2;
}

function calcularTriple(numero) {
  return numero * 3;
}

const numero = 5;
const doble = calcularDoble(numero);
const triple = calcularTriple(numero);

console.log(`El doble de ${numero} es ${doble} y el triple es ${triple}.`);
*/
