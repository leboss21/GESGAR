$(document).ready(function () {
    $("#showModalAdd").click(function(){

        var lheure="<?php $heur=date('H:i');$finalHour = date('H:i',strtotime('-5 minutes',strtotime($heur)));echo $finalHour; ?>";
        if ( $("#mySpan").text()=='Enr\351gistrement Clients' )
        {
            $("#formClientAdd")[0].reset();
            ModalClentInsertion();

        }
        if ( $("#mySpan").text()=='Enr\351gistrement V\351hucules' )
        {
            $("#formVehicule")[0].reset();
            ModalVehiculeInsertion();
        }
        if ( $("#mySpan").text()=='Enr\351gistrement Techniciens' )
        {
            $("#formTechnicien")[0].reset();
            ModalTechnicienInsertion();
        }

        if ( $("#mySpan").text()=='Programmation')
        {
            $("#formProgrammation")[0].reset();
            ModalProgrammationInsertion();
        }

        if ( $("#mySpan").text()=='Quick Services')
        {
            $("#formReception")[0].reset();
            ModalReceptionQS();
            ModalReceptionInsertion();
        }
        if ( $("#mySpan").text()=='High Services')
        {
            $("#formReception")[0].reset();
            ModalReceptionHS();
            ModalReceptionInsertion();
        }
        if ( $("#mySpan").text()=='Devis')
        {
            $("#formReception")[0].reset();
            ModalReceptionDe();
            ModalReceptionInsertion();
        }
        if ( $("#mySpan").text()=='Assurance')
        {
            $("#formReception")[0].reset();
            ModalReceptionAs();
            ModalReceptionInsertion();
        }
        if ( $("#mySpan").text()=="Enr\351gistrement Rendez-vous revision")
        {
            $("#formRevision")[0].reset();
            ModalRevisionInsertion();
        }
        if ( $("#mySpan").text()=="Enr\351gistrement Rendez-vous visite technique")
        {
            $("#formVisite")[0].reset();
            ModalVisiteInsertion();
        }
        if ( $("#mySpan").text()=="Enr\351gistrement Rendez-vous assurance")
        {
            $("#formAssurance")[0].reset();
            ModalAssuranceInsertion();
        }
        if ( $("#mySpan").text()=="Enr\351gistrement Rendez-vous garantie")
        {
            $("#formGarantie")[0].reset();
            ModalGarantieInsertion();
        }
        if ( $("#mySpan").text()=='Recommandation' )
        {
            $("#formRecom")[0].reset();
            $("#validerAddRecommandation").text("Valider");
            $("#ModalAddRecommandation").modal({backdrop: "static"});
        }
        if ( $("#mySpan").text()=='Observation - Inspection' )
        {
            $("#formInspection")[0].reset();
            $("#nom_client_inspect").prop('readonly',false);
            $("#imm_inspect").prop('readonly',false);
            $("#validerAddInspection").text("Valider");
            $("#resultDivInspection").hide();
            $("#repeteInspection").hide();
            $("#ModalAddInspection").modal({backdrop: "static"});
        }
        if ( $("#mySpan").text()=='Livraison' )
        {
            $("#formLivraison")[0].reset();
            $("#validerAddLivraison").text('Valider');
            $("#ModalAddLivraison").modal({backdrop: "static"});
        }
        if ( $("#mySpan").text()=='R\351paration activit\351s' )
        {
            $("#formActivite")[0].reset();
            $("#activite").empty();
            $("#numreceptionactif").prop("readonly",false);
            $("#validerAddActivite").text("Valider");
            $("#activite").attr('placeholder','');
            $("#tableActivite").empty();
            $("#activites_num_reception_liste").val("");
            $("#ModalAddActivite").modal({backdrop: "static"});
        }
        if ( $("#mySpan").text()=='Observation - R\351clamation' )
        {
            $("#reclamation_etat").attr('checked',false);
            $("#formReclamation")[0].reset();
            $("#reclamation_L_date").text('');
            $("#reclamation_L_km").text('');
            $("#reclamation_L_facture").text('');
            $("#reclamation_imm").attr('readonly',false);
            $("#reclamation_clientNom").attr('readonly',true);
            $("#validerAddReclamation").text('Valider');
            $("#reclamRepet").hide();
            $("#ModalAddReclamation").modal({backdrop: "static"});
        }
        if ( $("#mySpan").text()=='Maintenance')
        {
            $('#formMaintenance')[0].reset();
            $('.maintenanceTexte').val('');
            $("#validerAddMaintenance").text("Valider");
            $('.maintenanceTexte').attr('readonly',false);
            $('.maintenancecheck').prop('checked',false);
            $('#maintenanceselect').empty();
            $("#maintRepete").hide();
            $("#ModalAddMaintenance").modal({backdrop: "static"});
        }
        if ( $("#mySpan").text()=='Maintenance Standard')
        {
            $('#formMaintenancestandard')[0].reset();
            $('.maintenancestandardTexte').val('');
            $("#validerAddMaintenancestandard").text("Valider");
            $('.maintenancestandardTexte').attr('readonly',false);
            $('.maintenanceCheck').prop('checked',false);
            $('#maintenancestandardSelect').empty();
            $("#maintRepete").hide();
            $("#ModalAddMaintenancestandard").modal({backdrop: "static"});
        }
        if ($("#mySpan").text() == 'Pointage Technicien')
        {
            $("#showModalAdd").show();
            $("#repetePointage").hide();
            $("#point_ex").prop('readonly',false);
            $("#point_sec").prop('readonly',false);
            $("#formPointage")[0].reset();
            $("#validerAddPointage").text("Valider");
            $("#ModalAddPointage").modal({backdrop: "static"});
        }
    });

    var element = "";

    $("#menuTMV").change(function () {
        element = $("#menuTMV").val();
        if(element.length!=0 && element=="Type Moteur")
        {
            $("#ModalAddTMV").modal('toggle');
            ModalTM();
        }
        else if(element.length!=0 && element=="Sp\351cialit\351 Technicien")
        {
            $("#ModalAddTMV").modal('toggle');
            ModalST();

        }
        else if(element.length!=0 && element=="Statur Technicien")
        {
            $("#ModalAddTMV").modal('toggle');
            ModalStT();

        }
        else if(element.length!=0 && element=="Genre Client")
        {
            $("#ModalAddTMV").modal('toggle');
            ModalGC();
        }
        $("#formTMV")[0].reset();
        $("#ModalAddTMV").val("");
        $("#resultDivMTV").hide();
    });

    $("#menuTM").change(function () {
        element = $("#menuTM").val();
        if(element.length!=0 && element=="Modele Type v\351hicule")
        {
            $("#ModalAddTM").modal('toggle');
            ModalTMV();
        }
        else if(element.length!=0 && element=="Sp\351cialit\351 Technicien")
        {
            $("#ModalAddTM").modal('toggle');
            ModalST();
        }
        else if(element.length!=0 && element=="Statur Technicien")
        {
            $("#ModalAddTM").modal('toggle');
            ModalStT();
        }
        else if(element.length!=0 && element=="Genre Client")
        {
            $("#ModalAddTM").modal('toggle');
            ModalGC();
        }
        $("#formTM")[0].reset();
        $("#ModalAddTM").val("");
        $("#resultDivTM").hide();
    });

    $("#menuST").change(function () {
        element = $("#menuST").val();
        if(element.length!=0 && element=="Modele Type v\351hicule")
        {
            $("#ModalAddST").modal('toggle');
            ModalTMV();
        }
        else if(element.length!=0 && element=="Type Moteur")
        {
            $("#ModalAddST").modal('toggle');
            ModalTM();
        }
        else if(element.length!=0 && element=="Statur Technicien")
        {
            $("#ModalAddST").modal('toggle');
            ModalStT();
        }
        else if(element.length!=0 && element=="Genre Client")
        {
            $("#ModalAddST").modal('toggle');
            ModalGC();
        }
        $("#formST")[0].reset();
        $("#ModalAddST").val("");
        $("#resultDivST").hide();
    });

    $("#menuStT").change(function () {
        element = $("#menuStT").val();
        if(element.length!=0 && element=="Modele Type v\351hicule")
        {
            $("#ModalAddStT").modal('toggle');
            ModalTMV();
        }
        else if(element.length!=0 && element=="Type Moteur")
        {
            $("#ModalAddStT").modal('toggle');
            ModalTM();
        }
        else if(element.length!=0 && element=="Sp\351cialit\351 Technicien")
        {
            $("#ModalAddStT").modal('toggle');
            ModalST();
        }
        else if(element.length!=0 && element=="Genre Client")
        {
            $("#ModalAddStT").modal('toggle');
            ModalGC();
        }
        $("#formStT")[0].reset();
        $("#ModalAddStT").val("");
        $("#resultDivStT").hide();
    });

    $("#menuGC").change(function () {
        element = $("#menuGC").val();
        if(element.length!=0 && element=="Modele Type v\351hicule")
        {
            $("#ModalAddGC").modal('toggle');
            ModalTMV();
        }
        else if(element.length!=0 && element=="Type Moteur")
        {
            $("#ModalAddGC").modal('toggle');
            ModalTM();
        }
        else if(element.length!=0 && element=="Sp\351cialit\351 Technicien")
        {
            $("#ModalAddGC").modal('toggle');
            ModalST();
        }
        else if(element.length!=0 && element=="Statut Technicien")
        {
            $("#ModalAddGC").modal('toggle');
            ModalStT();
        }
        $("#formGC")[0].reset();
        $("#ModalAddGC").val("");
        $("#resultDivGC").hide();
    });

    var element = "";

    $("#menu_client_modal").change(function () {
        element = $("#menu_client_modal").val();
        if(element.length!=0 && element=="V\351hicule")
        {
            $("#formClientAdd")[0].reset();
            $("#resultDivClient").hide();
            $("#ModalAddClient").modal('toggle');
            $("#conteneur").load("view/Vehicule.php");
            $("#mySpan").text("Enr\351gistrement V\351hucules").hide();
            $(".repertoire").empty();
            $(".repertoire").append("<div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Enr&eacute;gistrement</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div><div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>V&eacute;hicule</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div>");

            if($("#check_client_modal").is(':checked'))
            {
                ModalVehiculeInsertion();
            }
            else $("#menu_client_modal").val('');

            $("#check_client_modal").prop('checked',false);
            $("#menu_client_modal").val("");
            element = "";
        }
        else if(element.length!=0 && element=="Technicien")
        {
            $("#formClientAdd")[0].reset();
            $("#resultDivClient").hide();
            $("#ModalAddClient").modal('toggle');
            $("#conteneur").load("view/Technicien.php");
            $("#mySpan").text("Enr\351gistrement Techniciens").hide();
            $(".repertoire").empty();
            $(".repertoire").append("<div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Enr&eacute;gistrement</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div><div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Technicien</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div>");

            if($("#check_client_modal").is(':checked'))
            {
                ModalTechnicienInsertion();
            }
            else $("#menu_client_modal").val('');

            $("#check_client_modal").prop('checked',false);
            $("#menu_client_modal").val("");
            element = "";
        }

    });

    $("#menu_vehicule_modal").change(function () {
        element = $("#menu_vehicule_modal").val();
        if(element.length!=0 && element=="Client")
        {
            $("#formVehicule")[0].reset();
            $("#resultDivVehicule").hide();
            $("#ModalAddVehicule").modal('toggle');
            $("#conteneur").load("view/Client.php");
            $("#mySpan").text("Enr\351gistrement Clients").hide();
            $(".repertoire").empty();
            $(".repertoire").append("<div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Enr&eacute;gistrement</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div><div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Client</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div>");

            if($("#check_vehicule_modal").is(':checked'))
            {
                ModalClentInsertion();
            }
            else  $("#menu_vehicule_modal").val('');

            $("#check_vehicule_modal").prop('checked',false);
            $("#menu_vehicule_modal").val("");
            element = "";
        }
        else if (element.length!=0 && element=="Technicien")
        {
            $("#formVehicule")[0].reset();
            $("#resultDivVehicule").hide();
            $("#ModalAddVehicule").modal('toggle');
            $("#conteneur").load("view/Technicien.php");
            $("#mySpan").text("Enr\351gistrement Techniciens").hide();
            $(".repertoire").empty();
            $(".repertoire").append("<div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Enr&eacute;gistrement</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div><div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Technicien</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div>");

            if($("#check_vehicule_modal").is(':checked'))
            {
                ModalTechnicienInsertion();
            }
            else  $("#menu_vehicule_modal").val('');

            $("#check_vehicule_modal").prop('checked',false);
            $("#menu_vehicule_modal").val("");
            element = "";
        }

    });

    $("#menu_technicien_modal").change(function () {
        element = $("#menu_technicien_modal").val();
        if(element.length!=0 && element=="Client")
        {
            $("#formTechnicien")[0].reset();
            $("#resultDivTechnicien").hide();
            $("#ModalAddTechnicien").modal('toggle');
            $("#conteneur").load("view/Client.php");
            $("#mySpan").text("Enr\351gistrement Clients").hide();
            $(".repertoire").empty();
            $(".repertoire").append("<div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Enr&eacute;gistrement</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div><div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Client</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div>");

            if($("#check_technicien_modal").is(':checked'))
            {
                ModalClentInsertion();
            }
            else $("#menu_technicien_modal").val('');

            $("#check_technicien_modal").prop('checked',false);
            $("#menu_technicien_modal").val("");
            element = "";
        }
        else if(element.length!=0 && element=="Véhicule")
        {
            $("#formTechnicien")[0].reset();
            $("#resultDivTechnicien").hide();
            $("#ModalAddTechnicien").modal('toggle');
            $("#conteneur").load("view/Vehicule.php");
            $("#mySpan").text("Enr\351gistrement V\351hucules").hide();
            $(".repertoire").empty();
            $(".repertoire").append("<div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Enr&eacute;gistrement</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div><div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>V&eacute;hicule</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div>");

            if($("#check_technicien_modal").is(':checked'))
            {
                ModalVehiculeInsertion();
            }
            else $("#menu_technicien_modal").val('');

            $("#check_technicien_modal").prop('checked',false);
            $("#menu_technicien_modal").val("");
            element = "";
        }

    });

    $("#menu_R_modal").change(function () {

        var option = $("#menu_R_modal").val();
        var element = $('#menu_R_modal option[value="'+option+'"]').text();
        $('.receptionObservationClient').val('');

        if(element.length!=0)$(".auto_activiteA").empty();

        $("#formReception")[0].reset();
        $("#ModalReception").modal('toggle');

        setTimeout(function () {
            if(element.length!=0 && element=="High Service")
            {
                $("#conteneur").load("view/ReceptionHighService.php");
                $("#mySpan").text("High Services").hide();
                $(".repertoire").empty();
                $(".repertoire").append("<div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>R&eacute;ception</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div><div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>High Service</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div>");

                if($("#check_R_modal").is(':checked'))
                {
                    ModalReceptionHS();
                    ModalReceptionInsertion();
                }

            }
            else if(element.length!=0 && element=="Devis")
            {
                $("#conteneur").load("view/ReceptionDevis.php");
                $("#mySpan").text("Devis").hide();
                $(".repertoire").empty();
                $(".repertoire").append("<div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>R&eacute;ception</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div><div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Devis</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div>");

                if($("#check_R_modal").is(':checked'))
                {
                    ModalReceptionDe();
                    ModalReceptionInsertion();
                }
            }
            else if(element.length!=0 && element=="Assurance")
            {
                $("#conteneur").load("view/ReceptionAssurance.php");
                $("#mySpan").text("Assurance").hide();
                $(".repertoire").empty();
                $(".repertoire").append("<div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>R&eacute;ception</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div><div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Assurance</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div>");

                if($("#check_R_modal").is(':checked'))
                {
                    ModalReceptionAs();
                    ModalReceptionInsertion();
                }
            }
            else if(element.length!=0 && element=="Quick Service")
            {
                $("#conteneur").load("view/ReceptionQuickService.php");
                $("#mySpan").text("Quick Services").hide();
                $(".repertoire").empty();
                $(".repertoire").append("<div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>R&eacute;ception</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div><div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Quick Services</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div>");

                if($("#check_R_modal").is(':checked'))
                {
                    ModalReceptionQS();
                    ModalReceptionInsertion();
                }
            }
        },400);

    });

});