$(document).ready(function () {

    $("#first_home").bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 < 0) {

            $("#second_home").css({top: 0});
            $(".video1").fadeOut("200");
            $("#first_home").css("background-color","black");
            $("#second_home").fadeIn("100");
            $("#btn-1").removeClass("active");
            $("#btn-2").addClass("active");
        }

    });

    $("#second_home").bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            $("#second_home").css("top","100%");
            $("#first_home").css("background-color","transparent");
            $(".video1").fadeIn("200");
            $("#btn-1").addClass("active");
            $("#btn-2").removeClass("active");
        }
        else{
            $("#trois_home").css({top: 0});
            /* $("#second_home").css("background-color","black");*/
            $("#trois_home").fadeIn("100");
            $("#btn-3").addClass("active");
            $("#btn-2").removeClass("active");
        }


    });

    $("#trois_home").bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            $("#trois_home").css("top","100%");
            $("#second_home").css("top","0");
            $("#btn-2").addClass("active");
            $("#btn-3").removeClass("active");
        }

        else{
            $("#quatre_home").css({top: 0});
            $("#quatre_home").fadeIn("100");
            $("#btn-4").addClass("active");
            $("#btn-3").removeClass("active");
        }

    });

    $("#quatre_home").bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            $("#quatre_home").css("top","100%");
            $("#trois_home").css("top","0");
            $("#btn-4").removeClass("active");
            $("#btn-3").addClass("active");
        }

    });





    /*PAGE PROJET */


   $("#projet_1").bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 < 0) {
            $("#projet_1").css("top","100%");
            $("#projet_2").css("top","0");
            $(".title_project").css("top","40%");
            $("#btn_project_1").removeClass("active");
            $("#btn_project_2").addClass("active");

        }

    });

    $("#projet_2").bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            $("#projet_1").css("top","0");
            $("#projet_2").css("top","100%");
            $(".title_project").css("top","50%");
            $("#btn_project_2").removeClass("active");
            $("#btn_project_1").addClass("active");
        }

    });

    $("#btn_project_1").click(function() {
        $("#projet_1").css("top","0");
        $("#projet_2").css("top","100%");
        $(".title_project").css("top","50%");
        $("#btn_project_2").removeClass("active");
        $("#btn_project_1").addClass("active");

    });


    $("#btn_project_2").click(function() {
        $("#projet_1").css("top","100%");
        $("#projet_2").css("top","0");
        $(".title_project").css("top","40%");
        $("#btn_project_1").removeClass("active");
        $("#btn_project_2").addClass("active");
    });
});

