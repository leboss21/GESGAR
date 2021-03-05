<?php
require '../../../../model/Initial.php';

if(isset($_GET['client_inspect']) AND isset($_GET['imm_inspect']) AND isset($_GET['date_inspect']) AND isset($_GET['km_inspect']) AND isset($_GET['numPD_inspect']) AND isset($_GET['nomPD_inspect']) AND isset($_GET['qte_inspect']) AND isset($_GET['numCOM_inspect']) AND isset($_GET['result_inspect']))
{
    $nom_client = $_GET['client_inspect'];
    $imm = $_GET['imm_inspect'];
    $date = $_GET['date_inspect'];
    $kilomet = $_GET['km_inspect'];
    $numPD = $_GET['numPD_inspect'];
    $nomPD = $_GET['nomPD_inspect'];
    $qte = $_GET['qte_inspect'];
    $numCOM = $_GET['numCOM_inspect'];
    $result = $_GET['result_inspect'];
    $id_inspect = $_GET['modifInspection'];

    $accesAuDonne = 'non';

    $nom_clientVide = $ModifIspect->CheckEmptyOn($nom_client);
    $immVide = $ModifIspect->CheckEmptyOn($imm);
    $dateVide = $ModifIspect->CheckEmptyOn($date);
    $kilometVide = $ModifIspect->CheckEmptyOn($kilomet);
    $numPDVide = $ModifIspect->CheckEmptyOn($numPD);
    $nomPDVide = $ModifIspect->CheckEmptyOn($nomPD);
    $qteVide = $ModifIspect->CheckEmptyOn($qte);
    $numCOMVide = $ModifIspect->CheckEmptyOn($numCOM);
    $resultVide = $ModifIspect->CheckEmptyOn($result);

    if($nom_clientVide == 'non' AND $immVide == 'non' AND $dateVide == 'non' AND $kilometVide == 'non' AND $numPDVide == 'non' AND $nomPDVide == 'non' AND $qteVide == 'non' AND $numCOMVide == 'non' AND $resultVide == 'non')
    {
        $dateValide = $ApiMemeContro->patternDate($date);

        if($dateValide == 'oui')
        {
            $nom_client = $ApiMemeContro->avoidInjection($nom_client);
            $imm = $ApiMemeContro->avoidInjection($imm);
            $date = $ApiMemeContro->avoidInjection($date);
            $kilomet = $ApiMemeContro->avoidInjection($kilomet);
            $numPD = $ApiMemeContro->avoidInjection($numPD);
            $nomPD = $ApiMemeContro->avoidInjection($nomPD);
            $qte = $ApiMemeContro->avoidInjection($qte);
            $numCOM = $ApiMemeContro->avoidInjection($numCOM);
            $result = $ApiMemeContro->avoidInjection($result);
            $id_inspect = $ApiMemeContro->avoidInjection($id_inspect);

            $accesAuDonne = 'oui';
        }
        elseif ($dateValide == 'non')
        {
            ?>
            <script>
                $(document).ready(function () {
                    $("#resultDivInspection").css("background-color", "darkred");
                    $("#resultDivInspection").css("color", "white");
                    $("#resultDivInspection").text("Date Incorrecte.");
                    $("#resultDivInspection").slideDown(1000);
                    $("#date_inspect").val("").focus().css("border-color","lightcoral");
                    $("#date_inspect").blur(function () {
                        $(this).css("border-color","lightgray");
                    });
                    $("#date_inspect").focus(function () {
                        $(this).css("border-color","lightblue");
                    });
                });
            </script>
            <?php
        }
    }
    elseif ($nom_clientVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivInspection").css("background-color", "darkred");
                $("#resultDivInspection").css("color", "white");
                $("#resultDivInspection").text("Donn\351e vide");
                $("#resultDivInspection").slideDown(1000);
                $("#nom_client_inspect").val("").focus().css("border-color","lightcoral");
                $("#nom_client_inspect").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#nom_client_inspect").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    elseif ($immVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivInspection").css("background-color", "darkred");
                $("#resultDivInspection").css("color", "white");
                $("#resultDivInspection").text("Donn\351e vide");
                $("#resultDivInspection").slideDown(1000);
                $("#imm_inspect").val("").focus().css("border-color","lightcoral");
                $("#imm_inspect").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#imm_inspect").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    elseif ($dateVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivInspection").css("background-color", "darkred");
                $("#resultDivInspection").css("color", "white");
                $("#resultDivInspection").text("Donn\351e vide");
                $("#resultDivInspection").slideDown(1000);
                $("#date_inspect").val("").focus().css("border-color","lightcoral");
                $("#date_inspect").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#date_inspect").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    elseif ($kilometVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivInspection").css("background-color", "darkred");
                $("#resultDivInspection").css("color", "white");
                $("#resultDivInspection").text("Donn\351e vide");
                $("#resultDivInspection").slideDown(1000);
                $("#km_inspect").val("").focus().css("border-color","lightcoral");
                $("#km_inspect").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#km_inspect").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    elseif ($numPDVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivInspection").css("background-color", "darkred");
                $("#resultDivInspection").css("color", "white");
                $("#resultDivInspection").text("Donn\351e vide");
                $("#resultDivInspection").slideDown(1000);
                $("#numPD_inspect").val("").focus().css("border-color","lightcoral");
                $("#numPD_inspect").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#numPD_inspect").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    elseif ($nomPDVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivInspection").css("background-color", "darkred");
                $("#resultDivInspection").css("color", "white");
                $("#resultDivInspection").text("Donn\351e vide");
                $("#resultDivInspection").slideDown(1000);
                $("#nomPD_inspect").val("").focus().css("border-color","lightcoral");
                $("#nomPD_inspect").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#nomPD_inspect").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    elseif ($qteVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivInspection").css("background-color", "darkred");
                $("#resultDivInspection").css("color", "white");
                $("#resultDivInspection").text("Donn\351e vide");
                $("#resultDivInspection").slideDown(1000);
                $("#qte_inspect").val("").focus().css("border-color","lightcoral");
                $("#qte_inspect").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#qte_inspect").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    elseif ($numCOMVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivInspection").css("background-color", "darkred");
                $("#resultDivInspection").css("color", "white");
                $("#resultDivInspection").text("Donn\351e vide");
                $("#resultDivInspection").slideDown(1000);
                $("#numCOM_inspect").val("").focus().css("border-color","lightcoral");
                $("#numCOM_inspect").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#numCOM_inspect").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    elseif ($resultVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivInspection").css("background-color", "darkred");
                $("#resultDivInspection").css("color", "white");
                $("#resultDivInspection").text("Donn\351e vide");
                $("#resultDivInspection").slideDown(1000);
                $("#result_inspect").val("").focus().css("border-color","lightcoral");
                $("#result_inspect").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#result_inspect").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }

    if($accesAuDonne == 'oui')
    {
        $modifInspection = array($nom_client, $imm, $date, $kilomet, $numPD, $nomPD, $qte, $numCOM, $result,$id_inspect);
        $valideModifCof = $ModifIspect->ModificationInsert($modifInspection);

        if ($valideModifCof == "oui")
        {
            ?>
            <script>
                $(document).ready(function () {
                    $('#formInspection')[0].reset();
                    $("#ModalAddInspection").modal('toggle');
                    InspectionUniqueIfEnterImmatricule();
                    ModificationReussie();
                });
            </script>
            <?php
        }
        else
        {
            ?>
            <script>
                $(document).ready(function () {
                    $("#conteneur").load('view/Client.php');
                    $("#resultDivInspection").css("background-color", "darkred");
                    $("#resultDivInspection").css("color", "white");
                    $("#resultDivInspection").text('D\351sol\351, l\'enr\352gistrement \342 \351chouer.');
                    $("#resultDivInspection").slideDown(1000);
                });
            </script>
            <?php
        }
    }
}

