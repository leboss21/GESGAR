function SuppressionDonneViewPane() {
    var element_id = $("#contextmenuId").text();
    if ( $("#mySpan").text()=='Enr\351gistrement Clients' )
    {
        suppressionClent(element_id);
    }
    if ( $("#mySpan").text()=='Enr\351gistrement V\351hucules' )
    {
        suppressionVehicule(element_id);
    }
    if ( $("#mySpan").text()=='Enr\351gistrement Techniciens' )
    {
        suppressionTechnicien(element_id);
    }

    if ( $("#mySpan").text()=='Programmation')
    {
        suppressionProgrammation(element_id);
    }

    if ( $("#mySpan").text()=='Quick Services')
    {
        suppressionQuickService(element_id);
    }

    if($("#mySpan").text()=='High Services')
    {
        suppressionHighService(element_id);
    }

    if($("#mySpan").text()=='Devis')
    {
        suppressionDevis(element_id);
    }

    if($("#mySpan").text()=='Assurance')
    {
        suppressionAssurance(element_id);
    }

    if ( $("#mySpan").text()=='Recommandation' )
    {
        suppressiionRecommandation(element_id);
    }
    if ( $("#mySpan").text()=='Observation - Inspection' )
    {
        suppressionInspection(element_id);
    }
    if ( $("#mySpan").text()=='Livraison' )
    {
        suppressionLivraison(element_id);
    }
    if ( $("#mySpan").text()=='R\351paration activit\351s' )
    {
        suppressionProgrammationActivite(element_id);
    }
    if ( $("#mySpan").text()=='Observation - R\351clamation' )
    {
        suppressionReclamation(element_id);
    }
    if ( $("#mySpan").text()=='Maintenance')
    {
        suppressionMaintenance(element_id);
    }
    if ($("#mySpan").text() == 'Pointage Technicien')
    {
        suppressionPointage(element_id);
    }

    if ($("#mySpan").text() == "Enr\351gistrement Rendez-vous revision")
    {
        suppressionAlertRevision(element_id);
    }

    if ($("#mySpan").text() == "Enr\351gistrement Rendez-vous visite technique")
    {
        suppressionAlertVisiteTechnique(element_id);
    }

    if ($("#mySpan").text() == "Enr\351gistrement Rendez-vous assurance")
    {
        suppressionAlertVisiteAssurance(element_id);
    }

    if ($("#mySpan").text() == "Enr\351gistrement Rendez-vous garantie")
    {
        suppressionAlertVisiteGarantie(element_id);
    }

    if ($("#mySpan").text() == "Maintenance Standard")
    {
        suppressionMaintenanceStandard(element_id);
    }
}

