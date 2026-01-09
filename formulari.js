function corregirMajuscules() {
    let nomInput = document.getElementById("nom");
    // .getElementById és un mètode de JS que serveix per accedir a un element HTML concret a la pàg a partir del seu id
    let cognomInput = document.getElementById("cognom");
    let nom = nomInput.value; // guardem valro actual dedl nom
    let cognom = cognomInput.value; // guardem valor actual del cognom
    if (nom.length > 0) { // comprovem que el nom no està buit 
        nom = nom[0].toUpperCase() + nom.substring(1); // convertim primera lletra del nom en majúscula
        nomInput.value = nom; // posem el valor corregit al camp corresponent
    }
    if (cognom.length > 0) {
        cognom = cognom[0].toUpperCase() + cognom.substring(1);
        cognomInput.value = cognom;
    }
    return true;
}

function primeraLletra() {
    corregirMajuscules();
}

function validarRangEdat() {
    let llista = document.getElementById("rang_edats");
    let indexSeleccionat = llista.selectedIndex; // Es guarda l’índex de l’opció seleccionada dins del desplegable
    if (indexSeleccionat === 0) {
        console.log("Error: Es de seleccionar un rang d'edat vàlid.");
        llista.focus(); 
        return false;
    } else {
    let valor = llista.options[indexSeleccionat].value; //Guarda el valor de l’opció seleccionada
    console.log("Rang seleccionat: " + valor);
    }
    return true;
}

function codiPostal(){
    let num = document.getElementById("codiPostal").value;

    for (let i = 0; i < num.length; i++) {
        if (num[i] < '0' || num[i] > '9') {
            console.log("Error: El codi postal només pot contenir dígits.");
            document.getElementById("codiPostal").focus();
            return false;
        }
    }

    if (num.length !== 5) {
        console.log("Error: El codi postal ha de tenir 5 dígits.");
        document.getElementById("codiPostal").focus();
        return false;
    }

    return true;
}

function correuElectronic(){
    let email = document.getElementById("correuElectronic").value;
    let arrova = 0
    let posicioArrova = -1;
    let punt = false;
    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            arrova++;
            posicioArrova = i; // Es guarda la posiió de l'arrova trobada
        }
    }

    if (arrova !== 1) { //si no hi ha arrova no és vàlid
        console.log("Error: El correu electrònic no és vàlid.");
        document.getElementById("correuElectronic").focus();
        return false;
    }

    for (let i = posicioArrova + 1; i < email.length; i++) {
        if (email[i] === ".") {
            punt = true;
        }
    }

    if (!punt) { //si no hi ha cap punt després de l'arrova no és vàlid 
        console.log("Error: El correu electrònic no és vàlid.");
        document.getElementById("correuElectronic").focus(); //Si no és correcte retorna el focus al camp de correu electrònic
        return false;
    }
    return true;
}

function contrasenya(){
    let contra = document.getElementById("contrasenya").value;
    let maj = false;
    let min = false;
    let num = 0;
    let especial = false
    let carac = "!@#$%^&*()_+[]={};:\|,.<>/?";
    
    if (contra.length < 8){
        console.log("Error: la contrasenya ha de tenir almenys 8 caràcters");
        document.getElementById("contrasenya").focus();
        return false;
    }
    
    for (let i = 0; i < contra.length; i++){
        let lletra = contra[i];
        
        if (lletra >= 'A' && lletra <= 'Z'){
                    maj = true;
        }else if (lletra >= 'a' && lletra <= 'z'){
                    min = true;
        }else if (lletra >= '0' && lletra <= '9'){
                    num++;
        }else if (carac.includes(lletra)){
                    especial = true;
                }
    }

        
    if (!maj || !min || num < 2 || !especial){
            console.log("Error: La contrasenya ha de tenir almenys 8 caràcters, una majúscula,  una minúscula, dos números i un caràcter especial.");
            document.getElementById("contrasenya").focus();
            return false;
        }
    return true;
}  
    
function validarConfirmacio() {
        let pass1 = document.getElementById("contrasenya").value;
        let pass2 = document.getElementById("confirmar_contrasenya").value;
        if (pass1 !== pass2) {
                console.log("Error: Les contrasenyes no coincideixen."); 
                document.getElementById("validarConfirmacio").focus();
            
        return false;
    }
    return true;
}

function validarPrivacitat() {
    let checkbox = document.getElementById("politica_privacitat");
    if (!checkbox.checked){ // el .checked en serveis per veure si està seleccionat o no {
        console.log("Error: Has d'acceptar la política de privacitat per continuar."); // si no s'ha marcat la caixa error
        checkbox.focus(); // es torna el focus 
        return false;
    }
    return true;
}


function mostrarContrasenya(){
    let contra = document.getElementById("contrasenya");
    let checkbox = document.getElementById("mostrarContrasenya");
    if (checkbox.checked){
        contra.type = "text";
    } else {
        contra.type = "password";
    }
}

function mostrarContra(){
    let contra = document.getElementById("confirmar_contrasenya");
    let checkbox = document.getElementById("mostrar");
    if (checkbox.checked){
        contra.type = "text";
    } else {
        contra.type = "password";
    }
}

function netejarFormulari() {
    document.getElementById("nom").value = ""; 
    document.getElementById("cognom").value = "";
    document.getElementById("correuElectronic").value = "";
    document.getElementById("codiPostal").value = "";
    document.getElementById("contrasenya").value = "";
    document.getElementById("confirmar_contrasenya").value = "";
    document.getElementById("rang_edats").selectedIndex = 0;
    document.getElementById("politica_privacitat").checked = false;
}

function enviarFormulari() {
    document.getElementById("enviar").addEventListener("click", function() {
    
        if (!document.getElementById("politica_privacitat").checked) {
            console.log("Accepta la política de privacitat");
            return;
        }
    // Comprova que totes les funcions de validació retornen true
        if (validarRangEdat() && validarConfirmacio() && validarPrivacitat() && contrasenya() && correuElectronic() && codiPostal()) {
            let resum = document.getElementById("resum");
    // Escriu un missatge dins de l'element resum indicant que el formulari s'ha emplenat correctament
            resum.innerHTML = "<h3>El formulari s'ha emplenat correctament</h3>";
    // Afegeix informació detallada de l'usuari, recollint els valors dels camps del formulari
            resum.innerHTML += "<p><b>Usuari: </b>" +
                document.getElementById("nom").value + " " +
                document.getElementById("cognom").value + "<br>" +
                "<b>Email:</b>" + document.getElementById("correuElectronic").value + "<br>" +
                "<b>Codi postal:</b>" + document.getElementById("codiPostal").value + "<br>" +
                "<b>Rang d'edat:</b>" + document.getElementById("rang_edats").value + "</p>";
        }   
});
}

document.getElementById("nom").onblur = corregirMajuscules;
document.getElementById("cognom").onblur = corregirMajuscules;
document.getElementById("rang_edats").onblur = validarRangEdat;
document.getElementById("codiPostal").onblur = codiPostal;
document.getElementById("correuElectronic").onblur = correuElectronic;
document.getElementById("contrasenya").onblur = contrasenya;
document.getElementById("confirmar_contrasenya").onblur = validarConfirmacio;
document.getElementById("mostrarContrasenya").onclick = mostrarContrasenya;
document.getElementById("mostrar").onclick = mostrarConfirmacio;
document.getElementById("enviar").onclick = enviarFormulari;
