function ListAllItem() {
    $(".uniqueItemReduis").on('mousemove',function () {
        $(".uniqueItemReduis").css("border","1px solid rgba(255,255,255,0.5)");
        $(".uniqueItemReduis").css("border-radius","20%");
        $(".uniqueItemReduis").css("background-color","#0a1f6e");
    });

    $(".uniqueItemReduis").on('mouseleave',function () {
        $(".uniqueItemReduis").css("border","0px solid rgba(255,255,255,0.5)");
        $(".uniqueItemReduis").css("background-color","rgba(255,255,255,0)");
    });

    $(".uniqueItemlistReduis").on('mousemove',function () {
        var evolutionEta = $(".listeEvolutAllItemEtat").text();
        if(evolutionEta == 'evolutionlistealt')
        {
            $(".uniqueItemlistReduis").css("border","1px solid rgba(255,255,255,0.5)");
            $(".uniqueItemlistReduis").css("border-radius","20%");
            $(".uniqueItemlistReduis").css("background-color","#0a1f6e");
        }
    });

    $(".uniqueItemlistReduis").on('mouseleave',function () {
        var evolutionEta = $(".listeEvolutAllItemEtat").text();
        if(evolutionEta == 'evolutionlistealt')
        {
            $(".uniqueItemlistReduis").css("border","0px solid rgba(255,255,255,0.5)");
            $(".uniqueItemlistReduis").css("background-color","rgba(255,255,255,0)");
        }
    });

    $(".uniqueItemlistaltReduis").on('mousemove',function () {
        var evolutionEta = $(".listeEvolutAllItemEtat").text();
        if(evolutionEta == 'evolutionliste')
        {
            $(".uniqueItemlistaltReduis").css("border","1px solid rgba(255,255,255,0.5)");
            $(".uniqueItemlistaltReduis").css("border-radius","20%");
            $(".uniqueItemlistaltReduis").css("background-color","#0a1f6e");
        }

    });

    $(".uniqueItemlistaltReduis").on('mouseleave',function () {
        var evolutionEta = $(".listeEvolutAllItemEtat").text();
        if(evolutionEta == 'evolutionliste')
        {
            $(".uniqueItemlistaltReduis").css("border","0px solid rgba(255,255,255,0.5)");
            $(".uniqueItemlistaltReduis").css("background-color","rgba(255,255,255,0)");
        }

    });

}

function ViewPaneHidden() {
    $(".rendezvousSection, input, select,.listeUniqueSearchViewPaneInputRemove").on('click',function () {
        $(".contextmenustatique").hide();
        $(".listAllItem").hide();
    });

}

function ViewPanel() {
    ViewPaneHidden();

    $(".listeAllShow").on('mousemove',function () {
        $(".listeAllShow").css('font-size','1.35em');
        $(".listeAllShow").css('padding','0.25em');
        $(".listeAllShow").css('background-color',"#a0a0a0");
        $(".listeAllShow").css('border-radius',"100%");
    });

    $(".listeAllShow").on('mouseleave',function () {
        $(".listeAllShow").css('font-size','2em');
        $(".listeAllShow").css('padding','0em');
        $(".listeAllShow").css('background-color',"rgb(245, 245, 245)");
        $(".listeAllShow").css('border-radius',"none");
    });

    $(".listeShow").on('mousemove',function () {
        $(".listeShow").css('font-size','1.35em');
        $(".listeShow").css('padding','0.25em');
        $(".listeShow").css('background-color',"#a0a0a0");
        $(".listeShow").css('border-radius',"100%");
    });

    $(".listeShow").on('mouseleave',function () {
        $(".listeShow").css('font-size','2em');
        $(".listeShow").css('padding','0em');
        $(".listeShow").css('background-color',"rgb(245, 245, 245)");
        $(".listeShow").css('border-radius',"none");
    });

    $(".listeUniqueSearchViewPaneInputRemove").on('mousemove',function () {
        $(".listeUniqueSearchViewPaneInputRemove").css('background-color',"#a0a0a0");
    });

    $(".listeUniqueSearchViewPaneInputRemove").on('mouseleave',function () {
        $(".listeUniqueSearchViewPaneInputRemove").css('background-color',"rgb(238, 238, 238)");
    });

    $(".listeUniqueSearchViewPaneInputRemove").click(function () {
        $(".listeUniqueSearchViewPaneInput").val('');
        $(".listeUniqueSearchViewPaneInput").focus();
        $(".listeUniqueSearchViewPaneInput").keyup();
    });

    $("#conteneurDivContaint").on('mouseleave', function () {
        $(".InfoLoopItem").hide();
    });

    $('thead').on('mousemove', function () {
        $(".InfoLoopItem").hide();
    });

    var texte = " ";
    var cursoreX = " ";
    var cursoreY = " ";

    $(".viewPaneTableBody").on('mousemove',function (e) {
        cursoreX = e.pageX
        cursoreY = e.pageY

        cursoreX = parseFloat(cursoreX);
        cursoreY = parseFloat(cursoreY);
    });

    $('.viewListtd').on('mousemove',function (e) {

        texte = $(this).children().text();
        $(".InfoLoopItem").text(texte);
        var viewListtdPosition = $(this).children().offset();
        var viewListtdX = viewListtdPosition.left;
        var viewListtdY = viewListtdPosition.top;

        viewListtdX = parseFloat(viewListtdX);
        viewListtdY = parseFloat(viewListtdY);

        var viewListtdH = $(this).children().css('height');
        var viewListtdW = $(this).children().css('width');

        viewListtdH = parseFloat(viewListtdH);
        viewListtdW = parseFloat(viewListtdW);

        var infoLoopItemW = $(".InfoLoopItem").css('width');
        var infoLoopItemH = $(".InfoLoopItem").css('height');
        infoLoopItemW = parseFloat(infoLoopItemW);
        infoLoopItemH = parseFloat(infoLoopItemH);

        cursoreX = parseFloat(cursoreX);
        cursoreY = parseFloat(cursoreY);

        var viewPaneContener = $("#conteneurDivContaint").offset();
        var viewPaneContenerX = viewPaneContener.left;
        var viewPaneContenerY = viewPaneContener.top;

        viewPaneContenerX = parseFloat(viewPaneContenerX);
        viewPaneContenerY = parseFloat(viewPaneContenerY);

        var viewPaneContenerH = $("#conteneurDivContaint").css('height');
        var viewPaneContenerW = $("#conteneurDivContaint").css('width');

        viewPaneContenerH = parseFloat(viewPaneContenerH);
        viewPaneContenerW = parseFloat(viewPaneContenerW);

        var infoLoopItemLeftRigth = (((viewPaneContenerX + viewPaneContenerW)*3)/4);
        var infoLoopItemTopBotoom = (((viewPaneContenerY + viewPaneContenerH)*3)/4);

        if(cursoreX > infoLoopItemLeftRigth){
            $(".InfoLoopItem").css('margin-left',((viewListtdX - viewPaneContenerX)-(infoLoopItemW - viewListtdW))+'px');
        }
        else {
            $(".InfoLoopItem").css('margin-left',(viewListtdX - (viewPaneContenerX))+'px');
        }

        if(cursoreY > infoLoopItemTopBotoom){
            $(".InfoLoopItem").css('margin-top',((viewListtdY - viewPaneContenerY) - (infoLoopItemH - viewListtdH))+'px');
        }
        else {
            $(".InfoLoopItem").css('margin-top',(viewListtdY - viewPaneContenerY)+'px');
        }

    });

    var mousedownExecut = 0;

    $('.viewListtd').on('dblclick',function (e) {
        if(e.which == 1)
        {
            mousedownExecut = 1;
        }

    });

    $('.viewListtd').on('click',function (e) {
        $(".listAllItem").hide();
        if(e.which == 1)
        {
            mousedownExecut = 1;
        }

    });

    $('.viewListtd').on('mousedown',function (e) {

        if(e.which == 1)
        {
            mousedownExecut = 0;
            setTimeout(function () {
                if(mousedownExecut == 0){
                    $('.InfoLoopItem').show();
                }
            },500);
        }

    });

    $('.viewListtd').on('mousemove',function () {

        var viewPaneActive = $("#mySpan").text();
        var standareColor = $(this).parent().css('background-color');

        if(viewPaneActive != "Enr\351gistrement Rendez-vous revision" && viewPaneActive != "Enr\351gistrement Rendez-vous visite technique" && viewPaneActive != "Enr\351gistrement Rendez-vous assurance" && viewPaneActive != "Enr\351gistrement Rendez-vous garantie")
        {
            if(standareColor != 'rgb(155, 155, 155)' && standareColor != 'rgb(100, 100, 200)')
            {
                $(this).parent().css('background-color','rgb(200, 200, 200)');
            }
        }
        else if(viewPaneActive == "Enr\351gistrement Rendez-vous revision" || viewPaneActive == "Enr\351gistrement Rendez-vous visite technique" || viewPaneActive == "Enr\351gistrement Rendez-vous assurance" || viewPaneActive == "Enr\351gistrement Rendez-vous garantie")
        {

            if(standareColor != 'rgb(155, 155, 155)' && standareColor != 'rgb(200, 0, 0)' && standareColor != 'rgb(0, 200, 0)')
            {
                if(standareColor == 'rgb(245, 245, 245)')
                {
                    $(this).parent().css('background-color','rgb(200, 200, 200)');
                }
                else if(standareColor == 'rgb(255, 0, 0)')
                {
                    $(this).parent().css('background-color','rgb(200, 0, 0)');
                }
                else if(standareColor == 'rgb(0, 255, 0)')
                {
                    $(this).parent().css('background-color','rgb(0, 200, 0)');
                }
            }
        }

    });

    $('.viewListtd').on('mouseleave',function ()
    {
        var viewPaneActive = $("#mySpan").text();
        var standareColor = $(this).parent().css('background-color');

        if(viewPaneActive != "Enr\351gistrement Rendez-vous revision" && viewPaneActive != "Enr\351gistrement Rendez-vous visite technique" && viewPaneActive != "Enr\351gistrement Rendez-vous assurance" && viewPaneActive != "Enr\351gistrement Rendez-vous garantie")
        {

            if(standareColor != 'rgb(155, 155, 155)' && standareColor != 'rgb(100, 100, 200)')
            {
                $(this).parent().css('background-color','rgb(245, 245, 245)');
            }
        }
        else if(viewPaneActive == "Enr\351gistrement Rendez-vous revision" || viewPaneActive == "Enr\351gistrement Rendez-vous visite technique" || viewPaneActive == "Enr\351gistrement Rendez-vous assurance" || viewPaneActive == "Enr\351gistrement Rendez-vous garantie")
        {

            if(standareColor == 'rgb(200, 200, 200)')
            {
                $(this).parent().css('background-color','rgb(245, 245, 245)');
            }
            else if(standareColor == 'rgb(200, 0, 0)')
            {
                $(this).parent().css('background-color','rgb(255, 0, 0)');
            }
            else if(standareColor == 'rgb(0, 200, 0)')
            {
                $(this).parent().css('background-color','rgb(0, 255, 0)');
            }
        }

    });

    $('.viewListtd').on('mouseup',function (e) {
        if(e.which == 1)
        {
            mousedownExecut = 0;
            $('.InfoLoopItem').hide();
        }

        if(e.which == 3)
        {
            var viewPaneActive = $("#mySpan").text();

            if(viewPaneActive != "Enr\351gistrement Rendez-vous revision" && viewPaneActive != "Enr\351gistrement Rendez-vous visite technique" && viewPaneActive != "Enr\351gistrement Rendez-vous assurance" && viewPaneActive != "Enr\351gistrement Rendez-vous garantie")
            {
                var standareColor = $(this).parent().css('background-color');

                if(standareColor != 'rgb(155, 155, 155)')
                {
                    $('.viewListtd').parent().css('background-color','rgb(245, 245, 245)');
                    $(this).parent().css('background-color','rgb(155, 155, 155)');

                    $("#contextmenuId").text("");
                    var id = $(this).parent().attr('id');
                    $("#contextmenuId").text(id);
                    if($(".contextmenustatique").is(':visible'))
                    {
                        $(".contextmenustatique").hide();
                        $(".contextmenustatique").show();
                    }
                    else
                    {
                        $(".contextmenustatique").show();
                    }
                }
                else
                {
                    $(this).parent().css('background-color','rgb(245, 245, 245)');
                    $(".contextmenustatique").hide();
                }
            }
            else if(viewPaneActive == "Enr\351gistrement Rendez-vous revision" || viewPaneActive == "Enr\351gistrement Rendez-vous visite technique" || viewPaneActive == "Enr\351gistrement Rendez-vous assurance" || viewPaneActive == "Enr\351gistrement Rendez-vous garantie")
            {
                var standareColor = $(this).parent().css('background-color');
                var id = $(this).parent().attr('id');
                $("#contextmenuId").text(id);
                if(standareColor == 'rgb(255, 0, 0)' || standareColor == 'rgb(200, 0, 0)')
                {
                    if(viewPaneActive == "Enr\351gistrement Rendez-vous revision")
                    {
                        $("#conteneur_rendezvous").load('view/VehiculeRendezvousRevision.php');
                        setTimeout(function () {
                            $('#'+id).css('background-color','rgb(190, 0, 0)');
                        },100);
                        $(".contextmenustatique").show();
                    }
                    else if(viewPaneActive == "Enr\351gistrement Rendez-vous visite technique")
                    {
                        $("#conteneur_rendezvous").load('view/VehiculeRendezvousVisiteTechnique.php');
                        setTimeout(function () {
                            $('#'+id).css('background-color','rgb(190, 0, 0)');
                        },100);
                        $(".contextmenustatique").show();
                    }
                    else if(viewPaneActive == "Enr\351gistrement Rendez-vous assurance")
                    {
                        $("#conteneur_rendezvous").load('view/VehiculeRendezvousAssurance.php');
                        setTimeout(function () {
                            $('#'+id).css('background-color','rgb(190, 0, 0)');
                        },100);
                        $(".contextmenustatique").show();
                    }
                    else if(viewPaneActive == "Enr\351gistrement Rendez-vous garantie")
                    {
                        $("#conteneur_rendezvous").load('view/VehiculeRendezvousGarantie.php');
                        setTimeout(function () {
                            $('#'+id).css('background-color','rgb(190, 0, 0)');
                        },100);
                        $(".contextmenustatique").show();
                    }

                }
                else if(standareColor == 'rgb(0, 255, 0)' || standareColor == 'rgb(0, 200, 0)')
                {
                    if(viewPaneActive == "Enr\351gistrement Rendez-vous revision")
                    {
                        $("#conteneur_rendezvous").load('view/VehiculeRendezvousRevision.php');
                        setTimeout(function () {
                            $('#'+id).css('background-color','rgb(0,190, 0)');
                        },100);
                        $(".contextmenustatique").show();
                    }
                    else if(viewPaneActive == "Enr\351gistrement Rendez-vous visite technique")
                    {
                        $("#conteneur_rendezvous").load('view/VehiculeRendezvousVisiteTechnique.php');
                        setTimeout(function () {
                            $('#'+id).css('background-color','rgb(0,190, 0)');
                        },100);
                        $(".contextmenustatique").show();
                    }
                    else if(viewPaneActive == "Enr\351gistrement Rendez-vous assurance")
                    {
                        $("#conteneur_rendezvous").load('view/VehiculeRendezvousAssurance.php');
                        setTimeout(function () {
                            $('#'+id).css('background-color','rgb(0,190, 0)');
                        },100);
                        $(".contextmenustatique").show();
                    }
                    else if(viewPaneActive == "Enr\351gistrement Rendez-vous garantie")
                    {
                        $("#conteneur_rendezvous").load('view/VehiculeRendezvousGarantie.php');
                        setTimeout(function () {
                            $('#'+id).css('background-color','rgb(0,190, 0)');
                        },100);
                        $(".contextmenustatique").show();
                    }
                }
                else if(standareColor == 'rgb(245, 245, 245)' || standareColor == 'rgb(200, 200, 200)')
                {
                    if(viewPaneActive == "Enr\351gistrement Rendez-vous revision")
                    {
                        $("#conteneur_rendezvous").load('view/VehiculeRendezvousRevision.php');
                        setTimeout(function () {
                            $('#'+id).css('background-color','rgb(155, 155, 155)');
                        },100);
                        $(".contextmenustatique").show();
                    }
                    else if(viewPaneActive == "Enr\351gistrement Rendez-vous visite technique")
                    {
                        $("#conteneur_rendezvous").load('view/VehiculeRendezvousVisiteTechnique.php');
                        setTimeout(function () {
                            $('#'+id).css('background-color','rgb(155, 155, 155)');
                        },100);
                        $(".contextmenustatique").show();
                    }
                    else if(viewPaneActive == "Enr\351gistrement Rendez-vous assurance")
                    {
                        $("#conteneur_rendezvous").load('view/VehiculeRendezvousAssurance.php');
                        setTimeout(function () {
                            $('#'+id).css('background-color','rgb(155, 155, 155)');
                        },100);
                        $(".contextmenustatique").show();
                    }
                    else if(viewPaneActive == "Enr\351gistrement Rendez-vous garantie")
                    {
                        $("#conteneur_rendezvous").load('view/VehiculeRendezvousGarantie.php');
                        setTimeout(function () {
                            $('#'+id).css('background-color','rgb(155, 155, 155)');
                        },100);
                        $(".contextmenustatique").show();
                    }
                }
                else
                {
                    if(viewPaneActive == "Enr\351gistrement Rendez-vous revision")
                    {
                        $("#conteneur_rendezvous").load('view/VehiculeRendezvousRevision.php');
                        $(".contextmenustatique").hide();
                    }
                    else if(viewPaneActive == "Enr\351gistrement Rendez-vous visite technique")
                    {
                        $("#conteneur_rendezvous").load('view/VehiculeRendezvousVisiteTechnique.php');
                        $(".contextmenustatique").hide();
                    }
                    else if(viewPaneActive == "Enr\351gistrement Rendez-vous assurance")
                    {
                        $("#conteneur_rendezvous").load('view/VehiculeRendezvousAssurance.php');
                        $(".contextmenustatique").hide();
                    }
                    else if(viewPaneActive == "Enr\351gistrement Rendez-vous garantie")
                    {
                        $("#conteneur_rendezvous").load('view/VehiculeRendezvousGarantie.php');
                        $(".contextmenustatique").hide();
                    }
                    $("#contextmenuId").text(" ");
                }

            }

        }
    });

    $('.viewListtd').on('click',function (e) {

        var viewPaneActive = $("#mySpan").text();

        if(viewPaneActive != "Enr\351gistrement Rendez-vous revision" && viewPaneActive != "Enr\351gistrement Rendez-vous visite technique" && viewPaneActive != "Enr\351gistrement Rendez-vous assurance" && viewPaneActive != "Enr\351gistrement Rendez-vous garantie")
        {
            var id = $(this).parent().attr('id');
            $(".contextmenustatique").hide();
            var colorstandar = $(this).parent().css('background-color');

            if(colorstandar != 'rgb(100, 100, 200)')
            {
                $('.viewListtd').parent().css('background-color','rgb(245, 245, 245)');
                $(this).parent().css('background-color','rgb(100, 100, 200)');
            }
            else {
                $(this).parent().css('background-color','rgb(245, 245, 245)');
            }

        }
        else if(viewPaneActive == "Enr\351gistrement Rendez-vous revision" || viewPaneActive == "Enr\351gistrement Rendez-vous visite technique" || viewPaneActive == "Enr\351gistrement Rendez-vous assurance" || viewPaneActive == "Enr\351gistrement Rendez-vous garantie")
        {
            var id = $(this).parent().attr('id');
            $(".contextmenustatique").hide();
            var colorstandar = $(this).parent().css('background-color');

            if(colorstandar != 'rgb(100, 100, 200)')
            {

                if(viewPaneActive == "Enr\351gistrement Rendez-vous revision")
                {
                    $("#conteneur_rendezvous").load('view/VehiculeRendezvousRevision.php');
                    setTimeout(function () {
                        $('#'+id ).css('background-color','rgb(100, 100, 200)');
                    },100);

                }
                else if(viewPaneActive == "Enr\351gistrement Rendez-vous visite technique")
                {
                    $("#conteneur_rendezvous").load('view/VehiculeRendezvousVisiteTechnique.php');
                    setTimeout(function () {
                        $('#'+id ).css('background-color','rgb(100, 100, 200)');
                    },100);
                }
                else if(viewPaneActive == "Enr\351gistrement Rendez-vous assurance")
                {
                    $("#conteneur_rendezvous").load('view/VehiculeRendezvousAssurance.php');
                    setTimeout(function () {
                        $('#'+id ).css('background-color','rgb(100, 100, 200)');
                    },100);
                }
                else if(viewPaneActive == "Enr\351gistrement Rendez-vous garantie")
                {
                    $("#conteneur_rendezvous").load('view/VehiculeRendezvousGarantie.php');
                    setTimeout(function () {
                        $('#'+id ).css('background-color','rgb(100, 100, 200)');
                    },100);
                }
            }
            else {
                if(viewPaneActive == "Enr\351gistrement Rendez-vous revision")
                {
                    $("#conteneur_rendezvous").load('view/VehiculeRendezvousRevision.php');
                }
                else if(viewPaneActive == "Enr\351gistrement Rendez-vous visite technique")
                {
                    $("#conteneur_rendezvous").load('view/VehiculeRendezvousVisiteTechnique.php');
                }
                else if(viewPaneActive == "Enr\351gistrement Rendez-vous assurance")
                {
                    $("#conteneur_rendezvous").load('view/VehiculeRendezvousAssurance.php');
                }
                else if(viewPaneActive == "Enr\351gistrement Rendez-vous garantie")
                {
                    $("#conteneur_rendezvous").load('view/VehiculeRendezvousGarantie.php');
                }
            }
        }

    });

    $(".contextmenustatique div").on('click', function (e) {

        var menuItemActive = $(this).attr('id');
        var menuItemActiveId = $("#contextmenuId").text();

        $(".contextmenustatique").hide();

        if(menuItemActive == 'modifierMenuItem')
        {
            ModificationDonneViewPane(menuItemActiveId);
        }
        if(menuItemActive == 'supprimerMenuItem')
        {
            $("#ModalSuppression").modal({backdrop:"static"});
        }
        if(menuItemActive == 'visualiserMenuItem')
        {
            AffichageTousDonneViewPane(menuItemActiveId);
        }

    });

    $('.InfoLoopItem').click(function (e) {
        if(e.which == 1)
        {
            $('.InfoLoopItem').hide();
        }
    });

}