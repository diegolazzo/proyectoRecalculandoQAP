// Primer paso: definir el algoritmo para recalcular los porcentajes de QAP al 100%

// Idea: el %Q recalc permite defenir el piso en diagrama ternario (teniendo un abanico de posibilidades) y el recalculado entre AP al 100%
// permitiria definir la diagonal y obtener el nombre de la muestra
// Esto permitiría armar un switch que evalúe los rangos y devuelva la muestra
// Permitiendo mostrar por pantalla el diagrama con resultado resaltado del área donde estaría la muestra, nombre de la muestra y un dato curioso

// Partir con QAP igneo, luego agregar la característica de que se seleccione entre QAP Rx ignea o QAP Rx volcánica extrusiva

// La v.2 escalar a que se puedan en la appweb full (pc) ir almacenando un listado con los nombres de las muestras y poder exportar

// v.3 que se grafique y pueda exportar la posición exacta de la muestra en el diagrama
// v.4 que se puedan graficar varias muestras y exportar

//NOTES.
//Agregar validaciones
//- En caso de ingresar un porcentaje cuya suma es mayor a 100%

const cuarzo = 25;
const feldespatoK = 30;
const plagioclasa = 35;

// const sumaQAP = cuarzo + feldespatoK + plagioclasa;
// console.log(sumaQAP);

// const recalcularQ = (cuarzo * 100) / sumaQAP;
// console.log(recalcularQ);

// const recalcularA = (feldespatoK * 100) / sumaQAP;
// console.log(recalcularA);

// const recalcularP = (plagioclasa * 100) / sumaQAP;
// console.log(recalcularP);

// const newQAP = recalcularQ + recalcularA + recalcularP;
// console.log(newQAP);

//Funciones
function sumaQAP(cuarzo, feldespatoK, plagioclasa) {
  const sumaQAP = cuarzo + feldespatoK + plagioclasa;
  return sumaQAP;
}

function recalcularQ(cuarzo, feldespatoK, plagioclasa) {
  const recalcularQ =
    (cuarzo * 100) / sumaQAP(cuarzo, feldespatoK, plagioclasa);
  return recalcularQ;
}

function recalcularA(cuarzo, feldespatoK, plagioclasa) {
  const recalcularA =
    (feldespatoK * 100) / sumaQAP(cuarzo, feldespatoK, plagioclasa);
  return recalcularA;
}

function recalcularP(cuarzo, feldespatoK, plagioclasa) {
  const recalcularP =
    (plagioclasa * 100) / sumaQAP(cuarzo, feldespatoK, plagioclasa);
  return recalcularP;
}

// function (cuarzo, feldespatoK, plagioclasa) {
// const sumaQAP = cuarzo + feldespatoK + plagioclasa

// }

//Interactuando con HTML
//
