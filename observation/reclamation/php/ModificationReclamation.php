<?php
require '../../../../model/Initial.php';
if(isset($_GET['reclamation_imm']) AND isset($_GET['reclamation_deposition_client']) AND isset($_GET['reclamation_date_deposition_client']) AND isset($_GET['reclamation_depositeur']) AND isset($_GET['reclamation_analyse']) AND isset($_GET['reclamation_cause']) AND isset($_GET['reclamation_proposition']) AND isset($_GET['reclamation_date_observation_cg']) AND isset($_GET['reclamation_observation_cg_nom']))
{

    $reclamation_imm = $_GET['reclamation_imm'];
    $reclamation_deposition_client = $_GET['reclamation_deposition_client'];
    $reclamation_date_deposition_client = $_GET['reclamation_date_deposition_client'];
    $reclamation_depositeur = $_GET['reclamation_depositeur'];
    $reclamation_analyse = $_GET['reclamation_analyse'];
    $reclamation_cause = $_GET['reclamation_cause'];
    $reclamation_proposition = $_GET['reclamation_proposition'];
    $reclamation_date_observation_cg = $_GET['reclamation_date_observation_cg'];
    $reclamation_observation_cg_nom = $_GET['reclamation_observation_cg_nom'];
    $id_reclam = $_GET['modifReclamation'];

    if(isset($_GET['reclamation_etat']))$reclamation_etat = 'satisfaite';
    else $reclamation_etat = 'non satisfaite';

    $accesAuDonne = 'non';

    $reclamation_immVide = $ModifReclam->CheckEmptyOn($reclamation_imm);
    $reclamation_deposition_clientVide = $ModifReclam->CheckEmptyOn($reclamation_deposition_client);
    $reclamation_date_deposition_clientVide = $ModifReclam->CheckEmptyOn($reclamation_date_deposition_client);
    $reclamation_depositeurVide = $ModifReclam->CheckEmptyOn($reclamation_depositeur);

    if($reclamation_immVide == 'non' AND $reclamation_deposition_clientVide == 'non' AND $reclamation_date_deposition_clientVide == 'non' AND $reclamation_depositeurVide == 'non')
    {

        $reclamation_imm = $ApiMemeContro->avoidInjection($reclamation_imm);
        $reclamation_deposition_client = $ApiMemeContro->avoidInjection($reclamation_deposition_client);
        $reclamation_date_deposition_client = $ApiMemeContro->avoidInjection($reclamation_date_deposition_client);
        $reclamation_depositeur = $ApiMemeContro->avoidInjection($reclamation_depositeur);
        $reclamation_analyse = $ApiMemeContro->avoidInjection($reclamation_analyse);
        $reclamation_cause = $ApiMemeContro->avoidInjection($reclamation_cause);
        $reclamation_proposition = $ApiMemeContro->avoidInjection($reclamation_proposition);
        $reclamation_date_observation_cg = $ApiMemeContro->avoidInjection($reclamation_date_observation_cg);
        $reclamation_observation_cg_nom = $ApiMemeContro->avoidInjection($reclamation_observation_cg_nom);

        $accesAuDonne = 'oui';
    }
    elseif ($reclamation_immVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivReclamation").css("background-color", "darkred");
                $("#resultDivReclamation").css("color", "white");
                $("#resultDivReclamation").text("Veillez renseigner le num\351ro d\'immatriculation");
                $("#resultDivReclamation").slideDown(1000);
                 setTimeout(function () {
                    $("#resultDivReclamation").slideUp(1000);
                },4000);
                $("#reclamation_imm").val("").focus().css("border-color","lightcoral");
                $("#reclamation_imm").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#reclamation_imm").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    elseif ($reclamation_deposition_clientVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivReclamation").css("background-color", "darkred");
                $("#resultDivReclamation").css("color", "white");
                $("#resultDivReclamation").text("Veillez renseigner la d\351position faite pare le client");
                $("#resultDivReclamation").slideDown(1000);
                 setTimeout(function () {
                    $("#resultDivReclamation").slideUp(1000);
                },4000);
                $("#reclamation_deposition_client").val("").focus().css("border-color","lightcoral");
                $("#reclamation_deposition_client").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#reclamation_deposition_client").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    elseif ($reclamation_date_deposition_clientVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivReclamation").css("background-color", "darkred");
                $("#resultDivReclamation").css("color", "white");
                $("#resultDivReclamation").text("Veillez renseiger la date \340 la quelle la r\351clamation \340 \351t\351 fait.");
                $("#resultDivReclamation").slideDown(1000);
                 setTimeout(function () {
                    $("#resultDivReclamation").slideUp(1000);
                },4000);
                $("#reclamation_date_deposition").val("").focus().css("border-color","lightcoral");
                $("#reclamation_date_deposition").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#reclamation_date_deposition").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    elseif ($reclamation_depositeurVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivReclamation").css("background-color", "darkred");
                $("#resultDivReclamation").css("color", "white");
                $("#resultDivReclamation").text("Veillez renseigner le nom du d\351positeur");
                $("#resultDivReclamation").slideDown(1000);
                 setTimeout(function () {
                    $("#resultDivReclamation").slideUp(1000);
                },4000);
                $("#reclamation_client_executant_reclamation").val("").focus().css("border-color","lightcoral");
                $("#reclamation_client_executant_reclamation").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#reclamation_client_executant_reclamation").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }

    if($accesAuDonne == 'oui')
    {
        $modifReclamation = array($reclamation_date_deposition_client,$reclamation_deposition_client,$reclamation_depositeur,$reclamation_analyse,$reclamation_cause,$reclamation_proposition,$reclamation_date_observation_cg,$reclamation_observation_cg_nom,$reclamation_imm,$id_reclam,$reclamation_etat);
        $valideModifCof = $ModifReclam->ReclamationInsert($modifReclamation);

        if ($valideModifCof == "oui")
        {

            ?>
            <script>
                $(document).ready(function () {
                    var nbrListSelect = $("#nbrListSelect").val();
                    $('#formMaintenance')[0].reset();
                    $("#ModalAddReclamation").modal('toggle');
                    if(nbrListSelect == 50)
                        $("#conteneur").load('view/Reclamation.php');
                    else if(nbrListSelect == 100)
                        $("#conteneur").load('view/ReclamationB.php');
                    else if(nbrListSelect == 250)
                        $("#conteneur").load('view/ReclamationC.php');
                    else if(nbrListSelect == 500)
                        $("#conteneur").load('view/ReclamationD.php');
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
                    $("#conteneur").load('view/Reclamation.php');
                    $("#resultDivReclamation").css("background-color", "darkred");
                    $("#resultDivReclamation").css("color", "white");
                    $("#resultDivReclamation").text('D\351sol\351, l\'enr\352gistrement \342 \351chouer.');
                    $("#resultDivReclamation").slideDown(1000);
                     setTimeout(function () {
                    $("#resultDivReclamation").slideUp(1000);
                },4000);
                });
            </script>
            <?php
        }
    }
}
