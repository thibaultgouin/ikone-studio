$(document).ready(function () {



    // function youtube API


    var callYoutube = function (playerDivId, youtubeVideoId, name) {
        /*
              // 2. This code loads the IFrame Player API code asynchronously.
              var tag = document.createElement('script');

              tag.src = "https://www.youtube.com/iframe_api";
              var firstScriptTag = document.getElementsByTagName('script')[0];
              firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        */
        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var player;
        var player2;
        onYouTubeIframeAPIReady();

        function onYouTubeIframeAPIReady() {
            player = new YT.Player(playerDivId, {
                height: '390'
                , width: '640'
                , videoId: youtubeVideoId
                , events: {
                    'onStateChange': onPlayerStateChange
                }
            });
        }


        // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event) {
            console.log("READY");
            event.target.playVideo();
        }

        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.
        var done = false;

        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING && !done) {
                done = true;
            }
        }

        function stopVideo() {
            player.stopVideo();
        }


    }
    
    //API YOUTUBE

    // Firebase ref
    var ref = new Firebase("https://ykone.firebaseio.com/video");
    
    ref.limitToLast(2).on("child_added", function (snapshot) {
        var obj = snapshot.val();
        var key = snapshot.key();
        console.log("CHILD_ADDED LIMIT TO LAST", obj.youtubeVideoId, obj.name);
        callYoutube('player', obj.youtubeVideoId, obj.name);
    });

    ref.limitToLast(1).on("child_added", function (snapshot) {
        var obj = snapshot.val();
        var key = snapshot.key();
        console.log("CHILD_ADDED LIMIT TO LAST", obj.youtubeVideoId, obj.name);
        callYoutube('player2', obj.youtubeVideoId, obj.name);
    });
    

    ref.orderByChild('value').on("child_added", function (snapshot) {
        var obj = snapshot.val();
        var key = snapshot.key();
        var button = $('<button class="delete button alert" type="delete" data-key=' + key + '>'+ "Supprimer la video" +'</button>').hide().prependTo($('#list')).fadeIn('slow');
        var li = $('<li id='+ obj.genre +'>' + obj.name + '</li>');
        $('#liste_videos').prepend(button);
        $('#liste_videos').prepend(li);
    });

    $('#list').on('click', '.delete', function() {
    console.log('qerewrew');
    var dataKey = $(this).data("key");
    console.log(dataKey);

////////SUPPRIMER POST (A TRAVAILLER)////////
        
    ref.remove();
        
    ref.on('child_removed', function(oldChildSnapshot) {
    console.log('removed key' + oldChildSnapshot.key());
  });
   
    $(this).closest('#list').fadeOut(function(){
      $(this).remove();
    });
    taskCount();
  });
    
    function taskCount(){
    var taskAmount = $('.listItem').length;
    $('.taskCount').html(taskAmount);
  }
////////FIN SUPPRIMER POST (A TRAVAILLER)////////
        
////////UPLOAD FICHIER////////

    $("#upload").on("submit", function (e) {
        e.preventDefault();
        var url = $("#url").val();
        var video_name = $('#video_name').val();
        var genre = $("#genre").val();

        ref.push({
            youtubeVideoId: url,
            name: video_name,
            genre: genre
        });
});
    
////////FIN UPLOAD FICHIER////////
    
    

    });