$(document).ready(function () {

    var index = 0;

    var $project = $(".list_projet").children();
    var indexMax = $project.length;

    var $bgproject = $(".bg_project").children();
    var projectMax = $bgproject.length;


    var scrollTime = true;
    var nbrProject = 0;
    var nbrHome = 0;

    var $bghome = $(".list_home").children();
    var homeMax = $bghome.length;
    console.log($bghome.length + "nbr home");

    var $menuDotMenu = $(".dotNav ul").children();
    var menuDotMax = $menuDotMenu.length;
    console.log($menuDotMenu.length + "nbr menu dot");


    /* ######## HOME PAGE ######## */

    /* ####### LOADER######## */
    $(window).load(function() {

        setTimeout(function () {
        $("#loading_home").css("margin-left","100%");
        }, 3500);
    });


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

    $(".dotNav ul li").click(function () {
        nbrHome = $(this).attr("id").replace("btn-", "");
        nbrHome = parseInt(nbrHome);


        if (index < nbrHome) {
            scrollTime = false;
            $menuDotMenu.eq(index).find('a').removeClass("active");
            index++;
            $bghome.eq(index).css("top", "0");
            $menuDotMenu.eq(index).find('a').addClass("active");
            $bghome.removeClass("current");
            $bghome.eq(index).addClass("current");

            setTimeout(function () {
                scrollTime = true;
            }, 1000);

        }

        if (index >= nbrHome) {
            scrollTime = false;
            $bghome.eq(index).css("top", "100%");
            $menuDotMenu.eq(index).find('a').removeClass("active");
            index--;
            $bghome.eq(index).css("top", "0");
            $menuDotMenu.eq(index).find('a').addClass("active");
            $bghome.removeClass("current");
            $bghome.eq(index).addClass("current");
            setTimeout(function () {
                scrollTime = true;
            }, 1000);
        }

    });


    function homeDown() {
        if (index == homeMax - 1 || scrollTime == false) {
            return;
        }
        scrollTime = false;
        $menuDotMenu.eq(index).find('a').removeClass("active");
        index++;
        $bghome.eq(index).css("top", "0");
        $menuDotMenu.eq(index).find('a').addClass("active");
        setTimeout(function () {
            scrollTime = true;
        }, 1000);

    }

    function homeUp() {
        if (index == 0 || scrollTime == false) {
            return;
        }
        scrollTime = false;
        $bghome.eq(index).css("top", "100%");
        $menuDotMenu.eq(index).find('a').removeClass("active");
        index--;
        $bghome.eq(index).css("top", "0");
        $menuDotMenu.eq(index).find('a').addClass("active");
        setTimeout(function () {
            scrollTime = true;
        }, 1000);

    }


    $("#senti-1").click(function () {
        $("#name_sentiment").text('LA JOIE');
    });

    $("#senti-2").click(function () {
        $("#name_sentiment").text('PEUR');
    });

    $("#senti-3").click(function () {
        $("#name_sentiment").text('TRISTESSE');
    });

    $("#senti-4").click(function () {
        $("#name_sentiment").text('AMOUR');
    });

    $("#senti-5").click(function () {
        $("#name_sentiment").text('COLERE');
    });

    $(".button_section_player").click(function () {
        homeDown();

    });


});

