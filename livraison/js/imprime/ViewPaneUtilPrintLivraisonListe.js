function SeletionListeLivraisonAvantDate()
{
    var date = $("#date_prt_inf").val();
    date = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(date);

    $.post('controller/PrintSelecteListeLivraison.php',{livraisonselectedateavant:date}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var heure = [];
        var taffait = [];
        var tafnonfait = [];
        var kilo = [];
        var garant = [];
        var facture = [];
        var montant = [];
        var reception = [];
        var vehicule = [];
        var client = [];
        var idate = 0;
        var iheure = 0;
        var itaffait = 0;
        var itafnonfait = 0;
        var ikilo = 0;
        var igar = 0;
        var ifact = 0;
        var imont = 0;
        var irecep = 0;
        var iveh = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionLivraisonDate").val();
        var activevalheure = $("#printTableListePositionLivraisonHeure").val();
        var activevaltaffait = $("#printTableListePositionLivraisonTaffait").val();
        var activevaltafnonfait = $("#printTableListePositionLivraisonTafnonfait").val();
        var activevalkilo = $("#printTableListePositionLivraisonKilo").val();
        var activevalgar = $("#printTableListePositionLivraisonDateG").val();
        var activevalfacture = $("#printTableListePositionLivraisonNumfact").val();
        var activevalmontant = $("#printTableListePositionLivraisonMontant").val();
        var activevalreception = $("#printTableListePositionLivraisonReception").val();
        var activevalvehicule = $("#printTableListePositionLivraisonVehicule").val();
        var activevalclient = $("#printTableListePositionLivraisonClent").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'heure'){heure[iheure]=val;iheure++;}
                if(ind == 'taffait'){taffait[itaffait]=val;itaffait++;}
                if(ind == 'tafnonfait'){tafnonfait[itafnonfait]=val;itafnonfait++;}
                if(ind == 'kilometrage'){kilo[ikilo]=val;ikilo++;}
                if(ind == 'garantie'){garant[igar]=val;igar++;}
                if(ind == 'facture'){facture[ifact]=val;ifact++;}
                if(ind == 'montant'){montant[imont]=val;imont++;}
                if(ind == 'reception'){reception[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalheure.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltaffait.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltafnonfait.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalkilo.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalgar.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalfacture.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalmontant.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalreception.length != 0)
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
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalheure.length != 0 && activevalheure > nbrcoloneactive) || (activevaltaffait.length != 0 && activevaltaffait > nbrcoloneactive) || (activevaltafnonfait.length != 0 && activevaltafnonfait > nbrcoloneactive) || (activevalkilo.length != 0 && activevalkilo > nbrcoloneactive) || (activevalgar.length != 0 && activevalgar > nbrcoloneactive) || (activevalfacture.length != 0 && activevalfacture > nbrcoloneactive) || (activevalmontant.length != 0 && activevalmontant > nbrcoloneactive) || (activevalreception.length != 0 && activevalreception > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
            {
                $(".messageh6").text('Le choix des position doit \352tre de nombre successif.');
                ConfirmationLose();
            }
            else
            {
                if(activevaldate.length != 0)
                {
                    listecoloneactive[parseInt(activevaldate)-1] = 'Date Livraison';
                    listecoloneactiveSend[parseInt(activevaldate)-1] = 'date';
                }
                if(activevalheure.length != 0)
                {
                    listecoloneactive[parseInt(activevalheure)-1] = 'Heure Livraison';
                    listecoloneactiveSend[parseInt(activevalheure)-1] = 'heure';
                }
                if(activevaltaffait.length != 0)
                {
                    listecoloneactive[parseInt(activevaltaffait)-1] = 'Travaux R\351alis\351s';
                    listecoloneactiveSend[parseInt(activevaltaffait)-1] = 'taffait';
                }
                if(activevaltafnonfait.length != 0)
                {
                    listecoloneactive[parseInt(activevaltafnonfait)-1] = 'Travaux Non R\351alis\351s';
                    listecoloneactiveSend[parseInt(activevaltafnonfait)-1] = 'tafnonfait';
                }
                if(activevalkilo.length != 0)
                {
                    listecoloneactive[parseInt(activevalkilo)-1] = 'Kilom\351trage';
                    listecoloneactiveSend[parseInt(activevalkilo)-1] = 'kilometrage';
                }
                if(activevalgar.length != 0)
                {
                    listecoloneactive[parseInt(activevalgar)-1] = 'Garatie';
                    listecoloneactiveSend[parseInt(activevalgar)-1] = 'garantie';
                }
                if(activevalfacture.length != 0)
                {
                    listecoloneactive[parseInt(activevalfacture)-1] = 'N\260 Facture';
                    listecoloneactiveSend[parseInt(activevalfacture)-1] = 'facture';
                }
                if(activevalmontant.length != 0)
                {
                    listecoloneactive[parseInt(activevalmontant)-1] = 'Montant';
                    listecoloneactiveSend[parseInt(activevalmontant)-1] = 'montant';
                }
                if(activevalreception.length != 0)
                {
                    listecoloneactive[parseInt(activevalreception)-1] = 'N\260 R\351ception';
                    listecoloneactiveSend[parseInt(activevalreception)-1] = 'reception';
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

                if(entete == 'Date Livraison')largeur = 8;
                if(entete == 'Heure Livraison')largeur = 8;
                if(entete == 'Travaux R\351alis\351s')largeur = 10;
                if(entete == 'Travaux Non R\351alis\351s')largeur = 8;
                if(entete == 'Kilom\351trage')largeur = 8;
                if(entete == 'Garatie')largeur = 8;
                if(entete == 'N\260 Facture')largeur = 10;
                if(entete == 'Montant')largeur = 8;
                if(entete == 'N\260 R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;
                if(entete == 'Client')largeur = 8;

                if(entete == 'Date Livraison')largeur_impr = 5;
                if(entete == 'Heure Livraison')largeur_impr = 5;
                if(entete == 'Travaux R\351alis\351s')largeur_impr = 8;
                if(entete == 'Travaux Non R\351alis\351s')largeur_impr = 5;
                if(entete == 'Kilom\351trage')largeur_impr = 5;
                if(entete == 'Garatie')largeur_impr = 5;
                if(entete == 'N\260 Facture')largeur_impr = 8;
                if(entete == 'Montant')largeur_impr = 5;
                if(entete == 'N\260 R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;
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
                    if(listecoloneactiveSend[j] == 'heure')
                    {
                        var lheure = heure[i];
                        if(lheure == '00-00-00')lheure = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lheure+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lheure+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'taffait')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+taffait[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+taffait[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'tafnonfait')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tafnonfait[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tafnonfait[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'kilometrage')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+kilo[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+kilo[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'garantie')
                    {
                        var lgarant = garant[i];
                        if(lgarant == '1000-10-10')lgarant = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lgarant+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lgarant+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'facture')
                    {
                        var lfacture = facture[i];
                        if(lfacture == '0000')lfacture = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lfacture+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lfacture+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'montant')
                    {
                        var lmontant = montant[i];
                        if(lmontant == '0000')lmontant = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lmontant+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lmontant+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'reception')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+reception[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+reception[i]+'</td>');
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

function SeletionListeLivraisonApresDate()
{
    var date = $("#date_prt_inf").val();
    date = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(date);

    $.post('controller/PrintSelecteListeLivraison.php',{livraisonselectedateapres:date}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var heure = [];
        var taffait = [];
        var tafnonfait = [];
        var kilo = [];
        var garant = [];
        var facture = [];
        var montant = [];
        var reception = [];
        var vehicule = [];
        var client = [];
        var idate = 0;
        var iheure = 0;
        var itaffait = 0;
        var itafnonfait = 0;
        var ikilo = 0;
        var igar = 0;
        var ifact = 0;
        var imont = 0;
        var irecep = 0;
        var iveh = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionLivraisonDate").val();
        var activevalheure = $("#printTableListePositionLivraisonHeure").val();
        var activevaltaffait = $("#printTableListePositionLivraisonTaffait").val();
        var activevaltafnonfait = $("#printTableListePositionLivraisonTafnonfait").val();
        var activevalkilo = $("#printTableListePositionLivraisonKilo").val();
        var activevalgar = $("#printTableListePositionLivraisonDateG").val();
        var activevalfacture = $("#printTableListePositionLivraisonNumfact").val();
        var activevalmontant = $("#printTableListePositionLivraisonMontant").val();
        var activevalreception = $("#printTableListePositionLivraisonReception").val();
        var activevalvehicule = $("#printTableListePositionLivraisonVehicule").val();
        var activevalclient = $("#printTableListePositionLivraisonClent").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'heure'){heure[iheure]=val;iheure++;}
                if(ind == 'taffait'){taffait[itaffait]=val;itaffait++;}
                if(ind == 'tafnonfait'){tafnonfait[itafnonfait]=val;itafnonfait++;}
                if(ind == 'kilometrage'){kilo[ikilo]=val;ikilo++;}
                if(ind == 'garantie'){garant[igar]=val;igar++;}
                if(ind == 'facture'){facture[ifact]=val;ifact++;}
                if(ind == 'montant'){montant[imont]=val;imont++;}
                if(ind == 'reception'){reception[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalheure.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltaffait.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltafnonfait.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalkilo.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalgar.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalfacture.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalmontant.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalreception.length != 0)
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
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalheure.length != 0 && activevalheure > nbrcoloneactive) || (activevaltaffait.length != 0 && activevaltaffait > nbrcoloneactive) || (activevaltafnonfait.length != 0 && activevaltafnonfait > nbrcoloneactive) || (activevalkilo.length != 0 && activevalkilo > nbrcoloneactive) || (activevalgar.length != 0 && activevalgar > nbrcoloneactive) || (activevalfacture.length != 0 && activevalfacture > nbrcoloneactive) || (activevalmontant.length != 0 && activevalmontant > nbrcoloneactive) || (activevalreception.length != 0 && activevalreception > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
            {
                $(".messageh6").text('Le choix des position doit \352tre de nombre successif.');
                ConfirmationLose();
            }
            else
            {
                if(activevaldate.length != 0)
                {
                    listecoloneactive[parseInt(activevaldate)-1] = 'Date Livraison';
                    listecoloneactiveSend[parseInt(activevaldate)-1] = 'date';
                }
                if(activevalheure.length != 0)
                {
                    listecoloneactive[parseInt(activevalheure)-1] = 'Heure Livraison';
                    listecoloneactiveSend[parseInt(activevalheure)-1] = 'heure';
                }
                if(activevaltaffait.length != 0)
                {
                    listecoloneactive[parseInt(activevaltaffait)-1] = 'Travaux R\351alis\351s';
                    listecoloneactiveSend[parseInt(activevaltaffait)-1] = 'taffait';
                }
                if(activevaltafnonfait.length != 0)
                {
                    listecoloneactive[parseInt(activevaltafnonfait)-1] = 'Travaux Non R\351alis\351s';
                    listecoloneactiveSend[parseInt(activevaltafnonfait)-1] = 'tafnonfait';
                }
                if(activevalkilo.length != 0)
                {
                    listecoloneactive[parseInt(activevalkilo)-1] = 'Kilom\351trage';
                    listecoloneactiveSend[parseInt(activevalkilo)-1] = 'kilometrage';
                }
                if(activevalgar.length != 0)
                {
                    listecoloneactive[parseInt(activevalgar)-1] = 'Garatie';
                    listecoloneactiveSend[parseInt(activevalgar)-1] = 'garantie';
                }
                if(activevalfacture.length != 0)
                {
                    listecoloneactive[parseInt(activevalfacture)-1] = 'N\260 Facture';
                    listecoloneactiveSend[parseInt(activevalfacture)-1] = 'facture';
                }
                if(activevalmontant.length != 0)
                {
                    listecoloneactive[parseInt(activevalmontant)-1] = 'Montant';
                    listecoloneactiveSend[parseInt(activevalmontant)-1] = 'montant';
                }
                if(activevalreception.length != 0)
                {
                    listecoloneactive[parseInt(activevalreception)-1] = 'N\260 R\351ception';
                    listecoloneactiveSend[parseInt(activevalreception)-1] = 'reception';
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

                if(entete == 'Date Livraison')largeur = 8;
                if(entete == 'Heure Livraison')largeur = 8;
                if(entete == 'Travaux R\351alis\351s')largeur = 10;
                if(entete == 'Travaux Non R\351alis\351s')largeur = 8;
                if(entete == 'Kilom\351trage')largeur = 8;
                if(entete == 'Garatie')largeur = 8;
                if(entete == 'N\260 Facture')largeur = 10;
                if(entete == 'Montant')largeur = 8;
                if(entete == 'N\260 R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;
                if(entete == 'Client')largeur = 8;

                if(entete == 'Date Livraison')largeur_impr = 5;
                if(entete == 'Heure Livraison')largeur_impr = 5;
                if(entete == 'Travaux R\351alis\351s')largeur_impr = 8;
                if(entete == 'Travaux Non R\351alis\351s')largeur_impr = 5;
                if(entete == 'Kilom\351trage')largeur_impr = 5;
                if(entete == 'Garatie')largeur_impr = 5;
                if(entete == 'N\260 Facture')largeur_impr = 8;
                if(entete == 'Montant')largeur_impr = 5;
                if(entete == 'N\260 R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;
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
                    if(listecoloneactiveSend[j] == 'heure')
                    {
                        var lheure = heure[i];
                        if(lheure == '00-00-00')lheure = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lheure+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lheure+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'taffait')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+taffait[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+taffait[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'tafnonfait')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tafnonfait[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tafnonfait[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'kilometrage')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+kilo[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+kilo[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'garantie')
                    {
                        var lgarant = garant[i];
                        if(lgarant == '1000-10-10')lgarant = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lgarant+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lgarant+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'facture')
                    {
                        var lfacture = facture[i];
                        if(lfacture == '0000')lfacture = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lfacture+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lfacture+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'montant')
                    {
                        var lmontant = montant[i];
                        if(lmontant == '0000')lmontant = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lmontant+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lmontant+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'reception')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+reception[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+reception[i]+'</td>');
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

function SeletionListeLivraisonExtremeDate()
{
    var date = $("#date_prt_inf").val();
    date = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(date);

    $.post('controller/PrintSelecteListeLivraison.php',{livraisonselectedateextreme:date}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var heure = [];
        var taffait = [];
        var tafnonfait = [];
        var kilo = [];
        var garant = [];
        var facture = [];
        var montant = [];
        var reception = [];
        var vehicule = [];
        var client = [];
        var idate = 0;
        var iheure = 0;
        var itaffait = 0;
        var itafnonfait = 0;
        var ikilo = 0;
        var igar = 0;
        var ifact = 0;
        var imont = 0;
        var irecep = 0;
        var iveh = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionLivraisonDate").val();
        var activevalheure = $("#printTableListePositionLivraisonHeure").val();
        var activevaltaffait = $("#printTableListePositionLivraisonTaffait").val();
        var activevaltafnonfait = $("#printTableListePositionLivraisonTafnonfait").val();
        var activevalkilo = $("#printTableListePositionLivraisonKilo").val();
        var activevalgar = $("#printTableListePositionLivraisonDateG").val();
        var activevalfacture = $("#printTableListePositionLivraisonNumfact").val();
        var activevalmontant = $("#printTableListePositionLivraisonMontant").val();
        var activevalreception = $("#printTableListePositionLivraisonReception").val();
        var activevalvehicule = $("#printTableListePositionLivraisonVehicule").val();
        var activevalclient = $("#printTableListePositionLivraisonClent").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'heure'){heure[iheure]=val;iheure++;}
                if(ind == 'taffait'){taffait[itaffait]=val;itaffait++;}
                if(ind == 'tafnonfait'){tafnonfait[itafnonfait]=val;itafnonfait++;}
                if(ind == 'kilometrage'){kilo[ikilo]=val;ikilo++;}
                if(ind == 'garantie'){garant[igar]=val;igar++;}
                if(ind == 'facture'){facture[ifact]=val;ifact++;}
                if(ind == 'montant'){montant[imont]=val;imont++;}
                if(ind == 'reception'){reception[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalheure.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltaffait.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltafnonfait.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalkilo.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalgar.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalfacture.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalmontant.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalreception.length != 0)
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
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalheure.length != 0 && activevalheure > nbrcoloneactive) || (activevaltaffait.length != 0 && activevaltaffait > nbrcoloneactive) || (activevaltafnonfait.length != 0 && activevaltafnonfait > nbrcoloneactive) || (activevalkilo.length != 0 && activevalkilo > nbrcoloneactive) || (activevalgar.length != 0 && activevalgar > nbrcoloneactive) || (activevalfacture.length != 0 && activevalfacture > nbrcoloneactive) || (activevalmontant.length != 0 && activevalmontant > nbrcoloneactive) || (activevalreception.length != 0 && activevalreception > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
            {
                $(".messageh6").text('Le choix des position doit \352tre de nombre successif.');
                ConfirmationLose();
            }
            else
            {
                if(activevaldate.length != 0)
                {
                    listecoloneactive[parseInt(activevaldate)-1] = 'Date Livraison';
                    listecoloneactiveSend[parseInt(activevaldate)-1] = 'date';
                }
                if(activevalheure.length != 0)
                {
                    listecoloneactive[parseInt(activevalheure)-1] = 'Heure Livraison';
                    listecoloneactiveSend[parseInt(activevalheure)-1] = 'heure';
                }
                if(activevaltaffait.length != 0)
                {
                    listecoloneactive[parseInt(activevaltaffait)-1] = 'Travaux R\351alis\351s';
                    listecoloneactiveSend[parseInt(activevaltaffait)-1] = 'taffait';
                }
                if(activevaltafnonfait.length != 0)
                {
                    listecoloneactive[parseInt(activevaltafnonfait)-1] = 'Travaux Non R\351alis\351s';
                    listecoloneactiveSend[parseInt(activevaltafnonfait)-1] = 'tafnonfait';
                }
                if(activevalkilo.length != 0)
                {
                    listecoloneactive[parseInt(activevalkilo)-1] = 'Kilom\351trage';
                    listecoloneactiveSend[parseInt(activevalkilo)-1] = 'kilometrage';
                }
                if(activevalgar.length != 0)
                {
                    listecoloneactive[parseInt(activevalgar)-1] = 'Garatie';
                    listecoloneactiveSend[parseInt(activevalgar)-1] = 'garantie';
                }
                if(activevalfacture.length != 0)
                {
                    listecoloneactive[parseInt(activevalfacture)-1] = 'N\260 Facture';
                    listecoloneactiveSend[parseInt(activevalfacture)-1] = 'facture';
                }
                if(activevalmontant.length != 0)
                {
                    listecoloneactive[parseInt(activevalmontant)-1] = 'Montant';
                    listecoloneactiveSend[parseInt(activevalmontant)-1] = 'montant';
                }
                if(activevalreception.length != 0)
                {
                    listecoloneactive[parseInt(activevalreception)-1] = 'N\260 R\351ception';
                    listecoloneactiveSend[parseInt(activevalreception)-1] = 'reception';
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

                if(entete == 'Date Livraison')largeur = 8;
                if(entete == 'Heure Livraison')largeur = 8;
                if(entete == 'Travaux R\351alis\351s')largeur = 10;
                if(entete == 'Travaux Non R\351alis\351s')largeur = 8;
                if(entete == 'Kilom\351trage')largeur = 8;
                if(entete == 'Garatie')largeur = 8;
                if(entete == 'N\260 Facture')largeur = 10;
                if(entete == 'Montant')largeur = 8;
                if(entete == 'N\260 R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;
                if(entete == 'Client')largeur = 8;

                if(entete == 'Date Livraison')largeur_impr = 5;
                if(entete == 'Heure Livraison')largeur_impr = 5;
                if(entete == 'Travaux R\351alis\351s')largeur_impr = 8;
                if(entete == 'Travaux Non R\351alis\351s')largeur_impr = 5;
                if(entete == 'Kilom\351trage')largeur_impr = 5;
                if(entete == 'Garatie')largeur_impr = 5;
                if(entete == 'N\260 Facture')largeur_impr = 8;
                if(entete == 'Montant')largeur_impr = 5;
                if(entete == 'N\260 R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;
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
                    if(listecoloneactiveSend[j] == 'heure')
                    {
                        var lheure = heure[i];
                        if(lheure == '00-00-00')lheure = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lheure+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lheure+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'taffait')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+taffait[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+taffait[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'tafnonfait')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tafnonfait[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tafnonfait[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'kilometrage')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+kilo[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+kilo[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'garantie')
                    {
                        var lgarant = garant[i];
                        if(lgarant == '1000-10-10')lgarant = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lgarant+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lgarant+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'facture')
                    {
                        var lfacture = facture[i];
                        if(lfacture == '0000')lfacture = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lfacture+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lfacture+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'montant')
                    {
                        var lmontant = montant[i];
                        if(lmontant == '0000')lmontant = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lmontant+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lmontant+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'reception')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+reception[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+reception[i]+'</td>');
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

function SeletionListeLivraisonAdmisDate()
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

    $.post('controller/PrintSelecteListeLivraison.php',{livraisonselectedateadmise:liste}, function (data) {

        data = $.parseJSON(data);

        var date = [];
        var heure = [];
        var taffait = [];
        var tafnonfait = [];
        var kilo = [];
        var garant = [];
        var facture = [];
        var montant = [];
        var reception = [];
        var vehicule = [];
        var client = [];
        var idate = 0;
        var iheure = 0;
        var itaffait = 0;
        var itafnonfait = 0;
        var ikilo = 0;
        var igar = 0;
        var ifact = 0;
        var imont = 0;
        var irecep = 0;
        var iveh = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionLivraisonDate").val();
        var activevalheure = $("#printTableListePositionLivraisonHeure").val();
        var activevaltaffait = $("#printTableListePositionLivraisonTaffait").val();
        var activevaltafnonfait = $("#printTableListePositionLivraisonTafnonfait").val();
        var activevalkilo = $("#printTableListePositionLivraisonKilo").val();
        var activevalgar = $("#printTableListePositionLivraisonDateG").val();
        var activevalfacture = $("#printTableListePositionLivraisonNumfact").val();
        var activevalmontant = $("#printTableListePositionLivraisonMontant").val();
        var activevalreception = $("#printTableListePositionLivraisonReception").val();
        var activevalvehicule = $("#printTableListePositionLivraisonVehicule").val();
        var activevalclient = $("#printTableListePositionLivraisonClent").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'heure'){heure[iheure]=val;iheure++;}
                if(ind == 'taffait'){taffait[itaffait]=val;itaffait++;}
                if(ind == 'tafnonfait'){tafnonfait[itafnonfait]=val;itafnonfait++;}
                if(ind == 'kilometrage'){kilo[ikilo]=val;ikilo++;}
                if(ind == 'garantie'){garant[igar]=val;igar++;}
                if(ind == 'facture'){facture[ifact]=val;ifact++;}
                if(ind == 'montant'){montant[imont]=val;imont++;}
                if(ind == 'reception'){reception[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalheure.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltaffait.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltafnonfait.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalkilo.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalgar.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalfacture.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalmontant.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalreception.length != 0)
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
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalheure.length != 0 && activevalheure > nbrcoloneactive) || (activevaltaffait.length != 0 && activevaltaffait > nbrcoloneactive) || (activevaltafnonfait.length != 0 && activevaltafnonfait > nbrcoloneactive) || (activevalkilo.length != 0 && activevalkilo > nbrcoloneactive) || (activevalgar.length != 0 && activevalgar > nbrcoloneactive) || (activevalfacture.length != 0 && activevalfacture > nbrcoloneactive) || (activevalmontant.length != 0 && activevalmontant > nbrcoloneactive) || (activevalreception.length != 0 && activevalreception > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
            {
                $(".messageh6").text('Le choix des position doit \352tre de nombre successif.');
                ConfirmationLose();
            }
            else
            {
                if(activevaldate.length != 0)
                {
                    listecoloneactive[parseInt(activevaldate)-1] = 'Date Livraison';
                    listecoloneactiveSend[parseInt(activevaldate)-1] = 'date';
                }
                if(activevalheure.length != 0)
                {
                    listecoloneactive[parseInt(activevalheure)-1] = 'Heure Livraison';
                    listecoloneactiveSend[parseInt(activevalheure)-1] = 'heure';
                }
                if(activevaltaffait.length != 0)
                {
                    listecoloneactive[parseInt(activevaltaffait)-1] = 'Travaux R\351alis\351s';
                    listecoloneactiveSend[parseInt(activevaltaffait)-1] = 'taffait';
                }
                if(activevaltafnonfait.length != 0)
                {
                    listecoloneactive[parseInt(activevaltafnonfait)-1] = 'Travaux Non R\351alis\351s';
                    listecoloneactiveSend[parseInt(activevaltafnonfait)-1] = 'tafnonfait';
                }
                if(activevalkilo.length != 0)
                {
                    listecoloneactive[parseInt(activevalkilo)-1] = 'Kilom\351trage';
                    listecoloneactiveSend[parseInt(activevalkilo)-1] = 'kilometrage';
                }
                if(activevalgar.length != 0)
                {
                    listecoloneactive[parseInt(activevalgar)-1] = 'Garatie';
                    listecoloneactiveSend[parseInt(activevalgar)-1] = 'garantie';
                }
                if(activevalfacture.length != 0)
                {
                    listecoloneactive[parseInt(activevalfacture)-1] = 'N\260 Facture';
                    listecoloneactiveSend[parseInt(activevalfacture)-1] = 'facture';
                }
                if(activevalmontant.length != 0)
                {
                    listecoloneactive[parseInt(activevalmontant)-1] = 'Montant';
                    listecoloneactiveSend[parseInt(activevalmontant)-1] = 'montant';
                }
                if(activevalreception.length != 0)
                {
                    listecoloneactive[parseInt(activevalreception)-1] = 'N\260 R\351ception';
                    listecoloneactiveSend[parseInt(activevalreception)-1] = 'reception';
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

                if(entete == 'Date Livraison')largeur = 8;
                if(entete == 'Heure Livraison')largeur = 8;
                if(entete == 'Travaux R\351alis\351s')largeur = 10;
                if(entete == 'Travaux Non R\351alis\351s')largeur = 8;
                if(entete == 'Kilom\351trage')largeur = 8;
                if(entete == 'Garatie')largeur = 8;
                if(entete == 'N\260 Facture')largeur = 10;
                if(entete == 'Montant')largeur = 8;
                if(entete == 'N\260 R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;
                if(entete == 'Client')largeur = 8;

                if(entete == 'Date Livraison')largeur_impr = 5;
                if(entete == 'Heure Livraison')largeur_impr = 5;
                if(entete == 'Travaux R\351alis\351s')largeur_impr = 8;
                if(entete == 'Travaux Non R\351alis\351s')largeur_impr = 5;
                if(entete == 'Kilom\351trage')largeur_impr = 5;
                if(entete == 'Garatie')largeur_impr = 5;
                if(entete == 'N\260 Facture')largeur_impr = 8;
                if(entete == 'Montant')largeur_impr = 5;
                if(entete == 'N\260 R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;
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
                    if(listecoloneactiveSend[j] == 'heure')
                    {
                        var lheure = heure[i];
                        if(lheure == '00-00-00')lheure = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lheure+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lheure+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'taffait')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+taffait[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+taffait[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'tafnonfait')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tafnonfait[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tafnonfait[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'kilometrage')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+kilo[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+kilo[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'garantie')
                    {
                        var lgarant = garant[i];
                        if(lgarant == '1000-10-10')lgarant = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lgarant+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lgarant+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'facture')
                    {
                        var lfacture = facture[i];
                        if(lfacture == '0000')lfacture = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lfacture+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lfacture+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'montant')
                    {
                        var lmontant = montant[i];
                        if(lmontant == '0000')lmontant = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lmontant+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lmontant+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'reception')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+reception[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+reception[i]+'</td>');
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

function SeletionListeLivraisonExclutDate()
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

    $.post('controller/PrintSelecteListeLivraison.php',{livraisonselectedateexclut:liste}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var heure = [];
        var taffait = [];
        var tafnonfait = [];
        var kilo = [];
        var garant = [];
        var facture = [];
        var montant = [];
        var reception = [];
        var vehicule = [];
        var client = [];
        var idate = 0;
        var iheure = 0;
        var itaffait = 0;
        var itafnonfait = 0;
        var ikilo = 0;
        var igar = 0;
        var ifact = 0;
        var imont = 0;
        var irecep = 0;
        var iveh = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionLivraisonDate").val();
        var activevalheure = $("#printTableListePositionLivraisonHeure").val();
        var activevaltaffait = $("#printTableListePositionLivraisonTaffait").val();
        var activevaltafnonfait = $("#printTableListePositionLivraisonTafnonfait").val();
        var activevalkilo = $("#printTableListePositionLivraisonKilo").val();
        var activevalgar = $("#printTableListePositionLivraisonDateG").val();
        var activevalfacture = $("#printTableListePositionLivraisonNumfact").val();
        var activevalmontant = $("#printTableListePositionLivraisonMontant").val();
        var activevalreception = $("#printTableListePositionLivraisonReception").val();
        var activevalvehicule = $("#printTableListePositionLivraisonVehicule").val();
        var activevalclient = $("#printTableListePositionLivraisonClent").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'heure'){heure[iheure]=val;iheure++;}
                if(ind == 'taffait'){taffait[itaffait]=val;itaffait++;}
                if(ind == 'tafnonfait'){tafnonfait[itafnonfait]=val;itafnonfait++;}
                if(ind == 'kilometrage'){kilo[ikilo]=val;ikilo++;}
                if(ind == 'garantie'){garant[igar]=val;igar++;}
                if(ind == 'facture'){facture[ifact]=val;ifact++;}
                if(ind == 'montant'){montant[imont]=val;imont++;}
                if(ind == 'reception'){reception[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalheure.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltaffait.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltafnonfait.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalkilo.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalgar.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalfacture.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalmontant.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalreception.length != 0)
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
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalheure.length != 0 && activevalheure > nbrcoloneactive) || (activevaltaffait.length != 0 && activevaltaffait > nbrcoloneactive) || (activevaltafnonfait.length != 0 && activevaltafnonfait > nbrcoloneactive) || (activevalkilo.length != 0 && activevalkilo > nbrcoloneactive) || (activevalgar.length != 0 && activevalgar > nbrcoloneactive) || (activevalfacture.length != 0 && activevalfacture > nbrcoloneactive) || (activevalmontant.length != 0 && activevalmontant > nbrcoloneactive) || (activevalreception.length != 0 && activevalreception > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
            {
                $(".messageh6").text('Le choix des position doit \352tre de nombre successif.');
                ConfirmationLose();
            }
            else
            {
                if(activevaldate.length != 0)
                {
                    listecoloneactive[parseInt(activevaldate)-1] = 'Date Livraison';
                    listecoloneactiveSend[parseInt(activevaldate)-1] = 'date';
                }
                if(activevalheure.length != 0)
                {
                    listecoloneactive[parseInt(activevalheure)-1] = 'Heure Livraison';
                    listecoloneactiveSend[parseInt(activevalheure)-1] = 'heure';
                }
                if(activevaltaffait.length != 0)
                {
                    listecoloneactive[parseInt(activevaltaffait)-1] = 'Travaux R\351alis\351s';
                    listecoloneactiveSend[parseInt(activevaltaffait)-1] = 'taffait';
                }
                if(activevaltafnonfait.length != 0)
                {
                    listecoloneactive[parseInt(activevaltafnonfait)-1] = 'Travaux Non R\351alis\351s';
                    listecoloneactiveSend[parseInt(activevaltafnonfait)-1] = 'tafnonfait';
                }
                if(activevalkilo.length != 0)
                {
                    listecoloneactive[parseInt(activevalkilo)-1] = 'Kilom\351trage';
                    listecoloneactiveSend[parseInt(activevalkilo)-1] = 'kilometrage';
                }
                if(activevalgar.length != 0)
                {
                    listecoloneactive[parseInt(activevalgar)-1] = 'Garatie';
                    listecoloneactiveSend[parseInt(activevalgar)-1] = 'garantie';
                }
                if(activevalfacture.length != 0)
                {
                    listecoloneactive[parseInt(activevalfacture)-1] = 'N\260 Facture';
                    listecoloneactiveSend[parseInt(activevalfacture)-1] = 'facture';
                }
                if(activevalmontant.length != 0)
                {
                    listecoloneactive[parseInt(activevalmontant)-1] = 'Montant';
                    listecoloneactiveSend[parseInt(activevalmontant)-1] = 'montant';
                }
                if(activevalreception.length != 0)
                {
                    listecoloneactive[parseInt(activevalreception)-1] = 'N\260 R\351ception';
                    listecoloneactiveSend[parseInt(activevalreception)-1] = 'reception';
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

                if(entete == 'Date Livraison')largeur = 8;
                if(entete == 'Heure Livraison')largeur = 8;
                if(entete == 'Travaux R\351alis\351s')largeur = 10;
                if(entete == 'Travaux Non R\351alis\351s')largeur = 8;
                if(entete == 'Kilom\351trage')largeur = 8;
                if(entete == 'Garatie')largeur = 8;
                if(entete == 'N\260 Facture')largeur = 10;
                if(entete == 'Montant')largeur = 8;
                if(entete == 'N\260 R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;
                if(entete == 'Client')largeur = 8;

                if(entete == 'Date Livraison')largeur_impr = 5;
                if(entete == 'Heure Livraison')largeur_impr = 5;
                if(entete == 'Travaux R\351alis\351s')largeur_impr = 8;
                if(entete == 'Travaux Non R\351alis\351s')largeur_impr = 5;
                if(entete == 'Kilom\351trage')largeur_impr = 5;
                if(entete == 'Garatie')largeur_impr = 5;
                if(entete == 'N\260 Facture')largeur_impr = 8;
                if(entete == 'Montant')largeur_impr = 5;
                if(entete == 'N\260 R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;
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
                    if(listecoloneactiveSend[j] == 'heure')
                    {
                        var lheure = heure[i];
                        if(lheure == '00-00-00')lheure = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lheure+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lheure+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'taffait')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+taffait[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+taffait[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'tafnonfait')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tafnonfait[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tafnonfait[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'kilometrage')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+kilo[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+kilo[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'garantie')
                    {
                        var lgarant = garant[i];
                        if(lgarant == '1000-10-10')lgarant = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lgarant+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lgarant+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'facture')
                    {
                        var lfacture = facture[i];
                        if(lfacture == '0000')lfacture = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lfacture+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lfacture+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'montant')
                    {
                        var lmontant = montant[i];
                        if(lmontant == '0000')lmontant = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lmontant+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lmontant+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'reception')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+reception[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+reception[i]+'</td>');
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

function SeletionListeLivraisonEntreDate()
{
    var dateinf = $("#date_prt_inf").val();
    var datesup = $("#date_prt_sup").val();
    dateinf = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(dateinf);
    datesup = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(datesup);

    $.post('controller/PrintSelecteListeLivraison.php',{livraisonselectedateinf:dateinf,livraisonselectedatesup:datesup}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var heure = [];
        var taffait = [];
        var tafnonfait = [];
        var kilo = [];
        var garant = [];
        var facture = [];
        var montant = [];
        var reception = [];
        var vehicule = [];
        var client = [];
        var idate = 0;
        var iheure = 0;
        var itaffait = 0;
        var itafnonfait = 0;
        var ikilo = 0;
        var igar = 0;
        var ifact = 0;
        var imont = 0;
        var irecep = 0;
        var iveh = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionLivraisonDate").val();
        var activevalheure = $("#printTableListePositionLivraisonHeure").val();
        var activevaltaffait = $("#printTableListePositionLivraisonTaffait").val();
        var activevaltafnonfait = $("#printTableListePositionLivraisonTafnonfait").val();
        var activevalkilo = $("#printTableListePositionLivraisonKilo").val();
        var activevalgar = $("#printTableListePositionLivraisonDateG").val();
        var activevalfacture = $("#printTableListePositionLivraisonNumfact").val();
        var activevalmontant = $("#printTableListePositionLivraisonMontant").val();
        var activevalreception = $("#printTableListePositionLivraisonReception").val();
        var activevalvehicule = $("#printTableListePositionLivraisonVehicule").val();
        var activevalclient = $("#printTableListePositionLivraisonClent").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'heure'){heure[iheure]=val;iheure++;}
                if(ind == 'taffait'){taffait[itaffait]=val;itaffait++;}
                if(ind == 'tafnonfait'){tafnonfait[itafnonfait]=val;itafnonfait++;}
                if(ind == 'kilometrage'){kilo[ikilo]=val;ikilo++;}
                if(ind == 'garantie'){garant[igar]=val;igar++;}
                if(ind == 'facture'){facture[ifact]=val;ifact++;}
                if(ind == 'montant'){montant[imont]=val;imont++;}
                if(ind == 'reception'){reception[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalheure.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltaffait.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltafnonfait.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalkilo.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalgar.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalfacture.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalmontant.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalreception.length != 0)
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
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalheure.length != 0 && activevalheure > nbrcoloneactive) || (activevaltaffait.length != 0 && activevaltaffait > nbrcoloneactive) || (activevaltafnonfait.length != 0 && activevaltafnonfait > nbrcoloneactive) || (activevalkilo.length != 0 && activevalkilo > nbrcoloneactive) || (activevalgar.length != 0 && activevalgar > nbrcoloneactive) || (activevalfacture.length != 0 && activevalfacture > nbrcoloneactive) || (activevalmontant.length != 0 && activevalmontant > nbrcoloneactive) || (activevalreception.length != 0 && activevalreception > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
            {
                $(".messageh6").text('Le choix des position doit \352tre de nombre successif.');
                ConfirmationLose();
            }
            else
            {
                if(activevaldate.length != 0)
                {
                    listecoloneactive[parseInt(activevaldate)-1] = 'Date Livraison';
                    listecoloneactiveSend[parseInt(activevaldate)-1] = 'date';
                }
                if(activevalheure.length != 0)
                {
                    listecoloneactive[parseInt(activevalheure)-1] = 'Heure Livraison';
                    listecoloneactiveSend[parseInt(activevalheure)-1] = 'heure';
                }
                if(activevaltaffait.length != 0)
                {
                    listecoloneactive[parseInt(activevaltaffait)-1] = 'Travaux R\351alis\351s';
                    listecoloneactiveSend[parseInt(activevaltaffait)-1] = 'taffait';
                }
                if(activevaltafnonfait.length != 0)
                {
                    listecoloneactive[parseInt(activevaltafnonfait)-1] = 'Travaux Non R\351alis\351s';
                    listecoloneactiveSend[parseInt(activevaltafnonfait)-1] = 'tafnonfait';
                }
                if(activevalkilo.length != 0)
                {
                    listecoloneactive[parseInt(activevalkilo)-1] = 'Kilom\351trage';
                    listecoloneactiveSend[parseInt(activevalkilo)-1] = 'kilometrage';
                }
                if(activevalgar.length != 0)
                {
                    listecoloneactive[parseInt(activevalgar)-1] = 'Garatie';
                    listecoloneactiveSend[parseInt(activevalgar)-1] = 'garantie';
                }
                if(activevalfacture.length != 0)
                {
                    listecoloneactive[parseInt(activevalfacture)-1] = 'N\260 Facture';
                    listecoloneactiveSend[parseInt(activevalfacture)-1] = 'facture';
                }
                if(activevalmontant.length != 0)
                {
                    listecoloneactive[parseInt(activevalmontant)-1] = 'Montant';
                    listecoloneactiveSend[parseInt(activevalmontant)-1] = 'montant';
                }
                if(activevalreception.length != 0)
                {
                    listecoloneactive[parseInt(activevalreception)-1] = 'N\260 R\351ception';
                    listecoloneactiveSend[parseInt(activevalreception)-1] = 'reception';
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

                if(entete == 'Date Livraison')largeur = 8;
                if(entete == 'Heure Livraison')largeur = 8;
                if(entete == 'Travaux R\351alis\351s')largeur = 10;
                if(entete == 'Travaux Non R\351alis\351s')largeur = 8;
                if(entete == 'Kilom\351trage')largeur = 8;
                if(entete == 'Garatie')largeur = 8;
                if(entete == 'N\260 Facture')largeur = 10;
                if(entete == 'Montant')largeur = 8;
                if(entete == 'N\260 R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;
                if(entete == 'Client')largeur = 8;

                if(entete == 'Date Livraison')largeur_impr = 5;
                if(entete == 'Heure Livraison')largeur_impr = 5;
                if(entete == 'Travaux R\351alis\351s')largeur_impr = 8;
                if(entete == 'Travaux Non R\351alis\351s')largeur_impr = 5;
                if(entete == 'Kilom\351trage')largeur_impr = 5;
                if(entete == 'Garatie')largeur_impr = 5;
                if(entete == 'N\260 Facture')largeur_impr = 8;
                if(entete == 'Montant')largeur_impr = 5;
                if(entete == 'N\260 R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;
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
                    if(listecoloneactiveSend[j] == 'heure')
                    {
                        var lheure = heure[i];
                        if(lheure == '00-00-00')lheure = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lheure+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lheure+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'taffait')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+taffait[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+taffait[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'tafnonfait')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tafnonfait[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tafnonfait[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'kilometrage')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+kilo[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+kilo[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'garantie')
                    {
                        var lgarant = garant[i];
                        if(lgarant == '1000-10-10')lgarant = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lgarant+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lgarant+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'facture')
                    {
                        var lfacture = facture[i];
                        if(lfacture == '0000')lfacture = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lfacture+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lfacture+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'montant')
                    {
                        var lmontant = montant[i];
                        if(lmontant == '0000')lmontant = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lmontant+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lmontant+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'reception')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+reception[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+reception[i]+'</td>');
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

function SeletionListeLivraisonAutre()
{
    var option = $("#idexselectvaleurtri").val();
    var valeur = $("#idexinputvaleurtri").val();

    $.post('controller/PrintSelecteListeLivraison.php',{option:option,valeur:valeur}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var heure = [];
        var taffait = [];
        var tafnonfait = [];
        var kilo = [];
        var garant = [];
        var facture = [];
        var montant = [];
        var reception = [];
        var vehicule = [];
        var client = [];
        var idate = 0;
        var iheure = 0;
        var itaffait = 0;
        var itafnonfait = 0;
        var ikilo = 0;
        var igar = 0;
        var ifact = 0;
        var imont = 0;
        var irecep = 0;
        var iveh = 0;
        var iclient = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionLivraisonDate").val();
        var activevalheure = $("#printTableListePositionLivraisonHeure").val();
        var activevaltaffait = $("#printTableListePositionLivraisonTaffait").val();
        var activevaltafnonfait = $("#printTableListePositionLivraisonTafnonfait").val();
        var activevalkilo = $("#printTableListePositionLivraisonKilo").val();
        var activevalgar = $("#printTableListePositionLivraisonDateG").val();
        var activevalfacture = $("#printTableListePositionLivraisonNumfact").val();
        var activevalmontant = $("#printTableListePositionLivraisonMontant").val();
        var activevalreception = $("#printTableListePositionLivraisonReception").val();
        var activevalvehicule = $("#printTableListePositionLivraisonVehicule").val();
        var activevalclient = $("#printTableListePositionLivraisonClent").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'heure'){heure[iheure]=val;iheure++;}
                if(ind == 'taffait'){taffait[itaffait]=val;itaffait++;}
                if(ind == 'tafnonfait'){tafnonfait[itafnonfait]=val;itafnonfait++;}
                if(ind == 'kilometrage'){kilo[ikilo]=val;ikilo++;}
                if(ind == 'garantie'){garant[igar]=val;igar++;}
                if(ind == 'facture'){facture[ifact]=val;ifact++;}
                if(ind == 'montant'){montant[imont]=val;imont++;}
                if(ind == 'reception'){reception[irecep]=val;irecep++;}
                if(ind == 'vehicule'){vehicule[iveh]=val;iveh++;}
                if(ind == 'client'){client[iclient]=val;iclient++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalheure.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltaffait.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltafnonfait.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalkilo.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalgar.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalfacture.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalmontant.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalreception.length != 0)
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
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalheure.length != 0 && activevalheure > nbrcoloneactive) || (activevaltaffait.length != 0 && activevaltaffait > nbrcoloneactive) || (activevaltafnonfait.length != 0 && activevaltafnonfait > nbrcoloneactive) || (activevalkilo.length != 0 && activevalkilo > nbrcoloneactive) || (activevalgar.length != 0 && activevalgar > nbrcoloneactive) || (activevalfacture.length != 0 && activevalfacture > nbrcoloneactive) || (activevalmontant.length != 0 && activevalmontant > nbrcoloneactive) || (activevalreception.length != 0 && activevalreception > nbrcoloneactive) || (activevalvehicule.length != 0 && activevalvehicule > nbrcoloneactive) || (activevalclient.length != 0 && activevalclient > nbrcoloneactive))
            {
                $(".messageh6").text('Le choix des position doit \352tre de nombre successif.');
                ConfirmationLose();
            }
            else
            {
                if(activevaldate.length != 0)
                {
                    listecoloneactive[parseInt(activevaldate)-1] = 'Date Livraison';
                    listecoloneactiveSend[parseInt(activevaldate)-1] = 'date';
                }
                if(activevalheure.length != 0)
                {
                    listecoloneactive[parseInt(activevalheure)-1] = 'Heure Livraison';
                    listecoloneactiveSend[parseInt(activevalheure)-1] = 'heure';
                }
                if(activevaltaffait.length != 0)
                {
                    listecoloneactive[parseInt(activevaltaffait)-1] = 'Travaux R\351alis\351s';
                    listecoloneactiveSend[parseInt(activevaltaffait)-1] = 'taffait';
                }
                if(activevaltafnonfait.length != 0)
                {
                    listecoloneactive[parseInt(activevaltafnonfait)-1] = 'Travaux Non R\351alis\351s';
                    listecoloneactiveSend[parseInt(activevaltafnonfait)-1] = 'tafnonfait';
                }
                if(activevalkilo.length != 0)
                {
                    listecoloneactive[parseInt(activevalkilo)-1] = 'Kilom\351trage';
                    listecoloneactiveSend[parseInt(activevalkilo)-1] = 'kilometrage';
                }
                if(activevalgar.length != 0)
                {
                    listecoloneactive[parseInt(activevalgar)-1] = 'Garatie';
                    listecoloneactiveSend[parseInt(activevalgar)-1] = 'garantie';
                }
                if(activevalfacture.length != 0)
                {
                    listecoloneactive[parseInt(activevalfacture)-1] = 'N\260 Facture';
                    listecoloneactiveSend[parseInt(activevalfacture)-1] = 'facture';
                }
                if(activevalmontant.length != 0)
                {
                    listecoloneactive[parseInt(activevalmontant)-1] = 'Montant';
                    listecoloneactiveSend[parseInt(activevalmontant)-1] = 'montant';
                }
                if(activevalreception.length != 0)
                {
                    listecoloneactive[parseInt(activevalreception)-1] = 'N\260 R\351ception';
                    listecoloneactiveSend[parseInt(activevalreception)-1] = 'reception';
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

                if(entete == 'Date Livraison')largeur = 8;
                if(entete == 'Heure Livraison')largeur = 8;
                if(entete == 'Travaux R\351alis\351s')largeur = 10;
                if(entete == 'Travaux Non R\351alis\351s')largeur = 8;
                if(entete == 'Kilom\351trage')largeur = 8;
                if(entete == 'Garatie')largeur = 8;
                if(entete == 'N\260 Facture')largeur = 10;
                if(entete == 'Montant')largeur = 8;
                if(entete == 'N\260 R\351ception')largeur = 8;
                if(entete == 'V\351hicule')largeur = 8;
                if(entete == 'Client')largeur = 8;

                if(entete == 'Date Livraison')largeur_impr = 5;
                if(entete == 'Heure Livraison')largeur_impr = 5;
                if(entete == 'Travaux R\351alis\351s')largeur_impr = 8;
                if(entete == 'Travaux Non R\351alis\351s')largeur_impr = 5;
                if(entete == 'Kilom\351trage')largeur_impr = 5;
                if(entete == 'Garatie')largeur_impr = 5;
                if(entete == 'N\260 Facture')largeur_impr = 8;
                if(entete == 'Montant')largeur_impr = 5;
                if(entete == 'N\260 R\351ception')largeur_impr = 5;
                if(entete == 'V\351hicule')largeur_impr = 5;
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
                    if(listecoloneactiveSend[j] == 'heure')
                    {
                        var lheure = heure[i];
                        if(lheure == '00-00-00')lheure = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lheure+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lheure+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'taffait')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+taffait[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+taffait[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'tafnonfait')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tafnonfait[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tafnonfait[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'kilometrage')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+kilo[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+kilo[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'garantie')
                    {
                        var lgarant = garant[i];
                        if(lgarant == '1000-10-10')lgarant = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lgarant+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lgarant+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'facture')
                    {
                        var lfacture = facture[i];
                        if(lfacture == '0000')lfacture = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lfacture+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lfacture+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'montant')
                    {
                        var lmontant = montant[i];
                        if(lmontant == '0000')lmontant = '';
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+lmontant+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+lmontant+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'reception')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+reception[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+reception[i]+'</td>');
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
