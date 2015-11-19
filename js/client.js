//sender et event. Venter til dokumentet er færdig og så skyder den en funktion
$(document).ready(function () {

    //login menu udkast

    $("#login").click(function(){
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
        success: function(data) {
            window.location.href='userMenu.html';
        },

        error: function() {
            alert("Wrong username or password. Try again")
        }
    });
    });

    $("#register").click(function(){
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var username = $("#username").val();
        var password = $("#password").val();
        var email = $("#email").val();

        console.log(firstName, lastName, username, password, email);

        var newuserdata = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password,
            email: email
        };
        console.log(JSON.stringify(data));

        $.ajax({
            type: "POST",
            url: "http://localhost:8888/api/users",
            data: JSON.stringify(newuserdata),
            succes: function(newuserdata) {
             //   alert("Welcome to the best game ever!")
           //     window.location.href='loginMenu.html';
         //   },
        //    error: function() {
         //       alert("Something went wrong. Try again")
        //    }
     //   });



    });


});


