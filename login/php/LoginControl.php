<?php
/**
 * Created by PhpStorm.
 * User: Az
 * Date: 27/06/2018
 * Time: 06:28
 */

session_start();
require '../../../model/Initial.php';

if(isset($_GET['userLgn']) AND isset($_GET['pswLgn']))
{
    $userLog = $_GET['userLgn'];
    $passLog = $_GET['pswLgn'];

    $donevide = array($userLog,$passLog);
    $videL=$ApiLoggn->CheckEmpty($donevide);
    $accessDonnes = 'non';

    if ( $videL=='non')
    {
        $userLog = $ApiLoggn->avoidInjection($userLog);
        $passLog = $ApiLoggn->avoidInjection($passLog);
        $accessDonnes = 'oui';

    }elseif( $videL=='oui' ){

        ?>
        <script>
            $(document).ready(function(){
                $("#resultLog").css("background-color", "darkred");
                $("#resultLog").css("color", "white");
                $("#resultLog").text("Veuillez tout saisir");
                $("#resultLog").slideDown(1000);
                setTimeout(function () {
                    $("#resultLog").slideUp(1000);
                },4000);

                if($("#nomIdUser").val() == '' || $("#nomIdUser").val().length == 0)
                    $("#nomIdUser").focus();
                else
                    $("#passIdUser").focus();
            });
        </script>
        <?php

    }

    if($accessDonnes == 'oui')
    {
        $donneCorrect=array($userLog,$passLog);
        $existeCompte=$ApiLoggn->compteExistant($donneCorrect);

        if ($existeCompte=='bien' )
        {

            $_SESSION['userGESGAR']=$userLog;
            $_SESSION['LaunchGESGAR']=$passLog;

            ?>
            <script>
                $(document).ready(function(){
                    location.href='index.php';
                });
            </script>
            <?php

        }elseif ( $existeCompte=='mal' ){

            ?>
            <script>
                $(document).ready(function(){
                    $("#resultLog").css("background-color", "darkred");
                    $("#resultLog").css("color", "white");
                    $("#resultLog").text("Compte utilisateur ou Mot de passe incorrect");
                    $("#resultLog").slideDown(1000);
                    setTimeout(function () {
                        $("#resultLog").slideUp(1000);
                    },4000);
                    $("#nomIdUser").css("border-color", "lightcoral");
                    $("#passIdUser").css("border-color", "lightcoral");

                    $("#").css("border-color", "lightcoral");
                    $("#").css("border-color", "lightcoral");

                    $("#nomIdUser").blur(function () {
                        $(this).css("border-color", "lightgray");
                    });
                    $("#passIdUser").blur(function () {
                        $(this).css("border-color", "lightgray");
                    });

                    $("#nomIdUser").focus(function () {
                        $(this).css("border-color", "lightblue");
                    });
                    $("#passIdUser").focus(function () {
                        $(this).css("border-color", "lightblue");
                    });
                });
            </script>
            <?php
        }
    }

}

?>