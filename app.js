let kissojenMaara = 0;
let kissaVoima = 1;
let kissatSekunnissa = 0;

document.getElementById("kissat").innerHTML = kissojenMaara + " Kissaa";
document.getElementById("kissatSekunnissa").innerHTML = kissatSekunnissa + " /s"
document.getElementById("kissaVoimat").innerHTML = "Voima: " + kissaVoima;

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
        document.getElementById("kissaVoimat").innerHTML = "Voima: " + kissaVoima;
    }
}

function kissanMaito() {
    if (kissojenMaara >= 50) {
        kissatSekunnissa = kissatSekunnissa + 1;
        setInterval( lisaaKissanMaito, 1000);
        kissojenMaara = kissojenMaara - 50;
        tulostaKissojenMaara()
    }
}
function lisaaKissanMaito() {
    kissojenMaara = kissojenMaara + 1;
    tulostaKissojenMaara()
    document.getElementById("kissatSekunnissa").innerHTML = kissatSekunnissa + " /s"
}

// Päivitysvalikko
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
// Avaa valikko kun käyttäjä painaa nappia
btn.onclick = function() {
  modal.style.display = "block";
}
// Jos käyttäjä painaa X merkkiä niin valikko sulkeutuu
span.onclick = function() {
  modal.style.display = "none";
}
// Jos käyttäjä klikkaa valikon ulkopuolelta niin valikko sulkeutuu
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}