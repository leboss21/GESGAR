$(document).ready(function () {

    AdminViewListtd();
    AdminMenuBarUtilisateurMenu();

    $("#nom_utilisateur").blur(function () {
        $(this).css('border-color','#d3d9df');
    });

    $("#mot_passe_utilisateur").blur(function () {
        $(this).css('border-color','#d3d9df');
    });

    $("#viewpwdu").click(function () {
        $("#mot_passe_utilisateur").attr('type','text');
        $("#viewpwdu").hide();
        $("#hiddpwdu").show();
    });

    $("#hiddpwdu").click(function () {
        $("#mot_passe_utilisateur").attr('type','password');
        $("#viewpwdu").show();
        $("#hiddpwdu").hide();
    });
});