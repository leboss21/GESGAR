function insertionInspection() {
    $("#ModalAddInspection").modal({backdrop: "static"});
    var dataSerialize=$("#formInspection").serialize();
    if($("#validerAddInspection").text()=="Valider")
    {
        $("#resultDivInspection").load('controller/observation/inspection/php/InsertionInspection.php',dataSerialize);
    }
    if($("#validerAddInspection").text()=="Modifier")
    {
        $("#resultDivInspection").load('controller/observation/inspection/php/ModificationInspection.php',dataSerialize);
    }
}