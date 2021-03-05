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
    $id_tech = $_GET['pointageUniqueIdTech'];

    $accesAuDonne = 'non';

    $point_ORVide = $ApiInsertPoint->CheckEmptyOn($point_OR);
    $point_SectVide  = $ApiInsertPoint->CheckEmptyOn($point_Sect);
    $point_ExecVide  = $ApiInsertPoint->CheckEmptyOn($point_Exec);
    $date_PointVide  = $ApiInsertPoint->CheckEmptyOn($date_Point);
    $point_obVide  = $ApiInsertPoint->CheckEmptyOn($point_ob);
    $point_hrAutVide  = $ApiInsertPoint->CheckEmptyOn($point_hrAut);
    $point_tfVide  = $ApiInsertPoint->CheckEmptyOn($point_tf);
    $heure_PointFVide  = $ApiInsertPoint->CheckEmptyOn($heure_PointF);
    $heure_PointDVide  = $ApiInsertPoint->CheckEmptyOn($heure_PointD);
    $point_designVide  = $ApiInsertPoint->CheckEmptyOn($point_design);

    $data = array($point_OR,$point_Sect,$point_Exec,$date_Point,$point_ob,$point_hrAut,$point_tf,$heure_PointF,$heure_PointD,$point_design);
    $dataVide = $ApiInsertPoint->CheckEmpty($data);

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
            $id_tech = $ApiMemeContro->avoidInjection($id_tech);

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

        $insertPointage = array($point_OR, $point_design, $date_Point, $point_ob, $point_hrAut, $point_tf, $heure_PointD, $heure_PointF, $point_Exec, $point_Sect);
        $valideIsertionCof = $ApiInsertPoint->PointageInsert($insertPointage);


        if ($valideIsertionCof == "oui")
        {
            ?>
            <script>
                $(document).ready(function () {
                    $("#formPointage")[0].reset();
                    var nbrListSelect = $("#nbrListSelect").val();
                    var viewPaneActif = $("#mySpan").text();
                    var idTech = <?php echo json_encode($id_tech);?>;

                    if( viewPaneActif == 'Pointage Technicien')
                    {
                        if(nbrListSelect == 50)
                            $("#conteneur").load('view/observation/pointage/Pointage.php');
                        else if(nbrListSelect == 100)
                            $("#conteneur").load('view/observation/pointage/PointageB.php');
                        else if(nbrListSelect == 250)
                            $("#conteneur").load('view/observation/pointage/PointageC.php');
                        else if(nbrListSelect == 500)
                            $("#conteneur").load('view/observation/pointage/PointageD.php');
                    }

                    if( viewPaneActif == 'Enrégistrement Techniciens')
                    {
                        $.post('view/Autocomplete.php',{posttechidlisttechpointage:idTech},function (data) {
                            data = $.parseJSON(data);

                            $('#tableListeUniqueBody').empty();
                            $('#tableListeUniqueHead').empty();
                            $('#tableListeUniqueBody').empty();
                            $('#tableListeUniqueHead').append("<tr><th style='width: 3vw;border: 0px solid white;'>Vue</th><th style='width: 10vw;border: 0px solid white;'>Date</th><th style='width: 10vw;border: 0px solid white;'>N&deg; O/R</th><th style=';width: 20vw;border: 0px solid white;'>D&eacute;signation</th><th style='width: 5vw;border: 0px solid white;'>Hr Aut</th><th style='width: 10vw;border: 0px solid white;'>D&eacute;but</th><th style='width: 10vw;border: 0px solid white;'>Fin</th><th style='border: 0px solid white;'>Total</th></tr>");

                            $.each(data,function (key, val) {
                                $('#tableListeUniqueBody').append("<tr><td style='width: 3vw;'>"+"<a class='glyphicon glyphicon-eye-open infoUnique' style='cursor: pointer;' id=''></a>"+"</td><td style='width: 9.9vw;'>"+val.date+"</td><td style='width: 9.9vw;'>"+val.num_or+"</td><td style='width: 19.9vw;'>"+val.designation+"</td><td style='width: 5vw;'>"+val.hr_aut+"</td><td style='width: 9.9vw;'>"+val.hd+"</td><td style='width: 9.9vw;'>"+val.hf+"</td><td style='width: 7.9vw;'>"+val.timeMake+"</td><tr>");
                                $(".infoUnique:last").attr('id',val.id_pointage);
                            });

                            $(".infoUnique").click(function () {
                                var element = $(this).attr('id');
                                $.post('view/Autocomplete.php',{posttechidlisttechpointageUnique:element},function (data) {
                                    data = $.parseJSON(data);
                                    $("#listeInfoUnique").empty();
                                    $("#listeInfoUniqueOB").empty();
                                    $("#listeInfoUniqueTF").empty();
                                    if(data.length!=0)
                                    {
                                        $.each(data,function (key, val) {
                                            $("#listeInfoUnique").append("<tr style='width: 100%;'><td style='width: 50%;text-align: left; border: none;'>"+"<label>O/R&emsp;N&deg;:&emsp;</label>"+val.num_or+"</td><td style='width: 50%;text-align: left; border: none;'>"+"<label>Section:&emsp;</label>"+val.section+"</td></tr>");
                                            $("#listeInfoUnique").append("<tr style='width: 100%;'><td style='width: 50%;text-align: left; border: none;'>"+"<label>D&eacute;signation:&emsp;</label>"+val.designation+"</td><td style='width: 50%;text-align: left;border: none;'>"+"<label>Ex&eacute;cutant:&emsp;</label>"+val.tech+"</td></tr>");
                                            $("#listeInfoUnique").append("<tr style='width: 100%;'><td style='width: 20%;text-align: left; border: none;'>"+"<label>Date:&emsp;</label>"+val.date+"</td><td style='width: 80%;text-align: left;border: none;'>"+"<a style='width: 50%;text-align: left;'><label>Hr&emsp;Aut:&emsp;</label>"+val.hr_aut+"</a><a style='width: 50%;text-align: left; margin-left: 20%;'><label>Horaire:&emsp;</label>"+val.heure+"</a>"+"</td></tr>");
                                            $("#listeInfoUniqueOB").append("<tr  style='width: 100%; text-align:justify;'><td>"+"<label>Objectifs:&emsp;</label><br/>"+val.objectif+"</td></tr>");
                                            $("#listeInfoUniqueTF").append("<tr  style='width: 100%; text-align: justify;'><td>"+"<label>Travaux Ex&eacute;cut&eacute;s:&emsp;</label><br/>"+val.travaux_execute+"</td></tr>");
                                        });
                                    }
                                    $("#uniqueInfo2").hide();
                                    $("#uniqueInfo3").hide();
                                    $("#uniqueInfo1").show();
                                    $("#uniqueInfoList").css('width','100%');
                                    $("#uniqueInfoList").css('height','100%');
                                    $("#uniqueInfo").css('width','100%');
                                    $("#uniqueInfo").css('height','100%');
                                    $("#labelAddListeInfoUnique").text("INFORMATIONS POINTAGE").css('width','60%');
                                    $("#ModalListeInfoUnique").modal({backdrop: "static"});
                                });

                            });

                        });
                    }

                    $("#resultDivPoint").css("background-color", "green");
                    $("#resultDivPoint").css("color", "white");
                    $("#resultDivPoint").text('Nouveau pointage ajout\351.');
                    $("#resultDivPoint").slideDown(1000);
                    setTimeout(function () {
                        $("#resultDivPoint").slideUp(1000);
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
                    $("#conteneur").load('view/Pointage.php');
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