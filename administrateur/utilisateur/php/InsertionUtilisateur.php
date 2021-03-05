<?php

require '../../../model/Initial.php';

if(isset($_GET["nom_utilisateur"]) AND isset($_GET["mot_passe_utilisateur"]))
{
    $nom = htmlspecialchars(trim($_GET["nom_utilisateur"]));
    $pwd = htmlspecialchars(trim($_GET["mot_passe_utilisateur"]));
    $accesAuDonne = 'non';
    $nomVide = $ApiInsertUtil->CheckEmptyOn($nom);
    $pwdVide = $ApiInsertUtil->CheckEmptyOn($pwd);

    if($nomVide == 'non' AND $pwdVide == 'non')
    {
        $nomValide = $ApiInsertUtil->NomPwdValide($nom);
        $pwdValide = $ApiInsertUtil->NomPwdValide($pwd);

        if($nomValide == 'oui' AND $pwdValide == 'oui')
        {
            $donneDiff = $ApiInsertUtil->NomPwdDiffere($nom,$pwd);

            if($donneDiff == 'oui')
            {
                $accesAuDonne = 'oui';
            }
            else
            {
                ?>
                <script>
                    $(document).ready(function () {
                        $("#resultDivU").css("background-color", "darkred");
                        $("#resultDivU").css("color", "white");
                        $("#resultDivU").text("Le nom de l'utilisateur et son mot de passe doivent être diff\351rent.");
                        $("#resultDivU").slideDown(1000);
                        setTimeout(function () {
                            $("#resultDivU").slideUp(1000);
                        },4000);
                    });
                </script>
                <?php
            }
        }
        else if($nomValide == 'non')
        {
            ?>
            <script>
                $(document).ready(function () {
                    $("#resultDivU").css("background-color", "darkred");
                    $("#resultDivU").css("color", "white");
                    $("#resultDivU").text("Le nom de l'utilisateur doit comprter au moin 4 caract\350res");
                    $("#nom_utilisateur").focus().css('border-color','lightcoral');
                    $("#resultDivU").slideDown(1000);
                    setTimeout(function () {
                        $("#resultDivU").slideUp(1000);
                    },4000);
                });
            </script>
            <?php
        }
        else if($pwdValide == 'non')
        {
            ?>
            <script>
                $(document).ready(function () {
                    $("#resultDivU").css("background-color", "darkred");
                    $("#resultDivU").css("color", "white");
                    $("#resultDivU").text("Le mot de passe de l'utilisateur doit comprter au moin 4 caract\350res");
                    $("#mot_passe_utilisateur").focus().css('border-color','lightcoral');
                    $("#resultDivU").slideDown(1000);
                    setTimeout(function () {
                        $("#resultDivU").slideUp(1000);
                    },4000);
                });
            </script>
            <?php
        }
    }
    else if($nomVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivU").css("background-color", "darkred");
                $("#resultDivU").css("color", "white");
                $("#resultDivU").text("Veillez renseigner le nom de l'utilisateur.");
                $("#nom_utilisateur").focus().css('border-color','lightcoral');
                $("#resultDivU").slideDown(1000);
                setTimeout(function () {
                    $("#resultDivU").slideUp(1000);
                },4000);
            });
        </script>
        <?php
    }
    else if($pwdVide == 'oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivU").css("background-color", "darkred");
                $("#resultDivU").css("color", "white");
                $("#resultDivU").text("Veillez reseigner le mot de passse.");
                $("#mot_passe_utilisateur").focus().css('border-color','lightcoral');
                $("#resultDivU").slideDown(1000);
                setTimeout(function () {
                    $("#resultDivU").slideUp(1000);
                },4000);

            });
        </script>
        <?php
    }

    if($accesAuDonne == 'oui')
    {
        $conptExist = $ApiInsertUtil->ComptExistent($nom,$pwd);

        if($conptExist == 'non')
        {
            $valideIsertionCof = $ApiInsertUtil->InsertionUtilisateur($nom,$pwd);

            if ($valideIsertionCof == "oui")
            {
                ?>
                <script>
                    $(document).ready(function () {
                        $("#formU")[0].reset();
                        $("#conteneur").load('view/administrateur/utilisateur/InsertionUtilisateur.php');
                        $("#resultDivU").css("background-color", "green");
                        $("#resultDivU").css("color", "white");
                        $("#resultDivU").text('Nouveau utilisateur ajout\351.');
                        $("#resultDivU").slideDown(1000);
                        setTimeout(function () {
                            $("#resultDivU").slideUp(1000);
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
                        $("#resultDivU").css("background-color", "darkred");
                        $("#resultDivU").css("color", "white");
                        $("#resultDivU").text('D\351sol\351, l\'enr\352gistrement \342 \351chouer.');
                        $("#resultDivU").slideDown(1000);
                        setTimeout(function () {
                            $("#resultDivU").slideUp(1000);
                        },4000);
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
                    $("#resultDivU").css("background-color", "darkred");
                    $("#resultDivU").css("color", "white");
                    $("#resultDivU").text("Ce compte existe d\351j\341.");
                    $("#resultDivU").slideDown(1000);
                    setTimeout(function () {
                        $("#resultDivU").slideUp(1000);
                    },4000);
                });
            </script>
            <?php
        }
    }
}