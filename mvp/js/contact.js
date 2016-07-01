$(document).ready(function(){


    // Firebase ref
    var ref = new Firebase("https://ykone.firebaseio.com/messages");

    $("#contactForm").on("submit", function(e) {
        e.preventDefault();
        var email = $("#email").val();
        var objet = $("#objet").val();
        var nom = $("#name").val();
        var prenom = $("#prenom").val();
        var message = $("#message").val();

        ref.push({
            email: email,
            objet: objet,
            nom: nom,
            prenom: prenom,
            message: message
        });

       
    });

    $("#contactForm").on('keyup', function(){
        verif_champ();
    });

    function verif_champ()
    {
        if (
            ($("#nom").val().length > 0 )
            && ($("#prenom").val().length > 0 )
            && ($("#email").val().length > 0 )
            && ($("#objet").val().length > 0 )
            && ($("#message").val().length > 0)
        ){
$('#submitContactForm').removeAttr('disabled').removeClass('disabled');

        }else{
            $('#submitContactForm').attr('disabled', 'disabled').addClass('disabled');
        }


    }

});