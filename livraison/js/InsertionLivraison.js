function insertionLivraison() {
    $("#ModalAddLivraison").modal({backdrop: "static"});
    var dataSerialize=$("#formLivraison").serialize();
    if($("#validerAddLivraison").text()=="Valider")
    {
        $("#resultDivLivraison").load('controller/livraison/php/InsertionLivraison.php',dataSerialize);
    }
    if($("#validerAddLivraison").text()=="Modifier")
    {
        $("#resultDivLivraison").load('controller/livraison/php/ModificationLivraison.php',dataSerialize);
    }
}