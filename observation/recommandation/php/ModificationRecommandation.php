<?php
require '../../../../model/Initial.php';
if(isset($_GET['recom_date']) AND isset($_GET['recom_imm']) AND isset($_GET['recom_client']) AND isset($_GET['recom_prob']) AND isset($_GET['recom_recom']) AND isset($_GET['recom_tech']))
{
    $recom_date = $_GET['recom_date'];
    $recom_imm = $_GET['recom_imm'];
    $recom_client = $_GET['recom_client'];
    $recom_prob = $_GET['recom_prob'];
    $recom_recom = $_GET['recom_recom'];
    $recom_tech =  $_GET['recom_tech'];
    $id_recom =  $_GET['modifRecommandation'];
    $recom_situation =  $_GET['recom_situation'];

    $accesAuDonne = 'non';

    $data = array($recom_date, $recom_imm, $recom_client, $recom_prob, $recom_recom, $recom_tech);
    $dataVide = $ModifRecom->CheckEmpty($data);
    if($dataVide == 'non')
    {
        $recom_date = $ApiMemeContro->avoidInjection($recom_date);
        $recom_imm = $ApiMemeContro->avoidInjection($recom_imm);
        $recom_client = $ApiMemeContro->avoidInjection($recom_client);
        $recom_prob = $ApiMemeContro->avoidInjection($recom_prob);
        $recom_recom = $ApiMemeContro->avoidInjection($recom_recom);
        $recom_tech =  $ApiMemeContro->avoidInjection($recom_tech);
        $id_recom =  $ApiMemeContro->avoidInjection($id_recom);

        $dataValide = $ApiMemeContro->patternDate($recom_date);
        if($dataValide == 'oui')
        {
            $accesAuDonne = 'oui';
        }
        else
        {
            ?>
            <script>
                $("#resultDivRecom").css("background-color", "darkred");
                $("#resultDivRecom").css("color", "white");
                $("#resultDivRecom").text("Vous envoyez de donn\351es invalide.");
                $("#resultDivRecom").slideDown(1000);
                 setTimeout(function () {
                    $("#resultDivRecom").slideUp(1000);
                },4000);
                $("#recom_date").val("").focus().css("border-color","lightcoral");
                $("#recom_date").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#recom_date").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            </script>
            <?php
        }
    }
    else
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivRecom").css("background-color", "darkred");
                $("#resultDivRecom").css("color", "white");
                $("#resultDivRecom").text("Veillez remplire tous les champs.");
                $("#resultDivRecom").slideDown(1000);
                 setTimeout(function () {
                    $("#resultDivRecom").slideUp(1000);
                },4000);
            });
        </script>
        <?php
    }

    if($accesAuDonne == 'oui')
    {
        $modifer = ' ';
        $chargeRemote = $ModifRecom->RemoteModification($id_recom);
        if($chargeRemote == 'non charge')$modifer = 'non modifie';
        elseif ($chargeRemote == 'charge')$modifer = 'modifie';

        $modifRecom = array($recom_date, $recom_imm, $recom_client, $recom_tech, $recom_prob, $recom_recom,$id_recom,$modifer,$recom_situation);
        $valideModifCof = $ModifRecom->RecommandationModification($modifRecom);

        if ($valideModifCof == "oui")
        {
            ?>
            <script>
                $(document).ready(function () {
                    $(document).ready(function () {
                        var nbrListSelect = $("#nbrListSelect").val();
                        $('#formRecom')[0].reset();
                        $("#ModalAddRecommandation").modal('toggle');
                        if(nbrListSelect == 50)
                            $("#conteneur").load('view/Recommandation.php');
                        else if(nbrListSelect == 100)
                            $("#conteneur").load('view/RecommandationB.php');
                        else if(nbrListSelect == 250)
                            $("#conteneur").load('view/RecommandationC.php');
                        else if(nbrListSelect == 500)
                            $("#conteneur").load('view/RecommandationD.php');
                        ModificationReussie();
                    });
                });
            </script>
            <?php
        }
        else
        {
            ?>
            <script>
                $(document).ready(function () {
                    $("#conteneur").load('view/Recommandation.php');
                    $("#resultDivRecom").css("background-color", "darkred");
                    $("#resultDivRecom").css("color", "white");
                    $("#resultDivRecom").text('D\351sol\351, l\'enr\352gistrement \342 \351chouer.');
                    $("#resultDivRecom").slideDown(1000);
                     setTimeout(function () {
                    $("#resultDivRecom").slideUp(1000);
                },4000);
                });
            </script>
            <?php
        }
    }
}