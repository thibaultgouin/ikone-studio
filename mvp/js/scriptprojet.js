$(document).ready(function () {

    var index = 0;

    var $project = $(".list_projet").children();
    var indexMax = $project.length;

    var $bgproject = $(".bg_project").children();
    var projectMax = $bgproject.length;


    var scrollTime = true;
    var nbrProject = 0;



    /* FIN HOME PAGE */

    $(document).on('mousewheel DOMMouseScroll MozMousePixelScroll', function (event, delta) {

        if (delta < 0) {
            projectDown();
        }

        if (delta > 0) {
            projectUp();
        }


        $(".list_projet li").click(function () {
            nbrProject = $(this).attr("id").replace("btn_project_", "");
            nbrProject = parseInt(nbrProject);

            if (index < nbrProject) {
                projectDown();
            }

            if (index > nbrProject) {
                projectUp();
            }
        });

    });

    function projectDown() {
        if (index == indexMax - 1 || scrollTime == false) {
            return;
        }
        scrollTime = false;
        $bgproject.eq(index).css("top", "100%");
        $project.eq(index).removeClass("active");
        index++;
        $bgproject.eq(index).css("top", "0");
        $(".title_project").css("top", 50 + (-index * 10) + "%");
        $project.eq(index).addClass("active");
        setTimeout(function () {
            scrollTime = true;
        }, 800);
        $(".design-2").css("top", "30%");
    }


    function projectUp() {
        if (index == 0 || scrollTime == false) {
            return;
        }
        scrollTime = false;
        $bgproject.eq(index).css("top", "100%");
        $project.eq(index).removeClass("active");
        index--;
        $bgproject.eq(index).css("top", "0");
        $(".title_project").css("top", 50 - (index * 10) + "%");
        $project.eq(index).addClass("active");
        setTimeout(function () {
            scrollTime = true;
        }, 800);
        $(".design-2").css("top", "10%");
    }


    if ($(window).width() < 1180) {

        function projectDown() {
            if (index == indexMax - 1 || scrollTime == false) {
                return;
            }
            scrollTime = false;
            $bgproject.eq(index).css("top", "100%");
            $project.eq(index).removeClass("active");
            index++;
            $bgproject.eq(index).css("top", "0");
            $project.eq(index).addClass("active");
            setTimeout(function () {
                scrollTime = true;
            }, 800);
            $(".design-2").css("top", "30%");
        }

        function projectUp() {
            if (index == 0 || scrollTime == false) {
                return;
            }
            scrollTime = false;
            $bgproject.eq(index).css("top", "100%");
            $project.eq(index).removeClass("active");
            index--;
            $bgproject.eq(index).css("top", "0");
            $project.eq(index).addClass("active");
            setTimeout(function () {
                scrollTime = true;
            }, 800);
            $(".design-2").css("top", "10%");
        }

    }


    /* ######## FIN PAGE PROJET ######## */


});