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

function primeraLletra() {
    corregirMajuscules();
}

function validarRangEdat() {
    let llista = document.getElementById("rang_edats");
    let indexSeleccionat = llista.selectedIndex;
    if (indexSeleccionat === 0) {
        alert("Error: Es de seleccionar un rang d'edat vàlid.");
        llista.focus(); 
        return false;
    } else {
    let valor = llista.options[indexSeleccionat].value;
    console.log("Rango seleccionado: " + valor);
    return true;
    }
}

function codiPostal(){
    let num = document.getElementById("codiPostal").value;
    let contador = 0;
    let digit = true;
    for (let i = 0; i < num.length; i++){
        if (num[i] >= '0' && num[i] <= '9'){
            digit = false;
            break;
        }else{
            contador++;
            }
        if (contador > 5 || contador < 5){
            alert("Error: El codi postal ha de tenir 5 dígits.");
            document.getElementById("codiPostal").focus();
            return false;
        }else if (contador === 5){
            return true;
        }
    }
}

function correuElectronic(){
    let email = document.getElementById("correuElectronic").value;
    let arrova = 0
    let posicioArrova = -1;
    let punt = false;
    for (let i = 0; i < email.length; i++){
        if (email[i] === "@"){
            arrova++;
            posicioArrova = i;
        }
        if (posicioArrova == 1){
            for (let j = posicioArrova + 1; j < email.length; j++){
                if (email[j] === "."){
                    punt = true;
                }
            }
        if (arrova !== 1 || punt === false) {
            alert("Error: El correu electrònic no és vàlid.");
            document.getElementById("correuElectronic").focus();
            return false;           
        }

        }
    }
}

function contrasenya(){
    let contra = document.getElementById("contrasenya").value;
    let maj = false;
    let min = false;
    let num = 0;
    let especial = false
    let carac = "!@#$%^&*()_+[]={};:\|,.<>/?";
    
    if (contra.length < 8){
        alert("Error: la contrasenya ha de tenir almenys 8 caràcters");
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
            alert("Error: La contrasenya ha de tenir almenys 8 caràcters, una majúscula,  una minúscula, dos números i un caràcter especial.");
            document.getElementById("contrasenya").focus();
            return false;
        }
    return true;
}  

function validarConfirmacio() {
        let pass1 = document.getElementById("contrasenya").value;
        let pass2 = document.getElementById("confirmar_contrasenya");
        if (pass1 !== pass2.values) {
                    alert("Error: Les contrasenyes no coincideixen."); [1, 4]
            setTimeout(() => pass2.focus(), 10); [1, 5]
        return false;
    }
    return true;
}

function validarPrivacitat() {
    let checkbox = document.getElementById("politica_privacitat");
    if (!checkbox.checked) // el .cheched en serveis per veure si està seleccionat o no {
        alert("Error: Has d'acceptar la política de privacitat per continuar."); // si no s'ha marcat la caixa error
        checkbox.focus(); // es torna el focus 
        return false;
    }
    
    // Si está activado, la validación es correcta
    return true;
}
