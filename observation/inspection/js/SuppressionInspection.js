function suppressionInspection(element_id) {
    $.post('controller/observation/inspection/php/SuppressionInspection.php',{postidinspectionandremoveinspectwhenidissend:element_id},function (data) {

        if(data=='oui')
        {
            var vide = InspectionUniqueIfEnterImmatricule();
            if (vide == 'oui')
                $('#immatriculationInspectionShearch').val("");
            SuppressionReussie();
        }
        else
        {
            SuppressionEchoue();
        }
    });
}