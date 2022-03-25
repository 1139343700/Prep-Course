// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
    
  return array [0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array [array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var lista = [];

  for (let i = 0; i < array.length; i++) {
      lista[i] = array[i] + 1;
  } return lista;
} 


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var unirArray = palabras.join(" ");
  return unirArray;
} 


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var arrayContiente = array.includes(elemento);
  return arrayContiente;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
  } return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
var promedio = 0;

for (let i = 0; i < resultadosTest.length; i++) {
  promedio =  (promedio + resultadosTest[i]);
  
} return promedio / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var max = numeros[0];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]>max) {
      max = numeros[i];
    }
  } return max;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
if (arguments.length<1) {return 0}

var mult = 1;

for (let i = 0; i < arguments.length; i++) { // la variable tiene que arrancar en 1 porque si se multiplica 0 da 0
  mult = mult * arguments[i];
} return mult

} 


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cuenta = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i]>18) {
      cuenta = cuenta + 1;
    }  
  } 
  return cuenta
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 1 || numeroDeDia === 7 ){
    return "Es fin de semana"
  }
  return "Es dia Laboral"
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let num = n.toString()
  if(num.charAt(0) === "9"){
    return true
  }
  return false

}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  for (let i = 0; i < arreglo.length - 1; i++) { // el -1 en la condición es para que se pueda realizar la ultima comparacion en la ultima iteración
    if (arreglo[i]!==arreglo[i+1]) {
      return false
    } 
  } 
  return true
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var meses = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i]==="Enero" || array[i]==="Marzo" || array[i]==="Noviembre") {
      meses.push(array[i]);
    } 
  } 
  if (meses.length < 3) { // esto es porque el array tiene que contener si o si los tres meses
    return "No se encontraron los meses pedidos"
  } else {
    return meses;
  }

} 


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray = [];

  for (let i = 0; i <= 200; i++) {
    if (array[i]>100) {
      nuevoArray.push(array[i])
    } 
  } 
  return nuevoArray
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nuevoArray = [];
  var suma = numero;
  
  for (var i = 0; i < 10; i++) {
    suma = suma + 2; // tiene que estar antes del if porque sino se me puede cortar antes de terminar de iterar
    if (suma===i) break; // el suma, if, break y else pasan todos juntos y recien ahi abro {}
    else {
      nuevoArray.push(suma)
    }
  }
  if (i < 10) { // esto porque de ser menor significa que por el break se corto, no termino de iterar 
    // para poder llamar a "i" la variable tiene que ser VAR, si es let no la voy a poder llamar fuera del scope
    return "Se interrumpió la ejecución"
  }
  else return nuevoArray // si no se interrumpio me devulve el array
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
 var nuevoArray = [];
 var suma = numero;

 for (let i = 0; i < 10; i++) {
   if (i===5) continue; // se salta esa iteración de i
   else {
     suma = suma + 2;
     nuevoArray.push(suma)
   }
 }
 return nuevoArray
}

//for (let i = 0; i < 10; i++) {
//suma = numero - 2;
//if (i===5) continue;
//else {
  //  nuevoArray.push(suma);
  //}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
