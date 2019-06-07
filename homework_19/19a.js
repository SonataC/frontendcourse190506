$(document).ready(function(){
    $("#hide").mouseenter(function(){
        $('p').hide(1000);
    });
});
$("#hide").mouseleave(function(){
    $('p').show(1000);
});