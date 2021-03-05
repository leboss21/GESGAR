function RecomInfoUniqueComplete(idRecom) {
    $.post('controller/AutocompleteViewPane.php',{RecomInfoUniqueComplete:idRecom},function (data) {
        data = $.parseJSON(data);
        $(".recomBodyAllItem").empty();
        $.each(data,function (key, val) {
            $(".recomBodyAllItem").append("<tr><td class='viewListtd' style='width: 5vw; border: 0px solid brown;'><div style='width: 5vw;'>"+val.date+"</div></td><td class='viewListtd' style='width: 15vw; border: 0px solid brown;'><div style='width: 15vw;'>"+val.client+"</div></td><td class='viewListtd' style='width: 10vw; border: 0px solid brown;'><div style='width: 10vw'>"+val.immatricul+"</div></td><td class='viewListtd' style='width: 15vw; border: 0px solid brown;'><div style='width: 15vw;'>"+val.tech+"</div></td></tr>");
            $(".recomBodyAllItem").append("<tr><td colspan='2'  style='text-align: left; border: none;'><div><h6 style='color: white;'>Probl&egrave;mes</h6><textarea class='form-control' style='width: 28vw; height: 32.5vh;margin: 0px; padding: 1em;resize: none;border: 0px solid white;' readonly='readonly'>"+val.probleme+"</textarea></div></td><td colspan='2'  style='text-align: left; border: none;'><div><h6 style='color: white;'>Recommandations</h6><textarea class='form-control' style='width: 28vw; height: 32.5vh;margin: 0px; padding: 1em;resize: none;border: 0px solid white;' readonly='readonly'>"+val.recommande+"</textarea></div></td></tr>");
        });
    });

    $(".listeRecomAllItem").show();
}

function pageRecomPlus() {
    var nbrListSelect = parseInt($("#nbrListSelect").val());
    var elementNombreParcourir = parseInt($("#elementNombreParcourir").text()) ;
    var elementNombreT = parseInt($("#elementNombreT").text());

    if(elementNombreParcourir < elementNombreT)
    {

        $("#conteneur").load('view/RecommandationPlusMoin.php');

        $.post('controller/AutocompleteViewPane.php',{RecomPlusNbrListSelect:nbrListSelect,RecomPlusElementNombreParcourir:elementNombreParcourir},function (data) {
            data = $.parseJSON(data);
            var elementNombreParcourir = 0;
            var elemenNombre = 0;
            var elementNombreT = 0;

            $.each(data,function (key, val) {
                elementNombreParcourir = val.elementNombreParcourir;
                elementNombreT = val.elementNombreT;
            });

            $("#RecomBody").empty();
            $.each(data,function (key, val) {
                $("#RecomBody").append("<tr class='chercheLivre' id="+val.id_recommandation+">" +
                    "<td class='viewListtd recom_datetd' style='width: 10vw;'><div style='width: 10vw;' class='recom_datetd'>"+val.dade+"</div></td>"+
                    "<td class='viewListtd recom_immtd' style='width: 20vw;'><div style='width: 20vw;' class='recom_immtd'>"+val.imm+"</div></td>"+
                    "<td class='viewListtd recom_clienttd' style='width: 20vw;'><div style='width: 20vw;' class='recom_clienttd'>"+val.client+"</div></td>"+
                    "<td class='viewListtd recom_techtd' style='width: 20vw;'><div style='width: 20vw;' class='recom_techtd'>"+val.tech+"</div></td>"+
                    "<td class='cellul_liee recom_recomtd' style='display: none;'><div class='recom_recomtd'>"+val.probleme+"</div></td>"+
                    "<td class='cellul_liee recom_recomtd' style='display: none;'><div class='recom_recomtd'>"+val.recommandation+"</div></td>"+
                    "<td class='viewListtd recom_situationtd' style='display: none;'><div class='recom_situationtd'>"+val.situation+"</div></td>"+
                    "</tr>");
                if(val.vue == 'vu')$('#'+val.id_recommandation).css('color','#A20000');
                elemenNombre++;
            });

            $("#elementNombre").text(elemenNombre);
            $("#elementNombreT").text(elementNombreT);
            $("#elementNombreParcourir").text(elementNombreParcourir);

            Recommandation();
            if($("#index_linck_breack").is(':visible'))recommandation_td_lincked_show();
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

function pageRecomMoin() {
    var nbrListSelect = parseInt($("#nbrListSelect").val());
    var elementNombreParcourir = parseInt($("#elementNombreParcourir").text());
    var elementNombreT = parseInt($("#elementNombreT").text());

    if(elementNombreParcourir > nbrListSelect)
    {
        $("#conteneur").load('view/RecommandationPlusMoin.php');
        $.post('controller/AutocompleteViewPane.php',{RecomMoinNbrListSelect:nbrListSelect,RecomMoinElementNombreParcourir:elementNombreParcourir,RecomMoinElementNombreT:elementNombreT},function (data) {
            data = $.parseJSON(data);
            var elementNombreParcourir = 0;
            var elemenNombre = 0;
            var elementNombreT = 0;

            $.each(data,function (key, val) {
                elementNombreParcourir = val.elementNombreParcourir;
                elementNombreT = val.elementNombreT;
            });

            $("#RecomBody").empty();
            $.each(data,function (key, val) {
                $("#RecomBody").append("<tr class='chercheLivre' id="+val.id_recommandation+">" +
                    "<td class='viewListtd recom_datetd' style='width: 10vw;'><div style='width: 10vw;' class='recom_datetd'>"+val.dade+"</div></td>"+
                    "<td class='viewListtd recom_immtd' style='width: 20vw;'><div style='width: 20vw;' class='recom_immtd'>"+val.imm+"</div></td>"+
                    "<td class='viewListtd recom_clienttd' style='width: 20vw;'><div style='width: 20vw;' class='recom_clienttd'>"+val.client+"</div></td>"+
                    "<td class='viewListtd recom_techtd' style='width: 20vw;'><div style='width: 20vw;' class='recom_techtd'>"+val.tech+"</div></td>"+
                    "<td class='cellul_liee recom_recomtd' style='display: none;'><div class='recom_recomtd'>"+val.probleme+"</div></td>"+
                    "<td class='cellul_liee recom_recomtd' style='display: none;'><div class='recom_recomtd'>"+val.recommandation+"</div></td>"+
                    "<td class='viewListtd recom_situationtd' style='display: none;'><div class='recom_situationtd'>"+val.situation+"</div></td>"+
                    "</tr>");
                if(val.vue == 'vu')$('#'+val.id_recommandation).css('color','#A20000');
                elemenNombre++;
            });

            $("#elementNombre").text(elemenNombre);
            $("#elementNombreT").text(elementNombreT);
            $("#elementNombreParcourir").text(elementNombreParcourir);

            Recommandation();
            if($("#index_linck_breack").is(':visible'))recommandation_td_lincked_show();
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