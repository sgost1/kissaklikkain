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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}