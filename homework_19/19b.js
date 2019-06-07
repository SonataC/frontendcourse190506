$(document).ready(function () {
    $("#rr").click(function () {
        $('#rb').hide(2000);
        $('#rg').hide(2000);
    });
});
$("#rr").dblclick(function () {
    $('#rb').show(2000);
    $('#rg').show(2000);
});
$(document).ready(function () {
    $("#rb").click(function () {
        $('#rr').hide(2000);
        $('#rg').hide(2000);
    });
});
$("#rb").dblclick(function () {
    $('#rr').show(2000);
    $('#rg').show(2000);
});$(document).ready(function () {
    $("#rg").click(function () {
        $('#rb').hide(2000);
        $('#rr').hide(2000);
    });
});
$("#rg").dblclick(function () {
    $('#rb').show(2000);
    $('#rr').show(2000);
});