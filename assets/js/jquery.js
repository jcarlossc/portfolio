$(document).ready(function() {

    $(".section-1").show();
    $(".section-2").hide();
    $(".section-3").hide();
    $(".section-4").hide();
    $(".section-5").hide();
    $(".section-6").hide();

    $("#link-1").click(function() {

        $(".section-1").show(500);
        $(".section-2").hide(500);
        $(".section-3").hide(500);
        $(".section-4").hide(500);
        $(".section-5").hide(500);
        $(".section-6").hide(500);
    });
    $("#link-2").click(function() {

        $(".section-1").hide(500);
        $(".section-2").show(500);
        $(".section-3").hide(500);
        $(".section-4").hide(500);
        $(".section-5").hide(500);
        $(".section-6").hide(500);
    });
    $("#link-3").click(function() {

        $(".section-1").hide(500);
        $(".section-2").hide(500);
        $(".section-3").show(500);
        $(".section-4").hide(500);
        $(".section-5").hide(500);
        $(".section-6").hide(500);
    });
    $("#link-4").click(function() {

        $(".section-1").hide(500);
        $(".section-2").hide(500);
        $(".section-3").hide(500);
        $(".section-4").show(500);
        $(".section-5").hide(500);
        $(".section-6").hide(500);
    });
    $("#link-5").click(function() {

        $(".section-1").hide(500);
        $(".section-2").hide(500);
        $(".section-3").hide(500);
        $(".section-4").hide(500);
        $(".section-5").show(500);
        $(".section-6").hide(500);
    });
    $("#link-6").click(function() {

        $(".section-1").hide(500);
        $(".section-2").hide(500);
        $(".section-3").hide(500);
        $(".section-4").hide(500);
        $(".section-5").hide(500);
        $(".section-6").show(500);
    });

});
