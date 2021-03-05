function SuppressionReussie() {
    $('.messageh6').text("Suppression effectu\351e");
    $('.messageh6').css('color','white');
    $('.messageh6').css('padding-right','1vw');
    $('.messageh6').css('padding-left','1vw');
    $('.messageDiv').css('background','forestgreen');
    $('.messageDiv').css('opacity','1');
    $('.messageDiv').slideToggle(1000);

    setTimeout(function () {
        $('.messageDiv').slideToggle(1000);
    },3000);
}

function SuppressionEchoue() {
    $('.messageh6').text("Une erreur s'est produite.\nLa suppression a \351chou\351.");
    $('.messageh6').css('color','white');
    $('.messageh6').css('padding-right','1vw');
    $('.messageh6').css('padding-left','1vw');
    $('.messageDiv').css('background','lightcoral');
    $('.messageDiv').css('opacity','1');
    $('.messageDiv').slideToggle(1000);

    setTimeout(function () {
        $('.messageDiv').slideToggle(1000);
    },3000);
}

function ModificationReussie() {
    $('.messageh6').text("Modification effectu\351e");
    $('.messageh6').css('color','white');
    $('.messageh6').css('padding-right','1vw');
    $('.messageh6').css('padding-left','1vw');
    $('.messageDiv').css('background','forestgreen');
    $('.messageDiv').css('opacity','1');
    $('.messageDiv').slideToggle(1000);

    setTimeout(function () {
        $('.messageDiv').slideToggle(1000);
    },3000);
}

function InformationNonDisponible() {
    $('.messageh6').text("Aucune information disponible");
    $('.messageh6').css('color','white');
    $('.messageh6').css('padding-right','1vw');
    $('.messageh6').css('padding-left','1vw');
    $('.messageDiv').css('background','lightcoral');
    $('.messageDiv').css('opacity','1');
    $('.messageDiv').slideToggle(1000);

    setTimeout(function () {
        $('.messageDiv').slideToggle(1000);
    },3000);
}

function ConfirmationLose() {
    $('.messageh6').css('color','white');
    $('.messageh6').css('padding-right','1vw');
    $('.messageh6').css('padding-left','1vw');
    $('.messageDiv').css('background','lightcoral');
    $('.messageDiv').css('opacity','1');
    setTimeout(function () {
        $('.messageDiv').slideToggle(1000);
    },50);

    setTimeout(function () {
        $('.messageDiv').slideToggle(1000);
    },3000);
}

function ConfirmationSuccess() {
    $('.messageh6').css('color','white');
    $('.messageh6').css('padding-right','1vw');
    $('.messageh6').css('padding-left','1vw');
    $('.messageDiv').css('background','forestgreen');
    $('.messageDiv').css('opacity','1');
    setTimeout(function () {
        $('.messageDiv').slideToggle(1000);
    },50);

    setTimeout(function () {
        $('.messageDiv').slideToggle(1000);
    },3000);
}