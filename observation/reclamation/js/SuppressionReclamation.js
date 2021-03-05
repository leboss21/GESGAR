function suppressionReclamation(element_id) {
    $.post('controller/observation/reclamation/php/SuppressionReclamation.php',{postidreclamationnandremovereclamewhenidissend:element_id},function (data) {

        if(data=='oui')
        {
            var nbrListSelect = $("#nbrListSelect").val();
            if(nbrListSelect == 50)
                $("#conteneur").load('view/observation/reclamation/Reclamation.php');
            else if(nbrListSelect == 100)
                $("#conteneur").load('view/observation/reclamation/ReclamationB.php');
            else if(nbrListSelect == 250)
                $("#conteneur").load('view/observation/reclamation/ReclamationC.php');
            else if(nbrListSelect == 500)
                $("#conteneur").load('view/observation/reclamation/ReclamationD.php');
            SuppressionReussie();
        }
        else
        {
            SuppressionEchoue();
        }
    });
}