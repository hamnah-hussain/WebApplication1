$(function () {
    // hent kunden med kunde-id fra url og vis denne i skjemaet

    const id = window.location.search.substring(1);
    const url = "Bruker/HentEn?" + id;
    $.get(url, function (kunde) {
        $("#id").val(bruker.id); // må ha med id inn skjemaet, hidden i html
        $("#alder").val(bruker.alder);
        $("#gender").val(bruker.gender);
        $("#diagnose").val(bruker.diagnose);
    });
});

function endreBruker() {
    const bruker = {
        id: $("#id").val(), // må ha med denne som ikke har blitt endret for å vite hvilken kunde som skal endres

        alder: $("#alder").val(),
        gender: $("#gender").val(),
        diagnose: $("#diagnose").val(),
    };
    $.post("Bruker/Endre", bruker, function (OK) {
        if (OK) {
            window.location.href = 'brukerliste.html';
        }
        else {
            $("#feil").html("Feil i db - prøv igjen senere");
        }
    });
}