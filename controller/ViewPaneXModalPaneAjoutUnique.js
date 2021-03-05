function CientAjoutUniquePrivilegie() {

    var client_cherche = $(".ClientCherche").val();
    var client_id =  $("#listeUniqueReferece").val();

    if(client_cherche == 'Réclamation')
    {
        var clientNomNew = '';
        var clientDateNew = '';
        var telNew = '';
        var immariculeNew = '';
        var chassisNew = '';
        var typeModeleNew = '';
        var dateLivreNew = '';
        var traveauxFaitNew = '';
        var kmNew = '';
        var numFactureNew = '';

        $.post('view/Autocomplete.php',{postidclientreturnclientandgenreandvehiculewherelivraisonexiste:client_id},function (data) {

            data = $.parseJSON(data);

            if(data.length != 0)
            {
                var clientNom = [data.length];
                var clientDate = [data.length];
                var telFixe = [data.length];
                var telCel = [data.length];
                var telDir = [data.length];
                var immaricule = [data.length];
                var chassis = [data.length];
                var typeModele = [data.length];
                var dateLivre = [data.length];
                var traveauxFait = [data.length];
                var km = [data.length];
                var numFacture = [data.length];
                var indix = 0;

                $.each(data, function (key, val) {
                    clientNom[indix] = val.nom_client;
                    clientDate[indix] = val.date_client;
                    telFixe[indix] = val.tel_fix;
                    telCel[indix] = val.tel_cel;
                    telDir[indix] = val.tel_dirct;
                    immaricule[indix] = val.immatricule;
                    chassis[indix] = val.chassis;
                    typeModele[indix] = val.typeModele;
                    dateLivre[indix] = val.dl;
                    traveauxFait[indix] = val.tf;
                    km[indix] = val.km;
                    numFacture[indix] = val.fac;
                    indix++;
                });

                var nomclient = clientNom[0];
                var telfix = telFixe[0];
                var telcel = telCel[0];
                var teldir = telDir[0];
                var dateclient = clientDate[0];


                if(telfix == 'Non Renseigné')telfix='';
                else telfix = telfix.replace(/[()]/g,'');


                if(telcel == 'Non Renseigné')telcel='';
                else telcel = telcel.replace(/[()]/g,'');

                if(teldir == 'Non Renseigné')teldir='';
                else teldir = teldir.replace(/[()]/g,'');

                if(telcel != '' || teldir!='')telfix = telfix+' /';

                if(teldir != '')telcel = telcel+' /';

                if(telfix == ' /')telfix='';
                if(telcel == ' /')telcel='';

                var telclient = telfix+' '+telcel+' '+teldir;

                $("#reclamation_clientNom").val('');
                $("#reclamation_tel").val('');
                $("#reclamation_date_client").val('');
                $("#reclamation_imm").val('');
                $("#reclamation_vin").val('');
                $("#reclamation_L_date").text('');
                $("#reclamation_L_km").text('');
                $("#reclamation_L_facture").text('');
                $("#reclamation_L_traveaux_fait").val('');

                $("#reclamation_clientNom").val(nomclient);
                $("#reclamation_tel").val(telclient);
                $("#reclamation_date_client").val(dateclient);


                clientNomNew = nomclient;
                clientDateNew = dateclient;
                telNew = telclient;
                immariculeNew = '';
                chassisNew = '';
                typeModeleNew = '';
                dateLivreNew = '';
                traveauxFaitNew = '';
                kmNew = '';
                numFactureNew = '';

                if(immaricule.length == 1)
                {
                    $("#reclamation_imm").prop('readonly',true).css('background','white');
                    $("#reclamation_imm").val(immaricule);
                    $("#reclamation_vin").val(chassis);
                    $("#reclamation_type").val(typeModele);
                    $("#reclamation_L_date").text(dateLivre);
                    $("#reclamation_L_km").text(km);
                    $("#reclamation_L_facture").text(numFacture);
                    $("#reclamation_L_traveaux_fait").val(traveauxFait);
                    $("#uniqueReclamationSend").val(client_id);

                    immariculeNew =immaricule;
                    chassisNew = chassis;
                    typeModeleNew = typeModele;
                    dateLivreNew = dateLivre;
                    traveauxFaitNew = traveauxFait;
                    kmNew = km;
                    numFactureNew = numFacture;
                }
                else
                {
                    $("#reclamation_imm").prop('readonly',false).css('background','white');
                    $("#reclamation_imm").autocomplete({
                        source:function (request, reponse) {
                            var results = $.ui.autocomplete.filter(immaricule,request.term);
                            reponse(results.slice(0,10));
                        },
                        select:function (event, ui) {
                            var index = immaricule.indexOf(ui.item.value);
                            $("#reclamation_vin").val(chassis[index]);
                            $("#reclamation_type").val(typeModele[index]);
                            $("#reclamation_L_date").text(dateLivre[index]);
                            $("#reclamation_L_km").text(km[index]);
                            $("#reclamation_L_facture").text(numFacture[index]);
                            $("#reclamation_L_traveaux_fait").val(traveauxFait[index]);
                            $("#uniqueReclamationSend").val(client_id);

                            immariculeNew = ui.item.value;
                            chassisNew = chassis[index];
                            typeModeleNew = typeModele[index];
                            dateLivreNew = dateLivre[index];
                            traveauxFaitNew = traveauxFait[index];
                            kmNew = km[index];
                            numFactureNew = numFacture[index];
                        },
                        change:function (event, ui) {
                            if (!ui.item)
                            {
                                $(event.target).val("");
                                $("#reclamation_vin").val('');
                                $("#reclamation_type").val('');
                                $("#reclamation_L_date").text('');
                                $("#reclamation_L_km").text('');
                                $("#reclamation_L_facture").text('');
                                $("#reclamation_L_traveaux_fait").val('');
                            }
                        },
                        focus:function (event, ui) {
                            return false;
                        }
                    });
                }

                $("#validerAddReclamation").text('Valider');
                $("#reclamRepet").show();
                $("#ModalAddReclamation").modal({backdrop: "static"});
            }
            else
            {
                $("#ModalAddListeUnique").modal('toggle');
                $('.messageh6').text("Ce client n'est pas \351ligible pour effectuer des r\351clamations");
                ConfirmationLose();
            }
        })

        $("#reclamRepet").click(function () {
            $("#reclamation_clientNom").val(clientNomNew);
            $("#reclamation_tel").val(telNew);
            $("#reclamation_date_client").val(clientDateNew);
            $("#reclamation_imm").val(immariculeNew);
            $("#reclamation_vin").val(chassisNew);
            $("#reclamation_type").val(typeModeleNew);
            $("#reclamation_L_date").text(dateLivreNew);
            $("#reclamation_L_km").text(kmNew);
            $("#reclamation_L_facture").text(numFactureNew);
            $("#reclamation_L_traveaux_fait").val(traveauxFaitNew);
            $("#uniqueReclamationSend").val(client_id);
        });
    }

}

function VehiculeAjoutUniquePrivilegie() {

    var vehicule_cherche = $(".VehiculeCherche").val();

    if(vehicule_cherche == 'Maintenance')
    {
        var id_vehicule = $("#listeUniqueReferece").val();

        $.post('view/Autocomplete.php',{postidvehiculereturninfomaintenancevalide:id_vehicule},function (data) {

            data = $.parseJSON(data);

            if(data.length != 0)
            {
                var immatricul = '';

                $.each(data, function (key, val) {
                    immatricul = val.imm;
                });

                $('#formMaintenance')[0].reset();
                $('#maint_imm').val(immatricul);
                $('#uniqueMaintenanceSend').val(id_vehicule);
                $("#validerAddMaintenance").text("Valider");
                $('#maint_imm').attr('readonly',true);
                $('#resultDivMaintenance').slideUp('1000');
                $('#maintenanceSelect').empty();
                $("#validerAddMaintenance").text('Valider');
                $("#maintRepete").show();
                $("#ModalAddMaintenance").modal({backdrop: "static"});

                $("#maintRepete").click(function () {
                    $('#maint_imm').val(immatricul);
                    $('#uniqueMaintenanceSend').val(id_vehicule);
                });

            }
            else
            {
                $("#ModalAddListeUnique").modal('toggle');
                $('.messageh6').text("Ce v\351hicule ne peut pas \352tre maintenir.");
                ConfirmationLose();
            }
        });

    }
    else if(vehicule_cherche == 'Activités')
    {
        var id_vehicule = $("#unique_activite_send").val();
        $.post('view/Autocomplete.php',{postidvehiculereturnifactivitevalide:id_vehicule},function (data) {

            data = $.parseJSON(data);

            if(data.length != 0)
            {
                var imm = '';

                $.each(data,function (key, val) {
                    imm = val.imm;
                });

                $("#numreceptionactif").prop("disabled",true);
                $("#numreceptionactif").css("background",'white');
                $("#numreceptionactif").css("cursor",'text');
                $("#numreceptionactif").val(imm);
                $("#activite").attr('placeholder','nouveaux travaux r\351alis\351 sur le v\351hicule d\'immatriculation '+imm);
                $("#activite_vehiculeActive").attr('value',imm);
                $("#validerAddActivite").text('Valider');
                $("#unique_activite_send").val(id_vehicule);
                $("#ModalAddActivite").modal({backdrop: "static"});
            }
            else
            {
                $("#ModalAddListeUnique").modal('toggle');
                $('.messageh6').text("Aucun activité ne peut être exécuter sur ce véhicule.");
                ConfirmationLose();
            }
        });

    }
    else if(vehicule_cherche == 'Inspection')
    {
        var inspection_reference = $("#listeUniqueReferece").val();
        var client = '';
        var immatricul = '';

        $.post('view/Autocomplete.php',{postidvehiculereturnconfirmationofinspection:inspection_reference},function (data) {

            if(data == 'oui')
            {
                $.post('view/Autocomplete.php',{postidvehiculereturnvehiculeandclient:inspection_reference},function (data) {

                    data = $.parseJSON(data);
                    $.each(data,function (key, val) {
                        client = val.nom_client;
                        immatricul = val.immatricul;
                    });
                    $("#repeteInspection").click(function () {
                        $("#nom_client_inspect").val(client);
                        $("#imm_inspect").val(immatricul);
                        $("#inspectionVehiculeUniqueSend").val(inspection_reference);
                        $("#resultDivInspection").hide();
                    });

                    $("#formInspection")[0].reset();
                    $("#resultDivInspection").hide();
                    $("#repeteInspection").show();
                    $("#nom_client_inspect").val(client);
                    $("#imm_inspect").val(immatricul);
                    $("#inspectionVehiculeUniqueSend").val(inspection_reference);
                    $("#validerAddInspection").text("Valider");
                    $("#nom_client_inspect").prop('readonly',true).css("background",'white');
                    $("#imm_inspect").prop('readonly',true).css("background",'white');
                    $("#validerAddInspection").text('Valider');
                    $("#ModalAddInspection").modal({background:"static"});

                });
            }
            else
            {
                $("#ModalAddListeUnique").modal('toggle');
                $('.messageh6').text("Ce v\351hicule ne peut \352tre inspect\351.");
                ConfirmationLose();
            }

        });
    }
}

function TechnicienAjoutUniquePrivilegie() {

    var tech_cherche = $(".TechCherche").val();
    if(tech_cherche == 'Pointage')
    {
        var element = $("#pointageUniqueIdTech").val();
        var point_ex ='';
        var point_sec ='';

        $.post('view/Autocomplete.php',{postidtechreturntechinfo:element},function (data) {
            data = $.parseJSON(data);
            $("#point_ex").val(data[0]);
            $("#point_sec").val(data[1]);
            $("#point_ex").prop('readonly',true);
            $("#point_sec").prop('readonly',true);
            $("#repetePointage").show();
            $("#validerAddPointage").text("Valider");
            $("#ModalAddPointage").modal({backdrop: "static"});
            point_ex = data[0];
            point_sec = data[1];
        });
        $("#repetePointage").click(function () {
            $("#point_ex").val(point_ex);
            $("#point_sec").val(point_sec);
        });
    }
}