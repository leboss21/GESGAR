function recommandation_td_lincked_show() {
    $(".recom_datetd").css("width",'8vw');
    $(".recom_immtd").css("width",'8vw');
    $(".recom_clienttd").css("width",'13vw');
    $(".recom_techtd").css("width",'13vw');
    $(".recom_recomtd").css("width",'15vw');
    $(".recom_situationtd").css("width",'8vw');
    $(".cellul_liee").show();
}

function recommandation_td_lincked_hide() {
    $(".cellul_liee").hide();
    $(".recom_datetd").css("width",'10vw');
    $(".recom_immtd").css("width",'20vw');
    $(".recom_clienttd").css("width",'20vw');
    $(".recom_techtd").css("width",'20vw');
    $(".recom_situationtd").css("width",'10vw');
}

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
        $(".listeRecomAllDivEtat").text("");
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

    ListAllItem();
    ViewPanel();
}