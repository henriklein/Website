//Contact
$('#contactForm').submit(function() {


    var action = $(this).attr('action');

    console.log(action);

    $("#formMessage").slideUp(750, function() {
        $('#formMessage').hide();
        $('#submit').attr('disabled', 'disabled');

        $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                comments: $('#comments').val(),
            },
            function(data) {
                document.getElementById('message').innerHTML = data;
                $('#formMessage').slideDown('slow');
                $('#submit').removeAttr('disabled');
                if (data.match('success') != null) {
                    console.log("success");
                }
            }
        );

    });
    return false;
});