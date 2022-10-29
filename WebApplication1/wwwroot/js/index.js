let valgte = ""
let alleDiagnoser = new Array;

$(function() {
    hentAlleKunder();
});

function hentAlleKunder() {
    $.get("Database/HentAlle", function (diagnoser) {
        formaterKunder(diagnoser);
    });
}

function formaterKunder(diagnoser) {
    let ut = "<option disabled>Velg en</option>";
    const symptomSet = new Set();
    for (let diagnose of diagnoser) {
        for (let symptom of diagnose.symptomer) {
            symptomSet.add(symptom.navn);
        }
    }
    alleDiagnoser = diagnoser;
    const symptomer = Array.from(symptomSet).sort();
    for (let s of symptomer) {
        ut += "<option value='"+s+"'>" + s + "</option>";
    }
    $("#symptomer").html(ut);
}

$(function () {
    $("#symptomer").change(function () {
        if (this.value) {
            valgte += this.value + "<br>";
            $("#valgte").html(valgte);
        }
    });

});

function slettKunde(id) {
    const url = "Kunde/Slett?id=" + id;
    $.get(url, function (OK) {
        if (OK) {
            window.location.href = 'index.html';
        }
        else {
            $("#feil").html("Feil i db - prøv igjen senere");
        }

    });
}

function finnDiagnose() {
    let valgteSymptomer = new Array;
    valgteSymptomer = valgte.split("<br>");
    let hoyestProsent = 0.0;
    let finale = "";

    for (diagnose of alleDiagnoser) {
        let prosent = diagnose.symptomer.filter(value => valgteSymptomer.includes(value.navn)).length / diagnose.symptomer.length;
        if (prosent > hoyestProsent) {
            hoyestProsent = prosent;
            finale = diagnose.navn;
        }
    }

    const bruker = {
        alder: "23",
        gender: "male",
        diagnose: finale
    };

    $.post("Bruker/Lagre", bruker, function (OK) {

    });

    $("#resultat").html(finale);
}

function visBrukere() {
    $.get("Bruker/HentAlle", function (brukere) {
        for (b of brukere) {
            console.log(b);
        }
    });
}

/*
When the user clicks on the button,
toggle between hiding and showing the dropdown content
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
*/
