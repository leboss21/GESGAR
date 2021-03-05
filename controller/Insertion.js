$(document).ready(function () {

    $("#validerClientAdd").on('click',function ()
    {
        insertionClient();
    });

    $("#validerTechAdd").on('click',function ()
    {
        insertionTechnicien();
    });

    $("#validerVehiculeAdd").on('click',function ()
    {
        insertionVehicule();
    });

    $("#validerProgrammationAdd").on('click',function () {
        insertionProgrammation();
    });

    $("#validerReception").on('click',function () {
        insertionReception();
    });

    $("#validerAddTMV").on('click',function () {
        insertionTypeModelVehicule();
    });

    $("#validerAddTM").on('click',function () {
        insertionTypeMoteurVehicule();
    });

    $("#validerAddST").on('click',function () {
        insertionSpetialiteTechnicien();
    });

    $("#validerAddStT").on('click',function () {
        insertionStatusTechnicien();
    });

    $("#validerAddGC").on('click',function () {
        insertionGenreClient();
    });

    $("#validerAddPointage").on('click',function () {
        insertionPointage();
    });

    $("#validerAddRecommandation").on('click',function () {
        insertionRecommandation();
    });

    $("#validerAddInspection").on('click',function () {
       insertionInspection();
    });

    $("#validerAddActivite").on('click',function () {
        insertionProgrammationActivite();
    });

    $("#validerAddLivraison").on('click',function () {
       insertionLivraison();
    });

    $("#validerAddReclamation").on('click',function () {
       insertionReclamation();
    });

    $("#validerAddMaintenance").on('click',function () {
       insertionMaintenance();
    });

    $("#validerU").on('click',function () {
        insertionUtilisateur();
    });

    $("#validerRevisionAdd").on('click',function () {
        insertionAlerteRevision();
    });

    $("#validerVisiteAdd").on('click',function () {
        insertionAlerteVisiteTechnique();
    });

    $("#validerAssuranceAdd").on('click',function () {
        insertionAlerteAssurance();
    });

    $("#validerGarantieAdd").on('click',function () {
        insertionAlerteGarantie();
    });

    $("#validerAddMaintenancestandard").on('click',function ()
    {
       insertionMaintenanceStandard();
    });

    $("#validerEvolution").on('click',function () {
        modificationEvolution();
    });

    $("#supprimeDonnes").on('click',function () {
        SuppressionDonneViewPane();
    });
});