function PrintReclamationSelectPosition() {
    $('#printTableListePositionReclamationDate').on('change',function () {
        var positionDate = $(this).val();
        var positionReclam = $('#printTableListePositionReclamationReclam').val();
        var positionClient = $('#printTableListePositionReclamationClient').val();
        var positionAnalyse = $('#printTableListePositionReclamationAnalyse').val();
        var positionCause = $('#printTableListePositionReclamationCause').val();
        var positionPropos = $('#printTableListePositionReclamationProposition').val();
        var positionDateobs = $('#printTableListePositionReclamationDateobserv').val();
        var positionObs = $('#printTableListePositionReclamationObserv').val();
        var positionRecep = $('#printTableListePositionReclamationRecep').val();
        var positionVehicule = $('#printTableListePositionReclamationVehicule').val();

        if(positionDate != '')
        {
            if(positionDate == positionReclam || positionDate == positionClient || positionDate == positionAnalyse || positionDate == positionCause || positionDate == positionPropos || positionDate == positionDateobs || positionDate == positionObs || positionDate == positionRecep || positionDate == positionVehicule)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionReclamationReclam').on('change',function () {
        var positionReclam = $(this).val();
        var positionDate = $('#printTableListePositionReclamationDate').val();
        var positionClient = $('#printTableListePositionReclamationClient').val();
        var positionAnalyse = $('#printTableListePositionReclamationAnalyse').val();
        var positionCause = $('#printTableListePositionReclamationCause').val();
        var positionPropos = $('#printTableListePositionReclamationProposition').val();
        var positionDateobs = $('#printTableListePositionReclamationDateobserv').val();
        var positionObs = $('#printTableListePositionReclamationObserv').val();
        var positionRecep = $('#printTableListePositionReclamationRecep').val();
        var positionVehicule = $('#printTableListePositionReclamationVehicule').val();

        if(positionReclam != '')
        {
            if(positionReclam == positionDate || positionReclam == positionClient || positionReclam == positionAnalyse || positionReclam == positionCause || positionReclam == positionPropos || positionReclam == positionDateobs || positionReclam == positionObs || positionReclam == positionRecep || positionReclam == positionVehicule)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionReclamationClient').on('change',function () {
        var positionClient = $(this).val();
        var positionDate = $('#printTableListePositionReclamationDate').val();
        var positionReclam = $('#printTableListePositionReclamationReclam').val();
        var positionAnalyse = $('#printTableListePositionReclamationAnalyse').val();
        var positionCause = $('#printTableListePositionReclamationCause').val();
        var positionPropos = $('#printTableListePositionReclamationProposition').val();
        var positionDateobs = $('#printTableListePositionReclamationDateobserv').val();
        var positionObs = $('#printTableListePositionReclamationObserv').val();
        var positionRecep = $('#printTableListePositionReclamationRecep').val();
        var positionVehicule = $('#printTableListePositionReclamationVehicule').val();

        if(positionClient != '')
        {
            if(positionClient == positionDate || positionClient == positionReclam || positionClient == positionAnalyse || positionClient == positionCause || positionClient == positionPropos || positionClient == positionDateobs || positionClient == positionObs || positionClient == positionRecep || positionClient == positionVehicule)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionReclamationAnalyse').on('change',function () {
        var positionAnalyse = $(this).val();
        var positionDate = $('#printTableListePositionReclamationDate').val();
        var positionReclam = $('#printTableListePositionReclamationReclam').val();
        var positionClient = $('#printTableListePositionReclamationClient').val();
        var positionCause = $('#printTableListePositionReclamationCause').val();
        var positionPropos = $('#printTableListePositionReclamationProposition').val();
        var positionDateobs = $('#printTableListePositionReclamationDateobserv').val();
        var positionObs = $('#printTableListePositionReclamationObserv').val();
        var positionRecep = $('#printTableListePositionReclamationRecep').val();
        var positionVehicule = $('#printTableListePositionReclamationVehicule').val();

        if (positionAnalyse != '')
        {
            if(positionAnalyse == positionDate || positionAnalyse == positionReclam || positionAnalyse == positionClient || positionAnalyse == positionCause || positionAnalyse == positionPropos || positionAnalyse == positionDateobs || positionAnalyse == positionObs || positionAnalyse == positionRecep || positionAnalyse == positionVehicule)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionReclamationCause').on('change',function () {
        var positionCause = $(this).val();
        var positionDate = $('#printTableListePositionReclamationDate').val();
        var positionReclam = $('#printTableListePositionReclamationReclam').val();
        var positionClient = $('#printTableListePositionReclamationClient').val();
        var positionAnalyse = $('#printTableListePositionReclamationAnalyse').val();
        var positionPropos = $('#printTableListePositionReclamationProposition').val();
        var positionDateobs = $('#printTableListePositionReclamationDateobserv').val();
        var positionObs = $('#printTableListePositionReclamationObserv').val();
        var positionRecep = $('#printTableListePositionReclamationRecep').val();
        var positionVehicule = $('#printTableListePositionReclamationVehicule').val();

        if(positionCause != '')
        {
            if(positionCause == positionDate || positionCause == positionReclam || positionCause == positionClient || positionCause == positionAnalyse || positionCause == positionPropos || positionCause == positionDateobs || positionCause == positionObs || positionCause == positionRecep || positionCause == positionVehicule)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionReclamationProposition').on('change',function () {
        var positionPropos = $(this).val();
        var positionDate = $('#printTableListePositionReclamationDate').val();
        var positionReclam = $('#printTableListePositionReclamationReclam').val();
        var positionClient = $('#printTableListePositionReclamationClient').val();
        var positionAnalyse = $('#printTableListePositionReclamationAnalyse').val();
        var positionCause = $('#printTableListePositionReclamationCause').val();
        var positionDateobs = $('#printTableListePositionReclamationDateobserv').val();
        var positionObs = $('#printTableListePositionReclamationObserv').val();
        var positionRecep = $('#printTableListePositionReclamationRecep').val();
        var positionVehicule = $('#printTableListePositionReclamationVehicule').val();

        if(positionPropos != '')
        {
            if(positionPropos == positionDate || positionPropos == positionReclam || positionPropos == positionClient || positionPropos == positionAnalyse || positionPropos == positionCause || positionPropos == positionDateobs || positionPropos == positionObs || positionPropos == positionRecep || positionPropos == positionVehicule)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionReclamationDateobserv').on('change',function () {
        var positionDateobs = $(this).val();
        var positionDate = $('#printTableListePositionReclamationDate').val();
        var positionReclam = $('#printTableListePositionReclamationReclam').val();
        var positionClient = $('#printTableListePositionReclamationClient').val();
        var positionAnalyse = $('#printTableListePositionReclamationAnalyse').val();
        var positionCause = $('#printTableListePositionReclamationCause').val();
        var positionPropos = $('#printTableListePositionReclamationProposition').val();
        var positionObs = $('#printTableListePositionReclamationObserv').val();
        var positionRecep = $('#printTableListePositionReclamationRecep').val();
        var positionVehicule = $('#printTableListePositionReclamationVehicule').val();

        if(positionDateobs != '')
        {
            if(positionDateobs == positionDate || positionDateobs == positionReclam || positionDateobs == positionClient || positionDateobs == positionAnalyse || positionDateobs == positionCause || positionDateobs == positionPropos || positionDateobs == positionObs || positionDateobs == positionRecep || positionDateobs == positionVehicule)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionReclamationObserv').on('change',function () {
        var positionObs = $(this).val();
        var positionDate = $('#printTableListePositionReclamationDate').val();
        var positionReclam = $('#printTableListePositionReclamationReclam').val();
        var positionClient = $('#printTableListePositionReclamationClient').val();
        var positionAnalyse = $('#printTableListePositionReclamationAnalyse').val();
        var positionCause = $('#printTableListePositionReclamationCause').val();
        var positionPropos = $('#printTableListePositionReclamationProposition').val();
        var positionDateobs = $('#printTableListePositionReclamationDateobserv').val();
        var positionRecep = $('#printTableListePositionReclamationRecep').val();
        var positionVehicule = $('#printTableListePositionReclamationVehicule').val();

        if(positionObs != '')
        {
            if(positionObs == positionDate || positionObs == positionReclam || positionObs == positionClient || positionObs == positionAnalyse || positionObs == positionCause || positionObs == positionPropos || positionObs == positionDateobs || positionObs == positionRecep || positionObs == positionVehicule)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionReclamationRecep').on('change',function () {
        var positionRecep = $(this).val();
        var positionDate = $('#printTableListePositionReclamationDate').val();
        var positionReclam = $('#printTableListePositionReclamationReclam').val();
        var positionClient = $('#printTableListePositionReclamationClient').val();
        var positionAnalyse = $('#printTableListePositionReclamationAnalyse').val();
        var positionCause = $('#printTableListePositionReclamationCause').val();
        var positionPropos = $('#printTableListePositionReclamationProposition').val();
        var positionDateobs = $('#printTableListePositionReclamationDateobserv').val();
        var positionObs = $('#printTableListePositionReclamationObserv').val();
        var positionVehicule = $('#printTableListePositionReclamationVehicule').val();

        if(positionRecep != '')
        {
            if(positionRecep == positionDate || positionRecep == positionReclam || positionRecep == positionClient || positionRecep == positionAnalyse || positionRecep == positionCause || positionRecep == positionPropos || positionRecep == positionDateobs || positionRecep == positionObs || positionRecep == positionVehicule)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    $('#printTableListePositionReclamationVehicule').on('change',function () {
        var positionVehicule = $(this).val();
        var positionDate = $('#printTableListePositionReclamationDate').val();
        var positionReclam = $('#printTableListePositionReclamationReclam').val();
        var positionClient = $('#printTableListePositionReclamationClient').val();
        var positionAnalyse = $('#printTableListePositionReclamationAnalyse').val();
        var positionCause = $('#printTableListePositionReclamationCause').val();
        var positionPropos = $('#printTableListePositionReclamationProposition').val();
        var positionDateobs = $('#printTableListePositionReclamationDateobserv').val();
        var positionObs = $('#printTableListePositionReclamationObserv').val();
        var positionRecep = $('#printTableListePositionReclamationRecep').val();

        if(positionVehicule != '')
        {
            if(positionVehicule == positionDate || positionVehicule == positionReclam || positionVehicule == positionClient || positionVehicule == positionAnalyse || positionVehicule == positionCause || positionVehicule == positionPropos || positionVehicule == positionDateobs || positionVehicule == positionObs || positionVehicule == positionRecep)
            {
                $(this).val('');
                $('.messageh6').text('Cette colone est d\351j\340 fix\351e.');
                ConfirmationLose();
            }
        }
    });

    var nombre_colone = 0;
    var nombre_colone_change = 0;

    $(".printTableListePositionReclamation").on('click', function () {
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

    $(".printTableListePositionReclamation").on('change', function () {
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