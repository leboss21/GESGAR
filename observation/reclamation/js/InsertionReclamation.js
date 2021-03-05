function insertionReclamation() {
    $("#ModalAddReclamation").modal({backdrop: "static"});
    var dataSerialize=$("#formReclamation").serialize();
    if($("#validerAddReclamation").text()=="Valider")
    {
        $("#resultDivReclamation").load('controller/observation/reclamation/php/InsertionReclamation.php',dataSerialize);
    }
    if($("#validerAddReclamation").text()=="Modifier")
    {
        $("#resultDivReclamation").load('controller/observation/reclamation/php/ModificationReclamation.php',dataSerialize);
    }
}