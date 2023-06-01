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
// Get the modal element
var modal = document.getElementById("modal");

// Get the button that opens the modal
var modalButton = document.getElementById("modalButton");

// Get the close button element
var closeButton = document.getElementsByClassName("close")[0];

// Open the modal when the button is clicked
modalButton.onclick = function() {
  modal.style.display = "block";
}

// Close the modal when the close button is clicked
closeButton.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function tallennaPeli() {
    var tiedot = {
        kissojenMaara: kissojenMaara,
        kissaVoima: kissaVoima,
        kissatSekunnissa: kissatSekunnissa
    };
    localStorage.setItem('peliTiedot', JSON.stringify(tiedot));
}

function tuoPeliTallennus() {
    var tiedot = JSON.parse(localStorage.getItem('peliTiedot'));
    if (tiedot) {
        kissojenMaara = tiedot.kissojenMaara;
        kissaVoima = tiedot.kissaVoima;
        kissatSekunnissa = tiedot.kissatSekunnissa;
    }
    tulostaKissojenMaara()
    document.getElementById("kissaVoimat").innerHTML = "Voima: " + kissaVoima;
    document.getElementById("kissatSekunnissa").innerHTML = kissatSekunnissa + " /s"
}