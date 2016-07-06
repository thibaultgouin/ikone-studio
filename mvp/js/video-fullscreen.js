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
            playVideoFullscreen('vid1');
            $('#vid1').css('display','block');
            $('#vid1 video').css('display','block');
        });

    ///// DEBUT ROMANTIQUE //////////


    $('#play-dirty-dancing').on('click', function () {
        playVideoFullscreen('dirty-dancing');
        $('#dirty-dancing').css('display','block');
        $('#dirty-dancing video').css('display','block');
    });

    $('#play-titanic').on('click', function () {
        playVideoFullscreen('titanic');
        $('#titanic').css('display','block');
        $('#titanic video').css('display','block');
    });

    $('#play-belle-bete').on('click', function () {
        playVideoFullscreen('belle-bete');
        $('#belle-bete').css('display','block');
        $('#belle-bete video').css('display','block');
    });

    ///// FIN ROMANTIQUE //////////

    ///// DEBUT CAPITAINE //////////


    $('#play-pirates').on('click', function () {
        playVideoFullscreen('pirates');
        $('#pirates').css('display','block');
        $('#pirates video').css('display','block');
    });

    $('#play-gladiator').on('click', function () {
        playVideoFullscreen('gladiator');
        $('#gladiator').css('display','block');
        $('#gladiator video').css('display','block');
    });

    $('#play-300').on('click', function () {
        playVideoFullscreen('300');
        $('#300').css('display','block');
        $('#300 video').css('display','block');
    });

    ///// FIN CAPITAINE //////////

    ///// DEBUT FANATIQUE //////////


    $('#play-rocky').on('click', function () {
        playVideoFullscreen('rocky');
        $('#rocky').css('display','block');
        $('#rocky video').css('display','block');
    });

    $('#play-never-back').on('click', function () {
        playVideoFullscreen('never-back')
        $('#never-back').css('display','block');
        $('#never-back video').css('display','block');
    });

    $('#play-steppin').on('click', function () {
        playVideoFullscreen('steppin')
        $('#steppin').css('display','block');
        $('#steppin video').css('display','block');
    });

    ///// FIN FANATIQUE //////////

    ///// DEBUT JUSTICIER //////////


    $('#play-superman').on('click', function () {
        playVideoFullscreen('superman')
        $('#superman').css('display','block');
        $('#superman video').css('display','block');
    });

    $('#play-indiana').on('click', function () {
        playVideoFullscreen('indiana');
        $('#indiana').css('display','block');
        $('#indiana video').css('display','block');
    });

    $('#play-dredd').on('click', function () {
        playVideoFullscreen('dredd');
        $('#dredd').css('display','block');
        $('#dredd video').css('display','block');
    });

    ///// FIN JUSTICIER //////////

    ///// DEBUT MENTOR //////////


    $('#play_matrix').on('click', function () {
        playVideoFullscreen('matrix');
        $('#matrix').css('display','block');
        $('#matrix video').css('display','block');
    });

    $('#play_ipman').on('click', function () {
        playVideoFullscreen('ipman');
        $('#ipman').css('display','block');
        $('#ipman video').css('display','block');
    });

    $('#play_gran_torino').on('click', function () {
        playVideoFullscreen('gran-torino');
        $('#gran-torino').css('display','block');
        $('#gran-torino video').css('display','block');
    });

    ///// FIN MENTOR //////////

    ///// DEBUT PSYCHOPATHE //////////


    $('#play-american-psycho').on('click', function () {
        playVideoFullscreen('american-psycho');
        $('#american-psycho').css('display','block');
        $('#american-psycho video').css('display','block');
    });

    $('#play-orange').on('click', function () {
        playVideoFullscreen('orange');
        $('#orange').css('display','block');
        $('#orange video').css('display','block');
    });

    $('#play-shining').on('click', function () {
        playVideoFullscreen('shining');
        $('#shining').css('display','block');
        $('#shining video').css('display','block');
    });

    ///// FIN PSYCHOPATHE //////////

    })