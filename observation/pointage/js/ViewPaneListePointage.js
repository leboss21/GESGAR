function PointInfoUniqueComplete(idPoint) {
    $.post('controller/AutocompleteViewPane.php',{PointInfoUniqueComplete:idPoint},function (data) {
        data = $.parseJSON(data);
        $(".pointBodyAllItem").empty();
        $.each(data,function (key, val) {
            $(".pointBodyAllItem").append("<tr><td class='viewListtd' style='width: 5vw; border: 0px solid brown;'><div style='width: 5vw'>"+val.num_or+"</div></td><td class='viewListtd' style='width: 5vw; border: 0px solid brown;'><div style='width: 5vw;'>"+val.section+"</div></td><td class='viewListtd' style='width: 8vw; border: 0px solid brown;'><div style='width: 8vw;'>"+val.tech+"</div></td><td class='viewListtd' style='width: 8vw; border: 0px solid brown;'><div style='width: 8vw;'>"+val.designation+"</div></td><td class='viewListtd' style='width: 5vw; border: 0px solid brown;'><div style='width:5vw;'>"+val.date+"</div></td><td class='viewListtd' style='width: 5vw; border: 0px solid brown;'><div style='width: 5vw;'>"+val.hr_aut+"</div></td><td class='viewListtd' style='width: 8vw; border: 0px solid brown;'><div style='width: 8vw;'>"+val.heure+"</div></td><td class='viewListtd' style='width: auto; border: 0px solid brown;'><div style='width: auto;'>"+"</div></td></tr>");
            $(".pointBodyAllItem").append("<tr><td colspan='4' style='text-align: left; border: none;'><div><h6 style='color: white;'>Objectifs</h6><textarea class='form-control' style='width:30vw; height: 32.5vh;margin: 0px; padding: 1em;resize: none;border: 0px solid white;' readonly='readonly'>"+val.objectif+"</textarea></div></td><td colspan='4' style='text-align: left; border: none;'><div><h6 style='color: white;'>Travaux Ex&eacute;cut&eacute;s</h6><textarea class='form-control' style='width:30vw; height: 32.5vh;margin: 0px; padding: 1em;resize: none;border: 0px solid white;' readonly='readonly'>"+val.travaux_execute+"</textarea></div></td></tr>");
        });
    });

    $(".listePointAllItem").show();
}

function pagePointPlus() {
    var nbrListSelect = parseInt($("#nbrListSelect").val());
    var elementNombreParcourir = parseInt($("#elementNombreParcourir").text()) ;
    var elementNombreT = parseInt($("#elementNombreT").text());

    if(elementNombreParcourir < elementNombreT)
    {

        $("#conteneur").load('view/PointagePlusMoin.php');

        $.post('controller/AutocompleteViewPane.php',{PointPlusNbrListSelect:nbrListSelect,PointPlusElementNombreParcourir:elementNombreParcourir},function (data) {
            data = $.parseJSON(data);
            var elementNombreParcourir = 0;
            var elemenNombre = 0;
            var elementNombreT = 0;

            $.each(data,function (key, val) {
                elementNombreParcourir = val.elementNombreParcourir;
                elementNombreT = val.elementNombreT;
            });

            $("#PointBody").empty();
            $.each(data,function (key, val) {
                $("#PointBody").append("<tr class='cherchePointage' id="+val.id_pointage+">" +
                    "<td class='viewListtd point_numtd' style='width: 5vw;'><div style='width: 5vw;' class='point_numtd'>"+val.num_or+"</div></td>"+
                    "<td class='viewListtd point_sectiontd' style='width: 10vw;'><div style='width: 10vw;' class='point_sectiontd'>"+val.section+"</div></td>"+
                    "<td class='viewListtd point_techtd' style='width: 17.3vw;'><div style='width: 17.3vw;' class='point_techtd'>"+val.tech+"</div></td>"+
                    "<td class='viewListtd point_designtd' style='width: 10vw;'><div style='width: 10vw;' class='point_designtd'>"+val.designation+"</div></td>"+
                    "<td class='viewListtd point_datetd' style='width: 8vw;'><div style='width: 8vw;' class='point_datetd'>"+val.date_pointage+"</div></td>"+
                    "<td class='viewListtd point_hrtd' style='width: 5vw;'><div style='width: 5vw;' class='point_hrtd'>"+val.hr_aut_pointage+"</div></td>"+
                    "<td class='viewListtd point_heuretd' style='width: 10vw;'><div style='width: 10vw;' class='point_heuretd'>"+val.heure+"</div></td>"+
                    "<td class='viewListtd point_totaltd' style='width: 10vw;'><div style='width: 10vw;' class='point_totaltd'>"+val.heureMake+"</div></td>"+
                    "<td class='cellul_liee point_tafojtd' style='display: none;'><div class='point_tafojtd'>"+val.ob+"</div></td>"+
                    "<td class='cellul_liee point_tafojtd' style='display: none;'><div class='point_tafojtd'>"+val.taf+"</div></td>"+
                    "</tr>");
                elemenNombre++;
            });


            $("#elementNombre").text(elemenNombre);
            $("#elementNombreT").text(elementNombreT);
            $("#elementNombreParcourir").text(elementNombreParcourir);

            Pointage();
            if($("#index_linck_breack").is(':visible'))pointage_td_lincked_show();
        });
    }
    else
    {
        $("#pagePlus").css("background","rgb(255, 100, 100) none repeat scroll 0% 0% / auto padding-box border-box");
        setTimeout(function () {
            $("#pagePlus").css("background","rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box");
        },50);
    }
}

function pagePointMoin() {
    var nbrListSelect = parseInt($("#nbrListSelect").val());
    var elementNombreParcourir = parseInt($("#elementNombreParcourir").text());
    var elementNombreT = parseInt($("#elementNombreT").text());

    if(elementNombreParcourir > nbrListSelect)
    {
        $("#conteneur").load('view/PointagePlusMoin.php');
        $.post('controller/AutocompleteViewPane.php',{PointMoinNbrListSelect:nbrListSelect,PointMoinElementNombreParcourir:elementNombreParcourir,PointMoinElementNombreT:elementNombreT},function (data) {
            data = $.parseJSON(data);
            var elementNombreParcourir = 0;
            var elemenNombre = 0;
            var elementNombreT = 0;

            $.each(data,function (key, val) {
                elementNombreParcourir = val.elementNombreParcourir;
                elementNombreT = val.elementNombreT;
            });

            $("#PointBody").empty();
            $.each(data,function (key, val) {
                $("#PointBody").append("<tr class='cherchePointage' id="+val.id_pointage+">" +
                    "<td class='viewListtd point_numtd' style='width: 5vw;'><div style='width: 5vw;' class='point_numtd'>"+val.num_or+"</div></td>"+
                    "<td class='viewListtd point_sectiontd' style='width: 10vw;'><div style='width: 10vw;' class='point_sectiontd'>"+val.section+"</div></td>"+
                    "<td class='viewListtd point_techtd' style='width: 17.3vw;'><div style='width: 17.3vw;' class='point_techtd'>"+val.tech+"</div></td>"+
                    "<td class='viewListtd point_designtd' style='width: 10vw;'><div style='width: 10vw;' class='point_designtd'>"+val.designation+"</div></td>"+
                    "<td class='viewListtd point_datetd' style='width: 8vw;'><div style='width: 8vw;' class='point_datetd'>"+val.date_pointage+"</div></td>"+
                    "<td class='viewListtd point_hrtd' style='width: 5vw;'><div style='width: 5vw;' class='point_hrtd'>"+val.hr_aut_pointage+"</div></td>"+
                    "<td class='viewListtd point_heuretd' style='width: 10vw;'><div style='width: 10vw;' class='point_heuretd'>"+val.heure+"</div></td>"+
                    "<td class='viewListtd point_totaltd' style='width: 10vw;'><div style='width: 10vw;' class='point_totaltd'>"+val.heureMake+"</div></td>"+
                    "<td class='cellul_liee point_tafojtd' style='display: none;'><div class='point_tafojtd'>"+val.ob+"</div></td>"+
                    "<td class='cellul_liee point_tafojtd' style='display: none;'><div class='point_tafojtd'>"+val.taf+"</div></td>"+
                    "</tr>");
                elemenNombre++;
            });


            $("#elementNombre").text(elemenNombre);
            $("#elementNombreT").text(elementNombreT);
            $("#elementNombreParcourir").text(elementNombreParcourir);

            Pointage();
            if($("#index_linck_breack").is(':visible'))pointage_td_lincked_show();
        });
    }
    else
    {
        $("#pageMoin").css("background","rgb(255, 100, 100) none repeat scroll 0% 0% / auto padding-box border-box");
        setTimeout(function () {
            $("#pageMoin").css("background","rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box");
        },50);

    }

}