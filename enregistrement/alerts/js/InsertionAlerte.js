function insertionAlerteVisiteTechnique() {
    var dataSerialize = $("#formVisite").serialize();
    if($("#validerVisiteAdd").text() == "Valider")
    {
        $("#resultDivVisite").load('controller/enregistrement/alerts/php/InsertionXvehiculeVisiteTechnique.php',dataSerialize);
    }
    if($("#validerVisiteAdd").text() == "Modifier")
    {
        $("#resultDivVisite").load('controller/enregistrement/alerts/php/ModificationXvehiculeVisiteTechnique.php',dataSerialize);
    }
}

function insertionAlerteAssurance() {
    var dataSerialize = $("#formAssurance").serialize();
    if($("#validerAssuranceAdd").text() == "Valider")
    {
        $("#resultDivAssurance").load('controller/enregistrement/alerts/php/InsertionXvehiculeAssurance.php',dataSerialize);
    }
    if($("#validerAssuranceAdd").text() == "Modifier")
    {
        $("#resultDivAssurance").load('controller/enregistrement/alerts/php/ModificationXvehiculeAssurance.php',dataSerialize);
    }
}

function insertionAlerteGarantie() {
    var dataSerialize = $("#formGarantie").serialize();
    if($("#validerGarantieAdd").text() == "Valider")
    {
        $("#resultDivGarantie").load('controller/enregistrement/alerts/php/InsertionXvehiculeGarantie.php',dataSerialize);
    }
    if($("#validerGarantieAdd").text() == "Modifier")
    {
        $("#resultDivGarantie").load('controller/enregistrement/alerts/php/ModificationXvehiculeGarantie.php',dataSerialize);
    }
}

function insertionAlerteRevision() {
    var dataSerialize = $("#formRevision").serialize();
    if($("#validerRevisionAdd").text() == "Valider")
    {
        $("#resultDivRevision").load('controller/enregistrement/alerts/php/InsertionXvehiculeRevision.php',dataSerialize);
    }
    if($("#validerRevisionAdd").text() == "Modifier")
    {
        $("#resultDivRevision").load('controller/enregistrement/alerts/php/ModificationXvehiculeRevision.php',dataSerialize);
    }
}