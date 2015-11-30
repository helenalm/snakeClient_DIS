//sender et event. Venter til dokumentet er færdig og så skyder den en funktion
$(document).ready(function () {

    //login menu

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
                $.session.set('userID', data.userid);
                console.log(data);
                window.location.href = 'userMenu.html';
            },

            error: function () {
                alert("Wrong username or password. Try again")
            }
        });
    });

    // create user
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
            success: function (data) {
                alert("Welcome to the best game ever!");
                window.location.href = 'loginMenu.html';
            },
            error: function () {
                alert("Something went wrong. Try again")
            }
        });
    });

    // create game
    $("#creategame").click(function () {
        var creategame = {
            name: $("#gameName").val(),
            host: {
                id: $.session.get('userID'),
                controls: $("#hostcontrols").val()
            },
            mapSize: $("#mapSize").val()
        };

        $.ajax({
            type: "POST",
            url: "http://localhost:8888/api/games",
            data: JSON.stringify(creategame),
            success: function (data) {
                $.session.get('userID');
                window.location.href = 'userMenu.html';
            },

            error: function () {
                alert("Something went wrong. Try again")
            }
        })
    });

    // delete game
    $("#deleteGame").click(function () {
        var gameid = $("#gameID").val();
        hostid: $.session.get('userID');

        $.ajax({
            type: "POST",
            url: "http://localhost:8888/api/games/" + gameid,
            //data: JSON.stringify(deleteGame),
            succes: function (data) {
                alert("Game was deleted!");
            },

            error: function () {
                alert("Something went wrong. Try again")
            }
        })
    });

    // join game
    $("#joinGame").click(function () {
        var joingame = {
            gameId: $("#gameID").val(),
            opponent: {
                id: $.session.get('userID')
            }
        };

    $.ajax({
        type: "POST",
        url: "http://localhost:8888/api/games/join/",
        data: JSON.stringify(joingame),
        success: function (data) {
            //$.session.set('gameID', data.game);
            alert("Sådan!");
        },

        error: function () {
            alert("Something went wrong. Try again")
        }
    })
});

    // Start game
    $("#startGame").click(function () {
        var startgame = {
            gameId: $("#gameid").val(),
            opponent: {
                //id: $.session.get('userID'),
                controls: $("#opponentcontrols").val()
            }
        };

        $.ajax({
            type: "POST",
            url: "http://localhost:8888/api/games/start/",
            data: JSON.stringify(startgame),
            success: function (data) {
                $.session.get('gameID'),
                alert("Cool! Take a look, maybe you reached the leaderboard");
            },

            error: function () {
                alert("Something went wrong. Try again")
            }
        })
    });
    // highscore
});
