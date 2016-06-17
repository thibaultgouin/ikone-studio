$(document).ready(function () {

    $("#btn-1").click(function() {
        $("#second_home").css("top","100%");
        $("#first_home").css("background-color","transparent");
        $(".video1").fadeIn("200");
        $("#trois_home").css("top","100%");
        $(this).addClass("active");
        $("#btn-2").removeClass("active");
        $("#btn-3").removeClass("active");
        $("#btn-4").removeClass("active");
    });

    $("#btn-2").click(function() {
            $("#second_home").css({top: 0});
            $(".video1").fadeOut("200");
            $("#first_home").css("background-color","black");
            $("#second_home").fadeIn("100");
            $("#trois_home").css("top","100%");
            $(this).addClass("active");
            $("#btn-1").removeClass("active");
            $("#btn-3").removeClass("active");
            $("#btn-4").removeClass("active");
    });

    $("#btn-3").click(function() {
        $("#trois_home").css({top: 0});
        $("#trois_home").fadeIn("100");
        $(this).addClass("active");
        $("#btn-1").removeClass("active");
        $("#btn-2").removeClass("active");
        $("#btn-4").removeClass("active");
    });

    $("#btn-4").click(function() {
        $("#quatre_home").css({top: 0});
        $("#quatre_home").fadeIn("100");
        $(this).addClass("active");
        $("#btn-1").removeClass("active");
        $("#btn-2").removeClass("active");
        $("#btn-3").removeClass("active");

    });


});





