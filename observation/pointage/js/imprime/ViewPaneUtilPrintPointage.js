
function PrintPointageSelectPosition() {
    $('#printTableListePositionPointageNumord').on('change',function () {
        var positionNumord = $(this).val();
        var positionDesign = $('#printTableListePositionPointageDesign').val();
        var positionObj = $('#printTableListePositionPointageOject').val();
        var positionFHra = $('#printTableListePositionPointageHraut').val();
        var positionTexe = $('#printTableListePositionPointageTafexe').val();
        var positionHd = $('#printTableListePositionPointageHd').val();
        var positionHf = $('#printTableListePositionPointageHf').val();
        var positionDate = $('#printTableListePositionPointageDate').val();
        var positionTech = $('#printTableListePositionPointageTech').val();

        if(positionNumord != '')
        {
            if(positionNumord == positionDesign || positionNumord == positionObj || positionNumord == positionFHra || positionNumord == positionTexe || positionNumord == positionHd || positionNumord == positionHf || positionNumord == positionDate || positionNumord == positionTech)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionPointageDesign').on('change',function () {
        var positionDesign = $(this).val();
        var positionNumord = $('#printTableListePositionPointageNumord').val();
        var positionObj = $('#printTableListePositionPointageOject').val();
        var positionFHra = $('#printTableListePositionPointageHraut').val();
        var positionTexe = $('#printTableListePositionPointageTafexe').val();
        var positionHd = $('#printTableListePositionPointageHd').val();
        var positionHf = $('#printTableListePositionPointageHf').val();
        var positionDate = $('#printTableListePositionPointageDate').val();
        var positionTech = $('#printTableListePositionPointageTech').val();

        if(positionDesign != '')
        {
            if(positionDesign == positionNumord || positionDesign == positionObj || positionDesign == positionFHra || positionDesign == positionTexe || positionDesign == positionHd || positionDesign == positionHf || positionDesign == positionDate || positionDesign == positionTech)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionPointageOject').on('change',function () {
        var positionObj = $(this).val();
        var positionNumord = $('#printTableListePositionPointageNumord').val();
        var positionDesign = $('#printTableListePositionPointageDesign').val();
        var positionFHra = $('#printTableListePositionPointageHraut').val();
        var positionTexe = $('#printTableListePositionPointageTafexe').val();
        var positionHd = $('#printTableListePositionPointageHd').val();
        var positionHf = $('#printTableListePositionPointageHf').val();
        var positionDate = $('#printTableListePositionPointageDate').val();
        var positionTech = $('#printTableListePositionPointageTech').val();

        if(positionObj != '')
        {
            if(positionObj == positionNumord || positionObj == positionDesign || positionObj == positionFHra || positionObj == positionTexe || positionObj == positionHd || positionObj == positionHf || positionObj == positionDate || positionObj == positionTech)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionPointageHraut').on('change',function () {
        var positionFHra = $(this).val();
        var positionNumord = $('#printTableListePositionPointageNumord').val();
        var positionDesign = $('#printTableListePositionPointageDesign').val();
        var positionObj = $('#printTableListePositionPointageOject').val();
        var positionTexe = $('#printTableListePositionPointageTafexe').val();
        var positionHd = $('#printTableListePositionPointageHd').val();
        var positionHf = $('#printTableListePositionPointageHf').val();
        var positionDate = $('#printTableListePositionPointageDate').val();
        var positionTech = $('#printTableListePositionPointageTech').val();

        if (positionFHra != '')
        {
            if(positionFHra == positionNumord || positionFHra == positionDesign || positionFHra == positionObj || positionFHra == positionTexe || positionFHra == positionHd || positionFHra == positionHf || positionFHra == positionDate || positionFHra == positionTech)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionPointageTafexe').on('change',function () {
        var positionTexe = $(this).val();
        var positionNumord = $('#printTableListePositionPointageNumord').val();
        var positionDesign = $('#printTableListePositionPointageDesign').val();
        var positionObj = $('#printTableListePositionPointageOject').val();
        var positionFHra = $('#printTableListePositionPointageHraut').val();
        var positionHd = $('#printTableListePositionPointageHd').val();
        var positionHf = $('#printTableListePositionPointageHf').val();
        var positionDate = $('#printTableListePositionPointageDate').val();
        var positionTech = $('#printTableListePositionPointageTech').val();

        if(positionTexe != '')
        {
            if(positionTexe == positionNumord || positionTexe == positionDesign || positionTexe == positionObj || positionTexe == positionFHra || positionTexe == positionHd || positionTexe == positionHf || positionTexe == positionDate || positionTexe == positionTech)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionPointageHd').on('change',function () {
        var positionHd = $(this).val();
        var positionNumord = $('#printTableListePositionPointageNumord').val();
        var positionDesign = $('#printTableListePositionPointageDesign').val();
        var positionObj = $('#printTableListePositionPointageOject').val();
        var positionFHra = $('#printTableListePositionPointageHraut').val();
        var positionTexe = $('#printTableListePositionPointageTafexe').val();
        var positionHf = $('#printTableListePositionPointageHf').val();
        var positionDate = $('#printTableListePositionPointageDate').val();
        var positionTech = $('#printTableListePositionPointageTech').val();

        if(positionHd != '')
        {
            if(positionHd == positionNumord || positionHd == positionDesign || positionHd == positionObj || positionHd == positionFHra || positionHd == positionTexe || positionHd == positionHf || positionHd == positionDate || positionHd == positionTech)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionPointageHf').on('change',function () {
        var positionHf = $(this).val();
        var positionNumord = $('#printTableListePositionPointageNumord').val();
        var positionDesign = $('#printTableListePositionPointageDesign').val();
        var positionObj = $('#printTableListePositionPointageOject').val();
        var positionFHra = $('#printTableListePositionPointageHraut').val();
        var positionTexe = $('#printTableListePositionPointageTafexe').val();
        var positionHd = $('#printTableListePositionPointageHd').val();
        var positionDate = $('#printTableListePositionPointageDate').val();
        var positionTech = $('#printTableListePositionPointageTech').val();

        if(positionHf != '')
        {
            if(positionHf == positionNumord || positionHf == positionDesign || positionHf == positionObj || positionHf == positionFHra || positionHf == positionTexe || positionHf == positionHd || positionHf == positionDate || positionHf == positionTech)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionPointageDate').on('change',function () {
        var positionDate = $(this).val();
        var positionNumord = $('#printTableListePositionPointageNumord').val();
        var positionDesign = $('#printTableListePositionPointageDesign').val();
        var positionObj = $('#printTableListePositionPointageOject').val();
        var positionFHra = $('#printTableListePositionPointageHraut').val();
        var positionTexe = $('#printTableListePositionPointageTafexe').val();
        var positionHd = $('#printTableListePositionPointageHd').val();
        var positionHf = $('#printTableListePositionPointageHf').val();
        var positionTech = $('#printTableListePositionPointageTech').val();

        if(positionDate != '')
        {
            if(positionDate == positionNumord || positionDate == positionDesign || positionDate == positionObj || positionDate == positionFHra || positionDate == positionTexe || positionDate == positionHd || positionDate == positionHf || positionDate == positionTech)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionPointageTech').on('change',function () {
        var positionTech = $(this).val();
        var positionNumord = $('#printTableListePositionPointageNumord').val();
        var positionDesign = $('#printTableListePositionPointageDesign').val();
        var positionObj = $('#printTableListePositionPointageOject').val();
        var positionFHra = $('#printTableListePositionPointageHraut').val();
        var positionTexe = $('#printTableListePositionPointageTafexe').val();
        var positionHd = $('#printTableListePositionPointageHd').val();
        var positionHf = $('#printTableListePositionPointageHf').val();
        var positionDate = $('#printTableListePositionPointageDate').val();

        if(positionTech != '')
        {
            if(positionTech == positionNumord || positionTech == positionDesign || positionTech == positionObj || positionTech == positionFHra || positionTech == positionTexe || positionTech == positionHd || positionTech == positionHf || positionTech == positionDate)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });


    var nombre_colone = 0;
    var nombre_colone_change = 0;

    $(".printTableListePositionPointage").on('click', function () {
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

    $(".printTableListePositionPointage").on('change', function () {
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