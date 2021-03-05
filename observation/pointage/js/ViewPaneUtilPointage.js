function pointage_td_lincked_show() {
    $(".point_numtd").css("width",'5vw');
    $(".point_sectiontd").css("width",'5vw');
    $(".point_techtd").css("width",'10vw');
    $(".point_designtd").css("width",'8vw');
    $(".point_datetd").css("width",'5vw');
    $(".point_hrtd").css("width",'3vw');
    $(".point_heuretd").css("width",'8vw');
    $(".point_totaltd").css("width",'5vw');
    $(".point_tafojtd").css("width",'15vw');
    $(".cellul_liee").show();
}

function pointage_td_lincked_hide() {
    $(".cellul_liee").hide();
    $(".point_numtd").css("width",'5vw');
    $(".point_sectiontd").css("width",'10vw');
    $(".point_techtd").css("width",'17.3vw');
    $(".point_designtd").css("width",'10vw');
    $(".point_datetd").css("width",'8vw');
    $(".point_hrtd").css("width",'5vw');
    $(".point_heuretd").css("width",'10vw');
    $(".point_totaltd").css("width",'10vw');
}

function Pointage() {

    $(".PointUniqueItemReduis").click(function () {
        $(".viewPointageAllClose").hide();
        $(".viewPointageAll").show();
        $(".listePointAllItem").hide();
    });

    $(".listePointAllShow").click(function () {
        $("#conteneur").load('view/PointageComplet.php');
        $("#showModalAdd").hide();
        $(".indexFootInfoLeft").hide();
        $(".contextmenustatique").hide();
        $(".nbrListShow").hide();
        $(".listePointAllDivEtat").text("visible");
    });

    $(".listePointShow").click(function () {
        var nbrListSelect = $("#nbrListSelect").val();

        if(nbrListSelect == 50)
        {
            $("#conteneur").load('view/Pointage.php');
        }
        else if(nbrListSelect == 100)
        {
            $("#conteneur").load('view/PointageB.php');
        }
        else if(nbrListSelect == 250)
        {
            $("#conteneur").load('view/PointageC.php');
        }
        else if(nbrListSelect == 500)
        {
            $("#conteneur").load('view/PointageD.php');
        }

        $(".contextmenustatique").hide();
        $("#showModalAdd").show();
        $(".indexFootInfoLeft").show();
        $(".nbrListShow").show();
        $(".listePointAllDivEtat").text("");
    });

    $(".cherchePointInput").on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $(".cherchePointDiv tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    $(".cherchePointInputAll").on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $(".cherchePointDivAll tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    ListAllItem();
    ViewPanel();
}