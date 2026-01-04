1.1
function corregirMajuscules() {
    let nomInput = document.getElementById("nom");
    let cognomInput = document.getElementById("cognom");

    let nom = nomInput.value;
    let cognom = cognomInput.value;

    if (nom.length > 0) {
        nom = nom[0].toUpperCase() + nom.substring(1);
        nomInput.value = nom;
    }

    if (cognom.length > 0) {
        cognom = cognom[0].toUpperCase() + cognom.substring(1);
        cognomInput.value = cognom;
    }
}

1.2
function validarEdat() {
    // 1. Acceder al elemento de la lista por su ID [3]
    let llista = document.getElementById("rang_edats");

    // 2. Obtener el índice seleccionado [6]
    let indexSeleccionat = llista.selectedIndex;

    // 3. Validar: si el índice es 0, el usuario no ha elegido un rango válido [2, 5]
    if (indexSeleccionat === 0) {
        alert("Error: Debes seleccionar un rango de edad válido.");
        llista.focus(); // Devolvemos el foco al campo para corregirlo [8]
        return false;
    } else {
        // Si es correcto, podemos obtener el valor seleccionado para el informe final [6]
        let valor = llista.options[indexSeleccionat].value;
        console.log("Rango seleccionado: " + valor);
        return true;
    }
}

