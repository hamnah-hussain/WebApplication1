let valgte

$(function() {
    hentAlleKunder();
});

function hentAlleKunder() {
    $.get("Database/HentAlle", function (diagnoser) {
        formaterKunder(diagnoser);
    });
}

function formaterKunder(diagnoser) {
    let ut = "";
    const symptomer = new Set();
    for (let diagnose of diagnoser) {
        for (let symptom of diagnose.symptomer) {
            symptomer.add(symptom.navn);
        }
    }
    for (let s of symptomer) {
        ut += "<a value="+s+">" + s + "</a>";
    }
    $("#symptomer").html(ut);
}

function leggTilSymptom(obj) {
    $("#valgte").html(valgte);
}

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


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
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