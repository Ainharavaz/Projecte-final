// Treballarem sempre amb una variable global, obj, què és una taula on estan 
// guardats tots els accidents de l'any. Qualsevol altre variable que necessitem
// haurà de ser, necessàriament, una variable local.

// Com que al document html no hi ha controladors d'esdeveniments, els haurem de crear aquí:
document.getElementById("exer01").addEventListener("click", exercici01);
document.getElementById("exer02").addEventListener("click", exercici02);
document.getElementById("exer03").addEventListener("click", exercici03);
document.getElementById("exer04").addEventListener("click", exercici04);    

// Teniu ja definides les funcions de cada exercici (menys del cinquè), només cal
// que ompliu el codi necessari.

function exercici01() {
    let accidents = 0; // creem una variable i li donem un valor icial 0
    for (let i = 0; i < obj.length; i++) { // aquest for el que farà serà que ens recorrera totes les posicions de l'array obj, 
                                         //començant pel 0 i s'executarà tantes vegades com elements hi hagi, i anirem augmentant(i++)
        accidents++; // incrementa comptador d'accidents, cada obj = 1 accident
        }
    let zonaResultats = document.getElementById("resultats"); // buscarem l'id "resultats" al HTML i el guardarem a la variable zonaResultats
    zonaResultats.innerHTML = "<h3>Nombre total d'accidents: " + accidents + "</3>"; 
}


function exercici02() {
    let dl = 0; // creem variables comptadores de tots els dies de la setmana començant pel 0
    let dm = 0;
    let dc = 0;
    let dj = 0;
    let dv = 0;
    let ds = 0;
    let dg = 0;
    
    for (let i = 0; i < obj.length; i++) { // recorrem tot l'array obj, cada element és un accident
        if (obj[i].diaSet === "Dilluns") { // si l'accident s'ha produït en dilluns, incrementa el comptador dl
            dl++;
        } else if (obj[i].diaSet === "Dimarts") {
            dm++;
        } else if (obj[i].diaSet === "Dimecres") {
            dc++;
        } else if (obj[i].diaSet === "Dijous") {
            dj++;
        } else if (obj[i].diaSet === "Divendres") {
            dv++;
        } else if (obj[i].diaSet === "Dissabte") {
            ds++;
        } else if (obj[i].diaSet === "Diumenge") {
            dg++;
        }
    }

    let maxAccidents = Math.max(dl, dm, dc, dj, dv, ds, dg); // math.max ens serveix per obtenir el nombre més 
                                                             // gran d'accidents entre tots els dies
    let diaMesAccidents = ""; // creem una variable buida on guardarem el nom del dia amb més accidents

    if (maxAccidents === dl) diaMesAccidents = "Dilluns"; // comparem el valor màxim  amb cada comptador i 
                                                        // assignem el dia correcte
    else if (maxAccidents === dm) diaMesAccidents = "Dimarts";
    else if (maxAccidents === dc) diaMesAccidents = "Dimecres";
    else if (maxAccidents === dj) diaMesAccidents = "Dijous";
    else if (maxAccidents === dv) diaMesAccidents = "Divendres";
    else if (maxAccidents === ds) diaMesAccidents = "Dissabte";
    else if (maxAccidents === dg) diaMesAccidents = "Diumenge";

    let zonaResultats = document.getElementById("resultats");
    zonaResultats.innerHTML = "<h3>El dia amb més accidents és: " + diaMesAccidents + " </h3>";
}


function exercici03() {
    let zona = document.getElementById("resultats"); //busquem id resultat a HTML i guardem a la variable zona
    zona.innerHTML = ""; // netejem el contingut anterior de la zona perque els resultats no es solapin
    let llistaUL = document.createElement("ul"); // es crea una llista no ordenada, dintre aniran accidents per districte
    zona.innerHTML = "<h3>Llista d'accidents per districte:</h3>";
   
    for (let i = 0; i <= 10; i++) { // aquest for es farà servir per recorrrer els districtes del 0 al 10
        let textDistricte = (i === 0) ? "Altres: " : "Districte " + i + ": ";
        let valorCodi = (i === 0) ? -1 : i;

        let numAccidents = obj.filter(a => a.nDist === valorCodi).length;
        // filtrem l'array obj per quedar-nos només amb els accidents del districte actual seleccionat
        // amb filter() seleccionem els accidents i nDist és igual al districte
        // .length ens compta quants n'hi ha

        let subllista = document.createElement("li"); // crrem un element de llista
        let contingut = document.createTextNode(textDistricte + numAccidents);
        // crea el text que es mostra dintre el li (nom districte i nombre accidents)

        subllista.appendChild(contingut); // afegim el text dins element li
        llistaUL.appendChild(subllista); // afegim el li a la llista ul
    }
    zona.appendChild(llistaUL); // afegeix la llista ul a la zona resultats perquè surti a la pantalla
    // .appendChild és un element DOM que ens serveix per afegir un element creat en JS dins d'HTML
}


function exercici04() {
    creaFormulari(); // creem un fomrulari amb un select, on l'úsuari pot seleccionat un districte
     let selector = document.getElementById("districtes"); //per buscar els elements amb el id districtes
    selector.addEventListener("change", calcularAccidentPerDistricteSeleccionat); 
    // .addEventListener serveix per detectar les accions de l'usuari i executa una funció quan passa
    // change, s'executa quan l'usuari canvia l'opció seleccionada, 
    // cridarem la funció calcularAccidentPerDistricteSeleccionat

}

function calcularAccidentPerDistricteSeleccionat() {
    let districteSeleccionat = document.getElementById("districtes").value;  // obté el valor selecionat
    // .values serveix per el que ha seleccionat l'usuari
    let numAccidents = obj.filter(a => a.districte === districteSeleccionat).length;    
    let zonaResultats = document.getElementById("resultats");
    zonaResultats.innerHTML = "<h3>Nombre d'accidents al districte " + districteSeleccionat + ": " + numAccidents + "<h3>";
}  
