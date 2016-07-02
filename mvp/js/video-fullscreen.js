$(function () {

        $('body').on('webkitfullscreenchange mozfullscreenchange fullscreenchange', '.video-js', function (e) {
            var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
            var event = state ? 'FullscreenOn' : 'FullscreenOff';
            if (event == 'FullscreenOn') {
                console.log('play');
                ($(this).find('video').first())[0].play();
            } else {
                ($(this).find('video').first())[0].pause();
                console.log('pause');
            }
        });


        function playVideoFullscreen(id) {
            var video = document.getElementById(id);
            //var video = document.querySelector('#'+ id +' video');
            // go full-screen
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }
        }

        $('#startVideoBtn').on('click', function () {
            playVideoFullscreen('vid1')
        });

    })