let nom = document.getElementById("nom").value
let cognom = document.getElementById("cognom").value
let nom_cognom = "nom" + "cognom"
function majuscula(){
        document.getElementById("nom" + "cognom").value = nom_cognom.toUpperCase(primeraLletra);
    }
document.getElementById("id_del_input").value = resultat;



function corregirMajuscules() {
    let nom = document.getElementById("nom").value;
    let cognom = document.getElementById("cognom").value;

    if (nom.length > 0) {
        nom = nom.charAt(0).toUpperCase() + nom.slice(1);
        document.getElementById("nom").value = nom;
    }

    if (cognom.length > 0) {
        cognom = cognom.charAt(0).toUpperCase() + cognom.slice(1);
        document.getElementById("cognom").value = cognom;
    }
}
