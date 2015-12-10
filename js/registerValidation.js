// when document is ready a function will accrue
$(document).ready(function () {

    /* the form in the register menu is validated by these data.
    the rules is that firstname, lastname, username, password and email is required.
    username has to be 2 char long, password 4 char long, and email have to be an email.
    confirm password has to be equal to password */
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
            }
        },

        // here the messages that will accrue if the above isn't accepted
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
            }
            }
    });

    /* this function suggest an username based on first- and lastname.
    when you go to the username input, then it will find the information that is
    in firstname and lastname. Firstname, lastname and this value makes this value
    equal to firstname and lastname */
    $("#username").focus(function () {
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        if (firstName && lastName && !this.value) {
            this.value = firstName + lastName;
        }
    });
});

