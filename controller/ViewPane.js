$(document).ready(function () {
    $("#autreAshow").click(function () {
        $("#autreAshowDiv").hide();
        $("#autreAhiddenDiv").show();
        $("#livraisonAutreTravauxRealise").show();
    });

    $("#autreAhidden").click(function () {
        $("#autreAshowDiv").show();
        $("#autreAhiddenDiv").hide();
        $("#livraisonAutreTravauxRealise").hide();
    });

    $(".chercheProgActInput").on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $(".chercheProgActDiv tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    $(".chercheProgActInputAll").on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $(".chercheProgActDivAll tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    $(document).bind("contextmenu",function (e) {
        return false;
    });

});
