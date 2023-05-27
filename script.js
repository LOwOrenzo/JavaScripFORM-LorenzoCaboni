function validaForm() {
    let errori = "";

    if (document.registr.cognome.value === "") {
        errori += "Inserire cognome\n";
    }
    if (document.registr.nome.value === "") {
        errori += "Inserire nome\n";
    }
    if (document.registr.matricola.value === "") {
        errori += "Inserire matricola\n";
    } else {
        const v = parseInt(document.registr.matricola.value);
        if (isNaN(v)) {
            errori += "La matricola deve essere un numero\n";
        }
    }
    if (document.registr.regione.value === "nessuna") {
        errori += "Selezionare una regione\n";
    }

    if (document.registr.email.value === "") {
        errori += "Inserire l'email\n";
    }
    if (document.registr.tel.value === "") {
        errori += "Inserire il numero di telefono\n";
    }

    if (errori !== "") {
        alert("ERRORI:\n" + errori);
        return false;
    }

    alert("Dati inseriti correttamente");
    return true;
}