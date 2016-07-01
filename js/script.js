$(document).ready(function () {



    /* ######## HOME PAGE ######## */

    /* ####### LOADER######## */
    $(window).load(function () {

        setTimeout(function () {
            $("#loading_home").css("margin-left", "100%");
            $bghome.eq(index).addClass("current");
        }, 1000);//2000

    });

});