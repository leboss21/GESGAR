function ModalListUniqueSearch() {
    $("#listeUniqueSearchInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#tableListeUniqueBody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
}

function FiltreListeUnique() {
    $("#listeUniqueSearchInput").on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $("#tableListeUniqueBody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
}

function AdminViewListtd() {
    $('.adminViewListtd').on('mousemove',function () {
        var standareColor = $(this).parent().css('background-color');
        if(standareColor != 'rgb(173, 216, 230)')
        {
            $(this).parent().css('background-color','rgb(200, 200, 200)');
        }
    });

    $('.adminViewListtd').on('mouseleave',function () {
        var standareColor = $(this).parent().css('background-color');
        if(standareColor != 'rgb(173, 216, 230)')
        {
            $(this).parent().css('background-color','rgb(245, 245, 245)');
        }
    });



    $(".type_model_class").dblclick(function () {
        var id = $(this).attr('id');
        var text = $(this).text();
        $("#type_model_search_pane").hide();
        $("#type_model_add_pane").hide();

        if($(this).css("background-color") == 'rgb(173, 216, 230)')
        {
            $(this).css('background-color','rgb(245, 245, 245)');
            $("#type_model_edit_pane").hide();
            $("#type_model_add_pane").show();
        }
        else
        {
            $(".type_model_class").css('background-color','rgb(245, 245, 245)');
            $(this).css('background-color','rgb(173, 216, 230)');
            $("#type_model_edit_pane").show();
            $(".type_model_edit").attr('id',id);
            $(".type_model_remove").attr('id',id);
            $(".type_model_remove_conf").attr('id',id);
            $(".type_model_edit").attr('title','Modification de '+text);
            $(".type_model_remove").attr('title','Suppression de '+text);
            $(".type_model_remove_conf").attr('title','Confirmer la Suppression de '+text);
            $(".type_model_remove_conf").hide();
            $(".type_model_remove").css('color','rgb(245, 245, 245)');

            $("#libelleTMV").val(text);
        }

    });

    $(".type_moteur_class").dblclick(function () {
        var id = $(this).attr('id');
        var text = $(this).text();
        $("#type_moteur_search_pane").hide();
        $("#type_moteur_add_pane").hide();

        if($(this).css("background-color") == 'rgb(173, 216, 230)')
        {
            $(this).css('background-color','rgb(245, 245, 245)');
            $("#type_moteur_edit_pane").hide();
            $("#type_moteur_add_pane").show();
        }
        else
        {
            $(".type_moteur_class").css('background-color','rgb(245, 245, 245)');
            $(this).css('background-color','rgb(173, 216, 230)');
            $("#type_moteur_edit_pane").show();
            $(".type_moteur_edit").attr('id',id);
            $(".type_moteur_remove").attr('id',id);
            $(".type_moteur_remove_conf").attr('id',id);
            $(".type_moteur_edit").attr('title','Modification de '+text);
            $(".type_moteur_remove").attr('title','Suppression de '+text);
            $(".type_moteur_remove_conf").attr('title','Confirmer la Suppression de '+text);
            $(".type_moteur_remove_conf").hide();
            $(".type_moteur_remove").css('color','rgb(245, 245, 245)');

            $("#libelleTM").val(text);
        }

    });

    $(".specialite_tech_class").dblclick(function () {
        var id = $(this).attr('id');
        var text = $(this).text();
        $("#specialite_tech_search_pane").hide();
        $("#specialite_tech_add_pane").hide();

        if($(this).css("background-color") == 'rgb(173, 216, 230)')
        {
            $(this).css('background-color','rgb(245, 245, 245)');
            $("#specialite_tech_edit_pane").hide();
            $("#specialite_tech_add_pane").show();
        }
        else
        {
            $(".specialite_tech_class").css('background-color','rgb(245, 245, 245)');
            $(this).css('background-color','rgb(173, 216, 230)');
            $("#specialite_tech_edit_pane").show();
            $(".specialite_tech_edit").attr('id',id);
            $(".specialite_tech_remove").attr('id',id);
            $(".specialite_tech_remove_conf").attr('id',id);
            $(".specialite_tech_edit").attr('title','Modification de '+text);
            $(".specialite_tech_remove").attr('title','Suppression de '+text);
            $(".specialite_tech_remove_conf").attr('title','Confirmer la Suppression de '+text);
            $(".specialite_tech_remove_conf").hide();
            $(".specialite_tech_remove").css('color','rgb(245, 245, 245)');

            $("#libelleST").val(text);
        }
    });

    $(".status_tech_class").dblclick(function () {
        var id = $(this).attr('id');
        var text = $(this).text();
        $("#status_tech_search_pane").hide();
        $("#status_tech_add_pane").hide();

        if($(this).css("background-color") == 'rgb(173, 216, 230)')
        {
            $(this).css('background-color','rgb(245, 245, 245)');
            $("#status_tech_edit_pane").hide();
            $("#status_tech_add_pane").show();
        }
        else
        {
            $(".status_tech_class").css('background-color','rgb(245, 245, 245)');
            $(this).css('background-color','rgb(173, 216, 230)');
            $("#status_tech_edit_pane").show();
            $(".status_tech_edit").attr('id',id);
            $(".status_tech_remove").attr('id',id);
            $(".status_tech_remove_conf").attr('id',id);
            $(".status_tech_edit").attr('title','Modification de '+text);
            $(".status_tech_remove").attr('title','Suppression de '+text);
            $(".status_tech_remove_conf").attr('title','Confirmer la Suppression de '+text);
            $(".status_tech_remove_conf").hide();
            $(".status_tech_remove").css('color','rgb(245, 245, 245)');

            $("#libelleStT").val(text);
        }
    });

    $(".genre_client_class").dblclick(function () {
        var id = $(this).attr('id');
        var text = $(this).text();
        $("#genre_client_search_pane").hide();
        $("#genre_client_add_pane").hide();

        if($(this).css("background-color") == 'rgb(173, 216, 230)')
        {
            $(this).css('background-color','rgb(245, 245, 245)');
            $("#genre_client_edit_pane").hide();
            $("#genre_client_add_pane").show();
        }
        else
        {
            $(".genre_client_class").css('background-color','rgb(245, 245, 245)');
            $(this).css('background-color','rgb(173, 216, 230)');
            $("#genre_client_edit_pane").show();
            $(".genre_client_edit").attr('id',id);
            $(".genre_client_remove").attr('id',id);
            $(".genre_client_remove_conf").attr('id',id);
            $(".genre_client_edit").attr('title','Modification de '+text);
            $(".genre_client_remove").attr('title','Suppression de '+text);
            $(".genre_client_remove_conf").attr('title','Confirmer la Suppression de '+text);
            $(".genre_client_remove_conf").hide();
            $(".genre_client_remove").css('color','rgb(245, 245, 245)');

            $("#libelleGC").val(text);
        }
    });

    $("#type_model_add").click(function () {
        ModalTMVInsertion();
    });
    $("#type_moteur_add").click(function () {
        ModalTMInsertion();
    });
    $("#specialite_tech_add").click(function () {
        ModalSTInsertion();
    });
    $("#status_tech_add").click(function () {
        ModalStTInsertion();
    });

    $("#genre_client_add").click(function () {
        ModalGCInsertion();
    });

    $(".type_model_remove").click(function () {

        if($(this).css("color") == 'rgb(173, 216, 230)')
        {
            $(this).css('color','rgb(245, 245, 245)');
            $(".type_model_remove_conf").hide();
        }
        else
        {
            $(this).css('color','rgb(173, 216, 230)');
            $(".type_model_remove_conf").show();
        }
    });

    $(".type_moteur_remove").click(function () {

        if($(this).css("color") == 'rgb(173, 216, 230)')
        {
            $(this).css('color','rgb(245, 245, 245)');
            $(".type_moteur_remove_conf").hide();
        }
        else
        {
            $(this).css('color','rgb(173, 216, 230)');
            $(".type_moteur_remove_conf").show();
        }
    });

    $(".specialite_tech_remove").click(function () {

        if($(this).css("color") == 'rgb(173, 216, 230)')
        {
            $(this).css('color','rgb(245, 245, 245)');
            $(".specialite_tech_remove_conf").hide();
        }
        else
        {
            $(this).css('color','rgb(173, 216, 230)');
            $(".specialite_tech_remove_conf").show();
        }
    });

    $(".status_tech_remove").click(function () {

        if($(this).css("color") == 'rgb(173, 216, 230)')
        {
            $(this).css('color','rgb(245, 245, 245)');
            $(".status_tech_remove_conf").hide();
        }
        else
        {
            $(this).css('color','rgb(173, 216, 230)');
            $(".status_tech_remove_conf").show();
        }
    });

    $(".genre_client_remove").click(function () {

        if($(this).css("color") == 'rgb(173, 216, 230)')
        {
            $(this).css('color','rgb(245, 245, 245)');
            $(".genre_client_remove_conf").hide();
        }
        else
        {
            $(this).css('color','rgb(173, 216, 230)');
            $(".genre_client_remove_conf").show();
        }
    });

    $(".type_model_remove_conf").click(function () {
        var id = $(this).attr('id');
        var element = 'typeModel'

        $.post('controller/SuppressionOperateurs.php',{supretypemode:element,supretypemodeid:id},function (data) {

            if(data=='oui')
            {
                $("#conteneur").load('view/Operateurs.php');
                SuppressionReussie();
            }
            else
            {
                SuppressionEchoue();
            }
        });
    });

    $(".type_moteur_remove_conf").click(function () {
        var id = $(this).attr('id');
        var element = 'typeMoteur'

        $.post('controller/SuppressionOperateurs.php',{supretypemoteur:element,supretypemoteurid:id},function (data) {

            if(data=='oui')
            {
                $("#conteneur").load('view/Operateurs.php');
                SuppressionReussie();
            }
            else
            {
                SuppressionEchoue();
            }
        });
    });

    $(".specialite_tech_remove_conf").click(function () {
        var id = $(this).attr('id');
        var element = 'specialiteTech'

        $.post('controller/SuppressionOperateurs.php',{specialitetech:element,specialitetechid:id},function (data) {

            if(data=='oui')
            {
                $("#conteneur").load('view/Operateurs.php');
                SuppressionReussie();
            }
            else
            {
                SuppressionEchoue();
            }
        });
    });

    $(".status_tech_remove_conf").click(function () {
        var id = $(this).attr('id');
        var element = 'statusTech'

        $.post('controller/SuppressionOperateurs.php',{statuttech:element,statuttechid:id},function (data) {

            if(data=='oui')
            {
                $("#conteneur").load('view/Operateurs.php');
                SuppressionReussie();
            }
            else
            {
                SuppressionEchoue();
            }
        });
    });

    $(".genre_client_remove_conf").click(function () {
        var id = $(this).attr('id');
        var element = 'genreClient'

        $.post('controller/SuppressionOperateurs.php',{genreclient:element,genreclientid:id},function (data) {

            if(data=='oui')
            {
                $("#conteneur").load('view/Operateurs.php');
                SuppressionReussie();
            }
            else
            {
                SuppressionEchoue();
            }
        });
    });

    $("#type_model_edit_pane_hid").click(function () {
        $(".type_model_class").css('background-color','rgb(245, 245, 245)');
        $("#type_model_edit_pane").hide();
        $("#type_model_add_pane").show();
        $(".type_model_remove_conf").hide();
        $(".type_model_remove").css('color','rgb(245, 245, 245)');
    });

    $("#type_moteur_edit_pane_hid").click(function () {
        $(".type_moteur_class").css('background-color','rgb(245, 245, 245)');
        $("#type_moteur_edit_pane").hide();
        $("#type_moteur_add_pane").show();
        $(".type_moteur_remove_conf").hide();
        $(".type_moteur_remove").css('color','rgb(245, 245, 245)');
    });

    $("#specialite_tech_edit_pane_hid").click(function () {
        $(".specialite_tech_class").css('background-color','rgb(245, 245, 245)');
        $("#specialite_tech_edit_pane").hide();
        $("#specialite_tech_add_pane").show();
        $(".specialite_tech_remove_conf").hide();
        $(".specialite_tech_remove").css('color','rgb(245, 245, 245)');
    });

    $("#status_tech_edit_pane_hid").click(function () {
        $(".status_tech_class").css('background-color','rgb(245, 245, 245)');
        $("#status_tech_edit_pane").hide();
        $("#status_tech_add_pane").show();
        $(".status_tech_remove_conf").hide();
        $(".status_tech_remove").css('color','rgb(245, 245, 245)');
    });

    $("#genre_client_edit_pane_hid").click(function () {
        $(".genre_client_class").css('background-color','rgb(245, 245, 245)');
        $("#genre_client_edit_pane").hide();
        $("#genre_client_add_pane").show();
        $(".genre_client_remove_conf").hide();
        $(".genre_client_remove").css('color','rgb(245, 245, 245)');
    });

    $(".type_model_edit").click(function () {
        var id = $(this).attr('id');
        $("#libelleTMVId").val(id);
        ModalTMVModification();
    });

    $(".type_moteur_edit").click(function () {
        var id = $(this).attr('id');
        $("#libelleTMId").val(id);
        ModalTMModification();
    });

    $(".specialite_tech_edit").click(function () {
        var id = $(this).attr('id');
        $("#libelleSTId").val(id);
        ModalSTModification();

    });

    $(".status_tech_edit").click(function () {
        var id = $(this).attr('id');
        $("#libelleStTId").val(id);
        ModalStTModification();
    });

    $(".genre_client_edit").click(function () {
        var id = $(this).attr('id');
        $("#libelleGCId").val(id);
        ModalGCModification();
    });

    $("#type_model_search").click(function () {
        $("#type_model_add_pane").hide();
        $("#type_model_search_input").val("");
        $("#type_model_search_pane").show();
        $("#type_model_search_input").focus();
    });

    $("#type_moteur_search").click(function () {
        $("#type_moteur_add_pane").hide();
        $("#type_moteur_search_input").val("");
        $("#type_moteur_search_pane").show();
        $("#type_moteur_search_input").focus();
    });

    $("#specialite_tech_search").click(function () {
        $("#specialite_tech_add_pane").hide();
        $("#specialite_tech_search_input").val("");
        $("#specialite_tech_search_pane").show();
        $("#specialite_tech_search_input").focus();
    });

    $("#status_tech_search").click(function () {
        $("#status_tech_add_pane").hide();
        $("#status_tech_search_input").val("");
        $("#status_tech_search_pane").show();
        $("#status_tech_search_input").focus();
    });

    $("#genre_client_search").click(function () {
        $("#genre_client_add_pane").hide();
        $("#genre_client_search_input").val("");
        $("#genre_client_search_pane").show();
        $("#genre_client_search_input").focus();
    });

    $("#type_model_search_pane_hid").click(function () {
        $("#type_model_search_pane").hide();
        $("#type_model_add_pane").show();
    });

    $("#type_moteur_search_pane_hid").click(function () {
        $("#type_moteur_search_pane").hide();
        $("#type_moteur_add_pane").show();
    });

    $("#specialite_tech_search_pane_hid").click(function () {
        $("#specialite_tech_search_pane").hide();
        $("#specialite_tech_add_pane").show();
    });

    $("#status_tech_search_pane_hid").click(function () {
        $("#status_tech_search_pane").hide();
        $("#status_tech_add_pane").show();
    });

    $("#genre_client_search_pane_hid").click(function () {
        $("#genre_client_search_pane").hide();
        $("#genre_client_add_pane").show();
    });

    $("#type_model_search_input").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#liste_TM tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#type_moteur_search_input").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#liste_Tm tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    $("#specialite_tech_search_input").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#liste_Sp tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    $("#status_tech_search_input").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#liste_St tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    $("#genre_client_search_input").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#liste_Gc tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    $("#adminMenuBar span").click(function () {
        if($(this).css('background-color') == 'rgb(245, 245, 245)'){
            $(this).css('background-color','rgb(14, 144, 210)');
        }
        else {
            $(this).css('background-color','rgb(245, 245, 245)');
        }
    });

    $(window).click(function () {
        if( $("#adminMenuBar span").css('background-color') == 'rgb(14, 144, 210)'){
            $("#adminMenuBar span").css('background-color','rgb(245, 245, 245)');
        }
    });

}

function AdminMenuBarUtilisateurMenu() {
     $(".adminMenuBar_menu").on('mousemove', function () {
        $(this).css('background-color','rgb(56, 1, 208)');
        $(this).children('ul').show();
     });

    $(".adminMenuBar_menu").on('mouseleave', function () {
        $(this).css('background-color','#0a1f6e)');
        $(this).children('ul').hide();
    });

    $(".dropdown_menu_down_admin_menu a").on('mousemove', function () {
        $(this).css('background-color','rgb(56, 1, 208)');
        $(this).children('ul').show();
    });

    $(".dropdown_menu_down_admin_menu a").on('mouseleave', function () {
        $(this).css('background-color','#0a1f6e)');
        $(this).children('ul').hide();
    });

    $("#ajout_utilisateur").click(function () {
        $("#validerU").text("Valider");
        $("#mot_passe_utilisateur").attr('type','password');
        $("#formU")[0].reset();
        $("#resultDivU").hide();
        $("#nom_utilisateur").css('border-color','#d3d9df');
        $("#mot_passe_utilisateur").css('border-color','#d3d9df');
        $("#ModalAddU").modal({backdrop: "static"});
    });
}