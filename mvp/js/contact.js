$(document).ready(function(){


    // Firebase ref
    var ref = new Firebase("https://ykone.firebaseio.com/messages");

    $("#contactForm").on("submit", function(e) {
        e.preventDefault();
        var email = $("#email").val();
        var objet = $("#objet").val();
        var nom = $("#nom").val();
        var prenom = $("#prenom").val();
        var message = $("#message").val();

        ref.push({
            email: email,
            objet: objet,
            nom: nom,
            prenom: prenom,
            message: message
        });

         swal({   title: "MERCI",   text: "Votre inscription a bien été prise en compte",   timer: 3000,   showConfirmButton: false });
        setTimeout(function () {
            window.location.href = "index.html"; //will redirect to your blog page (an ex: blog.html)
        } , 3000); //will call the function after 2 secs.;

       
    });

    ////// FORMULAIRE DYNAMIQUE ///////

    var InputFocusIn = function (labelID) {
        $(labelID).removeClass("unfocused");
        $(labelID).addClass("focused");
    };

    var InputFocusOut = function (inputID, labelID) {
        if(!$(inputID).val()) {
            $(inputID).addClass("unfocused");
            $(inputID).removeClass("focused");
            $(inputID).removeClass("valid-content");
        } else {
            $(inputID).addClass("valid-content");
        }
    };

    $("#nom").focus( function() {
        InputFocusIn("#nom");
    });
    $("#prenom").focus( function() {
        InputFocusIn("#prenom");
    });
    $("#email").focus( function() {
        InputFocusIn("#email");
    });

    $("#objet").focus( function() {
        InputFocusIn("#objet");
    });

    $("#message").focus( function() {
        InputFocusIn('#message');
    })

    $("#nom").focusout( function() {
        InputFocusOut("#nom");
    });
    $("#prenom").focusout( function() {
        InputFocusOut("#prenom");
    });
    $("#email").focusout( function() {
        InputFocusOut("#email");
    });

    $("#objet").focusout( function() {
        InputFocusOut("#objet");
    });

    $("#message").focusout( function() {
        InputFocusOut("#message");
    });


    //////// FIN FORMULAIRE DYNAMIQUE ////////


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