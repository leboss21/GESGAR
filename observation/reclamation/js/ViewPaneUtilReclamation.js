function reclamation_td_lincked_show() {
    $(".reclamNumtd").css("width",'8vw');
    $(".reclamNumDatetd").css("width",'8vw');
    $(".reclamClienttd").css("width",'8vw');
    $(".reclamImmtd").css("width",'10vw');
    $(".reclamDateLivtd").css("width",'8vw');
    $(".reclamNumFacttd").css("width",'8vw');
    $(".reclamEtattd").css("width",'8vw');
    $(".reclamReclamtd").css("width",'20vw');
    $(".cellul_liee").show();
}

function reclamation_td_lincked_hide() {
    $(".cellul_liee").hide();
    $(".reclamNumtd").css("width",'10vw');
    $(".reclamNumDatetd").css("width",'10vw');
    $(".reclamClienttd").css("width",'15vw');
    $(".reclamImmtd").css("width",'15vw');
    $(".reclamDateLivtd").css("width",'10vw');
    $(".reclamNumFacttd").css("width",'10vw');
    $(".reclamEtattd").css("width",'10vw');
}


function Reclamation() {
    $(".ReclamUniqueItemReduis").click(function () {
        $(".viewReclamationAllClose").hide();
        $(".viewReclamationAll").show();
        $(".listeReclamAllItem").hide();
    });

    $(".listeReclamAllShow").click(function () {
        $("#conteneur").load('view/ReclamationComplet.php');
        $("#showModalAdd").hide();
        $(".indexFootInfoLeft").hide();
        $(".contextmenustatique").hide();
        $(".nbrListShow").hide();
        $(".listeReclamAllDivEtat").text("visible");
    });

    $(".listeReclamShow").click(function () {
        var nbrListSelect = $("#nbrListSelect").val();

        if(nbrListSelect == 50)
        {
            $("#conteneur").load('view/Reclamation.php');
        }
        else if(nbrListSelect == 100)
        {
            $("#conteneur").load('view/ReclamationB.php');
        }
        else if(nbrListSelect == 250)
        {
            $("#conteneur").load('view/ReclamationC.php');
        }
        else if(nbrListSelect == 500)
        {
            $("#conteneur").load('view/ReclamationD.php');
        }

        $(".contextmenustatique").hide();
        $("#showModalAdd").show();
        $(".indexFootInfoLeft").show();
        $(".nbrListShow").show();
        $(".listeReclamAllDivEtat").text("");
    });

    $(".chercheReclamInput").on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $(".chercheReclamDiv tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    $(".chercheReclamInputAll").on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $(".chercheReclamDivAll tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    ListAllItem();
    ViewPanel();
}