//sender et event. Venter til dokumentet er færdig og så skyder den en funktion
$(document).ready(function () {

    //login menu udkast

    $("#login").click(function () {
        var username = $("#username").val();
        var password = $("#password").val();

        console.log(username, password);

        var data = {
            username: username,
            password: password
        };
        console.log(JSON.stringify(data));

        $.ajax({
            type: "POST",
            url: "http://localhost:8888/api/login",
            data: JSON.stringify(data),
            success: function (data) {
                window.location.href = 'userMenu.html';
            },

            error: function () {
                alert("Wrong username or password. Try again")
            }
        });
    });

    $("#newuser").click(function () {
        var Firstname = $("#firstName").val();
        var Lastname = $("#lastName").val();
        var Username = $("#username").val();
        var Password = $("#password").val();
        var Email = $("#email").val();

        //console.log(firstName, lastName, username, password, email);

        var user = {
            firstName: Firstname,
            lastName: Lastname,
            username: Username,
            password: Password,
            email: Email
        };
        //console.log(JSON.stringify(data));

        $.ajax({
            type: "POST",
            url: "http://localhost:8888/api/users",
            data: JSON.stringify(user),
            success:function(data) {
                alert("Welcome to the best game ever!");
                window.location.href = 'loginMenu.html';
            },
            error: function () {
                alert("Something went wrong. Try again")
            }
        });
    });
});