$(document).ready(function () {
    $("#autoNewVeh").click(function () {

        var element = 'new vehicule';
        $.post('controller/Autocomplete.php',{openmodalvehiculeandautocomplet:element},function (data) {
            data = $.parseJSON(data);
            var code_client = data[0];
            var nom_client = data[1];
            $("#ModalAddClient").modal('toggle');
            $("#formClientAdd")[0].reset();
            $("#menu_client_modal").val("");
            $("#resultDivClient").hide();
            $("#conteneur").load('view/Vehicule.php');
            $("#mySpan").text("Enr\351gistrement V\351hucules").hide();
            $("#code_client_vehicul").val(code_client);
            $("#client_vehicule").val(nom_client);
            ModalVehiculeInsertion();
            $(".repertoire").empty();
            $(".repertoire").append("<div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Enr&eacute;gistrement</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div><div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>V&eacute;hicule</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div>");

        });
    });

    $("#autoNewProg").click(function () {
        var element = 'new programme';
        $.post('controller/Autocomplete.php',{openmodalprogandautocomplet:element},function (data) {
            data = $.parseJSON(data);
            var imm_veh = data[0];
            var nom_client = data[1];
            $("#ModalAddVehicule").modal('toggle');
            $("#formVehicule")[0].reset();
            $("#menu_vehicule_modal").val("");
            $("#resultDivVehicule").hide();
            $("#conteneur").load('view/Programmation.php');
            $("#mySpan").text("Programmation").hide();
            $("#immatriculation_programmation").val(imm_veh);
            $("#client_programmation").val(nom_client);
            ModalProgrammationInsertion();
            $(".repertoire").empty();
            $(".repertoire").append("<div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Programmation</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div>");

        });
    });

    $("#autoNewRecepProg").click(function () {
        var element = 'new reception';
        $.post('controller/Autocomplete.php',{openmodalrecepandautocomplet:element},function (data) {
            data = $.parseJSON(data);
            var imm_veh = data[0];
            var nom_client = data[1];
            var tache = data[2];
            var reception = $("#menu_prog_modal_recep").val();

            if(reception.length!=0)
            {
                $("#validerProgrammationAdd").text('Valider');

                $("#formProgrammation")[0].reset();
                $("#resultDivProgrammation").hide();
                $("#ModalAddProgrammation").modal('toggle');
            }
            else
            {
                $("#resultDivProgrammation").css("background-color", "darkred");
                $("#resultDivProgrammation").css("color", "white");
                $("#resultDivProgrammation").text('Veillez choisir le type de r\351ception \340 effectuer.');
                $("#resultDivProgrammation").slideDown(1000);
                setTimeout(function () {
                    $("#resultDivProgrammation").slideUp(1000);
                },4000);
            }

            if(reception.length!=0 && reception=='Quick Service')
            {
                $("#mySpan").text("Quick Services").hide();
                $("#immatriculation_R").val(imm_veh);
                $("#client_R").val(nom_client);
                $("#tache_R").val(tache);
                $(".repertoire").empty();
                $(".repertoire").append("<div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>R&eacute;ception</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div><div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Quick Service</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div>");
                $("#conteneur").load('view/ReceptionQuickService.php');
                ModalReceptionQS();
                ModalReceptionInsertion();
            }
            else if(reception.length!=0 && reception=='High Service')
            {
                $("#mySpan").text("High Services").hide();
                $("#immatriculation_R").val(imm_veh);
                $("#client_R").val(nom_client);
                $("#tache_R").val(tache);
                $(".repertoire").empty();
                $(".repertoire").append("<div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>R&eacute;ception</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div><div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>High Service</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div>");
                $("#conteneur").load('view/ReceptionHighService.php');
                ModalReceptionHS();
                ModalReceptionInsertion();
            }
            else if(reception.length!=0 && reception=='Devis')
            {
                $("#mySpan").text("Devis").hide();
                $("#immatriculation_R").val(imm_veh);
                $("#client_R").val(nom_client);
                $("#tache_R").val(tache);
                $(".repertoire").empty();
                $(".repertoire").append("<div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>R&eacute;ception</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div><div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Devis</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div>");
                $("#conteneur").load('view/ReceptionDevis.php');
                ModalReceptionDe();
                ModalReceptionInsertion();
            }
            else if(reception.length!=0 && reception=='Assurance')
            {
                $("#mySpan").text("Assurance").hide();
                $("#immatriculation_R").val(imm_veh);
                $("#client_R").val(nom_client);
                $("#tache_R").val(tache);
                $(".repertoire").empty();
                $(".repertoire").append("<div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>R&eacute;ception</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div><div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Assurance</h6><h6 style='font-size: 100%; color:white; opacity: 0.2;' class='glyphicon glyphicon-menu-right'></h6></div>");
                $("#conteneur").load('view/ReceptionAssurance.php');
                ModalReceptionAs();
                ModalReceptionInsertion();
            }

            $("#menu_prog_modal_recep").val("");
        });
    });
});