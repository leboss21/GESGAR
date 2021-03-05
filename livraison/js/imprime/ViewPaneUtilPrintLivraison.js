
function PrintLivraisonSelectPosition() {
    $('#printTableListePositionLivraisonDate').on('change',function () {
        var positionDate = $(this).val();
        var positionHeure = $('#printTableListePositionLivraisonHeure').val();
        var positionTaffait = $('#printTableListePositionLivraisonTaffait').val();
        var positionTafnonfait = $('#printTableListePositionLivraisonTafnonfait').val();
        var positionKilo = $('#printTableListePositionLivraisonKilo').val();
        var positionDateG = $('#printTableListePositionLivraisonDateG').val();
        var positionFacture = $('#printTableListePositionLivraisonNumfact').val();
        var positionMontant = $('#printTableListePositionLivraisonMontant').val();
        var positionReception = $('#printTableListePositionLivraisonReception').val();
        var positionVehicule = $('#printTableListePositionLivraisonVehicule').val();
        var positionClient = $('#printTableListePositionLivraisonClent').val();

        if(positionDate != '')
        {
            if(positionDate == positionHeure || positionDate == positionTaffait || positionDate == positionTafnonfait || positionDate == positionKilo || positionDate == positionDateG || positionDate == positionFacture || positionDate == positionMontant || positionDate == positionReception || positionDate == positionVehicule || positionDate == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionLivraisonHeure').on('change',function () {
        var positionHeure = $(this).val();
        var positionDate = $('#printTableListePositionLivraisonDate').val();
        var positionTaffait = $('#printTableListePositionLivraisonTaffait').val();
        var positionTafnonfait = $('#printTableListePositionLivraisonTafnonfait').val();
        var positionKilo = $('#printTableListePositionLivraisonKilo').val();
        var positionDateG = $('#printTableListePositionLivraisonDateG').val();
        var positionFacture = $('#printTableListePositionLivraisonNumfact').val();
        var positionMontant = $('#printTableListePositionLivraisonMontant').val();
        var positionReception = $('#printTableListePositionLivraisonReception').val();
        var positionVehicule = $('#printTableListePositionLivraisonVehicule').val();
        var positionClient = $('#printTableListePositionLivraisonClent').val();

        if(positionHeure != '')
        {
            if(positionHeure == positionDate || positionHeure == positionTaffait || positionHeure == positionTafnonfait || positionHeure == positionKilo || positionHeure == positionDateG || positionHeure == positionFacture || positionHeure == positionMontant || positionHeure == positionReception || positionHeure == positionVehicule || positionHeure == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionLivraisonTaffait').on('change',function () {
        var positionTaffait = $(this).val();
        var positionDate = $('#printTableListePositionLivraisonDate').val();
        var positionHeure = $('#printTableListePositionLivraisonHeure').val();
        var positionTafnonfait = $('#printTableListePositionLivraisonTafnonfait').val();
        var positionKilo = $('#printTableListePositionLivraisonKilo').val();
        var positionDateG = $('#printTableListePositionLivraisonDateG').val();
        var positionFacture = $('#printTableListePositionLivraisonNumfact').val();
        var positionMontant = $('#printTableListePositionLivraisonMontant').val();
        var positionReception = $('#printTableListePositionLivraisonReception').val();
        var positionVehicule = $('#printTableListePositionLivraisonVehicule').val();
        var positionClient = $('#printTableListePositionLivraisonClent').val();

        if(positionTaffait != '')
        {
            if(positionTaffait == positionDate || positionTaffait == positionHeure || positionTaffait == positionTafnonfait || positionTaffait == positionKilo || positionTaffait == positionDateG || positionTaffait == positionFacture || positionTaffait == positionMontant || positionTaffait == positionReception || positionTaffait == positionVehicule || positionTaffait == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionLivraisonTafnonfait').on('change',function () {
        var positionTafnonfait = $(this).val();
        var positionDate = $('#printTableListePositionLivraisonDate').val();
        var positionHeure = $('#printTableListePositionLivraisonHeure').val();
        var positionTaffait = $('#printTableListePositionLivraisonTaffait').val();
        var positionKilo = $('#printTableListePositionLivraisonKilo').val();
        var positionDateG = $('#printTableListePositionLivraisonDateG').val();
        var positionFacture = $('#printTableListePositionLivraisonNumfact').val();
        var positionMontant = $('#printTableListePositionLivraisonMontant').val();
        var positionReception = $('#printTableListePositionLivraisonReception').val();
        var positionVehicule = $('#printTableListePositionLivraisonVehicule').val();
        var positionClient = $('#printTableListePositionLivraisonClent').val();

        if (positionTafnonfait != '')
        {
            if(positionTafnonfait == positionDate || positionTafnonfait == positionHeure || positionTafnonfait == positionTaffait || positionTafnonfait == positionKilo || positionTafnonfait == positionDateG || positionTafnonfait == positionFacture || positionTafnonfait == positionMontant || positionTafnonfait == positionReception || positionTafnonfait == positionVehicule || positionTafnonfait == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionLivraisonKilo').on('change',function () {
        var positionKilo = $(this).val();
        var positionDate = $('#printTableListePositionLivraisonDate').val();
        var positionHeure = $('#printTableListePositionLivraisonHeure').val();
        var positionTaffait = $('#printTableListePositionLivraisonTaffait').val();
        var positionTafnonfait = $('#printTableListePositionLivraisonTafnonfait').val();
        var positionDateG = $('#printTableListePositionLivraisonDateG').val();
        var positionFacture = $('#printTableListePositionLivraisonNumfact').val();
        var positionMontant = $('#printTableListePositionLivraisonMontant').val();
        var positionReception = $('#printTableListePositionLivraisonReception').val();
        var positionVehicule = $('#printTableListePositionLivraisonVehicule').val();
        var positionClient = $('#printTableListePositionLivraisonClent').val();

        if(positionKilo != '')
        {
            if(positionKilo == positionDate || positionKilo == positionHeure || positionKilo == positionTaffait || positionKilo == positionTafnonfait || positionKilo == positionDateG || positionKilo == positionFacture || positionKilo == positionMontant || positionKilo == positionReception || positionKilo == positionVehicule || positionKilo == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionLivraisonDateG').on('change',function () {
        var positionDateG = $(this).val();
        var positionDate = $('#printTableListePositionLivraisonDate').val();
        var positionHeure = $('#printTableListePositionLivraisonHeure').val();
        var positionTaffait = $('#printTableListePositionLivraisonTaffait').val();
        var positionTafnonfait = $('#printTableListePositionLivraisonTafnonfait').val();
        var positionKilo = $('#printTableListePositionLivraisonKilo').val();
        var positionFacture = $('#printTableListePositionLivraisonNumfact').val();
        var positionMontant = $('#printTableListePositionLivraisonMontant').val();
        var positionReception = $('#printTableListePositionLivraisonReception').val();
        var positionVehicule = $('#printTableListePositionLivraisonVehicule').val();
        var positionClient = $('#printTableListePositionLivraisonClent').val();

        if(positionDateG != '')
        {
            if(positionDateG == positionDate || positionDateG == positionHeure || positionDateG == positionTaffait || positionDateG == positionTafnonfait || positionDateG == positionKilo || positionDateG == positionFacture || positionDateG == positionMontant || positionDateG == positionReception || positionDateG == positionVehicule || positionDateG == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionLivraisonNumfact').on('change',function () {
        var positionFacture = $(this).val();
        var positionDate = $('#printTableListePositionLivraisonDate').val();
        var positionHeure = $('#printTableListePositionLivraisonHeure').val();
        var positionTaffait = $('#printTableListePositionLivraisonTaffait').val();
        var positionTafnonfait = $('#printTableListePositionLivraisonTafnonfait').val();
        var positionKilo = $('#printTableListePositionLivraisonKilo').val();
        var positionDateG = $('#printTableListePositionLivraisonDateG').val();
        var positionMontant = $('#printTableListePositionLivraisonMontant').val();
        var positionReception = $('#printTableListePositionLivraisonReception').val();
        var positionVehicule = $('#printTableListePositionLivraisonVehicule').val();
        var positionClient = $('#printTableListePositionLivraisonClent').val();

        if(positionFacture != '')
        {
            if(positionFacture == positionDate || positionFacture == positionHeure || positionFacture == positionTaffait || positionFacture == positionTafnonfait || positionFacture == positionKilo || positionFacture == positionDateG || positionFacture == positionMontant || positionFacture == positionReception || positionFacture == positionVehicule || positionFacture == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionLivraisonMontant').on('change',function () {
        var positionMontant = $(this).val();
        var positionDate = $('#printTableListePositionLivraisonDate').val();
        var positionHeure = $('#printTableListePositionLivraisonHeure').val();
        var positionTaffait = $('#printTableListePositionLivraisonTaffait').val();
        var positionTafnonfait = $('#printTableListePositionLivraisonTafnonfait').val();
        var positionKilo = $('#printTableListePositionLivraisonKilo').val();
        var positionDateG = $('#printTableListePositionLivraisonDateG').val();
        var positionFacture = $('#printTableListePositionLivraisonNumfact').val();
        var positionReception = $('#printTableListePositionLivraisonReception').val();
        var positionVehicule = $('#printTableListePositionLivraisonVehicule').val();
        var positionClient = $('#printTableListePositionLivraisonClent').val();

        if(positionMontant != '')
        {
            if(positionMontant == positionDate || positionMontant == positionHeure || positionMontant == positionTaffait || positionMontant == positionTafnonfait || positionMontant == positionKilo || positionMontant == positionDateG || positionMontant == positionFacture || positionMontant == positionReception || positionMontant == positionVehicule || positionMontant == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionLivraisonReception').on('change',function () {
        var positionReception = $(this).val();
        var positionDate = $('#printTableListePositionLivraisonDate').val();
        var positionHeure = $('#printTableListePositionLivraisonHeure').val();
        var positionTaffait = $('#printTableListePositionLivraisonTaffait').val();
        var positionTafnonfait = $('#printTableListePositionLivraisonTafnonfait').val();
        var positionKilo = $('#printTableListePositionLivraisonKilo').val();
        var positionDateG = $('#printTableListePositionLivraisonDateG').val();
        var positionFacture = $('#printTableListePositionLivraisonNumfact').val();
        var positionMontant = $('#printTableListePositionLivraisonMontant').val();
        var positionVehicule = $('#printTableListePositionLivraisonVehicule').val();
        var positionClient = $('#printTableListePositionLivraisonClent').val();

        if(positionReception != '')
        {
            if(positionReception == positionDate || positionReception == positionHeure || positionReception == positionTaffait || positionReception == positionTafnonfait || positionReception == positionKilo || positionReception == positionDateG || positionReception == positionFacture || positionReception == positionMontant || positionReception == positionVehicule || positionReception == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionLivraisonVehicule').on('change',function () {
        var positionVehicule = $(this).val();
        var positionDate = $('#printTableListePositionLivraisonDate').val();
        var positionHeure = $('#printTableListePositionLivraisonHeure').val();
        var positionTaffait = $('#printTableListePositionLivraisonTaffait').val();
        var positionTafnonfait = $('#printTableListePositionLivraisonTafnonfait').val();
        var positionKilo = $('#printTableListePositionLivraisonKilo').val();
        var positionDateG = $('#printTableListePositionLivraisonDateG').val();
        var positionFacture = $('#printTableListePositionLivraisonNumfact').val();
        var positionMontant = $('#printTableListePositionLivraisonMontant').val();
        var positionReception = $('#printTableListePositionLivraisonReception').val();
        var positionClient = $('#printTableListePositionLivraisonClent').val();

        if(positionVehicule != '')
        {
            if(positionVehicule == positionDate || positionVehicule == positionHeure || positionVehicule == positionTaffait || positionVehicule == positionTafnonfait || positionVehicule == positionKilo || positionVehicule == positionDateG || positionVehicule == positionFacture || positionVehicule == positionMontant || positionVehicule == positionReception || positionVehicule == positionClient)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionLivraisonClent').on('change',function () {
        var positionClient = $(this).val();
        var positionDate = $('#printTableListePositionLivraisonDate').val();
        var positionHeure = $('#printTableListePositionLivraisonHeure').val();
        var positionTaffait = $('#printTableListePositionLivraisonTaffait').val();
        var positionTafnonfait = $('#printTableListePositionLivraisonTafnonfait').val();
        var positionKilo = $('#printTableListePositionLivraisonKilo').val();
        var positionDateG = $('#printTableListePositionLivraisonDateG').val();
        var positionFacture = $('#printTableListePositionLivraisonNumfact').val();
        var positionMontant = $('#printTableListePositionLivraisonMontant').val();
        var positionReception = $('#printTableListePositionLivraisonReception').val();
        var positionVehicule = $('#printTableListePositionLivraisonVehicule').val();

        if(positionClient != '')
        {
            if(positionClient == positionDate || positionClient == positionHeure || positionClient == positionTaffait || positionClient == positionTafnonfait || positionClient == positionKilo || positionClient == positionDateG || positionClient == positionFacture || positionClient == positionMontant || positionClient == positionReception || positionClient == positionVehicule)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    var nombre_colone = 0;
    var nombre_colone_change = 0;

    $(".printTableListePositionLivraison").on('click', function () {
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

    $(".printTableListePositionLivraison").on('change', function () {
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