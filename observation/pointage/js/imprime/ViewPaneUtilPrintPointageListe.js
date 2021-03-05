function SeletionListePointageAvantDate()
{
    var date = $("#date_prt_inf").val();
    date = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(date);

    $.post('controller/PrintSelecteListePointage.php',{pointageselectedateavant:date}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var numordre = [];
        var design = [];
        var object = [];
        var hraut = [];
        var tafexe = [];
        var hd = [];
        var hf = [];
        var tech = [];
        var idate = 0;
        var inumord = 0;
        var idesign = 0;
        var iobj = 0;
        var ihraut = 0;
        var itafexe = 0;
        var ihd = 0;
        var ihf = 0;
        var itech = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionPointageDate").val();
        var activevalnumord = $("#printTableListePositionPointageNumord").val();
        var activevaldesign = $("#printTableListePositionPointageDesign").val();
        var activevalobj = $("#printTableListePositionPointageOject").val();
        var activevalhraut = $("#printTableListePositionPointageHraut").val();
        var activevaltexe = $("#printTableListePositionPointageTafexe").val();
        var activevalhd = $("#printTableListePositionPointageHd").val();
        var activevalhf = $("#printTableListePositionPointageHf").val();
        var activevaltech = $("#printTableListePositionPointageTech").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'numordre'){numordre[inumord]=val;inumord++;}
                if(ind == 'designation'){design[idesign]=val;idesign++;}
                if(ind == 'objectif'){object[iobj]=val;iobj++;}
                if(ind == 'hraut'){hraut[ihraut]=val;ihraut++;}
                if(ind == 'travauxexe'){tafexe[itafexe]=val;itafexe++;}
                if(ind == 'heuredebut'){hd[ihd]=val;ihd++;}
                if(ind == 'heurefin'){hf[ihf]=val;ihf++;}
                if(ind == 'technicien'){tech[itech]=val;itech++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumord.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaldesign.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalobj.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhraut.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltexe.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhf.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltech.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalnumord.length != 0 && activevalnumord > nbrcoloneactive) || (activevaldesign.length != 0 && activevaldesign > nbrcoloneactive) || (activevalobj.length != 0 && activevalobj > nbrcoloneactive) || (activevalhraut.length != 0 && activevalhraut > nbrcoloneactive) || (activevaltexe.length != 0 && activevaltexe > nbrcoloneactive) || (activevalhd.length != 0 && activevalhd > nbrcoloneactive) || (activevalhf.length != 0 && activevalhf > nbrcoloneactive) || (activevaltech.length != 0 && activevaltech > nbrcoloneactive))
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
                if(activevalnumord.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumord)-1] = 'O/R N\351';
                    listecoloneactiveSend[parseInt(activevalnumord)-1] = 'numordre';
                }
                if(activevaldesign.length != 0)
                {
                    listecoloneactive[parseInt(activevaldesign)-1] = 'D\351signation';
                    listecoloneactiveSend[parseInt(activevaldesign)-1] = 'designation';
                }
                if(activevalobj.length != 0)
                {
                    listecoloneactive[parseInt(activevalobj)-1] = 'Objectifs';
                    listecoloneactiveSend[parseInt(activevalobj)-1] = 'objectif';
                }
                if(activevalhraut.length != 0)
                {
                    listecoloneactive[parseInt(activevalhraut)-1] = 'Hr Aut';
                    listecoloneactiveSend[parseInt(activevalhraut)-1] = 'hraut';
                }
                if(activevaltexe.length != 0)
                {
                    listecoloneactive[parseInt(activevaltexe)-1] = 'Travaux Ex\351cut\351s';
                    listecoloneactiveSend[parseInt(activevaltexe)-1] = 'travauxexe';
                }
                if(activevalhd.length != 0)
                {
                    listecoloneactive[parseInt(activevalhd)-1] = 'Heure D\351but';
                    listecoloneactiveSend[parseInt(activevalhd)-1] = 'heuredebut';
                }
                if(activevalhf.length != 0)
                {
                    listecoloneactive[parseInt(activevalhf)-1] = 'Heure Fin';
                    listecoloneactiveSend[parseInt(activevalhf)-1] = 'heurefin';
                }
                if(activevaltech.length != 0)
                {
                    listecoloneactive[parseInt(activevaltech)-1] = 'Technicien';
                    listecoloneactiveSend[parseInt(activevaltech)-1] = 'technicien';
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
                if(entete == 'O/R N\351')largeur = 8;
                if(entete == 'D\351signation')largeur = 10;
                if(entete == 'Objectifs')largeur = 8;
                if(entete == 'Hr Aut')largeur = 8;
                if(entete == 'Travaux Ex\351cut\351s')largeur = 8;
                if(entete == 'Heure D\351but')largeur = 10;
                if(entete == 'Heure Fin')largeur = 8;
                if(entete == 'Technicien')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'O/R N\351')largeur_impr = 5;
                if(entete == 'D\351signation')largeur_impr = 8;
                if(entete == 'Objectifs')largeur_impr = 5;
                if(entete == 'Hr Aut')largeur_impr = 5;
                if(entete == 'Travaux Ex\351cut\351s')largeur_impr = 5;
                if(entete == 'Heure D\351but')largeur_impr = 8;
                if(entete == 'Heure Fin')largeur_impr = 5;
                if(entete == 'Technicien')largeur_impr = 5;

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
                    if(listecoloneactiveSend[j] == 'numordre')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numordre[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numordre[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'designation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+design[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+design[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'objectif')
                    {
                        var ranal = object[i];
                        if(ranal == '')ranal = '';

                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+object[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+object[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'hraut')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hraut[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hraut[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'travauxexe')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tafexe[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tafexe[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'heuredebut')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'heurefin')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hf[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hf[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'technicien')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tech[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tech[i]+'</td>');
                    }
                }
            }
        }
    });
}

function SeletionListePointageApresDate()
{
    var date = $("#date_prt_inf").val();
    date = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(date);

    $.post('controller/PrintSelecteListePointage.php',{pointageselectedateapres:date}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var numordre = [];
        var design = [];
        var object = [];
        var hraut = [];
        var tafexe = [];
        var hd = [];
        var hf = [];
        var tech = [];
        var idate = 0;
        var inumord = 0;
        var idesign = 0;
        var iobj = 0;
        var ihraut = 0;
        var itafexe = 0;
        var ihd = 0;
        var ihf = 0;
        var itech = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionPointageDate").val();
        var activevalnumord = $("#printTableListePositionPointageNumord").val();
        var activevaldesign = $("#printTableListePositionPointageDesign").val();
        var activevalobj = $("#printTableListePositionPointageOject").val();
        var activevalhraut = $("#printTableListePositionPointageHraut").val();
        var activevaltexe = $("#printTableListePositionPointageTafexe").val();
        var activevalhd = $("#printTableListePositionPointageHd").val();
        var activevalhf = $("#printTableListePositionPointageHf").val();
        var activevaltech = $("#printTableListePositionPointageTech").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'numordre'){numordre[inumord]=val;inumord++;}
                if(ind == 'designation'){design[idesign]=val;idesign++;}
                if(ind == 'objectif'){object[iobj]=val;iobj++;}
                if(ind == 'hraut'){hraut[ihraut]=val;ihraut++;}
                if(ind == 'travauxexe'){tafexe[itafexe]=val;itafexe++;}
                if(ind == 'heuredebut'){hd[ihd]=val;ihd++;}
                if(ind == 'heurefin'){hf[ihf]=val;ihf++;}
                if(ind == 'technicien'){tech[itech]=val;itech++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumord.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaldesign.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalobj.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhraut.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltexe.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhf.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltech.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalnumord.length != 0 && activevalnumord > nbrcoloneactive) || (activevaldesign.length != 0 && activevaldesign > nbrcoloneactive) || (activevalobj.length != 0 && activevalobj > nbrcoloneactive) || (activevalhraut.length != 0 && activevalhraut > nbrcoloneactive) || (activevaltexe.length != 0 && activevaltexe > nbrcoloneactive) || (activevalhd.length != 0 && activevalhd > nbrcoloneactive) || (activevalhf.length != 0 && activevalhf > nbrcoloneactive) || (activevaltech.length != 0 && activevaltech > nbrcoloneactive))
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
                if(activevalnumord.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumord)-1] = 'O/R N\351';
                    listecoloneactiveSend[parseInt(activevalnumord)-1] = 'numordre';
                }
                if(activevaldesign.length != 0)
                {
                    listecoloneactive[parseInt(activevaldesign)-1] = 'D\351signation';
                    listecoloneactiveSend[parseInt(activevaldesign)-1] = 'designation';
                }
                if(activevalobj.length != 0)
                {
                    listecoloneactive[parseInt(activevalobj)-1] = 'Objectifs';
                    listecoloneactiveSend[parseInt(activevalobj)-1] = 'objectif';
                }
                if(activevalhraut.length != 0)
                {
                    listecoloneactive[parseInt(activevalhraut)-1] = 'Hr Aut';
                    listecoloneactiveSend[parseInt(activevalhraut)-1] = 'hraut';
                }
                if(activevaltexe.length != 0)
                {
                    listecoloneactive[parseInt(activevaltexe)-1] = 'Travaux Ex\351cut\351s';
                    listecoloneactiveSend[parseInt(activevaltexe)-1] = 'travauxexe';
                }
                if(activevalhd.length != 0)
                {
                    listecoloneactive[parseInt(activevalhd)-1] = 'Heure D\351but';
                    listecoloneactiveSend[parseInt(activevalhd)-1] = 'heuredebut';
                }
                if(activevalhf.length != 0)
                {
                    listecoloneactive[parseInt(activevalhf)-1] = 'Heure Fin';
                    listecoloneactiveSend[parseInt(activevalhf)-1] = 'heurefin';
                }
                if(activevaltech.length != 0)
                {
                    listecoloneactive[parseInt(activevaltech)-1] = 'Technicien';
                    listecoloneactiveSend[parseInt(activevaltech)-1] = 'technicien';
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
                if(entete == 'O/R N\351')largeur = 8;
                if(entete == 'D\351signation')largeur = 10;
                if(entete == 'Objectifs')largeur = 8;
                if(entete == 'Hr Aut')largeur = 8;
                if(entete == 'Travaux Ex\351cut\351s')largeur = 8;
                if(entete == 'Heure D\351but')largeur = 10;
                if(entete == 'Heure Fin')largeur = 8;
                if(entete == 'Technicien')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'O/R N\351')largeur_impr = 5;
                if(entete == 'D\351signation')largeur_impr = 8;
                if(entete == 'Objectifs')largeur_impr = 5;
                if(entete == 'Hr Aut')largeur_impr = 5;
                if(entete == 'Travaux Ex\351cut\351s')largeur_impr = 5;
                if(entete == 'Heure D\351but')largeur_impr = 8;
                if(entete == 'Heure Fin')largeur_impr = 5;
                if(entete == 'Technicien')largeur_impr = 5;

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
                    if(listecoloneactiveSend[j] == 'numordre')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numordre[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numordre[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'designation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+design[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+design[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'objectif')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+object[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+object[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'hraut')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hraut[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hraut[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'travauxexe')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tafexe[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tafexe[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'heuredebut')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'heurefin')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hf[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hf[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'technicien')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tech[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tech[i]+'</td>');
                    }
                }
            }
        }
    });
}

function SeletionListePointageExtremeDate()
{
    var date = $("#date_prt_inf").val();
    date = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(date);

    $.post('controller/PrintSelecteListePointage.php',{pointageselectedateextreme:date}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var numordre = [];
        var design = [];
        var object = [];
        var hraut = [];
        var tafexe = [];
        var hd = [];
        var hf = [];
        var tech = [];
        var idate = 0;
        var inumord = 0;
        var idesign = 0;
        var iobj = 0;
        var ihraut = 0;
        var itafexe = 0;
        var ihd = 0;
        var ihf = 0;
        var itech = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionPointageDate").val();
        var activevalnumord = $("#printTableListePositionPointageNumord").val();
        var activevaldesign = $("#printTableListePositionPointageDesign").val();
        var activevalobj = $("#printTableListePositionPointageOject").val();
        var activevalhraut = $("#printTableListePositionPointageHraut").val();
        var activevaltexe = $("#printTableListePositionPointageTafexe").val();
        var activevalhd = $("#printTableListePositionPointageHd").val();
        var activevalhf = $("#printTableListePositionPointageHf").val();
        var activevaltech = $("#printTableListePositionPointageTech").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'numordre'){numordre[inumord]=val;inumord++;}
                if(ind == 'designation'){design[idesign]=val;idesign++;}
                if(ind == 'objectif'){object[iobj]=val;iobj++;}
                if(ind == 'hraut'){hraut[ihraut]=val;ihraut++;}
                if(ind == 'travauxexe'){tafexe[itafexe]=val;itafexe++;}
                if(ind == 'heuredebut'){hd[ihd]=val;ihd++;}
                if(ind == 'heurefin'){hf[ihf]=val;ihf++;}
                if(ind == 'technicien'){tech[itech]=val;itech++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumord.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaldesign.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalobj.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhraut.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltexe.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhf.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltech.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalnumord.length != 0 && activevalnumord > nbrcoloneactive) || (activevaldesign.length != 0 && activevaldesign > nbrcoloneactive) || (activevalobj.length != 0 && activevalobj > nbrcoloneactive) || (activevalhraut.length != 0 && activevalhraut > nbrcoloneactive) || (activevaltexe.length != 0 && activevaltexe > nbrcoloneactive) || (activevalhd.length != 0 && activevalhd > nbrcoloneactive) || (activevalhf.length != 0 && activevalhf > nbrcoloneactive) || (activevaltech.length != 0 && activevaltech > nbrcoloneactive))
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
                if(activevalnumord.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumord)-1] = 'O/R N\351';
                    listecoloneactiveSend[parseInt(activevalnumord)-1] = 'numordre';
                }
                if(activevaldesign.length != 0)
                {
                    listecoloneactive[parseInt(activevaldesign)-1] = 'D\351signation';
                    listecoloneactiveSend[parseInt(activevaldesign)-1] = 'designation';
                }
                if(activevalobj.length != 0)
                {
                    listecoloneactive[parseInt(activevalobj)-1] = 'Objectifs';
                    listecoloneactiveSend[parseInt(activevalobj)-1] = 'objectif';
                }
                if(activevalhraut.length != 0)
                {
                    listecoloneactive[parseInt(activevalhraut)-1] = 'Hr Aut';
                    listecoloneactiveSend[parseInt(activevalhraut)-1] = 'hraut';
                }
                if(activevaltexe.length != 0)
                {
                    listecoloneactive[parseInt(activevaltexe)-1] = 'Travaux Ex\351cut\351s';
                    listecoloneactiveSend[parseInt(activevaltexe)-1] = 'travauxexe';
                }
                if(activevalhd.length != 0)
                {
                    listecoloneactive[parseInt(activevalhd)-1] = 'Heure D\351but';
                    listecoloneactiveSend[parseInt(activevalhd)-1] = 'heuredebut';
                }
                if(activevalhf.length != 0)
                {
                    listecoloneactive[parseInt(activevalhf)-1] = 'Heure Fin';
                    listecoloneactiveSend[parseInt(activevalhf)-1] = 'heurefin';
                }
                if(activevaltech.length != 0)
                {
                    listecoloneactive[parseInt(activevaltech)-1] = 'Technicien';
                    listecoloneactiveSend[parseInt(activevaltech)-1] = 'technicien';
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
                if(entete == 'O/R N\351')largeur = 8;
                if(entete == 'D\351signation')largeur = 10;
                if(entete == 'Objectifs')largeur = 8;
                if(entete == 'Hr Aut')largeur = 8;
                if(entete == 'Travaux Ex\351cut\351s')largeur = 8;
                if(entete == 'Heure D\351but')largeur = 10;
                if(entete == 'Heure Fin')largeur = 8;
                if(entete == 'Technicien')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'O/R N\351')largeur_impr = 5;
                if(entete == 'D\351signation')largeur_impr = 8;
                if(entete == 'Objectifs')largeur_impr = 5;
                if(entete == 'Hr Aut')largeur_impr = 5;
                if(entete == 'Travaux Ex\351cut\351s')largeur_impr = 5;
                if(entete == 'Heure D\351but')largeur_impr = 8;
                if(entete == 'Heure Fin')largeur_impr = 5;
                if(entete == 'Technicien')largeur_impr = 5;

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
                    if(listecoloneactiveSend[j] == 'numordre')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numordre[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numordre[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'designation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+design[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+design[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'objectif')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+object[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+object[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'hraut')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hraut[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hraut[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'travauxexe')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tafexe[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tafexe[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'heuredebut')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'heurefin')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hf[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hf[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'technicien')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tech[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tech[i]+'</td>');
                    }
                }
            }
        }
    });
}

function SeletionListePointageAdmisDate()
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

    $.post('controller/PrintSelecteListePointage.php',{pointageselectedateadmise:liste}, function (data) {

        data = $.parseJSON(data);

        var date = [];
        var numordre = [];
        var design = [];
        var object = [];
        var hraut = [];
        var tafexe = [];
        var hd = [];
        var hf = [];
        var tech = [];
        var idate = 0;
        var inumord = 0;
        var idesign = 0;
        var iobj = 0;
        var ihraut = 0;
        var itafexe = 0;
        var ihd = 0;
        var ihf = 0;
        var itech = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionPointageDate").val();
        var activevalnumord = $("#printTableListePositionPointageNumord").val();
        var activevaldesign = $("#printTableListePositionPointageDesign").val();
        var activevalobj = $("#printTableListePositionPointageOject").val();
        var activevalhraut = $("#printTableListePositionPointageHraut").val();
        var activevaltexe = $("#printTableListePositionPointageTafexe").val();
        var activevalhd = $("#printTableListePositionPointageHd").val();
        var activevalhf = $("#printTableListePositionPointageHf").val();
        var activevaltech = $("#printTableListePositionPointageTech").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'numordre'){numordre[inumord]=val;inumord++;}
                if(ind == 'designation'){design[idesign]=val;idesign++;}
                if(ind == 'objectif'){object[iobj]=val;iobj++;}
                if(ind == 'hraut'){hraut[ihraut]=val;ihraut++;}
                if(ind == 'travauxexe'){tafexe[itafexe]=val;itafexe++;}
                if(ind == 'heuredebut'){hd[ihd]=val;ihd++;}
                if(ind == 'heurefin'){hf[ihf]=val;ihf++;}
                if(ind == 'technicien'){tech[itech]=val;itech++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumord.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaldesign.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalobj.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhraut.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltexe.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhf.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltech.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalnumord.length != 0 && activevalnumord > nbrcoloneactive) || (activevaldesign.length != 0 && activevaldesign > nbrcoloneactive) || (activevalobj.length != 0 && activevalobj > nbrcoloneactive) || (activevalhraut.length != 0 && activevalhraut > nbrcoloneactive) || (activevaltexe.length != 0 && activevaltexe > nbrcoloneactive) || (activevalhd.length != 0 && activevalhd > nbrcoloneactive) || (activevalhf.length != 0 && activevalhf > nbrcoloneactive) || (activevaltech.length != 0 && activevaltech > nbrcoloneactive))
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
                if(activevalnumord.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumord)-1] = 'O/R N\351';
                    listecoloneactiveSend[parseInt(activevalnumord)-1] = 'numordre';
                }
                if(activevaldesign.length != 0)
                {
                    listecoloneactive[parseInt(activevaldesign)-1] = 'D\351signation';
                    listecoloneactiveSend[parseInt(activevaldesign)-1] = 'designation';
                }
                if(activevalobj.length != 0)
                {
                    listecoloneactive[parseInt(activevalobj)-1] = 'Objectifs';
                    listecoloneactiveSend[parseInt(activevalobj)-1] = 'objectif';
                }
                if(activevalhraut.length != 0)
                {
                    listecoloneactive[parseInt(activevalhraut)-1] = 'Hr Aut';
                    listecoloneactiveSend[parseInt(activevalhraut)-1] = 'hraut';
                }
                if(activevaltexe.length != 0)
                {
                    listecoloneactive[parseInt(activevaltexe)-1] = 'Travaux Ex\351cut\351s';
                    listecoloneactiveSend[parseInt(activevaltexe)-1] = 'travauxexe';
                }
                if(activevalhd.length != 0)
                {
                    listecoloneactive[parseInt(activevalhd)-1] = 'Heure D\351but';
                    listecoloneactiveSend[parseInt(activevalhd)-1] = 'heuredebut';
                }
                if(activevalhf.length != 0)
                {
                    listecoloneactive[parseInt(activevalhf)-1] = 'Heure Fin';
                    listecoloneactiveSend[parseInt(activevalhf)-1] = 'heurefin';
                }
                if(activevaltech.length != 0)
                {
                    listecoloneactive[parseInt(activevaltech)-1] = 'Technicien';
                    listecoloneactiveSend[parseInt(activevaltech)-1] = 'technicien';
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
                if(entete == 'O/R N\351')largeur = 8;
                if(entete == 'D\351signation')largeur = 10;
                if(entete == 'Objectifs')largeur = 8;
                if(entete == 'Hr Aut')largeur = 8;
                if(entete == 'Travaux Ex\351cut\351s')largeur = 8;
                if(entete == 'Heure D\351but')largeur = 10;
                if(entete == 'Heure Fin')largeur = 8;
                if(entete == 'Technicien')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'O/R N\351')largeur_impr = 5;
                if(entete == 'D\351signation')largeur_impr = 8;
                if(entete == 'Objectifs')largeur_impr = 5;
                if(entete == 'Hr Aut')largeur_impr = 5;
                if(entete == 'Travaux Ex\351cut\351s')largeur_impr = 5;
                if(entete == 'Heure D\351but')largeur_impr = 8;
                if(entete == 'Heure Fin')largeur_impr = 5;
                if(entete == 'Technicien')largeur_impr = 5;

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
                    if(listecoloneactiveSend[j] == 'numordre')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numordre[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numordre[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'designation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+design[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+design[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'objectif')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+object[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+object[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'hraut')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hraut[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hraut[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'travauxexe')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tafexe[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tafexe[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'heuredebut')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'heurefin')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hf[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hf[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'technicien')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tech[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tech[i]+'</td>');
                    }
                }
            }
        }

    });
}

function SeletionListePointageExclutDate()
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

    $.post('controller/PrintSelecteListePointage.php',{pointageselectedateexclut:liste}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var numordre = [];
        var design = [];
        var object = [];
        var hraut = [];
        var tafexe = [];
        var hd = [];
        var hf = [];
        var tech = [];
        var idate = 0;
        var inumord = 0;
        var idesign = 0;
        var iobj = 0;
        var ihraut = 0;
        var itafexe = 0;
        var ihd = 0;
        var ihf = 0;
        var itech = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionPointageDate").val();
        var activevalnumord = $("#printTableListePositionPointageNumord").val();
        var activevaldesign = $("#printTableListePositionPointageDesign").val();
        var activevalobj = $("#printTableListePositionPointageOject").val();
        var activevalhraut = $("#printTableListePositionPointageHraut").val();
        var activevaltexe = $("#printTableListePositionPointageTafexe").val();
        var activevalhd = $("#printTableListePositionPointageHd").val();
        var activevalhf = $("#printTableListePositionPointageHf").val();
        var activevaltech = $("#printTableListePositionPointageTech").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'numordre'){numordre[inumord]=val;inumord++;}
                if(ind == 'designation'){design[idesign]=val;idesign++;}
                if(ind == 'objectif'){object[iobj]=val;iobj++;}
                if(ind == 'hraut'){hraut[ihraut]=val;ihraut++;}
                if(ind == 'travauxexe'){tafexe[itafexe]=val;itafexe++;}
                if(ind == 'heuredebut'){hd[ihd]=val;ihd++;}
                if(ind == 'heurefin'){hf[ihf]=val;ihf++;}
                if(ind == 'technicien'){tech[itech]=val;itech++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumord.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaldesign.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalobj.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhraut.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltexe.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhf.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltech.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalnumord.length != 0 && activevalnumord > nbrcoloneactive) || (activevaldesign.length != 0 && activevaldesign > nbrcoloneactive) || (activevalobj.length != 0 && activevalobj > nbrcoloneactive) || (activevalhraut.length != 0 && activevalhraut > nbrcoloneactive) || (activevaltexe.length != 0 && activevaltexe > nbrcoloneactive) || (activevalhd.length != 0 && activevalhd > nbrcoloneactive) || (activevalhf.length != 0 && activevalhf > nbrcoloneactive) || (activevaltech.length != 0 && activevaltech > nbrcoloneactive))
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
                if(activevalnumord.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumord)-1] = 'O/R N\351';
                    listecoloneactiveSend[parseInt(activevalnumord)-1] = 'numordre';
                }
                if(activevaldesign.length != 0)
                {
                    listecoloneactive[parseInt(activevaldesign)-1] = 'D\351signation';
                    listecoloneactiveSend[parseInt(activevaldesign)-1] = 'designation';
                }
                if(activevalobj.length != 0)
                {
                    listecoloneactive[parseInt(activevalobj)-1] = 'Objectifs';
                    listecoloneactiveSend[parseInt(activevalobj)-1] = 'objectif';
                }
                if(activevalhraut.length != 0)
                {
                    listecoloneactive[parseInt(activevalhraut)-1] = 'Hr Aut';
                    listecoloneactiveSend[parseInt(activevalhraut)-1] = 'hraut';
                }
                if(activevaltexe.length != 0)
                {
                    listecoloneactive[parseInt(activevaltexe)-1] = 'Travaux Ex\351cut\351s';
                    listecoloneactiveSend[parseInt(activevaltexe)-1] = 'travauxexe';
                }
                if(activevalhd.length != 0)
                {
                    listecoloneactive[parseInt(activevalhd)-1] = 'Heure D\351but';
                    listecoloneactiveSend[parseInt(activevalhd)-1] = 'heuredebut';
                }
                if(activevalhf.length != 0)
                {
                    listecoloneactive[parseInt(activevalhf)-1] = 'Heure Fin';
                    listecoloneactiveSend[parseInt(activevalhf)-1] = 'heurefin';
                }
                if(activevaltech.length != 0)
                {
                    listecoloneactive[parseInt(activevaltech)-1] = 'Technicien';
                    listecoloneactiveSend[parseInt(activevaltech)-1] = 'technicien';
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
                if(entete == 'O/R N\351')largeur = 8;
                if(entete == 'D\351signation')largeur = 10;
                if(entete == 'Objectifs')largeur = 8;
                if(entete == 'Hr Aut')largeur = 8;
                if(entete == 'Travaux Ex\351cut\351s')largeur = 8;
                if(entete == 'Heure D\351but')largeur = 10;
                if(entete == 'Heure Fin')largeur = 8;
                if(entete == 'Technicien')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'O/R N\351')largeur_impr = 5;
                if(entete == 'D\351signation')largeur_impr = 8;
                if(entete == 'Objectifs')largeur_impr = 5;
                if(entete == 'Hr Aut')largeur_impr = 5;
                if(entete == 'Travaux Ex\351cut\351s')largeur_impr = 5;
                if(entete == 'Heure D\351but')largeur_impr = 8;
                if(entete == 'Heure Fin')largeur_impr = 5;
                if(entete == 'Technicien')largeur_impr = 5;

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
                    if(listecoloneactiveSend[j] == 'numordre')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numordre[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numordre[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'designation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+design[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+design[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'objectif')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+object[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+object[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'hraut')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hraut[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hraut[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'travauxexe')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tafexe[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tafexe[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'heuredebut')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'heurefin')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hf[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hf[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'technicien')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tech[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tech[i]+'</td>');
                    }
                }
            }
        }
    });
}

function SeletionListePointageEntreDate()
{
    var dateinf = $("#date_prt_inf").val();
    var datesup = $("#date_prt_sup").val();
    dateinf = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(dateinf);
    datesup = Data_format_LongFr_to_shurt_tire_format_date_mois_jour(datesup);

    $.post('controller/PrintSelecteListePointage.php',{pointageselectedateinf:dateinf,pointageselectedatesup:datesup}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var numordre = [];
        var design = [];
        var object = [];
        var hraut = [];
        var tafexe = [];
        var hd = [];
        var hf = [];
        var tech = [];
        var idate = 0;
        var inumord = 0;
        var idesign = 0;
        var iobj = 0;
        var ihraut = 0;
        var itafexe = 0;
        var ihd = 0;
        var ihf = 0;
        var itech = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionPointageDate").val();
        var activevalnumord = $("#printTableListePositionPointageNumord").val();
        var activevaldesign = $("#printTableListePositionPointageDesign").val();
        var activevalobj = $("#printTableListePositionPointageOject").val();
        var activevalhraut = $("#printTableListePositionPointageHraut").val();
        var activevaltexe = $("#printTableListePositionPointageTafexe").val();
        var activevalhd = $("#printTableListePositionPointageHd").val();
        var activevalhf = $("#printTableListePositionPointageHf").val();
        var activevaltech = $("#printTableListePositionPointageTech").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'numordre'){numordre[inumord]=val;inumord++;}
                if(ind == 'designation'){design[idesign]=val;idesign++;}
                if(ind == 'objectif'){object[iobj]=val;iobj++;}
                if(ind == 'hraut'){hraut[ihraut]=val;ihraut++;}
                if(ind == 'travauxexe'){tafexe[itafexe]=val;itafexe++;}
                if(ind == 'heuredebut'){hd[ihd]=val;ihd++;}
                if(ind == 'heurefin'){hf[ihf]=val;ihf++;}
                if(ind == 'technicien'){tech[itech]=val;itech++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumord.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaldesign.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalobj.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhraut.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltexe.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhf.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltech.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalnumord.length != 0 && activevalnumord > nbrcoloneactive) || (activevaldesign.length != 0 && activevaldesign > nbrcoloneactive) || (activevalobj.length != 0 && activevalobj > nbrcoloneactive) || (activevalhraut.length != 0 && activevalhraut > nbrcoloneactive) || (activevaltexe.length != 0 && activevaltexe > nbrcoloneactive) || (activevalhd.length != 0 && activevalhd > nbrcoloneactive) || (activevalhf.length != 0 && activevalhf > nbrcoloneactive) || (activevaltech.length != 0 && activevaltech > nbrcoloneactive))
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
                if(activevalnumord.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumord)-1] = 'O/R N\351';
                    listecoloneactiveSend[parseInt(activevalnumord)-1] = 'numordre';
                }
                if(activevaldesign.length != 0)
                {
                    listecoloneactive[parseInt(activevaldesign)-1] = 'D\351signation';
                    listecoloneactiveSend[parseInt(activevaldesign)-1] = 'designation';
                }
                if(activevalobj.length != 0)
                {
                    listecoloneactive[parseInt(activevalobj)-1] = 'Objectifs';
                    listecoloneactiveSend[parseInt(activevalobj)-1] = 'objectif';
                }
                if(activevalhraut.length != 0)
                {
                    listecoloneactive[parseInt(activevalhraut)-1] = 'Hr Aut';
                    listecoloneactiveSend[parseInt(activevalhraut)-1] = 'hraut';
                }
                if(activevaltexe.length != 0)
                {
                    listecoloneactive[parseInt(activevaltexe)-1] = 'Travaux Ex\351cut\351s';
                    listecoloneactiveSend[parseInt(activevaltexe)-1] = 'travauxexe';
                }
                if(activevalhd.length != 0)
                {
                    listecoloneactive[parseInt(activevalhd)-1] = 'Heure D\351but';
                    listecoloneactiveSend[parseInt(activevalhd)-1] = 'heuredebut';
                }
                if(activevalhf.length != 0)
                {
                    listecoloneactive[parseInt(activevalhf)-1] = 'Heure Fin';
                    listecoloneactiveSend[parseInt(activevalhf)-1] = 'heurefin';
                }
                if(activevaltech.length != 0)
                {
                    listecoloneactive[parseInt(activevaltech)-1] = 'Technicien';
                    listecoloneactiveSend[parseInt(activevaltech)-1] = 'technicien';
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
                if(entete == 'O/R N\351')largeur = 8;
                if(entete == 'D\351signation')largeur = 10;
                if(entete == 'Objectifs')largeur = 8;
                if(entete == 'Hr Aut')largeur = 8;
                if(entete == 'Travaux Ex\351cut\351s')largeur = 8;
                if(entete == 'Heure D\351but')largeur = 10;
                if(entete == 'Heure Fin')largeur = 8;
                if(entete == 'Technicien')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'O/R N\351')largeur_impr = 5;
                if(entete == 'D\351signation')largeur_impr = 8;
                if(entete == 'Objectifs')largeur_impr = 5;
                if(entete == 'Hr Aut')largeur_impr = 5;
                if(entete == 'Travaux Ex\351cut\351s')largeur_impr = 5;
                if(entete == 'Heure D\351but')largeur_impr = 8;
                if(entete == 'Heure Fin')largeur_impr = 5;
                if(entete == 'Technicien')largeur_impr = 5;

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
                    if(listecoloneactiveSend[j] == 'numordre')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numordre[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numordre[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'designation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+design[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+design[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'objectif')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+object[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+object[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'hraut')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hraut[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hraut[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'travauxexe')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tafexe[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tafexe[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'heuredebut')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'heurefin')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hf[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hf[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'technicien')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tech[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tech[i]+'</td>');
                    }
                }
            }
        }
    });
}

function SeletionListePointageAutre()
{
    var option = $("#idexselectvaleurtri").val();
    var valeur = $("#idexinputvaleurtri").val();

    $.post('controller/PrintSelecteListePointage.php',{option:option,valeur:valeur}, function (data) {
        data = $.parseJSON(data);

        var date = [];
        var numordre = [];
        var design = [];
        var object = [];
        var hraut = [];
        var tafexe = [];
        var hd = [];
        var hf = [];
        var tech = [];
        var idate = 0;
        var inumord = 0;
        var idesign = 0;
        var iobj = 0;
        var ihraut = 0;
        var itafexe = 0;
        var ihd = 0;
        var ihf = 0;
        var itech = 0;
        var nbrcoloneactive = 0;
        var listecoloneactive = [];
        var listecoloneactiveSend = [];
        var activevaldate = $("#printTableListePositionPointageDate").val();
        var activevalnumord = $("#printTableListePositionPointageNumord").val();
        var activevaldesign = $("#printTableListePositionPointageDesign").val();
        var activevalobj = $("#printTableListePositionPointageOject").val();
        var activevalhraut = $("#printTableListePositionPointageHraut").val();
        var activevaltexe = $("#printTableListePositionPointageTafexe").val();
        var activevalhd = $("#printTableListePositionPointageHd").val();
        var activevalhf = $("#printTableListePositionPointageHf").val();
        var activevaltech = $("#printTableListePositionPointageTech").val();

        $.each(data, function (index, colone) {
            $.each(colone, function (ind, val) {

                if(ind == 'date'){date[idate]=val;idate++;}
                if(ind == 'numordre'){numordre[inumord]=val;inumord++;}
                if(ind == 'designation'){design[idesign]=val;idesign++;}
                if(ind == 'objectif'){object[iobj]=val;iobj++;}
                if(ind == 'hraut'){hraut[ihraut]=val;ihraut++;}
                if(ind == 'travauxexe'){tafexe[itafexe]=val;itafexe++;}
                if(ind == 'heuredebut'){hd[ihd]=val;ihd++;}
                if(ind == 'heurefin'){hf[ihf]=val;ihf++;}
                if(ind == 'technicien'){tech[itech]=val;itech++;}
            });
        });

        if(activevaldate.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalnumord.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaldesign.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalobj.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhraut.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltexe.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhd.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevalhf.length != 0)
        {
            nbrcoloneactive += 1;
        }
        if(activevaltech.length != 0)
        {
            nbrcoloneactive += 1;
        }

        if(nbrcoloneactive != 0)
        {
            if((activevaldate.length != 0 && activevaldate > nbrcoloneactive) || (activevalnumord.length != 0 && activevalnumord > nbrcoloneactive) || (activevaldesign.length != 0 && activevaldesign > nbrcoloneactive) || (activevalobj.length != 0 && activevalobj > nbrcoloneactive) || (activevalhraut.length != 0 && activevalhraut > nbrcoloneactive) || (activevaltexe.length != 0 && activevaltexe > nbrcoloneactive) || (activevalhd.length != 0 && activevalhd > nbrcoloneactive) || (activevalhf.length != 0 && activevalhf > nbrcoloneactive) || (activevaltech.length != 0 && activevaltech > nbrcoloneactive))
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
                if(activevalnumord.length != 0)
                {
                    listecoloneactive[parseInt(activevalnumord)-1] = 'O/R N\351';
                    listecoloneactiveSend[parseInt(activevalnumord)-1] = 'numordre';
                }
                if(activevaldesign.length != 0)
                {
                    listecoloneactive[parseInt(activevaldesign)-1] = 'D\351signation';
                    listecoloneactiveSend[parseInt(activevaldesign)-1] = 'designation';
                }
                if(activevalobj.length != 0)
                {
                    listecoloneactive[parseInt(activevalobj)-1] = 'Objectifs';
                    listecoloneactiveSend[parseInt(activevalobj)-1] = 'objectif';
                }
                if(activevalhraut.length != 0)
                {
                    listecoloneactive[parseInt(activevalhraut)-1] = 'Hr Aut';
                    listecoloneactiveSend[parseInt(activevalhraut)-1] = 'hraut';
                }
                if(activevaltexe.length != 0)
                {
                    listecoloneactive[parseInt(activevaltexe)-1] = 'Travaux Ex\351cut\351s';
                    listecoloneactiveSend[parseInt(activevaltexe)-1] = 'travauxexe';
                }
                if(activevalhd.length != 0)
                {
                    listecoloneactive[parseInt(activevalhd)-1] = 'Heure D\351but';
                    listecoloneactiveSend[parseInt(activevalhd)-1] = 'heuredebut';
                }
                if(activevalhf.length != 0)
                {
                    listecoloneactive[parseInt(activevalhf)-1] = 'Heure Fin';
                    listecoloneactiveSend[parseInt(activevalhf)-1] = 'heurefin';
                }
                if(activevaltech.length != 0)
                {
                    listecoloneactive[parseInt(activevaltech)-1] = 'Technicien';
                    listecoloneactiveSend[parseInt(activevaltech)-1] = 'technicien';
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
                if(entete == 'O/R N\351')largeur = 8;
                if(entete == 'D\351signation')largeur = 10;
                if(entete == 'Objectifs')largeur = 8;
                if(entete == 'Hr Aut')largeur = 8;
                if(entete == 'Travaux Ex\351cut\351s')largeur = 8;
                if(entete == 'Heure D\351but')largeur = 10;
                if(entete == 'Heure Fin')largeur = 8;
                if(entete == 'Technicien')largeur = 8;

                if(entete == 'Date')largeur_impr = 5;
                if(entete == 'O/R N\351')largeur_impr = 5;
                if(entete == 'D\351signation')largeur_impr = 8;
                if(entete == 'Objectifs')largeur_impr = 5;
                if(entete == 'Hr Aut')largeur_impr = 5;
                if(entete == 'Travaux Ex\351cut\351s')largeur_impr = 5;
                if(entete == 'Heure D\351but')largeur_impr = 8;
                if(entete == 'Heure Fin')largeur_impr = 5;
                if(entete == 'Technicien')largeur_impr = 5;

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
                    if(listecoloneactiveSend[j] == 'numordre')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+numordre[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+numordre[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'designation')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+design[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+design[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'objectif')
                    {
                        var ranal = object[i];
                        if(ranal == '')ranal = '';

                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+object[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+object[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'hraut')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hraut[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hraut[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'travauxexe')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tafexe[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tafexe[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'heuredebut')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hd[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hd[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'heurefin')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+hf[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+hf[i]+'</td>');
                    }
                    if(listecoloneactiveSend[j] == 'technicien')
                    {
                        $(".printveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;">'+tech[i]+'</td>');
                        $(".indexprintveiwlisteclienttablebodytr:last").append('<td  style="border: 1px solid black;padding-left: 5px;padding-right: 5px;font-size: .8em;">'+tech[i]+'</td>');
                    }
                }
            }
        }
    });
}