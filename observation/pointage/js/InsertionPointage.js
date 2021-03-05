function insertionPointage() {
    $("#ModalAddPointage").modal({backdrop: "static"});
    var dataSerialize=$("#formPointage").serialize();
    if($("#validerAddPointage").text()=="Valider")
    {
        $("#resultDivPoint").load('controller/observation/pointage/php/InsertionPointage.php',dataSerialize);
    }
    if($("#validerAddPointage").text()=="Modifier")
    {
        $("#resultDivPoint").load('controller/observation/pointage/php/ModificationPointage.php',dataSerialize);
    }
}