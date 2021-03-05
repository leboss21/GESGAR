$(document).ready(function () {
    $("#operateurs").on('click',function () {
        $("#liste_enregistrement").hide();
        $("#liste_reception").hide();
        $("#liste_reparation").hide();
        $("#liste_observation").hide();
        $("#showModalAdd").hide();
        $("#indexOption").show();
        $(".indexFootInfoLeft").hide();
        $(".nbrListShow").hide();
        $(".repertoire").empty();
        $(".repertoire").append("<div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Op&eacute;rateurs</h6><h6 style='font-size: 100%; color:white; opacity: 0.5;' class='glyphicon glyphicon-menu-right'></h6></div>");
        $("#mySpan").text("Operateurs").hide();
        $("#parentConteneur").css("padding-top","0vh");
        $("#conteneur").load('view/operateur/Operateurs.php');
    });
});