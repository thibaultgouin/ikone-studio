$(function () {

    var lastFullscreenPlayer;

    $(document).on('mozfullscreenchange webkitfullscreenchange fullscreenchange', function (e) {
        let element = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
        if (!element) {
            console.log('pause');
            lastFullscreenPlayer.pause();
        } else {
            console.log('play');
            lastFullscreenPlayer && lastFullscreenPlayer.pause();
            lastFullscreenPlayer = ($(element).find('video').first())[0];
            lastFullscreenPlayer.play();
        }
    });


    function playVideoFullscreen(id) {
        var video = document.getElementById(id);
        //var video = document.querySelector('#'+ id +' video');
        // go full-screen
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    }

        $('#startVideoBtn').on('click', function () {
            playVideoFullscreen('vid1')
        });

    ///// DEBUT ROMANTIQUE //////////


    $('#play-dirty-dancing').on('click', function () {
        playVideoFullscreen('dirty-dancing')
    });

    $('#play-notebook').on('click', function () {
        playVideoFullscreen('notebook')
    });

    $('#play-pretty-woman').on('click', function () {
        playVideoFullscreen('pretty-woman')
    });

    ///// FIN ROMANTIQUE //////////

    ///// DEBUT CAPITAINE //////////


    $('#play-pirates').on('click', function () {
        playVideoFullscreen('pirates')
    });

    $('#play-gladiator').on('click', function () {
        playVideoFullscreen('gladiator')
    });

    $('#play-300').on('click', function () {
        playVideoFullscreen('300')
    });

    ///// FIN CAPITAINE //////////

    })