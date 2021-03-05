<?php
require '../../../model/Initial.php';

if(isset($_GET['libelleTMV']))
{
    $libelle = $_GET['libelleTMV'];
    $libelleVide = $ApiInsertOperateurs->CheckEmptyOn($libelle);
    $accesAuDonne = 'non';
    if($libelleVide == "non")
    {
        $libelle = $ApiMemeContro->avoidInjection($libelle);
        $accesAuDonne = 'oui';
    }
    else
    {
        ?>
        <script>
            $("#resultDivMTV").css("background-color", "darkred");
            $("#resultDivMTV").css("color", "white");
            $("#resultDivMTV").text("Vous envoyez de donn\351es vide.");
            $("#resultDivMTV").slideDown(1000);
            setTimeout(function () {
                $("#resultDivMTV").slideUp(1000);
            },2000)
            $("#libelleTMV").val("").focus().css("border-color","lightcoral");
            $("#libelleTMV").blur(function () {
                $(this).css("border-color","lightgray");
            });
            $("#libelleTMV").focus(function () {
                $(this).css("border-color","lightblue");
            });
        </script>
        <?php
    }

    if($accesAuDonne == "oui")
    {
       $donneeExistant = $ApiInsertOperateurs->ModeleTypeVehicule($libelle);

       if($donneeExistant == "non")
       {
           $valideIsertionCof = $ApiInsertOperateurs->InsertModeleTypeVehicule($libelle);
           if($valideIsertionCof == "oui")
           {
               ?>
               <script>
                   $("#formTMV")[0].reset();
                   $("#conteneur").load('view/operateur/Operateurs.php');
                   $("#resultDivMTV").css("background-color", "green");
                   $("#resultDivMTV").css("color", "white");
                   $("#resultDivMTV").text("Nouveau Modele Type v\351hicule ajout\351;");
                   $("#resultDivMTV").slideDown(1000);
                   setTimeout(function () {
                       $("#resultDivMTV").slideUp(1000);
                   },2000)
               </script>
               <?php
           }
           else
           {
               ?>
               <script>

                   $("#resultDivMTV").css("background-color", "darkred");
                   $("#resultDivMTV").css("color", "white");
                   $("#resultDivMTV").text("D\351sol\351, l\'enr\352gistrement \342 \351chouer.");
                   $("#resultDivMTV").slideDown(1000);
                   setTimeout(function () {
                       $("#resultDivMTV").slideUp(1000);
                   },2000)
               </script>
               <?php
           }
       }
       else
       {
           ?>
           <script>
               $("#resultDivMTV").css("background-color", "darkred");
               $("#resultDivMTV").css("color", "white");
               $("#resultDivMTV").text("Type Modele v\351hicule existant.");
               $("#resultDivMTV").slideDown(1000);
               setTimeout(function () {
                   $("#resultDivMTV").slideUp(1000);
               },2000)
               $("#libelleTMV").val("").focus().css("border-color","lightcoral");
               $("#libelleTMV").blur(function () {
                   $(this).css("border-color","lightgray");
               });
               $("#libelleTMV").focus(function () {
                   $(this).css("border-color","lightblue");
               });
           </script>
           <?php
       }
    }
}
elseif (isset($_GET['libelleTM']))
{
    $libelle = $_GET['libelleTM'];
    $libelleVide = $ApiInsertOperateurs->CheckEmptyOn($libelle);
    $accesAuDonne = 'non';
    if($libelleVide == "non")
    {
        $libelle = $ApiMemeContro->avoidInjection($libelle);
        $accesAuDonne = 'oui';
    }
    else
    {
        ?>
        <script>
            $("#resultDivTM").css("background-color", "darkred");
            $("#resultDivTM").css("color", "white");
            $("#resultDivTM").text("Vous envoyez de donn\351es vides.");
            $("#resultDivTM").slideDown(1000);
            setTimeout(function () {
                $("#resultDivTM").slideUp(1000);
            },2000)
            $("#libelleTM").val("").focus().css("border-color","lightcoral");
            $("#libelleTM").blur(function () {
                $(this).css("border-color","lightgray");
            });
            $("#libelleTM").focus(function () {
                $(this).css("border-color","lightblue");
            });
        </script>
        <?php
    }

    if($accesAuDonne == "oui")
    {
        $donneeExistant = $ApiInsertOperateurs->TypeMoteur($libelle);

        if($donneeExistant == "non")
        {
            $valideIsertionCof = $ApiInsertOperateurs->InsertTypeMoteur($libelle);
            if($valideIsertionCof == "oui")
            {
                ?>
                <script>
                    $("#formTM")[0].reset();
                    $("#conteneur").load('view/operateur/Operateurs.php');
                    $("#resultDivTM").css("background-color", "green");
                    $("#resultDivTM").css("color", "white");
                    $("#resultDivTM").text("Nouveau Modele Type v\351hicule ajout\351;");
                    $("#resultDivTM").slideDown(1000);
                    setTimeout(function () {
                        $("#resultDivTM").slideUp(1000);
                    },2000)
                </script>
                <?php
            }
            else
            {
                ?>
                <script>

                    $("#resultDivTM").css("background-color", "darkred");
                    $("#resultDivTM").css("color", "white");
                    $("#resultDivTM").text("D\351sol\351, l\'enr\352gistrement \342 \351chouer.");
                    $("#resultDivTM").slideDown(1000);
                    setTimeout(function () {
                        $("#resultDivTM").slideUp(1000);
                    },2000)
                </script>
                <?php
            }
        }
        else
        {
            ?>
            <script>
                $("#resultDivTM").css("background-color", "darkred");
                $("#resultDivTM").css("color", "white");
                $("#resultDivTM").text("Type moteur existant.");
                $("#resultDivTM").slideDown(1000);
                setTimeout(function () {
                    $("#resultDivTM").slideUp(1000);
                },2000)
                $("#libelleTM").val("").focus().css("border-color","lightcoral");
                $("#libelleTM").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#libelleTM").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            </script>
            <?php
        }
    }
}
elseif (isset($_GET['libelleST']))
{
    $libelle = $_GET['libelleST'];
    $libelleVide = $ApiInsertOperateurs->CheckEmptyOn($libelle);
    $accesAuDonne = 'non';
    if($libelleVide == "non")
    {
        $libelle = $ApiMemeContro->avoidInjection($libelle);
        $accesAuDonne = 'oui';
    }
    else
    {
        ?>
        <script>
            $("#resultDivST").css("background-color", "darkred");
            $("#resultDivST").css("color", "white");
            $("#resultDivST").text("Vous envoyez de donn\351es vides.");
            $("#resultDivST").slideDown(1000);
            setTimeout(function () {
                $("#resultDivST").slideUp(1000);
            },2000);
            $("#libelleST").val("").focus().css("border-color","lightcoral");
            $("#libelleST").blur(function () {
                $(this).css("border-color","lightgray");
            });
            $("#libelleST").focus(function () {
                $(this).css("border-color","lightblue");
            });
        </script>
        <?php
    }

    if($accesAuDonne == "oui")
    {
        $donneeExistant = $ApiInsertOperateurs->SpecialiteTechnicien($libelle);

        if($donneeExistant == "non")
        {
            $valideIsertionCof = $ApiInsertOperateurs->InsertSpecialiteTechnicien($libelle);
            if($valideIsertionCof == "oui")
            {
                ?>
                <script>

                    $("#resultDivST").css("background-color", "green");
                    $("#resultDivST").css("color", "white");
                    $("#resultDivST").text("Nouveau Sp\351cialit\351 ajou\351");
                    $("#resultDivST").slideDown(1000);
                    setTimeout(function () {
                        $("#resultDivST").slideUp(1000);
                    },2000)
                    $("#formST")[0].reset();
                    $("#conteneur").load('view/operateur/Operateurs.php');
                </script>
                <?php
            }
            else
            {
                ?>
                <script>

                    $("#resultDivST").css("background-color", "darkred");
                    $("#resultDivST").css("color", "white");
                    $("#resultDivST").text("D\351sol\351, l\'enr\352gistrement \342 \351chouer.");
                    $("#resultDivST").slideDown(1000);
                    setTimeout(function () {
                        $("#resultDivST").slideUp(1000);
                    },2000)
                </script>
                <?php
            }
        }
        else
        {
            ?>
            <script>
                $("#resultDivST").css("background-color", "darkred");
                $("#resultDivST").css("color", "white");
                $("#resultDivST").text("Cette sp\351cialit\351e existe.");
                $("#resultDivST").slideDown(1000);
                setTimeout(function () {
                    $("#resultDivST").slideUp(1000);
                },2000)
                $("#libelleST").val("").focus().css("border-color","lightcoral");
                $("#libelleST").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#libelleST").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            </script>
            <?php
        }
    }
}
elseif (isset($_GET['libelleStT']))
{
    $libelle = $_GET['libelleStT'];
    $libelleVide = $ApiInsertOperateurs->CheckEmptyOn($libelle);
    $accesAuDonne = 'non';
    if($libelleVide == "non")
    {
        $libelle = $ApiMemeContro->avoidInjection($libelle);
        $accesAuDonne = 'oui';
    }
    else
    {
        ?>
        <script>
            $("#resultDivStT").css("background-color", "darkred");
            $("#resultDivStT").css("color", "white");
            $("#resultDivStT").text("Vous envoyez de donn\351es vides.");
            $("#resultDivStT").slideDown(1000);
            setTimeout(function () {
                $("#resultDivStT").slideUp(1000);
            },2000);
            $("#libelleStT").val("").focus().css("border-color","lightcoral");
            $("#libelleStT").blur(function () {
                $(this).css("border-color","lightgray");
            });
            $("#libelleStT").focus(function () {
                $(this).css("border-color","lightblue");
            });
        </script>
        <?php
    }

    if($accesAuDonne == "oui")
    {
        $donneeExistant = $ApiInsertOperateurs->StatutTechnicien($libelle);

        if($donneeExistant == "non")
        {
            $valideIsertionCof = $ApiInsertOperateurs->InsertStatutTechnicien($libelle);
            if($valideIsertionCof == "oui")
            {
                ?>
                <script>

                    $("#resultDivStT").css("background-color", "green");
                    $("#resultDivStT").css("color", "white");
                    $("#resultDivStT").text("Nouveau Statut Technicien ajout\351.");
                    $("#resultDivStT").slideDown(1000);
                    setTimeout(function () {
                        $("#resultDivStT").slideUp(1000);
                    },2000);
                    $("#formStT")[0].reset();
                    $("#conteneur").load('view/operateur/Operateurs.php');
                </script>
                <?php
            }
            else
            {
                ?>
                <script>

                    $("#resultDivStT").css("background-color", "darkred");
                    $("#resultDivStT").css("color", "white");
                    $("#resultDivStT").text("D\351sol\351, l\'enr\352gistrement \342 \351chouer.");
                    $("#resultDivStT").slideDown(1000);
                    setTimeout(function () {
                        $("#resultDivStT").slideUp(1000);
                    },2000);
                </script>
                <?php
            }
        }
        else
        {
            ?>
            <script>
                $("#resultDivStT").css("background-color", "darkred");
                $("#resultDivStT").css("color", "white");
                $("#resultDivStT").text("Ce statut technicien existe.");
                $("#resultDivStT").slideDown(1000);
                setTimeout(function () {
                    $("#resultDivStT").slideUp(1000);
                },2000);
                $("#libelleStT").val("").focus().css("border-color","lightcoral");
                $("#libelleStT").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#libelleStT").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            </script>
            <?php
        }
    }
}
elseif (isset($_GET['libelleGC']))
{
    $libelle = $_GET['libelleGC'];
    $libelleVide = $ApiInsertOperateurs->CheckEmptyOn($libelle);
    $accesAuDonne = 'non';
    if($libelleVide == "non")
    {
        $libelle = $ApiMemeContro->avoidInjection($libelle);
        $accesAuDonne = 'oui';
    }
    else
    {
        ?>
        <script>
            $("#resultDivGC").css("background-color", "darkred");
            $("#resultDivGC").css("color", "white");
            $("#resultDivGC").text("Vous envoyez de donn\351es vides.");
            $("#resultDivGC").slideDown(1000);
            setTimeout(function () {
                $("#resultDivGC").slideUp(1000);
            },2000);
            $("#libelleGC").val("").focus().css("border-color","lightcoral");
            $("#libelleGC").blur(function () {
                $(this).css("border-color","lightgray");
            });
            $("#libelleGC").focus(function () {
                $(this).css("border-color","lightblue");
            });
        </script>
        <?php
    }

    if($accesAuDonne == "oui")
    {
        $donneeExistant = $ApiInsertOperateurs->GenreClient($libelle);

        if($donneeExistant == "non")
        {
            $valideIsertionCof = $ApiInsertOperateurs->InsertGenreClient($libelle);
            if($valideIsertionCof == "oui")
            {
                ?>
                <script>

                    $("#resultDivGC").css("background-color", "green");
                    $("#resultDivGC").css("color", "white");
                    $("#resultDivGC").text("Nouveau Genre du client est ajout\351.");
                    $("#resultDivGC").slideDown(1000);
                    setTimeout(function () {
                        $("#resultDivGC").slideUp(1000);
                    },2000);
                    $("#formGC")[0].reset();
                    $("#conteneur").load('view/operateur/Operateurs.php');
                </script>
                <?php
            }
            else
            {
                ?>
                <script>

                    $("#resultDivGC").css("background-color", "darkred");
                    $("#resultDivGC").css("color", "white");
                    $("#resultDivGC").text("D\351sol\351, l\'enr\352gistrement \342 \351chouer.");
                    $("#resultDivGC").slideDown(1000);
                    setTimeout(function () {
                        $("#resultDivGC").slideUp(1000);
                    },2000);
                </script>
                <?php
            }
        }
        else
        {
            ?>
            <script>
                $("#resultDivGC").css("background-color", "darkred");
                $("#resultDivGC").css("color", "white");
                $("#resultDivGC").text("Ce genre de client existe.");
                $("#resultDivGC").slideDown(1000);
                setTimeout(function () {
                    $("#resultDivGC").slideUp(1000);
                },2000);
                $("#libelleGC").val("").focus().css("border-color","lightcoral");
                $("#libelleGC").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#libelleGC").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            </script>
            <?php
        }
    }
}