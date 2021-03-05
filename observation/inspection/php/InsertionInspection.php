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
    $inspectionUnique = $_GET['inspectionVehiculeUniqueSend'];


    $accesAuDonne = 'non';

    $nom_clientVide = $ApiInsertInspect->CheckEmptyOn($nom_client);
    $immVide = $ApiInsertInspect->CheckEmptyOn($imm);
    $dateVide = $ApiInsertInspect->CheckEmptyOn($date);
    $kilometVide = $ApiInsertInspect->CheckEmptyOn($kilomet);
    $numPDVide = $ApiInsertInspect->CheckEmptyOn($numPD);
    $nomPDVide = $ApiInsertInspect->CheckEmptyOn($nomPD);
    $qteVide = $ApiInsertInspect->CheckEmptyOn($qte);
    $numCOMVide = $ApiInsertInspect->CheckEmptyOn($numCOM);
    $resultVide = $ApiInsertInspect->CheckEmptyOn($result);

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
            $inspectionUnique = $ApiMemeContro->avoidInjection($inspectionUnique);

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
                     setTimeout(function () {
                        $("#resultDivInspection").slideUp(1000);
                    },4000);
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
                    $("#resultDivInspection").text("Veillez renseigner le nom du Client");
                    $("#resultDivInspection").slideDown(1000);
                     setTimeout(function () {
                        $("#resultDivInspection").slideUp(1000);
                    },4000);
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
                $("#resultDivInspection").text("Veillez renseigner l'immatriculation du v\3351hicule");
                $("#resultDivInspection").slideDown(1000);
                 setTimeout(function () {
                        $("#resultDivInspection").slideUp(1000);
                    },4000);
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
                $("#resultDivInspection").text("Veillez renseigner la date de l'inspection");
                $("#resultDivInspection").slideDown(1000);
                 setTimeout(function () {
                        $("#resultDivInspection").slideUp(1000);
                    },4000);
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
                $("#resultDivInspection").text("Veillez renseigner le kilom\351trage du v\351hicule");
                $("#resultDivInspection").slideDown(1000);
                 setTimeout(function () {
                        $("#resultDivInspection").slideUp(1000);
                    },4000);
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
                $("#resultDivInspection").text("Veillez renseigner le num\351ro P.D");
                $("#resultDivInspection").slideDown(1000);
                 setTimeout(function () {
                        $("#resultDivInspection").slideUp(1000);
                    },4000);
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
                $("#resultDivInspection").text("Veillez renseigner le nom P.D");
                $("#resultDivInspection").slideDown(1000);
                 setTimeout(function () {
                        $("#resultDivInspection").slideUp(1000);
                    },4000);
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
                $("#resultDivInspection").text("Veillez renseigner la quantit\351e");
                $("#resultDivInspection").slideDown(1000);
                 setTimeout(function () {
                        $("#resultDivInspection").slideUp(1000);
                    },4000);
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
                $("#resultDivInspection").text("Veillez renseigner le num\351ro COM");
                $("#resultDivInspection").slideDown(1000);
                 setTimeout(function () {
                        $("#resultDivInspection").slideUp(1000);
                    },4000);
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
                $("#resultDivInspection").text("Veillez renseigner le r\351sultat");
                $("#resultDivInspection").slideDown(1000);
                 setTimeout(function () {
                        $("#resultDivInspection").slideUp(1000);
                    },4000);
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

        $insertInspection = array($nom_client, $imm, $date, $kilomet, $numPD, $nomPD, $qte, $numCOM, $result);

        $valideIsertionCof = $ApiInsertInspect->InspectionInsert($insertInspection);

        if ($valideIsertionCof == "oui")
        {
            ?>
            <script>
                $(document).ready(function () {
                    $("#formInspection")[0].reset();


                    if($("#mySpan").text()=='Observation - Inspection') {
                        var imm = <?php echo json_encode($imm);?>;
                        $('#immatriculationInspectionShearch').val(imm);
                        InspectionUniqueIfEnterImmatricule();
                    }
                    else if($("#mySpan").text()=='Enr\351gistrement V\351hucules')
                    {
                        var idVehicule = <?php echo json_encode($inspectionUnique);?>;
                        $.post('view/Autocomplete.php',{postidvehiculereturninspection:idVehicule},function (data) {
                            data = $.parseJSON(data);
                            $('#tableListeUniqueBody').empty();
                            $.each(data,function (key, val) {
                                $('#tableListeUniqueBody').append("<tr><td style='width: 10vw;'>"+val.date+"</td><td style='width: 9.9vw;'>"+val.kilometrage+"</td><td style='width: 9.9vw;'>"+val.num_p_d+"</td><td style='width: 16.35vw;'>"+val.nom_p_d+"</td><td style='width: 9.9vw;'>"+val.quantite_p_d+"</td><td style='width: 9.9vw;'>"+val.num_com+"</td><td style='width: 9.85vw;'>"+val.resultat+"</td><tr>");
                            });
                        });
                    }
                    $("#resultDivInspection").css("background-color", "green");
                    $("#resultDivInspection").css("color", "white");
                    $("#resultDivInspection").text('Nouvelle inspection ajout\351e.');
                    $("#resultDivInspection").slideDown(1000);
                     setTimeout(function () {
                        $("#resultDivInspection").slideUp(1000);
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
                    $("#conteneur").load('view/observation/inspection/Inspection.php');
                    $("#resultDivInspection").css("background-color", "darkred");
                    $("#resultDivInspection").css("color", "white");
                    $("#resultDivInspection").text('D\351sol\351, l\'enr\351gistrement \342 \351chouer.');
                    $("#resultDivInspection").slideDown(1000);
                     setTimeout(function () {
                        $("#resultDivInspection").slideUp(1000);
                    },4000);
                });
            </script>
            <?php
        }
    }
}

