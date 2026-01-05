function validarRangEdat() {
    let llista = document.getElementById("rang_edats");
    let indexSeleccionat = llista.selectedIndex;
    if (indexSeleccionat === 0) {
        alert("Error: Es de seleccionar un rang d'edat vàlid.");
        llista.focus(); 
        return false;
    } else {
    let valor = llista.options[indexSeleccionat].value;
    console.log("Rang seleccionat: " + valor);
    return true;
    }
}
