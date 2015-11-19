/**
 * Created by helenamosbaek on 19/11/15.
 */
//$(document).ready(function () {

    $("#registerForm").validate({
        rules: {
            firstName: "required",
            lastName: "required",
            username: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 4
            },
            confirm_password: {
                required: true,
                minlength: 4,
                equalTo: "#confirm_password" == "#password"
            },
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            firstName: "Woops! Enter your first name",
            lastName: "Woops! Enter your last name",
            username: {
                required: "Woops! Enter a username",
                minlength: "Woops! The username must be at least 2 characters"
            },
            password: {
                required: "Woops! Enter a password",
                minlength: "Woops! The password must be at least 4 characters"
            },
            confirm_password: {
                required: "Woops! Confirm your password",
                minlength: "Woops! Your password must be at least 4 characters",
                equalTo: "Woops! Did you already forget your password?"
            },
            }
    });

    $("#username").focus(function () {
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        if (firstName && lastName && !this.value) {
            this.value = firstName + lastName;
        }
    });
//});

