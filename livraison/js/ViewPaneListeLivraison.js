function LivraisonInfoUniqueComplete(idLivre) {
    $.post('controller/AutocompleteViewPane.php',{LivreInfoUniqueComplete:idLivre},function (data) {
        data = $.parseJSON(data);
        $(".livreBodyAllItem").empty();
        $.each(data,function (key, val) {
            $(".livreBodyAllItem").append("<tr><td  class='viewListtd' style='width: 9vw; border: 0px solid brown;'><div style='width: 9vw;'>"+val.date+"</div></td><td  class='viewListtd' style='width: 9vw; border: 0px solid brown;'><div style='width: 9vw;'>"+val.heure+"</div></td><td  class='viewListtd' style='width: 9vw; border: 0px solid brown;'><div style='width: 9vw;'>"+val.km+"</div></td><td  class='viewListtd' style='width: 10vw; border: 0px solid brown;'><div style='width: 10vw;'>"+val.facture+"</div></td><td  class='viewListtd' style='width: 15vw; border: 0px solid brown;'><div style='width: 15vw;'>"+val.imm+"</div></td><td  class='viewListtd' style='border: 0px solid brown;width: auto;'><div style='width: auto;'>"+"</div></td></tr>");
            $(".livreBodyAllItem").append("<tr><td colspan='3'  style='text-align: left; border: none;'><div><h6 style='color: white;'>Travaux R&eacute;alis&eacute;s</h6><textarea class='form-control' style='width: 28vw; height: 32.5vh;margin: 0px; padding: 1em;resize: none;border: 0px solid white;' readonly='readonly'>"+val.tf+"</textarea></div></td><td colspan='3'  style='text-align: left; border: none;'><div><h6 style='color: white;'>Travaux Non R&eacute;alis&eacute;s</h6><textarea class='form-control' style='width: 28vw; height: 32.5vh;margin: 0px; padding: 1em;resize: none;border: 0px solid white;' readonly='readonly'>"+val.tnf+"</textarea></div></td></tr>");
        });
    });

    $(".listeLivreAllItem").show();
}


function pageLivrePlus() {
    var nbrListSelect = parseInt($("#nbrListSelect").val());
    var elementNombreParcourir = parseInt($("#elementNombreParcourir").text()) ;
    var elementNombreT = parseInt($("#elementNombreT").text());

    if(elementNombreParcourir < elementNombreT)
    {

        $("#conteneur").load('view/LivraisonPlusMoin.php');

        $.post('controller/AutocompleteViewPane.php',{LivrePlusNbrListSelect:nbrListSelect,LivrePlusElementNombreParcourir:elementNombreParcourir},function (data) {
            data = $.parseJSON(data);
            var elementNombreParcourir = 0;
            var elemenNombre = 0;
            var elementNombreT = 0;

            $.each(data,function (key, val) {
                elementNombreParcourir = val.elementNombreParcourir;
                elementNombreT = val.elementNombreT;
            });

            $("#LivreBody").empty();
            $.each(data,function (key, val) {

                var dateG = val.date_finG;
                var heureL = val.heure_livre;

                if(dateG == 'Non renseign\351e')dateG = '......';
                if(heureL == 'Non renseign\351e')heureL = '......';

                $("#LivreBody").append("<tr class='chercheLivraison' id="+val.id_livraison+">" +
                    "<td class='viewListtd livr_clienttd' style='width: 12vw;'><div style='width: 12vw;' class='livr_clienttd'>"+val.client+"</div></td>"+
                    "<td class='viewListtd livr_immtd' style='width: 13.7vw;'><div style='width: 13.7vw;' class='livr_immtd'>"+val.imm+"</div></td>"+
                    "<td class='viewListtd livr_datetd' style='width: 9vw;'><div style='width: 9vw;' class='livr_datetd'>"+val.date_livre+"</div></td>"+
                    "<td class='viewListtd livr_heuretd' style='width: 9vw;'><div style='width: 9vw;' class='livr_heuretd'>"+heureL+"</div></td>"+
                    "<td class='viewListtd livr_dateFGtd' style='width: 9vw;'><div style='width: 9vw;' class='livr_dateFGtd'>"+dateG+"</div></td>"+
                    "<td class='viewListtd livr_kilotd' style='width: 8vw;'><div style='width: 8vw;' class='livr_kilotd'>"+val.kilometre+"</div></td>"+
                    "<td class='viewListtd livr_numtd' style='width: 8vw;'><div style='width: 8vw;' class='livr_numtd'>"+val.num_facture+"</div></td>"+
                    "<td class='viewListtd livr_numtd' style='width: 8vw;'><div style='width: 8vw;' class='livr_numtd'>"+val.montant+"</div></td>"+
                    "<td class='cellul_liee livr_taftd' style='display: none;'><div class='livr_taftd'>"+val.taf_realise+"</div></td>"+
                    "<td class='cellul_liee livr_taftd' style='display: none;'><div class='livr_taftd'>"+val.taf_non_realise+"</div></td>"+
                    "</tr>");
                elemenNombre++;
            });

            $("#elementNombre").text(elemenNombre);
            $("#elementNombreT").text(elementNombreT);
            $("#elementNombreParcourir").text(elementNombreParcourir);

            Livraison();
            if($("#index_linck_breack").is(':visible'))livraison_td_lincked_show();
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

function pageLivreMoin() {
    var nbrListSelect = parseInt($("#nbrListSelect").val());
    var elementNombreParcourir = parseInt($("#elementNombreParcourir").text());
    var elementNombreT = parseInt($("#elementNombreT").text());

    if(elementNombreParcourir > nbrListSelect)
    {
        $("#conteneur").load('view/LivraisonPlusMoin.php');
        $.post('controller/AutocompleteViewPane.php',{LivreMoinNbrListSelect:nbrListSelect,LivreMoinElementNombreParcourir:elementNombreParcourir,LivreMoinElementNombreT:elementNombreT},function (data) {
            data = $.parseJSON(data);
            var elementNombreParcourir = 0;
            var elemenNombre = 0;
            var elementNombreT = 0;

            $.each(data,function (key, val) {
                elementNombreParcourir = val.elementNombreParcourir;
                elementNombreT = val.elementNombreT;
            });

            $("#LivreBody").empty();

            $.each(data,function (key, val) {
                var dateG = val.date_finG;
                var heureL = val.heure_livre;

                if(dateG == 'Non renseign\351e')dateG = '......';
                if(heureL == 'Non renseign\351e')heureL = '......';

                $("#LivreBody").append("<tr class='chercheLivraison' id="+val.id_livraison+">" +
                    "<td class='viewListtd livr_clienttd' style='width: 12vw;'><div style='width: 12vw;' class='livr_clienttd'>"+val.client+"</div></td>"+
                    "<td class='viewListtd livr_immtd' style='width: 13.7vw;'><div style='width: 13.7vw;' class='livr_immtd'>"+val.imm+"</div></td>"+
                    "<td class='viewListtd livr_datetd' style='width: 9vw;'><div style='width: 9vw;' class='livr_datetd'>"+val.date_livre+"</div></td>"+
                    "<td class='viewListtd livr_heuretd' style='width: 9vw;'><div style='width: 9vw;' class='livr_heuretd'>"+heureL+"</div></td>"+
                    "<td class='viewListtd livr_dateFGtd' style='width: 9vw;'><div style='width: 9vw;' class='livr_dateFGtd'>"+dateG+"</div></td>"+
                    "<td class='viewListtd livr_kilotd' style='width: 8vw;'><div style='width: 8vw;' class='livr_kilotd'>"+val.kilometre+"</div></td>"+
                    "<td class='viewListtd livr_numtd' style='width: 8vw;'><div style='width: 8vw;' class='livr_numtd'>"+val.num_facture+"</div></td>"+
                    "<td class='viewListtd livr_numtd' style='width: 8vw;'><div style='width: 8vw;' class='livr_numtd'>"+val.montant+"</div></td>"+
                    "<td class='cellul_liee livr_taftd' style='display: none;'><div class='livr_taftd'>"+val.taf_realise+"</div></td>"+
                    "<td class='cellul_liee livr_taftd' style='display: none;'><div class='livr_taftd'>"+val.taf_non_realise+"</div></td>"+
                    "</tr>");
                elemenNombre++;
            });

            $("#elementNombre").text(elemenNombre);
            $("#elementNombreT").text(elementNombreT);
            $("#elementNombreParcourir").text(elementNombreParcourir);

            Livraison();
            if($("#index_linck_breack").is(':visible'))livraison_td_lincked_show();
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