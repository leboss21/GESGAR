
function PrintInspectionSelectPosition() {
    $('#printTableListePositionInspectionDate').on('change',function () {
        var positionDate = $(this).val();
        var positionKilo = $('#printTableListePositionInspectionKilo').val();
        var positionNumpd = $('#printTableListePositionInspectionNumpd').val();
        var positionNompd = $('#printTableListePositionInspectionNompd').val();
        var positionQte = $('#printTableListePositionInspectionQte').val();
        var positionNumcom = $('#printTableListePositionInspectionNumcom').val();
        var positionResult = $('#printTableListePositionInspectionResult').val();
        var positionRecep= $('#printTableListePositionInspectionRecep').val();
        var positionVehicule = $('#printTableListePositionInspectionVehicule').val();
        var positionClient = $('#printTableListePositionInspectionClient').val();

        if(positionDate != '')
        {
            if(positionDate == positionKilo || positionDate == positionNumpd || positionDate == positionNompd || positionDate == positionQte || positionDate == positionNumcom || positionDate == positionResult || positionDate == positionRecep || positionDate == positionVehicule || positionDate == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionInspectionKilo').on('change',function () {
        var positionKilo = $(this).val();
        var positionDate = $('#printTableListePositionInspectionDate').val();
        var positionNumpd = $('#printTableListePositionInspectionNumpd').val();
        var positionNompd = $('#printTableListePositionInspectionNompd').val();
        var positionQte = $('#printTableListePositionInspectionQte').val();
        var positionNumcom = $('#printTableListePositionInspectionNumcom').val();
        var positionResult = $('#printTableListePositionInspectionResult').val();
        var positionRecep= $('#printTableListePositionInspectionRecep').val();
        var positionVehicule = $('#printTableListePositionInspectionVehicule').val();
        var positionClient = $('#printTableListePositionInspectionClient').val();

        if(positionKilo != '')
        {
            if(positionKilo == positionDate || positionKilo == positionNumpd || positionKilo == positionNompd || positionKilo == positionQte || positionKilo == positionNumcom || positionKilo == positionResult || positionKilo == positionRecep || positionKilo == positionVehicule || positionKilo == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionInspectionNumpd').on('change',function () {
        var positionNumpd = $(this).val();
        var positionDate = $('#printTableListePositionInspectionDate').val();
        var positionKilo = $('#printTableListePositionInspectionKilo').val();
        var positionNompd = $('#printTableListePositionInspectionNompd').val();
        var positionQte = $('#printTableListePositionInspectionQte').val();
        var positionNumcom = $('#printTableListePositionInspectionNumcom').val();
        var positionResult = $('#printTableListePositionInspectionResult').val();
        var positionRecep= $('#printTableListePositionInspectionRecep').val();
        var positionVehicule = $('#printTableListePositionInspectionVehicule').val();
        var positionClient = $('#printTableListePositionInspectionClient').val();

        if(positionNumpd != '')
        {
            if(positionNumpd == positionDate || positionNumpd == positionKilo || positionNumpd == positionNompd || positionNumpd == positionQte || positionNumpd == positionNumcom || positionNumpd == positionResult || positionNumpd == positionRecep|| positionNumpd == positionVehicule|| positionNumpd == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionInspectionNompd').on('change',function () {
        var positionNompd = $(this).val();
        var positionDate = $('#printTableListePositionInspectionDate').val();
        var positionKilo = $('#printTableListePositionInspectionKilo').val();
        var positionNumpd = $('#printTableListePositionInspectionNumpd').val();
        var positionQte = $('#printTableListePositionInspectionQte').val();
        var positionNumcom = $('#printTableListePositionInspectionNumcom').val();
        var positionResult = $('#printTableListePositionInspectionResult').val();
        var positionRecep= $('#printTableListePositionInspectionRecep').val();
        var positionVehicule = $('#printTableListePositionInspectionVehicule').val();
        var positionClient = $('#printTableListePositionInspectionClient').val();

        if (positionNompd != '')
        {
            if(positionNompd == positionDate || positionNompd == positionKilo || positionNompd == positionNumpd || positionNompd == positionQte || positionNompd == positionNumcom || positionNompd == positionResult || positionNompd == positionRecep || positionNompd == positionVehicule || positionNompd == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionInspectionQte').on('change',function () {
        var positionQte = $(this).val();
        var positionDate = $('#printTableListePositionInspectionDate').val();
        var positionKilo = $('#printTableListePositionInspectionKilo').val();
        var positionNumpd = $('#printTableListePositionInspectionNumpd').val();
        var positionNompd = $('#printTableListePositionInspectionNompd').val();
        var positionNumcom = $('#printTableListePositionInspectionNumcom').val();
        var positionResult = $('#printTableListePositionInspectionResult').val();
        var positionRecep= $('#printTableListePositionInspectionRecep').val();
        var positionVehicule = $('#printTableListePositionInspectionVehicule').val();
        var positionClient = $('#printTableListePositionInspectionClient').val();

        if(positionQte != '')
        {
            if(positionQte == positionDate || positionQte == positionKilo || positionQte == positionNumpd || positionQte == positionNompd || positionQte == positionNumcom || positionQte == positionResult || positionQte == positionRecep || positionQte == positionVehicule || positionQte == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionInspectionNumcom').on('change',function () {
        var positionNumcom = $(this).val();
        var positionDate = $('#printTableListePositionInspectionDate').val();
        var positionKilo = $('#printTableListePositionInspectionKilo').val();
        var positionNumpd = $('#printTableListePositionInspectionNumpd').val();
        var positionNompd = $('#printTableListePositionInspectionNompd').val();
        var positionQte = $('#printTableListePositionInspectionQte').val();
        var positionResult = $('#printTableListePositionInspectionResult').val();
        var positionRecep= $('#printTableListePositionInspectionRecep').val();
        var positionVehicule = $('#printTableListePositionInspectionVehicule').val();
        var positionClient = $('#printTableListePositionInspectionClient').val();

        if(positionNumcom != '')
        {
            if(positionNumcom == positionDate || positionNumcom == positionKilo || positionNumcom == positionNumpd || positionNumcom == positionNompd || positionNumcom == positionQte || positionNumcom == positionResult || positionNumcom == positionRecep || positionNumcom == positionVehicule || positionNumcom == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionInspectionResult').on('change',function () {
        var positionResult = $(this).val();
        var positionDate = $('#printTableListePositionInspectionDate').val();
        var positionKilo = $('#printTableListePositionInspectionKilo').val();
        var positionNumpd = $('#printTableListePositionInspectionNumpd').val();
        var positionNompd = $('#printTableListePositionInspectionNompd').val();
        var positionQte = $('#printTableListePositionInspectionQte').val();
        var positionNumcom = $('#printTableListePositionInspectionNumcom').val();
         var positionRecep = $('#printTableListePositionInspectionRecep').val();
        var positionVehicule = $('#printTableListePositionInspectionVehicule').val();
        var positionClient = $('#printTableListePositionInspectionClient').val();

        if(positionResult != '')
        {
            if(positionResult == positionDate || positionResult == positionKilo || positionResult == positionNumpd || positionResult == positionNompd || positionResult == positionQte || positionResult == positionNumcom || positionResult == positionRecep || positionResult == positionVehicule || positionResult == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionInspectionRecep').on('change',function () {
        var positionRecep = $(this).val();
        var positionDate = $('#printTableListePositionInspectionDate').val();
        var positionKilo = $('#printTableListePositionInspectionKilo').val();
        var positionNumpd = $('#printTableListePositionInspectionNumpd').val();
        var positionNompd = $('#printTableListePositionInspectionNompd').val();
        var positionQte = $('#printTableListePositionInspectionQte').val();
        var positionNumcom = $('#printTableListePositionInspectionNumcom').val();
        var positionResult = $('#printTableListePositionInspectionResult').val();
        var positionVehicule = $('#printTableListePositionInspectionVehicule').val();
        var positionClient = $('#printTableListePositionInspectionClient').val();

        if(positionRecep != '')
        {
            if(positionRecep == positionDate || positionRecep == positionKilo || positionRecep == positionNumpd || positionRecep == positionNompd || positionRecep == positionQte || positionRecep == positionNumcom || positionRecep == positionResult || positionRecep == positionVehicule || positionRecep == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionInspectionVehicule').on('change',function () {
        var positionVehicule = $(this).val();
        var positionDate = $('#printTableListePositionInspectionDate').val();
        var positionKilo = $('#printTableListePositionInspectionKilo').val();
        var positionNumpd = $('#printTableListePositionInspectionNumpd').val();
        var positionNompd = $('#printTableListePositionInspectionNompd').val();
        var positionQte = $('#printTableListePositionInspectionQte').val();
        var positionNumcom = $('#printTableListePositionInspectionNumcom').val();
        var positionResult = $('#printTableListePositionInspectionResult').val();
        var positionRecep = $('#printTableListePositionInspectionRecep').val();
        var positionClient = $('#printTableListePositionInspectionClient').val();

        if(positionVehicule != '')
        {
            if(positionVehicule == positionDate || positionVehicule == positionKilo || positionVehicule == positionNumpd || positionVehicule == positionNompd || positionVehicule == positionQte || positionVehicule == positionNumcom || positionVehicule == positionResult || positionVehicule == positionRecep || positionVehicule == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionInspectionClient').on('change',function () {
        var positionClient = $(this).val();
        var positionDate = $('#printTableListePositionInspectionDate').val();
        var positionKilo = $('#printTableListePositionInspectionKilo').val();
        var positionNumpd = $('#printTableListePositionInspectionNumpd').val();
        var positionNompd = $('#printTableListePositionInspectionNompd').val();
        var positionQte = $('#printTableListePositionInspectionQte').val();
        var positionNumcom = $('#printTableListePositionInspectionNumcom').val();
        var positionResult = $('#printTableListePositionInspectionResult').val();
        var positionRecep = $('#printTableListePositionInspectionRecep').val();
        var positionVehicule = $('#printTableListePositionInspectionVehicule').val();

        if(positionClient != '')
        {
            if(positionClient == positionDate || positionClient == positionKilo || positionClient == positionNumpd || positionClient == positionNompd || positionClient == positionQte || positionClient == positionNumcom || positionClient == positionResult || positionClient == positionRecep || positionClient == positionVehicule)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });


    var nombre_colone = 0;
    var nombre_colone_change = 0;

    $(".printTableListePositionInspection").on('click', function () {
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

    $(".printTableListePositionInspection").on('change', function () {
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