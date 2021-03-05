function insertionUtilisateur() {
    var dataSerialize = $("#formU").serialize();
    if($("#validerU").text() == "Valider")
    {
        $("#resultDivU").load('controller/administrateur/utilisateur/php/InsertionUtilisateur.php',dataSerialize);
    }
    if($("#validerU").text() == "Modifier")
    {

    }
}