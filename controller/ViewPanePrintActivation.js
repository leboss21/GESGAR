$(document).ready(function () {
    $('#printFootBtnImprime').on('click', function () {
        $("#indexprintveiwlisteclientdiv").printThis({

        });
    });

    $('#printFootBtnExcel').on('click', function () {
        $("#indexprintveiwlisteclientdiv").table2excel({
            filename:"liste"
        });
    });


});