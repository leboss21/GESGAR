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
    $recom_situation =  $_GET['recom_situation'];

    $accesAuDonne = 'non';
    $data = array($recom_date, $recom_imm, $recom_client, $recom_prob, $recom_recom, $recom_tech);
    $dataVide = $ApiInsertRecom->CheckEmpty($data);
    if($dataVide == 'non')
    {
        $recom_date = $ApiMemeContro->avoidInjection($recom_date);
        $recom_imm = $ApiMemeContro->avoidInjection($recom_imm);
        $recom_client = $ApiMemeContro->avoidInjection($recom_client);
        $recom_prob = $ApiMemeContro->avoidInjection($recom_prob);
        $recom_recom = $ApiMemeContro->avoidInjection($recom_recom);
        $recom_tech =  $ApiMemeContro->avoidInjection($recom_tech);

        $dataValide = $ApiMemeContro->patternDate($recom_date);
        if($dataValide == 'oui')
        {
            $accesAuDonne = 'oui';
        }
        else
        {
            ?>
            <script>
                $(document).ready(function () {
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

        $insertClient = array($recom_date, $recom_imm, $recom_client, $recom_tech, $recom_prob, $recom_recom, $recom_situation);
        $valideIsertionCof = $ApiInsertRecom->RecommandationInsert($insertClient);

        if ($valideIsertionCof == "oui")
        {
            ?>
            <script>
                $(document).ready(function () {
                    $("#formRecom")[0].reset();
                    var nbrListSelect = $("#nbrListSelect").val();
                    if(nbrListSelect == 50)
                        $("#conteneur").load('view/observation/recommandation/Recommandation.php');
                    else if(nbrListSelect == 100)
                        $("#conteneur").load('view/observation/recommandation/RecommandationB.php');
                    else if(nbrListSelect == 250)
                        $("#conteneur").load('view/observation/recommandation/RecommandationC.php');
                    else if(nbrListSelect == 500)
                        $("#conteneur").load('view/observation/recommandation/RecommandationD.php');
                    $("#resultDivRecom").css("background-color", "green");
                    $("#resultDivRecom").css("color", "white");
                    $("#resultDivRecom").text('Nouvelle recommandation.');
                    $("#resultDivRecom").slideDown(1000);
                    setTimeout(function () {
                        $("#resultDivRecom").slideUp(1000);
                    },4000);
                });
            </script>
            <?php
        }
        else
        {
            ?>
            <script>
                $(document).ready(function () {
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