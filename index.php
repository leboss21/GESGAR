<?php

session_start();

if ( $_SESSION['userGESGAR']=='' ){
    $url = "Login.php";
    header("Location: $url");
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>GESGAR</title>
    <link rel="icon" type="" href="images/icon.png">
    <meta http-equiv="">
    <meta name="viewport" http-equiv="Content-Type" content="text/html;charset=utf-8;width=device-width; initial-scale=1" />

    <link rel="stylesheet" href="style/bibliotheque/localfont-awesome/font-awesome.min.css" />
    <link rel="stylesheet" href="style/bibliotheque/css-display/w3.css" />
    <link rel="stylesheet" href="style/bibliotheque/css/bootstrap.min.css" />
    <link rel="stylesheet" href="style/bibliotheque/localbootstrap/bootstrap.min.css" />
    <link rel="stylesheet" href="style/bibliotheque/DataTable/css/dataTables.bootstrap4.min.css" />
    <link rel="stylesheet" href="style/bibliotheque/jquery-ui/jquery-ui.css" />
    <link rel="stylesheet" href="style/bibliotheque/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.css" />
    <link rel="stylesheet" href="style/bibliotheque/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css" />

    <link rel="stylesheet" href="style/css/ViewFrameXIndexe.css" />
    <link rel="stylesheet" href="style/css/ViewFrame.css" />
    <link rel="stylesheet" href="style/css/ViewFrameXModalPane.css" />
    <link rel="stylesheet" href="style/css/ViewFrameXOperateurs.css" />

    <script type="text/javascript" src="style/bibliotheque/localjs/jquery.min.js"></script>
    <script type="text/javascript" src="style/bibliotheque/printThis/printThis.js"></script>
    <script type="text/javascript" src="style/bibliotheque/table2excel/jquery.table2excel.js"></script>
    <script src="http://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="style/bibliotheque/localbootstrap/bootstrap.min.js"></script>
    <script type="text/javascript" src="style/bibliotheque/DataTable/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="style/bibliotheque/DataTable/js/dataTables.bootstrap4.min.js"></script>
    <script type="text/javascript" src="style/bibliotheque/jquery-ui/jquery-ui.js"></script>
    <script type="text/javascript" src="style/bibliotheque/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.js"></script>
    <script type="text/javascript" src="style/bibliotheque/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.fr.js"></script>
    <script type="text/javascript" src="style/bibliotheque/fileStyle/src/bootstrap-filestyle.min.js"></script>

    <script type="text/javascript" src="controller/ViewPaneXIndex.js"></script>
    <script type="text/javascript" src="controller/ViewPaneXIndexOptionImprime.js"></script>
    <script type="text/javascript" src="controller/ViewPaneXIndexDocumentController.js"></script>
    <script type="text/javascript" src="controller/ViewPane.js"></script>
    <script type="text/javascript" src="controller/ViewPaneUtil.js"></script>
<!--    <script type="text/javascript" src="controller/ViewPaneListe.js"></script>-->


    <script type="text/javascript" src="controller/Ajout.js"></script>

    <script type="text/javascript" src="controller/enregistrement/clients/js/LoadCient.js"></script>
    <script type="text/javascript" src="controller/enregistrement/vehicules/js/LoadVehicule.js"></script>
    <script type="text/javascript" src="controller/enregistrement/techniciens/js/LoadTechnicien.js"></script>
    <script type="text/javascript" src="controller/enregistrement/alerts/js/LoadAlert.js"></script>
    <script type="text/javascript" src="controller/programmation/js/LoadProgrammation.js"></script>
    <script type="text/javascript" src="controller/reception/js/LoadReception.js"></script>
    <script type="text/javascript" src="controller/observation/inspection/js/LoadInspection.js"></script>
    <script type="text/javascript" src="controller/observation/pointage/js/LoadPointage.js"></script>
    <script type="text/javascript" src="controller/observation/reclamation/js/LoadReclamation.js"></script>
    <script type="text/javascript" src="controller/observation/recommandation/js/LoadRecommandation.js"></script>
    <script type="text/javascript" src="controller/livraison/js/LoadLivraison.js"></script>
    <script type="text/javascript" src="controller/observation/inspection/js/LoadInspection.js"></script>
    <script type="text/javascript" src="controller/observation/recommandation/js/LoadRecommandation.js"></script>
    <script type="text/javascript" src="controller/observation/reclamation/js/LoadReclamation.js"></script>
    <script type="text/javascript" src="controller/observation/pointage/js/LoadPointage.js"></script>
    <script type="text/javascript" src="controller/operateur/js/LoadOperateur.js"></script>
    <script type="text/javascript" src="controller/ordreDeReparation/maintenance/js/LoadMaintenance.js"></script>
    <script type="text/javascript" src="controller/ordreDeReparation/maintenanceStandard/js/LoadMaintenanceStandard.js"></script>
    <script type="text/javascript" src="controller/ordreDeReparation/travauxRealises/js/LoadProgrammationActivite.js"></script>
    <script type="text/javascript" src="controller/ordreDeReparation/evolutionDesTravaux/js/LoadEvolution.js"></script>

    <script type="text/javascript" src="controller/enregistrement/clients/js/ViewPaneListeClient.js"></script>
    <script type="text/javascript" src="controller/ordreDeReparation/evolutionDesTravaux/js/ViewPaneListeEvolution.js"></script>
    <script type="text/javascript" src="controller/observation/inspection/js/ViewPaneListeInspection.js"></script>
    <script type="text/javascript" src="controller/livraison/js/ViewPaneListeLivraison.js"></script>
    <script type="text/javascript" src="controller/ordreDeReparation/maintenance/js/ViewPaneListeMaintenance.js"></script>
    <script type="text/javascript" src="controller/observation/pointage/js/ViewPaneListePointage.js"></script>
    <script type="text/javascript" src="controller/programmation/js/ViewPaneListeProgrammation.js"></script>
    <script type="text/javascript" src="controller/ordreDeReparation/travauxRealises/js/ViewPaneListeProgrammationActivite.js"></script>
    <script type="text/javascript" src="controller/reception/js/ViewPaneListeReception.js"></script>
    <script type="text/javascript" src="controller/observation/reclamation/js/ViewPaneListeReclamation.js"></script>
    <script type="text/javascript" src="controller/observation/recommandation/js/ViewPaneListeRecommandation.js"></script>
    <script type="text/javascript" src="controller/enregistrement/techniciens/js/ViewPaneListeTechnicien.js"></script>
    <script type="text/javascript" src="controller/enregistrement/vehicules/js/ViewPaneListeVehicule.js"></script>
    <script type="text/javascript" src="controller/ViewpaneAutocomplet.js"></script>
    <script type="text/javascript" src="controller/ViewPaneXModalPane.js"></script>
    <script type="text/javascript" src="controller/ViewPaneXModalUtil.js"></script>
    <script type="text/javascript" src="controller/ViewPaneXModalPaneController.js"></script>
    <script type="text/javascript" src="controller/ViewPaneXModalPaneAutocomplet.js"></script>
    <script type="text/javascript" src="controller/ViewPaneXModalPaneListe.js"></script>
    <script type="text/javascript" src="controller/ViewPaneXModalPaneAccesPrivilegie.js"></script>
    <script type="text/javascript" src="controller/ViewPaneXModalPaneAjoutUnique.js"></script>
    <script type="text/javascript" src="controller/ViewPaneXMessage.js"></script>
    <script type="text/javascript" src="controller/ViewPaneXOperateurs.js"></script>
    <script type="text/javascript" src="controller/ViewPaneXOperateursUtil.js"></script>
    <script type="text/javascript" src="controller/enregistrement/alerts/js/ViewPaneXRendezvousViewPane.js"></script>
    <script type="text/javascript" src="controller/enregistrement/alerts/js/ViewPaneXRendezvousUtil.js"></script>
    <script type="text/javascript" src="controller/ViewPaneXModification.js"></script>
    <script type="text/javascript" src="controller/ViewPaneXAfficheTousIteme.js"></script>
    <script type="text/javascript" src="controller/enregistrement/alerts/js/ViewPaneListeAlerte.js"></script>

    <script type="text/javascript" src="controller/enregistrement/clients/js/ViewPaneUtilClient.js"></script>
    <script type="text/javascript" src="controller/enregistrement/vehicules/js/ViewPaneUtilVehicule.js"></script>
    <script type="text/javascript" src="controller/enregistrement/techniciens/js/ViewpaneUtilTechnicien.js"></script>
    <script type="text/javascript" src="controller/programmation/js/ViewPaneUtilProgrammation.js"></script>
    <script type="text/javascript" src="controller/reception/js/ViewPaneUtilReception.js"></script>
    <script type="text/javascript" src="controller/ordreDeReparation/maintenance/js/ViewPaneUtilMaintenance.js"></script>
    <script type="text/javascript" src="controller/ordreDeReparation/travauxRealises/js/ViewPaneUtilProgrammeActivite.js"></script>
    <script type="text/javascript" src="controller/ordreDeReparation/evolutionDesTravaux/js/ViewPaneUtilEvolution.js"></script>
    <script type="text/javascript" src="controller/livraison/js/ViewPaneUtilLivraison.js"></script>
    <script type="text/javascript" src="controller/observation/inspection/js/ViewPaneUtilInspection.js"></script>
    <script type="text/javascript" src="controller/observation/recommandation/js/ViewPaneUtilRecommandation.js"></script>
    <script type="text/javascript" src="controller/observation/reclamation/js/ViewPaneUtilReclamation.js"></script>
    <script type="text/javascript" src="controller/observation/pointage/js/ViewPaneUtilPointage.js"></script>

    <script type="text/javascript" src="controller/enregistrement/clients/js/imprime/ViewPaneUtilPrintClient.js"></script>
    <script type="text/javascript" src="controller/enregistrement/vehicules/js/imprime/ViewPaneUtilPrintVehicule.js"></script>
    <script type="text/javascript" src="controller/enregistrement/techniciens/js/imprime/ViewPaneUtilPrintTechnicien.js"></script>
    <script type="text/javascript" src="controller/programmation/js/imprime/ViewPaneUtilPrintProgrammation.js"></script>
    <script type="text/javascript" src="controller/reception/js/imprime/ViewPaneUtilPrintReception.js"></script>
    <script type="text/javascript" src="controller/livraison/js/imprime/ViewPaneUtilPrintLivraison.js"></script>
    <script type="text/javascript" src="controller/ordreDeReparation/maintenance/js/imprime/ViewPaneUtilPrintMaintenance.js"></script>
    <script type="text/javascript" src="controller/observation/inspection/js/imprime/ViewPaneUtilPrintInspection.js"></script>
    <script type="text/javascript" src="controller/observation/recommandation/js/imprime/ViewPaneUtilPrintRecommandation.js"></script>
    <script type="text/javascript" src="controller/observation/reclamation/js/imprime/ViewPaneUtilPrintReclemation.js"></script>
    <script type="text/javascript" src="controller/observation/pointage/js/imprime/ViewPaneUtilPrintPointage.js"></script>
    <script type="text/javascript" src="controller/ordreDeReparation/travauxRealises/js/imprime/ViewPaneUtilPrintProgrammationActivite.js"></script>
    <script type="text/javascript" src="controller/enregistrement/clients/js/imprime/ViewPaneUtilPrintClientListe.js"></script>
    <script type="text/javascript" src="controller/enregistrement/vehicules/js/imprime/ViewPaneUtilPrintVehiculeListe.js"></script>
    <script type="text/javascript" src="controller/enregistrement/techniciens/js/imprime/ViewPaneUtilPrintTechnicienListe.js"></script>
    <script type="text/javascript" src="controller/programmation/js/imprime/ViewPaneUtilPrintProgrammationListe.js"></script>
    <script type="text/javascript" src="controller/reception/js/imprime/ViewPaneUtilPrintReceptionListe.js"></script>
    <script type="text/javascript" src="controller/livraison/js/imprime/ViewPaneUtilPrintLivraisonListe.js"></script>
    <script type="text/javascript" src="controller/ordreDeReparation/maintenance/js/imprime/ViewPaneUtilPrintMaintenanceListe.js"></script>
    <script type="text/javascript" src="controller/observation/inspection/js/imprime/ViewPaneUtilPrintInspectionListe.js"></script>
    <script type="text/javascript" src="controller/observation/recommandation/js/imprime/ViewPaneUtilPrintRecommandationListe.js"></script>
    <script type="text/javascript" src="controller/observation/reclamation/js/imprime/ViewPaneUtilPrintReclamationListe.js"></script>
    <script type="text/javascript" src="controller/observation/pointage/js/imprime/ViewPaneUtilPrintPointageListe.js"></script>
    <script type="text/javascript" src="controller/ordreDeReparation/travauxRealises/js/imprime/ViewPaneUtilPrintProgrammationActiviteListe.js"></script>

    <script type="text/javascript" src="controller/ViewPaneDateFonction.js"></script>
    <script type="text/javascript" src="controller/ViewPanePrintActivation.js"></script>
    <script type="text/javascript" src="controller/ViewPanePrintIndexAutreTriValeurTriAutoComplete.js"></script>

    <script type="text/javascript" src="controller/ordreDeReparation/maintenanceStandard/js/ViewPaneEventAjoutMaintenanceStandard.js"></script>

    <script type="text/javascript" src="controller/Insertion.js"></script>
    <script type="text/javascript" src="controller/enregistrement/clients/js/InsertionClient.js"></script>
    <script type="text/javascript" src="controller/enregistrement/techniciens/js/InsertionTechnicien.js"></script>
    <script type="text/javascript" src="controller/enregistrement/vehicules/js/InsertionVehicule.js"></script>
    <script type="text/javascript" src="controller/enregistrement/alerts/js/InsertionAlerte.js"></script>
    <script type="text/javascript" src="controller/programmation/js/InsertionProgrammation.js"></script>
    <script type="text/javascript" src="controller/reception/js/InsertionReception.js"></script>
    <script type="text/javascript" src="controller/operateur/js/InsertionOperateur.js"></script>
    <script type="text/javascript" src="controller/observation/pointage/js/InsertionPointage.js"></script>
    <script type="text/javascript" src="controller/observation/inspection/js/InsertionInspection.js"></script>
    <script type="text/javascript" src="controller/observation/reclamation/js/InsertionReclamation.js"></script>
    <script type="text/javascript" src="controller/observation/recommandation/js/InsertionRecommandation.js"></script>
    <script type="text/javascript" src="controller/ordreDeReparation/travauxRealises/js/InsertionProgrammationActivite.js"></script>
    <script type="text/javascript" src="controller/ordreDeReparation/maintenance/js/InsertionMaintenance.js"></script>
    <script type="text/javascript" src="controller/ordreDeReparation/maintenanceStandard/js/InsertionMaintenanceStandard.js"></script>
    <script type="text/javascript" src="controller/livraison/js/InsertionLivraison.js"></script>
    <script type="text/javascript" src="controller/administrateur/utilisateur/js/InsertionUtilisateur.js"></script>

    <script type="text/javascript" src="controller/ordreDeReparation/evolutionDesTravaux/js/ModificationEvolution.js"></script>

    <script type="text/javascript" src="controller/Suppression.js"></script>
    <script type="text/javascript" src="controller/enregistrement/clients/js/SuppressionClient.js"></script>
    <script type="text/javascript" src="controller/enregistrement/vehicules/js/SuppressionVehicule.js"></script>
    <script type="text/javascript" src="controller/enregistrement/techniciens/js/SuppressionTechnicien.js"></script>
    <script type="text/javascript" src="controller/enregistrement/alerts/js/SuppressionAlert.js"></script>
    <script type="text/javascript" src="controller/programmation/js/SuppressionProgrammation.js"></script>
    <script type="text/javascript" src="controller/reception/js/SuppressionQuickService.js"></script>
    <script type="text/javascript" src="controller/reception/js/SuppressionHighService.js"></script>
    <script type="text/javascript" src="controller/reception/js/SuppressionDevis.js"></script>
    <script type="text/javascript" src="controller/reception/js/SuppressionAssurance.js"></script>
    <script type="text/javascript" src="controller/observation/recommandation/js/SuppressionRecommandation.js"></script>
    <script type="text/javascript" src="controller/observation/inspection/js/SuppressionInspection.js"></script>
    <script type="text/javascript" src="controller/observation/reclamation/js/SuppressionReclamation.js"></script>
    <script type="text/javascript" src="controller/observation/pointage/js/SuppressionPointage.js"></script>
    <script type="text/javascript" src="controller/livraison/js/SuppressionLivraison.js"></script>
    <script type="text/javascript" src="controller/ordreDeReparation/travauxRealises/js/SuppressionProgrammationActivite.js"></script>
    <script type="text/javascript" src="controller/ordreDeReparation/maintenance/js/SuppressionMaintenance.js"></script>
    <script type="text/javascript" src="controller/ordreDeReparation/maintenanceStandard/js/SuppressionMaintenanceStandard.js"></script>

</head>
<body>
<div id="indexprintveiwlisteclientdiv" style="width: 100vw;height: 96vh;background-color: white;position: absolute;z-index: 5!important;display: none;overflow: auto;padding: 1em;"></div>
<div style="width: 100vw;height: 100vh;">
    <div id="index_head" style="background-color: #0a1f6e;border: 0px solid red;width: 100vw;height: 5vh;cursor:default;padding: 0px;">
        <div class="repertoire" style="border: 0px;height: 100%;margin: 0px; margin-left: 15vw;cursor:default"></div>
        <a class="" href="index.php" style="color: white;margin-left:2vw; font-size: 3.5vmin;text-decoration: none;cursor: default;">GESGAR</a>
        <div id="remote_crono" style="display: none;color: white;margin-left:10vw;top: 0px;height:5vh;text-decoration: none;cursor: default;position: absolute;vertical-align: middle;line-height: 5vh;"></div>

        <div class="form-check form-check-inline" style="float: right;height: 100%;">

            <b class="form-group form-check-inline nbrListShow" style="display: none;cursor:default;padding: 0px;margin: 0px; margin-right: 0.3vw;">
                <a class="input-group-addon button_glyphicon_paddin_index" id="pageMoin" title="Arri&egrave;re" style="padding: 0px; width: 2vw; height: 3vh;"><span class="glyphicon glyphicon-arrow-left" style="color: #0a1f6e;"></span></a>
                <select id="nbrListSelect" class="custom-dropdown__select custom-dropdown__select--white" title="Pat"><option>50</option><option>100</option><option>250</option><option>500</option></select>
                <a class="input-group-addon button_glyphicon_paddin_index" id="pagePlus" title="Suivante" style="padding: 0px; width: 2vw; height: 3vh;"><span class="glyphicon glyphicon-arrow-right" style="color: #0a1f6e;"></span></a>
            </b>
            <b class="button_glyphicon_round button_glyphicon_round_index" id="showModalAdd" style="margin-right: 0.3vw; display: none;"><a><span class="glyphicon glyphicon-plus"></span></a></b>
            <div class="dropdown" id="indexOption" style="height: 100%;width: 3vw;margin-right: 0.3vw;background-color: #0a1f6e;display: none;">
                <span class="glyphicon glyphicon-option-vertical" id="indexOptionBtn" style="font-size: 1.5em;width: 100%;height: 4vh;text-align: center;line-height: 4vh;vertical-align: middle;margin-top: 0.3vh;color: #d0d0d0;background-color: #0a1f6e;"></span>
                <ul class="dropdown-menu dropdown-menu-right" id="indexOptionListe" style="background-color: #0a1f6e;border-radius: 0px;border:1px solid rgb(88, 85, 113);width: 20vw;">
                    <a style="background-color: #0a1f6e;color: white;border-width: 0px;border-radius: 0px;height: 4vh;" id="" class="list-group-item indexOptionItemFile"><span class="mp_span"><label class="glyphicon glyphicon-file"></label>&emsp;<label style="font-weight: normal;">Fiche</label>&nbsp;<label style="font-weight: normal;" id="indexOptionItemFile"></label></span></a>
                </ul>
            </div>
            <img class="link_table_td" id="index_linck" style="height: 4vh; border-radius: 100%;margin-right: 0.3vw;" src="images/link.png">
            <img class="link_table_td" id="index_linck_breack" style="height: 4vh; border-radius: 100%;margin-right: 0.3vw;display: none;" src="images/link-breack.png">
            <b class="button_glyphicon_round button_glyphicon_round_index" id="logBtnId" style=""><a><span class="glyphicon glyphicon-user"></span></a></b>
        </div>
        <label id="mySpan" style="display: none;"></label>
    </div>
    <div id="index_body" style="border: 0px solid blue;width: 100vw;height: 91vh;display: flex;cursor:default;">
        <div id="index_body_menu_left" style="border: 0px solid red; width: 15vw; height: 92vh; background-color: #0a1f6e;padding-top: 2.5vh;">
            <div id="acceuil" class="panel-heading" style="border: 0px solid red;background-color: #0a1f6e;padding-right: 0px;height: 6vh;border-bottom: 1px solid rgba(255,255,255,0.5);">
                <h4 class="panel-title">
                    <a class="acceuil" data-toggle="collapse" style="text-decoration: none;font-size: 1vmax;"><b style="margin-right: 1vmax;"><img src="images/accueil.ico" style="height: 3vh;"></b><label style="font-size: 1.2vmax;color: white">Accueil</label></a>
                </h4>
            </div>
            <div>
                <div class="dropdown mp dropdown_index_menu_left_div" id="enregistrement">
                    <span class="form-check-inline  dropdown_index_menu_left_span"><b><img src="images/enregistrement.ico" style="height: 3vh;"></b><label>Enr&eacute;gistrement</label></span>
                    <ul class="dropdown-menu dropdown_menu_right_index_menu_left" id="liste_enregistrement"   x-placement="right-start">
                        <a style="background-color: #0a1f6e;color: white;border-width: 0px;border-radius: 0px;height: 4vh;" id="client" class="list-group-item mpi"><span class="mp_span">Client</span></a>
                        <a style="background-color: #0a1f6e;color: white;border-width: 0px;border-radius: 0px;height: 4vh;" id="vehicule" class="list-group-item mpi"><span class="mp_span">V&eacute;hicule</span></a>
                        <a style="background-color: #0a1f6e;color: white;border-width: 0px;border-radius: 0px;height: 4vh;" id="technicien" class="list-group-item mpi"><span class="mp_span">Technicien</span></a>
                        <a style="background-color: #0a1f6e;color: white;border-width: 0px;border-radius: 0px;height: 4vh;" id="rendezvous" class="list-group-item mpi"><span class="mp_span">Alerte</span></a>
                    </ul>
                </div>
                <div class="mp dropdown_index_menu_left_div" id="programmation">
                    <span class="form-check-inline  dropdown_index_menu_left_span"><b><img src="images/programmation.ico" style="height: 3vh;"></b><label>Programmation</label></span>
                </div>
                <div class="dropdown mp dropdown_index_menu_left_div" id="reception">
                    <span class="form-check-inline  dropdown_index_menu_left_span"><b><img src="images/reception.ico" style="height: 3vh;"></b><label>R&eacute;ception</label></span>
                    <ul class="dropdown-menu dropdown_menu_right_index_menu_left" id="liste_reception" x-placement="right-start">
                        <a style="background-color: #0a1f6e;color: white;border-width: 0px;border-radius: 0px;height: 4vh;" id="reception_quick_service" class="list-group-item mpi"><span class="mp_span">Quick Service</span></a>
                        <a style="background-color: #0a1f6e;color: white;border-width: 0px;border-radius: 0px;height: 4vh;" id="reception_high_service" class="list-group-item mpi"><span class="mp_span">High Service</span></a>
                        <a style="background-color: #0a1f6e;color: white;border-width: 0px;border-radius: 0px;height: 4vh;" id="reception_devis" class="list-group-item mpi"><span class="mp_span">Devis</span></a>
                        <a style="background-color: #0a1f6e;color: white;border-width: 0px;border-radius: 0px;height: 4vh;" id="reception_assurance" class="list-group-item mpi"><span class="mp_span">Assurance</span></a>
                    </ul>
                </div>
                <div class="dropdown mp dropdown_index_menu_left_div" id="reparation">
                    <span class="form-check-inline  dropdown_index_menu_left_span"><b><img src="images/ordreDeReparation.ico" style="height: 3vh;"></b><label>Ordre de R&eacute;paration</label></span>
                    <ul class="dropdown-menu dropdown_menu_right_index_menu_left" id="liste_reparation" x-placement="right-start">
                        <a style="background-color: #0a1f6e;color: white;border-width: 0px;border-radius: 0px;height: 4vh;" id="maintenance" class="list-group-item mpi"><span class="mp_span">Maintenance</span></a>
                        <a style="background-color: #0a1f6e;color: white;border-width: 0px;border-radius: 0px;height: 4vh;" id="maintenancestandard" class="list-group-item mpi"><span class="mp_span">Maintenance Standard</span></a>
                        <a style="background-color: #0a1f6e;color: white;border-width: 0px;border-radius: 0px;height: 4vh;" id="activites" class="list-group-item mpi"><span class="mp_span">Travaux R&eacute;alis&eacute;s</span></a>
                        <a style="background-color: #0a1f6e;color: white;border-width: 0px;border-radius: 0px;height: 4vh;" id="niveau" class="list-group-item mpi"><span class="mp_span">Evolution des travaux</span></a>
                    </ul>
                </div>
                <div class="mp dropdown_index_menu_left_div" id="livraison">
                    <span class="form-check-inline  dropdown_index_menu_left_span"><b><img src="images/livraison.ico" style="height: 3vh;"></b><label>Livraison</label></span>
                </div>
                <div class="dropdown mp dropdown_index_menu_left_div" id="observation">
                    <span class="form-check-inline  dropdown_index_menu_left_span"><b><img src="images/observation.ico" style="height: 3vh;"></b><label>Observation</label></span>
                    <ul class="dropdown-menu dropdown_menu_right_index_menu_left" id="liste_observation" style="background-color: #0a1f6e;">
                        <a style="background-color: #0a1f6e;color: white;border-width: 0px;border-radius: 0px;height: 4vh;" id="inspection" class="list-group-item mpi"><span class="mp_span">Inspection</span></a>
                        <a style="background-color: #0a1f6e;color: white;border-width: 0px;border-radius: 0px;height: 4vh;" id="recommandation" class="list-group-item mpi"><span class="mp_span">Recommandation</span></a>
                        <a style="background-color: #0a1f6e;color: white;border-width: 0px;border-radius: 0px;height: 4vh;" id="reclamation" class="list-group-item mpi"><span class="mp_span">Reclamation</span></a>
                        <a style="background-color: #0a1f6e;color: white;border-width: 0px;border-radius: 0px;height: 4vh;" id="pointage" class="list-group-item mpi"><span class="mp_span">Pointage</span></a>
                    </ul>
                </div>
                <div class="mp dropdown_index_menu_left_div" id="operateurs">
                    <span class="form-check-inline  dropdown_index_menu_left_span"><b><img src="images/operateur.ico" style="height: 3vh;"></b><label>Op&eacute;rateurs</label></span>
                </div>
                <div class="mp dropdown_index_menu_left_div" id="operateur">
                    <span class="form-check-inline  dropdown_index_menu_left_span"><b><img src="images/administrateur.ico" style="height: 3vh;"></b><label>Administrateur</label></span>
                </div>
            </div>
        </div>
        <div  id="conteneurDivContaint"  style="width: 85vw; height: 92vh; background-color: #ffffff; margin-bottom: 0px;">
            <div class="contextmenustatique" style="display: none;">
                <div class="mp dropdown_context_menu_left_div" id="modifierMenuItem"><span class="form-check-inline  dropdown_context_menu_left_span"><b class="glyphicon glyphicon-edit"></b><label>Modifier</label></span></div>
                <div class="mp dropdown_context_menu_left_div" id="supprimerMenuItem"><span class="form-check-inline  dropdown_context_menu_left_span"><b class="glyphicon glyphicon-remove"></b><label>Supprimer</label></span></div>
                <div class="mp dropdown_context_menu_left_div" id="visualiserMenuItem"><span class="form-check-inline  dropdown_context_menu_left_span"><b class="glyphicon glyphicon-eye-open"></b><label>Aper&ccedil;u</label></span></div>
                <span id="contextmenuId" style="display: none;"></span>
            </div>
            <span class="InfoLoopItem" style="background-color: rgba(255,255,255,1); border: 0.2em solid rgba(200,200,200, .2);border-style: groove;border-radius: 0.5em;padding: 0.5em;box-shadow: 0em 0em 0em 0.3em rgba(200,200,200, .2);font-size: 1.05em;display: none;"></span>
            <div class="printConteneur" style="display: none;width: 85vw;height: 92vh;">
                <div class="printParametreBody" style="width: 40%;height: 100%; position: relative; float: left;">
                    <div class="form-check form-check-inline" style="width: 100%; height: 10%;background-color: #1D2C73; color: white; padding: 1em;">
                        <div class="form-group" style="margin-right: 1vw;border: 0px solid red; width: 33%;">
                            <h6 style="margin-bottom: 2px;font-size: 13px;">Tri</h6>
                            <select id="printSelectOrdreAffichage" class="form-control" style="height: 4.5vh"><option>Avant</option><option>Apr&egrave;s</option><option>Extr&ecirc;me</option><option>Entre</option><option>Admise</option><option>Exclut</option><option>Autre</option></select>
                        </div>
                        <div class="form-group" id="printDate" style="margin-right: 1vw;border: 0px solid red; width: 33%;">
                            <h6 id="date1h6" style="margin-bottom: 2px;font-size: 13px;">Date</h6>
                            <div id="printDateCouranteDate" class="input-group date form_date"  data-date="" data-date-format="dd MM yyyy" data-link-field="">
                                <input autocomplete="off" class="form-control" id="date_prt_inf" placeholder="Date" style="height:4.5vh;font-size: 15px;font-family: 'Times New Roman';width: 100%;" >
                                <span class="input-group-addon span1date"><span class="glyphicon glyphicon-remove span2date"></span></span>
                                <span class="input-group-addon span1date"><span class="glyphicon glyphicon-calendar span2date"></span></span>
                            </div>
                        </div>
                        <div class="form-group" id="printDate2" style="display: none;border: 0px solid red; width: 33%;">
                            <h6 style="margin-bottom: 2px;font-size: 13px;">Date Sup&eacute;rieure</h6>
                            <div class="input-group date form_date" id="dateSup"  data-date="" data-date-format="dd MM yyyy" data-link-field="">
                                <input autocomplete="off" class="form-control" id="date_prt_sup" placeholder="Date" style="height:4.5vh;font-size: 15px;font-family: 'Times New Roman';width: 100%;" >
                                <span class="input-group-addon span1date"><span class="glyphicon glyphicon-remove span2date"></span></span>
                                <span class="input-group-addon span1date"><span class="glyphicon glyphicon-calendar span2date"></span></span>
                            </div>
                        </div>
                        <div class="form-group" id="printDateCourante" style="display: none;border: 0px solid red; width: 33%;">
                            <h6 style="margin-bottom: 2px;font-size: 13px;">Date Courante</h6>
                            <div id="printDateCouranteDateSelecte" style="height:4.5vh;font-size: 15px;font-family: 'Times New Roman';width: 10vw;background-color: white; color: black;overflow: auto;padding: 2px"></div>
                        </div>
                        <div class="form-group indexvaleurtri" id="" style="display: none;margin-right: 1vw;border: 0px solid red; width: 33%;">
                            <h6 style="margin-bottom: 2px;font-size: 13px;">Options de Tri</h6>
                            <select id="idexselectvaleurtri" class="form-control" style="height: 4.5vh"></select>
                        </div>
                        <div class="form-group indexvaleurtri" id="" style="display: none;margin-right: 1vw;border: 0px solid red; width: 33%;">
                            <h6 style="margin-bottom: 2px;font-size: 13px;">Valeur de Tri</h6>
                            <input id="idexinputvaleurtri" class="form-control" style="height: 4.5vh">
                        </div>
                    </div>
                    <div class="printParametre" style="width: 100%;height: 80%;"></div>
                    <div class="form-check form-check-inline" style="width: 100%; height: 10%; background-color: #1D2C73; text-align: center;line-height: 9vh;vertical-align: middle;margin-top: 73.6vh;">
                        <span class="printFootBtn" id="printFootBtnValider" style="background-color: #1D2C73; color: white;padding: 3vw ;padding-top: 2vh; padding-bottom: 2vh;">Valider</span>
                        <span class="printFootBtn" id="printFootBtnVue" style="background-color: #1D2C73; color: white;padding: 3vw ;padding-top: 2vh; padding-bottom: 2vh;">Vue</span>
                    </div>
                </div>
                <div class="printView" style="width: 60%; height: 100%; background-color: white; position: relative; float: left;overflow: auto;padding: 1em;"></div>
                <div id="dateCouranteEdite" style="display: none;position: absolute;background-color: white;color: black;width: 22vw; max-height: 72vh;overflow: auto;z-index: 10!important;margin-top: 9.2vh;margin-left: 11vw;border: 1px solid #0a1f6e;padding: 0.5vw;"></div>
            </div>
            <div class="blockDiv" style="display: none;"></div>
            <div class="mailinfoacces" style="background-color: yellow;height: 50vh;width: 50vw;display: none;"></div>
            <div style="display: none;" class="messageDiv"><h6 class="messageh6"></h6></div>
            <div id="parentConteneur" style="width: 85vw; height: 92vh;background-color: rgb(245, 245, 245);" >
                <div id="conteneur" style="width: 85vw; height: 92vh; background-color: rgb(245, 245, 245);"></div>
            </div>
        </div>
    </div>
    <div id="index_foot" style="height: 4vh;width: 100vw; background-color: #0a1f6e;position: absolute;z-index: 5!important;bottom: 0px;text-align: right;color: #fff;font-family: 'Calibri Light';cursor:default">
        <span class="form-check form-check-inline indexFootInfoLeft" style="font-size: 0.9em;display: none;">
            <span id="elementNombre" style="margin-right: 0.2vw;">0</span>
            <span id="elementNombreSecond" style="display: none;">0</span>
            <span style="margin-right: 0.2vw;">&eacute;l&eacute;ment(s) sur</span>
            <span id="elementNombreT" style="margin-right: 1vw;">0</span>
            <span id="elementNombreTSecond" style="display: none;">0</span>
            <span style="margin-right: 0.2vw;">Parcouru</span>
            <span id="elementNombreParcourir" style="margin-right: 0.2vw;">0</span>
            <span id="elementNombreParcourirSecond" style="display: none;">0</span>
        </span>
        <span id="indexFootBtnPrint" style="margin-right: 1vw; display: none;">
            <span class="printFootBtn" id="printFootBtnRetour" style="background-color: #1D2C73; color: white;font-size: 0.9em;margin-right: .5vw;padding-left: 2vw;padding-right: 2vw;">Retour</span>
            <span class="printFootBtn" id="printFootBtnImprime" style="background-color: #1D2C73; color: white;font-size: 0.9em;padding-left: 2vw;padding-right: 2vw;">Imprimer</span>
            <span class="printFootBtn" id="printFootBtnExcel" style="background-color: #1D2C73; color: white;font-size: 0.9em;padding-left: 2vw;padding-right: 2vw;">Exporter En Excel</span>
        </span>
    </div>
</div>

<?php include_once 'IndexInclude.php' ?>
<script>
    $("#remote_crono").load('controller/RemoteConnectionCrono.php');
    $(document).ready(function () {
        var theUserCurrent="<?php echo $_SESSION['userGESGAR'] ?>";
        var thepwdCurrent="<?php echo $_SESSION['LaunchGESGAR']; ?>";
        $("#NameUserId5").text(theUserCurrent);
        $("#pwdUserId5").text(thepwdCurrent);
    });
</script>

</body>
</html>