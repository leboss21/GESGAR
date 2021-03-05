function Recommandation() {

    $(".RecomUniqueItemReduis").click(function () {
        $(".viewRecommandationAllClose").hide();
        $(".viewRecommandationAll").show();
        $(".listeRecomAllItem").hide();
    });

    $(".listeRecomAllShow").click(function () {
        $("#conteneur").load('view/RecommandationComplet.php');
        $("#showModalAdd").hide();
        $(".indexFootInfoLeft").hide();
        $(".contextmenustatique").hide();
        $(".nbrListShow").hide();
        $(".listeRecomAllDivEtat").text("visible");
    });

    $(".listeRecomShow").click(function () {
        var nbrListSelect = $("#nbrListSelect").val();

        if(nbrListSelect == 50)
        {
            $("#conteneur").load('view/Recommandation.php');
        }
        else if(nbrListSelect == 100)
        {
            $("#conteneur").load('view/RecommandationB.php');
        }
        else if(nbrListSelect == 250)
        {
            $("#conteneur").load('view/RecommandationC.php');
        }
        else if(nbrListSelect == 500)
        {
            $("#conteneur").load('view/RecommandationD.php');
        }

        $(".contextmenustatique").hide();
        $("#showModalAdd").show();
        $(".indexFootInfoLeft").show();
        $(".nbrListShow").show();
        $(".listeRecomAllDivEtat").text(" ");
    });

    $(".viewRecommandationAll").click(function () {
        var idRecom = $(this).attr('id');
        if($(".viewRecommandationAllClose").css('display','visible'))
        {
            $(".viewRecommandationAllClose").hide();
            $(".viewRecommandationAll").show();
        }

        $(this).parent().children().show();
        $(this).hide();
        RecomInfoUniqueComplete(idRecom);
    });

    $(".viewRecommandationAllClose").click(function () {
        var idProg = $(this).attr('id');
        $(this).parent().children().show();
        $(this).hide();
        $(".listeRecomAllItem").hide();
    });

    $(".editRecommandation").click(function () {
        var id_recom = $(this).attr('id');

        $("#formRecom")[0].reset();
        $.post('controller/Autocomplete.php',{postidrecomandreturnrecom:id_recom},function (data) {
            data = $.parseJSON(data);
            $.each(data,function (key, val) {
                $("#recom_date").val(val.date);
                $("#recom_client").val(val.client);
                $("#recom_tech").val(val.tech);
                $("#recom_imm").val(val.imm);
                $("#recom_prob").val(val.probleme);
                $("#recom_recom").val(val.recom);
                $("#modifRecommandation").val(id_recom);
            });

            setTimeout(function () {
                $("#nom_client_inspect").prop('readonly',false);
                $("#imm_inspect").prop('readonly',false);
                $("#validerAddRecommandation").text("Modifier");
                $("#resultDivInspection").hide();
                $("#repeteInspection").hide();
                $("#ModalAddRecommandation").modal({backdrop: "static"});
            },40);

        });
    });

    $(".chercheRecomInput").on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $(".chercheRecomDiv tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    $(".chercheRecomInputAll").on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $(".chercheRecomDivAll tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    SuppressionElementViewPane();
    ListAllItem();
    ViewPanel();
}