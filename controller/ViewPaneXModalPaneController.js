$(document).ready(function () {
    function Data_format(date){
        var newdate = '';
        var dateDivise = date.split(' ');
        var jour = dateDivise[0];
        var mois = dateDivise[1];
        var annee = dateDivise[2];

        if(mois == 'Janvier')mois = 'January';
        if(mois == 'Février')mois = 'February ';
        if(mois == 'Mars')mois = 'March';
        if(mois == 'Avril')mois = 'April';
        if(mois == 'Mai')mois = 'May';
        if(mois == 'Juin')mois = 'June';
        if(mois == 'Juillet')mois = 'July';
        if(mois == 'Août')mois = 'August';
        if(mois == 'Septembre')mois = 'September';
        if(mois == 'Octobre')mois = 'October';
        if(mois == 'Novembre')mois = 'November';
        if(mois == 'Décembre')mois = 'December';

        newdate = jour+' '+mois+' '+annee;

        return newdate;
    }

    $(".form_date").datetimepicker({
        language:  'fr',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });

    $(".form_time").datetimepicker({
        language:  'fr',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 1,
        minView: 0,
        maxView: 1,
        forceParse: 0
    });

    function timeConvert (timeEnd, timeStart) {
        var partsTEnd = timeEnd.split(':');
        var partsTStart = timeStart.split(':');
        var timeSecEnd = (partsTEnd[0]*3600)+(partsTEnd[1]*60)+(partsTEnd[2]);
        var timeSecStart = (partsTStart[0]*3600)+(partsTStart[1]*60)+(partsTStart[2]);
        var secondMake = timeSecEnd - timeSecStart;
        var heure = ((secondMake/60)/60)/100;
        var heure = Math.abs(heure);
        var heure = Math.floor(heure);

        return heure;
    }

    $(".form_timePointF").change(function () {
        var timePointF = $("#heure_PointF").val();
        var timePointD = $("#heure_PointD").val();
        var timeMake = timeConvert(timePointF,timePointD);
        $('#point_temp').val("");
        if(timePointD.length!=0)
        {
            var timeMake = timeConvert(timePointF,timePointD);
            $('#point_temp').val("");
            $('#point_temp').val(timeMake+" h");
        }
        else $('#point_temp').val("");
    });

    $(".form_timePointD").change(function () {
        var timePointF = $("#heure_PointF").val();
        var timePointD = $("#heure_PointD").val();
        $('#point_temp').val("");
        if(timePointF.length!=0)
        {
            var timeMake = timeConvert(timePointF,timePointD);
            $('#point_temp').val("");
            $('#point_temp').val(timeMake+" h");
        }
        else $('#point_temp').val("");
    });

    $("#validerClientAdd").on('mousemove',function () {

        var mydate = Data_format($("#date_client").val());

        var formattedDate = new Date(mydate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth(); m +=1;
        var y = formattedDate.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp_client").val("");
            $("#dtp_client").val(y + "-" + m + "-" + d);

            var date1 = $("#dtp_client").val();

            if (date1 == "NaN-NaN-NaN")
            {
                $("#date_client").val("");
                $("#dtp_client").val("");
            }
        }
        else
        {
            $("#dtp_client").val("");
        }
    });

    $("#validerTechAdd").on('mousemove',function () {

        var mydate = Data_format($("#date_embauche").val());

        var formattedDate = new Date(mydate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth(); m +=1;
        var y = formattedDate.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtptech").val("");
            $("#dtptech").val(y + "-" + m + "-" + d);

            var date1 = $("#dtptech").val();

            if (date1 == "NaN-NaN-NaN")
            {
                $("#date_embauche").val("");
                $("#dtptech").val("");
            }
        }
        else
        {
            $("#dtptech").val("");
        }
    });


    $("#validerProgrammationAdd").on('mousemove',function () {

        var mydate = Data_format($("#date_programmation").val());
        var formattedDate = new Date(mydate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth(); m +=1;
        var y = formattedDate.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp1").val("");
            $("#dtp1").val(y + "-" + m + "-" + d);

            var date1 = $("#dtp1").val();

            if (date1 == "NaN-NaN-NaN")
            {
                $("#date_programmation").val("");
                $("#dtp1").val("");
            }
        }
        else
        {
            $("#dtp1").val("");
        }
    });

    $("#validerReception").on('mousemove',function () {
        var mydate = Data_format($("#date_R").val());
        var formattedDate = new Date(mydate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth(); m +=1;
        var y = formattedDate.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp_date_R").val("");
            $("#dtp_date_R").val(y + "-" + m + "-" + d);

            var ddtp_date_R = $("#dtp_date_R").val();

            if (ddtp_date_R == "NaN-NaN-NaN")
            {
                $("#date_R").val("");
                $("#dtp_date_R").val("");
            }
        }
        else
        {
            $("#dtp_date_R").val("");
        }
    });

    $("#validerAddPointage").on('mousemove',function () {
        var mydate = Data_format($("#date_P").val());
        var formattedDate = new Date(mydate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth(); m +=1;
        var y = formattedDate.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp_date_P").val("");
            $("#dtp_date_P").val(y + "-" + m + "-" + d);

            var ddtp_date_PL = $("#dtp_date_P").val();

            if (ddtp_date_PL == "NaN-NaN-NaN")
            {
                $("#date_P").val("");
                $("#dtp_date_P").val("");
            }
        }
        else
        {
            $("#dtp_date_P").val("");
        }
    });

    $("#validerAddRecommandation").on('mousemove',function () {
        var mydate = Data_format($("#recom_date").val());
        var formattedDate = new Date(mydate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth(); m +=1;
        var y = formattedDate.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp_recom_date").val("");
            $("#dtp_recom_date").val(y + "-" + m + "-" + d);

            var ddtp_date_PL = $("#dtp_recom_date").val();

            if (ddtp_date_PL == "NaN-NaN-NaN")
            {
                $("#recom_date").val("");
                $("#dtp_recom_date").val("");
            }
        }
        else
        {
            $("#dtp_recom_date").val("");
        }
    });

    $("#validerAddInspection").on('mousemove',function () {
        var mydate = Data_format($("#date_inspect").val());
        var formattedDate = new Date(mydate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth(); m +=1;
        var y = formattedDate.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp_date_inspect").val("");
            $("#dtp_date_inspect").val(y + "-" + m + "-" + d);

            var ddtp_date_PL = $("#dtp_date_inspect").val();

            if (ddtp_date_PL == "NaN-NaN-NaN")
            {
                $("#date_inspect").val("");
                $("#dtp_date_inspect").val("");
            }
        }
        else
        {
            $("#dtp_date_inspect").val("");
        }
    });

    $("#validerAddLivraison").on('mousemove',function () {
        var mydate = Data_format($("#date_reception_livraison").val());
        var formattedDate = new Date(mydate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth(); m +=1;
        var y = formattedDate.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp_date_reception_livraison").val("");
            $("#dtp_date_reception_livraison").val(y + "-" + m + "-" + d);

            var ddtp_date_PL = $("#dtp_date_reception_livraison").val();

            if (ddtp_date_PL == "NaN-NaN-NaN")
            {
                $("#date_reception_livraison").val("");
                $("#dtp_date_reception_livraison").val("");
            }
        }
        else
        {
            $("#dtp_date_reception_livraison").val("");
        }

        var mydate1 = Data_format($("#date_finGaranreception_livraison").val());
        var formattedDate1 = new Date(mydate1);
        var d1 = formattedDate1.getDate();
        var m1 = formattedDate1.getMonth(); m1 +=1;
        var y1 = formattedDate1.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp_date_finGaranreception_livraison").val("");
            $("#dtp_date_finGaranreception_livraison").val(y1 + "-" + m1 + "-" + d1);

            var ddtp_date_PL1 = $("#dtp_date_finGaranreception_livraison").val();

            if (ddtp_date_PL1 == "NaN-NaN-NaN")
            {
                $("#date_finGaranreception_livraison").val("");
                $("#dtp_date_finGaranreception_livraison").val("");
            }
        }
        else
        {
            $("#dtp_date_finGaranreception_livraison").val("");
        }
    });

    $("#validerAddReclamation").on('mousemove',function () {
        var mydate = Data_format($("#reclamation_date_deposition").val());
        var formattedDate = new Date(mydate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth(); m +=1;
        var y = formattedDate.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp_date_reclamation_client").val("");
            $("#dtp_date_reclamation_client").val(y + "-" + m + "-" + d);

            var ddtp_date_PL = $("#dtp_date_reclamation_client").val();

            if (ddtp_date_PL == "NaN-NaN-NaN")
            {
                $("#reclamation_date_deposition").val("");
                $("#dtp_date_reclamation_client").val("");
            }
        }
        else
        {
            $("#dtp_date_reclamation_client").val("");
        }

        var mydate1 = $("#date_reclamation_observation_cg").val();
        var formattedDate1 = new Date(mydate1);
        var d1 = formattedDate1.getDate();
        var m1 = formattedDate1.getMonth(); m1 +=1;
        var y1 = formattedDate1.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp_date_reclamation_observation_cg").val("");
            $("#dtp_date_reclamation_observation_cg").val(y1 + "-" + m1 + "-" + d1);

            var ddtp_date_PL1 = $("#dtp_date_reclamation_observation_cg").val();

            if (ddtp_date_PL1 == "NaN-NaN-NaN")
            {
                $("#date_reclamation_observation_cg").val("");
                $("#dtp_date_reclamation_observation_cg").val("");
            }
        }
        else
        {
            $("#dtp_date_reclamation_observation_cg").val("");
        }
    });

    $("#validerAddActivite").on('mousemove',function () {
        var mydate = Data_format($("#activite_date").val());
        var formattedDate = new Date(mydate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth(); m +=1;
        var y = formattedDate.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp_activite_date").val("");
            $("#dtp_activite_date").val(y + "-" + m + "-" + d);

            var ddtp_date_PL = $("#dtp_activite_date").val();

            if (ddtp_date_PL == "NaN-NaN-NaN")
            {
                $("#activite_date").val("");
                $("#dtp_activite_date").val("");
            }
        }
        else
        {
            $("#dtp_activite_date").val("");
        }
    });

    $("#validerAddMaintenance").on('mousemove',function () {

        var mydate = Data_format($("#mainte_date").val());
        var formattedDate = new Date(mydate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth(); m +=1;
        var y = formattedDate.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp_mainte_date").val("");
            $("#dtp_mainte_date").val(y + "-" + m + "-" + d);

            var date1 = $("#dtp_mainte_date").val();

            if (date1 == "NaN-NaN-NaN")
            {
                $("#mainte_date").val("");
                $("#dtp_mainte_date").val("");
            }
        }
        else
        {
            $("#dtp_mainte_date").val("");
        }
    });

    $("#validerEvolution").on('mousemove',function () {
        var mydate = Data_format($("#recom_date_evolu").val());
        var formattedDate = new Date(mydate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth(); m +=1;
        var y = formattedDate.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp_recom_date_evolu").val("");
            $("#dtp_recom_date_evolu").val(y + "-" + m + "-" + d);

            var ddtp_date_PL = $("#dtp_recom_date_evolu").val();

            if (ddtp_date_PL == "NaN-NaN-NaN")
            {
                $("#recom_date_evolu").val("");
                $("#dtp_recom_date_evolu").val("");
            }
        }
        else
        {
            $("#dtp_recom_date_evolu").val("");
        }
    });

    $("#validerEvolution").on('mousemove',function () {
        var mydate = Data_format($("#date_livraison_evo").val());
        var formattedDate = new Date(mydate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth(); m +=1;
        var y = formattedDate.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp_date_livraison_evo").val("");
            $("#dtp_date_livraison_evo").val(y + "-" + m + "-" + d);

            var ddtp_date_PL = $("#dtp_date_livraison_evo").val();

            if (ddtp_date_PL == "NaN-NaN-NaN")
            {
                $("#date_livraison_evo").val("");
                $("#dtp_date_livraison_evo").val("");
            }
        }
        else
        {
            $("#dtp_date_livraison_evo").val("");
        }
    });

    $("#validerEvolution").on('mousemove',function () {
        var mydate = Data_format($("#date_evo").val());
        var formattedDate = new Date(mydate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth(); m +=1;
        var y = formattedDate.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp_date_evo").val("");
            $("#dtp_date_evo").val(y + "-" + m + "-" + d);

            var ddtp_date_PL = $("#dtp_date_evo").val();

            if (ddtp_date_PL == "NaN-NaN-NaN")
            {
                $("#date_evo").val("");
                $("#dtp_date_evo").val("");
            }
        }
        else
        {
            $("#dtp_date_evo").val("");
        }
    });

    $("#validerRevisionAdd").on('mousemove',function () {

        var mydate = Data_format($("#date_revision").val());
        var formattedDate = new Date(mydate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth(); m +=1;
        var y = formattedDate.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp1Revision").val("");
            $("#dtp1Revision").val(y + "-" + m + "-" + d);

            var date1 = $("#dtp1Revision").val();

            if (date1 == "NaN-NaN-NaN")
            {
                $("#date_revision").val("");
                $("#dtp1Revision").val("");
            }
        }
        else
        {
            $("#dtp1Revision").val("");
        }
    });

    $("#validerVisiteAdd").on('mousemove',function () {

        var mydate = Data_format($("#date_visiteTechnique").val());
        var formattedDate = new Date(mydate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth(); m +=1;
        var y = formattedDate.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp1Visite").val("");
            $("#dtp1Visite").val(y + "-" + m + "-" + d);

            var date1 = $("#dtp1Visite").val();

            if (date1 == "NaN-NaN-NaN")
            {
                $("#date_visiteTechnique").val("");
                $("#dtp1Visite").val("");
            }
        }
        else
        {
            $("#dtp1Visite").val("");
        }
    });

    $("#validerAssuranceAdd").on('mousemove',function () {

        var mydate = Data_format($("#date_Assurance").val());
        var formattedDate = new Date(mydate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth(); m +=1;
        var y = formattedDate.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp1Assurance").val("");
            $("#dtp1Assurance").val(y + "-" + m + "-" + d);

            var date1 = $("#dtp1Assurance").val();

            if (date1 == "NaN-NaN-NaN")
            {
                $("#date_Assurance").val("");
                $("#dtp1Assurance").val("");
            }
        }
        else
        {
            $("#dtp1Assurance").val("");
        }
    });

    $("#validerGarantieAdd").on('mousemove',function () {

        var mydate = Data_format($("#date_garantie").val());
        var formattedDate = new Date(mydate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth(); m +=1;
        var y = formattedDate.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp1Garantie").val("");
            $("#dtp1Garantie").val(y + "-" + m + "-" + d);

            var date1 = $("#dtp1Garantie").val();

            if (date1 == "NaN-NaN-NaN")
            {
                $("#date_garantie").val("");
                $("#dtp1Garantie").val("");
            }
        }
        else
        {
            $("#dtp1Garantie").val("");
        }
    });

    $("#validerVehiculeAdd").on('mousemove',function () {

        var mydate = Data_format($("#date_premiere_livre").val());
        var formattedDate = new Date(mydate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth(); m +=1;
        var y = formattedDate.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp_premiere_livre").val("");
            $("#dtp_premiere_livre").val(y + "-" + m + "-" + d);

            var date1 = $("#dtp_premiere_livre").val();

            if (date1 == "NaN-NaN-NaN")
            {
                $("#date_premiere_livre").val("");
                $("#dtp_premiere_livre").val("");
            }
        }
        else
        {
            $("#dtp_premiere_livre").val("");
        }
    });

    $("#validerAddMaintenancestandard").on('mousemove',function () {

        var mydate = Data_format($("#maintstand_date").val());
        var formattedDate = new Date(mydate);
        var d = formattedDate.getDate();
        var m = formattedDate.getMonth(); m +=1;
        var y = formattedDate.getFullYear();

        if (mydate.length != 0)
        {
            $("#dtp_maintestand_date").val("");
            $("#dtp_maintestand_date").val(y + "-" + m + "-" + d);

            var date1 = $("#dtp_maintestand_date").val();

            if (date1 == "NaN-NaN-NaN")
            {
                $("#maintstand_date").val("");
                $("#dtp_maintestand_date").val("");
            }
        }
        else
        {
            $("#dtp_maintestand_date").val("");
        }
    });

    var select = 0;

    function curseurPosition(tel) {
        var start = tel[0].selectionStart;
        var end = tel[0].selectionEnd;
        diff = end - start;

        if(start>=0 && start==end)
        {
            select = 0;
            return start;
        }
        else if(start>=0)
        {
            select = 1;
            return select;
        }
    }

    $.fn.curseurPositionChange = function (start,end) {
        return this.each(function () {
            if(this.setSelectionRange)
            {
                this.focus();
                this.setSelectionRange(start,end);
            }
            else if(this.createTextRange)
            {
                var range = this.createTextRange();
                range.collapse(true);
                range.moveEnd('character',end);
                range.moveStart('character',start);
                range.select();
            }
        });
    }


    $('.tel').on('keydown', function (e) {

        var idTel = $(this).attr('id');
        var telVal = $('#'+idTel).val();
        var telValL = telVal.length;
        var fermVal = ')';
        var ferm = telVal.indexOf(fermVal);
        var idsities = telVal.substr(0,ferm+1);
        var idsitiesL = idsities.length;

        var telValOutId = telVal.substr(ferm+2);
        var telValOutIdL = telValOutId.length;
        var telValOutIdOutSpace = telValOutId.replace(/\s/g,"");
        var telValOutIdOutSpaceL = telValOutIdOutSpace.length;
        var curspos = curseurPosition($(this));

        var afterCurs = telVal.charAt(curspos);
        var beforCurs = telVal.charAt(curspos-1);

        if(select !=0)return false;
        if(e.keyCode != 8 && e.keyCode != 32 && e.keyCode != 37 && e.keyCode != 39 && e.keyCode != 48 && e.keyCode != 49 && e.keyCode != 50 && e.keyCode != 51 && e.keyCode != 52  && e.keyCode != 53 && e.keyCode != 54 && e.keyCode != 55  && e.keyCode != 56  && e.keyCode !=57)
            return false;
        if(curspos==1 || curspos==0)
            return false;
        if( (curspos==2 && (curspos!=ferm || curspos==ferm)) && (e.keyCode!=39 && e.keyCode != 49 && e.keyCode != 50 && e.keyCode != 51 && e.keyCode != 52  && e.keyCode != 53 && e.keyCode != 54 && e.keyCode != 55  && e.keyCode != 56  && e.keyCode !=57))
            return false;
        if(curspos==ferm+2 && (e.keyCode != 8 && e.keyCode!=37 && e.keyCode!=39 && e.keyCode != 49 && e.keyCode != 50 && e.keyCode != 51 && e.keyCode != 52  && e.keyCode != 53 && e.keyCode != 54 && e.keyCode != 55  && e.keyCode != 56  && e.keyCode !=57) )
            return false;
        if(curspos>=ferm+1 && e.keyCode == 32)
            return false;
        if(curspos > 2 && curspos == ferm && e.keyCode == 39)
            $('#'+idTel).curseurPositionChange(ferm+1,ferm+1);
        if(curspos == 2 && curspos == ferm && e.keyCode == 39)
            $('#'+idTel).curseurPositionChange(ferm+1,ferm+1);
        if(curspos>=2 && curspos<=ferm && e.keyCode==32)
        {
            if(beforCurs=='+' && afterCurs==')')return false;
            else if(beforCurs=='+' && afterCurs!=')')return false;
            else if(beforCurs!='+' && afterCurs!=')')return false;
        }
        else if(curspos==ferm+2 && e.keyCode==37)
            $('#'+idTel).curseurPositionChange(ferm+1,ferm+1);
        else if(curspos==ferm+2 && e.keyCode==8)
        {
            $('#'+idTel).curseurPositionChange(ferm,ferm);
            return false;
        }
        if(curspos == idsitiesL  &&  (e.keyCode == 48 || e.keyCode == 49 || e.keyCode == 50 || e.keyCode == 51 || e.keyCode == 52  || e.keyCode == 53 || e.keyCode == 54 || e.keyCode == 55  || e.keyCode == 56  || e.keyCode ==57)){
            if(e.keyCode == 48)
                return false;
            else
            $('#'+idTel).curseurPositionChange(curspos+1,curspos+1);

        }

        if(curspos>=ferm+2 &&  (e.keyCode == 48  || e.keyCode == 49 || e.keyCode == 50 || e.keyCode == 51 || e.keyCode == 52  || e.keyCode == 53 || e.keyCode == 54 || e.keyCode == 55  || e.keyCode == 56  || e.keyCode ==57))
        {

            if(telValOutIdOutSpaceL == 2 || telValOutIdOutSpaceL == 4 || telValOutIdOutSpaceL == 6){
                $('#'+idTel).val(telVal+' ');
            }

            if(telValOutIdOutSpaceL == 8){
                var n1 = telValOutIdOutSpace.charAt(0)+''+telValOutIdOutSpace.charAt(1)+''+telValOutIdOutSpace.charAt(2);
                var n2 = telValOutIdOutSpace.charAt(3)+''+telValOutIdOutSpace.charAt(4);
                var n3 = telValOutIdOutSpace.charAt(5)+''+telValOutIdOutSpace.charAt(6);
                var n4 = telValOutIdOutSpace.charAt(7)+''+telValOutIdOutSpace.charAt(8);

                telVal = idsities+' '+n1+' '+n2+' '+n3+' '+n4;
                $('#'+idTel).val(telVal);
            }

            if(telValOutIdOutSpaceL == 9){
                $('#'+idTel).val(telVal+' ');
            }

            if(telValOutIdOutSpaceL >= 11){
                var valTelSuplement = telValOutIdOutSpace.substr(11);
                var valTelSuplementRest = valTelSuplement.length%2;

                if(valTelSuplementRest==0){
                    $('#'+idTel).val(telVal+' ');
                }
            }

        }

    });

    $('.tel').on('keyup',function () {
        var idTel = $(this).attr('id');
        var telVal = $('#'+idTel).val();
        var telValL = telVal.length;
        var fermVal = ')';
        var ferm = telVal.indexOf(fermVal);
        var idsities = telVal.substr(0,ferm+1);
        var idsitiesL = idsities.length;

        var telValOutId = telVal.substr(ferm+2);
        var telValOutIdL = telValOutId.length;
        var telValOutIdOutSpace = telValOutId.replace(/\s/g,"");
        var telValOutIdOutSpaceL = telValOutIdOutSpace.length;
        var curspos = curseurPosition($(this));

        if(telValOutIdOutSpaceL == 8){

            var n1 = telValOutIdOutSpace.charAt(0)+''+telValOutIdOutSpace.charAt(1);
            var n2 = telValOutIdOutSpace.charAt(2)+''+telValOutIdOutSpace.charAt(3);
            var n3 = telValOutIdOutSpace.charAt(4)+''+telValOutIdOutSpace.charAt(5);
            var n4 = telValOutIdOutSpace.charAt(6)+''+telValOutIdOutSpace.charAt(7);

            telVal = idsities+' '+n1+' '+n2+' '+n3+' '+n4;
            $('#'+idTel).val(telVal);
        }

        if(telValOutIdL>0) {
            var cursorpostelValOutId = curspos - (idsitiesL + 1);
            var leftcharcursorpostelvaloutid = telValOutId.charAt(cursorpostelValOutId - 1);
            var telvalsuproldspace = '';

            if (cursorpostelValOutId == telValOutIdL) {

                if (leftcharcursorpostelvaloutid == ' ') {

                    for (var i = 0; i < telValOutIdL - 1; i++) {
                        telvalsuproldspace = telvalsuproldspace + "" + telValOutId.charAt(i);
                    }

                    telVal = idsities + ' ' + telvalsuproldspace;
                    $('#' + idTel).val(telVal);
                }
            }

        }

    });

});