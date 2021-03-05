function insertionTypeModelVehicule() {
    $("#ModalAddTMV").modal({backdrop: "static"});
    var dataSerialize=$("#formTMV").serialize();
    if($("#validerAddTMV").text()=="Valider")
    {
        $("#resultDivMTV").load('controller/operateur/php/InsertionOperateurs.php',dataSerialize);
    }
    if($("#validerAddTMV").text()=="Modifier")
    {
        $("#resultDivMTV").load('controller/operateur/php/ModificationOperateurs.php',dataSerialize);
    }
}

function insertionTypeMoteurVehicule() {
    $("#ModalAddTM").modal({backdrop: "static"});
    var dataSerialize=$("#formTM").serialize();
    if($("#validerAddTM").text()=="Valider")
    {
        $("#resultDivTM").load('controller/operateur/php/InsertionOperateurs.php',dataSerialize);
    }
    if($("#validerAddTM").text()=="Modifier")
    {
        $("#resultDivTM").load('controller/operateur/php/ModificationOperateurs.php',dataSerialize);
    }
}

function insertionSpetialiteTechnicien() {
    $("#ModalAddST").modal({backdrop: "static"});
    var dataSerialize=$("#formST").serialize();
    if($("#validerAddST").text()=="Valider")
    {
        $("#resultDivST").load('controller/operateur/php/InsertionOperateurs.php',dataSerialize);
    }
    if($("#validerAddST").text()=="Modifier")
    {
        $("#resultDivST").load('controller/operateur/php/ModificationOperateurs.php',dataSerialize);
    }
}

function insertionStatusTechnicien() {
    $("#ModalAddStT").modal({backdrop: "static"});
    var dataSerialize=$("#formStT").serialize();
    if($("#validerAddStT").text()=="Valider")
    {
        $("#resultDivStT").load('controller/operateur/php/InsertionOperateurs.php',dataSerialize);
    }
    if($("#validerAddStT").text()=="Modifier")
    {
        $("#resultDivStT").load('controller/operateur/php/ModificationOperateurs.php',dataSerialize);
    }
}

function insertionGenreClient() {
    $("#ModalAddGC").modal({backdrop: "static"});
    var dataSerialize=$("#formGC").serialize();
    if($("#validerAddGC").text()=="Valider")
    {
        $("#resultDivGC").load('controller/operateur/php/InsertionOperateurs.php',dataSerialize);
    }
    if($("#validerAddGC").text()=="Modifier")
    {
        $("#resultDivGC").load('controller/operateur/php/ModificationOperateurs.php',dataSerialize);
    }
}

