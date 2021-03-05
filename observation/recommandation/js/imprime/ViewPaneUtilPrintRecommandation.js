
function PrintRecommandationSelectPosition() {
    $('#printTableListePositionRecommandationDate').on('change',function () {
        var positionDate = $(this).val();
        var positionPro = $('#printTableListePositionRecommandationPro').val();
        var positionRecom = $('#printTableListePositionRecommandationRecom').val();
        var positionRecep = $('#printTableListePositionRecommandationRecep').val();
        var positionVehicule = $('#printTableListePositionRecommandationVehicule').val();
        var positionTech = $('#printTableListePositionRecommandationTech').val();
        var positionClient = $('#printTableListePositionRecommandationClient').val();

        if(positionDate != '')
        {
            if(positionDate == positionPro || positionDate == positionRecom || positionDate == positionRecep || positionDate == positionVehicule || positionDate == positionTech || positionDate == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionRecommandationPro').on('change',function () {
        var positionPro = $(this).val();
        var positionDate = $('#printTableListePositionRecommandationDate').val();
        var positionRecom = $('#printTableListePositionRecommandationRecom').val();
        var positionRecep = $('#printTableListePositionRecommandationRecep').val();
        var positionVehicule = $('#printTableListePositionRecommandationVehicule').val();
        var positionTech = $('#printTableListePositionRecommandationTech').val();
        var positionClient = $('#printTableListePositionRecommandationClient').val();

        if(positionPro != '')
        {
            if(positionPro == positionDate || positionPro == positionRecom || positionPro == positionRecep || positionPro == positionVehicule || positionPro == positionTech || positionPro == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionRecommandationRecom').on('change',function () {
        var positionRecom = $(this).val();
        var positionDate = $('#printTableListePositionRecommandationDate').val();
        var positionPro = $('#printTableListePositionRecommandationPro').val();
        var positionRecep = $('#printTableListePositionRecommandationRecep').val();
        var positionVehicule = $('#printTableListePositionRecommandationVehicule').val();
        var positionTech = $('#printTableListePositionRecommandationTech').val();
        var positionClient = $('#printTableListePositionRecommandationClient').val();

        if(positionRecom != '')
        {
            if(positionRecom == positionDate || positionRecom == positionPro || positionRecom == positionRecep || positionRecom == positionVehicule || positionRecom == positionTech || positionRecom == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionRecommandationRecep').on('change',function () {
        var positionRecep = $(this).val();
        var positionDate = $('#printTableListePositionRecommandationDate').val();
        var positionPro = $('#printTableListePositionRecommandationPro').val();
        var positionRecom = $('#printTableListePositionRecommandationRecom').val();
        var positionVehicule = $('#printTableListePositionRecommandationVehicule').val();
        var positionTech = $('#printTableListePositionRecommandationTech').val();
        var positionClient = $('#printTableListePositionRecommandationClient').val();

        if (positionRecep != '')
        {
            if(positionRecep == positionDate || positionRecep == positionPro || positionRecep == positionRecom || positionRecep == positionVehicule || positionRecep == positionTech || positionRecep == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionRecommandationVehicule').on('change',function () {
        var positionVehicule = $(this).val();
        var positionDate = $('#printTableListePositionRecommandationDate').val();
        var positionPro = $('#printTableListePositionRecommandationPro').val();
        var positionRecom = $('#printTableListePositionRecommandationRecom').val();
        var positionRecep = $('#printTableListePositionRecommandationRecep').val();
        var positionTech = $('#printTableListePositionRecommandationTech').val();
        var positionClient = $('#printTableListePositionRecommandationClient').val();

        if(positionVehicule != '')
        {
            if(positionVehicule == positionDate || positionVehicule == positionPro || positionVehicule == positionRecom || positionVehicule == positionRecep || positionVehicule == positionTech || positionVehicule == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionRecommandationTech').on('change',function () {
        var positionTech = $(this).val();
        var positionDate = $('#printTableListePositionRecommandationDate').val();
        var positionPro = $('#printTableListePositionRecommandationPro').val();
        var positionRecom = $('#printTableListePositionRecommandationRecom').val();
        var positionRecep = $('#printTableListePositionRecommandationRecep').val();
        var positionVehicule = $('#printTableListePositionRecommandationVehicule').val();
        var positionClient = $('#printTableListePositionRecommandationClient').val();

        if(positionTech != '')
        {
            if(positionTech == positionDate || positionTech == positionPro || positionTech == positionRecom || positionTech == positionRecep || positionTech == positionVehicule || positionTech == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionRecommandationClient').on('change',function () {
        var positionClient = $(this).val();
        var positionDate = $('#printTableListePositionRecommandationDate').val();
        var positionPro = $('#printTableListePositionRecommandationPro').val();
        var positionRecom = $('#printTableListePositionRecommandationRecom').val();
        var positionRecep = $('#printTableListePositionRecommandationRecep').val();
        var positionVehicule = $('#printTableListePositionRecommandationVehicule').val();
        var positionTech = $('#printTableListePositionRecommandationTech').val();

        if(positionClient != '')
        {
            if(positionClient == positionDate || positionClient == positionPro || positionClient == positionRecom || positionClient == positionRecep || positionClient == positionVehicule || positionClient == positionTech)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });


    var nombre_colone = 0;
    var nombre_colone_change = 0;

    $(".printTableListePositionRecommandation").on('click', function () {
        var start_valeur = $(this).val();

        if(start_valeur.length == 0)
        {
            nombre_colone_change = 1;
        }

        if(start_valeur.length != 0)
        {
            nombre_colone_change = 0;
        }



    });

    $(".printTableListePositionRecommandation").on('change', function () {
        var valeur = $(this).val();

        if(valeur.length != 0)
        {
            if(nombre_colone_change == 1)
            {
                nombre_colone += 1;
            }
        }

        if(valeur.length == 0)
        {
            if(nombre_colone == 0)
            {
                nombre_colone = 0;
            }
            else
            {
                if(nombre_colone_change == 0)
                {
                    nombre_colone -= 1;
                }
            }
        }

        $("#clientListeSelecteColoneNombre").val(nombre_colone);
    });


}