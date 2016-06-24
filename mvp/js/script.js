$(document).ready(function () {

    var index = 0;

    var $project = $(".list_projet").children();
    var indexMax = $project.length;

    var $bgproject = $(".bg_project").children();
    var projectMax = $bgproject.length;


    var scrollTime = true;
    var nbrProject = 0;


    var $bghome = $(".list_home").children();
    var homeMax = $bghome.length;
    console.log($bghome.length + "nbr home");

    var $menuDotMenu = $(".dotMenu ul").children();
    var menuDotMax = $menuDotMenu.length;
    console.log($menuDotMenu.length + "nbr menu dot");


    /* ######## HOME PROJET ######## */

    $(document).on('mousewheel DOMMouseScroll MozMousePixelScroll', function (event, delta) {

        /* $(".dotMenu li").click(function () {
         nbrHome = $(this).attr("id").replace("btn-", "");
         nbrHome = parseInt(nbrHome);
         console.log(nbrHome + "numero");
         }*/

        if (delta < 0) {
            homeDown();
        }


        if (delta > 0) {
            homeUp();

        }

    });


    function homeDown() {
        if (index == homeMax - 1 || scrollTime == false) {
            return;
        }
        console.log(index + "nbr index");
        scrollTime = false;
        $menuDotMenu.eq(index).removeClass("active");
        index++;
        console.log(index + "nbr index");
        $bghome.eq(index).css("top", "0");
        $menuDotMenu.eq(index).addClass("active");
        setTimeout(function () {
            scrollTime = true;
        }, 1100);

    }

    function homeUp() {
        if (index == 0 || scrollTime == false) {
            return;
        }
        scrollTime = false;
        $bghome.eq(index).css("top", "100%");
        $menuDotMenu.eq(index).removeClass("active");
        index--;
        $bghome.eq(index).css("top", "0");
        $menuDotMenu.eq(index).addClass("active");
        setTimeout(function () {
            scrollTime = true;
        }, 1100);

    }



    /****** FIN HOME PAGE ****/

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


    /* ######## FIN PAGE PROJET ######## */


});

