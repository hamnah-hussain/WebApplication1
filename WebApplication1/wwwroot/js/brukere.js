$(function () {
    hentAlleBrukere();
});

function hentAlleBrukere() {
    $.get("Bruker/HentAlle", function (brukere) {
        formaterBrukere(brukere);
    });
}

function formaterBrukere(brukere) {
    let ut = "<table class='table table-striped'>" +
        "<tr>" +
        //"<th>ID</th><th>Alder</th><th>Gender</th><th>Diagnose</th><th></th><th></th>" +
        "<th>Alder</th><th>Gender</th><th>Diagnose</th><th></th><th></th>" +
        "</tr>";
    for (let bruker of brukere) {
        ut += "<tr>" +
            //"<td>" + bruker.id + "</td>" +
            "<td>" + bruker.alder + "</td>" +
            "<td>" + bruker.gender + "</td>" +
            "<td>" + bruker.diagnose + "</td>" +
            "<td> <a class='btn btn-primary' href='endre.html?id=" + bruker.id + "'>Endre</a></td>" +
            "<td> <button class='btn btn-danger' onclick='slettKunde(" + bruker.id + ")'>Slett</button></td>" +
            "</tr>";
    }
    ut += "</table>";
    $("#brukere").html(ut);
}

function slettKunde(id) {
    const url = "Bruker/Slett?id=" + id;
    $.get(url, function (OK) {
        if (OK) {
            window.location.href = 'brukere.html';
        }
        else {
            $("#feil").html("Feil i db - prøv igjen senere");
        }

    });
}