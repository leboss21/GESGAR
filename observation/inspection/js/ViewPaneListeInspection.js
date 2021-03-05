function InspectionUniqueIfEnterImmatricule() {

    var imm = $("#immatriculationInspectionShearch").val();
    var pat = $("#nbrListSelect").val();

    $.post('controller/AutocompleteViewPane.php', {InspectInfoPlaqueSend:imm,InspectInfoPlaqueSendPat:pat}, function (data) {

        data = $.parseJSON(data);

        if(data.length == 0){
            $("#immatriculationInspectionShearch").val('');
        }

        var elementNombreParcourir = 0;
        var elemenNombre = 0;
        var elementNombreT = 0;
        var nom ="";
        var type="";
        var plaque ="";
        var chassi ="";

        $.each(data,function (key, val) {
            elementNombreParcourir = val.elementNombreParcourir;
            elementNombreT = val.elementNombreT;
            nom = val.client;
            type = val.typeModele;
            plaque = val.imm;
            chassi = val.chassis;
        });

        if(elementNombreT == '0')
        {
            $('.messageh6').text("Aucune information d'isponible");
            ConfirmationLose();
        }

        $("#tableInspection").empty();
        $.each(data,function (key, val) {
            $("#tableInspection").append("<tr class='chercheInspection' id="+val.id_inspection+">" +
                "<td class='viewListtd' style='width: 10.9vw;'><div style='width: 10.9vw;'>"+val.date_inspection+"</div></td>"+
                "<td class='viewListtd' style='width: 10.9vw;'><div style='width: 10.9vw;'>"+val.kilometrage_inspection+"</div></td>"+
                "<td class='viewListtd' style='width: 10.9vw;'><div style='width: 10.9vw;'>"+val.num_p_d_inspection+"</div></td>"+
                "<td class='viewListtd' style='width: 11.3vw;'><div style='width: 11.3vw;'>"+val.nom_p_d_inspection+"</div></td>"+
                "<td class='viewListtd' style='width: 10.9vw;'><div style='width: 10.9vw;'>"+val.quantite_p_d_inspection+"</div></td>"+
                "<td class='viewListtd' style='width: 10.9vw;'><div style='width: 10.9vw;'>"+val.num_com_inspection+"</div></td>"+
                "<td class='viewListtd' style='width: 10.9vw;'><div style='width: 10.9vw;'>"+val.resultat_inspection+"</div></td>"+
                "</tr>");
            elemenNombre++;
        });

        $("#h6inspectionNom").text(nom);
        $("#h6inspectionType").text(type);
        $("#h6inspectionImm").text(plaque);
        $("#h6inspectionChassis").text(chassi);

        $("#elementNombre").text(elemenNombre);
        $("#elementNombreT").text(elementNombreT);
        $("#elementNombreParcourir").text(elementNombreParcourir);

        Inspection();
    });
}

function PageInspectionPlus() {

    var immatriculation  = $("#immatriculationInspectionShearch").val();
    var nbrListSelect = parseInt($("#nbrListSelect").val());
    var elementNombreParcourir = parseInt($("#elementNombreParcourir").text()) ;
    var elementNombreT = parseInt($("#elementNombreT").text());

    if(elementNombreParcourir < elementNombreT)
    {
        $.post('controller/AutocompleteViewPane.php',{InspectPlusNbrListSelect:nbrListSelect,InspectPlusElementNombreParcourir:elementNombreParcourir,Immatriculation:immatriculation},function (data){

            data = $.parseJSON(data);
            var elementNombreParcourir = 0;
            var elemenNombre = 0;
            var elementNombreT = 0;
            var nom ="";
            var type="";
            var plaque ="";
            var chassi ="";

            $.each(data,function (key, val) {
                elementNombreParcourir = val.elementNombreParcourir;
                elementNombreT = val.elementNombreT;
                nom = val.client;
                type = val.typeModele;
                plaque = val.imm;
                chassi = val.chassis;
            });

            if(elementNombreT == '0')
            {
                $('.messageh6').text("Aucune information d'isponible");
                ConfirmationLose();
            }

            $("#tableInspection").empty();
            $.each(data,function (key, val) {
                $("#tableInspection").append("<tr class='chercheInspection' id="+val.id_inspection+">" +
                    "<td class='viewListtd' style='width: 10.9vw;'><div style='width: 10.9vw;'>"+val.date_inspection+"</div></td>"+
                    "<td class='viewListtd' style='width: 10.9vw;'><div style='width: 10.9vw;'>"+val.kilometrage_inspection+"</div></td>"+
                    "<td class='viewListtd' style='width: 10.9vw;'><div style='width: 10.9vw;'>"+val.num_p_d_inspection+"</div></td>"+
                    "<td class='viewListtd' style='width: 11.3vw;'><div style='width: 11.3vw;'>"+val.nom_p_d_inspection+"</div></td>"+
                    "<td class='viewListtd' style='width: 10.9vw;'><div style='width: 10.9vw;'>"+val.quantite_p_d_inspection+"</div></td>"+
                    "<td class='viewListtd' style='width: 10.9vw;'><div style='width: 10.9vw;'>"+val.num_com_inspection+"</div></td>"+
                    "<td class='viewListtd' style='width: 10.9vw;'><div style='width: 10.9vw;'>"+val.resultat_inspection+"</div></td>"+
                    "</tr>");
                elemenNombre++;
            });

            $("#h6inspectionNom").text(nom);
            $("#h6inspectionType").text(type);
            $("#h6inspectionImm").text(plaque);
            $("#h6inspectionChassis").text(chassi);

            $("#elementNombre").text(elemenNombre);
            $("#elementNombreT").text(elementNombreT);
            $("#elementNombreParcourir").text(elementNombreParcourir);

            Inspection();
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

function PageInspectionMoin() {

    var immatriculation  = $("#immatriculationInspectionShearch").val();
    var nbrListSelect = parseInt($("#nbrListSelect").val());
    var elementNombreParcourir = parseInt($("#elementNombreParcourir").text()) ;
    var elementNombreT = parseInt($("#elementNombreT").text());

    if(elementNombreParcourir > nbrListSelect)
    {
        $.post('controller/AutocompleteViewPane.php',{InspectMoinNbrListSelect:nbrListSelect,InspectMoinElementNombreParcourir:elementNombreParcourir,InspectMoinElementNombreT:elementNombreT,Immatriculation:immatriculation},function (data){
            data = $.parseJSON(data);
            var elementNombreParcourir = 0;
            var elemenNombre = 0;
            var elementNombreT = 0;
            var nom ="";
            var type="";
            var plaque ="";
            var chassi ="";

            $.each(data,function (key, val) {
                elementNombreParcourir = val.elementNombreParcourir;
                elementNombreT = val.elementNombreT;
                nom = val.client;
                type = val.typeModele;
                plaque = val.imm;
                chassi = val.chassis;
            });

            if(elementNombreT == '0')
            {
                $('.messageh6').text("Aucune information d'isponible");
                ConfirmationLose();
            }

            $("#tableInspection").empty();
            $.each(data,function (key, val) {
                $("#tableInspection").append("<tr class='chercheInspection' id="+val.id_inspection+">" +
                    "<td class='viewListtd' style='width: 10.9vw;'><div style='width: 10.9vw;'>"+val.date_inspection+"</div></td>"+
                    "<td class='viewListtd' style='width: 10.9vw;'><div style='width: 10.9vw;'>"+val.kilometrage_inspection+"</div></td>"+
                    "<td class='viewListtd' style='width: 10.9vw;'><div style='width: 10.9vw;'>"+val.num_p_d_inspection+"</div></td>"+
                    "<td class='viewListtd' style='width: 11.3vw;'><div style='width: 11.3vw;'>"+val.nom_p_d_inspection+"</div></td>"+
                    "<td class='viewListtd' style='width: 10.9vw;'><div style='width: 10.9vw;'>"+val.quantite_p_d_inspection+"</div></td>"+
                    "<td class='viewListtd' style='width: 10.9vw;'><div style='width: 10.9vw;'>"+val.num_com_inspection+"</div></td>"+
                    "<td class='viewListtd' style='width: 10.9vw;'><div style='width: 10.9vw;'>"+val.resultat_inspection+"</div></td>"+
                    "</tr>");
                elemenNombre++;
            });

            $("#h6inspectionNom").text(nom);
            $("#h6inspectionType").text(type);
            $("#h6inspectionImm").text(plaque);
            $("#h6inspectionChassis").text(chassi);

            $("#elementNombre").text(elemenNombre);
            $("#elementNombreT").text(elementNombreT);
            $("#elementNombreParcourir").text(elementNombreParcourir);

            Inspection();
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