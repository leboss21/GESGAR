<!DOCTYPE html>
<html>
<head>

</head>
<body>
<?php
$localtime = localtime();
$second = $localtime[0];
$minute = $localtime[1];
$heure = $localtime[2];

?>
<span id="montre"></span>
<script>

    var tope = 0;
    var second = 0;
    var minute = 0;
    var heure = 0;
    second = <?php echo json_encode($second);?>;
    minute = <?php echo json_encode($minute);?>;
    heure = <?php echo json_encode($heure);?>;
    crono(tope,second,minute,heure);

    function crono(top,s,m,h) {

        if(m<10)
        {
            var ml = m.length;
            if(ml == 2)
            {
                m = '0'+m.charAt(1)
            }
            else {
                m = '0'+m;
            }
        }

        if (top == 0)
        {
            s = s;
            m = m;
            h = h;
            if(s<10)s = '0'+s;
            $("#montre").text(h+':'+m+':'+s);
        }
        else {
            s++;
            if(s<10)s = '0'+s;
            $("#montre").text(h+':'+m+':'+s);
            if (s == 60)
            {

                var client = 'client';
                $.post('controller/RemoteInsetionClient.php',{remoteinsertionclient:client},function (data) {

                    var vehicule = 'vehicule';
                    $.post('controller/RemoteInsetionVehicule.php',{remoteinsertionvehicule:vehicule},function (data) {

                        var reception = 'reception';
                        $.post('controller/RemoteInsetionReception.php',{remoteinsertionreception:reception},function (data) {

                            var evolution = 'evolution';
                            $.post('controller/RemoteInsetionEvolution.php',{remoteinsertionevolution:evolution},function (data) {});

                            var recommandation = 'recommandation';
                            $.post('controller/RemoteInsetionRecommandation.php',{remoteinsertionrecommandation:recommandation},function (data) {});

                            var livraison = 'livraison';
                            $.post('controller/RemoteInsetionLivraison.php',{remoteinsertionlivraison:livraison},function (data) {});

                        });

                    });

                });

                var client = 'client';
                $.post('controller/RemoteModificationClient.php',{remotemodificationclient:client},function (data) {

                    var vehicule = 'vehicule';
                    $.post('controller/RemoteModificationVehicule.php',{remotemodificationvehicule:vehicule},function (data) {

                        var reception = 'reception';
                        $.post('controller/RemoteModificationReception.php',{remotemodificationreception:reception},function (data) {

                            var reception = 'evolution';
                            $.post('controller/RemoteModificationEvolution.php',{remotemodificationevolution:reception},function (data) {});

                            var recommandation = 'recommandation';
                            $.post('controller/RemoteModificationRecommandation.php',{remotemodificationrecommandation:recommandation},function (data) {});

                            var livraison = 'livraison';
                            $.post('controller/RemoteModificationLivraison.php',{remotemodificationlivraison:livraison},function (data) {});

                        });

                    });

                });

                s = 0;
                m++;
                if (m == 60)
                {
                    m=0;
                    if (h == 12)
                    {
                        h = 0;
                    }
                    h++;
                }
            }
        }
        top++;
        setTimeout(function () {
            crono(top,s,m,h);
        },1000);
    }
</script>
</body>
</html>