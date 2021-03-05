<?php
require '../../../model/Initial.php';
if(isset($_GET['num_reception_livraison']) AND isset($_GET['immatricul_reception_livraison']) AND isset($_GET['kilometr_reception_livraison']) AND isset($_GET['travailFait_reception_livraison']) AND isset($_GET['travailPasFait_reception_livraison']) AND isset($_GET['date_reception_livraison']) AND isset($_GET['date_finGaranreception_livraison']) AND isset($_GET['num_facture_livrason']) AND isset($_GET['facture_livrason_montant']))
{
    $num_reception = $_GET['num_reception_livraison'];
    $kilometrage_livraison = $_GET['kilometr_reception_livraison'];
    $date_livraison = $_GET['date_reception_livraison'];
    $heure_livraison = $_GET['heure_livraison'];
    $date_finG_livraison = $_GET['date_finGaranreception_livraison'];
    $num_facture_livraison = $_GET['num_facture_livrason'];
    $facture_livrason_montant = $_GET['facture_livrason_montant'];
    $tavaux_fait_livraison = $_GET['travailFait_reception_livraison'];
    $tavaux_nonfait_livraison = $_GET['travailPasFait_reception_livraison'];

    $accesAuDonne = "non";

    $num_receptionVide = $ApiInsertLivre->CheckEmptyOn($num_reception);
    $kilometrage_livraisonVide = $ApiInsertLivre->CheckEmptyOn($kilometrage_livraison);
    $date_livraisonVide = $ApiInsertLivre->CheckEmptyOn($date_livraison);
    $num_facture_livraisonVide = $ApiInsertLivre->CheckEmptyOn($num_facture_livraison);
    $facture_livrason_montantVide = $ApiInsertLivre->CheckEmptyOn($facture_livrason_montant);
    $tavaux_fait_livraisonVide = $ApiInsertLivre->CheckEmptyOn($tavaux_fait_livraison);

    if($num_receptionVide == 'non' AND  $num_receptionVide == 'non' AND $kilometrage_livraisonVide == 'non' AND $date_livraisonVide == 'non' AND $num_facture_livraisonVide == 'non' AND $facture_livrason_montantVide == 'non' AND $tavaux_fait_livraisonVide == 'non')
    {
        $num_reception = $ApiMemeContro->avoidInjection($num_reception);
        $kilometrage_livraison = $ApiMemeContro->avoidInjection($kilometrage_livraison);
        $date_livraison =  $ApiMemeContro->avoidInjection($date_livraison);
        $heure_livraison =  $ApiMemeContro->avoidInjection($heure_livraison);
        $date_finG_livraison =  $ApiMemeContro->avoidInjection($date_finG_livraison);
        $num_facture_livraison =  $ApiMemeContro->avoidInjection($num_facture_livraison);
        $facture_livrason_montant =  $ApiMemeContro->avoidInjection($facture_livrason_montant);
        $tavaux_fait_livraison =  $ApiMemeContro->avoidInjection($tavaux_fait_livraison);
        $tavaux_nonfait_livraison =  $ApiMemeContro->avoidInjection($tavaux_nonfait_livraison);
        $accesAuDonne = "oui";
    }
    elseif ($kilometrage_livraisonVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivLivraison").css("background-color", "darkred");
                $("#resultDivLivraison").css("color", "white");
                $("#resultDivLivraison").text("Veillez renseigner le nouveau kilom\351trage.");
                $("#resultDivLivraison").slideDown(1000);
                setTimeout(function () {
                        $("#resultDivLivraison").slideUp(1000);
                        },4000);
                $("#kilometr_reception_livraison").val("").focus().css("border-color","lightcoral");
                $("#kilometr_reception_livraison").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#kilometr_reception_livraison").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    elseif ($date_livraisonVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivLivraison").css("background-color", "darkred");
                $("#resultDivLivraison").css("color", "white");
                $("#resultDivLivraison").text("Veillez renseigner la date de la livraison du v\351hicule");
                $("#resultDivLivraison").slideDown(1000);
                setTimeout(function () {
                        $("#resultDivLivraison").slideUp(1000);
                        },4000);
                $("#date_reception_livraison").val("").focus().css("border-color","lightcoral");
                $("#date_reception_livraison").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#date_reception_livraison").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    elseif ($num_receptionVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivLivraison").css("background-color", "darkred");
                $("#resultDivLivraison").css("color", "white");
                $("#resultDivLivraison").text("Veillez renseigner le num\351ro de la facture.");
                $("#resultDivLivraison").slideDown(1000);
                setTimeout(function () {
                    $("#resultDivLivraison").slideUp(1000);
                },4000);
                $("#num_reception_livraison").val("").focus().css("border-color","lightcoral");
                $("#num_reception_livraison").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#num_reception_livraison").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    elseif ($num_facture_livraisonVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivLivraison").css("background-color", "darkred");
                $("#resultDivLivraison").css("color", "white");
                $("#resultDivLivraison").text("Veillez renseigner le num\351ro de la facture.");
                $("#resultDivLivraison").slideDown(1000);
                setTimeout(function () {
                        $("#resultDivLivraison").slideUp(1000);
                        },4000);
                $("#num_facture_livrason").val("").focus().css("border-color","lightcoral");
                $("#num_facture_livrason").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#num_facture_livrason").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    elseif ($facture_livrason_montantVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivLivraison").css("background-color", "darkred");
                $("#resultDivLivraison").css("color", "white");
                $("#resultDivLivraison").text("Veillez renseigner le montant.");
                $("#resultDivLivraison").slideDown(1000);
                setTimeout(function () {
                    $("#resultDivLivraison").slideUp(1000);
                },4000);
                $("#facture_livrason_montant").val("").focus().css("border-color","lightcoral");
                $("#facture_livrason_montant").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#facture_livrason_montant").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    elseif ($tavaux_fait_livraisonVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivLivraison").css("background-color", "darkred");
                $("#resultDivLivraison").css("color", "white");
                $("#resultDivLivraison").text("Ce code client existe d\351j\341");
                $("#resultDivLivraison").slideDown(1000);
                setTimeout(function () {
                        $("#resultDivLivraison").slideUp(1000);
                        },4000);
                $("#code_client").val("").focus().css("border-color","lightcoral");
                $("#code_client").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#code_client").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }

    if($accesAuDonne == "oui")
    {
        $factureExiste =  $ApiInsertLivre->FactureValide($num_facture_livraison);

        if($factureExiste == 'non')
        {
            $insertionLivrason = array($num_reception,$date_livraison,$heure_livraison,$tavaux_fait_livraison,$tavaux_nonfait_livraison,$kilometrage_livraison,$date_finG_livraison,$num_facture_livraison,$facture_livrason_montant);
            $valideInsertionCof = $ApiInsertLivre->LivraisonInsert($insertionLivrason);

            if($valideInsertionCof == "oui")
            {
                ?>
                <script>
                    $(document).ready(function () {
                        var nbrListSelect = $("#nbrListSelect").val();
                        $("#formLivraison")[0].reset();
                        $("#immatricul_reception_livraison").prop('readonly',false);
                        $("#client_reception_livraison").val('');
                        $("#modele_reception_livraison").val('');
                        $("#immatricul_reception_livraison").val('');
                        $("#travailFait_reception_livraison").empty();
                        if(nbrListSelect == 50)
                            $("#conteneur").load('view/Livraison.php');
                        else if(nbrListSelect == 100)
                            $("#conteneur").load('view/LivraisonB.php');
                        else if(nbrListSelect == 250)
                            $("#conteneur").load('view/LivraisonC.php');
                        else if(nbrListSelect == 500)
                            $("#conteneur").load('view/LivraisonD.php');
                        $("#resultDivLivraison").css("background-color", "green");
                        $("#resultDivLivraison").css("color", "white");
                        $("#resultDivLivraison").text('Nouveau Livraison effectu\351e.');
                        $("#resultDivLivraison").slideDown(1000);
                        setTimeout(function () {
                        $("#resultDivLivraison").slideUp(1000);
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
                        $("#conteneur").load('view/Livraison.php');
                        $("#resultDivLivraison").css("background-color", "darkred");
                        $("#resultDivLivraison").css("color", "white");
                        $("#resultDivLivraison").text('D\351sol\351 l\'enr\351gistrement \342 \351chou\342.');
                        $("#resultDivLivraison").slideDown(1000);
                        setTimeout(function () {
                        $("#resultDivLivraison").slideUp(1000);
                        },4000);
                    });
                </script>
                <?php
            }
        }
        elseif($factureExiste == 'oui')
        {
            ?>
            <script>
                $(document).ready(function () {
                    $("#resultDivLivraison").css("background-color", "darkred");
                    $("#resultDivLivraison").css("color", "white");
                    $("#resultDivLivraison").text("Ce num\351ro de la facture existe deja.");
                    $("#resultDivLivraison").slideDown(1000);
                    setTimeout(function () {
                        $("#resultDivLivraison").slideUp(1000);
                        },4000);
                    $("#num_facture_livrason").val("").focus().css("border-color","lightcoral");
                    $("#num_facture_livrason").blur(function () {
                        $(this).css("border-color","lightgray");
                    });
                    $("#num_facture_livrason").focus(function () {
                        $(this).css("border-color","lightblue");
                    });
                });
            </script>
            <?php
        }
    }
}