$(document).ready(function(){

    $("#connecterLoginId").click(function () {

        var dataSerialize=$("#LoginFormm").serialize();
        $('#resultLog').load('controller/login/php/LoginControl.php',dataSerialize);
    });

    $("#nomIdUser").keypress(function (e) {

        var code=e.which;
        if ( code==13 ){
            var dataSerialize=$("#LoginFormm").serialize();
            $('#resultLog').load('controller/login/php/LoginControl.php',dataSerialize);
        }else {

        }
    });

    $("#passIdUser").keypress(function (e) {

        var code=e.which;
        if ( code==13 ){
            var dataSerialize=$("#LoginFormm").serialize();
            $('#resultLog').load('controller/login/php/LoginControl.php',dataSerialize);
        }else {

        }
    });

   $(function () {
       var modalW = $('#logincont').css('width');
       var modalH = $('#logincont').css('height');
       var accueilW = $('#imag').css('width');
       var accueilH = $('#imag').css('height');

       var pX = 0;
       var pY = 0;

       modalW = parseFloat(modalW);
       modalH = parseFloat(modalH);
       accueilW = parseFloat(accueilW);
       accueilH = parseFloat(accueilH);

       pX = (accueilW/2)-modalW;
       pY = ((accueilH/2)-(modalH/2))-30;

       $('#login').offset({top:pY});
       $("#login").modal();
   });

});