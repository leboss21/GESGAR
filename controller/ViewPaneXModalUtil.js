function Date_formatUp(date){
    var newdate = '';
    var dateDivise = date.split('-');
    var jour = dateDivise[2];
    var mois = dateDivise[1];
    var annee = dateDivise[0];

    if(mois == '01')mois = 'Janvier';
    if(mois == '02')mois = 'Février';
    if(mois == '03')mois = 'Mars';
    if(mois == '04')mois = 'Avril';
    if(mois == '05')mois = 'Mai';
    if(mois == '06')mois = 'Juin';
    if(mois == '07')mois = 'Juillet';
    if(mois == '08')mois = 'Août';
    if(mois == '09')mois = 'Septembre';
    if(mois == '10')mois = 'Octobre';
    if(mois == '11')mois = 'Novembre';
    if(mois == '12')mois = 'Décembre';

    newdate = jour+' '+mois+' '+annee;

    return newdate;
}

function ModalClentInsertion() {
    $('.modalHeaderAjoutModifNewAdd').show();
    $('#check_client_modal').show();
    $('.modalFooterAjoutModifSelect').show();
    $('.modalFooterAjoutModif').css('padding-right','2vw');
    $("#validerClientAdd").text("Valider");
    $("#ModalAddClient").modal({backdrop: "static"});
}

function ModalClentModification() {
    $('.modalHeaderAjoutModifNewAdd').hide();
    $('#check_client_modal').hide();
    $('.modalFooterAjoutModifSelect').hide();
    $('.modalFooterAjoutModif').css('padding-right','17vw');
    $("#validerClientAdd").text("Modifier");
    $("#ModalAddClient").modal({backdrop: "static"});
}

function ModalVehiculeInsertion() {
    $('.modalHeaderAjoutModifNewAdd').show();
    $('#check_vehicule_modal').show();
    $('.modalFooterAjoutModifSelect').show();
    $('.modalFooterAjoutModif').css('padding-right','2vw');
    $("#validerVehiculeAdd").text("Valider");
    $("#ModalAddVehicule").modal({backdrop: "static"});
}

function ModalVehiculeModification() {
    $('.modalHeaderAjoutModifNewAdd').hide();
    $('#check_vehicule_modal').hide();
    $('.modalFooterAjoutModifSelect').hide();
    $('.modalFooterAjoutModif').css('padding-right','17vw');
    $("#validerVehiculeAdd").text("Modifier");
    $("#ModalAddVehicule").modal({backdrop: "static"});
}

function ModalTechnicienInsertion() {
    $('#check_technicien_modal').show();
    $('.modalFooterAjoutModifSelect').show();
    $('.modalFooterAjoutModif').css('padding-right','2vw');
    $("#validerTechAdd").text("Valider");
    $("#ModalAddTechnicien").modal({backdrop: "static"});
}

function ModalTechnicienModification() {
    $('#check_technicien_modal').hide();
    $('.modalFooterAjoutModifSelect').hide();
    $('.modalFooterAjoutModif').css('padding-right','17vw');
    $("#validerTechAdd").text("Modifier");
    $("#ModalAddTechnicien").modal({backdrop: "static"});
}

function ModalProgrammationInsertion() {
    $('.modalHeaderAjoutModifNewAdd').show();
    $('.modalFooterAjoutModifSelect').show();
    $('.modalFooterAjoutModif').css('padding-right','3vw');
    $("#validerProgrammationAdd").text("Valider");
    $("#ModalAddProgrammation").modal({backdrop: "static"});
}

function ModalProgrammationModification() {
    $('.modalHeaderAjoutModifNewAdd').hide();
    $('.modalFooterAjoutModifSelect').hide();
    $('.modalFooterAjoutModif').css('padding-right','17vw');
    $("#validerProgrammationAdd").text("Modifier");
    $("#ModalAddProgrammation").modal({backdrop: "static"});
}


function ModalReceptionInsertion() {
    $("#check_R_modal").prop('checked',false);
    $('#menu_R_modal').val('');
    $("#resultDivReception").hide();
    $('.check_R_modal').show();
    $('.modalFooterAjoutModifSelect').show();
    $('.modalFooterAjoutModif').css('padding-right','2vw');
    $('.validerReception').text('Valider');
    $("#ModalReception").modal({backdrop: "static"});
}

function ModalReceptionModification() {
    $('.check_R_modal').hide();
    $('.modalFooterAjoutModifSelect').hide();
    $('.modalFooterAjoutModif').css('padding-right','17vw');
    $('.validerReception').text("Modifier");
    $("#ModalReception").modal({backdrop: "static"});
}

function ModalReceptionQS() {
    $("#modalRHeaderText").text('Quick Services');
    $("#typeReception").val('quick service');
    $("#menu_R_modal option[value='1']").text('High Service');
    $("#menu_R_modal option[value='2']").text('Devis');
    $("#menu_R_modal option[value='3']").text('Assurance');
}

function ModalReceptionHS() {
    $("#modalRHeaderText").text('High Services');
    $("#typeReception").val('high service');
    $("#menu_R_modal option[value='1']").text('Quick Service');
    $("#menu_R_modal option[value='2']").text('Devis');
    $("#menu_R_modal option[value='3']").text('Assurance');
}

function ModalReceptionDe() {
    $("#modalRHeaderText").text('Devis');
    $("#typeReception").val('devis');
    $("#menu_R_modal option[value='1']").text('Quick Service');
    $("#menu_R_modal option[value='2']").text('High Service');
    $("#menu_R_modal option[value='3']").text('Assurance');
}

function ModalReceptionAs() {
    $("#modalRHeaderText").text('Assurance');
    $("#typeReception").val('assurance');
    $("#menu_R_modal option[value='1']").text('Quick Service');
    $("#menu_R_modal option[value='2']").text('High Service');
    $("#menu_R_modal option[value='3']").text('Devis');
}

function ModalRevisionInsertion() {
    $('.modalFooterAjoutModifSelect').show();
    $("#validerRevisionAdd").text("Valider");
    $("#ModalAddRendezvousRevision").modal({backdrop: "static"});
}

function ModalRevisionModification() {
    $('.modalFooterAjoutModifSelect').hide();
    $("#validerRevisionAdd").text("Modifier");
    $("#ModalAddRendezvousRevision").modal({backdrop: "static"});
}

function ModalVisiteInsertion() {
    $('.modalFooterAjoutModifSelect').show();
    $("#validerVisiteAdd").text("Valider");
    $("#ModalAddRendezvousVisite").modal({backdrop: "static"});
}

function ModalVisiteModification() {
    $('.modalFooterAjoutModifSelect').hide();
    $("#validerVisiteAdd").text("Modifier");
    $("#ModalAddRendezvousVisite").modal({backdrop: "static"});
}

function ModalAssuranceInsertion() {
    $('.modalFooterAjoutModifSelect').show();
    $("#validerAssuranceAdd").text("Valider");
    $("#ModalAddRendezvousAssurance").modal({backdrop: "static"});
}

function ModalAssuranceModification() {
    $('.modalFooterAjoutModifSelect').hide();
    $("#validerAssuranceAdd").text("Modifier");
    $("#ModalAddRendezvousAssurance").modal({backdrop: "static"});
}

function ModalGarantieInsertion() {
    $('.modalFooterAjoutModifSelect').show();
    $("#validerGarantieAdd").text("Valider");
    $("#ModalAddRendezvousGarantie").modal({backdrop: "static"});
}

function ModalGarantieModification() {
    $('.modalFooterAjoutModifSelect').hide();
    $("#validerGarantieAdd").text("Modifier");
    $("#ModalAddRendezvousGarantie").modal({backdrop: "static"});
}

function ModalTMVInsertion() {
    $("#validerAddTMV").text('Valider');
    $("#libelleTMV").val('');
    $(".adminAjoutModif").show();
    $(".adminAjoutModifModal").css('width','25vw');
    $("#validerAddTMV").css('margin-left','9vw');
    $("#resultDivMTV").css('width','25vw');
    $("#ModalAddTMV").modal({backdrop: "static"});
}

function ModalTMInsertion() {
    $("#validerAddTM").text('Valider');
    $("#libelleTM").val('');
    $(".adminAjoutModif").show();
    $(".adminAjoutModifModal").css('width','25vw');
    $("#validerAddTM").css('margin-left','9vw');
    $("#resultDivTM").css('width','25vw');
    $("#ModalAddTM").modal({backdrop: "static"});
}

function ModalSTInsertion() {
    $("#validerAddST").text('Valider');
    $("#libelleST").val('');
    $(".adminAjoutModif").show();
    $(".adminAjoutModifModal").css('width','25vw');
    $("#validerAddST").css('margin-left','9vw');
    $("#resultDivST").css('width','25vw');
    $("#ModalAddST").modal({backdrop: "static"});
}

function ModalStTInsertion() {
    $("#validerAddStT").text('Valider');
    $("#libelleStT").val('');
    $(".adminAjoutModif").show();
    $(".adminAjoutModifModal").css('width','25vw');
    $("#validerAddStT").css('margin-left','9vw');
    $("#resultDivStT").css('width','25vw');
    $("#ModalAddStT").modal({backdrop: "static"});
}

function ModalGCInsertion() {
    $("#validerAddGC").text('Valider');
    $("#libelleGC").val('');
    $(".adminAjoutModif").show();
    $(".adminAjoutModifModal").css('width','25vw');
    $("#validerAddGC").css('margin-left','9vw');
    $("#resultDivGC").css('width','25vw');
    $("#ModalAddGC").modal({backdrop: "static"});
}

function ModalTMVModification() {
    $("#validerAddTMV").text('Modifier');
    $(".adminAjoutModif").hide();
    $(".adminAjoutModifModal").css('width','18vw');
    $("#validerAddTMV").css('margin-left','5.5vw');
    $("#resultDivMTV").css('width','18vw');
    $("#ModalAddTMV").modal({backdrop: "static"});
}

function ModalTMModification() {
    $("#validerAddTM").text('Modifier');
    $(".adminAjoutModif").hide();
    $(".adminAjoutModifModal").css('width','18vw');
    $("#validerAddTM").css('margin-left','5.5vw');
    $("#resultDivTM").css('width','18vw');
    $("#ModalAddTM").modal({backdrop: "static"});
}

function ModalSTModification() {
    $("#validerAddST").text('Modifier');
    $(".adminAjoutModif").hide();
    $(".adminAjoutModifModal").css('width','18vw');
    $("#validerAddST").css('margin-left','5.5vw');
    $("#resultDivST").css('width','18vw');
    $("#ModalAddST").modal({backdrop: "static"});
}

function ModalStTModification() {
    $("#validerAddStT").text('Modifier');
    $(".adminAjoutModif").hide();
    $(".adminAjoutModifModal").css('width','18vw');
    $("#validerAddStT").css('margin-left','5.5vw');
    $("#resultDivStT").css('width','18vw');
    $("#ModalAddStT").modal({backdrop: "static"});
}

function ModalGCModification() {
    $("#validerAddGC").text('Modifier');
    $(".adminAjoutModif").hide();
    $(".adminAjoutModifModal").css('width','18vw');
    $("#validerAddGC").css('margin-left','5.5vw');
    $("#resultDivGC").css('width','18vw');
    $("#ModalAddGC").modal({backdrop: "static"});
}




