// SCRIPT.JS
alert("BIENVENIDO! ESTO ES LA CALCULADORA PERSONALIZADA DE JOSE");

const vaciar = () => {
  document.getElementById("pantalla").value = "";
}

//EVENT BUBBLING
document.addEventListener('click', ev => {
  if      (ev.target.matches('#cubo')) cubo();
  else if (ev.target.matches('#cuadrado')) cuadrado();
  else if (ev.target.matches('#suma')) sum();
})

//CAMPO INFORMATIVO
var rellenar_info = () =>{ //notación arrow, es lo mismo que una funcion pero declarando una variable, OJO! no hay return
    if ( num < 100) {
        document.getElementById("info").innerHTML= "Info: El resultado es menor que 100";
    } else if ( 100 < num && num < 200) {
        document.getElementById("info").innerHTML= "Info: El resultado está entre 100 y 200";
    } else {
        document.getElementById("info").innerHTML= "Info: El resultado es superior a 200";
    }
}


//OPERACIONES UNITARIAS

//función cuadrado
var cuadrado = () =>{
  let num = document.getElementById("pantalla");
  validar(num);
  num.value = num.value * num.value;
  rellenar_info(num)
}

//función cubo
var cubo = () =>{
  let num = document.getElementById("pantalla");
  validar(num);
  num.value = num.value * num.value * num.value;
  rellenar_info(num.value)
}
//función modulo
var mod = () =>{
  let num = document.getElementById("pantalla");
  validar(num);
  if (num.value < 0){
    num.value = -num.value
    rellenar_info(num.value)
  } else {
    num.value = num.value
    rellenar_info(num.value)
  }
}
//función factorial
var fact = () => {
  let num = document.getElementById("pantalla");
  validar(num);
  if (num.value === 0 || num.value === 1)
    return 1;
  for (var i = num.value - 1; i >= 1; i--) {
    num.value *= i;
  }
  rellenar_info(num.value)
  num.value = num.value;
}


// OPERACIONES BINARIAS

let operador; //variable global
let numero1; //variable global

//función multiplicación
//setea los valores para las variables globales
var mul = () =>{
  let num = document.getElementById("pantalla")
  validar(num);
  numero1 = num.value
  operador = "*"
}
//función suma
//setea los valores para las variables globales
var sum = () =>{
  let num = document.getElementById("pantalla")
  validar(num);
  numero1 = num.value
  operador = "+"
}

//función resta
//setea los valores para las variables globales
var res = () =>{
  let num = document.getElementById("pantalla")
  validar(num);
  numero1 = num.value;
  operador = "-"
}

//función potencia
//setea los valores para las variables globales
var potencia = () =>{
  let num = document.getElementById("pantalla")
  validar(num);
  numero1 = num.value;
  operador = "^"
}

//función division
//setea los valores para las variables globales
var division = () =>{
  let num = document.getElementById("pantalla")
  validar(num);
  numero1 = num.value;
  operador = "÷"
}

//función resto
//setea los valores para las variables globales
var resto = () =>{
  let num = document.getElementById("pantalla")
  validar(num);
  numero1 = num.value;
  operador = "%"
}

//función igual
//funcion que comprueba el operador seleccionado y realiza la operación pertinente.
var eq = () =>{
  let num2 = document.getElementById("pantalla")
  validar(num2);
    if ( operador == "+" ) {
    num2.value = (Number(numero1) + Number(num2.value))
    operador = ""
  } else if ( operador == "*") {
    num2.value = (Number(numero1) * Number(num2.value))
    operador = ""
  } else if ( operador == "-") {
    num2.value = (Number(numero1) - Number(num2.value))
    operador = ""
  } else if ( operador == "^") {
    num2.value = (Number(numero1) ** Number(num2.value))
    operador = ""
  } else if ( operador == "÷") {
    num2.value = (Number(numero1) /  Number(num2.value))
    operador = ""
  } else if ( operador == "%") {
    num2.value = (Number(numero1) % Number(num2.value))
    operador = ""
  }
    rellenar_info(num2.value);
  }


// OPERACIONES EN FORMATO CSV

/*
function sumatorio(){
  let numbers = document.querySelectorAll('#pantalla')
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  numbers.values = Number(sum)
  }
*/

//función sumatorio
var sumatorio = () => {
  let num = document.getElementById('pantalla');
  validar_lista(numbers)
  let list = num.value.split(",");
  let i = 0, acc = 0;
  while (i < list.length) acc += +list[i++];
  num.value = acc;
  rellenar_info(num.value);
}

//función ordenar
function sort_callback(a, b) {
  return a > b ? 1 : b > a ? -1 : 0;
}
var ordenar = () =>{
  let numbers = document.getElementById('pantalla')
  validar_lista(numbers)
  let list = numbers.value.split(",");
  numbers.value = list.sort(sort_callback);
}

//función revrtir
var revertir = () =>{
  let numbers = document.getElementById('pantalla')
  validar_lista(numbers)
  let list = numbers.value.split(",");
  numbers.value = list.reverse(list);
}

//función quitar
var quitar = () =>{
  let numbers = document.getElementById('pantalla')
  let list = numbers.value.split(",");
  numbers.value = list.splice(0, (list.length-1));
}


//función validar
var validar = () =>{
  let num = document.getElementById("pantalla");
  try {
    if(isNaN(num.value)) throw "Error al introducir los datos. Vuelva a intentarlo";
    num.value = Number(num.value)
    }
    catch(err) {
      alert("Error al introducir los datos. Vuelva a intentarlo")
    }
}

//función validar lista
var validar_lista = () =>{
  let numbers = document.getElementById("pantalla");
  let list = numbers.value.split(",");
  for (let index of list) {
    try {
      if(isNaN(index)) throw "Error al introducir los datos. Vuelva a intentarlo";
      index = Number(index)
      }
      catch (error) {
        alert("Error al introducir los datos. Vuelva a intentarlo")
      }
  }
}
