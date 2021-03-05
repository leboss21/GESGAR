function livraison_td_lincked_show() {
    $(".livr_clienttd").css("width",'10vw');
    $(".livr_immtd").css("width",'10vw');
    $(".livr_datetd").css("width",'5vw');
    $(".livr_heuretd").css("width",'5vw');
    $(".livr_dateFGtd").css("width",'5vw');
    $(".livr_kilotd").css("width",'5vw');
    $(".livr_numtd").css("width",'5vw');
    $(".livr_taftd").css("width",'15vw');
    $(".cellul_liee").show();
}

function livraison_td_lincked_hide() {
    $(".cellul_liee").hide();
    $(".livr_clienttd").css("width",'18vw');
    $(".livr_immtd").css("width",'13.7vw');
    $(".livr_datetd").css("width",'9vw');
    $(".livr_heuretd").css("width",'9vw');
    $(".livr_dateFGtd").css("width",'9vw');
    $(".livr_kilotd").css("width",'9vw');
    $(".livr_numtd").css("width",'9vw');
}

function Livraison() {

    $(".LivreUniqueItemReduis").click(function () {
        $(".viewLivraisonAllClose").hide();
        $(".viewLivraisonAll").show();
        $(".listeLivreAllItem").hide();
    });

    $(".listeLivreAllShow").click(function () {
        $("#conteneur").load('view/LivraisonComplet.php');

        $("#showModalAdd").hide();
        $(".indexFootInfoLeft").hide();
        $(".contextmenustatique").hide();
        $(".nbrListShow").hide();
        $(".listeLivreAllDivEtat").text("visible");
    });

    $(".listeLivreShow").click(function () {
        var nbrListSelect = $("#nbrListSelect").val();

        if(nbrListSelect == 50)
        {
            $("#conteneur").load('view/Livraison.php');
        }
        else if(nbrListSelect == 100)
        {
            $("#conteneur").load('view/LivraisonB.php');
        }
        else if(nbrListSelect == 250)
        {
            $("#conteneur").load('view/LivraisonC.php');
        }
        else if(nbrListSelect == 500)
        {
            $("#conteneur").load('view/LivraisonD.php');
        }

        $(".contextmenustatique").hide();
        $("#showModalAdd").show();
        $(".indexFootInfoLeft").show();
        $(".nbrListShow").show();
        $(".listeLivreAllDivEtat").text("");
    });

    $(".chercheLivreInput").on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $(".chercheLivreDiv tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    ListAllItem();
    ViewPanel();
}