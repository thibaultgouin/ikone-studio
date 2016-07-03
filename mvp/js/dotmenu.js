$(document).ready(function () {


        $(".mod-navigation .nav-icon").click(function(){
            $(".mod-navigation").hasClass("open") ? ($(".menuList a").animate({
                left: "0px"
            }, 100), $(".mod-navigation").removeClass("open")) : ($(".menuList a").animate({
                left: "0"
            }, 100), $(".mod-navigation").addClass("open"))



        });



    });





