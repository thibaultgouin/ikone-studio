$(document).ready(function () {

    $("#first_home").bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 < 0) {

            $("#second_home").css({top: 0});
            $(".video1").fadeOut("200");
            $("#first_home").css("background-color","black");
            $("#second_home").fadeIn("100");
        }

    });

    $("#second_home").bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            $("#second_home").css("top","100%");
            $("#first_home").css("background-color","transparent");
            $(".video1").fadeIn("200");
        }
        else{
            $("#trois_home").css({top: 0});
            /* $("#second_home").css("background-color","black");*/
            $("#trois_home").fadeIn("100");
        }


    });

    $("#trois_home").bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            $("#trois_home").css("top","100%");
            $("#second_home").css("top","0");

        }

        else{
            $("#quatre_home").css({top: 0});
            $("#quatre_home").fadeIn("100");
        }

    });

    $("#quatre_home").bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            $("#quatre_home").css("top","100%");
            $("#trois_home").css("top","0");

        }

    });





    /*PAGE EQUIPE */

    $("#equipe_1").bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 < 0) {

            $("#equipe_2").css({top: 0});
            $("#equipe_1").css("background-color","black");
            $("#equipe_2").fadeIn("100");
        }

    });

    $("#equipe_2").bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            $("#equipe_2").css("top","100%");
            $("#equipe_1").css("background-color","transparent");
        }



    });

});

