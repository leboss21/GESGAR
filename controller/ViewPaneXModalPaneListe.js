$(document).ready(function () {
    $("#maintenanceTacheView").on('click',function () {
        var maintenanceTache = $("#maintenanceSelect").val();
        if(maintenanceTache == '')
        {
            $("#maintenanceTacheView").css('color','red');
            $("#maintenanceTacheViewText").text('Veillez completer et s\351lectionner les t\342ches effectu\351es dans la liste des t\342ches.').css('color','red');

            setTimeout(function () {
                $("#maintenanceTacheView").css('color','black');
                $("#maintenanceTacheViewText").text('Tâches effectuées').css('color','black');

            },5000);
        }
        else
        {
            $("#maintenanceTacheView").css('color','black');
            $("#maintenanceTacheViewText").text('Tâches effectuées').css('color','black');
            $("#uniqueInfo3").empty();
            var  imm = $('#maint_imm').val();
            var kilo = $('#maint_kilo').val();
            var num_or = $('#maint_num_ordre').val();
            var  date = $("#mainte_date").val();
            var  execut = $('#maint_execut').val();
            var maint = $("#maintenanceSelect").val();

            if (imm != '' && kilo != '' && num_or != '' && date != '' && execut != '')
            {
                var typeModel = '';
                var client = '';
                var chassis = '';
                var moteur = '';
                var couleur = '';

                $.post('controller/Autocomplete.php',{postimmatriculereturntypemodelclient:imm},function (data) {
                    data = $.parseJSON(data);
                    $.each(data, function (key, val) {
                        typeModel = val.type_model;
                        client = val.client;
                        chassis = val.chassis;
                        moteur = val.type_moteur;
                        couleur = val.couleur;
                    });
                });

                setTimeout(function () {
                    var a = 0;
                    var b = 0;

                    while (a<maint.length)
                    {
                        if(maint[a]=='=')
                        {
                            b++;
                        }
                        a++;
                    }

                    var Key = [b];
                    var Val = [b];

                    var c = 0;
                    var ko = 0;
                    var kc = 0;
                    var bk = 0;
                    var bv = 0;
                    var vo = 0;
                    var vc = 0;

                    while(c<maint.length)
                    {
                        if(maint[c]=='[') ko = c+1;
                        if(maint[c]=='='){
                            kc = c-1;
                            kc = kc-ko+1;
                            Key[bk] = maint.substr(ko,kc);
                            bk++;
                        }

                        if(maint[c]=='>') vo = c+1;
                        if(maint[c]==']'){
                            vc = c-1;
                            vc = vc-vo+1;

                            if(vo == vc)
                            {
                                Val[bv] = maint.charAt(vo);
                                bv++;
                            }
                            else
                            {
                                Val[bv] = maint.substr(vo,vc);
                                bv++;
                            }
                        }
                        c++;
                    }


                    $("#uniqueInfo3").empty();
                    $("#uniqueInfo3").css('max-height','80vh');
                    $("#uniqueInfo3").css('overflow-y','scroll');
                    $("#uniqueInfo3").append("<table class='table-bordered' style='width: 100%;'><tbody id='maintbody'></tbody></table>");
                    $("#maintbody").append("<tr style='width: 100%;'><td colspan='2'>"+"<div style='width: 100%;' class='form-check form-check-inline'><h5 style='margin-left: 2%;'>TYPE:&emsp;</h5><h6>"+typeModel+"</h6></div>"+"</td><td>"+"<div style='width: 100%;' class='form-check form-check-inline'><h5 style='margin-left: 2%;'>N&deg; PLAQUE:&emsp;</h5><h6>"+imm+"</h6></div>"+"</td><td colspan='2'>"+"<div style='width: 100%;' class='form-check form-check-inline'><h5 style='margin-left: 2%;'>NOM:&emsp;</h5><h6>"+client+"</h6></div>"+"</td></tr>");
                    $("#maintbody").append("<tr style='width: 100%;'><td colspan='2'>"+"<div style='width: 100%;' class='form-check form-check-inline'><h5 style='margin-left: 2%;'>CHASSIS:&emsp;</h5><h6>"+chassis+"</h6></div>"+"</td><td>"+"<div style='width: 100%;' class='form-check form-check-inline'><h5 style='margin-left: 2%;'>N&deg; MOTEUR:&emsp;</h5><h6>"+"</h6></div>"+"</td><td>"+"<div style='width: 100%;' class='form-check form-check-inline'><h5 style='margin-left: 2%;'>COULEUT:&emsp;</h5><h6>"+couleur+"</h6></div>"+"</td></tr>");
                    $("#maintbody").append("<tr style='width: 100%;'><td rowspan='3'>"+"<div style='width: 100%;'><h6 style='text-align: center;'>SEC</h6></div>"+"</td><td rowspan='3'>"+"<div style='width: 100%;'><h6  style='text-align: center;';>DESCRIPTION</h6></div>"+"</td></tr>");
                    $("#maintbody").append("<tr style='width: 100%;'><td>"+"<div style='width: 100%;' class='form-check form-check-inline'><h5 style='margin-left: 2%;'>KILOMETRAGE:&emsp;</h5><h6>"+kilo+"</h6></div>"+"</td><td>"+"<div style='width: 100%;' class='form-check form-check-inline'><h5 style='margin-left: 2%;'>DATE:&emsp;</h5><h6>"+date+"</h6></div>"+"</td></tr>");
                    $("#maintbody").append("<tr style='width: 100%;'><td>"+"<div style='width: 100%;' class='form-check form-check-inline'><h5 style='margin-left: 2%;'>N&deg; D'ORDRE:&emsp;</h5><h6>"+num_or+"</h6></div>"+"</td><td>"+"<div style='width: 100%;' class='form-check form-check-inline'><h5 style='margin-left: 2%;'>EXECUTANT:&emsp;</h5><h6>"+execut+"</h6></div>"+"</td></tr>");

                    var dfsn = 1;
                    var elen = 1;
                    var fron = 1;
                    var motn = 1;
                    var toln = 1;

                    var indix = 0;
                    while (indix<Key.length)
                    {
                        for (var i= 1;i<=25;i++)
                        {
                            if(Key[indix] == $('#dfs'+i+'h').text())
                            {
                                $("#maintbody #dfstr").empty();
                                $("#maintbody").append("<tr id='dfstr'><td id='dfstd' colspan=''>"+"<div><h6 style='text-align: center;' id='dfss'>DFS</h6></div>"+"</td></tr>");
                                dfsn+=1;$("#dfstd").attr('rowspan',dfsn);
                            }
                        }

                        indix++;
                    }

                    var indix = 0;
                    while (indix<Key.length)
                    {
                        for (var i= 1;i<=25;i++)
                        {
                            if(Key[indix] == $('#dfs'+i+'h').text())
                            {
                                $("#maintbody").append("<tr><td colspan='2'>"+"<div><h6 style='margin-left: 2%;'>"+Key[indix]+"</h6></div>"+"</td><td colspan='2'>"+"<div><h6 style='text-align: center;'>"+Val[indix]+"</h6></div>"+"</td></tr>");
                            }
                        }

                        indix++;
                    }

                    var indix = 0;
                    while (indix<Key.length)
                    {
                        for (var i= 1;i<=5;i++)
                        {
                            if(Key[indix] == $('#ele'+i+'h').text())
                            {
                                $("#maintbody #eletr").empty();
                                $("#maintbody").append("<tr id='eletr'><td id='eletd' colspan=''>"+"<div><h6 style='text-align: center;' id='eles'>ELE</h6></div>"+"</td></tr>");
                                elen+=1;$("#eletd").attr('rowspan',elen);
                            }
                        }

                        indix++;
                    }

                    var indix = 0;
                    while (indix<Key.length)
                    {
                        for (var i= 1;i<=5;i++)
                        {
                            if(Key[indix] == $('#ele'+i+'h').text())
                            {
                                $("#maintbody").append("<tr><td colspan='2'>"+"<div><h6 style='margin-left: 2%;'>"+Key[indix]+"</h6></div>"+"</td><td colspan='2'>"+"<div><h6 style='text-align: center;'>"+Val[indix]+"</h6></div>"+"</td></tr>");
                            }
                        }

                        indix++;
                    }

                    var indix = 0;
                    while (indix<Key.length)
                    {
                        for (var i= 1;i<=7;i++)
                        {
                            if(Key[indix] == $('#fro'+i+'h').text())
                            {
                                $("#maintbody #frotr").empty();
                                $("#maintbody").append("<tr id='frotr'><td id='frotd' colspan=''>"+"<div><h6 style='text-align: center;' id='fros'>FRO</h6></div>"+"</td></tr>");
                                fron+=1;$("#frotd").attr('rowspan',fron);
                            }
                        }

                        indix++;
                    }

                    var indix = 0;
                    while (indix<Key.length)
                    {
                        for (var i= 1;i<=7;i++)
                        {
                            if(Key[indix] == $('#fro'+i+'h').text())
                            {
                                $("#maintbody").append("<tr><td colspan='2'>"+"<div><h6 style='margin-left: 2%;'>"+Key[indix]+"</h6></div>"+"</td><td colspan='2'>"+"<div><h6 style='text-align: center;'>"+Val[indix]+"</h6></div>"+"</td></tr>");
                            }
                        }

                        indix++;
                    }

                    var indix = 0;
                    while (indix<Key.length)
                    {
                        for (var i= 1;i<=15;i++)
                        {
                            if(Key[indix] == $('#mot'+i+'h').text())
                            {
                                $("#maintbody #mottr").empty();
                                $("#maintbody").append("<tr id='mottr'><td id='mottd' colspan=''>"+"<div><h6 style='text-align: center;' id='mots'>MOT</h6></div>"+"</td></tr>");
                                motn+=1;$("#mottd").attr('rowspan',motn);
                            }
                        }
                        indix++;
                    }

                    var indix = 0;
                    while (indix<Key.length)
                    {
                        for (var i= 1;i<=15;i++)
                        {
                            if(Key[indix] == $('#mot'+i+'h').text())
                            {
                                $("#maintbody").append("<tr><td colspan='2'>"+"<div><h6 style='margin-left: 2%;'>"+Key[indix]+"</h6></div>"+"</td><td colspan='2'>"+"<div><h6 style='text-align: center;'>"+Val[indix]+"</h6></div>"+"</td></tr>");
                            }
                        }
                        indix++;
                    }

                    var indix = 0;
                    while (indix<Key.length)
                    {
                        if(Key[indix] == $('#tolh').text())
                        {
                            $("#maintbody #toltr").empty();
                            $("#maintbody").append("<tr id='toltr'><td id='toltd' colspan=''>"+"<div><h6 style='text-align: center;' id='mots'>TOL</h6></div>"+"</td></tr>");
                            toln+=1;$("#toltd").attr('rowspan',toln);
                        }
                        indix++;
                    }

                    var indix = 0;
                    while (indix<Key.length)
                    {
                        if(Key[indix] == $('#tolh').text())
                        {
                            $("#maintbody").append("<tr><td colspan='2'>"+"<div><h6 style='margin-left: 2%;'>"+Key[indix]+"</h6></div>"+"</td><td colspan='2'>"+"<div><h6 style='text-align: center;'>"+Val[indix]+"</h6></div>"+"</td></tr>");
                        }
                        indix++;
                    }

                    $("#uniqueInfo2").hide();
                    $("#uniqueInfo1").hide();
                    $("#uniqueInfo3").show();
                    $("#uniqueInfoList").css('width','65vw');
                    $("#uniqueInfoList").css('height','100%');
                    $("#uniqueInfo").css('width','100%');
                    $("#uniqueInfo").css('height','100%');
                    $("#labelAddListeInfoUnique").text("TABLEAU DE MAINTENANCE").css('width','60%');
                    $("#ModalListeInfoUnique").modal({backdrop: "static"});
                },40);


            }
            else if (imm == '')
            {
                $("#maint_imm").focus().css('border-color','red');
                $("#maint_imm").blur(function () {
                    $(this).css('border-color','lightgray')
                });
                $("#maint_imm").on('click',function () {
                    $(this).css('border-color','lightskyblue')
                });

                $("#resultDivMaintenance").css("background-color", "darkred");
                $("#resultDivMaintenance").css("color", "white");
                $("#resultDivMaintenance").text('Veillez renseign\351 l\'immatriculation.');
                $("#resultDivMaintenance").slideDown(1000);
                setTimeout(function () {
                    $("#resultDivMaintenance").slideUp(1000);
                },3000);

            }
            else if (kilo == '')
            {
                $("#maint_kilo").focus().css('border-color','red');
                $("#maint_kilo").blur(function () {
                    $(this).css('border-color','lightgray')
                });
                $("#maint_kilo").on('click',function () {
                    $(this).css('border-color','lightskyblue')
                });

                $("#resultDivMaintenance").css("background-color", "darkred");
                $("#resultDivMaintenance").css("color", "white");
                $("#resultDivMaintenance").text('Veillez renseign\351 l\'immatriculation.');
                $("#resultDivMaintenance").slideDown(1000);
                setTimeout(function () {
                    $("#resultDivMaintenance").slideUp(1000);
                },3000);
            }
            else if (num_or == '')
            {
                $("#maint_num_ordre").focus().css('border-color','red');
                $("#maint_num_ordre").blur(function () {
                    $(this).css('border-color','lightgray')
                });
                $("#maint_num_ordre").on('click',function () {
                    $(this).css('border-color','lightskyblue')
                });

                $("#resultDivMaintenance").css("background-color", "darkred");
                $("#resultDivMaintenance").css("color", "white");
                $("#resultDivMaintenance").text('Veillez renseign\351 l\'immatriculation.');
                $("#resultDivMaintenance").slideDown(1000);
                setTimeout(function () {
                    $("#resultDivMaintenance").slideUp(1000);
                },3000);
            }
            else if (date == '')
            {
                $("#mainte_date").focus().css('border-color','red');
                $("#mainte_date").blur(function () {
                    $(this).css('border-color','lightgray')
                });
                $("#mainte_date").on('click',function () {
                    $(this).css('border-color','lightskyblue')
                });

                $("#resultDivMaintenance").css("background-color", "darkred");
                $("#resultDivMaintenance").css("color", "white");
                $("#resultDivMaintenance").text('Veillez renseign\351 l\'immatriculation.');
                $("#resultDivMaintenance").slideDown(1000);
                setTimeout(function () {
                    $("#resultDivMaintenance").slideUp(1000);
                },3000);
            }
            else if (execut == '')
            {
                $("#maint_execut").focus().css('border-color','red');
                $("#maint_execut").blur(function () {
                    $(this).css('border-color','lightgray')
                });
                $("#maint_execut").on('click',function () {
                    $(this).css('border-color','lightskyblue')
                });

                $("#resultDivMaintenance").css("background-color", "darkred");
                $("#resultDivMaintenance").css("color", "white");
                $("#resultDivMaintenance").text('Veillez renseign\351 l\'immatriculation.');
                $("#resultDivMaintenance").slideDown(1000);
                setTimeout(function () {
                    $("#resultDivMaintenance").slideUp(1000);
                },3000);
            }

            $("#maint_imm").blur(function ()
            {
                $(this).css('border-color','lightgray');
            });

            $("#maint_imm").on('click',function ()
            {
                $(this).css('border-color','lightskyblue');
            });
        }
    });

    $(".receptionAutoActivite").on('click',function () {
        var id = $(this).attr('id');
        $(".auto_activiteA").empty();
        $("#uniqueInfo1").hide();
        $("#uniqueInfo2").hide();
        $("#uniqueInfo3").empty();
        $("#uniqueInfoList").css('width','55vw');
        $("#uniqueInfo3").css('max-height','75vh');
        $("#uniqueInfo3").css('overflow-y','scroll');
        $("#uniqueInfo3").show();
        $("#uniqueInfo3").append("" +
            "<div style='margin-bottom: 3%;'>" +
            "<div class='form-check form-check-inline'>" +
            "<div>" +
            "<div style='text-align: center'><h6>REVISION ET PIECES</h6></div>"+
            "<ol style='list-style: none;'>" +
            "<li id='rp1' style='margin-bottom: 2%;'><input  class='atauActiviteCheck' id='crp1' type='checkbox' style='margin-right: 2%;'>R&eacute;vision p&eacute;riodique du moteur, contr&ocirc;le des filtres et frein et entretien du v&eacute;hicule.</li>" +
            "<li id='rp2' style='margin-bottom: 2%;'><input  class='atauActiviteCheck' id='crp2' type='checkbox' style='margin-right: 2%;'>R&eacute;vision moteur, entretien du v&eacute;hicule et supression avant et arriere.</li>" +
            "<li id='rp3' style='margin-bottom: 2%;'><input  class='atauActiviteCheck' id='crp3' type='checkbox' style='margin-right: 2%;'>Changement de pi&egrave;ces</li>" +
            "<li id='rp4'><input  class='atauActiviteCheck' id='crp4' type='checkbox' style='margin-right: 2%;'>Changement de pneu/Equilibrage, parall&eacute;lisme</li>" +
            "</ol>" +
            "</div>"+
            "<div>" +
            "<div>" +
            "<div style='text-align: center'><h6>MOTEUR</h6></div>"+
            "<ol style='list-style: none;'>" +
            "<li id='mo1' style='margin-bottom: 2%;'><input  class='atauActiviteCheck' id='cmo1' type='checkbox' style='margin-right: 2%;'>R&eacute;fection du moteur.</li>" +
            "<li id='mo2'><input  class='atauActiviteCheck' id='cmo2' type='checkbox' style='margin-right: 2%;'>Changement du moteur complet(occasion).</li>" +
            "</ol>" +
            "</div>"+
            "<div>" +
            "<div style='text-align: center'><h6>ELEC + CLIM</h6></div>"+
            "<ol style='list-style: none;'>" +
            "<li id='ec1' style='margin-bottom: 2%;'><input  class='atauActiviteCheck' id='cec1' type='checkbox' style='margin-right: 2%;'>Mise au point de la climatisation.</li>" +
            "<li id='ec2'><input  class='atauActiviteCheck' id='cec2' type='checkbox' style='margin-right: 2%;'>Contr&ocirc;le du syst&egrave;me de charge; changement de batt&eacute;rie.</li>" +
            "</ol>" +
            "</div>"+
            "</div>"+
            "</div>"+
            "</div>"+
            "<div class='form-check form-check-inline'>" +
            "<div>" +
            "<div style='text-align: center'><h6>TOLERIE-PEINTURE</h6></div>"+
            "<ol style='list-style: none;'>" +
            "<li id='tp1' style='margin-bottom: 2%;'><input  class='atauActiviteCheck' id='ctp1' type='checkbox' style='margin-right: 2%;'>Redressage et retouche de peinture.</li>" +
            "<li id='tp2' style='margin-bottom: 2%;'><input  class='atauActiviteCheck' id='ctp2' type='checkbox' style='margin-right: 2%;'>Syst&egrave; d'&eacute;mission de gaz d'&eacute;chappement.</li>" +
            "<li id='tp3' style='margin-bottom: 2%;'><input  class='atauActiviteCheck' id='ctp3' type='checkbox' style='margin-right: 2%;'>Voile de peinture sans toit.</li>" +
            "<li id='tp4' style='margin-bottom: 2%;'><input  class='atauActiviteCheck' id='ctp4' type='checkbox' style='margin-right: 2%;'>Redressage Voile de peinture sans toit.</li>" +
            "<li id='tp5' style='margin-bottom: 2%;'><input  class='atauActiviteCheck' id='ctp5' type='checkbox' style='margin-right: 2%;'>Changement de pare-brise.</li>" +
            "<li id='tp6'><input  class='atauActiviteCheck' id='ctp6' type='checkbox' style='margin-right: 2%;'>Voile compl&egrave;te.</li>" +
            "</ol>" +
            "</div>"+
            "<div>" +
            "<div style='text-align: center'><h6>DFST</h6></div>"+
            "<ol style='list-style: none;'>" +
            "<li id='d1' style='margin-bottom: 2%;'><input  class='atauActiviteCheck' id='cd1' type='checkbox' style='margin-right: 2%;'>Mise au point la suspention avant.</li>" +
            "<li id='d2' style='margin-bottom: 2%;'><input  class='atauActiviteCheck' id='cd2' type='checkbox' style='margin-right: 2%;'>Mise au point de la suspention arri&egrave;re.</li>" +
            "<li id='d3' style='margin-bottom: 2%;'><input  class='atauActiviteCheck' id='cd3' type='checkbox' style='margin-right: 2%;'>Contr&ocirc;le du syst&egrave;me de freinage.</li>" +
            "<li id='d4' style='margin-bottom: 2%;'><input  class='atauActiviteCheck' id='cd4' type='checkbox' style='margin-right: 2%;'>Mise au point de la suspension avant et arri&egrave;re.</li>" +
            "<li id='d5'><input  class='atauActiviteCheck' id='cd5' type='checkbox' style='margin-right: 2%;'>Mise au point du syst&egrave;me d'embrayage</li>" +
            "</ol>" +
            "</div>"+
            "</div>"
        );

        $(".atauActiviteCheck").on('click',function () {
            var id = $(this).attr('id');
            $(".auto_activiteA").empty();
            if(id = 'crp1' || id == 'crp2' || id == 'crp3' || id == 'crp4')
            {
                if($("#crp4").is(':checked',true)||$("#crp3").is(':checked',true)||$("#crp1").is(':checked',true)||$("#crp2").is(':checked',true))$(".auto_activiteA").append('REVISION ET PIECES\n')
            }
            if($("#crp1").is(':checked',true))$(".auto_activiteA").append($("#rp1").text()+'\n');
            if($("#crp2").is(':checked',true))$(".auto_activiteA").append($("#rp2").text()+'\n');
            if($("#crp3").is(':checked',true))$(".auto_activiteA").append($("#rp3").text()+'\n');
            if($("#crp4").is(':checked',true))$(".auto_activiteA").append($("#rp4").text()+'\n');

            if(id = 'cd1' || id == 'cd2' || id == 'cd3' || id == 'cd4' || id == 'cd5')
            {
                if($("#cd5").is(':checked',true)||$("#cd4").is(':checked',true)||$("#cd3").is(':checked',true)||$("#cd1").is(':checked',true)||$("#cd2").is(':checked',true))$(".auto_activiteA").append('DFST\n')
            }
            if($("#cd1").is(':checked',true))$(".auto_activiteA").append($("#d1").text()+'\n');
            if($("#cd2").is(':checked',true))$(".auto_activiteA").append($("#d2").text()+'\n');
            if($("#cd3").is(':checked',true))$(".auto_activiteA").append($("#d3").text()+'\n');
            if($("#cd4").is(':checked',true))$(".auto_activiteA").append($("#d4").text()+'\n');
            if($("#cd5").is(':checked',true))$(".auto_activiteA").append($("#d5").text()+'\n');

            if(id = 'ctp1' || id == 'ctp2' || id == 'ctp3' || id == 'ctp4' || id == 'ctp5' || id == 'ctp6')
            {
                if($("#ctp6").is(':checked',true)||$("#ctp5").is(':checked',true)||$("#ctp4").is(':checked',true)||$("#ctp3").is(':checked',true)||$("#ctp1").is(':checked',true)||$("#ctp2").is(':checked',true))$(".auto_activiteA").append('TOLERIE-PEINTURE\n')
            }
            if($("#ctp1").is(':checked',true))$(".auto_activiteA").append($("#tp1").text()+'\n');
            if($("#ctp2").is(':checked',true))$(".auto_activiteA").append($("#tp2").text()+'\n');
            if($("#ctp3").is(':checked',true))$(".auto_activiteA").append($("#tp3").text()+'\n');
            if($("#ctp4").is(':checked',true))$(".auto_activiteA").append($("#tp4").text()+'\n');
            if($("#ctp5").is(':checked',true))$(".auto_activiteA").append($("#tp5").text()+'\n');
            if($("#ctp6").is(':checked',true))$(".auto_activiteA").append($("#tp6").text()+'\n');

            if(id = 'cmo1' || id == 'cmo2')
            {
                if($("#cmo1").is(':checked',true)||$("#cmo2").is(':checked',true))$(".auto_activiteA").append('MOTEUR\n')
            }
            if($("#cmo1").is(':checked',true))$(".auto_activiteA").append($("#mo1").text()+'\n');
            if($("#cmo2").is(':checked',true))$(".auto_activiteA").append($("#mo2").text()+'\n');

            if(id = 'cec1' || id == 'cec2')
            {
                if($("#cec1").is(':checked',true)||$("#cec2").is(':checked',true))$(".auto_activiteA").append('ELEC + CLIM\n')
            }
            if($("#cec1").is(':checked',true))$(".auto_activiteA").append($("#ec1").text()+'\n');
            if($("#cec2").is(':checked',true))$(".auto_activiteA").append($("#ec2").text()+'\n');


        });
        $(".autoactiviteempty").on('click',function () {
            $(".auto_activiteA").empty();
        });

        $("#ModalListeInfoUnique").modal({backdrop: "static"});

    });

});