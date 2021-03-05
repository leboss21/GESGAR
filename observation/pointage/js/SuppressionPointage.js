function suppressionPointage(element_id) {
    $.post('controller/observation/pointage/php/SuppressionPointage.php', {postidpointageandremovepointagewhenidissend: element_id}, function (data) {

        if(data=='oui')
        {
            var nbrListSelect = $("#nbrListSelect").val();
            if(nbrListSelect == 50)
                $("#conteneur").load('view/observation/pointage/Pointage.php');
            else if(nbrListSelect == 100)
                $("#conteneur").load('view/observation/pointage/PointageB.php');
            else if(nbrListSelect == 250)
                $("#conteneur").load('view/observation/pointage/PointageC.php');
            else if(nbrListSelect == 500)
                $("#conteneur").load('view/observation/pointage/PointageD.php');
            SuppressionReussie();
        }
        else
        {
            SuppressionEchoue();
        }
    });
}