$(document).ready(function () {

    $("#playNow").click(function () {


        $.ajax({
            type: "GET",
            url: "http://localhost:9998/api/user",
            success: function (msg) {
                console.log(msg);
            }
        });

    });

    $("#registerForm").validate({
        rules: {
            firstName: "required",
            lastName: "required",
            userName: {
                required: true,
                minlenght: 2
            },
            password: {
                required: true,
                minlenght: 4
            },
            confirm_password: {
                required: true,
                minlenght: 4,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            firstName: "Woops! Enter your first name",
            lastName: "Woops! Enter your last name",
            userName: {
                required: "Woops! Enter a username",
                minlenght: "Woops! The username must be at least 2 characters"
            },
            password: {
                required: "Woops! Enter a password",
                minlenght: "Woops! The password must be at least 4 characters"
            },
            confirm_password: {
                required: "Woops! Confirm your password",
                minlenght: "Woops! Your password must be at least 4 characters",
                equalTo: "Woops! Did you already forget your password?"
            },
            email: {
                required: "Woops! Enter an email",
                email: "Woops! Enter a REAL email"
            }
        }
    });

    $("#userName").focus(function() {
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        if (firstName && lastName && !this.value) {
            this.value = firstName + lastName;
        }
    });

});

$("#registerForm").validator();
