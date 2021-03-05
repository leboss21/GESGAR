function SeletionListeInspectionAvantDate()
{
    var date = $("#date_prt_inf").val();
    date = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(date);

    $.post('controller/PrintSelecteListeInspection.php',{inspectionselectedateavant:date}, function (data) {

        data = $.parseJSON(data);

        var date = [];
        var kilo = [];
        var numpd = [];
        var nompd = [];
        var qte = [];
        var numcom = [];
        var result = [];
        var recep = [];
        var vehicule = [];
        var client = [];
        var idate = 0;
        var ikilo = 0;
        var inumpd = 0;
        var inompd = 0;
        var iqte = 0;
        var inumcom = 0;
        var iresult = 0;
        var irecept = 0;
        var ivehicul = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionInspectionDate").val();
        var activevalkilo = $("#printTableListePositionInspectionKilo").val();
        var activevalnumpd = $("#printTableListePositionInspectionNumpd").val();
        var activevalnompd = $("#printTableListePositionInspectionNompd").val();
        var activevalqte = $("#printTableListePositionInspectionQte").val();
        var activevalnumcom = $("#printTableListePositionInspectionNumcom").val();
        var activevalresult = $("#printTableListePositionInspectionResult").val();
        var activevalrecep = $("#printTableListePositionInspectionRecep").val();
        var activevalvehicule = $("#printTableListePositionInspectionVehicule").val();
        var activevalclient = $("#printTableListePositionInspectionClient").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'kilometrage'){kilo[ikilo]=val;ikilo++;}
                if(ind == 'numpd'){numpd[inumpd]=val;inumpd++;}
                if(ind == 'nompd'){nompd[inompd]=val;inompd++;}
                if(ind == 'quantite'){qte[iqte]=val;iqte++;}
                if(ind == 'numcom'){numcom[inumcom]=val;inumcom++;}
                if(ind == 'resultat'){result[iresult]=val;iresult++;}
                if(ind == 'reception'){recep[irecept]=val;irecept++;}
                if(ind == 'vehicule'){vehicule[ivehicul]=val;ivehicul++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}

            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalkilo.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumpd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnompd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalqte.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumcom.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalresult.length != 0)
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
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }


        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalkilo.length != 0 && activevalkilo > nbrcoloneactive) || (activevalnumpd.length != 0 && activevalnumpd > nbrcoloneactive) || (activevalnompd.length != 0 && activevalnompd > nbrcoloneactive) || (activevalqte.length != 0 && activevalqte > nbrcoloneactive) || (activevalnumcom.length != 0 && activevalnumcom > nbrcoloneactive) || (activevalresult.length != 0 && activevalresult > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
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
                if(activevalkilo.length != 0)
                {
                    listecoloneactive[parseInt(activevalkilo)-1] = 'Kilom\351trage';
                    listecoloneactiveSend[parseInt(activevalkilo)-1] = 'kilometrage';
                }
                if(activevalnumpd.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumpd)-1] = 'N\260 P.D';
                    listecoloneactiveSend[parseInt(activevalnumpd)-1] = 'numpd';
                }
                if(activevalnompd.length != 0)
                {
                    listecoloneactive[parseInt(activevalnompd)-1] = 'Nom P.D';
                    listecoloneactiveSend[parseInt(activevalnompd)-1] = 'nompd';
                }
                if(activevalqte.length != 0)
                {
                    listecoloneactive[parseInt(activevalqte)-1] = 'Quantit\351';
                    listecoloneactiveSend[parseInt(activevalqte)-1] = 'quantite';
                }
                if(activevalnumcom.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumcom)-1] = 'N\351 COM';
                    listecoloneactiveSend[parseInt(activevalnumcom)-1] = 'numcom';
                }
                if(activevalresult.length != 0)
                {
                    listecoloneactive[parseInt(activevalresult)-1] = 'Resultat';
                    listecoloneactiveSend[parseInt(activevalresult)-1] = 'resultat';
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
                if(entete == 'Kilom\351trage')largeur = 8;
                if(entete == 'N\260 P.D')largeur = 10;
                if(entete == 'Nom P.D')largeur = 8;
                if(entete == 'Quantit\351')largeur = 8;
                if(entete == 'N\351 COM')largeur = 8;
                if(entete == 'Resultat')largeur = 10;
                if(entete == 'R\351ception')largeur = 10;
                if(entete == 'V\351ception')largeur = 10;
                if(entete == 'Client')largeur = 10;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'Kilom\351trage')largeur_impr = 5;
                if(entete == 'N\260 P.D')largeur_impr = 8;
                if(entete == 'Nom P.D')largeur_impr = 5;
                if(entete == 'Quantit\351')largeur_impr = 5;
                if(entete == 'N\351 COM')largeur_impr = 5;
                if(entete == 'Resultat')largeur_impr = 8;
                if(entete == 'R\351ception')largeur_impr = 8;
                if(entete == 'V\351hicule')largeur_impr = 8;
                if(entete == 'Client')largeur_impr = 8;

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
                    if(listecoloneactiveSend[j] == 'kilometrage')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+kilo[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+kilo[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'numpd')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numpd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numpd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'nompd')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+nompd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+nompd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'quantite')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+qte[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+qte[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'numcom')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numcom[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numcom[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'resultat')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+result[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+result[i]+'</td>');
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

function SeletionListeInspectionApresDate()
{
    var date = $("#date_prt_inf").val();
    date = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(date);

    $.post('controller/PrintSelecteListeInspection.php',{inspectionselectedateapres:date}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var kilo = [];
        var numpd = [];
        var nompd = [];
        var qte = [];
        var numcom = [];
        var result = [];
        var recep = [];
        var vehicule = [];
        var client = [];
        var idate = 0;
        var ikilo = 0;
        var inumpd = 0;
        var inompd = 0;
        var iqte = 0;
        var inumcom = 0;
        var iresult = 0;
        var irecept = 0;
        var ivehicul = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionInspectionDate").val();
        var activevalkilo = $("#printTableListePositionInspectionKilo").val();
        var activevalnumpd = $("#printTableListePositionInspectionNumpd").val();
        var activevalnompd = $("#printTableListePositionInspectionNompd").val();
        var activevalqte = $("#printTableListePositionInspectionQte").val();
        var activevalnumcom = $("#printTableListePositionInspectionNumcom").val();
        var activevalresult = $("#printTableListePositionInspectionResult").val();
        var activevalrecep = $("#printTableListePositionInspectionRecep").val();
        var activevalvehicule = $("#printTableListePositionInspectionVehicule").val();
        var activevalclient = $("#printTableListePositionInspectionClient").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'kilometrage'){kilo[ikilo]=val;ikilo++;}
                if(ind == 'numpd'){numpd[inumpd]=val;inumpd++;}
                if(ind == 'nompd'){nompd[inompd]=val;inompd++;}
                if(ind == 'quantite'){qte[iqte]=val;iqte++;}
                if(ind == 'numcom'){numcom[inumcom]=val;inumcom++;}
                if(ind == 'resultat'){result[iresult]=val;iresult++;}
                if(ind == 'reception'){recep[irecept]=val;irecept++;}
                if(ind == 'vehicule'){vehicule[ivehicul]=val;ivehicul++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}

            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalkilo.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumpd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnompd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalqte.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumcom.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalresult.length != 0)
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
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }


        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalkilo.length != 0 && activevalkilo > nbrcoloneactive) || (activevalnumpd.length != 0 && activevalnumpd > nbrcoloneactive) || (activevalnompd.length != 0 && activevalnompd > nbrcoloneactive) || (activevalqte.length != 0 && activevalqte > nbrcoloneactive) || (activevalnumcom.length != 0 && activevalnumcom > nbrcoloneactive) || (activevalresult.length != 0 && activevalresult > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
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
                if(activevalkilo.length != 0)
                {
                    listecoloneactive[parseInt(activevalkilo)-1] = 'Kilom\351trage';
                    listecoloneactiveSend[parseInt(activevalkilo)-1] = 'kilometrage';
                }
                if(activevalnumpd.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumpd)-1] = 'N\260 P.D';
                    listecoloneactiveSend[parseInt(activevalnumpd)-1] = 'numpd';
                }
                if(activevalnompd.length != 0)
                {
                    listecoloneactive[parseInt(activevalnompd)-1] = 'Nom P.D';
                    listecoloneactiveSend[parseInt(activevalnompd)-1] = 'nompd';
                }
                if(activevalqte.length != 0)
                {
                    listecoloneactive[parseInt(activevalqte)-1] = 'Quantit\351';
                    listecoloneactiveSend[parseInt(activevalqte)-1] = 'quantite';
                }
                if(activevalnumcom.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumcom)-1] = 'N\351 COM';
                    listecoloneactiveSend[parseInt(activevalnumcom)-1] = 'numcom';
                }
                if(activevalresult.length != 0)
                {
                    listecoloneactive[parseInt(activevalresult)-1] = 'Resultat';
                    listecoloneactiveSend[parseInt(activevalresult)-1] = 'resultat';
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
                if(entete == 'Kilom\351trage')largeur = 8;
                if(entete == 'N\260 P.D')largeur = 10;
                if(entete == 'Nom P.D')largeur = 8;
                if(entete == 'Quantit\351')largeur = 8;
                if(entete == 'N\351 COM')largeur = 8;
                if(entete == 'Resultat')largeur = 10;
                if(entete == 'R\351ception')largeur = 10;
                if(entete == 'V\351ception')largeur = 10;
                if(entete == 'Client')largeur = 10;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'Kilom\351trage')largeur_impr = 5;
                if(entete == 'N\260 P.D')largeur_impr = 8;
                if(entete == 'Nom P.D')largeur_impr = 5;
                if(entete == 'Quantit\351')largeur_impr = 5;
                if(entete == 'N\351 COM')largeur_impr = 5;
                if(entete == 'Resultat')largeur_impr = 8;
                if(entete == 'R\351ception')largeur_impr = 8;
                if(entete == 'V\351hicule')largeur_impr = 8;
                if(entete == 'Client')largeur_impr = 8;

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
                    if(listecoloneactiveSend[j] == 'kilometrage')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+kilo[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+kilo[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'numpd')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numpd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numpd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'nompd')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+nompd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+nompd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'quantite')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+qte[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+qte[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'numcom')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numcom[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numcom[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'resultat')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+result[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+result[i]+'</td>');
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

function SeletionListeInspectionExtremeDate()
{
    var date = $("#date_prt_inf").val();
    date = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(date);

    $.post('controller/PrintSelecteListeInspection.php',{inspectionselectedateextreme:date}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var kilo = [];
        var numpd = [];
        var nompd = [];
        var qte = [];
        var numcom = [];
        var result = [];
        var recep = [];
        var vehicule = [];
        var client = [];
        var idate = 0;
        var ikilo = 0;
        var inumpd = 0;
        var inompd = 0;
        var iqte = 0;
        var inumcom = 0;
        var iresult = 0;
        var irecept = 0;
        var ivehicul = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionInspectionDate").val();
        var activevalkilo = $("#printTableListePositionInspectionKilo").val();
        var activevalnumpd = $("#printTableListePositionInspectionNumpd").val();
        var activevalnompd = $("#printTableListePositionInspectionNompd").val();
        var activevalqte = $("#printTableListePositionInspectionQte").val();
        var activevalnumcom = $("#printTableListePositionInspectionNumcom").val();
        var activevalresult = $("#printTableListePositionInspectionResult").val();
        var activevalrecep = $("#printTableListePositionInspectionRecep").val();
        var activevalvehicule = $("#printTableListePositionInspectionVehicule").val();
        var activevalclient = $("#printTableListePositionInspectionClient").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'kilometrage'){kilo[ikilo]=val;ikilo++;}
                if(ind == 'numpd'){numpd[inumpd]=val;inumpd++;}
                if(ind == 'nompd'){nompd[inompd]=val;inompd++;}
                if(ind == 'quantite'){qte[iqte]=val;iqte++;}
                if(ind == 'numcom'){numcom[inumcom]=val;inumcom++;}
                if(ind == 'resultat'){result[iresult]=val;iresult++;}
                if(ind == 'reception'){recep[irecept]=val;irecept++;}
                if(ind == 'vehicule'){vehicule[ivehicul]=val;ivehicul++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}

            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalkilo.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumpd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnompd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalqte.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumcom.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalresult.length != 0)
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
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }


        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalkilo.length != 0 && activevalkilo > nbrcoloneactive) || (activevalnumpd.length != 0 && activevalnumpd > nbrcoloneactive) || (activevalnompd.length != 0 && activevalnompd > nbrcoloneactive) || (activevalqte.length != 0 && activevalqte > nbrcoloneactive) || (activevalnumcom.length != 0 && activevalnumcom > nbrcoloneactive) || (activevalresult.length != 0 && activevalresult > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
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
                if(activevalkilo.length != 0)
                {
                    listecoloneactive[parseInt(activevalkilo)-1] = 'Kilom\351trage';
                    listecoloneactiveSend[parseInt(activevalkilo)-1] = 'kilometrage';
                }
                if(activevalnumpd.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumpd)-1] = 'N\260 P.D';
                    listecoloneactiveSend[parseInt(activevalnumpd)-1] = 'numpd';
                }
                if(activevalnompd.length != 0)
                {
                    listecoloneactive[parseInt(activevalnompd)-1] = 'Nom P.D';
                    listecoloneactiveSend[parseInt(activevalnompd)-1] = 'nompd';
                }
                if(activevalqte.length != 0)
                {
                    listecoloneactive[parseInt(activevalqte)-1] = 'Quantit\351';
                    listecoloneactiveSend[parseInt(activevalqte)-1] = 'quantite';
                }
                if(activevalnumcom.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumcom)-1] = 'N\351 COM';
                    listecoloneactiveSend[parseInt(activevalnumcom)-1] = 'numcom';
                }
                if(activevalresult.length != 0)
                {
                    listecoloneactive[parseInt(activevalresult)-1] = 'Resultat';
                    listecoloneactiveSend[parseInt(activevalresult)-1] = 'resultat';
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
                if(entete == 'Kilom\351trage')largeur = 8;
                if(entete == 'N\260 P.D')largeur = 10;
                if(entete == 'Nom P.D')largeur = 8;
                if(entete == 'Quantit\351')largeur = 8;
                if(entete == 'N\351 COM')largeur = 8;
                if(entete == 'Resultat')largeur = 10;
                if(entete == 'R\351ception')largeur = 10;
                if(entete == 'V\351ception')largeur = 10;
                if(entete == 'Client')largeur = 10;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'Kilom\351trage')largeur_impr = 5;
                if(entete == 'N\260 P.D')largeur_impr = 8;
                if(entete == 'Nom P.D')largeur_impr = 5;
                if(entete == 'Quantit\351')largeur_impr = 5;
                if(entete == 'N\351 COM')largeur_impr = 5;
                if(entete == 'Resultat')largeur_impr = 8;
                if(entete == 'R\351ception')largeur_impr = 8;
                if(entete == 'V\351hicule')largeur_impr = 8;
                if(entete == 'Client')largeur_impr = 8;

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
                    if(listecoloneactiveSend[j] == 'kilometrage')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+kilo[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+kilo[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'numpd')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numpd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numpd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'nompd')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+nompd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+nompd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'quantite')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+qte[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+qte[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'numcom')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numcom[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numcom[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'resultat')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+result[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+result[i]+'</td>');
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

function SeletionListeInspectionAdmisDate()
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

    $.post('controller/PrintSelecteListeInspection.php',{inspectionselectedateadmise:liste}, function (data) {

        data = $.parseJSON(data);

        var date = [];
        var kilo = [];
        var numpd = [];
        var nompd = [];
        var qte = [];
        var numcom = [];
        var result = [];
        var recep = [];
        var vehicule = [];
        var client = [];
        var idate = 0;
        var ikilo = 0;
        var inumpd = 0;
        var inompd = 0;
        var iqte = 0;
        var inumcom = 0;
        var iresult = 0;
        var irecept = 0;
        var ivehicul = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionInspectionDate").val();
        var activevalkilo = $("#printTableListePositionInspectionKilo").val();
        var activevalnumpd = $("#printTableListePositionInspectionNumpd").val();
        var activevalnompd = $("#printTableListePositionInspectionNompd").val();
        var activevalqte = $("#printTableListePositionInspectionQte").val();
        var activevalnumcom = $("#printTableListePositionInspectionNumcom").val();
        var activevalresult = $("#printTableListePositionInspectionResult").val();
        var activevalrecep = $("#printTableListePositionInspectionRecep").val();
        var activevalvehicule = $("#printTableListePositionInspectionVehicule").val();
        var activevalclient = $("#printTableListePositionInspectionClient").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'kilometrage'){kilo[ikilo]=val;ikilo++;}
                if(ind == 'numpd'){numpd[inumpd]=val;inumpd++;}
                if(ind == 'nompd'){nompd[inompd]=val;inompd++;}
                if(ind == 'quantite'){qte[iqte]=val;iqte++;}
                if(ind == 'numcom'){numcom[inumcom]=val;inumcom++;}
                if(ind == 'resultat'){result[iresult]=val;iresult++;}
                if(ind == 'reception'){recep[irecept]=val;irecept++;}
                if(ind == 'vehicule'){vehicule[ivehicul]=val;ivehicul++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}

            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalkilo.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumpd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnompd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalqte.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumcom.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalresult.length != 0)
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
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }


        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalkilo.length != 0 && activevalkilo > nbrcoloneactive) || (activevalnumpd.length != 0 && activevalnumpd > nbrcoloneactive) || (activevalnompd.length != 0 && activevalnompd > nbrcoloneactive) || (activevalqte.length != 0 && activevalqte > nbrcoloneactive) || (activevalnumcom.length != 0 && activevalnumcom > nbrcoloneactive) || (activevalresult.length != 0 && activevalresult > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
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
                if(activevalkilo.length != 0)
                {
                    listecoloneactive[parseInt(activevalkilo)-1] = 'Kilom\351trage';
                    listecoloneactiveSend[parseInt(activevalkilo)-1] = 'kilometrage';
                }
                if(activevalnumpd.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumpd)-1] = 'N\260 P.D';
                    listecoloneactiveSend[parseInt(activevalnumpd)-1] = 'numpd';
                }
                if(activevalnompd.length != 0)
                {
                    listecoloneactive[parseInt(activevalnompd)-1] = 'Nom P.D';
                    listecoloneactiveSend[parseInt(activevalnompd)-1] = 'nompd';
                }
                if(activevalqte.length != 0)
                {
                    listecoloneactive[parseInt(activevalqte)-1] = 'Quantit\351';
                    listecoloneactiveSend[parseInt(activevalqte)-1] = 'quantite';
                }
                if(activevalnumcom.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumcom)-1] = 'N\351 COM';
                    listecoloneactiveSend[parseInt(activevalnumcom)-1] = 'numcom';
                }
                if(activevalresult.length != 0)
                {
                    listecoloneactive[parseInt(activevalresult)-1] = 'Resultat';
                    listecoloneactiveSend[parseInt(activevalresult)-1] = 'resultat';
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
                if(entete == 'Kilom\351trage')largeur = 8;
                if(entete == 'N\260 P.D')largeur = 10;
                if(entete == 'Nom P.D')largeur = 8;
                if(entete == 'Quantit\351')largeur = 8;
                if(entete == 'N\351 COM')largeur = 8;
                if(entete == 'Resultat')largeur = 10;
                if(entete == 'R\351ception')largeur = 10;
                if(entete == 'V\351ception')largeur = 10;
                if(entete == 'Client')largeur = 10;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'Kilom\351trage')largeur_impr = 5;
                if(entete == 'N\260 P.D')largeur_impr = 8;
                if(entete == 'Nom P.D')largeur_impr = 5;
                if(entete == 'Quantit\351')largeur_impr = 5;
                if(entete == 'N\351 COM')largeur_impr = 5;
                if(entete == 'Resultat')largeur_impr = 8;
                if(entete == 'R\351ception')largeur_impr = 8;
                if(entete == 'V\351hicule')largeur_impr = 8;
                if(entete == 'Client')largeur_impr = 8;

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
                    if(listecoloneactiveSend[j] == 'kilometrage')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+kilo[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+kilo[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'numpd')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numpd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numpd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'nompd')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+nompd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+nompd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'quantite')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+qte[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+qte[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'numcom')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numcom[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numcom[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'resultat')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+result[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+result[i]+'</td>');
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

function SeletionListeInspectionExclutDate()
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

    $.post('controller/PrintSelecteListeInspection.php',{inspectionselectedateexclut:liste}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var kilo = [];
        var numpd = [];
        var nompd = [];
        var qte = [];
        var numcom = [];
        var result = [];
        var recep = [];
        var vehicule = [];
        var client = [];
        var idate = 0;
        var ikilo = 0;
        var inumpd = 0;
        var inompd = 0;
        var iqte = 0;
        var inumcom = 0;
        var iresult = 0;
        var irecept = 0;
        var ivehicul = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionInspectionDate").val();
        var activevalkilo = $("#printTableListePositionInspectionKilo").val();
        var activevalnumpd = $("#printTableListePositionInspectionNumpd").val();
        var activevalnompd = $("#printTableListePositionInspectionNompd").val();
        var activevalqte = $("#printTableListePositionInspectionQte").val();
        var activevalnumcom = $("#printTableListePositionInspectionNumcom").val();
        var activevalresult = $("#printTableListePositionInspectionResult").val();
        var activevalrecep = $("#printTableListePositionInspectionRecep").val();
        var activevalvehicule = $("#printTableListePositionInspectionVehicule").val();
        var activevalclient = $("#printTableListePositionInspectionClient").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'kilometrage'){kilo[ikilo]=val;ikilo++;}
                if(ind == 'numpd'){numpd[inumpd]=val;inumpd++;}
                if(ind == 'nompd'){nompd[inompd]=val;inompd++;}
                if(ind == 'quantite'){qte[iqte]=val;iqte++;}
                if(ind == 'numcom'){numcom[inumcom]=val;inumcom++;}
                if(ind == 'resultat'){result[iresult]=val;iresult++;}
                if(ind == 'reception'){recep[irecept]=val;irecept++;}
                if(ind == 'vehicule'){vehicule[ivehicul]=val;ivehicul++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}

            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalkilo.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumpd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnompd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalqte.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumcom.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalresult.length != 0)
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
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }


        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalkilo.length != 0 && activevalkilo > nbrcoloneactive) || (activevalnumpd.length != 0 && activevalnumpd > nbrcoloneactive) || (activevalnompd.length != 0 && activevalnompd > nbrcoloneactive) || (activevalqte.length != 0 && activevalqte > nbrcoloneactive) || (activevalnumcom.length != 0 && activevalnumcom > nbrcoloneactive) || (activevalresult.length != 0 && activevalresult > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
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
                if(activevalkilo.length != 0)
                {
                    listecoloneactive[parseInt(activevalkilo)-1] = 'Kilom\351trage';
                    listecoloneactiveSend[parseInt(activevalkilo)-1] = 'kilometrage';
                }
                if(activevalnumpd.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumpd)-1] = 'N\260 P.D';
                    listecoloneactiveSend[parseInt(activevalnumpd)-1] = 'numpd';
                }
                if(activevalnompd.length != 0)
                {
                    listecoloneactive[parseInt(activevalnompd)-1] = 'Nom P.D';
                    listecoloneactiveSend[parseInt(activevalnompd)-1] = 'nompd';
                }
                if(activevalqte.length != 0)
                {
                    listecoloneactive[parseInt(activevalqte)-1] = 'Quantit\351';
                    listecoloneactiveSend[parseInt(activevalqte)-1] = 'quantite';
                }
                if(activevalnumcom.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumcom)-1] = 'N\351 COM';
                    listecoloneactiveSend[parseInt(activevalnumcom)-1] = 'numcom';
                }
                if(activevalresult.length != 0)
                {
                    listecoloneactive[parseInt(activevalresult)-1] = 'Resultat';
                    listecoloneactiveSend[parseInt(activevalresult)-1] = 'resultat';
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
                if(entete == 'Kilom\351trage')largeur = 8;
                if(entete == 'N\260 P.D')largeur = 10;
                if(entete == 'Nom P.D')largeur = 8;
                if(entete == 'Quantit\351')largeur = 8;
                if(entete == 'N\351 COM')largeur = 8;
                if(entete == 'Resultat')largeur = 10;
                if(entete == 'R\351ception')largeur = 10;
                if(entete == 'V\351ception')largeur = 10;
                if(entete == 'Client')largeur = 10;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'Kilom\351trage')largeur_impr = 5;
                if(entete == 'N\260 P.D')largeur_impr = 8;
                if(entete == 'Nom P.D')largeur_impr = 5;
                if(entete == 'Quantit\351')largeur_impr = 5;
                if(entete == 'N\351 COM')largeur_impr = 5;
                if(entete == 'Resultat')largeur_impr = 8;
                if(entete == 'R\351ception')largeur_impr = 8;
                if(entete == 'V\351hicule')largeur_impr = 8;
                if(entete == 'Client')largeur_impr = 8;

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
                    if(listecoloneactiveSend[j] == 'kilometrage')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+kilo[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+kilo[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'numpd')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numpd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numpd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'nompd')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+nompd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+nompd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'quantite')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+qte[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+qte[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'numcom')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numcom[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numcom[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'resultat')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+result[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+result[i]+'</td>');
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

function SeletionListeInspectionEntreDate()
{
    var dateinf = $("#date_prt_inf").val();
    var datesup = $("#date_prt_sup").val();
    dateinf = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(dateinf);
    datesup = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(datesup);

    $.post('controller/PrintSelecteListeInspection.php',{inspectionselectedateinf:dateinf,inspectionselectedatesup:datesup}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var kilo = [];
        var numpd = [];
        var nompd = [];
        var qte = [];
        var numcom = [];
        var result = [];
        var recep = [];
        var vehicule = [];
        var client = [];
        var idate = 0;
        var ikilo = 0;
        var inumpd = 0;
        var inompd = 0;
        var iqte = 0;
        var inumcom = 0;
        var iresult = 0;
        var irecept = 0;
        var ivehicul = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionInspectionDate").val();
        var activevalkilo = $("#printTableListePositionInspectionKilo").val();
        var activevalnumpd = $("#printTableListePositionInspectionNumpd").val();
        var activevalnompd = $("#printTableListePositionInspectionNompd").val();
        var activevalqte = $("#printTableListePositionInspectionQte").val();
        var activevalnumcom = $("#printTableListePositionInspectionNumcom").val();
        var activevalresult = $("#printTableListePositionInspectionResult").val();
        var activevalrecep = $("#printTableListePositionInspectionRecep").val();
        var activevalvehicule = $("#printTableListePositionInspectionVehicule").val();
        var activevalclient = $("#printTableListePositionInspectionClient").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'kilometrage'){kilo[ikilo]=val;ikilo++;}
                if(ind == 'numpd'){numpd[inumpd]=val;inumpd++;}
                if(ind == 'nompd'){nompd[inompd]=val;inompd++;}
                if(ind == 'quantite'){qte[iqte]=val;iqte++;}
                if(ind == 'numcom'){numcom[inumcom]=val;inumcom++;}
                if(ind == 'resultat'){result[iresult]=val;iresult++;}
                if(ind == 'reception'){recep[irecept]=val;irecept++;}
                if(ind == 'vehicule'){vehicule[ivehicul]=val;ivehicul++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}

            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalkilo.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumpd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnompd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalqte.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumcom.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalresult.length != 0)
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
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }


        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalkilo.length != 0 && activevalkilo > nbrcoloneactive) || (activevalnumpd.length != 0 && activevalnumpd > nbrcoloneactive) || (activevalnompd.length != 0 && activevalnompd > nbrcoloneactive) || (activevalqte.length != 0 && activevalqte > nbrcoloneactive) || (activevalnumcom.length != 0 && activevalnumcom > nbrcoloneactive) || (activevalresult.length != 0 && activevalresult > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
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
                if(activevalkilo.length != 0)
                {
                    listecoloneactive[parseInt(activevalkilo)-1] = 'Kilom\351trage';
                    listecoloneactiveSend[parseInt(activevalkilo)-1] = 'kilometrage';
                }
                if(activevalnumpd.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumpd)-1] = 'N\260 P.D';
                    listecoloneactiveSend[parseInt(activevalnumpd)-1] = 'numpd';
                }
                if(activevalnompd.length != 0)
                {
                    listecoloneactive[parseInt(activevalnompd)-1] = 'Nom P.D';
                    listecoloneactiveSend[parseInt(activevalnompd)-1] = 'nompd';
                }
                if(activevalqte.length != 0)
                {
                    listecoloneactive[parseInt(activevalqte)-1] = 'Quantit\351';
                    listecoloneactiveSend[parseInt(activevalqte)-1] = 'quantite';
                }
                if(activevalnumcom.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumcom)-1] = 'N\351 COM';
                    listecoloneactiveSend[parseInt(activevalnumcom)-1] = 'numcom';
                }
                if(activevalresult.length != 0)
                {
                    listecoloneactive[parseInt(activevalresult)-1] = 'Resultat';
                    listecoloneactiveSend[parseInt(activevalresult)-1] = 'resultat';
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
                if(entete == 'Kilom\351trage')largeur = 8;
                if(entete == 'N\260 P.D')largeur = 10;
                if(entete == 'Nom P.D')largeur = 8;
                if(entete == 'Quantit\351')largeur = 8;
                if(entete == 'N\351 COM')largeur = 8;
                if(entete == 'Resultat')largeur = 10;
                if(entete == 'R\351ception')largeur = 10;
                if(entete == 'V\351ception')largeur = 10;
                if(entete == 'Client')largeur = 10;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'Kilom\351trage')largeur_impr = 5;
                if(entete == 'N\260 P.D')largeur_impr = 8;
                if(entete == 'Nom P.D')largeur_impr = 5;
                if(entete == 'Quantit\351')largeur_impr = 5;
                if(entete == 'N\351 COM')largeur_impr = 5;
                if(entete == 'Resultat')largeur_impr = 8;
                if(entete == 'R\351ception')largeur_impr = 8;
                if(entete == 'V\351hicule')largeur_impr = 8;
                if(entete == 'Client')largeur_impr = 8;

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
                    if(listecoloneactiveSend[j] == 'kilometrage')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+kilo[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+kilo[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'numpd')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numpd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numpd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'nompd')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+nompd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+nompd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'quantite')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+qte[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+qte[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'numcom')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numcom[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numcom[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'resultat')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+result[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+result[i]+'</td>');
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

function SeletionListeInspectionAutre()
{
    var option = $("#idexselectvaleurtri").val();
    var valeur = $("#idexinputvaleurtri").val();

    $.post('controller/PrintSelecteListeInspection.php',{option:option,valeur:valeur}, function (data) {

        data = $.parseJSON(data);

        var date = [];
        var kilo = [];
        var numpd = [];
        var nompd = [];
        var qte = [];
        var numcom = [];
        var result = [];
        var recep = [];
        var vehicule = [];
        var client = [];
        var idate = 0;
        var ikilo = 0;
        var inumpd = 0;
        var inompd = 0;
        var iqte = 0;
        var inumcom = 0;
        var iresult = 0;
        var irecept = 0;
        var ivehicul = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionInspectionDate").val();
        var activevalkilo = $("#printTableListePositionInspectionKilo").val();
        var activevalnumpd = $("#printTableListePositionInspectionNumpd").val();
        var activevalnompd = $("#printTableListePositionInspectionNompd").val();
        var activevalqte = $("#printTableListePositionInspectionQte").val();
        var activevalnumcom = $("#printTableListePositionInspectionNumcom").val();
        var activevalresult = $("#printTableListePositionInspectionResult").val();
        var activevalrecep = $("#printTableListePositionInspectionRecep").val();
        var activevalvehicule = $("#printTableListePositionInspectionVehicule").val();
        var activevalclient = $("#printTableListePositionInspectionClient").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'kilometrage'){kilo[ikilo]=val;ikilo++;}
                if(ind == 'numpd'){numpd[inumpd]=val;inumpd++;}
                if(ind == 'nompd'){nompd[inompd]=val;inompd++;}
                if(ind == 'quantite'){qte[iqte]=val;iqte++;}
                if(ind == 'numcom'){numcom[inumcom]=val;inumcom++;}
                if(ind == 'resultat'){result[iresult]=val;iresult++;}
                if(ind == 'reception'){recep[irecept]=val;irecept++;}
                if(ind == 'vehicule'){vehicule[ivehicul]=val;ivehicul++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}

            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalkilo.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumpd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnompd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalqte.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumcom.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalresult.length != 0)
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
        if(activevalclient.length != 0)
        {
            nbrcoloneactive += 1;
        }


        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalkilo.length != 0 && activevalkilo > nbrcoloneactive) || (activevalnumpd.length != 0 && activevalnumpd > nbrcoloneactive) || (activevalnompd.length != 0 && activevalnompd > nbrcoloneactive) || (activevalqte.length != 0 && activevalqte > nbrcoloneactive) || (activevalnumcom.length != 0 && activevalnumcom > nbrcoloneactive) || (activevalresult.length != 0 && activevalresult > nbrcoloneactive) || (activevalrecep.length != 0 && activevalrecep > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
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
                if(activevalkilo.length != 0)
                {
                    listecoloneactive[parseInt(activevalkilo)-1] = 'Kilom\351trage';
                    listecoloneactiveSend[parseInt(activevalkilo)-1] = 'kilometrage';
                }
                if(activevalnumpd.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumpd)-1] = 'N\260 P.D';
                    listecoloneactiveSend[parseInt(activevalnumpd)-1] = 'numpd';
                }
                if(activevalnompd.length != 0)
                {
                    listecoloneactive[parseInt(activevalnompd)-1] = 'Nom P.D';
                    listecoloneactiveSend[parseInt(activevalnompd)-1] = 'nompd';
                }
                if(activevalqte.length != 0)
                {
                    listecoloneactive[parseInt(activevalqte)-1] = 'Quantit\351';
                    listecoloneactiveSend[parseInt(activevalqte)-1] = 'quantite';
                }
                if(activevalnumcom.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumcom)-1] = 'N\351 COM';
                    listecoloneactiveSend[parseInt(activevalnumcom)-1] = 'numcom';
                }
                if(activevalresult.length != 0)
                {
                    listecoloneactive[parseInt(activevalresult)-1] = 'Resultat';
                    listecoloneactiveSend[parseInt(activevalresult)-1] = 'resultat';
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
                if(entete == 'Kilom\351trage')largeur = 8;
                if(entete == 'N\260 P.D')largeur = 10;
                if(entete == 'Nom P.D')largeur = 8;
                if(entete == 'Quantit\351')largeur = 8;
                if(entete == 'N\351 COM')largeur = 8;
                if(entete == 'Resultat')largeur = 10;
                if(entete == 'R\351ception')largeur = 10;
                if(entete == 'V\351ception')largeur = 10;
                if(entete == 'Client')largeur = 10;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'Kilom\351trage')largeur_impr = 5;
                if(entete == 'N\260 P.D')largeur_impr = 8;
                if(entete == 'Nom P.D')largeur_impr = 5;
                if(entete == 'Quantit\351')largeur_impr = 5;
                if(entete == 'N\351 COM')largeur_impr = 5;
                if(entete == 'Resultat')largeur_impr = 8;
                if(entete == 'R\351ception')largeur_impr = 8;
                if(entete == 'V\351hicule')largeur_impr = 8;
                if(entete == 'Client')largeur_impr = 8;

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
                    if(listecoloneactiveSend[j] == 'kilometrage')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+kilo[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+kilo[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'numpd')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numpd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numpd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'nompd')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+nompd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+nompd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'quantite')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+qte[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+qte[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'numcom')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numcom[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numcom[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'resultat')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+result[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+result[i]+'</td>');
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