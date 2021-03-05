$(document).ready(function () {
    $("#rendezvous").on('click',function(){
        $(".repertoire").empty();
        $("#showModalAdd").hide();
        $("#indexOption").hide();
        $(".indexFootInfoLeft").hide();
        $(".nbrListShow").hide();
        $("#conteneur").load('view/enregistrement/alerts/Rendezvous.php');
        $("#mySpan").text("Enr\351gistrement Rendez-vous").hide();
    });
});