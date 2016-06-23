$(document).ready(function () {


    $('#first_home').on('mousewheel DOMMouseScroll MozMousePixelScroll', function (event, delta) {
        if (delta < 0) {
            $("#second_home").css({top: 0});
            $(".video1").fadeOut("200");
            $("#first_home").css("background-color", "black");
            $("#second_home").fadeIn("100");
            $("#btn-1").removeClass("active");
            $("#btn-2").addClass("active");
        }

    });


    $('#second_home').on('mousewheel DOMMouseScroll MozMousePixelScroll', function (event, delta) {
        if (delta > 0) {
            $("#second_home").css("top", "100%");
            $("#first_home").css("background-color", "transparent");
            $(".video1").fadeIn("200");
            $("#btn-1").addClass("active");
            $("#btn-2").removeClass("active");
        }
        if (delta < 0) {
            $("#trois_home").css({top: 0});
            /* $("#second_home").css("background-color","black");*/
            $("#trois_home").fadeIn("100");
            $("#btn-3").addClass("active");
            $("#btn-2").removeClass("active");
        }

    });

    $('#trois_home').on('mousewheel DOMMouseScroll MozMousePixelScroll', function (event, delta) {
        if (delta > 0) {
            $("#trois_home").css("top", "100%");
            $("#second_home").css("top", "0");
            $("#btn-2").addClass("active");
            $("#btn-3").removeClass("active");
        }

        if (delta < 0) {
            $("#quatre_home").css({top: 0});
            $("#quatre_home").fadeIn("100");
            $("#btn-4").addClass("active");
            $("#btn-3").removeClass("active");
        }

    });

    $('#quatre_home').on('mousewheel DOMMouseScroll MozMousePixelScroll', function (event, delta) {
        if (delta > 0) {
            $("#quatre_home").css("top", "100%");
            $("#trois_home").css("top", "0");
            $("#btn-4").removeClass("active");
            $("#btn-3").addClass("active");
        }

    });


    /*PAGE PROJET */

    var $project = $(".list_projet").children();
    var indexMax = $project.length;

    var $bgproject = $(".bg_project").children();
    var projectMax = $bgproject.length;
    var index = 0;
    console.log(projectMax);


    var nbrProject = 1;


    $(document).on('mousewheel DOMMouseScroll MozMousePixelScroll', function (event, delta) {
        if (delta < 0) {
            if (index == indexMax - 1) {
                return;
            }
            $bgproject.eq(index).css("top", "100%");
            $project.eq(index).removeClass("active");
            index++;
            $bgproject.eq(index).css("top", "0");
            $(".title_project").css("top", 50 + (-index * 10) + "%");
            $project.eq(index).addClass("active");
        }

        if (delta > 0) {
            if (index == 0) {
                return;
            }
            $bgproject.eq(index).css("top", "100%");
            $project.eq(index).removeClass("active");
            index--;
            $bgproject.eq(index).css("top", "0");
            $(".title_project").css("top", 50 - (index * 10) + "%");
            $project.eq(index).addClass("active");
        }

    });

    $(".list_projet li").click(function () {
        nbrProject = $(this).attr("id").replace("btn_project_", "");
        nbrProject = parseInt(nbrProject);



        if(index < nbrProject ) {
            if (index == indexMax - 1) {
                return;
            }
            $bgproject.eq(index).css("top", "100%");
            $project.eq(index).removeClass("active");
            index++;
            $bgproject.eq(index).css("top", "0");
            $(".title_project").css("top", 50 + (-index * 10) + "%");
            $project.eq(index).addClass("active");
        }

        if(index > nbrProject ) {
            if (index == 0) {
                return;
            }
            $bgproject.eq(index).css("top", "100%");
            $project.eq(index).removeClass("active");
            index--;
            $bgproject.eq(index).css("top", "0");
            $(".title_project").css("top", 50 - (index * 10) + "%");
            $project.eq(index).addClass("active");
        }
    });



});

