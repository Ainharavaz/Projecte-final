// Treballarem sempre amb una variable global, obj, què és una taula on estan 
// guardats tots els accidents de l'any. Qualsevol altre variable que necessitem
// haurà de ser, necessàriament, una variable local.

// Com que al document html no hi ha controladors d'esdeveniments, els haurem de crear aquí:



// Teniu ja definides les funcions de cada exercici (menys del cinquè), només cal
// que ompliu el codi necessari.

function exercici01() {
function mostrarTotalAccidents() {
    // 1. Obtenemos el total de elementos del array global 'obj' [1, 3]
    let total = obj.length;

    // 2. Accedemos al elemento del DOM donde se deben mostrar los resultados [5, 6]
    // Generalmente, este contenedor tiene el id "resultats" según el código previo [7]
    let zonaGroga = document.getElementById("resultats");

    // 3. Modificamos el contenido del elemento para mostrar el total [8]
    zonaGroga.innerHTML = "El nombre total d’accidents que es produeixen a l’any seleccionat és: " + total;
}
}

function exercici02() {

}


function exercici03() {
 
}


function exercici04() {
    creaFormulari();
}
