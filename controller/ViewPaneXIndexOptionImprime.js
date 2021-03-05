$(document).ready(function () {
    $(".printFootBtn").on('mousemove',function () {
        $(this).css('background-color','#3801d0');
    });

    $(".printFootBtn").on('mouseleave',function () {
        $(this).css('background-color','#1D2C73');
    });

    $("#idexselectvaleurtri").on('change', function () {
        $("#idexinputvaleurtri").val('');
    });

    $("#printSelectOrdreAffichage").on('change', function () {
        var valeur = $("#printSelectOrdreAffichage").val();

        if(valeur == 'Avant' || valeur == 'Apr\350s' || valeur == 'Extr\352me')
        {
            $("#date1h6").text('Date');
            $("#printDate2").hide();
            $(".indexvaleurtri").hide();
            $("#printDate").show();
            $("#printDateCourante").hide();
        }

        if(valeur == 'Admise' || valeur == 'Exclut')
        {
            $("#date1h6").text('Date');
            $("#printDate2").hide();
            $(".indexvaleurtri").hide();
            $("#printDate").show();
            $("#printDateCourante").show();
        }

        if(valeur == 'Entre')
        {
            $("#date1h6").text('Date Inf\351rieure');
            $("#printDateCourante").hide();
            $(".indexvaleurtri").hide();
            $("#printDate2").show();
            $("#printDate").show();

        }

        if(valeur == 'Autre')
        {
            var element_actif = $("#mySpan").text();
            $("#idexinputvaleurtri").val('');
            $("#printDate2").hide();
            $("#printDate").hide();
            $("#printDateCourante").hide();
            $("#idexselectvaleurtri").empty();

            if(element_actif == "Enr\351gistrement Clients")
            {
                $("#idexselectvaleurtri").append('<option>Code</option><option>Genre</option><option>Client</option><option>Adresse</option>');
                $(".indexvaleurtri").show();
            }
            if(element_actif == "Enr\351gistrement V\351hucules")
            {
                $("#idexselectvaleurtri").append('<option>N&deg; Plaque</option><option>Chassis</option><option>Mod&egrave;le</option><option>Type Moteur</option><option>Client</option>');
                $(".indexvaleurtri").show();
            }
            if(element_actif == "Enr\351gistrement Techniciens")
            {
                $("#idexselectvaleurtri").append('<option>Technicien</option><option>Sp&eacute;cialit&eacute;</option><option>Statut</option>');
                $(".indexvaleurtri").show();
            }
            if(element_actif == "Programmation")
            {
                $("#idexselectvaleurtri").append('<option>N&deg; Plaque</option><option>Client</option>');
                $(".indexvaleurtri").show();
            }
            if(element_actif == "Quick Services" || element_actif == "High Services" || element_actif == "Devis" || element_actif == "Assurance")
            {
                $("#idexselectvaleurtri").append('<option>N&deg; R&eacute;ception</option><option>Type de R&eacute;ception</option><option>Mode de Payement</option><option>N&deg; Plaque</option><option>Client</option>');
                $(".indexvaleurtri").show();
            }
            if(element_actif == "Livraison")
            {
                $("#idexselectvaleurtri").append('<option>N&deg; R&eacute;ception</option><option>Type de R&eacute;ception</option><option>Mode de Payement</option><option>N&deg; Plaque</option><option>Client</option>');
                $(".indexvaleurtri").show();
            }
            if(element_actif == "Maintenance")
            {
                $("#idexselectvaleurtri").append('<option>Technicien</option><option>N&deg; Plaque</option><option>Client</option>');
                $(".indexvaleurtri").show();
            }
            if(element_actif == "Observation - Inspection")
            {
                $("#idexselectvaleurtri").append('<option>N&deg; R&eacute;ception</option><option>N&deg; Plaque</option><option>Client</option>');
                $(".indexvaleurtri").show();
            }
            if(element_actif == "Recommandation")
            {
                $("#idexselectvaleurtri").append('<option>N&deg; R&eacute;ception</option><option>Technicien</option><option>N&deg; Plaque</option><option>Client</option>');
                $(".indexvaleurtri").show();
            }
            if(element_actif == "Observation - R\351clamation")
            {
                $("#idexselectvaleurtri").append('<option>Client</option><option>N&deg; Plaque</option>');
                $(".indexvaleurtri").show();
            }
            if(element_actif == "Pointage Technicien")
            {
                $("#idexselectvaleurtri").append('<option>Technicien</option><option>Sp&eacute;cialit&eacute;</option><option>Statut</option>');
                $(".indexvaleurtri").show();
            }
            if(element_actif == "R\351paration activit\351s")
            {
                $("#idexselectvaleurtri").append('<option>N&deg; R&eacute;ception</option><option>N&deg; Plaque</option><option>Client</option>');
                $(".indexvaleurtri").show();
            }

        }

    });

    $("#printDateCouranteDate").on('change',function () {
        if($("#printDateCourante").is(':visible'))
        {
            var date_new = $("#date_prt_inf").val();
            var dateCouranteSelect = $("#printDateCouranteDateSelecte").text();
            var dateCouranteSelectLong = dateCouranteSelect.length;
            var ligne = 0;
            var date_new_id = date_new.replace(/ /g,"");

            for (var i = 0; i<dateCouranteSelectLong; i++)
            {
               var caracter = dateCouranteSelect.charAt(i);

               if(caracter == ';')
               {
                   ligne +=1;
               }
            }

            var exist_date = dateCouranteSelect.indexOf(date_new);

            if(exist_date == -1)
            {
                $("#printDateCouranteDateSelecte").append('<div id="p'+date_new_id+'p">'+date_new+'<b style="display: none;">;</b></div>');
                $("#dateCouranteEdite").append('<div class="form-check form-check-inline" id="p'+date_new_id+'" style="height: 4.5vh;width: 20.8vw;padding: 0.5em;"><div class="form-check-inline deleteDateCourante"  style="width: 7vw;height: 4.5vh;margin: 0px;"><span class="glyphicon glyphicon-remove" style="color: red"></span>&nbsp;Sepprimer</div><div class="form-check-inline new_date" id="p'+date_new_id+'d" style="width: 14.8vw;height: 4.5vh;margin: 0px;text-align: left;"><span style="width: 100%; text-align: right;">'+date_new+'</span></div><b style="display: none;">;</b></div>');
            }
            else
            {
                $(".messageh6").text('Cette date est d\351j\340 fix\351e');
                ConfirmationLose();
            }

            $('.deleteDateCourante').on('click', function () {
                var id = $(this).parent().attr('id');
                $(this).parent().remove();
                $("#printDateCouranteDateSelecte").children('#'+id+'p').remove();
                var dateCouranteSelect = $("#printDateCouranteDateSelecte").text();
                var dateCouranteSelectLong = dateCouranteSelect.length;

                if(dateCouranteSelectLong == 0)$("#dateCouranteEdite").hide();
            });
        }

        if($("#printDate2").is(':visible'))
        {
            var date_sup_val = $("#date_prt_sup").val();

            if(date_sup_val.length != 0)
            {
                var date_inf = Data_format_LongFr_to_shurt_tire_format_date_mois_jour($("#date_prt_inf").val());
                var date_sup = Data_format_LongFr_to_shurt_tire_format_date_mois_jour($("#date_prt_sup").val());

                date_inf = date_inf.split('-').join('');
                date_sup = date_sup.split('-').join('');

                if(date_inf == date_sup)
                {
                    $("#date_prt_inf").val('');
                    $(".messageh6").text('La date inf\351rieure est identique \340 la date sup\351rieure');
                    ConfirmationLose();
                }
                if(date_inf > date_sup)
                {
                    $("#date_prt_inf").val('');
                    $(".messageh6").text('La date inf\351rieure est sup\351rieur \340 la date sup\351rieure');
                    ConfirmationLose();
                }
            }
        }
    });

    $("#dateSup").on('change', function () {

        var date_inf_val = $("#date_prt_inf").val();

        if(date_inf_val.length != 0)
        {
            var date_inf = Data_format_LongFr_to_shurt_tire_format_date_mois_jour($("#date_prt_inf").val());
            var date_sup = Data_format_LongFr_to_shurt_tire_format_date_mois_jour($("#date_prt_sup").val());

            date_inf = date_inf.split('-').join('');
            date_sup = date_sup.split('-').join('');

            if(date_sup == date_inf)
            {
                $("#date_prt_sup").val('');
                $(".messageh6").text('La date inf\351rieure est identique \340 la date sup\351rieure');
                ConfirmationLose();
            }
            if(date_sup < date_inf)
            {
                $("#date_prt_sup").val('');
                $(".messageh6").text('La date inf\351rieure est sup\351rieur \340 la date sup\351rieure');
                ConfirmationLose();
            }
        }
    });

    $("#printDateCouranteDateSelecte").on('dblclick', function () {

        var dateOld = $("#printDateCouranteDateSelecte").text();

        if(dateOld.length != 0)
        {
            if($("#dateCouranteEdite").is(':visible'))
                $("#dateCouranteEdite").hide();
            else
                $("#dateCouranteEdite").show();
        }
    });

    $("#printFootBtnValider, #printFootBtnVue").on('click', function () {

        $("#indexprintveiwlisteclientdiv").text("");
        var thisid = $(this).attr('id');
        var valeur = $("#printSelectOrdreAffichage").val();
        var valeurdateinf = $("#date_prt_inf").val();
        var valeurdatesup = $("#date_prt_sup").val();
        var valeurdatecour= $("#printDateCouranteDateSelecte").text();
        valeurdateinf = valeurdateinf.split(' ').join('');
        valeurdatesup = valeurdatesup.split(' ').join('');
        var valeurautretri = $("#idexinputvaleurtri").val();
        var element_actif = $("#mySpan").text();

        if(valeur == 'Avant' || valeur == 'Apr\350s' || valeur == 'Extr\352me')
        {
            if(valeurdateinf.length == 0)
            {
                $(".messageh6").text('Veillez renseigner la date');
                ConfirmationLose();
            }
            else
            {
                if(valeur == 'Avant')
                {
                    if(element_actif == "Enr\351gistrement Clients")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeClientAvantDate();
                    }
                    if(element_actif == "Enr\351gistrement V\351hucules")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeVehiculeAvantDate();
                    }
                    if(element_actif == "Enr\351gistrement Techniciens")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeTechnicienAvantDate();
                    }
                    if(element_actif == "Programmation")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeProgrammationAvantDate();
                    }
                    if(element_actif == "Quick Services" || element_actif == "High Services" || element_actif == "Devis" || element_actif == "Assurance")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeReceptionAvantDate();
                    }
                    if(element_actif == "Livraison")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeLivraisonAvantDate();
                    }
                    if(element_actif == "Maintenance")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeMaintenanceAvantDate();
                    }
                    if(element_actif == "Observation - Inspection")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeInspectionAvantDate();
                    }
                    if(element_actif == "Recommandation")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeRecommandationAvantDate();
                    }
                    if(element_actif == "Observation - R\351clamation")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeReclamationAvantDate();
                    }
                    if(element_actif == "Pointage Technicien")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListePointageAvantDate();
                    }
                    if(element_actif == "R\351paration activit\351s")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeProgrammationActiviteAvantDate();
                    }
                }

                if(valeur == 'Apr\350s')
                {

                    if(element_actif == "Enr\351gistrement Clients")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeClientApresDate();
                    }
                    if(element_actif == "Enr\351gistrement V\351hucules")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeVehiculeApresDate();
                    }
                    if(element_actif == "Enr\351gistrement Techniciens")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeTechnicienApresDate();
                    }
                    if(element_actif == "Programmation")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeProgrammationApresDate();
                    }
                    if(element_actif == "Quick Services" || element_actif == "High Services" || element_actif == "Devis" || element_actif == "Assurance")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeReceptionApresDate();
                    }
                    if(element_actif == "Livraison")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeLivraisonApresDate();
                    }
                    if(element_actif == "Maintenance")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeMaintenanceApresDate();
                    }
                    if(element_actif == "Observation - Inspection")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeInspectionApresDate();
                    }
                    if(element_actif == "Recommandation")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeRecommandationApresDate();
                    }
                    if(element_actif == "Observation - R\351clamation")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeReclamationApresDate();
                    }
                    if(element_actif == "Pointage Technicien")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListePointageApresDate();
                    }
                    if(element_actif == "R\351paration activit\351s")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeProgrammationActiviteApresDate();
                    }
                }

                if(valeur == 'Extr\352me')
                {
                    if(element_actif == "Enr\351gistrement Clients")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeClientExtremeDate();
                    }
                    if(element_actif == "Enr\351gistrement V\351hucules")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeVehiculeExtremeDate();
                    }
                    if(element_actif == "Enr\351gistrement Techniciens")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeTechnicienExtremeDate();
                    }
                    if(element_actif == "Programmation")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeProgrammationExtremeDate();
                    }
                    if(element_actif == "Quick Services" || element_actif == "High Services" || element_actif == "Devis" || element_actif == "Assurance")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeReceptionExtremeDate();
                    }
                    if(element_actif == "Livraison")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeLivraisonExtremeDate();
                    }
                    if(element_actif == "Maintenance")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeMaintenanceExtremeDate();
                    }
                    if(element_actif == "Observation - Inspection")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeInspectionExtremeDate();
                    }
                    if(element_actif == "Recommandation")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeRecommandationExtremeDate();
                    }
                    if(element_actif == "Observation - R\351clamation")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeReclamationExtremeDate();
                    }
                    if(element_actif == "Pointage Technicien")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListePointageExtremeDate();
                    }
                    if(element_actif == "R\351paration activit\351s")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeProgrammationActiviteExtremeDate();
                    }
                }

            }
        }
        else if(valeur == 'Admise' || valeur == 'Exclut')
        {
            if(valeurdatecour.length == 0)
            {
                $(".messageh6").text('Veillez renseigner la date');
                ConfirmationLose();
            }
            else
            {
                if(valeur == 'Admise')
                {

                    if(element_actif == "Enr\351gistrement Clients")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeClientAdmisDate();
                    }
                    if(element_actif == "Enr\351gistrement V\351hucules")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeVehiculeAdmisDate();
                    }
                    if(element_actif == "Enr\351gistrement Techniciens")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeTechnicienAdmisDate();
                    }
                    if(element_actif == "Programmation")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeProgrammationAdmisDate();
                    }
                    if(element_actif == "Quick Services" || element_actif == "High Services" || element_actif == "Devis" || element_actif == "Assurance")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeReceptionAdmisDate();
                    }
                    if(element_actif == "Livraison")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeLivraisonAdmisDate();
                    }
                    if(element_actif == "Maintenance")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeMaintenanceAdmisDate();
                    }
                    if(element_actif == "Observation - Inspection")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeInspectionAdmisDate();
                    }
                    if(element_actif == "Recommandation")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeRecommandationAdmisDate();
                    }
                    if(element_actif == "Observation - R\351clamation")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeReclamationAdmisDate();
                    }
                    if(element_actif == "Pointage Technicien")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListePointageAdmisDate();
                    }
                    if(element_actif == "R\351paration activit\351s")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeProgrammationActiviteAdmisDate();
                    }

                }

                if(valeur == 'Exclut')
                {
                    if(element_actif == "Enr\351gistrement Clients")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeClientExclutDate();
                    }
                    if(element_actif == "Enr\351gistrement V\351hucules")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeVehiculeExclutDate();
                    }
                    if(element_actif == "Enr\351gistrement Techniciens")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeTechnicienExclutDate();
                    }
                    if(element_actif == "Programmation")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeProgrammationExclutDate();
                    }
                    if(element_actif == "Quick Services" || element_actif == "High Services" || element_actif == "Devis" || element_actif == "Assurance")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeReceptionExclutDate();
                    }
                    if(element_actif == "Livraison")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeLivraisonExclutDate();
                    }
                    if(element_actif == "Maintenance")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeMaintenanceExclutDate();
                    }
                    if(element_actif == "Observation - Inspection")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeInspectionExclutDate();
                    }
                    if(element_actif == "Recommandation")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeRecommandationExclutDate();
                    }
                    if(element_actif == "Observation - R\351clamation")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeReclamationExclutDate();
                    }
                    if(element_actif == "Pointage Technicien")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListePointageExclutDate();
                    }
                    if(element_actif == "R\351paration activit\351s")
                    {
                        if(thisid == 'printFootBtnValider')
                        {
                            $(".indexFootInfoLeft").hide();
                            $("#indexFootBtnPrint").show();
                            $("#indexprintveiwlisteclientdiv").show();
                        }
                        SeletionListeProgrammationActiviteExclutDate();
                    }
                }
            }
        }
        else if(valeur == 'Entre')
        {
            if(valeurdateinf.length == 0 || valeurdatesup.length == 0)
            {
                $(".messageh6").text('Veillez renseigner toutes les dates');
                ConfirmationLose();
            }
            else
            {
                if(element_actif == "Enr\351gistrement Clients")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeClientEntreDate();
                }
                if(element_actif == "Enr\351gistrement V\351hucules")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeVehiculeEntreDate();
                }
                if(element_actif == "Enr\351gistrement Techniciens")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeTechnicienEntreDate();
                }
                if(element_actif == "Programmation")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeProgrammationEntreDate();
                }
                if(element_actif == "Quick Services" || element_actif == "High Services" || element_actif == "Devis" || element_actif == "Assurance")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeReceptionEntreDate();
                }
                if(element_actif == "Livraison")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeLivraisonEntreDate();
                }
                if(element_actif == "Maintenance")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeMaintenanceEntreDate();
                }
                if(element_actif == "Observation - Inspection")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeInspectionEntreDate();
                }
                if(element_actif == "Recommandation")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeRecommandationEntreDate();
                }
                if(element_actif == "Observation - R\351clamation")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeReclamationEntreDate();
                }
                if(element_actif == "Pointage Technicien")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListePointageEntreDate();
                }
                if(element_actif == "R\351paration activit\351s")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeProgrammationActiviteEntreDate();
                }
            }
        }
        else if(valeur == 'Autre')
        {
            if(valeurautretri.length == 0)
            {
                $(".messageh6").text('Veillez renseigner la valeur du tri');
                ConfirmationLose();
            }
            else
            {
                if(element_actif == "Enr\351gistrement Clients")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeClientAutre();
                }
                if(element_actif == "Enr\351gistrement V\351hucules")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeVehiculeAutre();
                }
                if(element_actif == "Enr\351gistrement Techniciens")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeTechnicienAutre();
                }
                if(element_actif == "Programmation")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeProgrammationAutre();
                }
                if(element_actif == "Quick Services" || element_actif == "High Services" || element_actif == "Devis" || element_actif == "Assurance")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeReceptionAutre();
                }
                if(element_actif == "Livraison")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeLivraisonAutre();
                }
                if(element_actif == "Maintenance")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeMaintenanceAutre();
                }
                if(element_actif == "Observation - Inspection")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeInspectionAutre();
                }
                if(element_actif == "Recommandation")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeRecommandationAutre();
                }
                if(element_actif == "Observation - R\351clamation")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeReclamationAutre();
                }
                if(element_actif == "Pointage Technicien")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListePointageAutre();
                }
                if(element_actif == "R\351paration activit\351s")
                {
                    if(thisid == 'printFootBtnValider')
                    {
                        $(".indexFootInfoLeft").hide();
                        $("#indexFootBtnPrint").show();
                        $("#indexprintveiwlisteclientdiv").show();
                    }
                    SeletionListeProgrammationActiviteAutre();
                }
            }
        }
    });

});