$(document).ready(function () {
    $("#livraison").on('click',function(){
        $(".repertoire").empty();
        $("#showModalAdd").show();
        $("#indexOption").show();
        $(".indexFootInfoLeft").show();
        $(".nbrListShow").show();
        $("#nbrListSelect").val(50);
        if( $("#liste_enregistrement").is(':visible'))$("#liste_enregistrement").hide();
        if( $("#liste_reception").is(':visible')) $("#liste_reception").hide();
        if( $("#liste_reparation").is(':visible')) $("#liste_reparation").hide();
        if($("#liste_observation").is(':visible'))$("#liste_observation").hide();
        $(".repertoire").append("<div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Livraison</h6><h6 style='font-size: 100%; color:white; opacity: 0.5;' class='glyphicon glyphicon-menu-right'></h6></div>");
        $("#mySpan").text("Livraison").hide();
        $("#conteneur").load('view/livraison/Livraison.php');
    });
});