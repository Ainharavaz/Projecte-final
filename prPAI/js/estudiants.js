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
    let accidents = 0;
    for (let i = 0; i < obj.length; i++) {
        accidents++;
        }
    let zonaResultats = document.getElementById("resultats");
    zonaResultats.innerHTML = "<h3>Nombre total d'accidents: " + accidents + "</h3>";
}


function exercici02() {
    let dl = 0;
    let dm = 0;
    let dc = 0;
    let dj = 0;
    let dv = 0;
    let ds = 0;
    let dg = 0;
    
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].diaSet === "Dilluns") {
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

    let maxAccidents = Math.max(dl, dm, dc, dj, dv, ds, dg);
    let diaMesAccidents = "";

    if (maxAccidents === dl) diaMesAccidents = "Dilluns";
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
    let zona = document.getElementById("resultats");
    zona.innerHTML = "";
    let llistaUL = document.createElement("ul");

    for (let i = 0; i <= 10; i++) {
        let textDistricte = (i === 0) ? "Altres: " : "Districte " + i + ": ";
        let valorCodi = (i === 0) ? -1 : i;

        let numAccidents = obj.filter(a => a.nDist === valorCodi).length;

        let subllista = document.createElement("li");
        let contingut = document.createTextNode(textDistricte + numAccidents);

        subllista.appendChild(contingut);
        llistaUL.appendChild(subllista);
    }
    zona.appendChild(llistaUL);
}


function exercici04() {
    creaFormulari();
}
