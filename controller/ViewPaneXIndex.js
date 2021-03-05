$(document).ready(function () { indexOption

    $("#conteneur").load('view/Accueil.php');
    $('#conteneur').css({
        height: '99.5%'
    });

     $("#acceuil").on('click',function () {
         $("#mySpan").text("");
        $("#liste_enregistrement").hide();
        $("#liste_reception").hide();
        $("#liste_reparation").hide();
        $("#liste_observation").hide();
        $("#showModalAdd").hide();
        $("#indexOption").hide();
        $(".email").hide();
        $(".indexFootInfoLeft").hide();
        $(".nbrListShow").hide();
        $(".repertoire").empty();
         $("#parentConteneur").css("padding-top","0vh");
         $("#conteneur").load('view/Accueil.php');
    });

    $("#nbrListSelect").change(function () {

        $("#showModalAdd").show();
        $("#indexOption").show();
        $(".indexFootInfoLeft").show();
        $(".indexFootInfoLeft").show();
        $(".contextmenustatique").hide();
        $(".listeClientAllDivEtat").text(" ");

        var nbrListSelect = $("#nbrListSelect").val();

        if(nbrListSelect == 50)
        {
            if($("#mySpan").text() == "Enr\351gistrement Clients")
            {
                $("#conteneur").load('view/enregistrement/clients/Client.php');
            }

            if($("#mySpan").text() == "Enr\351gistrement V\351hucules")
            {
                $("#conteneur").load('view/enregistrement/vehicules/Vehicule.php');
            }

            if($("#mySpan").text() == "Enr\351gistrement Techniciens")
            {
                $("#conteneur").load('view/enregistrement/techniciens/Technicien.php');
            }

            if($("#mySpan").text() == "Programmation")
            {
                $("#conteneur").load('view/programmation/Programmation.php');
            }

            if($("#mySpan").text() == "Quick Services")
            {
                $("#conteneur").load('view/reception/quickService/ReceptionQuickService.php');
            }

            if($("#mySpan").text() == "High Services")
            {
                $("#conteneur").load('view/reception/highService/ReceptionHighService.php');
            }

            if($("#mySpan").text() == "Devis")
            {
                $("#conteneur").load('view/reception/devis/ReceptionDevis.php');
            }

            if($("#mySpan").text() == "Assurance")
            {
                $("#conteneur").load('view/reception/assurance/ReceptionAssurance.php');
            }

            if($("#mySpan").text() == "Maintenance")
            {
                $("#conteneur").load('view/ordreDeReparation/maintenance/Maintenance.php');
            }

            if($("#mySpan").text() == "Livraison")
            {
                $("#conteneur").load('view/livraison/Livraison.php');
            }

            if($("#mySpan").text() == "Recommandation")
            {
                $("#conteneur").load('view/observation/recommandation/Recommandation.php');
            }

            if($("#mySpan").text() == "Observation - R\351clamation")
            {
                $("#conteneur").load('view/oservation/reclamation/Reclamation.php');
            }

            if($("#mySpan").text() == "Pointage Technicien")
            {
                $("#conteneur").load('view/observation/pointage/Pointage.php');
            }
        }
        else if(nbrListSelect == 100)
        {
            if($("#mySpan").text() == "Enr\351gistrement Clients")
            {
                $("#conteneur").load('view/enregistrement/clients/ClientB.php');
            }

            if($("#mySpan").text() == "Enr\351gistrement V\351hucules")
            {
                $("#conteneur").load('view/enregistrement/vehicules/VehiculeB.php');
            }

            if($("#mySpan").text() == "Enr\351gistrement Techniciens")
            {
                $("#conteneur").load('view/enregistrement/techniciens/TechnicienB.php');
            }

            if($("#mySpan").text() == "Programmation")
            {
                $("#conteneur").load('view/programmation/ProgrammationB.php');
            }

            if($("#mySpan").text() == "Quick Services")
            {
                $("#conteneur").load('view/reception/quickService/ReceptionQuickServiceB.php');
            }

            if($("#mySpan").text() == "High Services")
            {
                $("#conteneur").load('view/reception/highService/ReceptionHighServiceB.php');
            }

            if($("#mySpan").text() == "Devis")
            {
                $("#conteneur").load('view/reception/devis/ReceptionDevisB.php');
            }

            if($("#mySpan").text() == "Assurance")
            {
                $("#conteneur").load('view/reception/assurance/ReceptionAssuranceB.php');
            }

            if($("#mySpan").text() == "Maintenance")
            {
                $("#conteneur").load('view/ordreDeReparation/maintenance/MaintenanceB.php');
            }

            if($("#mySpan").text() == "Livraison")
            {
                $("#conteneur").load('view/livraison/LivraisonB.php');
            }

            if($("#mySpan").text() == "Recommandation")
            {
                $("#conteneur").load('view/observation/recommandation/RecommandationB.php');
            }

            if($("#mySpan").text() == "Observation - R\351clamation")
            {
                $("#conteneur").load('view/oservation/reclamation/ReclamationB.php');
            }

            if($("#mySpan").text() == "Pointage Technicien")
            {
                $("#conteneur").load('view/observation/pointage/PointageB.php');
            }
        }
        else if(nbrListSelect == 250)
        {
            if($("#mySpan").text() == "Enr\351gistrement Clients")
            {
                $("#conteneur").load('view/enregistrement/clients/ClientC.php');
            }

            if($("#mySpan").text() == "Enr\351gistrement V\351hucules")
            {
                $("#conteneur").load('view/enregistrement/vehicules/VehiculeC.php');
            }

            if($("#mySpan").text() == "Enr\351gistrement Techniciens")
            {
                $("#conteneur").load('view/enregistrement/techniciens/TechnicienC.php');
            }

            if($("#mySpan").text() == "Programmation")
            {
                $("#conteneur").load('view/programmation/ProgrammationC.php');
            }

            if($("#mySpan").text() == "Quick Services")
            {
                $("#conteneur").load('view/reception/quickService/ReceptionQuickServiceC.php');
            }

            if($("#mySpan").text() == "High Services")
            {
                $("#conteneur").load('view/reception/highService/ReceptionHighServiceC.php');
            }

            if($("#mySpan").text() == "Devis")
            {
                $("#conteneur").load('view/reception/devis/ReceptionDevisC.php');
            }

            if($("#mySpan").text() == "Assurance")
            {
                $("#conteneur").load('view/reception/assurance/ReceptionAssuranceC.php');
            }

            if($("#mySpan").text() == "Maintenance")
            {
                $("#conteneur").load('view/ordreDeReparation/maintenance/MaintenanceC.php');
            }

            if($("#mySpan").text() == "Livraison")
            {
                $("#conteneur").load('view/livraison/LivraisonC.php');
            }

            if($("#mySpan").text() == "Recommandation")
            {
                $("#conteneur").load('view/observation/recommandation/RecommandationC.php');
            }

            if($("#mySpan").text() == "Observation - R\351clamation")
            {
                $("#conteneur").load('view/oservation/reclamation/ReclamationC.php');
            }

            if($("#mySpan").text() == "Pointage Technicien")
            {
                $("#conteneur").load('view/observation/pointage/PointageC.php');
            }
        }
        else if(nbrListSelect == 500)
        {
            if($("#mySpan").text() == "Enr\351gistrement Clients")
            {
                $("#conteneur").load('view/enregistrement/clients/ClientD.php');
            }

            if($("#mySpan").text() == "Enr\351gistrement V\351hucules")
            {
                $("#conteneur").load('view/enregistrement/vehicules/VehiculeD.php');
            }

            if($("#mySpan").text() == "Enr\351gistrement Techniciens")
            {
                $("#conteneur").load('view/enregistrement/techniciens/TechnicienD.php');
            }

            if($("#mySpan").text() == "Programmation")
            {
                $("#conteneur").load('view/programmation/ProgrammationD.php');
            }

            if($("#mySpan").text() == "Quick Services")
            {
                $("#conteneur").load('view/reception/quickService/ReceptionQuickServiceD.php');
            }

            if($("#mySpan").text() == "High Services")
            {
                $("#conteneur").load('view/reception/highService/ReceptionHighServiceD.php');
            }

            if($("#mySpan").text() == "Devis")
            {
                $("#conteneur").load('view/reception/devis/ReceptionDevisD.php');
            }

            if($("#mySpan").text() == "Assurance")
            {
                $("#conteneur").load('view/reception/assurance/ReceptionAssuranceD.php');
            }

            if($("#mySpan").text() == "Maintenance")
            {
                $("#conteneur").load('view/ordreDeReparation/maintenance/MaintenanceD.php');
            }

            if($("#mySpan").text() == "Livraison")
            {
                $("#conteneur").load('view/livraison/LivraisonD.php');
            }

            if($("#mySpan").text() == "Recommandation")
            {
                $("#conteneur").load('view/observation/recommandation/RecommandationD.php');
            }

            if($("#mySpan").text() == "Observation - R\351clamation")
            {
                $("#conteneur").load('view/oservation/reclamation/ReclamationD.php');
            }

            if($("#mySpan").text() == "Pointage Technicien")
            {
                $("#conteneur").load('view/observation/pointage/PointageD.php');
            }
        }

        if($("#mySpan").text() == "R\351paration activit\351s")
        {
            var numRecep = $("#activites_num_reception_liste").val();
            if(numRecep.length != 0){
                ActiviteUniqueIfEnterReception();
            }
            else{
                $("#activites_num_reception_liste").focus();
            }
        }

        if($("#mySpan").text() == "Observation - Inspection")
        {
            var immInspect = $("#immatriculationInspectionShearch").val();
            if(immInspect.length != 0){
                InspectionUniqueIfEnterImmatricule();
            }
            else{
                $("#immatriculationInspectionShearch").focus();
            }
        }
    });

    $("#pagePlus").on('click',function () {
        $("#showModalAdd").show();
        $("#indexOption").show();
        $(".indexFootInfoLeft").show();
        $(".indexFootInfoLeft").show();
        $(".contextmenustatique").hide();

        $(".listeClientAllDivEtat").text("");
        if($("#mySpan").text() == "Enr\351gistrement Clients")
        {
            pageClientPlus();
        }

        if($("#mySpan").text() == "Enr\351gistrement V\351hucules")
        {
            pageVehiculePlus();
        }

        if($("#mySpan").text() == "Enr\351gistrement Techniciens")
        {
            pageTechPlus();
        }

        if($("#mySpan").text() == "Programmation")
        {
            pageProgPlus();
        }

        if($("#mySpan").text() == "Quick Services" || $("#mySpan").text() == "High Services" || $("#mySpan").text() == "Devis" || $("#mySpan").text() == "Assurance")
        {
            pageRecepPlus();
        }

        if($("#mySpan").text() == "Maintenance")
        {
            pageMaintPlus();
        }

        if($("#mySpan").text() == "R\351paration activit\351s")
        {
            var numRecep = $("#activites_num_reception_liste").val();
            if(numRecep.length != 0){
                PageProgActPlus();
            }
            else{
                $('.messageh6').text("Veillez renseigner le num\351ro de r\351ception.");
                ConfirmationLose();
                $("#activites_num_reception_liste").focus().css("border-color","lightcoral");
                $("#activites_num_reception_liste").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#activites_num_reception_liste").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            }
        }

        if($("#mySpan").text() == "Observation - Inspection")
        {
            var immInspect = $("#immatriculationInspectionShearch").val();
            if(immInspect.length != 0){
                PageInspectionPlus();
            }
            else{
                $('.messageh6').text("Veillez renseigner le num\351ro de plaque du v\351hicule.");
                ConfirmationLose();
                $("#immatriculationInspectionShearch").focus().css("border-color","lightcoral");
                $("#immatriculationInspectionShearch").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#immatriculationInspectionShearch").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            }

        }

        if($("#mySpan").text() == "Livraison")
        {
            pageLivrePlus();
        }

        if($("#mySpan").text() == "Recommandation")
        {
            pageRecomPlus();
        }

        if($("#mySpan").text() == "Observation - R\351clamation")
        {
            pageReclamPlus();
        }

        if($("#mySpan").text() == "Pointage Technicien")
        {
            pagePointPlus();
        }

    });

    $("#pageMoin").on('click',function () {
        $("#showModalAdd").show();
        $("#indexOption").show();
        $(".indexFootInfoLeft").show();
        $(".indexFootInfoLeft").show();
        $(".contextmenustatique").hide();

        $(".listeClientAllDivEtat").text("");
        if($("#mySpan").text() == "Enr\351gistrement Clients")
        {
            pageClientMoin();
        }

        if($("#mySpan").text() == "Enr\351gistrement V\351hucules")
        {
            pageVehiculeMoin();
        }

        if($("#mySpan").text() == "Enr\351gistrement Techniciens")
        {
            pageTechMoin();
        }

        if($("#mySpan").text() == "Programmation")
        {
            pageProgMoin();
        }

        if($("#mySpan").text() == "Quick Services" || $("#mySpan").text() == "High Services" || $("#mySpan").text() == "Devis" || $("#mySpan").text() == "Assurance")
        {
            pageRecepMoin();
        }

        if($("#mySpan").text() == "Maintenance")
        {
            pageMaintMoin();
        }

        if($("#mySpan").text() == "R\351paration activit\351s")
        {
            var numRecep = $("#activites_num_reception_liste").val();
            if(numRecep.length != 0){
                PageProgActMoin();
            }
            else{
                $('.messageh6').text("Veillez renseigner le num\351ro de r\351ception.");
                ConfirmationLose();
                $("#activites_num_reception_liste").focus().css("border-color","lightcoral");
                $("#activites_num_reception_liste").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#activites_num_reception_liste").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            }
        }

        if($("#mySpan").text() == "Observation - Inspection")
        {
            var immInspect = $("#immatriculationInspectionShearch").val();
            if(immInspect.length != 0){
                PageInspectionMoin();
            }
            else{
                $('.messageh6').text("Veillez renseigner le num\351ro de plaque du v\351hicule.");
                ConfirmationLose();
                $("#immatriculationInspectionShearch").focus().css("border-color","lightcoral");
                $("#immatriculationInspectionShearch").blur(function () {
                    $(this).css("border-color","lightgray");
                });
                $("#immatriculationInspectionShearch").focus(function () {
                    $(this).css("border-color","lightblue");
                });
            }

        }

        if($("#mySpan").text() == "Livraison")
        {
            pageLivreMoin();
        }

        if($("#mySpan").text() == "Recommandation")
        {
            pageRecomMoin();
        }

        if($("#mySpan").text() == "Observation - R\351clamation")
        {
            pageReclamMoin();
        }

        if($("#mySpan").text() == "Pointage Technicien")
        {
            pagePointMoin();
        }
    });

    $("#consigneID").on('click',function()
    {
        window.open('document/Documentation.php');
    });

    $("#logBtnId").on('click',function(){
        $("#myModal").modal({backdrop: "static"});
    });

    $(".button_glyphicon_paddin_index").on('mousemove',function () {
        $(this).css("background","#a0a0a0");
    });

    $(".button_glyphicon_paddin_index").on('mouseleave',function () {
        $(this).css("background","rgb(238, 238, 238)");
    });

    $(".button_glyphicon_round_index").on('mousemove',function (){
        $(this).css("background","#a0a0a0");
        $(this).css("color","#0a1f6e");
    });

    $(".button_glyphicon_round_index").on('mouseleave',function () {
        $(this).css("background","#0a1f6e");
        $(this).css("color","#d0d0d0");
    });

    $("#indexOptionBtn").on('mousemove',function (){
        var bgColor = $(this).css('background-color');

        if(bgColor == 'rgb(10, 31, 110)')
        {
            $(this).css('background-color','#a0a0a0');
            $(this).css('color','#0a1f6e');
        }
    });

    $("#indexOptionBtn").on('mouseleave',function () {
        var bgColor = $(this).css('background-color');

        if(bgColor == 'rgb(160, 160, 160)')
        {
            $(this).css('background-color','#0a1f6e');
            $(this).css('color','#d0d0d0');
        }
    });

    $("#indexOptionBtn").on('click',function () {
        var bgColor = $(this).css('background-color');
        var element = $("#mySpan").text();

        if(bgColor == 'rgb(160, 160, 160)')
        {
            $(this).css('background-color','#C8C8C8');
            $(this).css('color','#091A5E');

            if(element == "Enr\351gistrement Clients")
            {
                $("#indexOptionItemFile").text('Client');
            }
            if(element == "Enr\351gistrement V\351hucules")
            {
                $("#indexOptionItemFile").text("V\351hucules");
            }
            if(element == "Enr\351gistrement Techniciens")
            {
                $("#indexOptionItemFile").text("Techniciens");
            }
            if(element == "Programmation")
            {
                $("#indexOptionItemFile").text("Programmation");
            }
            if(element == "Quick Services" || element == "High Services" || element == "Devis" || element == "Assurance")
            {
                $("#indexOptionItemFile").text("R\351ception");
            }
            if(element == "Maintenance")
            {
                $("#indexOptionItemFile").text("De Maintenance");
            }
            if(element == "R\351paration activit\351s")
            {
                $("#indexOptionItemFile").text("Des Activit\351s");
            }
            if(element == "Livraison")
            {
                $("#indexOptionItemFile").text("De Livraison");
            }
            if(element == "Observation - Inspection")
            {
                $("#indexOptionItemFile").text("d'Inspection");
            }
            if(element == "Recommandation")
            {
                $("#indexOptionItemFile").text("Des Recommandations");
            }
            if(element == "Observation - R\351clamation")
            {
                $("#indexOptionItemFile").text("De R\351clamation");
            }
            if(element == "Pointage Technicien")
            {
                $("#indexOptionItemFile").text("Du Pointage Technicien");
            }
            if(element == "Administration")
            {
                $("#indexOptionItemFile").text("Des Auxiliaires");
            }
            if(element == "Enr\351gistrement Rendez-vous revision" || element == "Enr\351gistrement Rendez-vous visite technique" || element == "Enr\351gistrement Rendez-vous assurance" || element == "Enr\351gistrement Rendez-vous garantie")
            {
                $("#indexOptionItemFile").text(" ");
                $("#indexOption").children('ul').children('.indexOptionItemFile').css('color','rgb(88, 85, 113)');
            }
            else
            {
                $("#indexOption").children('ul').children('.indexOptionItemFile').css('color','white');
            }

            $("#indexOption").children('ul').show();
        }
        else if(bgColor == 'rgb(200, 200, 200)')
        {
            $(this).css('background-color','#a0a0a0');
            $(this).css('color','#0a1f6e');

            $("#indexOption").children('ul').hide();
            $("#indexOptionItemFile").text('');
        }

    });

    $(".indexOptionItemFile").on('click', function () {
        var element = $("#mySpan").text();
        $("#indexprintveiwlisteclientdiv").empty();
        $("#printDateCouranteDateSelecte").empty();
        $(".printView").empty();
        $("#date_prt_inf").val("");
        $("#date_prt_sup").val("");


        if(element == "Enr\351gistrement Clients")
        {
            $('.printConteneur').show();
            $('.printParametre').load('view/enregistrement/clients/imprime/PrintClientParametre.php');
        }
        else if(element == "Enr\351gistrement V\351hucules")
        {
            $('.printConteneur').show();
            $('.printParametre').load('view/enregistrement/vehicules/imprime/PrintVehiculeParametre.php');
        }
        else if(element == "Enr\351gistrement Techniciens")
        {
            $('.printConteneur').show();
            $('.printParametre').load('view/enregistrement/techniciens/imprime/PrintTechnicienParametre.php');
        }
        else if(element == "Programmation")
        {
            $('.printConteneur').show();
            $('.printParametre').load('view/programmation/imprime/PrintProgrammationParametre.php');
        }
        else if(element == "Quick Services" || element == "High Services" || element == "Devis" || element == "Assurance")
        {
            $('.printConteneur').show();
            $('.printParametre').load('view/reception/imprime/PrintReceptionParametre.php');
        }
        else if(element == "Maintenance")
        {
            $('.printConteneur').show();
            $('.printParametre').load('view/ordreDeReception/maintenanceStandard/imprime/PrintMaintenanceParametre.php');
        }
        else if(element == "R\351paration activit\351s")
        {
            $('.printConteneur').show();
            $('.printParametre').load('view/ordreDeReception/travauxRealises/imprime/PrintProgrammationActiviteParametre.php');
        }
        else if(element == "Livraison")
        {
            $('.printConteneur').show();
            $('.printParametre').load('view/livraison/imprime/PrintLivraisonParametre.php');
        }
        else if(element == "Observation - Inspection")
        {
            $('.printConteneur').show();
            $('.printParametre').load('view/observation/inspection/imprime/PrintInspectionParametre.php');
        }
        else if(element == "Recommandation")
        {
            $('.printConteneur').show();
            $('.printParametre').load('view/observation/recommandation/imprime/PrintRecommandationParametre.php');
        }
        else if(element == "Observation - R\351clamation")
        {
            $('.printConteneur').show();
            $('.printParametre').load('view/observation/reclamation/imprime/PrintReclamationParametre.php');
        }
        else if(element == "Pointage Technicien")
        {
            $('.printConteneur').show();
            $('.printParametre').load('view/observation/pointage/imprime/PrintPointageParametre.php');
        }
        else if(element == "Administration")
        {

        }

        if(element == "Enr\351gistrement Rendez-vous revision" || element == "Enr\351gistrement Rendez-vous visite technique" || element == "Enr\351gistrement Rendez-vous assurance" || element == "Enr\351gistrement Rendez-vous garantie")
        {

        }
        else
        {

        }
    });

    $("#printSelectOrdreAffichage").on('change', function () {
        $("#indexprintveiwlisteclientdiv").empty();
        $("#printDateCouranteDateSelecte").empty();
        $(".printView").empty();
        $("#date_prt_inf").val("");
        $("#date_prt_sup").val("");
    });

    $("#printFootBtnRetour").on('click', function () {
        $("#indexFootBtnPrint").hide();
        $("#indexprintveiwlisteclientdiv").hide();
        $(".indexFootInfoLeft").show();
    });

    $("#acceuil").on('mousemove',function () {
        $(this).css('background-color','#3801d0');
    });

    $("#acceuil").on('mouseleave',function () {
        $(this).css('background-color','#0a1f6e');
    });

    $(".link_table_td").on('mousemove',function () {
        $(this).css('opacity','0.8');
    });

    $(".link_table_td").on('mouseleave',function () {
        $(this).css('opacity','1');
    });

    $(".mp").on('mousemove',function () {
        $(this).css('background-color','#585571');
        $(this).children('ul').show();
    });

    $(".mp").on('mouseleave',function () {
        $(this).css('background-color','#0a1f6e');
        $(this).children('ul').hide();
    });

    $(".list-group-item").on('mousemove',function () {
        $(this).css('background-color','#585571');
    });

    $(".list-group-item").on('mouseleave',function () {
        $(this).css('background-color','#0a1f6e');
    });

    $("#index_body_menu_left, #index_head").on('click',function () {
        $(".contextmenustatique").hide();
        $(".listAllItem").hide();
    });

    $("#index_linck").on('click',function () {
        $("#index_linck").hide();
        $("#index_linck_breack").show();
        prog_td_lincked_show();
        recep_td_lincked_show();
        livraison_td_lincked_show();
        recommandation_td_lincked_show();
        pointage_td_lincked_show();
        prog_activite_td_lincked_show();
        reclamation_td_lincked_show();
    });

    $("#index_linck_breack").on('click',function () {
        $("#index_linck_breack").hide();
        $("#index_linck").show();
        prog_td_lincked_hide();
        recep_td_lincked_hide();
        livraison_td_lincked_hide();
        recommandation_td_lincked_hide();
        pointage_td_lincked_hide();
        prog_activite_td_lincked_hide();
        reclamation_td_lincked_hide();
    });

    $("#index_linck_breack, #index_linck, #logBtnId, #showModalAdd, .nbrListShow, #index_body, #indexOptionListe").on('click',function () {
        $("#indexOptionListe").hide();
        $("#indexOptionBtn").css('background-color','#0a1f6e');
        $("#indexOptionBtn").css('color','#d0d0d0');
    });

    $("#index_linck_breack, #index_linck, #logBtnId, #showModalAdd, .nbrListShow, #indexOptionListe").on('click',function () {
        $("#idexselectvaleurtri").empty();
        $(".indexvaleurtri").hide();
        $("#printDate").show();
        $("#printSelectOrdreAffichage").val('Avant');
    });

    $("#index_linck_breack, #index_linck, #logBtnId, #showModalAdd, .nbrListShow, #index_body_menu_left, #indexOptionBtn").on('click',function () {
        $(".printConteneur").hide();
    });

});