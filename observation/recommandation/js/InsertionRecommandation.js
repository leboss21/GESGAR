function insertionRecommandation() {
    $("#ModalAddRecommandation").modal({backdrop: "static"});
    var dataSerialize=$("#formRecom").serialize();

    if($("#validerAddRecommandation").text()=="Valider")
    {
        $("#resultDivRecom").load('controller/observation/recommandation/php/InsertionRecommandation.php',dataSerialize);
    }
    if($("#validerAddRecommandation").text()=="Modifier")
    {
        $("#resultDivRecom").load('controller/observation/recommandation/php/ModificationRecommandation.php',dataSerialize);
    }

}