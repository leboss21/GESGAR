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
    $uniqueReclamationSend = $_GET['uniqueReclamationSend'];

    if(isset($_GET['reclamation_etat']))$reclamation_etat = 'satisfaite';
    else $reclamation_etat = 'non satisfaite';

    $accesAuDonne = 'non';

    $reclamation_immVide = $ApiInsertReclam->CheckEmptyOn($reclamation_imm);
    $reclamation_deposition_clientVide = $ApiInsertReclam->CheckEmptyOn($reclamation_deposition_client);
    $reclamation_date_deposition_clientVide = $ApiInsertReclam->CheckEmptyOn($reclamation_date_deposition_client);
    $reclamation_depositeurVide = $ApiInsertReclam->CheckEmptyOn($reclamation_depositeur);

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
        $uniqueReclamationSend = $ApiMemeContro->avoidInjection($uniqueReclamationSend);

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
        $inserReclamation = array($reclamation_date_deposition_client,$reclamation_deposition_client,$reclamation_depositeur,$reclamation_analyse,$reclamation_cause,$reclamation_proposition,$reclamation_date_observation_cg,$reclamation_observation_cg_nom,$reclamation_imm, $reclamation_etat);
        $valideIsertionCof = $ApiInsertReclam->ReclamationInsert($inserReclamation);

        if ($valideIsertionCof == "oui")
        {

            ?>
            <script>
                $(document).ready(function () {
                    $("#formReclamation")[0].reset();
                    if($('#mySpan').text()=='Observation - R\351clamation')
                    {
                        var nbrListSelect = $("#nbrListSelect").val();
                        if(nbrListSelect == 50)
                            $("#conteneur").load('view/Reclamation.php');
                        else if(nbrListSelect == 100)
                            $("#conteneur").load('view/ReclamationB.php');
                        else if(nbrListSelect == 250)
                            $("#conteneur").load('view/ReclamationC.php');
                        else if(nbrListSelect == 500)
                            $("#conteneur").load('view/ReclamationD.php');
                    }

                    $("#resultDivReclamation").css("background-color", "green");
                    $("#resultDivReclamation").css("color", "white");
                    $("#resultDivReclamation").text('Nouvelle r\351clamation d\351pos\351e');

                    if($("#mySpan").text()=='Enr\351gistrement Clients')
                    {
                        var id_client = <?php echo json_encode($uniqueReclamationSend);?>;
                        $.post('view/Autocomplete.php',{postidclientreturnlistreclamation:id_client},function (data) {
                            $("#listeUniqueReferece").val(id_client);
                            data = $.parseJSON(data);
                            $('#tableListeUniqueBody').empty();
                            if(data.length!=0)
                            {
                                $.each(data,function (key, val) {
                                    $('#tableListeUniqueBody').append("<tr><td style='width: 3vw;'>"+"<a class='glyphicon glyphicon-eye-open infoUnique' style='cursor: pointer;' id='"+val.id_reclamatioin+"'></a>"+"</td><td style='width: 12.12vw;'>"+val.immatriculation+"</td><td style='width: 12.12vw;'>"+val.date_reclamation+"</td><td style='width: 12.12vw;'>"+val.date_reception+"</td><td style='width: 12.12vw;'>"+val.kilometrageR+"</td><td style='width: 12.12vw;'>"+val.date_livraison+"</td><td style='width: 12.12vw;'>"+val.kilometrageL+"</td><tr>");
                                });

                                $(".infoUnique").on('click',function () {
                                    var id_reclamation = $(this).attr('id');
                                    $(".table1uniqueInfo2B").empty();
                                    $(".table1uniqueInfo2BB").empty();
                                    $(".table2uniqueInfo2B").empty();
                                    $(".table2uniqueInfo2F").empty();
                                    $(".table3uniqueInfo2B").empty();
                                    $.post('view/Autocomplete.php',{postidreclamationreturnreclamationandlinkelement:id_reclamation},function (data) {
                                        data = $.parseJSON(data);

                                        $.each(data,function (key, val) {

                                            var telfix = val.tel_fixe;
                                            var telcel = val.tel_cel;
                                            var teldir = val.tel_dir;

                                            if(telfix == 'Non Renseigné')telfix='';
                                            else telfix = telfix.replace(/[()]/g,'');
                                            if(telcel == 'Non Renseigné')telcel='';
                                            else telcel = telcel.replace(/[()]/g,'');
                                            if(teldir == 'Non Renseigné')teldir='';
                                            else teldir = teldir.replace(/[()]/g,'');

                                            if(telcel != '' || teldir!='')telfix = telfix+' /';
                                            if(teldir != '')telcel = telcel+' /';
                                            if(telfix == ' /')telfix='';
                                            if(telcel == ' /')telcel='';
                                            var telclient = telfix+' '+telcel+' '+teldir;

                                            $(".table1uniqueInfo2B").append("<tr style='color: #0c0c0c'><td class='viewListtd' style='width: 8.25vw;'><div style='width: 8.25vw;'>Date:&emsp;"+val.date_client+"</div></td><td class='viewListtd' style='width: 10.25vw;'><div style='width: 10.25vw;'>Type:&emsp;"+val.type_modele+"</div></td><td class='viewListtd' style='width: 18.25vw;'><div style='width: 18.25vw;'>N&deg; Plaque:&emsp;"+val.imm+"</div></td><td class='viewListtd' style='width: 19.25vw;'><div style='width: 19.25vw;'>Client:&emsp;"+val.nom_client+"</div></td></tr>");
                                            $(".table1uniqueInfo2BB").append("<tr style='color: #0c0c0c'><td class='viewListtd' style='width: 34.4vw;'><div style=' margin: 0px;width: 34.4vw;'>VIN:&emsp;"+"</div></td><td class='viewListtd' style='width: 34.4vw;'><div style='width: 34.4vw;'>TEL:&emsp;"+telclient+"</div></td></tr>");
                                            $(".table2uniqueInfo2B").append("<tr style='color: #0c0c0c;'><td style='padding: 0px;padding: 1em;'><textarea class='form-control' autocomplete='off' style='font-size: 1.3em;resize: none;width: 34vw;height: 32vh;' readonly='readonly'>"+val.reclamation+"</textarea></td style=''><td style='padding: 0px; padding: 1em;'><div><h6>Livr&eacute; le <b id='reclamation_L_date'>"+val.date_livraison+"</b> &agrave; <b id='reclamation_L_km'>"+val.kilometrage+"</b>Km</h6><h6>N&deg; Facture: <b id='reclamation_L_facture'>"+val.num_f+"</b></h6><h6>R&eacute;paration effectui&eacute;:<b></b></h6><textarea class='form-control' id='reclamation_L_traveaux_fait' autocomplete='off' style='font-size: 1.3em; resize: none;width: 34vw; height: 20vh;' readonly='readonly'>"+val.traveaux_fait+"</textarea></div></td></tr>");
                                            $(".table2uniqueInfo2F").append("<tr style='color: #f1f1f1'><td class='viewListtd' style='margin: 0px;'>"+"<div class='form-check form-check-inline' style='margin: 0px;'><div class='form-group' style='margin: 0px;width: 14vw;'><h6 >Date:&emsp;<a>"+val.date_reclamation+"</a></h6></div><div class='form-group' style='margin:0px;width: 14vw;'><h6 >Nom:&emsp;<a>"+val.reclamateur+"</a></h6></div></div>"+"</td><td style='margin: 0px;'>"+"<div class='form-check form-check-inline' style='margin: 0px;'><div class='form-group' style='margin: 0px;width: 14vw;'> <h6>Ex&egrave;cutant:&emsp;<a>Executant</a></h6></div><div class='form-group' style='margin: 0px;width: 14vw;'><h6>Controleur:&emsp;<a>controleur2</a></h6></div></div>"+"</td></tr>");
                                            $(".table3uniqueInfo2B").append("<tr style='color: #0c0c0c'><td style='padding: 0px;padding: 1em;padding-bottom: 0.5em;'><div style='width: 34vw; margin: 0px;padding: 0px;'>"+"<h6>Analyse:</h6><textarea class='form-control' autocomplete='off'  readonly='readonly' style='height: 15vh;width: 33vw;resize: none;margin: 0px;'>"+val.analyse+"</textarea><h6>Cause du probl&egrave;me:</h6><textarea class='form-control' autocomplete='off' readonly='readonly' style='height: 15vh;width: 33vw;resize: none;margin: 0px;'>"+val.cause+"</textarea><h6>Proposition:</h6><textarea class='form-control' autocomplete='off' readonly='readonly' style='height: 15vh;width: 33vw;resize: none;margin: 0px;'>"+val.proposition+"</textarea><div class='form-check form-check-inline'><h6 style='margin-right: 2vw;'>Date:&emsp;<a>"+val.date_observation+"</a></h6><h6 >Nom:&emsp;<a>"+val.observateur+"</a></h6></div>"+"</div></td><td><div id='donneBinairesDiv'  class='donneBinairesDiv' style='width: 34.6vw;'></div></td></tr>");

                                        });

                                        $("#uniqueInfoList").css('width','78.5vw');
                                        $("#uniqueInfoList").css('height','90vh');
                                        $("#ModalListeInfoUnique").css('margin-left','-30vw');
                                        $("#uniqueInfo1").hide();
                                        $("#uniqueInfo3").hide();
                                        $("#uniqueInfo2").show();
                                        $("#labelAddListeInfoUnique").text("RAPORT DE RECLAMATION N\260");
                                        $("#ModalListeInfoUnique").modal({backdrop: "static"});
                                    });
                                });
                            }

                            $("#labelAddListeUnique").text("LISTE RECLAMATION").css('margin-right','83%');
                            $("#ajoutUnique").show();
                            $("#ModalAddListeUnique").modal({backdrop: true});

                        });
                    }

                    $("#resultDivReclamation").slideDown(1000);
                    setTimeout(function () {
                        $("#resultDivReclamation").slideUp(1000);
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
