function ReclamInfoUniqueComplete(idReclam) {
    $.post('controller/AutocompleteViewPane.php',{ReclamInfoUniqueComplete:idReclam},function (data) {
        data = $.parseJSON(data);
        $(".table1uniqueInfo2B").empty();
        $(".table1uniqueInfo2BB").empty();
        $(".table2uniqueInfo2B").empty();
        $(".table2uniqueInfo2F").empty();
        $(".table3uniqueInfo2B").empty();
        $.each(data,function (key, val) {

            var telfix = val.tel_fixe;
            var telcel = val.tel_cel;
            var teldir = val.tel_dir;

            if(telfix == 'Non Renseigné')telfix='';
            else telfix = telfix.replace(/[()]/g,'');
            if(telcel == 'Non Renseigné')telcel='';
            else telcel = telcel.replace(/[()]/g,'');
            if(teldir == 'Non Renseigné')teldir='';
            else teldir = teldir.replace(/[()]/g,'');

            if(telcel != '' || teldir!='')telfix = telfix+' /';
            if(teldir != '')telcel = telcel+' /';
            if(telfix == ' /')telfix='';
            if(telcel == ' /')telcel='';
            var telclient = telfix+' '+telcel+' '+teldir;

            $(".table1uniqueInfo2B").append("<tr style='color: #0c0c0c'><td class='viewListtd' style='width: 8.25vw;'><div style='width: 8.25vw;'>Date:&emsp;"+val.date_client+"</div></td><td class='viewListtd' style='width: 10.25vw;'><div style='width: 10.25vw;'>Type:&emsp;"+val.type_modele+"</div></td><td class='viewListtd' style='width: 18.25vw;'><div style='width: 18.25vw;'>N&deg; Plaque:&emsp;"+val.imm+"</div></td><td class='viewListtd' style='width: 19.25vw;'><div style='width: 19.25vw;'>Client:&emsp;"+val.nom_client+"</div></td></tr>");
            $(".table1uniqueInfo2BB").append("<tr style='color: #0c0c0c'><td class='viewListtd' style='width: 34.4vw;'><div style=' margin: 0px;width: 34.4vw;'>VIN:&emsp;"+"</div></td><td class='viewListtd' style='width: 34.4vw;'><div style='width: 34.4vw;'>TEL:&emsp;"+telclient+"</div></td></tr>");
            $(".table2uniqueInfo2B").append("<tr style='color: #0c0c0c;'><td style='padding: 0px;padding: 1em;'><textarea class='form-control' autocomplete='off' style='font-size: 1.3em;resize: none;width: 34vw;height: 32vh;' readonly='readonly'>"+val.reclamation+"</textarea></td style=''><td style='padding: 0px; padding: 1em;'><div><h6>Livr&eacute; le <b id='reclamation_L_date'>"+val.date_livraison+"</b> &agrave; <b id='reclamation_L_km'>"+val.kilometrage+"</b>Km</h6><h6>N&deg; Facture: <b id='reclamation_L_facture'>"+val.num_f+"</b></h6><h6>R&eacute;paration effectui&eacute;:<b></b></h6><textarea class='form-control' id='reclamation_L_traveaux_fait' autocomplete='off' style='font-size: 1.3em; resize: none;width: 34vw; height: 20vh;' readonly='readonly'>"+val.traveaux_fait+"</textarea></div></td></tr>");
            $(".table2uniqueInfo2F").append("<tr style='color: #f1f1f1'><td class='viewListtd' style='margin: 0px;'>"+"<div class='form-check form-check-inline' style='margin: 0px;'><div class='form-group' style='margin: 0px;width: 14vw;'><h6 >Date:&emsp;<a>"+val.date_reclamation+"</a></h6></div><div class='form-group' style='margin:0px;width: 14vw;'><h6 >Nom:&emsp;<a>"+val.reclamateur+"</a></h6></div></div>"+"</td><td style='margin: 0px;'>"+"<div class='form-check form-check-inline' style='margin: 0px;'><div class='form-group' style='margin: 0px;width: 14vw;'> <h6>Ex&egrave;cutant:&emsp;<a>Executant</a></h6></div><div class='form-group' style='margin: 0px;width: 14vw;'><h6>Controleur:&emsp;<a>controleur2</a></h6></div></div>"+"</td></tr>");
            $(".table3uniqueInfo2B").append("<tr style='color: #0c0c0c'><td style='padding: 0px;padding: 1em;padding-bottom: 0.5em;'><div style='width: 34vw; margin: 0px;padding: 0px;'>"+"<h6>Analyse:</h6><textarea class='form-control' autocomplete='off'  readonly='readonly' style='height: 15vh;width: 33vw;resize: none;margin: 0px;'>"+val.analyse+"</textarea><h6>Cause du probl&egrave;me:</h6><textarea class='form-control' autocomplete='off' readonly='readonly' style='height: 15vh;width: 33vw;resize: none;margin: 0px;'>"+val.cause+"</textarea><h6>Proposition:</h6><textarea class='form-control' autocomplete='off' readonly='readonly' style='height: 15vh;width: 33vw;resize: none;margin: 0px;'>"+val.proposition+"</textarea><div class='form-check form-check-inline'><h6 style='margin-right: 2vw;'>Date:&emsp;<a>"+val.date_observation+"</a></h6><h6 >Nom:&emsp;<a>"+val.observateur+"</a></h6></div>"+"</div></td><td><div id='donneBinairesDiv'  class='donneBinairesDiv' style='width: 34.6vw;'></div></td></tr>");

        });
        $(".listeReclamAllItem").show();
    });
}

function pageReclamPlus() {
    var nbrListSelect = parseInt($("#nbrListSelect").val());
    var elementNombreParcourir = parseInt($("#elementNombreParcourir").text()) ;
    var elementNombreT = parseInt($("#elementNombreT").text());

    if(elementNombreParcourir < elementNombreT)
    {

        $("#conteneur").load('view/ReclamationPlusMoin.php');

        $.post('controller/AutocompleteViewPane.php',{ReclamPlusNbrListSelect:nbrListSelect,ReclamPlusElementNombreParcourir:elementNombreParcourir},function (data) {
            data = $.parseJSON(data);
            var elementNombreParcourir = 0;
            var elemenNombre = 0;
            var elementNombreT = 0;

            $.each(data,function (key, val) {
                elementNombreParcourir = val.elementNombreParcourir;
                elementNombreT = val.elementNombreT;
            });

            $("#ReclamBody").empty();
            $.each(data,function (key, val) {
                $("#ReclamBody").append("<tr class='chercheLivre' id="+val.id_reclamation+">" +
                    "<td class='viewListtd reclamNumtd' style='width: 10vw;'><div class='reclamNumtd' style='width: 10vw;'>"+val.numreclamation+"</div></td>"+
                    "<td class='viewListtd reclamNumDatetd' style='width: 10vw;'><div class='reclamNumDatetd' style='width: 10vw;'>"+val.date_reclamation+"</div></td>"+
                    "<td class='viewListtd reclamClienttd' style='width: 15vw;'><div class='reclamClienttd' style='width: 15vw;'>"+val.nom_client+"</div></td>"+
                    "<td class='viewListtd reclamImmtd' style='width: 15vw;'><div class='reclamImmtd' style='width: 15vw;'>"+val.imm+"</div></td>"+
                    "<td class='viewListtd reclamDateLivtd' style='width: 10vw;'><div class='reclamDateLivtd' style='width: 10vw;'>"+val.date_livraison+"</div></td>"+
                    "<td class='viewListtd reclamNumFacttd' style='width: 10vw;'><div class='reclamNumFacttd' style='width: 10vw;'>"+val.num_facture+"</div></td>"+
                    "<td class='viewListtd reclamEtattd' style='width: 10vw;'><div class='reclamEtattd' style='width: 10vw;'>"+val.etat+"</div></td>"+
                    "<td class='viewListtd cellul_liee reclamReclamtd' style='width: 10vw;'>"+val.reclamation+"</td>"+
                    "</tr>");
                elemenNombre++;
            });

            $("#elementNombre").text(elemenNombre);
            $("#elementNombreT").text(elementNombreT);
            $("#elementNombreParcourir").text(elementNombreParcourir);

            Reclamation();
            if($("#index_linck_breack").is(':visible'))reclamation_td_lincked_show();
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

function pageReclamMoin() {
    var nbrListSelect = parseInt($("#nbrListSelect").val());
    var elementNombreParcourir = parseInt($("#elementNombreParcourir").text());
    var elementNombreT = parseInt($("#elementNombreT").text());

    if(elementNombreParcourir > nbrListSelect)
    {
        $("#conteneur").load('view/ReclamationPlusMoin.php');
        $.post('controller/AutocompleteViewPane.php',{ReclamMoinNbrListSelect:nbrListSelect,ReclamMoinElementNombreParcourir:elementNombreParcourir,ReclamMoinElementNombreT:elementNombreT},function (data) {
            data = $.parseJSON(data);
            var elementNombreParcourir = 0;
            var elemenNombre = 0;
            var elementNombreT = 0;

            $.each(data,function (key, val) {
                elementNombreParcourir = val.elementNombreParcourir;
                elementNombreT = val.elementNombreT;
            });

            $("#ReclamBody").empty();
            $.each(data,function (key, val) {
                $("#ReclamBody").append("<tr class='chercheLivre' id="+val.id_reclamation+">" +
                    "<td class='viewListtd reclamNumtd' style='width: 10vw;'><div class='reclamNumtd' style='width: 10vw;'>"+val.numreclamation+"</div></td>"+
                    "<td class='viewListtd reclamNumDatetd' style='width: 10vw;'><div class='reclamNumDatetd' style='width: 10vw;'>"+val.date_reclamation+"</div></td>"+
                    "<td class='viewListtd reclamClienttd' style='width: 15vw;'><div class='reclamClienttd' style='width: 15vw;'>"+val.nom_client+"</div></td>"+
                    "<td class='viewListtd reclamImmtd' style='width: 15vw;'><div class='reclamImmtd' style='width: 15vw;'>"+val.imm+"</div></td>"+
                    "<td class='viewListtd reclamDateLivtd' style='width: 10vw;'><div class='reclamDateLivtd' style='width: 10vw;'>"+val.date_livraison+"</div></td>"+
                    "<td class='viewListtd reclamNumFacttd' style='width: 10vw;'><div class='reclamNumFacttd' style='width: 10vw;'>"+val.num_facture+"</div></td>"+
                    "<td class='viewListtd reclamEtattd' style='width: 10vw;'><div class='reclamEtattd' style='width: 10vw;'>"+val.etat+"</div></td>"+
                    "<td class='viewListtd cellul_liee reclamReclamtd' style='width: 10vw;'>"+val.reclamation+"</td>"+
                    "</tr>");
                elemenNombre++;
            });

            $("#elementNombre").text(elemenNombre);
            $("#elementNombreT").text(elementNombreT);
            $("#elementNombreParcourir").text(elementNombreParcourir);

            Reclamation();
            if($("#index_linck_breack").is(':visible'))reclamation_td_lincked_show();
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