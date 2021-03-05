function suppressionLivraison(element_id) {
    $.post('controller/livraison/php/SuppressionLivraison.php',{postidlivraisonandremoverelivrewhenidissend:element_id},function (data) {

        if(data=='oui')
        {
            var nbrListSelect = $("#nbrListSelect").val();
            if(nbrListSelect == 50)
                $("#conteneur").load('view/livraison/Livraison.php');
            else if(nbrListSelect == 100)
                $("#conteneur").load('view/livraison/LivraisonB.php');
            else if(nbrListSelect == 250)
                $("#conteneur").load('view/livraison/LivraisonC.php');
            else if(nbrListSelect == 500)
                $("#conteneur").load('view/livraison/LivraisonD.php');
            SuppressionReussie();
        }
        else
        {
            SuppressionEchoue();
        }
    });
}