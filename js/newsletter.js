$(document).ready(function(){


    // Firebase ref
    var ref = new Firebase("https://ykone.firebaseio.com/users");

    $("#signup-form").on("submit", function(e) {
        e.preventDefault();
        var email = $("#email").val();

        ref.push({
            email: email
        });

        $("#signup-form").hide();
       /* swal({   title: "MERCI",   text: "Votre inscription a bien été prise en compte",   timer: 3000,   showConfirmButton: false }); */
        setTimeout(function () {
            window.location.href = "index.html"; //will redirect to your blog page (an ex: blog.html)
        }/* , 3000 */); //will call the function after 2 secs.;



    });

});