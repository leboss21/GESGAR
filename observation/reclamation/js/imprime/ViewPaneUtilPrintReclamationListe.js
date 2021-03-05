function SeletionListeReclamationAvantDate()
{
    var date = $("#date_prt_inf").val();
    date = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(date);

    $.post('controller/PrintSelecteListeReclamation.php',{reclamationselectedateavant:date}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var reclam = [];
        var client = [];
        var anal = [];
        var cause = [];
        var prop = [];
        var dobs = [];
        var obs = [];
        var recep = [];
        var vehicule = [];
        var idate = 0;
        var ireclam = 0;
        var iclient = 0;
        var ianal = 0;
        var icause = 0;
        var iprop = 0;
        var idobs = 0;
        var iobs = 0;
        var irecep = 0;
        var iveh = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionReclamationDate").val();
        var activevalreclam = $("#printTableListePositionReclamationReclam").val();
        var activevalclient = $("#printTableListePositionReclamationClient").val();
        var activevalanal = $("#printTableListePositionReclamationAnalyse").val();
        var activevalcause = $("#printTableListePositionReclamationCause").val();
        var activevalprop = $("#printTableListePositionReclamationProposition").val();
        var activevaldobs = $("#printTableListePositionReclamationDateobserv").val();
        var activevalobs = $("#printTableListePositionReclamationObserv").val();
        var activevalrecep = $("#printTableListePositionReclamationRecep").val();
        var activevalveh = $("#printTableListePositionReclamationVehicule").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'reclamation'){reclam[ireclam]=val;ireclam++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}
                if(ind == 'analyse'){anal[ianal]=val;ianal++;}
                if(ind == 'cause'){cause[icause]=val;icause++;}
                if(ind == 'proposition'){prop[iprop]=val;iprop++;}
                if(ind == 'dateobservation'){dobs[idobs]=val;idobs++;}
                if(ind == 'observation'){obs[iobs]=val;iobs++;}
                if(ind == 'reception'){recep[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalreclam.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalanal.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalcause.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalprop.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaldobs.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalobs.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecep.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalveh.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalreclam.length != 0 && activevalreclam > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive) || (activevalanal.length != 0 && activevalanal > nbrcoloneactive) || (activevalcause.length != 0 && activevalcause > nbrcoloneactive) || (activevalprop.length != 0 && activevalprop > nbrcoloneactive) || (activevaldobs.length != 0 && activevaldobs > nbrcoloneactive) || (activevalobs.length != 0 && activevalobs > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalveh.length != 0 && activevalveh > nbrcoloneactive))
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
                if(activevalreclam.length != 0)
                {
                    listecoloneactive[parseInt(activevalreclam)-1] = 'R\351clamation';
                    listecoloneactiveSend[parseInt(activevalreclam)-1] = 'reclamation';
                }
                if(activevalclient.length != 0)
                {
                    listecoloneactive[parseInt(activevalclient)-1] = 'Client';
                    listecoloneactiveSend[parseInt(activevalclient)-1] = 'client';
                }
                if(activevalanal.length != 0)
                {
                    listecoloneactive[parseInt(activevalanal)-1] = 'Analyse';
                    listecoloneactiveSend[parseInt(activevalanal)-1] = 'analyse';
                }
                if(activevalcause.length != 0)
                {
                    listecoloneactive[parseInt(activevalcause)-1] = 'Cause';
                    listecoloneactiveSend[parseInt(activevalcause)-1] = 'cause';
                }
                if(activevalprop.length != 0)
                {
                    listecoloneactive[parseInt(activevalprop)-1] = 'Proposition';
                    listecoloneactiveSend[parseInt(activevalprop)-1] = 'proposition';
                }
                if(activevaldobs.length != 0)
                {
                    listecoloneactive[parseInt(activevaldobs)-1] = 'Date Observation';
                    listecoloneactiveSend[parseInt(activevaldobs)-1] = 'dateobservation';
                }
                if(activevalobs.length != 0)
                {
                    listecoloneactive[parseInt(activevalobs)-1] = 'Observation';
                    listecoloneactiveSend[parseInt(activevalobs)-1] = 'observation';
                }
                if(activevalrecep.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecep)-1] = 'R\351ception';
                    listecoloneactiveSend[parseInt(activevalrecep)-1] = 'reception';
                }
                if(activevalveh.length != 0)
                {
                    listecoloneactive[parseInt(activevalveh)-1] = 'V\351hicule';
                    listecoloneactiveSend[parseInt(activevalveh)-1] = 'vehicule';
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
                if(entete == 'R\351clamation')largeur = 8;
                if(entete == 'Client')largeur = 10;
                if(entete == 'Analyse')largeur = 8;
                if(entete == 'Cause')largeur = 8;
                if(entete == 'Proposition')largeur = 8;
                if(entete == 'Date Observation')largeur = 10;
                if(entete == 'Observation')largeur = 8;
                if(entete == 'R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'R\351clamation')largeur_impr = 5;
                if(entete == 'Client')largeur_impr = 8;
                if(entete == 'Analyse')largeur_impr = 5;
                if(entete == 'Cause')largeur_impr = 5;
                if(entete == 'Proposition')largeur_impr = 5;
                if(entete == 'Date Observation')largeur_impr = 8;
                if(entete == 'Observation')largeur_impr = 5;
                if(entete == 'R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;

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
                    if(listecoloneactiveSend[j] == 'reclamation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+reclam[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+reclam[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'client')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+client[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+client[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'analyse')
                    {
                        var ranal = anal[i];
                        if(ranal == '')ranal = '';

                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+anal[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+anal[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'cause')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+cause[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+cause[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'proposition')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+prop[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+prop[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'dateobservation')
                    {
                        var rdobs = dobs[i];
                        if(rdobs == '1000-10-10')rdobs = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+rdobs+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+rdobs+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'observation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+obs[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+obs[i]+'</td>');
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
                }
            }
        }
    });
}

function SeletionListeReclamationApresDate()
{
    var date = $("#date_prt_inf").val();
    date = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(date);

    $.post('controller/PrintSelecteListeReclamation.php',{reclamationselectedateapres:date}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var reclam = [];
        var client = [];
        var anal = [];
        var cause = [];
        var prop = [];
        var dobs = [];
        var obs = [];
        var recep = [];
        var vehicule = [];
        var idate = 0;
        var ireclam = 0;
        var iclient = 0;
        var ianal = 0;
        var icause = 0;
        var iprop = 0;
        var idobs = 0;
        var iobs = 0;
        var irecep = 0;
        var iveh = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionReclamationDate").val();
        var activevalreclam = $("#printTableListePositionReclamationReclam").val();
        var activevalclient = $("#printTableListePositionReclamationClient").val();
        var activevalanal = $("#printTableListePositionReclamationAnalyse").val();
        var activevalcause = $("#printTableListePositionReclamationCause").val();
        var activevalprop = $("#printTableListePositionReclamationProposition").val();
        var activevaldobs = $("#printTableListePositionReclamationDateobserv").val();
        var activevalobs = $("#printTableListePositionReclamationObserv").val();
        var activevalrecep = $("#printTableListePositionReclamationRecep").val();
        var activevalveh = $("#printTableListePositionReclamationVehicule").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'reclamation'){reclam[ireclam]=val;ireclam++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}
                if(ind == 'analyse'){anal[ianal]=val;ianal++;}
                if(ind == 'cause'){cause[icause]=val;icause++;}
                if(ind == 'proposition'){prop[iprop]=val;iprop++;}
                if(ind == 'dateobservation'){dobs[idobs]=val;idobs++;}
                if(ind == 'observation'){obs[iobs]=val;iobs++;}
                if(ind == 'reception'){recep[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalreclam.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalanal.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalcause.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalprop.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaldobs.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalobs.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecep.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalveh.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalreclam.length != 0 && activevalreclam > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive) || (activevalanal.length != 0 && activevalanal > nbrcoloneactive) || (activevalcause.length != 0 && activevalcause > nbrcoloneactive) || (activevalprop.length != 0 && activevalprop > nbrcoloneactive) || (activevaldobs.length != 0 && activevaldobs > nbrcoloneactive) || (activevalobs.length != 0 && activevalobs > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalveh.length != 0 && activevalveh > nbrcoloneactive))
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
                if(activevalreclam.length != 0)
                {
                    listecoloneactive[parseInt(activevalreclam)-1] = 'R\351clamation';
                    listecoloneactiveSend[parseInt(activevalreclam)-1] = 'reclamation';
                }
                if(activevalclient.length != 0)
                {
                    listecoloneactive[parseInt(activevalclient)-1] = 'Client';
                    listecoloneactiveSend[parseInt(activevalclient)-1] = 'client';
                }
                if(activevalanal.length != 0)
                {
                    listecoloneactive[parseInt(activevalanal)-1] = 'Analyse';
                    listecoloneactiveSend[parseInt(activevalanal)-1] = 'analyse';
                }
                if(activevalcause.length != 0)
                {
                    listecoloneactive[parseInt(activevalcause)-1] = 'Cause';
                    listecoloneactiveSend[parseInt(activevalcause)-1] = 'cause';
                }
                if(activevalprop.length != 0)
                {
                    listecoloneactive[parseInt(activevalprop)-1] = 'Proposition';
                    listecoloneactiveSend[parseInt(activevalprop)-1] = 'proposition';
                }
                if(activevaldobs.length != 0)
                {
                    listecoloneactive[parseInt(activevaldobs)-1] = 'Date Observation';
                    listecoloneactiveSend[parseInt(activevaldobs)-1] = 'dateobservation';
                }
                if(activevalobs.length != 0)
                {
                    listecoloneactive[parseInt(activevalobs)-1] = 'Observation';
                    listecoloneactiveSend[parseInt(activevalobs)-1] = 'observation';
                }
                if(activevalrecep.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecep)-1] = 'R\351ception';
                    listecoloneactiveSend[parseInt(activevalrecep)-1] = 'reception';
                }
                if(activevalveh.length != 0)
                {
                    listecoloneactive[parseInt(activevalveh)-1] = 'V\351hicule';
                    listecoloneactiveSend[parseInt(activevalveh)-1] = 'vehicule';
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
                if(entete == 'R\351clamation')largeur = 8;
                if(entete == 'Client')largeur = 10;
                if(entete == 'Analyse')largeur = 8;
                if(entete == 'Cause')largeur = 8;
                if(entete == 'Proposition')largeur = 8;
                if(entete == 'Date Observation')largeur = 10;
                if(entete == 'Observation')largeur = 8;
                if(entete == 'R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'R\351clamation')largeur_impr = 5;
                if(entete == 'Client')largeur_impr = 8;
                if(entete == 'Analyse')largeur_impr = 5;
                if(entete == 'Cause')largeur_impr = 5;
                if(entete == 'Proposition')largeur_impr = 5;
                if(entete == 'Date Observation')largeur_impr = 8;
                if(entete == 'Observation')largeur_impr = 5;
                if(entete == 'R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;

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
                    if(listecoloneactiveSend[j] == 'reclamation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+reclam[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+reclam[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'client')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+client[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+client[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'analyse')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+anal[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+anal[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'cause')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+cause[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+cause[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'proposition')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+prop[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+prop[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'dateobservation')
                    {
                        var rdobs = dobs[i];
                        if(rdobs == '1000-10-10')rdobs = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+rdobs+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+rdobs+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'observation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+obs[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+obs[i]+'</td>');
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
                }
            }
        }
    });
}

function SeletionListeReclamationExtremeDate()
{
    var date = $("#date_prt_inf").val();
    date = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(date);

    $.post('controller/PrintSelecteListeReclamation.php',{reclamationselectedateextreme:date}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var reclam = [];
        var client = [];
        var anal = [];
        var cause = [];
        var prop = [];
        var dobs = [];
        var obs = [];
        var recep = [];
        var vehicule = [];
        var idate = 0;
        var ireclam = 0;
        var iclient = 0;
        var ianal = 0;
        var icause = 0;
        var iprop = 0;
        var idobs = 0;
        var iobs = 0;
        var irecep = 0;
        var iveh = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionReclamationDate").val();
        var activevalreclam = $("#printTableListePositionReclamationReclam").val();
        var activevalclient = $("#printTableListePositionReclamationClient").val();
        var activevalanal = $("#printTableListePositionReclamationAnalyse").val();
        var activevalcause = $("#printTableListePositionReclamationCause").val();
        var activevalprop = $("#printTableListePositionReclamationProposition").val();
        var activevaldobs = $("#printTableListePositionReclamationDateobserv").val();
        var activevalobs = $("#printTableListePositionReclamationObserv").val();
        var activevalrecep = $("#printTableListePositionReclamationRecep").val();
        var activevalveh = $("#printTableListePositionReclamationVehicule").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'reclamation'){reclam[ireclam]=val;ireclam++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}
                if(ind == 'analyse'){anal[ianal]=val;ianal++;}
                if(ind == 'cause'){cause[icause]=val;icause++;}
                if(ind == 'proposition'){prop[iprop]=val;iprop++;}
                if(ind == 'dateobservation'){dobs[idobs]=val;idobs++;}
                if(ind == 'observation'){obs[iobs]=val;iobs++;}
                if(ind == 'reception'){recep[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalreclam.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalanal.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalcause.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalprop.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaldobs.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalobs.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecep.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalveh.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalreclam.length != 0 && activevalreclam > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive) || (activevalanal.length != 0 && activevalanal > nbrcoloneactive) || (activevalcause.length != 0 && activevalcause > nbrcoloneactive) || (activevalprop.length != 0 && activevalprop > nbrcoloneactive) || (activevaldobs.length != 0 && activevaldobs > nbrcoloneactive) || (activevalobs.length != 0 && activevalobs > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalveh.length != 0 && activevalveh > nbrcoloneactive))
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
                if(activevalreclam.length != 0)
                {
                    listecoloneactive[parseInt(activevalreclam)-1] = 'R\351clamation';
                    listecoloneactiveSend[parseInt(activevalreclam)-1] = 'reclamation';
                }
                if(activevalclient.length != 0)
                {
                    listecoloneactive[parseInt(activevalclient)-1] = 'Client';
                    listecoloneactiveSend[parseInt(activevalclient)-1] = 'client';
                }
                if(activevalanal.length != 0)
                {
                    listecoloneactive[parseInt(activevalanal)-1] = 'Analyse';
                    listecoloneactiveSend[parseInt(activevalanal)-1] = 'analyse';
                }
                if(activevalcause.length != 0)
                {
                    listecoloneactive[parseInt(activevalcause)-1] = 'Cause';
                    listecoloneactiveSend[parseInt(activevalcause)-1] = 'cause';
                }
                if(activevalprop.length != 0)
                {
                    listecoloneactive[parseInt(activevalprop)-1] = 'Proposition';
                    listecoloneactiveSend[parseInt(activevalprop)-1] = 'proposition';
                }
                if(activevaldobs.length != 0)
                {
                    listecoloneactive[parseInt(activevaldobs)-1] = 'Date Observation';
                    listecoloneactiveSend[parseInt(activevaldobs)-1] = 'dateobservation';
                }
                if(activevalobs.length != 0)
                {
                    listecoloneactive[parseInt(activevalobs)-1] = 'Observation';
                    listecoloneactiveSend[parseInt(activevalobs)-1] = 'observation';
                }
                if(activevalrecep.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecep)-1] = 'R\351ception';
                    listecoloneactiveSend[parseInt(activevalrecep)-1] = 'reception';
                }
                if(activevalveh.length != 0)
                {
                    listecoloneactive[parseInt(activevalveh)-1] = 'V\351hicule';
                    listecoloneactiveSend[parseInt(activevalveh)-1] = 'vehicule';
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
                if(entete == 'R\351clamation')largeur = 8;
                if(entete == 'Client')largeur = 10;
                if(entete == 'Analyse')largeur = 8;
                if(entete == 'Cause')largeur = 8;
                if(entete == 'Proposition')largeur = 8;
                if(entete == 'Date Observation')largeur = 10;
                if(entete == 'Observation')largeur = 8;
                if(entete == 'R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'R\351clamation')largeur_impr = 5;
                if(entete == 'Client')largeur_impr = 8;
                if(entete == 'Analyse')largeur_impr = 5;
                if(entete == 'Cause')largeur_impr = 5;
                if(entete == 'Proposition')largeur_impr = 5;
                if(entete == 'Date Observation')largeur_impr = 8;
                if(entete == 'Observation')largeur_impr = 5;
                if(entete == 'R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;

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
                    if(listecoloneactiveSend[j] == 'reclamation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+reclam[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+reclam[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'client')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+client[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+client[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'analyse')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+anal[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+anal[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'cause')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+cause[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+cause[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'proposition')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+prop[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+prop[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'dateobservation')
                    {
                        var rdobs = dobs[i];
                        if(rdobs == '1000-10-10')rdobs = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+rdobs+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+rdobs+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'observation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+obs[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+obs[i]+'</td>');
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
                }
            }
        }
    });
}

function SeletionListeReclamationAdmisDate()
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

    $.post('controller/PrintSelecteListeReclamation.php',{reclamationselectedateadmise:liste}, function (data) {

        data = $.parseJSON(data);

        var date = [];
        var reclam = [];
        var client = [];
        var anal = [];
        var cause = [];
        var prop = [];
        var dobs = [];
        var obs = [];
        var recep = [];
        var vehicule = [];
        var idate = 0;
        var ireclam = 0;
        var iclient = 0;
        var ianal = 0;
        var icause = 0;
        var iprop = 0;
        var idobs = 0;
        var iobs = 0;
        var irecep = 0;
        var iveh = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionReclamationDate").val();
        var activevalreclam = $("#printTableListePositionReclamationReclam").val();
        var activevalclient = $("#printTableListePositionReclamationClient").val();
        var activevalanal = $("#printTableListePositionReclamationAnalyse").val();
        var activevalcause = $("#printTableListePositionReclamationCause").val();
        var activevalprop = $("#printTableListePositionReclamationProposition").val();
        var activevaldobs = $("#printTableListePositionReclamationDateobserv").val();
        var activevalobs = $("#printTableListePositionReclamationObserv").val();
        var activevalrecep = $("#printTableListePositionReclamationRecep").val();
        var activevalveh = $("#printTableListePositionReclamationVehicule").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'reclamation'){reclam[ireclam]=val;ireclam++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}
                if(ind == 'analyse'){anal[ianal]=val;ianal++;}
                if(ind == 'cause'){cause[icause]=val;icause++;}
                if(ind == 'proposition'){prop[iprop]=val;iprop++;}
                if(ind == 'dateobservation'){dobs[idobs]=val;idobs++;}
                if(ind == 'observation'){obs[iobs]=val;iobs++;}
                if(ind == 'reception'){recep[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalreclam.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalanal.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalcause.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalprop.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaldobs.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalobs.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecep.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalveh.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalreclam.length != 0 && activevalreclam > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive) || (activevalanal.length != 0 && activevalanal > nbrcoloneactive) || (activevalcause.length != 0 && activevalcause > nbrcoloneactive) || (activevalprop.length != 0 && activevalprop > nbrcoloneactive) || (activevaldobs.length != 0 && activevaldobs > nbrcoloneactive) || (activevalobs.length != 0 && activevalobs > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalveh.length != 0 && activevalveh > nbrcoloneactive))
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
                if(activevalreclam.length != 0)
                {
                    listecoloneactive[parseInt(activevalreclam)-1] = 'R\351clamation';
                    listecoloneactiveSend[parseInt(activevalreclam)-1] = 'reclamation';
                }
                if(activevalclient.length != 0)
                {
                    listecoloneactive[parseInt(activevalclient)-1] = 'Client';
                    listecoloneactiveSend[parseInt(activevalclient)-1] = 'client';
                }
                if(activevalanal.length != 0)
                {
                    listecoloneactive[parseInt(activevalanal)-1] = 'Analyse';
                    listecoloneactiveSend[parseInt(activevalanal)-1] = 'analyse';
                }
                if(activevalcause.length != 0)
                {
                    listecoloneactive[parseInt(activevalcause)-1] = 'Cause';
                    listecoloneactiveSend[parseInt(activevalcause)-1] = 'cause';
                }
                if(activevalprop.length != 0)
                {
                    listecoloneactive[parseInt(activevalprop)-1] = 'Proposition';
                    listecoloneactiveSend[parseInt(activevalprop)-1] = 'proposition';
                }
                if(activevaldobs.length != 0)
                {
                    listecoloneactive[parseInt(activevaldobs)-1] = 'Date Observation';
                    listecoloneactiveSend[parseInt(activevaldobs)-1] = 'dateobservation';
                }
                if(activevalobs.length != 0)
                {
                    listecoloneactive[parseInt(activevalobs)-1] = 'Observation';
                    listecoloneactiveSend[parseInt(activevalobs)-1] = 'observation';
                }
                if(activevalrecep.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecep)-1] = 'R\351ception';
                    listecoloneactiveSend[parseInt(activevalrecep)-1] = 'reception';
                }
                if(activevalveh.length != 0)
                {
                    listecoloneactive[parseInt(activevalveh)-1] = 'V\351hicule';
                    listecoloneactiveSend[parseInt(activevalveh)-1] = 'vehicule';
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
                if(entete == 'R\351clamation')largeur = 8;
                if(entete == 'Client')largeur = 10;
                if(entete == 'Analyse')largeur = 8;
                if(entete == 'Cause')largeur = 8;
                if(entete == 'Proposition')largeur = 8;
                if(entete == 'Date Observation')largeur = 10;
                if(entete == 'Observation')largeur = 8;
                if(entete == 'R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'R\351clamation')largeur_impr = 5;
                if(entete == 'Client')largeur_impr = 8;
                if(entete == 'Analyse')largeur_impr = 5;
                if(entete == 'Cause')largeur_impr = 5;
                if(entete == 'Proposition')largeur_impr = 5;
                if(entete == 'Date Observation')largeur_impr = 8;
                if(entete == 'Observation')largeur_impr = 5;
                if(entete == 'R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;

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
                    if(listecoloneactiveSend[j] == 'reclamation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+reclam[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+reclam[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'client')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+client[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+client[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'analyse')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+anal[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+anal[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'cause')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+cause[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+cause[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'proposition')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+prop[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+prop[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'dateobservation')
                    {
                        var rdobs = dobs[i];
                        if(rdobs == '1000-10-10')rdobs = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+rdobs+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+rdobs+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'observation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+obs[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+obs[i]+'</td>');
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
                }
            }
        }

    });
}

function SeletionListeReclamationExclutDate()
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

    $.post('controller/PrintSelecteListeReclamation.php',{reclamationselectedateexclut:liste}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var reclam = [];
        var client = [];
        var anal = [];
        var cause = [];
        var prop = [];
        var dobs = [];
        var obs = [];
        var recep = [];
        var vehicule = [];
        var idate = 0;
        var ireclam = 0;
        var iclient = 0;
        var ianal = 0;
        var icause = 0;
        var iprop = 0;
        var idobs = 0;
        var iobs = 0;
        var irecep = 0;
        var iveh = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionReclamationDate").val();
        var activevalreclam = $("#printTableListePositionReclamationReclam").val();
        var activevalclient = $("#printTableListePositionReclamationClient").val();
        var activevalanal = $("#printTableListePositionReclamationAnalyse").val();
        var activevalcause = $("#printTableListePositionReclamationCause").val();
        var activevalprop = $("#printTableListePositionReclamationProposition").val();
        var activevaldobs = $("#printTableListePositionReclamationDateobserv").val();
        var activevalobs = $("#printTableListePositionReclamationObserv").val();
        var activevalrecep = $("#printTableListePositionReclamationRecep").val();
        var activevalveh = $("#printTableListePositionReclamationVehicule").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'reclamation'){reclam[ireclam]=val;ireclam++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}
                if(ind == 'analyse'){anal[ianal]=val;ianal++;}
                if(ind == 'cause'){cause[icause]=val;icause++;}
                if(ind == 'proposition'){prop[iprop]=val;iprop++;}
                if(ind == 'dateobservation'){dobs[idobs]=val;idobs++;}
                if(ind == 'observation'){obs[iobs]=val;iobs++;}
                if(ind == 'reception'){recep[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalreclam.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalanal.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalcause.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalprop.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaldobs.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalobs.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecep.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalveh.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalreclam.length != 0 && activevalreclam > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive) || (activevalanal.length != 0 && activevalanal > nbrcoloneactive) || (activevalcause.length != 0 && activevalcause > nbrcoloneactive) || (activevalprop.length != 0 && activevalprop > nbrcoloneactive) || (activevaldobs.length != 0 && activevaldobs > nbrcoloneactive) || (activevalobs.length != 0 && activevalobs > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalveh.length != 0 && activevalveh > nbrcoloneactive))
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
                if(activevalreclam.length != 0)
                {
                    listecoloneactive[parseInt(activevalreclam)-1] = 'R\351clamation';
                    listecoloneactiveSend[parseInt(activevalreclam)-1] = 'reclamation';
                }
                if(activevalclient.length != 0)
                {
                    listecoloneactive[parseInt(activevalclient)-1] = 'Client';
                    listecoloneactiveSend[parseInt(activevalclient)-1] = 'client';
                }
                if(activevalanal.length != 0)
                {
                    listecoloneactive[parseInt(activevalanal)-1] = 'Analyse';
                    listecoloneactiveSend[parseInt(activevalanal)-1] = 'analyse';
                }
                if(activevalcause.length != 0)
                {
                    listecoloneactive[parseInt(activevalcause)-1] = 'Cause';
                    listecoloneactiveSend[parseInt(activevalcause)-1] = 'cause';
                }
                if(activevalprop.length != 0)
                {
                    listecoloneactive[parseInt(activevalprop)-1] = 'Proposition';
                    listecoloneactiveSend[parseInt(activevalprop)-1] = 'proposition';
                }
                if(activevaldobs.length != 0)
                {
                    listecoloneactive[parseInt(activevaldobs)-1] = 'Date Observation';
                    listecoloneactiveSend[parseInt(activevaldobs)-1] = 'dateobservation';
                }
                if(activevalobs.length != 0)
                {
                    listecoloneactive[parseInt(activevalobs)-1] = 'Observation';
                    listecoloneactiveSend[parseInt(activevalobs)-1] = 'observation';
                }
                if(activevalrecep.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecep)-1] = 'R\351ception';
                    listecoloneactiveSend[parseInt(activevalrecep)-1] = 'reception';
                }
                if(activevalveh.length != 0)
                {
                    listecoloneactive[parseInt(activevalveh)-1] = 'V\351hicule';
                    listecoloneactiveSend[parseInt(activevalveh)-1] = 'vehicule';
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
                if(entete == 'R\351clamation')largeur = 8;
                if(entete == 'Client')largeur = 10;
                if(entete == 'Analyse')largeur = 8;
                if(entete == 'Cause')largeur = 8;
                if(entete == 'Proposition')largeur = 8;
                if(entete == 'Date Observation')largeur = 10;
                if(entete == 'Observation')largeur = 8;
                if(entete == 'R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'R\351clamation')largeur_impr = 5;
                if(entete == 'Client')largeur_impr = 8;
                if(entete == 'Analyse')largeur_impr = 5;
                if(entete == 'Cause')largeur_impr = 5;
                if(entete == 'Proposition')largeur_impr = 5;
                if(entete == 'Date Observation')largeur_impr = 8;
                if(entete == 'Observation')largeur_impr = 5;
                if(entete == 'R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;

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
                    if(listecoloneactiveSend[j] == 'reclamation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+reclam[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+reclam[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'client')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+client[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+client[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'analyse')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+anal[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+anal[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'cause')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+cause[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+cause[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'proposition')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+prop[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+prop[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'dateobservation')
                    {
                        var rdobs = dobs[i];
                        if(rdobs == '1000-10-10')rdobs = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+rdobs+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+rdobs+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'observation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+obs[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+obs[i]+'</td>');
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
                }
            }
        }
    });
}

function SeletionListeReclamationEntreDate()
{
    var dateinf = $("#date_prt_inf").val();
    var datesup = $("#date_prt_sup").val();
    dateinf = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(dateinf);
    datesup = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(datesup);

    $.post('controller/PrintSelecteListeReclamation.php',{reclamationselectedateinf:dateinf,reclamationselectedatesup:datesup}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var reclam = [];
        var client = [];
        var anal = [];
        var cause = [];
        var prop = [];
        var dobs = [];
        var obs = [];
        var recep = [];
        var vehicule = [];
        var idate = 0;
        var ireclam = 0;
        var iclient = 0;
        var ianal = 0;
        var icause = 0;
        var iprop = 0;
        var idobs = 0;
        var iobs = 0;
        var irecep = 0;
        var iveh = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionReclamationDate").val();
        var activevalreclam = $("#printTableListePositionReclamationReclam").val();
        var activevalclient = $("#printTableListePositionReclamationClient").val();
        var activevalanal = $("#printTableListePositionReclamationAnalyse").val();
        var activevalcause = $("#printTableListePositionReclamationCause").val();
        var activevalprop = $("#printTableListePositionReclamationProposition").val();
        var activevaldobs = $("#printTableListePositionReclamationDateobserv").val();
        var activevalobs = $("#printTableListePositionReclamationObserv").val();
        var activevalrecep = $("#printTableListePositionReclamationRecep").val();
        var activevalveh = $("#printTableListePositionReclamationVehicule").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'reclamation'){reclam[ireclam]=val;ireclam++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}
                if(ind == 'analyse'){anal[ianal]=val;ianal++;}
                if(ind == 'cause'){cause[icause]=val;icause++;}
                if(ind == 'proposition'){prop[iprop]=val;iprop++;}
                if(ind == 'dateobservation'){dobs[idobs]=val;idobs++;}
                if(ind == 'observation'){obs[iobs]=val;iobs++;}
                if(ind == 'reception'){recep[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalreclam.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalanal.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalcause.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalprop.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaldobs.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalobs.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecep.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalveh.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalreclam.length != 0 && activevalreclam > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive) || (activevalanal.length != 0 && activevalanal > nbrcoloneactive) || (activevalcause.length != 0 && activevalcause > nbrcoloneactive) || (activevalprop.length != 0 && activevalprop > nbrcoloneactive) || (activevaldobs.length != 0 && activevaldobs > nbrcoloneactive) || (activevalobs.length != 0 && activevalobs > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalveh.length != 0 && activevalveh > nbrcoloneactive))
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
                if(activevalreclam.length != 0)
                {
                    listecoloneactive[parseInt(activevalreclam)-1] = 'R\351clamation';
                    listecoloneactiveSend[parseInt(activevalreclam)-1] = 'reclamation';
                }
                if(activevalclient.length != 0)
                {
                    listecoloneactive[parseInt(activevalclient)-1] = 'Client';
                    listecoloneactiveSend[parseInt(activevalclient)-1] = 'client';
                }
                if(activevalanal.length != 0)
                {
                    listecoloneactive[parseInt(activevalanal)-1] = 'Analyse';
                    listecoloneactiveSend[parseInt(activevalanal)-1] = 'analyse';
                }
                if(activevalcause.length != 0)
                {
                    listecoloneactive[parseInt(activevalcause)-1] = 'Cause';
                    listecoloneactiveSend[parseInt(activevalcause)-1] = 'cause';
                }
                if(activevalprop.length != 0)
                {
                    listecoloneactive[parseInt(activevalprop)-1] = 'Proposition';
                    listecoloneactiveSend[parseInt(activevalprop)-1] = 'proposition';
                }
                if(activevaldobs.length != 0)
                {
                    listecoloneactive[parseInt(activevaldobs)-1] = 'Date Observation';
                    listecoloneactiveSend[parseInt(activevaldobs)-1] = 'dateobservation';
                }
                if(activevalobs.length != 0)
                {
                    listecoloneactive[parseInt(activevalobs)-1] = 'Observation';
                    listecoloneactiveSend[parseInt(activevalobs)-1] = 'observation';
                }
                if(activevalrecep.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecep)-1] = 'R\351ception';
                    listecoloneactiveSend[parseInt(activevalrecep)-1] = 'reception';
                }
                if(activevalveh.length != 0)
                {
                    listecoloneactive[parseInt(activevalveh)-1] = 'V\351hicule';
                    listecoloneactiveSend[parseInt(activevalveh)-1] = 'vehicule';
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
                if(entete == 'R\351clamation')largeur = 8;
                if(entete == 'Client')largeur = 10;
                if(entete == 'Analyse')largeur = 8;
                if(entete == 'Cause')largeur = 8;
                if(entete == 'Proposition')largeur = 8;
                if(entete == 'Date Observation')largeur = 10;
                if(entete == 'Observation')largeur = 8;
                if(entete == 'R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'R\351clamation')largeur_impr = 5;
                if(entete == 'Client')largeur_impr = 8;
                if(entete == 'Analyse')largeur_impr = 5;
                if(entete == 'Cause')largeur_impr = 5;
                if(entete == 'Proposition')largeur_impr = 5;
                if(entete == 'Date Observation')largeur_impr = 8;
                if(entete == 'Observation')largeur_impr = 5;
                if(entete == 'R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;

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
                    if(listecoloneactiveSend[j] == 'reclamation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+reclam[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+reclam[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'client')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+client[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+client[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'analyse')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+anal[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+anal[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'cause')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+cause[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+cause[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'proposition')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+prop[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+prop[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'dateobservation')
                    {
                        var rdobs = dobs[i];
                        if(rdobs == '1000-10-10')rdobs = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+rdobs+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+rdobs+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'observation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+obs[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+obs[i]+'</td>');
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
                }
            }
        }
    });
}

function SeletionListeReclamationAutre()
{
    var option = $("#idexselectvaleurtri").val();
    var valeur = $("#idexinputvaleurtri").val();

    $.post('controller/PrintSelecteListeReclamation.php',{option:option,valeur:valeur}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var reclam = [];
        var client = [];
        var anal = [];
        var cause = [];
        var prop = [];
        var dobs = [];
        var obs = [];
        var recep = [];
        var vehicule = [];
        var idate = 0;
        var ireclam = 0;
        var iclient = 0;
        var ianal = 0;
        var icause = 0;
        var iprop = 0;
        var idobs = 0;
        var iobs = 0;
        var irecep = 0;
        var iveh = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionReclamationDate").val();
        var activevalreclam = $("#printTableListePositionReclamationReclam").val();
        var activevalclient = $("#printTableListePositionReclamationClient").val();
        var activevalanal = $("#printTableListePositionReclamationAnalyse").val();
        var activevalcause = $("#printTableListePositionReclamationCause").val();
        var activevalprop = $("#printTableListePositionReclamationProposition").val();
        var activevaldobs = $("#printTableListePositionReclamationDateobserv").val();
        var activevalobs = $("#printTableListePositionReclamationObserv").val();
        var activevalrecep = $("#printTableListePositionReclamationRecep").val();
        var activevalveh = $("#printTableListePositionReclamationVehicule").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'reclamation'){reclam[ireclam]=val;ireclam++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}
                if(ind == 'analyse'){anal[ianal]=val;ianal++;}
                if(ind == 'cause'){cause[icause]=val;icause++;}
                if(ind == 'proposition'){prop[iprop]=val;iprop++;}
                if(ind == 'dateobservation'){dobs[idobs]=val;idobs++;}
                if(ind == 'observation'){obs[iobs]=val;iobs++;}
                if(ind == 'reception'){recep[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalreclam.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalanal.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalcause.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalprop.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaldobs.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalobs.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalrecep.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalveh.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalreclam.length != 0 && activevalreclam > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive) || (activevalanal.length != 0 && activevalanal > nbrcoloneactive) || (activevalcause.length != 0 && activevalcause > nbrcoloneactive) || (activevalprop.length != 0 && activevalprop > nbrcoloneactive) || (activevaldobs.length != 0 && activevaldobs > nbrcoloneactive) || (activevalobs.length != 0 && activevalobs > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalveh.length != 0 && activevalveh > nbrcoloneactive))
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
                if(activevalreclam.length != 0)
                {
                    listecoloneactive[parseInt(activevalreclam)-1] = 'R\351clamation';
                    listecoloneactiveSend[parseInt(activevalreclam)-1] = 'reclamation';
                }
                if(activevalclient.length != 0)
                {
                    listecoloneactive[parseInt(activevalclient)-1] = 'Client';
                    listecoloneactiveSend[parseInt(activevalclient)-1] = 'client';
                }
                if(activevalanal.length != 0)
                {
                    listecoloneactive[parseInt(activevalanal)-1] = 'Analyse';
                    listecoloneactiveSend[parseInt(activevalanal)-1] = 'analyse';
                }
                if(activevalcause.length != 0)
                {
                    listecoloneactive[parseInt(activevalcause)-1] = 'Cause';
                    listecoloneactiveSend[parseInt(activevalcause)-1] = 'cause';
                }
                if(activevalprop.length != 0)
                {
                    listecoloneactive[parseInt(activevalprop)-1] = 'Proposition';
                    listecoloneactiveSend[parseInt(activevalprop)-1] = 'proposition';
                }
                if(activevaldobs.length != 0)
                {
                    listecoloneactive[parseInt(activevaldobs)-1] = 'Date Observation';
                    listecoloneactiveSend[parseInt(activevaldobs)-1] = 'dateobservation';
                }
                if(activevalobs.length != 0)
                {
                    listecoloneactive[parseInt(activevalobs)-1] = 'Observation';
                    listecoloneactiveSend[parseInt(activevalobs)-1] = 'observation';
                }
                if(activevalrecep.length != 0)
                {
                    listecoloneactive[parseInt(activevalrecep)-1] = 'R\351ception';
                    listecoloneactiveSend[parseInt(activevalrecep)-1] = 'reception';
                }
                if(activevalveh.length != 0)
                {
                    listecoloneactive[parseInt(activevalveh)-1] = 'V\351hicule';
                    listecoloneactiveSend[parseInt(activevalveh)-1] = 'vehicule';
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
                if(entete == 'R\351clamation')largeur = 8;
                if(entete == 'Client')largeur = 10;
                if(entete == 'Analyse')largeur = 8;
                if(entete == 'Cause')largeur = 8;
                if(entete == 'Proposition')largeur = 8;
                if(entete == 'Date Observation')largeur = 10;
                if(entete == 'Observation')largeur = 8;
                if(entete == 'R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'R\351clamation')largeur_impr = 5;
                if(entete == 'Client')largeur_impr = 8;
                if(entete == 'Analyse')largeur_impr = 5;
                if(entete == 'Cause')largeur_impr = 5;
                if(entete == 'Proposition')largeur_impr = 5;
                if(entete == 'Date Observation')largeur_impr = 8;
                if(entete == 'Observation')largeur_impr = 5;
                if(entete == 'R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;

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
                    if(listecoloneactiveSend[j] == 'reclamation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+reclam[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+reclam[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'client')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+client[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+client[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'analyse')
                    {
                        var ranal = anal[i];
                        if(ranal == '')ranal = '';

                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+anal[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+anal[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'cause')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+cause[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+cause[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'proposition')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+prop[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+prop[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'dateobservation')
                    {
                        var rdobs = dobs[i];
                        if(rdobs == '1000-10-10')rdobs = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+rdobs+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+rdobs+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'observation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+obs[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+obs[i]+'</td>');
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
                }
            }
        }
    });
}
