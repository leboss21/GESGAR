function AffichageTousDonneViewPane(elementActifId) {
    var elementActif = $("#mySpan").text();

    if(elementActif == "Programmation")
    {
        ProgrammationInfoUniqueComplete(elementActifId);
    }

    else if(elementActif == "Quick Services" || elementActif == "High Services" || elementActif == "Devis" || elementActif == "Assurance")
    {
        ReceptionInfoUniqueComplete(elementActifId);
    }

    else if(elementActif == "Maintenance")
    {
        MaintenanceInfoUniqueComplete(elementActifId);
    }

    else if(elementActif == "R\351paration activit\351s")
    {
        ProgrammationActivitesInfoUniqueComplete(elementActifId);
    }

    else if(elementActif == "Livraison")
    {
        LivraisonInfoUniqueComplete(elementActifId);
    }

    else if(elementActif == "Recommandation")
    {
        RecomInfoUniqueComplete(elementActifId);
    }

    else if(elementActif == "Observation - R\351clamation")
    {
        ReclamInfoUniqueComplete(elementActifId);
    }

    else if(elementActif == "Pointage Technicien")
    {
        PointInfoUniqueComplete(elementActifId);
    }

}