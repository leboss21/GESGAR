$(document).ready(function () {

    $(document).keydown(function (e) {

        if((e.ctrlKey==true || e.ctrlKey=='91')  && (e.which == '61' || e.which == '107' || e.which == '173' || e.which == '109' || e.which == '187' || e.which == '189')){
            e.preventDefault();
        }

    });

    $(document).bind('mousewheel DOMMouseScroll', function (e) {
        if(e.ctrlKey == true){
            e.preventDefault();
        }
    });

});