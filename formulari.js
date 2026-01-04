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
