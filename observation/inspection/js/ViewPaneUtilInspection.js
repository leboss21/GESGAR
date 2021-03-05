function Inspection(){

    $(".listeInspectAllShow").click(function () {
        $("#conteneur").load('view/InspectionComplet.php');

        $("#showModalAdd").hide();
        $(".indexFootInfoLeft").hide();
        $(".contextmenustatique").hide();

        $(".nbrListShow").hide();
        $(".listeInspectAllDivEtat").text("visible");
    });

    $(".listeInspectShow").click(function () {

        $("#conteneur").load('view/Inspection.php');
        $(".contextmenustatique").hide();
        $("#showModalAdd").show();
        $(".indexFootInfoLeft").show();

        $(".nbrListShow").show();
        $(".listeInspectAllDivEtat").text("");
    });

    $(".inspectionGeneral").on('mousemove',function () {
        var id_inspection = $(this).attr('id');
        $.post('view/Autocomplete.php',{postidinspectionreturninspectionandalllink:id_inspection},function (data) {
            data = $.parseJSON(data);
            $.each(data,function (key, val) {
                $("#h6inspectionChassis").text("");
                $("#h6inspectionNom").text("");
                $("#h6inspectionImm").text("");
                $("#h6inspectionType").text("");

                $("#h6inspectionChassis").text(val.chassis);
                $("#h6inspectionNom").text(val.nom);
                $("#h6inspectionImm").text(val.immatricul);
                $("#h6inspectionType").text(val.typeModel);
            });
        });
    });

    $(".chercheInspectInput").on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $(".chercheInspectDiv tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });


    ListAllItem();
    ViewPanel();
}