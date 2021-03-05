$(document).ready(function () {
    $("#immatriculationInspectionShearch").focus(function () {
        var element = 'vehicule';
        $.post('controller/Autocomplete.php',{postListvehicule:element},function (data) {
            var data = $.parseJSON(data);
            var imm = [data.length];
            var index = 0;

            $.each(data, function (key, val) {
                imm[index] = val.imm;
                index++;
            });

            $("#immatriculationInspectionShearch").autocomplete({
                source: function (request, reponse) {
                    var results = $.ui.autocomplete.filter(imm, request.term);
                    reponse(results.slice(0, 10));
                },
                select:function (event, ui){
                    setTimeout(function () {
                        InspectionUniqueIfEnterImmatricule();
                    },1);
                },
                change:function (event, ui) {
                    if (!ui.item)
                    {
                        $(event.target).val("");
                        $("#tableInspection").empty();
                    }
                },
                focus:function (event, ui) {
                    return false;
                }

            });
        });
    });

    $("#activites_num_reception_liste").focus(function () {
        var element = "activites";
        $.post('controller/Autocomplete.php',{postlistactiviteuniquenumreception:element},function (data) {
            data = $.parseJSON(data);
            var idRecept = [data.length];
            var numRecept = [data.length]
            var indix = 0;
            $.each(data,function (key, val) {
                idRecept[indix] = val.idreception;
                numRecept[indix] = val.numreception;
                indix++;
            });
            $('#activites_num_reception_liste').autocomplete({
                source:function (request, reponse) {
                    var results = $.ui.autocomplete.filter(numRecept,request.term);
                    reponse(results.slice(0,10));
                },
                minLength:0,
                select:function(event,ui){
                    setTimeout(function () {
                        ActiviteUniqueIfEnterReception();
                    },10);
                },
                change:function (event, ui) {
                    if(!ui.item){
                        $(event.target).val('');
                        $("#tableActivite").empty();
                    }
                }
            });
        });
    });

});