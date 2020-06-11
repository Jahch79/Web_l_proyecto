$(document).ready(function () {

    $('#sel1').on('change', function () {

        var selectValor = '#'+ $(this).val();
        $('#control').children('div').hide();
        $('#control').children(selectValor).show();

    });

});
