function SeletionListeRecommandationAvantDate()
{
    var date = $("#date_prt_inf").val();
    date = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(date);

    $.post('controller/PrintSelecteListeRecommandation.php',{recommandationselectedateavant:date}, function (data) {

        data = $.parseJSON(data);

        var date = [];
        var pro = [];
        var recom = [];
        var recep = [];
        var vehicule = [];
        var tech = [];
        var client = [];
        var idate = 0;
        var ipro = 0;
        var irecom = 0;
        var irecep = 0;
        var iveh = 0;
        var itech = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionRecommandationDate").val();
        var activevalpro = $("#printTableListePositionRecommandationPro").val();
        var activevalrecom = $("#printTableListePositionRecommandationRecom").val();
        var activevalrecep = $("#printTableListePositionRecommandationRecep").val();
        var activevalvehicule = $("#printTableListePositionRecommandationVehicule").val();
        var activevaltech = $("#printTableListePositionRecommandationTech").val();
        var activevalclient = $("#printTableListePositionRecommandationClient").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'probleme'){pro[ipro]=val;ipro++;}
                if(ind == 'recommandation'){recom[irecom]=val;irecom++;}
                if(ind == 'reception'){recep[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
                if(ind == 'technicien'){tech[itech]=val;itech++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}

            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalpro.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecom.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecep.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalvehicule.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltech.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalpro.length != 0 && activevalpro > nbrcoloneactive) || (activevalrecom.length != 0 && activevalrecom > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevaltech.length != 0 && activevaltech > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
            {
                $(".messageh6").text('Le choix des position doit \352tre de nombre successif.');
                ConfirmationLose();
            }
            else
            {
                if(activevaldate.length != 0)
                {
                    listecoloneactive[parseInt(activevaldate)-1] = 'Date';
                    listecoloneactiveSend[parseInt(activevaldate)-1] = 'date';
                }
                if(activevalpro.length != 0)
                {
                    listecoloneactive[parseInt(activevalpro)-1] = 'Probl\350me';
                    listecoloneactiveSend[parseInt(activevalpro)-1] = 'probleme';
                }
                if(activevalrecom.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecom)-1] = 'Recommandation';
                    listecoloneactiveSend[parseInt(activevalrecom)-1] = 'recommandation';
                }
                if(activevalrecep.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecep)-1] = 'R\351ception';
                    listecoloneactiveSend[parseInt(activevalrecep)-1] = 'reception';
                }
                if(activevalvehicule.length != 0)
                {
                    listecoloneactive[parseInt(activevalvehicule)-1] = 'V\351hicule';
                    listecoloneactiveSend[parseInt(activevalvehicule)-1] = 'vehicule';
                }
                if(activevaltech.length != 0)
                {
                    listecoloneactive[parseInt(activevaltech)-1] = 'Technicien';
                    listecoloneactiveSend[parseInt(activevaltech)-1] = 'technicien';
                }
                if(activevalclient.length != 0)
                {
                    listecoloneactive[parseInt(activevalclient)-1] = 'Client';
                    listecoloneactiveSend[parseInt(activevalclient)-1] = 'client';
                }
            }
        }
        else
        {
            $(".messageh6").text('Veillez selectionner la position des colones \341 affichier.');
            ConfirmationLose();
        }

        if(listecoloneactive.length != 0)
        {
            $('.printView').empty();
            $('#indexprintveiwlisteclientdiv').empty();

            $('.printView').append("<table style='border-collapse: collapse'>" +
                "<thead style='background-color: white; color: black;'>" +
                "<tr id='printveiwlisteclienttableheadtr'></tr>"+
                "</thead>" +
                "<tbody id='printveiwlisteclienttablebody'></tbody>"+
                "</table>");

            $('#indexprintveiwlisteclientdiv').append("<table style='border-collapse: collapse'>" +
                "<thead style='background-color: white; color: black;'>" +
                "<tr id='indexprintveiwlisteclienttableheadtr'></tr>"+
                "</thead>" +
                "<tbody id='indexprintveiwlisteclienttablebody'></tbody>"+
                "</table>");

            for (var i = 0; i < listecoloneactive.length; i++)
            {
                var entete = listecoloneactive[i];
                var largeur = 0;
                var largeur_impr = 0;

                if(entete == 'Date')largeur = 8;
                if(entete == 'Probl\350me')largeur = 8;
                if(entete == 'Recommandation')largeur = 10;
                if(entete == 'R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;
                if(entete == 'Technicien')largeur = 8;
                if(entete == 'Client')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'Probl\350me')largeur_impr = 5;
                if(entete == 'Recommandation')largeur_impr = 8;
                if(entete == 'R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;
                if(entete == 'Technicien')largeur_impr = 5;
                if(entete == 'Client')largeur_impr = 5;

                $('#printveiwlisteclienttableheadtr').append('<th style="min-width: '+largeur+'vw;text-align: center;border: 1px solid black;">'+entete+'</th>');
                $('#indexprintveiwlisteclienttableheadtr').append('<th style="min-width: '+largeur_impr+'vw;text-align: center;border: 1px solid black;font-size: .8em;">'+entete+'</th>');
            }

            for (var i = 0; i < data.length; i++)
            {
                $('#printveiwlisteclienttablebody').append('<tr class="printveiwlisteclienttablebodytr"></tr>');
                $('#indexprintveiwlisteclienttablebody').append('<tr class="indexprintveiwlisteclienttablebodytr"></tr>');

                for (var j = 0; j < listecoloneactiveSend.length; j++)
                {
                    if(listecoloneactiveSend[j] == 'date')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+date[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+date[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'probleme')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+pro[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+pro[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'recommandation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+recom[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+recom[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'reception')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+recep[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+recep[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'vehicule')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+vehicule[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+vehicule[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'technicien')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tech[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tech[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'client')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+client[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+client[i]+'</td>');
                    }

                }
            }
        }
    });
}

function SeletionListeRecommandationApresDate()
{
    var date = $("#date_prt_inf").val();
    date = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(date);

    $.post('controller/PrintSelecteListeRecommandation.php',{recommandationselectedateapres:date}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var pro = [];
        var recom = [];
        var recep = [];
        var vehicule = [];
        var tech = [];
        var client = [];
        var idate = 0;
        var ipro = 0;
        var irecom = 0;
        var irecep = 0;
        var iveh = 0;
        var itech = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionRecommandationDate").val();
        var activevalpro = $("#printTableListePositionRecommandationPro").val();
        var activevalrecom = $("#printTableListePositionRecommandationRecom").val();
        var activevalrecep = $("#printTableListePositionRecommandationRecep").val();
        var activevalvehicule = $("#printTableListePositionRecommandationVehicule").val();
        var activevaltech = $("#printTableListePositionRecommandationTech").val();
        var activevalclient = $("#printTableListePositionRecommandationClient").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'probleme'){pro[ipro]=val;ipro++;}
                if(ind == 'recommandation'){recom[irecom]=val;irecom++;}
                if(ind == 'reception'){recep[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
                if(ind == 'technicien'){tech[itech]=val;itech++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}

            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalpro.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecom.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecep.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalvehicule.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltech.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalpro.length != 0 && activevalpro > nbrcoloneactive) || (activevalrecom.length != 0 && activevalrecom > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevaltech.length != 0 && activevaltech > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
            {
                $(".messageh6").text('Le choix des position doit \352tre de nombre successif.');
                ConfirmationLose();
            }
            else
            {
                if(activevaldate.length != 0)
                {
                    listecoloneactive[parseInt(activevaldate)-1] = 'Date';
                    listecoloneactiveSend[parseInt(activevaldate)-1] = 'date';
                }
                if(activevalpro.length != 0)
                {
                    listecoloneactive[parseInt(activevalpro)-1] = 'Probl\350me';
                    listecoloneactiveSend[parseInt(activevalpro)-1] = 'probleme';
                }
                if(activevalrecom.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecom)-1] = 'Recommandation';
                    listecoloneactiveSend[parseInt(activevalrecom)-1] = 'recommandation';
                }
                if(activevalrecep.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecep)-1] = 'R\351ception';
                    listecoloneactiveSend[parseInt(activevalrecep)-1] = 'reception';
                }
                if(activevalvehicule.length != 0)
                {
                    listecoloneactive[parseInt(activevalvehicule)-1] = 'V\351hicule';
                    listecoloneactiveSend[parseInt(activevalvehicule)-1] = 'vehicule';
                }
                if(activevaltech.length != 0)
                {
                    listecoloneactive[parseInt(activevaltech)-1] = 'Technicien';
                    listecoloneactiveSend[parseInt(activevaltech)-1] = 'technicien';
                }
                if(activevalclient.length != 0)
                {
                    listecoloneactive[parseInt(activevalclient)-1] = 'Client';
                    listecoloneactiveSend[parseInt(activevalclient)-1] = 'client';
                }
            }
        }
        else
        {
            $(".messageh6").text('Veillez selectionner la position des colones \341 affichier.');
            ConfirmationLose();
        }

        if(listecoloneactive.length != 0)
        {
            $('.printView').empty();
            $('#indexprintveiwlisteclientdiv').empty();

            $('.printView').append("<table style='border-collapse: collapse'>" +
                "<thead style='background-color: white; color: black;'>" +
                "<tr id='printveiwlisteclienttableheadtr'></tr>"+
                "</thead>" +
                "<tbody id='printveiwlisteclienttablebody'></tbody>"+
                "</table>");

            $('#indexprintveiwlisteclientdiv').append("<table style='border-collapse: collapse'>" +
                "<thead style='background-color: white; color: black;'>" +
                "<tr id='indexprintveiwlisteclienttableheadtr'></tr>"+
                "</thead>" +
                "<tbody id='indexprintveiwlisteclienttablebody'></tbody>"+
                "</table>");

            for (var i = 0; i < listecoloneactive.length; i++)
            {
                var entete = listecoloneactive[i];
                var largeur = 0;
                var largeur_impr = 0;

                if(entete == 'Date')largeur = 8;
                if(entete == 'Probl\350me')largeur = 8;
                if(entete == 'Recommandation')largeur = 10;
                if(entete == 'R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;
                if(entete == 'Technicien')largeur = 8;
                if(entete == 'Client')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'Probl\350me')largeur_impr = 5;
                if(entete == 'Recommandation')largeur_impr = 8;
                if(entete == 'R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;
                if(entete == 'Technicien')largeur_impr = 5;
                if(entete == 'Client')largeur_impr = 5;

                $('#printveiwlisteclienttableheadtr').append('<th style="min-width: '+largeur+'vw;text-align: center;border: 1px solid black;">'+entete+'</th>');
                $('#indexprintveiwlisteclienttableheadtr').append('<th style="min-width: '+largeur_impr+'vw;text-align: center;border: 1px solid black;font-size: .8em;">'+entete+'</th>');
            }

            for (var i = 0; i < data.length; i++)
            {
                $('#printveiwlisteclienttablebody').append('<tr class="printveiwlisteclienttablebodytr"></tr>');
                $('#indexprintveiwlisteclienttablebody').append('<tr class="indexprintveiwlisteclienttablebodytr"></tr>');

                for (var j = 0; j < listecoloneactiveSend.length; j++)
                {
                    if(listecoloneactiveSend[j] == 'date')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+date[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+date[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'probleme')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+pro[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+pro[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'recommandation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+recom[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+recom[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'reception')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+recep[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+recep[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'vehicule')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+vehicule[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+vehicule[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'technicien')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tech[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tech[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'client')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+client[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+client[i]+'</td>');
                    }

                }
            }
        }
    });
}

function SeletionListeRecommandationExtremeDate()
{
    var date = $("#date_prt_inf").val();
    date = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(date);

    $.post('controller/PrintSelecteListeRecommandation.php',{recommandationselectedateextreme:date}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var pro = [];
        var recom = [];
        var recep = [];
        var vehicule = [];
        var tech = [];
        var client = [];
        var idate = 0;
        var ipro = 0;
        var irecom = 0;
        var irecep = 0;
        var iveh = 0;
        var itech = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionRecommandationDate").val();
        var activevalpro = $("#printTableListePositionRecommandationPro").val();
        var activevalrecom = $("#printTableListePositionRecommandationRecom").val();
        var activevalrecep = $("#printTableListePositionRecommandationRecep").val();
        var activevalvehicule = $("#printTableListePositionRecommandationVehicule").val();
        var activevaltech = $("#printTableListePositionRecommandationTech").val();
        var activevalclient = $("#printTableListePositionRecommandationClient").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'probleme'){pro[ipro]=val;ipro++;}
                if(ind == 'recommandation'){recom[irecom]=val;irecom++;}
                if(ind == 'reception'){recep[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
                if(ind == 'technicien'){tech[itech]=val;itech++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}

            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalpro.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecom.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecep.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalvehicule.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltech.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalpro.length != 0 && activevalpro > nbrcoloneactive) || (activevalrecom.length != 0 && activevalrecom > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevaltech.length != 0 && activevaltech > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
            {
                $(".messageh6").text('Le choix des position doit \352tre de nombre successif.');
                ConfirmationLose();
            }
            else
            {
                if(activevaldate.length != 0)
                {
                    listecoloneactive[parseInt(activevaldate)-1] = 'Date';
                    listecoloneactiveSend[parseInt(activevaldate)-1] = 'date';
                }
                if(activevalpro.length != 0)
                {
                    listecoloneactive[parseInt(activevalpro)-1] = 'Probl\350me';
                    listecoloneactiveSend[parseInt(activevalpro)-1] = 'probleme';
                }
                if(activevalrecom.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecom)-1] = 'Recommandation';
                    listecoloneactiveSend[parseInt(activevalrecom)-1] = 'recommandation';
                }
                if(activevalrecep.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecep)-1] = 'R\351ception';
                    listecoloneactiveSend[parseInt(activevalrecep)-1] = 'reception';
                }
                if(activevalvehicule.length != 0)
                {
                    listecoloneactive[parseInt(activevalvehicule)-1] = 'V\351hicule';
                    listecoloneactiveSend[parseInt(activevalvehicule)-1] = 'vehicule';
                }
                if(activevaltech.length != 0)
                {
                    listecoloneactive[parseInt(activevaltech)-1] = 'Technicien';
                    listecoloneactiveSend[parseInt(activevaltech)-1] = 'technicien';
                }
                if(activevalclient.length != 0)
                {
                    listecoloneactive[parseInt(activevalclient)-1] = 'Client';
                    listecoloneactiveSend[parseInt(activevalclient)-1] = 'client';
                }
            }
        }
        else
        {
            $(".messageh6").text('Veillez selectionner la position des colones \341 affichier.');
            ConfirmationLose();
        }

        if(listecoloneactive.length != 0)
        {
            $('.printView').empty();
            $('#indexprintveiwlisteclientdiv').empty();

            $('.printView').append("<table style='border-collapse: collapse'>" +
                "<thead style='background-color: white; color: black;'>" +
                "<tr id='printveiwlisteclienttableheadtr'></tr>"+
                "</thead>" +
                "<tbody id='printveiwlisteclienttablebody'></tbody>"+
                "</table>");

            $('#indexprintveiwlisteclientdiv').append("<table style='border-collapse: collapse'>" +
                "<thead style='background-color: white; color: black;'>" +
                "<tr id='indexprintveiwlisteclienttableheadtr'></tr>"+
                "</thead>" +
                "<tbody id='indexprintveiwlisteclienttablebody'></tbody>"+
                "</table>");

            for (var i = 0; i < listecoloneactive.length; i++)
            {
                var entete = listecoloneactive[i];
                var largeur = 0;
                var largeur_impr = 0;

                if(entete == 'Date')largeur = 8;
                if(entete == 'Probl\350me')largeur = 8;
                if(entete == 'Recommandation')largeur = 10;
                if(entete == 'R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;
                if(entete == 'Technicien')largeur = 8;
                if(entete == 'Client')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'Probl\350me')largeur_impr = 5;
                if(entete == 'Recommandation')largeur_impr = 8;
                if(entete == 'R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;
                if(entete == 'Technicien')largeur_impr = 5;
                if(entete == 'Client')largeur_impr = 5;

                $('#printveiwlisteclienttableheadtr').append('<th style="min-width: '+largeur+'vw;text-align: center;border: 1px solid black;">'+entete+'</th>');
                $('#indexprintveiwlisteclienttableheadtr').append('<th style="min-width: '+largeur_impr+'vw;text-align: center;border: 1px solid black;font-size: .8em;">'+entete+'</th>');
            }

            for (var i = 0; i < data.length; i++)
            {
                $('#printveiwlisteclienttablebody').append('<tr class="printveiwlisteclienttablebodytr"></tr>');
                $('#indexprintveiwlisteclienttablebody').append('<tr class="indexprintveiwlisteclienttablebodytr"></tr>');

                for (var j = 0; j < listecoloneactiveSend.length; j++)
                {
                    if(listecoloneactiveSend[j] == 'date')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+date[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+date[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'probleme')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+pro[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+pro[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'recommandation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+recom[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+recom[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'reception')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+recep[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+recep[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'vehicule')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+vehicule[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+vehicule[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'technicien')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tech[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tech[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'client')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+client[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+client[i]+'</td>');
                    }

                }
            }
        }
    });
}

function SeletionListeRecommandationAdmisDate()
{
    var datecourante = $('#printDateCouranteDateSelecte').text();

    var datecouranteLong = datecourante.length;
    var tableLong = 0;
    var caractere = '';
    var liste = [];

    for (var i = 0; i < datecouranteLong; i++)
    {
        caractere = datecourante.charAt(i);
        if(caractere == ';')
        {
            tableLong++;
            if(tableLong == 1)
            {
                var datepresente = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(datecourante.substring(0,i));
                liste[tableLong-1] = datepresente;
            }

            if(tableLong > 1)
            {
                var j = i-1;

                for (j; j > 0; j--)
                {
                    caractere = datecourante.charAt(j);

                    if(caractere == ';')
                    {
                        var datepresente = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(datecourante.substring(j+1,i));
                        liste[tableLong-1] = datepresente;
                        j = 0;
                    }
                }
            }
        }
    }

    $.post('controller/PrintSelecteListeRecommandation.php',{recommandationselectedateadmise:liste}, function (data) {

        data = $.parseJSON(data);

        var date = [];
        var pro = [];
        var recom = [];
        var recep = [];
        var vehicule = [];
        var tech = [];
        var client = [];
        var idate = 0;
        var ipro = 0;
        var irecom = 0;
        var irecep = 0;
        var iveh = 0;
        var itech = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionRecommandationDate").val();
        var activevalpro = $("#printTableListePositionRecommandationPro").val();
        var activevalrecom = $("#printTableListePositionRecommandationRecom").val();
        var activevalrecep = $("#printTableListePositionRecommandationRecep").val();
        var activevalvehicule = $("#printTableListePositionRecommandationVehicule").val();
        var activevaltech = $("#printTableListePositionRecommandationTech").val();
        var activevalclient = $("#printTableListePositionRecommandationClient").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'probleme'){pro[ipro]=val;ipro++;}
                if(ind == 'recommandation'){recom[irecom]=val;irecom++;}
                if(ind == 'reception'){recep[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
                if(ind == 'technicien'){tech[itech]=val;itech++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}

            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalpro.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecom.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecep.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalvehicule.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltech.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalpro.length != 0 && activevalpro > nbrcoloneactive) || (activevalrecom.length != 0 && activevalrecom > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevaltech.length != 0 && activevaltech > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
            {
                $(".messageh6").text('Le choix des position doit \352tre de nombre successif.');
                ConfirmationLose();
            }
            else
            {
                if(activevaldate.length != 0)
                {
                    listecoloneactive[parseInt(activevaldate)-1] = 'Date';
                    listecoloneactiveSend[parseInt(activevaldate)-1] = 'date';
                }
                if(activevalpro.length != 0)
                {
                    listecoloneactive[parseInt(activevalpro)-1] = 'Probl\350me';
                    listecoloneactiveSend[parseInt(activevalpro)-1] = 'probleme';
                }
                if(activevalrecom.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecom)-1] = 'Recommandation';
                    listecoloneactiveSend[parseInt(activevalrecom)-1] = 'recommandation';
                }
                if(activevalrecep.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecep)-1] = 'R\351ception';
                    listecoloneactiveSend[parseInt(activevalrecep)-1] = 'reception';
                }
                if(activevalvehicule.length != 0)
                {
                    listecoloneactive[parseInt(activevalvehicule)-1] = 'V\351hicule';
                    listecoloneactiveSend[parseInt(activevalvehicule)-1] = 'vehicule';
                }
                if(activevaltech.length != 0)
                {
                    listecoloneactive[parseInt(activevaltech)-1] = 'Technicien';
                    listecoloneactiveSend[parseInt(activevaltech)-1] = 'technicien';
                }
                if(activevalclient.length != 0)
                {
                    listecoloneactive[parseInt(activevalclient)-1] = 'Client';
                    listecoloneactiveSend[parseInt(activevalclient)-1] = 'client';
                }
            }
        }
        else
        {
            $(".messageh6").text('Veillez selectionner la position des colones \341 affichier.');
            ConfirmationLose();
        }

        if(listecoloneactive.length != 0)
        {
            $('.printView').empty();
            $('#indexprintveiwlisteclientdiv').empty();

            $('.printView').append("<table style='border-collapse: collapse'>" +
                "<thead style='background-color: white; color: black;'>" +
                "<tr id='printveiwlisteclienttableheadtr'></tr>"+
                "</thead>" +
                "<tbody id='printveiwlisteclienttablebody'></tbody>"+
                "</table>");

            $('#indexprintveiwlisteclientdiv').append("<table style='border-collapse: collapse'>" +
                "<thead style='background-color: white; color: black;'>" +
                "<tr id='indexprintveiwlisteclienttableheadtr'></tr>"+
                "</thead>" +
                "<tbody id='indexprintveiwlisteclienttablebody'></tbody>"+
                "</table>");

            for (var i = 0; i < listecoloneactive.length; i++)
            {
                var entete = listecoloneactive[i];
                var largeur = 0;
                var largeur_impr = 0;

                if(entete == 'Date')largeur = 8;
                if(entete == 'Probl\350me')largeur = 8;
                if(entete == 'Recommandation')largeur = 10;
                if(entete == 'R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;
                if(entete == 'Technicien')largeur = 8;
                if(entete == 'Client')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'Probl\350me')largeur_impr = 5;
                if(entete == 'Recommandation')largeur_impr = 8;
                if(entete == 'R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;
                if(entete == 'Technicien')largeur_impr = 5;
                if(entete == 'Client')largeur_impr = 5;

                $('#printveiwlisteclienttableheadtr').append('<th style="min-width: '+largeur+'vw;text-align: center;border: 1px solid black;">'+entete+'</th>');
                $('#indexprintveiwlisteclienttableheadtr').append('<th style="min-width: '+largeur_impr+'vw;text-align: center;border: 1px solid black;font-size: .8em;">'+entete+'</th>');
            }

            for (var i = 0; i < data.length; i++)
            {
                $('#printveiwlisteclienttablebody').append('<tr class="printveiwlisteclienttablebodytr"></tr>');
                $('#indexprintveiwlisteclienttablebody').append('<tr class="indexprintveiwlisteclienttablebodytr"></tr>');

                for (var j = 0; j < listecoloneactiveSend.length; j++)
                {
                    if(listecoloneactiveSend[j] == 'date')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+date[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+date[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'probleme')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+pro[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+pro[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'recommandation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+recom[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+recom[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'reception')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+recep[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+recep[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'vehicule')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+vehicule[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+vehicule[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'technicien')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tech[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tech[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'client')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+client[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+client[i]+'</td>');
                    }

                }
            }
        }

    });
}

function SeletionListeRecommandationExclutDate()
{
    var datecourante = $('#printDateCouranteDateSelecte').text();

    var datecouranteLong = datecourante.length;
    var tableLong = 0;
    var caractere = '';
    var liste = [];

    for (var i = 0; i < datecouranteLong; i++)
    {
        caractere = datecourante.charAt(i);
        if(caractere == ';')
        {
            tableLong++;
            if(tableLong == 1)
            {
                var datepresente = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(datecourante.substring(0,i));
                liste[tableLong-1] = datepresente;
            }

            if(tableLong > 1)
            {
                var j = i-1;

                for (j; j > 0; j--)
                {
                    caractere = datecourante.charAt(j);

                    if(caractere == ';')
                    {
                        var datepresente = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(datecourante.substring(j+1,i));
                        liste[tableLong-1] = datepresente;
                        j = 0;
                    }
                }
            }
        }
    }

    $.post('controller/PrintSelecteListeRecommandation.php',{recommandationselectedateexclut:liste}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var pro = [];
        var recom = [];
        var recep = [];
        var vehicule = [];
        var tech = [];
        var client = [];
        var idate = 0;
        var ipro = 0;
        var irecom = 0;
        var irecep = 0;
        var iveh = 0;
        var itech = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionRecommandationDate").val();
        var activevalpro = $("#printTableListePositionRecommandationPro").val();
        var activevalrecom = $("#printTableListePositionRecommandationRecom").val();
        var activevalrecep = $("#printTableListePositionRecommandationRecep").val();
        var activevalvehicule = $("#printTableListePositionRecommandationVehicule").val();
        var activevaltech = $("#printTableListePositionRecommandationTech").val();
        var activevalclient = $("#printTableListePositionRecommandationClient").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'probleme'){pro[ipro]=val;ipro++;}
                if(ind == 'recommandation'){recom[irecom]=val;irecom++;}
                if(ind == 'reception'){recep[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
                if(ind == 'technicien'){tech[itech]=val;itech++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}

            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalpro.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecom.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecep.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalvehicule.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltech.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalpro.length != 0 && activevalpro > nbrcoloneactive) || (activevalrecom.length != 0 && activevalrecom > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevaltech.length != 0 && activevaltech > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
            {
                $(".messageh6").text('Le choix des position doit \352tre de nombre successif.');
                ConfirmationLose();
            }
            else
            {
                if(activevaldate.length != 0)
                {
                    listecoloneactive[parseInt(activevaldate)-1] = 'Date';
                    listecoloneactiveSend[parseInt(activevaldate)-1] = 'date';
                }
                if(activevalpro.length != 0)
                {
                    listecoloneactive[parseInt(activevalpro)-1] = 'Probl\350me';
                    listecoloneactiveSend[parseInt(activevalpro)-1] = 'probleme';
                }
                if(activevalrecom.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecom)-1] = 'Recommandation';
                    listecoloneactiveSend[parseInt(activevalrecom)-1] = 'recommandation';
                }
                if(activevalrecep.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecep)-1] = 'R\351ception';
                    listecoloneactiveSend[parseInt(activevalrecep)-1] = 'reception';
                }
                if(activevalvehicule.length != 0)
                {
                    listecoloneactive[parseInt(activevalvehicule)-1] = 'V\351hicule';
                    listecoloneactiveSend[parseInt(activevalvehicule)-1] = 'vehicule';
                }
                if(activevaltech.length != 0)
                {
                    listecoloneactive[parseInt(activevaltech)-1] = 'Technicien';
                    listecoloneactiveSend[parseInt(activevaltech)-1] = 'technicien';
                }
                if(activevalclient.length != 0)
                {
                    listecoloneactive[parseInt(activevalclient)-1] = 'Client';
                    listecoloneactiveSend[parseInt(activevalclient)-1] = 'client';
                }
            }
        }
        else
        {
            $(".messageh6").text('Veillez selectionner la position des colones \341 affichier.');
            ConfirmationLose();
        }

        if(listecoloneactive.length != 0)
        {
            $('.printView').empty();
            $('#indexprintveiwlisteclientdiv').empty();

            $('.printView').append("<table style='border-collapse: collapse'>" +
                "<thead style='background-color: white; color: black;'>" +
                "<tr id='printveiwlisteclienttableheadtr'></tr>"+
                "</thead>" +
                "<tbody id='printveiwlisteclienttablebody'></tbody>"+
                "</table>");

            $('#indexprintveiwlisteclientdiv').append("<table style='border-collapse: collapse'>" +
                "<thead style='background-color: white; color: black;'>" +
                "<tr id='indexprintveiwlisteclienttableheadtr'></tr>"+
                "</thead>" +
                "<tbody id='indexprintveiwlisteclienttablebody'></tbody>"+
                "</table>");

            for (var i = 0; i < listecoloneactive.length; i++)
            {
                var entete = listecoloneactive[i];
                var largeur = 0;
                var largeur_impr = 0;

                if(entete == 'Date')largeur = 8;
                if(entete == 'Probl\350me')largeur = 8;
                if(entete == 'Recommandation')largeur = 10;
                if(entete == 'R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;
                if(entete == 'Technicien')largeur = 8;
                if(entete == 'Client')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'Probl\350me')largeur_impr = 5;
                if(entete == 'Recommandation')largeur_impr = 8;
                if(entete == 'R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;
                if(entete == 'Technicien')largeur_impr = 5;
                if(entete == 'Client')largeur_impr = 5;

                $('#printveiwlisteclienttableheadtr').append('<th style="min-width: '+largeur+'vw;text-align: center;border: 1px solid black;">'+entete+'</th>');
                $('#indexprintveiwlisteclienttableheadtr').append('<th style="min-width: '+largeur_impr+'vw;text-align: center;border: 1px solid black;font-size: .8em;">'+entete+'</th>');
            }

            for (var i = 0; i < data.length; i++)
            {
                $('#printveiwlisteclienttablebody').append('<tr class="printveiwlisteclienttablebodytr"></tr>');
                $('#indexprintveiwlisteclienttablebody').append('<tr class="indexprintveiwlisteclienttablebodytr"></tr>');

                for (var j = 0; j < listecoloneactiveSend.length; j++)
                {
                    if(listecoloneactiveSend[j] == 'date')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+date[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+date[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'probleme')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+pro[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+pro[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'recommandation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+recom[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+recom[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'reception')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+recep[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+recep[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'vehicule')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+vehicule[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+vehicule[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'technicien')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tech[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tech[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'client')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+client[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+client[i]+'</td>');
                    }

                }
            }
        }
    });
}

function SeletionListeRecommandationEntreDate()
{
    var dateinf = $("#date_prt_inf").val();
    var datesup = $("#date_prt_sup").val();
    dateinf = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(dateinf);
    datesup = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(datesup);

    $.post('controller/PrintSelecteListeRecommandation.php',{recommandationselectedateinf:dateinf,recommandationselectedatesup:datesup}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var pro = [];
        var recom = [];
        var recep = [];
        var vehicule = [];
        var tech = [];
        var client = [];
        var idate = 0;
        var ipro = 0;
        var irecom = 0;
        var irecep = 0;
        var iveh = 0;
        var itech = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionRecommandationDate").val();
        var activevalpro = $("#printTableListePositionRecommandationPro").val();
        var activevalrecom = $("#printTableListePositionRecommandationRecom").val();
        var activevalrecep = $("#printTableListePositionRecommandationRecep").val();
        var activevalvehicule = $("#printTableListePositionRecommandationVehicule").val();
        var activevaltech = $("#printTableListePositionRecommandationTech").val();
        var activevalclient = $("#printTableListePositionRecommandationClient").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'probleme'){pro[ipro]=val;ipro++;}
                if(ind == 'recommandation'){recom[irecom]=val;irecom++;}
                if(ind == 'reception'){recep[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
                if(ind == 'technicien'){tech[itech]=val;itech++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}

            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalpro.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecom.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecep.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalvehicule.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltech.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalpro.length != 0 && activevalpro > nbrcoloneactive) || (activevalrecom.length != 0 && activevalrecom > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevaltech.length != 0 && activevaltech > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
            {
                $(".messageh6").text('Le choix des position doit \352tre de nombre successif.');
                ConfirmationLose();
            }
            else
            {
                if(activevaldate.length != 0)
                {
                    listecoloneactive[parseInt(activevaldate)-1] = 'Date';
                    listecoloneactiveSend[parseInt(activevaldate)-1] = 'date';
                }
                if(activevalpro.length != 0)
                {
                    listecoloneactive[parseInt(activevalpro)-1] = 'Probl\350me';
                    listecoloneactiveSend[parseInt(activevalpro)-1] = 'probleme';
                }
                if(activevalrecom.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecom)-1] = 'Recommandation';
                    listecoloneactiveSend[parseInt(activevalrecom)-1] = 'recommandation';
                }
                if(activevalrecep.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecep)-1] = 'R\351ception';
                    listecoloneactiveSend[parseInt(activevalrecep)-1] = 'reception';
                }
                if(activevalvehicule.length != 0)
                {
                    listecoloneactive[parseInt(activevalvehicule)-1] = 'V\351hicule';
                    listecoloneactiveSend[parseInt(activevalvehicule)-1] = 'vehicule';
                }
                if(activevaltech.length != 0)
                {
                    listecoloneactive[parseInt(activevaltech)-1] = 'Technicien';
                    listecoloneactiveSend[parseInt(activevaltech)-1] = 'technicien';
                }
                if(activevalclient.length != 0)
                {
                    listecoloneactive[parseInt(activevalclient)-1] = 'Client';
                    listecoloneactiveSend[parseInt(activevalclient)-1] = 'client';
                }
            }
        }
        else
        {
            $(".messageh6").text('Veillez selectionner la position des colones \341 affichier.');
            ConfirmationLose();
        }

        if(listecoloneactive.length != 0)
        {
            $('.printView').empty();
            $('#indexprintveiwlisteclientdiv').empty();

            $('.printView').append("<table style='border-collapse: collapse'>" +
                "<thead style='background-color: white; color: black;'>" +
                "<tr id='printveiwlisteclienttableheadtr'></tr>"+
                "</thead>" +
                "<tbody id='printveiwlisteclienttablebody'></tbody>"+
                "</table>");

            $('#indexprintveiwlisteclientdiv').append("<table style='border-collapse: collapse'>" +
                "<thead style='background-color: white; color: black;'>" +
                "<tr id='indexprintveiwlisteclienttableheadtr'></tr>"+
                "</thead>" +
                "<tbody id='indexprintveiwlisteclienttablebody'></tbody>"+
                "</table>");

            for (var i = 0; i < listecoloneactive.length; i++)
            {
                var entete = listecoloneactive[i];
                var largeur = 0;
                var largeur_impr = 0;

                if(entete == 'Date')largeur = 8;
                if(entete == 'Probl\350me')largeur = 8;
                if(entete == 'Recommandation')largeur = 10;
                if(entete == 'R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;
                if(entete == 'Technicien')largeur = 8;
                if(entete == 'Client')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'Probl\350me')largeur_impr = 5;
                if(entete == 'Recommandation')largeur_impr = 8;
                if(entete == 'R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;
                if(entete == 'Technicien')largeur_impr = 5;
                if(entete == 'Client')largeur_impr = 5;

                $('#printveiwlisteclienttableheadtr').append('<th style="min-width: '+largeur+'vw;text-align: center;border: 1px solid black;">'+entete+'</th>');
                $('#indexprintveiwlisteclienttableheadtr').append('<th style="min-width: '+largeur_impr+'vw;text-align: center;border: 1px solid black;font-size: .8em;">'+entete+'</th>');
            }

            for (var i = 0; i < data.length; i++)
            {
                $('#printveiwlisteclienttablebody').append('<tr class="printveiwlisteclienttablebodytr"></tr>');
                $('#indexprintveiwlisteclienttablebody').append('<tr class="indexprintveiwlisteclienttablebodytr"></tr>');

                for (var j = 0; j < listecoloneactiveSend.length; j++)
                {
                    if(listecoloneactiveSend[j] == 'date')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+date[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+date[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'probleme')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+pro[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+pro[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'recommandation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+recom[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+recom[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'reception')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+recep[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+recep[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'vehicule')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+vehicule[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+vehicule[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'technicien')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tech[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tech[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'client')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+client[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+client[i]+'</td>');
                    }

                }
            }
        }
    });
}

function SeletionListeRecommandationAutre()
{
    var option = $("#idexselectvaleurtri").val();
    var valeur = $("#idexinputvaleurtri").val();

    $.post('controller/PrintSelecteListeRecommandation.php',{option:option,valeur:valeur}, function (data) {

        data = $.parseJSON(data);

        var date = [];
        var pro = [];
        var recom = [];
        var recep = [];
        var vehicule = [];
        var tech = [];
        var client = [];
        var idate = 0;
        var ipro = 0;
        var irecom = 0;
        var irecep = 0;
        var iveh = 0;
        var itech = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionRecommandationDate").val();
        var activevalpro = $("#printTableListePositionRecommandationPro").val();
        var activevalrecom = $("#printTableListePositionRecommandationRecom").val();
        var activevalrecep = $("#printTableListePositionRecommandationRecep").val();
        var activevalvehicule = $("#printTableListePositionRecommandationVehicule").val();
        var activevaltech = $("#printTableListePositionRecommandationTech").val();
        var activevalclient = $("#printTableListePositionRecommandationClient").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'probleme'){pro[ipro]=val;ipro++;}
                if(ind == 'recommandation'){recom[irecom]=val;irecom++;}
                if(ind == 'reception'){recep[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
                if(ind == 'technicien'){tech[itech]=val;itech++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}

            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalpro.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecom.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecep.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalvehicule.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltech.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalpro.length != 0 && activevalpro > nbrcoloneactive) || (activevalrecom.length != 0 && activevalrecom > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevaltech.length != 0 && activevaltech > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
            {
                $(".messageh6").text('Le choix des position doit \352tre de nombre successif.');
                ConfirmationLose();
            }
            else
            {
                if(activevaldate.length != 0)
                {
                    listecoloneactive[parseInt(activevaldate)-1] = 'Date';
                    listecoloneactiveSend[parseInt(activevaldate)-1] = 'date';
                }
                if(activevalpro.length != 0)
                {
                    listecoloneactive[parseInt(activevalpro)-1] = 'Probl\350me';
                    listecoloneactiveSend[parseInt(activevalpro)-1] = 'probleme';
                }
                if(activevalrecom.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecom)-1] = 'Recommandation';
                    listecoloneactiveSend[parseInt(activevalrecom)-1] = 'recommandation';
                }
                if(activevalrecep.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecep)-1] = 'R\351ception';
                    listecoloneactiveSend[parseInt(activevalrecep)-1] = 'reception';
                }
                if(activevalvehicule.length != 0)
                {
                    listecoloneactive[parseInt(activevalvehicule)-1] = 'V\351hicule';
                    listecoloneactiveSend[parseInt(activevalvehicule)-1] = 'vehicule';
                }
                if(activevaltech.length != 0)
                {
                    listecoloneactive[parseInt(activevaltech)-1] = 'Technicien';
                    listecoloneactiveSend[parseInt(activevaltech)-1] = 'technicien';
                }
                if(activevalclient.length != 0)
                {
                    listecoloneactive[parseInt(activevalclient)-1] = 'Client';
                    listecoloneactiveSend[parseInt(activevalclient)-1] = 'client';
                }
            }
        }
        else
        {
            $(".messageh6").text('Veillez selectionner la position des colones \341 affichier.');
            ConfirmationLose();
        }

        if(listecoloneactive.length != 0)
        {
            $('.printView').empty();
            $('#indexprintveiwlisteclientdiv').empty();

            $('.printView').append("<table style='border-collapse: collapse'>" +
                "<thead style='background-color: white; color: black;'>" +
                "<tr id='printveiwlisteclienttableheadtr'></tr>"+
                "</thead>" +
                "<tbody id='printveiwlisteclienttablebody'></tbody>"+
                "</table>");

            $('#indexprintveiwlisteclientdiv').append("<table style='border-collapse: collapse'>" +
                "<thead style='background-color: white; color: black;'>" +
                "<tr id='indexprintveiwlisteclienttableheadtr'></tr>"+
                "</thead>" +
                "<tbody id='indexprintveiwlisteclienttablebody'></tbody>"+
                "</table>");

            for (var i = 0; i < listecoloneactive.length; i++)
            {
                var entete = listecoloneactive[i];
                var largeur = 0;
                var largeur_impr = 0;

                if(entete == 'Date')largeur = 8;
                if(entete == 'Probl\350me')largeur = 8;
                if(entete == 'Recommandation')largeur = 10;
                if(entete == 'R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;
                if(entete == 'Technicien')largeur = 8;
                if(entete == 'Client')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'Probl\350me')largeur_impr = 5;
                if(entete == 'Recommandation')largeur_impr = 8;
                if(entete == 'R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;
                if(entete == 'Technicien')largeur_impr = 5;
                if(entete == 'Client')largeur_impr = 5;

                $('#printveiwlisteclienttableheadtr').append('<th style="min-width: '+largeur+'vw;text-align: center;border: 1px solid black;">'+entete+'</th>');
                $('#indexprintveiwlisteclienttableheadtr').append('<th style="min-width: '+largeur_impr+'vw;text-align: center;border: 1px solid black;font-size: .8em;">'+entete+'</th>');
            }

            for (var i = 0; i < data.length; i++)
            {
                $('#printveiwlisteclienttablebody').append('<tr class="printveiwlisteclienttablebodytr"></tr>');
                $('#indexprintveiwlisteclienttablebody').append('<tr class="indexprintveiwlisteclienttablebodytr"></tr>');

                for (var j = 0; j < listecoloneactiveSend.length; j++)
                {
                    if(listecoloneactiveSend[j] == 'date')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+date[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+date[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'probleme')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+pro[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+pro[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'recommandation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+recom[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+recom[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'reception')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+recep[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+recep[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'vehicule')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+vehicule[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+vehicule[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'technicien')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tech[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tech[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'client')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+client[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+client[i]+'</td>');
                    }

                }
            }
        }
    });
}

