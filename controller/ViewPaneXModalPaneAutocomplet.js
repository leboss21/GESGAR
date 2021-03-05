$(document).ready(function () {
    var element = 'client';
    $("#client_programmation").focus(function () {
        $.post('controller/Autocomplete.php',{postListClient:element},function (data) {
            var data = $.parseJSON(data);
            $("#client_programmation").autocomplete({
                source:function (request, reponse) {
                    var results = $.ui.autocomplete.filter(data,request.term);
                    reponse(results.slice(0,10));
                },
                select:function (event, ui) {
                    $('#immatriculation_programmation').val("");
                    element = ui.item.value;
                    $.post('controller/Autocomplete.php',{postClientReturnImmatriculation:element},function (data) {
                        data = $.parseJSON(data);
                        var immatricul = [data.length];
                        var indix = 0;
                        $.each(data, function (key, val) {
                            immatricul[indix] = val.imm;
                            indix++;
                        });

                        if (immatricul != 0) {
                            if (immatricul.length == 1) {
                                $("#immatriculation_programmation").val(immatricul);
                            }
                            else {
                                $("#immatriculation_programmation").autocomplete({
                                    source: function (request, reponse) {
                                        var results = $.ui.autocomplete.filter(immatricul, request.term);
                                        reponse(results.slice(0, 1000));
                                    },
                                    select: function (event, ui) {
                                        var immatriculation = ui.item.value;
                                        var index = immatricul.indexOf(immatriculation);
                                        var obs = observation[index];

                                        $("#immatriculation_programmation").val(immatriculation);
                                    },
                                    change:function(event, ui)
                                    {
                                        if(!ui.item)
                                        {
                                            $(event.target).val("");
                                            $("#client_programmation").val("");
                                        }
                                    }
                                });
                            }
                        }
                        else
                        {
                            $("#client_programmation").val("");
                            if(confirm('Le client '+element+' n\'a aucun v\351hicule enr\351gistr\351. Voulez vous en cr\351er un ?'))
                            {
                                $.post('controller/Autocomplete.php',{postClientReturnCodeClient:element},function (data) {
                                    $("#ModalAddProgrammation").modal('toggle');
                                    $("#formProgrammation")[0].reset();
                                    $("#menu_prog_modal_recep").val("");
                                    $("#resultDivProgrammation").hide();
                                    $("#conteneur").load('view/Vehicule.php');
                                    $("#mySpan").text("Enr\351gistrement V\351hucules").hide();
                                    $("#code_client_vehicul").val(data);
                                    $("#client_vehicule").val(element);
                                    $("#validerVehiculeAdd").text('Valider');
                                    $("#ModalAddVehicule").modal({backdrop: "static"});
                                });
                            }
                        }
                    });
                },
                change:function (event, ui) {
                    if (!ui.item)
                    {
                        $(event.target).val("");
                        $("#immatriculation_programmation").val("");
                    }
                },
                focus:function (event, ui) {
                    return false;
                }
            });
        });
    });

    $("#immatriculation_programmation").focus(function () {
        var clientExist = $("#client_programmation").val();
        if(clientExist.length==0)
        {
            element = 'imm';
            $.post('controller/Autocomplete.php',{postListimmtall:element},function (data) {
                data = $.parseJSON(data);
                $("#immatriculation_programmation").autocomplete({
                    source:function (request, reponse) {
                        var results = $.ui.autocomplete.filter(data,request.term);
                        reponse(results.slice(0,10));
                    },
                    minLength:0,
                    select:function (event, ui) {
                        $('#client_programmation').val("");
                        element =  ui.item.value;
                        $.post('controller/Autocomplete.php',{postImmtReturnClient:element},function (data) {
                            if (data.length != 0)
                            {
                                $("#client_programmation").val(data);
                            }
                        });
                    },
                    change:function (event, ui) {
                        if (!ui.item)
                        {
                            $(event.target).val("");
                            $('#client_programmation').val("");
                        }
                    },
                    focus:function (event, ui) {
                        return false;
                    }
                });
            });
        }
    });

    element = "codeClient";
    $("#code_client_vehicul").focus(function () {
        $.post('controller/Autocomplete.php',{postListeCodeClient:element},function (data) {
            data = $.parseJSON(data);
            $("#code_client_vehicul").autocomplete({
                source:function (request, reponse) {
                    var results = $.ui.autocomplete.filter(data,request.term);
                    reponse(results.slice(0,10));
                },
                minLength:0,
                select:function (event, ui){
                    $('#client_vehicule').val("");
                    element=ui.item.value;
                    if(element !='4111900')
                    {
                        $('#client_vehicule').prop('readonly',true);
                        $.post('controller/Autocomplete.php',{postCodeClientReturnClient:element},function (data) {
                            $('#client_vehicule').val(data);
                        });
                    }
                    else
                    {
                        $('#client_vehicule').prop('readonly',false);
                        $('#client_vehicule').val('');
                        $.post('controller/Autocomplete.php',{postCodeClientReturnClientDiver:element},function (data) {
                            data = $.parseJSON(data);
                            $('#client_vehicule').autocomplete({
                                source:function (request, reponse) {
                                    var results = $.ui.autocomplete.filter(data,request.term);
                                    reponse(results.slice(0,10));
                                },
                                change:function (event, ui) {
                                    if (!ui.item)
                                    {
                                        $(event.target).val("");
                                    }
                                },
                            })
                        });
                    }
                },
                change:function (event, ui) {
                    if (!ui.item)
                    {
                        $(event.target).val("");
                        $('#client_vehicule').val("");
                        $('#client_vehicule').prop('readonly',true);
                    }
                },
            });
        });
    });

    var element = "typeModele";
    $.post('controller/Autocomplete.php',{postListeTypeModele:element},function (data) {
        data = $.parseJSON(data);
        $("#type_modele").autocomplete({
            source:function (request, reponse) {
                var results = $.ui.autocomplete.filter(data,request.term);
                reponse(results.slice(0,10));
            },
            change:function (event, ui) {
                if (!ui.item)
                {
                    $(event.target).val("");
                }
            },
            focus:function (event, ui) {
                return false;
            }
        });
    });
    element = 'immatriculation';

    $("#reclamation_imm").focus(function () {
        if($("#mySpan").text() == "Observation - R\351clamation")
        {
            $.post('controller/Autocomplete.php',{postimmatriculationreturnnouse:element},function (data) {
                data = $.parseJSON(data);

                var imm = [data.length];
                var index = 0;

                $.each(data, function (key, val) {
                    imm[index] = val.imm;
                    index++;
                });

                $("#reclamation_imm").autocomplete({
                    source:function (request, reponse) {
                        var results = $.ui.autocomplete.filter(imm,request.term);
                        reponse(results.slice(0,10));
                    },
                    select:function (event, ui) {
                        element = ui.item.value;
                        var chassis = '';
                        var client = '';
                        var dateClient = '';
                        var tel = '';
                        var telc = '';
                        var telf = '';
                        var teld = '';
                        var type = '';
                        var date_livre = '';
                        var km = '';
                        var facture = '';
                        var tf = '';
                        var date_recept = '';

                        $.post('controller/Autocomplete.php',{postImmtReturnvehiculeclientlivraison:element},function (data) {

                            data = $.parseJSON(data);
                            $.each(data,function (key,val) {
                                client = val.client;
                                dateClient = val.d_c;
                                telf = val.t_f;
                                telc = val.t_c;
                                teld = val.t_d;
                                type = val.type_modele;
                                chassis = val.chassis;
                                date_livre = val.d_l;
                                km = val.km;
                                facture = val.num_facture;
                                tf = val.trav_f;
                                date_recept = val.date_recept;
                            });
                        });

                        setTimeout(function () {

                            if(date_recept=='non')
                            {
                                $("#reclamation_client_executant_reclamation").val('');
                                $("#validerAddReclamation").text('Valider');
                                $("#ModalAddReclamation").modal('toggle');
                                $('.messageh6').text("Ce client n'est pas \351ligible pour effectuer des r\351clamations sur le v\351hicule: "+element);
                                ConfirmationLose();
                            }
                            else
                            {
                                if(date_livre!='non')
                                {
                                    var date_livraison = new Date();
                                    var date_reception = new Date();

                                    date_livraison = date_livre;
                                    date_reception = date_recept;

                                    date_livraison = date_livraison.split('-').join('');
                                    date_reception = date_reception.split('-').join('');

                                    if(date_reception <= date_livraison)
                                    {

                                        if(telf == 'Non Renseigné')telf='';
                                        else telf = telf.replace(/[()]/g,'');


                                        if(telc == 'Non Renseigné')telc='';
                                        else telc = telc.replace(/[()]/g,'');

                                        if(teld == 'Non Renseigné')teld='';
                                        else teld = teld.replace(/[()]/g,'');

                                        if(telc != '' || teld!='')telf = telf+' /';

                                        if(teld != '')telc = telc+' /';

                                        if(telf == ' /')telf='';
                                        if(telc == ' /')telc='';

                                        if(dateClient == '1000-10-10')dateClient='';

                                        tel = telf+' '+telc+' '+teld;

                                        $("#reclamation_date_client").val(dateClient);
                                        $("#reclamation_type").val(type);
                                        $("#reclamation_clientNom").val(client);
                                        $("#reclamation_vin").val(chassis);
                                        $("#reclamation_tel").val(tel);
                                        $("#reclamation_L_date").text(date_livre);
                                        $("#reclamation_L_km").text(km);
                                        $("#reclamation_L_facture").text(facture);
                                        $("#reclamation_L_traveaux_fait").val(tf);
                                    }
                                    else
                                    {
                                        $("#reclamation_client_executant_reclamation").val('');
                                        $("#validerAddReclamation").text('Valider');
                                        $("#ModalAddReclamation").modal('toggle');
                                        $('.messageh6').text("Ce client n'est pas \351ligible pour effectuer des r\351clamations sur le v\351hicule: "+ui.item.value);
                                        ConfirmationLose();

                                    }
                                }
                                else
                                {
                                    $('.messageh6').text("Ce client n'est pas \351ligible pour effectuer des r\351clamations sur le v\351hicule: "+ui.item.value);
                                    ConfirmationLose();
                                }
                            }
                        },100);


                    },
                    change:function (event, ui) {
                        if(!ui.item)
                        {
                            $(event.target).val('');
                            $("#reclamation_date_client").val('');
                            $("#reclamation_type").val('');
                            $("#reclamation_clientNom").val('');
                            $("#reclamation_vin").val('');
                            $("#reclamation_tel").val('');
                            $("#reclamation_L_date").text('');
                            $("#reclamation_L_km").text('');
                            $("#reclamation_L_facture").text('');
                            $("#reclamation_L_traveaux_fait").val('');
                        }
                    }
                });

            });
        }

    });

    element = 'immatriculation';

    $("#immatriculation_R, #maitstandimm").focus(function () {

        var clientR = $("#client_R").val();

        if(clientR.length == 0)
        {
            $.post('controller/Autocomplete.php',{postImmatriculation:element},function (data) {
                data = $.parseJSON(data);

                var imm = [data.length];
                var index = 0;
                $.each(data, function (key, val) {
                    imm[index] = val.imm;
                    index++;
                });

                $("#immatriculation_R, #maitstandimm").autocomplete({
                    source:function (request, reponse) {
                        var results = $.ui.autocomplete.filter(imm,request.term);
                        reponse(results.slice(0,10));
                    },
                    select:function (event, ui) {
                        $(".receptionObservationClient").val('');
                        $("#client_R").val('');
                        $("#maitstandclient").val('');
                        var element = ui.item.value;
                        $.post('controller/Autocomplete.php',{postImmtReturnClient:element},function (data) {
                            var client = data;
                            $("#client_R").val(client);
                            $("#maitstandclient").val(client);
                        });
                        var element = ui.item.value;
                        $.post('controller/Autocomplete.php',{postImmreturnObservationclient:element},function (data) {
                            if(data.length!=0)
                            {
                                var observe = data;
                                $(".receptionObservationClient").val(observe);
                            }
                            else
                            {
                                $(".receptionObservationClient").val('');
                            }
                        });
                    },
                    change:function (event, ui) {
                        if(!ui.item)
                        {
                            $(event.target).val('');
                            $("#client_R").val('');
                            $("#maitstandclient").val('');
                            $('.receptionObservationClient').val('');
                        }
                    }
                });

            });
        }

    });

    element = "R";
    $.post('controller/Autocomplete.php',{postListClient:element},function (data) {
        var data = $.parseJSON(data);
        $("#client_R, #maitstandclient").autocomplete({
            source:function (request, reponse) {
                var results = $.ui.autocomplete.filter(data,request.term);
                reponse(results.slice(0,10));
            },
            select:function (event, ui) {
                $("#immatriculation_R").val('');
                $("#maitstandimm").val('');
                $(".receptionObservationClient").val('');
                element = ui.item.value;
                $.post('controller/Autocomplete.php',{postClientReturnImmatriculation:element},function (data) {
                    data = $.parseJSON(data);
                    var immatricul = [data.length];
                    var observation = [data.length];
                    var indix = 0;
                    $.each(data, function (key, val) {
                        immatricul[indix] = val.imm;
                        observation[indix] = val.observe;
                        indix++;
                    });

                    if (immatricul != 0) {
                        if (immatricul.length == 1) {
                            $("#immatriculation_R").val(immatricul);
                            $("#maitstandimm").val(immatricul);
                            $(".receptionObservationClient").val(observation);
                        }
                        else {
                            $("#immatriculation_R, #maitstandimm").autocomplete({
                                source: function (request, reponse) {
                                    var results = $.ui.autocomplete.filter(immatricul, request.term);
                                    reponse(results.slice(0, 10));
                                },
                                select: function (event, ui) {
                                    var immatriculation = ui.item.value;
                                    var index = immatricul.indexOf(immatriculation);
                                    var obs = observation[index];

                                    $("#immatriculation_R").val(immatriculation);
                                    $("#maitstandimm").val(immatriculation);
                                    $(".receptionObservationClient").val(obs);
                                },
                                change:function(event, ui)
                                {
                                    if(!ui.item)
                                    {
                                        $(event.target).val("");
                                        $("#client_R").val("");
                                        $("#maitstandclient").val("");
                                        $('.receptionObservationClient').val('');
                                    }
                                }
                            })
                        }
                    }
                    else
                    {
                        $("#formReception")[0].reset();
                        $("#formMaintenancestandard")[0].reset();
                        $("#conteneur").load('view/ReceptionQuickService.php');
                        $("#resultDivReception").css("background-color", "orangered");
                        $("#resultDivReception").css("color", "white");
                        $("#resultDivReception").text('Le Client n\'a aucun v\351hicule enr\351gistr\351.');
                        $("#resultDivReception").slideDown(1000);
                        setTimeout(function () {
                            $("#resultDivReception").slideUp(1000);
                        },4000);
                    }
                });
            },
            change:function (event, ui) {
                if (!ui.item)
                {
                    $(event.target).val("");
                    $("#immatriculation_R").val("");
                    $("#maitstandimm").val("");
                    $('.receptionObservationClient').val('');
                }
            },
            focus:function (event, ui) {
                return false;
            }
        });
    });

    var element = "";
    element = "section"
    $("#point_sec").focus(function () {

        $.post('controller/Autocomplete.php',{postsectionreturnsectionlibelle:element},function (data) {
            data = $.parseJSON(data);

            $("#point_sec").autocomplete({
                source:function (request, reponse) {
                    var results = $.ui.autocomplete.filter(data,request.term);
                    reponse(results.slice(0,10));
                },
                delay:500,
                minLength:0,
                select:function (event, ui) {
                    element = ui.item.value;
                    $("#point_ex").val("");
                    $.post('controller/Autocomplete.php',{postsectionreturntechnicien:element},function (data) {
                        data = $.parseJSON(data);
                        if(data.length!=0)
                        {
                            if(data.length==1)
                            {
                                $("#point_ex").val(data);
                            }
                            else
                            {
                                $("#point_ex").autocomplete({
                                    source:function (request, reponse) {
                                        var results = $.ui.autocomplete.filter(data,request.term);
                                        reponse(results.slice(0,10));
                                    },
                                    delay:500,
                                    minLength:0,
                                    change:function (event, ui) {
                                        if(!ui.item)
                                        {
                                            $(event.target).val("");
                                        }
                                    }
                                });
                            }
                        }
                    });
                },
                change:function (event, ui) {
                    if(!ui.item)
                    {
                        $(event.target).val("");
                        $("#point_ex").val("");
                    }
                },
            });
        });
    });


    element = "tech"
    $("#point_ex").focus(function () {
        var section = $("#point_sec").val();
        $.post('controller/Autocomplete.php',{posttechreturntech:element},function (data) {
            data = $.parseJSON(data);

            if(section.length==0)
            {
                $("#point_ex").autocomplete({
                    source:function (request, reponse) {
                        var results = $.ui.autocomplete.filter(data,request.term);
                        reponse(results.slice(0,10));
                    },
                    delay:500,
                    minLength:0,
                    select:function (event, ui) {
                        element = ui.item.value;
                        $.post('controller/Autocomplete.php',{posttechreturnspec:element},function (data) {
                            $("#point_sec").val("");
                            $("#point_sec").val(data);
                        });
                    },
                    change:function (event, ui) {
                        if(!ui.item)
                        {
                            $(event.target).val("");
                            $("#point_sec").val("");
                        }
                    },
                });
            }
        });
    });

    element = 'client';
    $.post('controller/Autocomplete.php',{postListClientWereReceptionExistNew:element},function (data) {
        data = $.parseJSON(data);
        var immatrule = [data.length];
        var idVehicule = [data.length];
        var client = [data.length];
        var index=0;
        var indix=0;
        $.each(data, function (key, val) {
            immatrule[index] = val.imm;
            idVehicule[index] = val.id_vehicule;
            client[index] = val.client;
            index++;
        });
        $("#recom_client").autocomplete({
            source:function (request, reponse) {
                var results = $.ui.autocomplete.filter(client,request.term);
                reponse(results.slice(0,10));
            },
            minLength:0,
            select:function (event, ui) {
                $('#recom_imm').val("");
                element =  ui.item.value;
                $.post('controller/Autocomplete.php',{postClientReturnImmatriculationValide:element},function (data) {

                    data = $.parseJSON(data);
                    var imm = [data.length];
                    var index =0;
                    $.each(data, function (key, val) {
                        imm[index] = val.imm;
                        index++;
                    });

                    if(imm.length!=0)
                    {
                        if(imm.length==1)
                            $('#recom_imm').val(imm);
                        else
                            $('#recom_imm').autocomplete({
                                source:function (request, reponse) {
                                    var results = $.ui.autocomplete.filter(imm,request.term);
                                    reponse(results.slice(0,10));
                                },
                                delay:500,
                                minLength:0,
                                change:function (event, ui) {
                                    if (!ui.item)
                                    {
                                        $(event.target).val("");
                                    }
                                },
                                focus:function (event, ui) {
                                    return false;
                                }
                            });
                    }
                });
            },
            change:function (event, ui) {
                if (!ui.item)
                {
                    $(event.target).val("");
                    $('#recom_imm').val("");
                }
            },
            focus:function (event, ui) {
                return false;
            }
        });
    });

    $("#recom_imm").focus(function () {
        element = "imm";
        var clientExist = $("#recom_client").val();
        if(clientExist.length==0)
        {
            element = 'imm';
            $.post('controller/Autocomplete.php',{postListvehiculeandreturnnouseforlivraisonreception:element},function (data) {
                data = $.parseJSON(data);
                var immatrule = [data.length];
                var idVehicule = [data.length];
                var index=0;
                $.each(data, function (key, val) {
                    immatrule[index] = val.imm;
                    idVehicule[index] = val.id_vehicule;
                    index++;
                });
                $("#recom_imm").autocomplete({
                    source:function (request, reponse) {
                        var results = $.ui.autocomplete.filter(immatrule,request.term);
                        reponse(results.slice(0,10));
                    },
                    minLength:0,
                    select:function (event, ui) {
                        $('#recom_client').val("");
                        element =  ui.item.value;
                        $.post('controller/Autocomplete.php',{postImmtReturnClient:element},function (data) {
                            if (data.length != 0)
                            {
                                $("#recom_client").val(data);
                            }
                        });
                    },
                    change:function (event, ui) {
                        if (!ui.item)
                        {
                            $(event.target).val("");
                            $('#recom_client').val("");
                        }
                    },
                    focus:function (event, ui) {
                        return false;
                    }
                });
            });
        }
    });

    element = "tech"
    $.post('controller/Autocomplete.php',{posttechreturntech:element},function (data) {
        data = $.parseJSON(data);
        $("#recom_tech").autocomplete({
            source:function (request, reponse) {
                var results = $.ui.autocomplete.filter(data,request.term);
                reponse(results.slice(0,10));
            },
            delay:500,
            minLength:0,
            change:function (event, ui) {
                if(!ui.item)
                {
                    $(event.target).val("");
                }
            },
        });
    });

    element = "tech"
    $.post('controller/Autocomplete.php',{posttechreturntech:element},function (data) {
        data = $.parseJSON(data);
        $("#recom_tech_evolu").autocomplete({
            source:function (request, reponse) {
                var results = $.ui.autocomplete.filter(data,request.term);
                reponse(results.slice(0,10));
            },
            delay:500,
            minLength:0,
            change:function (event, ui) {
                if(!ui.item)
                {
                    $(event.target).val("");
                }
            },
        });
    });

    var element = 'client';

    $.post('controller/Autocomplete.php',{postListClientWereReceptionExistNew:element},function (data) {
        data = $.parseJSON(data);
        var immatrule = [data.length];
        var idVehicule = [data.length];
        var client = [data.length];
        var index=0;
        var indix=0;
        $.each(data, function (key, val) {
            immatrule[index] = val.imm;
            idVehicule[index] = val.id_vehicule;
            client[index] = val.client;
            index++;
        });
        $("#nom_client_inspect").autocomplete({
            source:function (request, reponse) {
                var results = $.ui.autocomplete.filter(client,request.term);
                reponse(results.slice(0,10));
            },
            minLength:0,
            select:function (event, ui) {
                $('#imm_inspect').val("");
                element =  ui.item.value;
                $.post('controller/Autocomplete.php',{postClientReturnImmatriculationValide:element},function (data) {

                    data = $.parseJSON(data);
                    var imm = [data.length];
                    var index =0;
                    $.each(data, function (key, val) {
                        imm[index] = val.imm;
                        index++;
                    });

                    if(imm.length!=0)
                    {
                        if(imm.length==1)
                            $('#imm_inspect').val(imm);
                        else
                            $('#imm_inspect').autocomplete({
                                source:function (request, reponse) {
                                    var results = $.ui.autocomplete.filter(imm,request.term);
                                    reponse(results.slice(0,10));
                                },
                                delay:500,
                                minLength:0,
                                change:function (event, ui) {
                                    if (!ui.item)
                                    {
                                        $(event.target).val("");
                                    }
                                },
                                focus:function (event, ui) {
                                    return false;
                                }
                            });
                    }
                });
            },
            change:function (event, ui) {
                if (!ui.item)
                {
                    $(event.target).val("");
                    $('#imm_inspect').val("");
                }
            },
            focus:function (event, ui) {
                return false;
            }
        });
    });

    $("#imm_inspect").focus(function () {
        var clientExist = $("#nom_client_inspect").val();
        if(clientExist.length==0)
        {
            element = 'imm';
            $.post('controller/Autocomplete.php',{postListvehiculeandreturnnouseforlivraisonreception:element},function (data) {
                data = $.parseJSON(data);
                var immatrule = [data.length];
                var idVehicule = [data.length];
                var index=0;
                $.each(data, function (key, val) {
                    immatrule[index] = val.imm;
                    idVehicule[index] = val.id_vehicule;
                    index++;
                });
                $("#imm_inspect").autocomplete({
                    source:function (request, reponse) {
                        var results = $.ui.autocomplete.filter(immatrule,request.term);
                        reponse(results.slice(0,10));
                    },
                    minLength:0,
                    select:function (event, ui) {
                        $('#nom_client_inspect').val("");
                        element =  ui.item.value;
                        $.post('controller/Autocomplete.php',{postImmtReturnClient:element},function (data) {
                            if (data.length != 0)
                            {
                                $("#nom_client_inspect").val(data);
                            }
                        });
                    },
                    change:function (event, ui) {
                        if (!ui.item)
                        {
                            $(event.target).val("");
                            $('#nom_client_inspect').val("");
                        }
                    },
                    focus:function (event, ui) {
                        return false;
                    }
                });
            });
        }
    });

    element = 'inspection'

    $.post('controller/Autocomplete.php',{receptionkilometrage:element},function (data) {
        data = $.parseJSON(data);
        $("#km_inspect").autocomplete({
            source:function (request, reponse) {
                var results = $.ui.autocomplete.filter(data,request.term);
                reponse(results.slice(0,10));
            },
            minLength:0,
            focus:function (event, ui) {
                return false;
            }
        });
    });

    element = 'receptionlivraison';

    $("#num_reception_livraison").focus(function () {
        $.post('controller/Autocomplete.php',{postnumreceptionreturnreceptionfornouse:element},function (data) {
            data = $.parseJSON(data);

            var numRecept = [data.length];
            var dateRecept = [data.length];
            var heureRecept = [data.length];
            var idVehiculeRecept = [data.length];
            var idReception = [data.length];

            var indix = 0;
            $.each(data,function (key, val) {
                numRecept[indix] = val.num ;
                dateRecept[indix] = val.date ;
                heureRecept[indix] = val.heure ;
                idVehiculeRecept[indix] = val.id_vehicule ;
                idReception[indix] = val.id ;
                indix++;
            });

            $("#num_reception_livraison").autocomplete({
                source:function (request, reponse) {
                    var results = $.ui.autocomplete.filter(numRecept,request.term);
                    reponse(results.slice(0,10));
                },
                minLength:0,
                select:function (event, ui) {
                    $("#formLivraison")[0].reset();
                    $("#client_reception_livraison").val('');
                    $("#modele_reception_livraison").val('');
                    $("#immatricul_reception_livraison").val('');
                    $("#travailFait_reception_livraison").empty();
                    element = ui.item.value;
                    var index = numRecept.indexOf(element);
                    var date_reception = dateRecept[index];
                    var heure = heureRecept[index];
                    var id_vehicule = idVehiculeRecept[index];
                    var id_reception = idReception[index];
                    element = id_reception;

                    $.post('controller/Autocomplete.php',{postcontrollvalidelivraison:element},function (data) {
                        data = $.parseJSON(data);
                        var date_livraison = '';
                        var date = '';
                        var heure_livraison = '';
                        $.each(data, function (key, val) {
                            date_livraison = val.date_livraison;
                            heure_livraison = val.heure_livraison;
                        });

                        var date_livraisonl = date_livraison.split('-').join('');
                        var date_receptionl = date_reception.split('-').join('');


                        if(date_livraisonl <= date_receptionl)
                        {
                            if(date_reception !='1000-10-10')
                            {
                                element = ui.item.value;
                                $.post('controller/Autocomplete.php',{postnumreceptionreturnclientandvehicule:element},function (data) {
                                    data = $.parseJSON(data);
                                    $.each(data, function (key, val) {
                                        // $("#immatricul_reception_livraison").prop('readonly',true);
                                        $("#client_reception_livraison").val(val.clients);
                                        $("#modele_reception_livraison").val(val.typeModele);
                                        $("#immatricul_reception_livraison").val(val.imm);
                                    });
                                });

                                $.post('controller/Autocomplete.php',{postnumreceptionreturntravauxexecute:element},function (data) {
                                    data = $.parseJSON(data);
                                    $.each(data, function (key, val) {
                                        $("#travailFait_reception_livraison").append(val.tache+'\n');
                                    });
                                });
                            }
                            else
                            {
                                $(event.target).val("");
                                $("#resultDivLivraison").text("Ce num\351ro de r\351ception n'est plus valide pour la livraison.")
                                $("#resultDivLivraison").css("color", "white");
                                $("#resultDivLivraison").css("background-color", "darkred");
                                $("#resultDivLivraison").slideDown(1000);
                                setTimeout(function () {
                                    $("#resultDivLivraison").slideUp(1000);
                                },4000);
                            }
                        }
                        else
                        {
                            $(event.target).val("");
                            $("#resultDivLivraison").text("Ce num\351ro de r\351ception n'est plus valide pour la livraison.")
                            $("#resultDivLivraison").css("color", "white");
                            $("#resultDivLivraison").css("background-color", "darkred");
                            $("#resultDivLivraison").slideDown(1000);
                            setTimeout(function () {
                                $("#resultDivLivraison").slideUp(1000);
                            },4000);
                        }
                    });
                },
                change:function (event, ui) {
                    if(!ui.item)
                    {
                        $(event.target).val("");
                        $("#immatricul_reception_livraison").prop('readonly',false);
                        $("#formLivraison")[0].reset();
                        $("#client_reception_livraison").val('');
                        $("#modele_reception_livraison").val('');
                        $("#immatricul_reception_livraison").val('');
                        $("#travailFait_reception_livraison").empty();
                    }
                }
            });
        });
    });

    element = 'immatriculelivraison';
    $('#immatricul_reception_livraison').focus(function () {
        $.post('controller/Autocomplete.php',{postListvehiculeandreturnnouseforlivraisonreception:element},function(data){
            data = $.parseJSON(data);
            var immatrule = [data.length];
            var idVehicule = [data.length];
            var index=0;
            $.each(data, function (key, val) {
                immatrule[index] = val.imm;
                idVehicule[index] = val.id_vehicule;
                index++;
            });

            $("#immatricul_reception_livraison").autocomplete({
                source:function (request, reponse) {
                    var results = $.ui.autocomplete.filter(immatrule,request.term);
                    reponse(results.slice(0,10));
                },
                minLength:0,
                select:function (event, ui) {
                    $("#num_reception_livraison").val('');
                    $("#client_reception_livraison").val('');
                    $("#modele_reception_livraison").val('');
                    $("#travailFait_reception_livraison").empty();
                    var indix='';
                    indix = immatrule.indexOf(ui.item.value);
                    var id_vehicule = idVehicule[indix];
                    element = id_vehicule;

                    $.post('controller/Autocomplete.php',{postListvehiculereturnreceptionandlivraison:element},function(data){

                        data = $.parseJSON(data);

                        var date_reception ='';
                        var date_livraison ='';
                        var tache_activite ='';
                        $.each(data, function (key, val) {
                            date_reception = val.date_reception;
                            date_livraison = val.date_livraison;
                            tache_activite = val.tache;
                        });

                        var date_livraisonl = date_livraison.split('-').join('');
                        var date_receptionl = date_reception.split('-').join('');

                        if(date_livraisonl <= date_receptionl)
                        {
                            if(date_reception !='1000-10-10')
                            {
                                element = ui.item.value;
                                $.post('controller/Autocomplete.php',{postimmatriculereturntypemodelclientreception:element},function (data) {
                                    data = $.parseJSON(data);
                                    $.each(data, function (key, val) {
                                        // $("#num_reception_livraison").prop('readonly',true).css('background','white');
                                        $("#num_reception_livraison").val(val.numm_recept);
                                        $("#client_reception_livraison").val(val.clients);
                                        $("#modele_reception_livraison").val(val.typeModele);
                                        element = $("#num_reception_livraison").val();
                                        $.post('controller/Autocomplete.php',{postnumreceptionreturntravauxexecute:element},function (data) {
                                            data = $.parseJSON(data);
                                            $.each(data, function (key, val) {
                                                $("#travailFait_reception_livraison").append(val.tache+'\n');
                                            });
                                        });
                                    });
                                });
                            }
                            else
                            {
                                $(event.target).val("");
                                $("#resultDivLivraison").text("Une erreur s'est produite.\nLe v\351hicule "+ui.item.value+" n'a probablement pas \351t\351 r\351ception\351")
                                $("#resultDivLivraison").css("color", "white");
                                $("#resultDivLivraison").css("background-color", "darkred");
                                $("#resultDivLivraison").slideDown(1000);
                                setTimeout(function () {
                                    $("#resultDivLivraison").slideUp(1000);
                                },4000);
                            }
                        }
                        else
                        {
                            $(event.target).val("");
                            $("#resultDivLivraison").text("Une erreur s'est produite.\nLe v\351hicule "+ui.item.value+" n'a probablement pas \351t\351 r\351ception\351")
                            $("#resultDivLivraison").css("color", "white");
                            $("#resultDivLivraison").css("background-color", "darkred");
                            $("#resultDivLivraison").slideDown(1000);
                            setTimeout(function () {
                                $("#resultDivLivraison").slideUp(1000);
                            },4000);
                        }
                    });
                },
                change:function (event, ui) {
                    if(!ui.item)
                    {
                        $(event.target).val("");
                        $("#num_reception_livraison").prop('readonly',false);
                        $("#client_reception_livraison").val('');
                        $("#modele_reception_livraison").val('');
                        $("#num_reception_livraison").val('');
                        $("#travailFait_reception_livraison").empty();
                    }
                }
            });
        });
    });


    $(".livraisonclose").click(function () {
        $("#travailFait_reception_livraison").empty();
        $("#formFinalisationEntretienVFormID")[0].reset();
        $("#client_reception_livraison").prop('readonly',false);
        $("#immatricul_reception_livraison").prop('readonly',false);
    });

    element = 'livraison';
    $.post('controller/Autocomplete.php',{receptionkilometrage:element},function (data) {
        data = $.parseJSON(data);
        $("#kilometr_reception_livraison").autocomplete({
            source:function (request, reponse) {
                var results = $.ui.autocomplete.filter(data,request.term);
                reponse(results.slice(0,10));
            },
            minLength:0,
            focus:function (event, ui) {
                return false;
            }
        });
    });

    element = 'technicien';
    $.post('controller/Autocomplete.php',{postlisttechnicien:element},function(data){
        data = $.parseJSON(data);

        var techNom = [data.length];
        var techTel = [data.length];
        var techAdr = [data.length];
        var techId = [data.length];
        var indix = 0;
        $.each(data, function (key, val) {
            techNom[indix] = val.tech;
            techTel[indix] = val.tech_tel;
            techAdr[indix] = val.tech_addr;
            techId[indix] = val.tech_id;
            indix++;
        });

        $("#reclamation_executant").autocomplete({
            source:function (request, reponse) {
                var results = $.ui.autocomplete.filter(techNom,request.term);
                reponse(results.slice(0,10));
            },
            minLength:0,
            change:function (event, ui) {
                if(!ui.item)
                {
                    $(event.target).val("");
                }
            }
        });

        $("#reclamation_controleur").autocomplete({
            source:function (request, reponse) {
                var results = $.ui.autocomplete.filter(techNom,request.term);
                reponse(results.slice(0,10));
            },
            minLength:0,
            change:function (event, ui) {
                if(!ui.item)
                {
                    $(event.target).val("");
                }
            }
        });

        $("#reclamation_chef_garage_nom").autocomplete({
            source:function (request, reponse) {
                var results = $.ui.autocomplete.filter(techNom,request.term);
                reponse(results.slice(0,10));
            },
            minLength:0,
            change:function (event, ui) {
                if(!ui.item)
                {
                    $(event.target).val("");
                }
            }
        });

        $("#activite_tech").autocomplete({
            source:function (request, reponse) {
                var results = $.ui.autocomplete.filter(techNom,request.term);
                reponse(results.slice(0,10));
            },
            minLength:0,
            change:function (event, ui) {
                if(!ui.item)
                {
                    $(event.target).val("");
                }
            }
        });
    });

    element = 'imm';
    $("#maint_imm").focus(function () {
        $.post('controller/Autocomplete.php',{postListvehiculeandreturnnouseforlivraisonreception:element},function (data) {
            data = $.parseJSON(data);
            var immatrule = [data.length];
            var idVehicule = [data.length];
            var index=0;
            $.each(data, function (key, val) {
                immatrule[index] = val.imm;
                idVehicule[index] = val.id_vehicule;
                index++;
            });
            $('#maint_imm').autocomplete({
                source:function (request, reponse) {
                    var results = $.ui.autocomplete.filter(immatrule,request.term);
                    reponse(results.slice(0,10));
                },
                minLength:0,
                change:function (event, ui) {
                    if(!ui.item)$(event.target).val('');
                }
            });
        });
    });

    element = 'maintenance';
    $.post('controller/Autocomplete.php',{receptionkilometrage:element},function (data) {
        data = $.parseJSON(data);
        $('#maint_kilo').autocomplete({
            source:function (request, reponse) {
                var results = $.ui.autocomplete.filter(data,request.term);
                reponse(results.slice(0,10));
            },
            minLength:0,
        });
    });

    element = 'maintenance';
    $("#maint_execut").focus(function () {
        $.post('controller/Autocomplete.php',{postlisttechnicien:element},function (data) {
            data = $.parseJSON(data);
            var execut = [data.length];
            var indix = 0;
            $.each(data,function (key, val) {
                execut[indix] = val.tech;
                indix++;
            });
            $('#maint_execut').autocomplete({
                source:function (request, reponse) {
                    var results = $.ui.autocomplete.filter(execut,request.term);
                    reponse(results.slice(0,10));
                },
                minLength:0,
                change:function (event, ui) {
                    if(!ui.item)$(event.target).val('');
                }
            });
        });
    });

    var element = 'immatriculation';
    $("#numreceptionactif").focus(function () {
        $.post('controller/Autocomplete.php',{postListvehiculeandreturnnouseforlivraisonreception:element},function (data) {
            data = $.parseJSON(data);
            var immatrule = [data.length];
            var idVehicule = [data.length];
            var index=0;
            $.each(data, function (key, val) {
                immatrule[index] = val.imm;
                idVehicule[index] = val.id_vehicule;
                index++;
            });
            $("#numreceptionactif").autocomplete({
                source:function (request, reponse) {
                    var results = $.ui.autocomplete.filter(immatrule,request.term);
                    reponse(results.slice(0,10));
                },
                minLength:0,
                select:function (event, ui) {
                    setTimeout(function () {
                        $("#activites_num_reception_liste").val('');
                        var imm  = event.target.value;
                        $("#activite_vehiculeActive").val(imm);
                        ProgrammationActivitesImmatriculationSend(imm);
                        $("#supprimeOtherDonnesValue").val(imm);
                        $("#activite").attr('placeholder','nouveaux travaux r\351alis\351s sur le v\351hicule d\'immatriculation '+imm);
                    },10);
                },
                change:function (event, ui) {
                    if(!ui.item)
                    {
                        $(event.target).val('');
                        $("#tableActivite").empty();
                        $("#activite").attr('placeholder','');
                    }
                }
            });
        });
    });

    var element = 'reception';
    $.post('controller/Autocomplete.php',{receptionkilometrage:element},function (data) {
        data = $.parseJSON(data);
        $('.receptionkilometrage').autocomplete({
            source:function (request, reponse) {
                var results = $.ui.autocomplete.filter(data,request.term);
                reponse(results.slice(0,10));
            },
            minLength:0,
        });
    });

    var element = 'immatriculation';

    $('.immatriculationAuto').on('focus',function () {
        $.post('controller/Autocomplete.php',{postListimmtall:element},function (data) {
            data = $.parseJSON(data);
            $('.immatriculationAuto').autocomplete({
                source:function (request, reponse) {
                    var results = $.ui.autocomplete.filter(data,request.term);
                    reponse(results.slice(0,10));
                },
                minLength:0,
                change:function (event, ui) {
                    if(!ui.item)
                    {
                        $(event.target).val('');
                    }
                }
            });
        });
    });

});