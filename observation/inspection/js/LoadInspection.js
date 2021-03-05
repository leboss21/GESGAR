$(document).ready(function () {
    $("#inspection").on('click',function(){
        $(".repertoire").empty();
        $("#showModalAdd").show();
        $("#indexOption").show();
        $(".indexFootInfoLeft").show();
        $(".nbrListShow").show();
        $("#nbrListSelect").val(50);
        $(".repertoire").append("<div class='form-check form-check-inline'><h6 style='color: white;font-family: Calibri'>Observation</h6><h6 style='font-size: 100%; color:white; opacity: 0.5;' class='glyphicon glyphicon-menu-right'></h6><h6 style='color: white;font-family: Calibri'>Inspection</h6><h6 style='font-size: 100%; color:white; opacity: 0.5;' class='glyphicon glyphicon-menu-right'></h6></div>");
        $("#mySpan").text("Observation - Inspection").hide();
        $("#conteneur").load('view/observation/inspection/Inspection.php');
    });
});