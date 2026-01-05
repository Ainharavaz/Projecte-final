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

function calcularSumaPorDistrito() {
    // 1. Creamos un array de 11 posiciones inicializadas a 0.
    // Usaremos la posición 0 para el distrito -1 y las posiciones 1-10 para el resto.
    let comptadors = [00000000000]; 

    // 2. Recorremos el array global 'obj' que contiene todos los accidentes.
    for (let i = 0; i < obj.length; i++) { 
        let codiDistricte = obj[i].nDist; // Obtenemos el código del accidente actual [2]

        // 3. Lógica de suma: si el código es -1 (desconocido), sumamos en la posición 0.
        if (codiDistricte === -1) {
            comptadors++;
        } 
        // Si el código está entre 1 y 10, sumamos 1 en su posición correspondiente.
        else if (codiDistricte >= 1 && codiDistricte <= 10) { 
            comptadors[codiDistricte]++; 
        }
    }

    // 4. Mostramos un ejemplo del resultado en la "zona amarilla" del HTML.
    let zonaResultats = document.getElementById("resultats"); 
    zonaResultats.innerHTML = "Accidents totals: " + comptadors[12]; 
}









    
}

function exercici02() {

}


function exercici03() {
 
}


function exercici04() {
    creaFormulari();
}
