function suppressiionRecommandation(element_id) {
    $.post('controller/observation/recommandation/php/SuppressionRecommandation.php',{postidrecommandationandremoverecommandewhenidissend:element_id},function (data) {

        if(data=='oui')
        {
            var nbrListSelect = $("#nbrListSelect").val();
            if(nbrListSelect == 50)
                $("#conteneur").load('view/observation/recommandation/Recommandation.php');
            else if(nbrListSelect == 100)
                $("#conteneur").load('view/observation/recommandation/RecommandationB.php');
            else if(nbrListSelect == 250)
                $("#conteneur").load('view/observation/recommandation/RecommandationC.php');
            else if(nbrListSelect == 500)
                $("#conteneur").load('view/observation/recommandation/RecommandationD.php');
            SuppressionReussie();
        }
        else
        {
            SuppressionEchoue();
        }
    });
}