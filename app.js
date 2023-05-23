let kissojenMaara = 0;
let kissaVoima = 1;
let kissatSekunnissa = 0;

function kissaNappi() {
    kissojenMaara = kissojenMaara + kissaVoima
    tulostaKissojenMaara()
}

//Sivufunktio
function tulostaKissojenMaara() {
    if (kissojenMaara >= 0) {
        document.getElementById("kissat").innerHTML = kissojenMaara + " Kissaa";
    } else {
        document.getElementById("kissat").innerHTML = kissojenMaara + " Kissa";
    }
}

function kissaVoimaYksi() {
    if (kissojenMaara >= 10) {
        kissaVoima++
        kissojenMaara = kissojenMaara - 10;
        tulostaKissojenMaara()
    }
}

function kissanMaito() {
    if (kissojenMaara >= 50) {
        setInterval( lisaaKissanMaito, 1000);
        kissojenMaara = kissojenMaara - 50;
        tulostaKissojenMaara()
    }
}
function lisaaKissanMaito() {
    kissojenMaara = kissojenMaara + 1;
    tulostaKissojenMaara()
}