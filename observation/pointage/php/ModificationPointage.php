<?php
require '../../../../model/Initial.php';
if(isset($_GET['point_OR']) AND isset($_GET['point_design']) AND  isset($_GET['point_sec']) AND isset($_GET['point_ex']) AND isset($_GET['date_Point']) AND isset($_GET['point_ob']) AND isset($_GET['point_hrAut']) AND isset($_GET['point_tf']) AND isset($_GET['heure_PointF']) AND isset($_GET['heure_PointD']))
{
    $point_OR = $_GET['point_OR'];
    $point_Sect = $_GET['point_sec'];
    $point_Exec = $_GET['point_ex'];
    $date_Point = $_GET['date_Point'];
    $point_ob = $_GET['point_ob'];
    $point_hrAut = $_GET['point_hrAut'];
    $point_tf = $_GET['point_tf'];
    $heure_PointF = $_GET['heure_PointF'];
    $heure_PointD = $_GET['heure_PointD'];
    $point_design = $_GET['point_design'];
    $id_point = $_GET['modifPointage'];

    $accesAuDonne = 'non';

    $point_ORVide = $ModifPoint->CheckEmptyOn($point_OR);
    $point_SectVide  = $ModifPoint->CheckEmptyOn($point_Sect);
    $point_ExecVide  = $ModifPoint->CheckEmptyOn($point_Exec);
    $date_PointVide  = $ModifPoint->CheckEmptyOn($date_Point);
    $point_obVide  = $ModifPoint->CheckEmptyOn($point_ob);
    $point_hrAutVide  = $ModifPoint->CheckEmptyOn($point_hrAut);
    $point_tfVide  = $ModifPoint->CheckEmptyOn($point_tf);
    $heure_PointFVide  = $ModifPoint->CheckEmptyOn($heure_PointF);
    $heure_PointDVide  = $ModifPoint->CheckEmptyOn($heure_PointD);
    $point_designVide  = $ModifPoint->CheckEmptyOn($point_design);

    $data = array($point_OR,$point_Sect,$point_Exec,$date_Point,$point_ob,$point_hrAut,$point_tf,$heure_PointF,$heure_PointD,$point_design);
    $dataVide = $ModifPoint->CheckEmpty($data);

    if($point_ORVide == "non" AND $point_SectVide == "non" AND $point_ExecVide == "non" AND $date_PointVide == "non" AND $point_obVide == "non" AND $point_hrAutVide == "non" AND $point_tfVide == "non" AND $heure_PointFVide == "non" AND $heure_PointDVide == "non" AND $point_designVide == 'non')
    {
        $date_PointValide = $ApiMemeContro->patternDate($date_Point);
        $heure_PointDValide  = $ApiMemeContro->patternHeure($heure_PointD);
        $heure_PointFValide  = $ApiMemeContro->patternHeure($heure_PointF);

        if($date_PointValide == 'oui' AND $heure_PointDValide == 'oui' AND $heure_PointFValide == 'oui')
        {
            $secondExtracStar = explode(':',$heure_PointD);
            $secondExtracEnd = explode(':',$heure_PointF);

            $scondStart = strtotime($secondExtracStar[0]*360)+strtotime($secondExtracStar[1]*60)+ strtotime($secondExtracStar[2]);
            $scondEnd = strtotime($secondExtracEnd[0]*360)+strtotime($secondExtracEnd[1]*60)+ strtotime($secondExtracEnd[2]);

            if($scondStart > $scondEnd)
            {
                $heure = $heure_PointF;
                $heure_PointF = $heure_PointD;
                $heure_PointD = $heure;
            }

            $point_OR = $ApiMemeContro->avoidInjection($point_OR);
            $point_Sect = $ApiMemeContro->avoidInjection($point_Sect);
            $point_Exec = $ApiMemeContro->avoidInjection($point_Exec);
            $date_Point = $ApiMemeContro->avoidInjection($date_Point);
            $point_ob = $ApiMemeContro->avoidInjection($point_ob);
            $point_hrAut = $ApiMemeContro->avoidInjection($point_hrAut);
            $point_tf = $ApiMemeContro->avoidInjection($point_tf);
            $heure_PointF = $ApiMemeContro->avoidInjection($heure_PointF);
            $heure_PointD = $ApiMemeContro->avoidInjection($heure_PointD);
            $point_design = $ApiMemeContro->avoidInjection($point_design);
            $id_point = $ApiMemeContro->avoidInjection($id_point);

            $accesAuDonne = "oui";

        }
        elseif ($date_PointValide == 'non')
        {
            ?>
            <script>
                $(document).ready(function () {
                    $("#resultDivPoint").css("background-color", "darkred");
                    $("#resultDivPoint").css("color", "white");
                    $("#resultDivPoint").text("Date invalide..");
                    $("#resultDivPoint").slideDown(1000);
                    $("#date_P").val("").focus().css("border-color","lightcoral");
                    $("#date_P").blur(function () {
                        $(this).css("border-color","lightgray");
                    });
                    $("#date_P").focus(function () {
                        $(this).css("border-color","lightblue");
                    });
                });
            </script>
            <?php
        }
        elseif ($heure_PointDValide == 'non')
        {
            ?>
            <script>
                $(document).ready(function () {
                    var d = <?php echo json_encode($heure_PointD);?>;
                    alert(d);
                    $("#resultDivPoint").css("background-color", "darkred");
                    $("#resultDivPoint").css("color", "white");
                    $("#resultDivPoint").text("Heure invalide..");
                    $("#resultDivPoint").slideDown(1000);
                    setTimeout(function () {
                        $("#resultDivPoint").slideUp(1000);
                    },4000);
                    $("#heure_PointD").val("").focus().css("border-color","lightcoral");
                    $("#heure_PointD").blur(function () {
                        $(this).css("border-color","lightgray");
                    });
                    $("#heure_PointD").focus(function () {
                        $(this).css("border-color","lightblue");
                    });
                });
            </script>
            <?php
        }
        elseif ($heure_PointFValide == 'non')
        {
            ?>
            <script>
                $(document).ready(function () {
                    $("#resultDivPoint").css("background-color", "darkred");
                    $("#resultDivPoint").css("color", "white");
                    $("#resultDivPoint").text("Heure invalide..");
                    setTimeout(function () {
                        $("#resultDivPoint").slideUp(1000);
                    },4000);
                    $("#resultDivPoint").slideDown(1000);
                    $("#heure_PointF").val("").focus().css("border-color","lightcoral");
                    $("#heure_PointF").blur(function () {
                        $(this).css("border-color","lightgray");
                    });
                    $("#heure_PointF").focus(function () {
                        $(this).css("border-color","lightblue");
                    });
                });
            </script>
            <?php
        }
    }
    else if ($point_ORVide=='oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivPoint").css("background-color", "darkred");
                $("#resultDivPoint").css("color", "white");
                $("#resultDivPoint").text("Veillez renseigner le num\351ro O/R.");
                setTimeout(function () {
                    $("#resultDivPoint").slideUp(1000);
                },4000);
                $("#resultDivPoint").slideDown(1000);
                $("#point_OR").val("").focus().css("border-color","lightcoral");
                $("#point_OR").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#point_OR").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    else if ($point_SectVide=='oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivPoint").css("background-color", "darkred");
                $("#resultDivPoint").css("color", "white");
                $("#resultDivPoint").text("Veillez renseigner la section technicien concernant.");
                setTimeout(function () {
                    $("#resultDivPoint").slideUp(1000);
                },4000);
                $("#resultDivPoint").slideDown(1000);
                $("#point_sec").val("").focus().css("border-color","lightcoral");
                $("#point_sec").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#point_sec").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    else if ($point_ExecVide=='oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivPoint").css("background-color", "darkred");
                $("#resultDivPoint").css("color", "white");
                $("#resultDivPoint").text("Veillez renseigner le technicien concernant.");
                setTimeout(function () {
                    $("#resultDivPoint").slideUp(1000);
                },4000);
                $("#resultDivPoint").slideDown(1000);
                $("#point_ex").val("").focus().css("border-color","lightcoral");
                $("#point_ex").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#point_ex").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    else if ($date_PointVide=='oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivPoint").css("background-color", "darkred");
                $("#resultDivPoint").css("color", "white");
                $("#resultDivPoint").text("Veillez renseigner le Hr Aut.");
                setTimeout(function () {
                    $("#resultDivPoint").slideUp(1000);
                },4000);
                $("#resultDivPoint").slideDown(1000);
                $("#date_P").val("").focus().css("border-color","lightcoral");
                $("#date_P").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#date_P").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    else if ($point_obVide=='oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivPoint").css("background-color", "darkred");
                $("#resultDivPoint").css("color", "white");
                $("#resultDivPoint").text("Veillez renseigner l'objectif.");
                setTimeout(function () {
                    $("#resultDivPoint").slideUp(1000);
                },4000);
                $("#resultDivPoint").slideDown(1000);
                $("#point_ob").val("").focus().css("border-color","lightcoral");
                $("#point_ob").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#point_ob").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    else if ($point_hrAutVide=='oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivPoint").css("background-color", "darkred");
                $("#resultDivPoint").css("color", "white");
                $("#resultDivPoint").text("Veillez renseigner le Hr Aut.");
                setTimeout(function () {
                    $("#resultDivPoint").slideUp(1000);
                },4000);
                $("#resultDivPoint").slideDown(1000);
                $("#point_hrAut").val("").focus().css("border-color","lightcoral");
                $("#point_hrAut").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#point_hrAut").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    else if ($point_tfVide=='oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivPoint").css("background-color", "darkred");
                $("#resultDivPoint").css("color", "white");
                $("#resultDivPoint").text("Veillez renseigner le travail ex\351cut\351.");
                setTimeout(function () {
                    $("#resultDivPoint").slideUp(1000);
                },4000);
                $("#resultDivPoint").slideDown(1000);
                $("#point_tf").val("").focus().css("border-color","lightcoral");
                $("#point_tf").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#point_tf").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    else if ($heure_PointFVide=='oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivPoint").css("background-color", "darkred");
                $("#resultDivPoint").css("color", "white");
                $("#resultDivPoint").text("Veillez renseigner l'heure");
                setTimeout(function () {
                    $("#resultDivPoint").slideUp(1000);
                },4000);
                $("#resultDivPoint").slideDown(1000);
                $("#heure_PointF").val("").focus().css("border-color","lightcoral");
                $("#heure_PointF").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#heure_PointF").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    else if ($heure_PointDVide=='oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivPoint").css("background-color", "darkred");
                $("#resultDivPoint").css("color", "white");
                $("#resultDivPoint").text("Veillez renseigner l'heure");
                setTimeout(function () {
                    $("#resultDivPoint").slideUp(1000);
                },4000);
                $("#resultDivPoint").slideDown(1000);
                $("#heure_PointD").val("").focus().css("border-color","lightcoral");
                $("#heure_PointD").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#heure_PointD").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }
    else if ($point_designVide=='oui')
    {
        ?>
        <script>
            $(document).ready(function () {
                $("#resultDivPoint").css("background-color", "darkred");
                $("#resultDivPoint").css("color", "white");
                $("#resultDivPoint").text("Veillez renseigner la d\351signation");
                setTimeout(function () {
                    $("#resultDivPoint").slideUp(1000);
                },4000);
                $("#resultDivPoint").slideDown(1000);
                $("#point_design").val("").focus().css("border-color","lightcoral");
                $("#point_design").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#point_design").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            });
        </script>
        <?php
    }

    if($accesAuDonne == 'oui')
    {
        $modifPointage = array($point_OR, $point_design, $date_Point, $point_ob, $point_hrAut, $point_tf, $heure_PointD, $heure_PointF, $point_Exec, $point_Sect, $id_point);
        $validemodifCof = $ModifPoint->PointageModificaton($modifPointage);

        if ($validemodifCof == "oui")
        {
            ?>
            <script>
                $(document).ready(function () {
                    $("#formPointage")[0].reset()
                    $("#ModalAddPointage").modal('toggle');
                    var nbrListSelect = $("#nbrListSelect").val();
                    if(nbrListSelect == 50)
                        $("#conteneur").load('view/Pointage.php');
                    else if(nbrListSelect == 100)
                        $("#conteneur").load('view/PointageB.php');
                    else if(nbrListSelect == 250)
                        $("#conteneur").load('view/PointageC.php');
                    else if(nbrListSelect == 500)
                        $("#conteneur").load('view/PointageD.php');
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
                    $("#resultDivPoint").css("background-color", "darkred");
                    $("#resultDivPoint").css("color", "white");
                    $("#resultDivPoint").text('D\351sol\351, l\'enr\352gistrement \342 \351chouer.');
                    $("#resultDivPoint").slideDown(1000);
                    setTimeout(function () {
                        $("#resultDivPoint").slideUp(1000);
                    },4000);
                });
            </script>
            <?php
        }
    }
}