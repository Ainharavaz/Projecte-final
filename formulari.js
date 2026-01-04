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
let inputNom = document.getElementById("nomCognoms");
inputNom.onblur = function() {
    let paraules = this.value.split(" "); // Tratamos la cadena como array
    for (let i = 0; i < paraules.length; i++) {
        if (paraules[i].length > 0) {
            // Capitalizamos la primera letra [9, 10]
            paraules[i] = paraules[i].toUpperCase() + paraules[i].substring(1).toLowerCase();
        }
    }
    this.value = paraules.join(" ");
};
