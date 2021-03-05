function suppressionAlertRevision(element_id) {
    $.post('controller/enregistrement/alerts/php/SuppressionXvehiculeRevision.php', {supprressionrevision: element_id}, function (data) {
        if(data=='oui')
        {
            $("#conteneur_rendezvous").load('view/enregistrement/alerts/VehiculeRendezvousRevision.php');
            SuppressionReussie();
        }
        else
        {
            SuppressionEchoue();
        }
    });
}

function suppressionAlertVisiteTechnique(element_id) {
    $.post('controller/enregistrement/alerts/php/SuppressionXvehiculeVisiteTechnique.php', {supprressionvisite: element_id}, function (data) {
        if(data=='oui')
        {
            $("#conteneur_rendezvous").load('view/enregistrement/alerts/VehiculeRendezvousVisiteTechnique.php');
            SuppressionReussie();
        }
        else
        {
            SuppressionEchoue();
        }
    });
}

function suppressionAlertVisiteAssurance(element_id) {
    $.post('controller/enregistrement/alerts/php/SuppressionXvehiculeAssurance.php', {supprressionassurance: element_id}, function (data) {
        if(data=='oui')
        {
            $("#conteneur_rendezvous").load('view/enregistrement/alerts/VehiculeRendezvousAssurance.php');
            SuppressionReussie();
        }
        else
        {
            SuppressionEchoue();
        }
    });
}

function suppressionAlertVisiteGarantie(element_id) {
    $.post('controller/enregistrement/alerts/php/SuppressionXvehiculeGarantie.php', {supprressiongarantie: element_id}, function (data) {
        if(data=='oui')
        {
            $("#conteneur_rendezvous").load('view/enregistrement/alerts/VehiculeRendezvousGarantie.php');
            SuppressionReussie();
        }
        else
        {
            SuppressionEchoue();
        }
    });
}